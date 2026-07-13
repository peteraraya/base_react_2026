import { Languages } from 'lucide-react';
import { Language } from '@/types/cv';

export function LanguagesSection({ languages, title }: { languages: Language[]; title: string }) {
  if (!languages || languages.length === 0) return null;
  return (
    <section className="space-y-6 pb-12" aria-labelledby="languages-heading">
      <header className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2 transition-colors duration-300">
        <Languages className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
        <h2 id="languages-heading" className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">{title}</h2>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {languages.map((lang, idx) => (
          <article key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-center transition-colors duration-300">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">{lang.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{lang.level}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
