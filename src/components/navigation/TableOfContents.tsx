import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export interface Section {
  id: string;
  labelEs: string;
  labelEn: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'es' ? 'es' : 'en';
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Encontrar la sección más visible
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' } 
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Ajustar la posición de scroll para considerar el header si lo hay o un pequeño margen
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (sections.length === 0) return null;

  return (
    <nav className="hidden xl:block fixed left-4 2xl:left-12 top-1/2 -translate-y-1/2 z-40 w-48 xl:w-56 print:hidden">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
          {currentLang === 'es' ? 'Índice' : 'Contents'}
        </h3>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`text-sm text-left w-full transition-all duration-200 hover:translate-x-1 ${
                  activeSection === section.id
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                {currentLang === 'es' ? section.labelEs : section.labelEn}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
