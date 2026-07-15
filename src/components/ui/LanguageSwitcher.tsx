import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'es' ? 'es' : 'en';

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('portfolio_lang', lang);
  };

  return (
    <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-1.5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-inner">
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1 text-xs font-bold rounded-md transition-all duration-300 ${
          currentLang === 'es'
            ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-xs font-bold rounded-md transition-all duration-300 ${
          currentLang === 'en'
            ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
