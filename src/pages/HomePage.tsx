import { useTranslation } from 'react-i18next';
import { cvData } from '@/data/cv';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageTransition } from '@/components/animations/PageTransition';

import { HeroSection } from '@/components/cv/HeroSection';
import { SummarySection } from '@/components/cv/SummarySection';
import { AboutMeSection } from '@/components/cv/AboutMeSection';
import { ExperienceSection } from '@/components/cv/ExperienceSection';
import { ProjectsSection } from '@/components/cv/ProjectsSection';
import { SkillsSection } from '@/components/cv/SkillsSection';
import { EducationSection } from '@/components/cv/EducationSection';
import { CoursesSection } from '@/components/cv/CoursesSection';
import { LanguagesSection } from '@/components/cv/LanguagesSection';
import { ShowcaseSection } from '@/components/cv/ShowcaseSection';
import { BestPracticesSection } from '@/components/cv/BestPracticesSection';

export function HomePage() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'es' ? 'es' : 'en';
  const data = cvData[currentLang];

  return (
    <PageTransition>
    <div className="relative min-h-screen print:min-h-0">
      {/* Elemento decorativo de fondo suave */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-50/80 dark:from-blue-900/20 to-transparent -z-10 pointer-events-none transition-colors duration-300 print:hidden" aria-hidden="true" />
      
      <main className="max-w-4xl mx-auto p-4 sm:p-8 space-y-16 relative z-0 print:p-0 print:space-y-8">
        <FadeIn delay={0.1}>
        <HeroSection data={data} />
      </FadeIn>

      <FadeIn delay={0.2}>
        <SummarySection 
          summary={data.summary} 
          title={currentLang === 'es' ? 'Resumen Profesional' : 'Professional Summary'} 
        />
      </FadeIn>

      {data.aboutMe && (
        <FadeIn delay={0.25}>
          <AboutMeSection 
            data={data.aboutMe}
            title={currentLang === 'es' ? 'Sobre mí' : 'About Me'}
          />
        </FadeIn>
      )}

      <FadeIn delay={0.3}>
        <ExperienceSection 
          experiences={data.experience} 
          title={currentLang === 'es' ? 'Experiencia Profesional' : 'Professional Experience'} 
        />
      </FadeIn>

      <FadeIn delay={0.4}>
        <ProjectsSection 
          projects={data.projects} 
          title={currentLang === 'es' ? 'Proyectos Destacados' : 'Featured Projects'} 
        />
      </FadeIn>

      <FadeIn delay={0.45}>
        <ShowcaseSection lang={currentLang} />
      </FadeIn>

      {data.bestPractices && (
        <FadeIn delay={0.48}>
          <BestPracticesSection 
            practices={data.bestPractices} 
            title={currentLang === 'es' ? 'Buenas Prácticas de Desarrollo' : 'Development Best Practices'} 
          />
        </FadeIn>
      )}

      <FadeIn delay={0.5}>
        <SkillsSection 
          skills={data.skills} 
          title={currentLang === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'} 
        />
      </FadeIn>

        <FadeIn delay={0.6}>
          <EducationSection 
            education={data.education} 
            title={currentLang === 'es' ? 'Educación' : 'Education'} 
          />
        </FadeIn>

        {data.courses && (
          <FadeIn delay={0.65}>
            <CoursesSection 
              courses={data.courses} 
              title={currentLang === 'es' ? 'Cursos y Especialización' : 'Courses & Specialization'} 
            />
          </FadeIn>
        )}

        {data.languages && (
          <FadeIn delay={0.7}>
            <LanguagesSection 
              languages={data.languages} 
              title={currentLang === 'es' ? 'Idiomas' : 'Languages'} 
            />
          </FadeIn>
        )}
      </main>
    </div>
    </PageTransition>
  );
}
