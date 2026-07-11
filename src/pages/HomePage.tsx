import { useTranslation } from 'react-i18next';

export function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{t('home.title')}</h1>
      <p className="text-gray-600 mb-6">
        {t('home.subtitle')}
      </p>
    </div>
  )
}
