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
import { ArticlesSection } from '@/components/cv/ArticlesSection';
import { CoursesSection } from '@/components/cv/CoursesSection';
import { LanguagesSection } from '@/components/cv/LanguagesSection';
import { ShowcaseSection } from '@/components/cv/ShowcaseSection';
import { BestPracticesSection } from '@/components/cv/BestPracticesSection';
import { ImpactMetrics } from '@/components/cv/ImpactMetrics';
import { LighthouseScore } from '@/components/cv/LighthouseScore';
import { GitHubStats } from '@/components/cv/GitHubStats';
import { CodeReviewSection } from '@/components/cv/CodeReviewSection';
import { useState, useMemo, lazy, Suspense } from 'react';
import { FileText, Zap, Loader2 } from 'lucide-react';
import { TableOfContents, type Section } from '@/components/navigation/TableOfContents';

// Lazy load heavy components for better initial load performance (Lighthouse/TBT)
const ArchitectureDiagram = lazy(() => import('@/components/cv/ArchitectureDiagram').then(m => ({ default: m.ArchitectureDiagram })));
const TerminalSection = lazy(() => import('@/components/cv/TerminalSection').then(m => ({ default: m.TerminalSection })));
const GitHubCalendar = lazy(() => import('react-github-calendar').then(m => ({ default: m.GitHubCalendar })));

const FallbackLoader = () => (
  <div className="w-full h-48 flex items-center justify-center bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
    <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
  </div>
);

export function HomePage() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'es' ? 'es' : 'en';
  const data = cvData[currentLang];
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);

  const searchParams = new URLSearchParams(window.location.search);
  const company = searchParams.get('empresa');

  const calendarLabels = currentLang === 'es' ? {
    totalCount: '{{count}} contribuciones en el último año',
    legend: {
      less: 'Menos',
      more: 'Más',
    },
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    weekdays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
  } : undefined;

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
    // if (!isRecruiterMode && data.testimonials) {
    //   sections.push({ id: 'testimonials', labelEs: 'Testimonios', labelEn: 'Testimonials' });
    // }
    if (!isRecruiterMode) {
      sections.push({ id: 'case-studies', labelEs: 'Casos de Estudio', labelEn: 'Case Studies' });
    }
    sections.push({ id: 'experience', labelEs: 'Experiencia', labelEn: 'Experience' });
    sections.push({ id: 'skills', labelEs: 'Habilidades', labelEn: 'Skills' });
    sections.push({ id: 'projects', labelEs: 'Proyectos', labelEn: 'Projects' });
    if (!isRecruiterMode && data.articles) {
      sections.push({ id: 'articles', labelEs: 'Artículos', labelEn: 'Articles' });
    }
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
        
        {company && (
          <FadeIn delay={0.05}>
            <div className="bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8 text-center animate-pulse">
              <h2 className="text-lg md:text-xl font-bold text-blue-800 dark:text-blue-300">
                {currentLang === 'es' 
                  ? `👋 ¡Hola equipo de ${company}! Sería un honor aportar con mis habilidades a su equipo.`
                  : `👋 Hello ${company} team! It would be an honor to bring my skills to your team.`}
              </h2>
            </div>
          </FadeIn>
        )}

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

      {/* {!isRecruiterMode && data.testimonials && (
        <FadeIn delay={0.26} id="testimonials">
          <TestimonialsSection testimonials={data.testimonials} />
        </FadeIn>
      )} */}

      {!isRecruiterMode && (
        <FadeIn delay={0.28} id="case-studies">
          <CaseStudiesSection />
        </FadeIn>
      )}

      {!isRecruiterMode && (
        <FadeIn delay={0.29}>
          <Suspense fallback={<FallbackLoader />}>
            <ArchitectureDiagram />
          </Suspense>
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

      {!isRecruiterMode && (
        <FadeIn delay={0.35}>
          <GitHubStats />
        </FadeIn>
      )}

      {!isRecruiterMode && (
        <FadeIn delay={0.38}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center overflow-x-auto transition-colors duration-300">
            <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-gray-100 w-full text-left">
              {currentLang === 'es' ? 'Historial de Commits' : 'Commit History'}
            </h3>
            <div className="w-full flex justify-center text-gray-800 dark:text-gray-200 min-h-[150px]">
              <Suspense fallback={<FallbackLoader />}>
                <GitHubCalendar 
                  username="peteraraya" 
                  fontSize={12}
                  blockMargin={4}
                  blockSize={12}
                  labels={calendarLabels}
                />
              </Suspense>
            </div>
          </div>
        </FadeIn>
      )}

      <FadeIn delay={0.4} id="projects">
        <ProjectsSection 
          projects={data.projects} 
          title={currentLang === 'es' ? 'Proyectos Destacados' : 'Featured Projects'} 
        />
      </FadeIn>

      {!isRecruiterMode && data.articles && (
        <FadeIn delay={0.42} id="articles">
          <ArticlesSection articles={data.articles} />
        </FadeIn>
      )}

      {!isRecruiterMode && (
        <FadeIn delay={0.45} id="showcase">
          <ShowcaseSection lang={currentLang} />
        </FadeIn>
      )}

      {!isRecruiterMode && (
        <FadeIn delay={0.46}>
          <CodeReviewSection />
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
              <Suspense fallback={<FallbackLoader />}>
                <TerminalSection />
              </Suspense>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.8}>
          <LighthouseScore />
        </FadeIn>
      </main>
    </div>
    </PageTransition>
  );
}
