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
import { motion, useScroll, useAnimationControls, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowUp, Menu, X } from 'lucide-react'

const RootComponent = () => {
  const { t, i18n } = useTranslation();
  const { scrollYProgress, scrollY } = useScroll();
  const cv = cvData[i18n.language as keyof typeof cvData] || cvData.es;
  const controls = useAnimationControls();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => setIsMobileMenuOpen(false);
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
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

      <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b dark:border-gray-800 shadow-sm sticky top-0 z-40 transition-colors duration-300 print:hidden relative">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          
          {/* Logo / Título */}
          <div className="flex flex-col shrink-0">
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
          
          {/* Navegación y Herramientas (Desktop) */}
          <div className="hidden lg:flex flex-row items-center gap-6">
            <nav className="flex flex-row items-center gap-6 text-sm lg:text-base whitespace-nowrap">
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
            <div className="flex flex-row items-center gap-2 pl-4 border-l border-gray-200 dark:border-gray-700">
              {/* Hint para el Command Palette */}
              <button 
                onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
                className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-2"
                title={i18n.language === 'es' ? 'Abrir paleta de comandos' : 'Open command palette'}
              >
                <span className="text-[10px]">⌘</span>K
              </button>
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>

          {/* Menú y Herramientas (Mobile) */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 ml-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Dropdown Navigation (Mobile) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-gray-100 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-lg z-50"
            >
              <nav className="flex flex-col px-4 py-4 gap-3 text-base font-medium">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-md [&.active]:bg-blue-50 dark:[&.active]:bg-blue-900/20 [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  {t('nav.home')}
                </Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-md [&.active]:bg-blue-50 dark:[&.active]:bg-blue-900/20 [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  {t('nav.about')}
                </Link>
                <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-md [&.active]:bg-blue-50 dark:[&.active]:bg-blue-900/20 [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  {t('nav.projects')}
                </Link>
                <Link to="/courses" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-md [&.active]:bg-blue-50 dark:[&.active]:bg-blue-900/20 [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  {t('nav.courses')}
                </Link>
                <Link to="/job-analyzer" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-md [&.active]:bg-blue-50 dark:[&.active]:bg-blue-900/20 [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  {t('nav.analyzer')}
                </Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-md [&.active]:bg-blue-50 dark:[&.active]:bg-blue-900/20 [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  {t('nav.contact')}
                </Link>
                {/* Command palette button in mobile */}
                <button 
                  onClick={() => {
                    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between px-3 py-2 mt-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700"
                >
                  <span>{i18n.language === 'es' ? 'Paleta de comandos' : 'Command palette'}</span>
                  <div className="flex items-center gap-1 text-xs font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                    <span>⌘</span>K
                  </div>
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
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
  basepath: import.meta.env.BASE_URL,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
