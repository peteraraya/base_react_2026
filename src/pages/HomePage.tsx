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
import { useState, useMemo } from 'react';
import { FileText, Zap } from 'lucide-react';
import { TableOfContents, type Section } from '@/components/navigation/TableOfContents';

export function HomePage() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'es' ? 'es' : 'en';
  const data = cvData[currentLang];
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);

  const tableOfContentsSections = useMemo<Section[]>(() => {
    const sections: Section[] = [
      { id: 'hero', labelEs: 'Inicio', labelEn: 'Home' },
      { id: 'impact', labelEs: 'Métricas de Impacto', labelEn: 'Impact Metrics' },
    ];
    
    if (!isRecruiterMode) {
      sections.push({ id: 'summary', labelEs: 'Resumen', labelEn: 'Summary' });
    }
    if (!isRecruiterMode && data.aboutMe) {
      sections.push({ id: 'about', labelEs: 'Sobre mí', labelEn: 'About Me' });
    }
    if (!isRecruiterMode) {
      sections.push({ id: 'case-studies', labelEs: 'Casos de Estudio', labelEn: 'Case Studies' });
    }
    sections.push({ id: 'experience', labelEs: 'Experiencia', labelEn: 'Experience' });
    sections.push({ id: 'skills', labelEs: 'Habilidades', labelEn: 'Skills' });
    sections.push({ id: 'projects', labelEs: 'Proyectos', labelEn: 'Projects' });
    if (!isRecruiterMode) {
      sections.push({ id: 'showcase', labelEs: 'Showcase', labelEn: 'Showcase' });
    }
    if (!isRecruiterMode && data.bestPractices) {
      sections.push({ id: 'best-practices', labelEs: 'Buenas Prácticas', labelEn: 'Best Practices' });
    }
    sections.push({ id: 'education', labelEs: 'Educación', labelEn: 'Education' });
    if (data.courses) {
      sections.push({ id: 'courses', labelEs: 'Cursos', labelEn: 'Courses' });
    }
    if (data.languages) {
      sections.push({ id: 'languages', labelEs: 'Idiomas', labelEn: 'Languages' });
    }
    if (!isRecruiterMode) {
      sections.push({ id: 'terminal', labelEs: 'Terminal', labelEn: 'Terminal' });
    }
    return sections;
  }, [isRecruiterMode, data]);

  return (
    <PageTransition>
    <div className="relative min-h-screen print:min-h-0 flex justify-center">
      <TableOfContents sections={tableOfContentsSections} />
      
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
      
      <main className="max-w-4xl w-full mx-auto p-4 sm:p-8 space-y-16 relative z-0 print:p-0 print:space-y-8">
        <FadeIn delay={0.1} id="hero">
        <HeroSection data={data} />
      </FadeIn>

      <FadeIn delay={0.15} id="impact">
        <ImpactMetrics />
      </FadeIn>

      {!isRecruiterMode && (
        <FadeIn delay={0.2} id="summary">
          <SummarySection 
            summary={data.summary} 
            title={currentLang === 'es' ? 'Resumen Profesional' : 'Professional Summary'} 
          />
        </FadeIn>
      )}

      {!isRecruiterMode && data.aboutMe && (
        <FadeIn delay={0.25} id="about">
          <AboutMeSection 
            data={data.aboutMe}
            title={currentLang === 'es' ? 'Sobre mí' : 'About Me'}
          />
        </FadeIn>
      )}

      {!isRecruiterMode && (
        <FadeIn delay={0.28} id="case-studies">
          <CaseStudiesSection />
        </FadeIn>
      )}

      <FadeIn delay={0.3} id="experience">
        <ExperienceSection 
          experiences={data.experience} 
          title={currentLang === 'es' ? 'Experiencia Profesional' : 'Professional Experience'} 
        />
      </FadeIn>

      <FadeIn delay={0.5} id="skills">
        <SkillsSection 
          skills={data.skills} 
          title={currentLang === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'} 
        />
      </FadeIn>

      <FadeIn delay={0.4} id="projects">
        <ProjectsSection 
          projects={data.projects} 
          title={currentLang === 'es' ? 'Proyectos Destacados' : 'Featured Projects'} 
        />
      </FadeIn>

      {!isRecruiterMode && (
        <FadeIn delay={0.45} id="showcase">
          <ShowcaseSection lang={currentLang} />
        </FadeIn>
      )}

      {!isRecruiterMode && data.bestPractices && (
        <FadeIn delay={0.48} id="best-practices">
          <BestPracticesSection 
            practices={data.bestPractices} 
            title={currentLang === 'es' ? 'Buenas Prácticas de Desarrollo' : 'Development Best Practices'} 
          />
        </FadeIn>
      )}

        <FadeIn delay={0.6} id="education">
          <EducationSection 
            education={data.education} 
            title={currentLang === 'es' ? 'Educación' : 'Education'} 
          />
        </FadeIn>

        {data.courses && (
          <FadeIn delay={0.65} id="courses">
            <CoursesSection 
              courses={data.courses} 
              title={currentLang === 'es' ? 'Cursos y Especialización' : 'Courses & Specialization'} 
            />
          </FadeIn>
        )}

        {data.languages && (
          <FadeIn delay={0.7} id="languages">
            <LanguagesSection 
              languages={data.languages} 
              title={currentLang === 'es' ? 'Idiomas' : 'Languages'} 
            />
          </FadeIn>
        )}

        {!isRecruiterMode && (
          <FadeIn delay={0.75} id="terminal">
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
