import { useTranslation } from 'react-i18next';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageTransition } from '@/components/animations/PageTransition';
import { CoursesSection } from '@/components/cv/CoursesSection';
import { cvData } from '@/data/cv';

export function CoursesPage() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language === 'es' || i18n.language === 'en') ? i18n.language : 'es';
  const data = cvData[currentLang];

  return (
    <PageTransition>
    <div className="max-w-6xl mx-auto p-4 sm:p-8 space-y-8">
      <FadeIn delay={0.1}>
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
            {t('courses.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl">
            {t('courses.description')}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <CoursesSection courses={data.courses || []} title={t('courses.title')} />
      </FadeIn>
    </div>
    </PageTransition>
  );
}
