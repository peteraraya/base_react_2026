import { useTranslation } from 'react-i18next';
import { cvData } from '@/data/cv';
import { FadeIn } from '@/components/animations/FadeIn';

import { HeroSection } from '@/components/cv/HeroSection';
import { SummarySection } from '@/components/cv/SummarySection';
import { ExperienceSection } from '@/components/cv/ExperienceSection';
import { ProjectsSection } from '@/components/cv/ProjectsSection';
import { SkillsSection } from '@/components/cv/SkillsSection';
import { EducationSection } from '@/components/cv/EducationSection';
import { LanguagesSection } from '@/components/cv/LanguagesSection';
import { ShowcaseSection } from '@/components/cv/ShowcaseSection';

export function HomePage() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'es' ? 'es' : 'en';
  const data = cvData[currentLang];

  return (
    <div className="relative min-h-screen">
      {/* Elemento decorativo de fondo suave */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-50/80 to-transparent -z-10 pointer-events-none" aria-hidden="true" />
      
      <main className="max-w-4xl mx-auto p-4 sm:p-8 space-y-16 relative z-0">
        <FadeIn delay={0.1}>
        <HeroSection data={data} />
      </FadeIn>

      <FadeIn delay={0.2}>
        <SummarySection 
          summary={data.summary} 
          title={currentLang === 'es' ? 'Resumen Profesional' : 'Professional Summary'} 
        />
      </FadeIn>

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
  );
}
