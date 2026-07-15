import { createRouter, createRootRoute, createRoute, Outlet, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { CoursesPage } from '@/pages/CoursesPage'
import { JobAnalyzerPage } from '@/pages/JobAnalyzerPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ToastContainer } from '@/components/feedback/ToastContainer'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { CommandPalette } from '@/components/ui/CommandPalette'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { cvData } from '@/data/cv'
import { motion, useScroll, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const RootComponent = () => {
  const { t, i18n } = useTranslation();
  const { scrollYProgress, scrollY } = useScroll();
  const cv = cvData[i18n.language as keyof typeof cvData] || cvData.es;
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 400) {
        controls.start({ opacity: 1, y: 0, pointerEvents: 'auto' });
      } else {
        controls.start({ opacity: 0, y: 20, pointerEvents: 'none' });
      }
    });
  }, [scrollY, controls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-300 print:bg-white print:text-black">
      {/* Barra de Progreso de Lectura */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 dark:bg-blue-500 origin-left z-50 print:hidden"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b dark:border-gray-800 shadow-sm sticky top-0 z-40 transition-colors duration-300 print:hidden">
        <div className="max-w-6xl mx-auto flex flex-row items-center overflow-x-auto no-scrollbar relative">
          
          <div className="flex flex-col shrink-0 px-4 py-3 sticky left-0 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-r border-gray-100 dark:border-gray-800 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg md:text-xl text-gray-800 dark:text-gray-100 tracking-tight leading-tight whitespace-nowrap">
                {cv.name}
              </h1>
              {/* Indicador de "Disponible para trabajar" */}
              <div className="group relative flex items-center justify-center cursor-help" title={i18n.language === 'es' ? 'Disponible para nuevas oportunidades' : 'Available for new opportunities'}>
                <span className="absolute inline-flex h-2.5 w-2.5 animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">
              {cv.role}
            </p>
          </div>
          
          <div className="flex flex-row items-center gap-4 sm:gap-6 px-4 py-3 shrink-0 ml-auto">
            <nav className="flex flex-row items-center gap-4 sm:gap-6 text-sm sm:text-base whitespace-nowrap">
              <Link to="/" className="[&.active]:font-semibold [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/about" className="[&.active]:font-semibold [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/projects" className="[&.active]:font-semibold [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
                {t('nav.projects')}
              </Link>
              <Link to="/courses" className="[&.active]:font-semibold [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
                {t('nav.courses')}
              </Link>
              <Link to="/job-analyzer" className="[&.active]:font-semibold [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
                {t('nav.analyzer')}
              </Link>
              <Link to="/contact" className="[&.active]:font-semibold [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
                {t('nav.contact')}
              </Link>
            </nav>
            <div className="flex flex-row items-center gap-2 pl-2 border-l border-gray-200 dark:border-gray-700">
              {/* Hint para el Command Palette */}
              <button 
                onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
                className="hidden md:flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-2"
                title={i18n.language === 'es' ? 'Abrir paleta de comandos' : 'Open command palette'}
              >
                <span className="text-[10px]">⌘</span>K
              </button>
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>

        </div>
      </header>
      <main className="flex-1 max-w-6xl mx-auto w-full print:max-w-none print:w-full print:m-0 print:p-0">
        <Outlet />
      </main>
      <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800 py-6 mt-auto text-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 print:hidden">
        &copy; {new Date().getFullYear()} {t('footer.rights')}
      </footer>

      {/* Botón Scroll to Top flotante */}
      <motion.button
        initial={{ opacity: 0, y: 20, pointerEvents: 'none' }}
        animate={controls}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-colors duration-300 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 print:hidden"
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      <ToastContainer />
      <CommandPalette />
      <CustomCursor />
    </div>
  );
};

const rootRoute = createRootRoute({
  component: RootComponent,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
})

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: ProjectsPage,
})

const coursesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/courses',
  component: CoursesPage,
})

const analyzerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/job-analyzer',
  component: JobAnalyzerPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  projectsRoute,
  coursesRoute,
  analyzerRoute,
  contactRoute,
])

export const router = createRouter({ 
  routeTree,
  defaultNotFoundComponent: NotFoundPage,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
