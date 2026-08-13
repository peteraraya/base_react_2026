import { PageTransition } from '@/components/animations/PageTransition';
import { useTranslation } from 'react-i18next';
import { Cpu, Code2, Terminal, Laptop } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

export function UsesPage() {
  const { i18n } = useTranslation();
  const isEs = i18n.language === 'es';

  const categories = [
    {
      title: isEs ? 'Estación de Trabajo' : 'Workstation',
      icon: <Laptop className="w-6 h-6 text-blue-500" />,
      items: [
        { name: 'MacBook Pro 16" (M2 Max)', desc: isEs ? '64GB RAM, 2TB SSD para desarrollo pesado' : '64GB RAM, 2TB SSD for heavy dev' },
        { name: 'Monitor LG 34" Ultrawide', desc: isEs ? 'Resolución 4K, 144Hz' : '4K Resolution, 144Hz' },
        { name: 'Teclado Keychron K3 V2', desc: isEs ? 'Low profile, switches mecánicos red' : 'Low profile, red mechanical switches' },
        { name: 'Ratón Logitech MX Master 3S', desc: isEs ? 'Ergonómico y con scroll infinito' : 'Ergonomic with infinite scroll' },
      ]
    },
    {
      title: 'Desarrollo & Editor',
      icon: <Code2 className="w-6 h-6 text-emerald-500" />,
      items: [
        { name: 'Visual Studio Code', desc: isEs ? 'Editor principal (Insiders build)' : 'Main editor (Insiders build)' },
        { name: 'Tema: One Dark Pro', desc: isEs ? 'Mi tema favorito por años' : 'My favorite theme for years' },
        { name: 'Fuente: Fira Code', desc: isEs ? 'Con ligaduras habilitadas' : 'With ligatures enabled' },
        { name: 'Extensiones clave', desc: 'ESLint, Prettier, GitHub Copilot, GitLens, Error Lens' }
      ]
    },
    {
      title: 'Terminal & CLI',
      icon: <Terminal className="w-6 h-6 text-purple-500" />,
      items: [
        { name: 'Warp Terminal', desc: isEs ? 'Terminal moderna con IA integrada' : 'Modern terminal with AI' },
        { name: 'Zsh + Oh My Zsh', desc: 'Shell principal' },
        { name: 'Starship', desc: isEs ? 'Prompt rápido y personalizable' : 'Fast, customizable prompt' },
        { name: 'Herramientas CLI', desc: 'Homebrew, NVM, pnpm, Docker, git' }
      ]
    },
    {
      title: 'Software & Herramientas',
      icon: <Cpu className="w-6 h-6 text-amber-500" />,
      items: [
        { name: 'Raycast', desc: isEs ? 'Reemplazo de Spotlight, imprescindible' : 'Spotlight replacement, a must-have' },
        { name: 'Figma', desc: isEs ? 'Para UI/UX y revisión de diseños' : 'For UI/UX and design review' },
        { name: 'Notion', desc: isEs ? 'Organización y documentación personal' : 'Personal organization & docs' },
        { name: 'Postman / Insomnia', desc: 'Testing de APIs' }
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              /uses
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {isEs 
                ? 'Una lista detallada del hardware, software y herramientas que utilizo en mi día a día como desarrollador de software.'
                : 'A detailed list of the hardware, software, and tools I use daily as a software developer.'}
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-full">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                    <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {category.title}
                    </h2>
                  </div>
                  
                  <ul className="space-y-6">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="group">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          {item.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              </FadeIn>
            ))}
          </div>

          <footer className="text-center pt-8 border-t border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">
            <p>
              {isEs 
                ? 'Inspirado en la iniciativa uses.tech de Wes Bos.'
                : 'Inspired by Wes Bos uses.tech initiative.'}
            </p>
          </footer>
        </div>
      </div>
    </PageTransition>
  );
}
