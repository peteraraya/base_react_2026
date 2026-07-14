import { useTranslation } from 'react-i18next';
import { cvData } from '@/data/cv';
import { AboutMeSection } from '@/components/cv/AboutMeSection';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageTransition } from '@/components/animations/PageTransition';

export function AboutPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'es' ? 'es' : 'en';
  const data = cvData[currentLang];

  return (
    <PageTransition>
    <div className="max-w-4xl mx-auto p-4 sm:p-8 space-y-8">
      <FadeIn delay={0.1}>
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">{t('about.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t('about.description')}
          </p>
        </div>
      </FadeIn>

      {data.aboutMe && (
        <FadeIn delay={0.2}>
          <AboutMeSection 
            data={data.aboutMe}
            title={currentLang === 'es' ? 'Sobre mí' : 'About Me'}
          />
        </FadeIn>
      )}
    </div>
    </PageTransition>
  )
}
