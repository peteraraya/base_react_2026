import { useTranslation } from 'react-i18next';
import { cvData } from '@/data/cv';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageTransition } from '@/components/animations/PageTransition';

import { HeroSection } from '@/components/cv/HeroSection';
import { SummarySection } from '@/components/cv/SummarySection';
import { AboutMeSection } from '@/components/cv/AboutMeSection';
import { CaseStudiesSection } from '@/components/cv/CaseStudiesSection';
import { ExperienceSection } from '@/components/cv/ExperienceSection';
import { ProjectsSection } from '@/components/cv/ProjectsSection';
import { SkillsSection } from '@/components/cv/SkillsSection';
import { EducationSection } from '@/components/cv/EducationSection';
import { CoursesSection } from '@/components/cv/CoursesSection';
import { LanguagesSection } from '@/components/cv/LanguagesSection';
import { ShowcaseSection } from '@/components/cv/ShowcaseSection';
import { BestPracticesSection } from '@/components/cv/BestPracticesSection';
import { TerminalSection } from '@/components/cv/TerminalSection';
import { ImpactMetrics } from '@/components/cv/ImpactMetrics';
import { useState } from 'react';
import { FileText, Zap } from 'lucide-react';

export function HomePage() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'es' ? 'es' : 'en';
  const data = cvData[currentLang];
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);

  return (
    <PageTransition>
    <div className="relative min-h-screen print:min-h-0">
      
      {/* Recruiter Mode Toggle Floating */}
      <div className="fixed top-24 right-4 z-30 print:hidden">
        <button
          onClick={() => setIsRecruiterMode(!isRecruiterMode)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-lg border transition-all duration-300 font-medium text-sm ${
            isRecruiterMode 
              ? 'bg-blue-600 text-white border-blue-500 hover:bg-blue-700' 
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
          title={currentLang === 'es' ? 'Modo Reclutador (TL;DR)' : 'Recruiter Mode (TL;DR)'}
        >
          {isRecruiterMode ? <Zap className="w-4 h-4 text-yellow-300" /> : <FileText className="w-4 h-4" />}
          <span className="hidden sm:inline">{currentLang === 'es' ? 'Modo Reclutador' : 'Recruiter Mode'}</span>
        </button>
      </div>

      {/* Elemento decorativo de fondo suave */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-50/80 dark:from-blue-900/20 to-transparent -z-10 pointer-events-none transition-colors duration-300 print:hidden" aria-hidden="true" />
      
      <main className="max-w-4xl mx-auto p-4 sm:p-8 space-y-16 relative z-0 print:p-0 print:space-y-8">
        <FadeIn delay={0.1}>
        <HeroSection data={data} />
      </FadeIn>

      <FadeIn delay={0.15}>
        <ImpactMetrics />
      </FadeIn>

      {!isRecruiterMode && (
        <FadeIn delay={0.2}>
          <SummarySection 
            summary={data.summary} 
            title={currentLang === 'es' ? 'Resumen Profesional' : 'Professional Summary'} 
          />
        </FadeIn>
      )}

      {!isRecruiterMode && data.aboutMe && (
        <FadeIn delay={0.25}>
          <AboutMeSection 
            data={data.aboutMe}
            title={currentLang === 'es' ? 'Sobre mí' : 'About Me'}
          />
        </FadeIn>
      )}

      {!isRecruiterMode && (
        <FadeIn delay={0.28}>
          <CaseStudiesSection />
        </FadeIn>
      )}

      <FadeIn delay={0.3}>
        <ExperienceSection 
          experiences={data.experience} 
          title={currentLang === 'es' ? 'Experiencia Profesional' : 'Professional Experience'} 
        />
      </FadeIn>

      <FadeIn delay={0.5}>
        <SkillsSection 
          skills={data.skills} 
          title={currentLang === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'} 
        />
      </FadeIn>

      <FadeIn delay={0.4}>
        <ProjectsSection 
          projects={data.projects} 
          title={currentLang === 'es' ? 'Proyectos Destacados' : 'Featured Projects'} 
        />
      </FadeIn>

      {!isRecruiterMode && (
        <FadeIn delay={0.45}>
          <ShowcaseSection lang={currentLang} />
        </FadeIn>
      )}

      {!isRecruiterMode && data.bestPractices && (
        <FadeIn delay={0.48}>
          <BestPracticesSection 
            practices={data.bestPractices} 
            title={currentLang === 'es' ? 'Buenas Prácticas de Desarrollo' : 'Development Best Practices'} 
          />
        </FadeIn>
      )}

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

        {!isRecruiterMode && (
          <FadeIn delay={0.75}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight flex items-center gap-2">
                {currentLang === 'es' ? 'Terminal Interactiva' : 'Interactive Terminal'}
              </h2>
              <TerminalSection />
            </div>
          </FadeIn>
        )}
      </main>
    </div>
    </PageTransition>
  );
}
