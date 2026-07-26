import { createRouter, createRootRoute, createRoute, Outlet, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { CoursesPage } from '@/pages/CoursesPage'
import { JobAnalyzerPage } from '@/pages/JobAnalyzerPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ApiDocsPage } from '@/pages/ApiDocsPage'
import { HireMePage } from '@/pages/HireMePage'
import { DesignSystemPage } from '@/pages/DesignSystemPage'
import { ToastContainer } from '@/components/feedback/ToastContainer'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { CommandPalette } from '@/components/ui/CommandPalette'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { AIChatWidget } from '@/components/ui/AIChatWidget'
import { VSCodeMode } from '@/components/ui/VSCodeMode'
import { cvData } from '@/data/cv'
import { useUIStore } from '@/stores/uiStore'
import { motion, useScroll, useAnimationControls, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowUp, Menu, X } from 'lucide-react'
import { useEasterEgg } from '@/hooks/useEasterEgg'
import { SystemStatus } from '@/components/ui/SystemStatus'

const RootComponent = () => {
  useEasterEgg();
  const { t, i18n } = useTranslation();
  const { scrollYProgress, scrollY } = useScroll();
  const cv = cvData[i18n.language as keyof typeof cvData] || cvData.es;
  const controls = useAnimationControls();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleVsCodeMode } = useUIStore();

  const [level, setLevel] = useState(1);
  const [showLevelUp, setShowLevelUp] = useState(false);

  // Gamification logic
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const newLevel = Math.min(99, Math.floor(latest * 100) + 1);
      if (newLevel > level && newLevel % 25 === 0) {
        setShowLevelUp(true);
        setTimeout(() => setShowLevelUp(false), 2000);
      }
      setLevel(newLevel);
    });
  }, [scrollYProgress, level]);

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
    <div className="min-h-[100dvh] bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-300 print:bg-white print:text-black relative z-0">
      {/* Background Code Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.04] dark:opacity-[0.05] print:hidden"
        style={{ backgroundImage: 'url("/img/code-bg.svg")', backgroundSize: '600px' }}
      />
      {/* Gamified XP Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-gray-200 dark:bg-gray-800 z-50 print:hidden overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="absolute right-2 top-2 text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 bg-white/80 dark:bg-black/80 px-2 py-0.5 rounded shadow-sm backdrop-blur-sm">
          Lv. {level}
        </div>
      </div>

      <AnimatePresence>
        {showLevelUp && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 20, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-12 left-1/2 -translate-x-1/2 z-[100] bg-yellow-400 text-yellow-900 font-black px-6 py-2 rounded-full shadow-2xl border-2 border-yellow-200 text-sm tracking-widest uppercase print:hidden"
          >
            Level Up!
          </motion.div>
        )}
      </AnimatePresence>

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
              <Link to="/api-docs" className="[&.active]:font-semibold [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors font-mono">
                API Docs
              </Link>
              <Link to="/hire-me" className="[&.active]:font-semibold [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                {i18n.language === 'es' ? 'Propuesta de Valor' : 'Value Proposition'}
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
              <button 
                onClick={toggleVsCodeMode}
                className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors mr-2 border border-blue-200 dark:border-blue-800"
                title={i18n.language === 'es' ? 'Modo VS Code' : 'VS Code Mode'}
              >
                {'</>'}
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
                <Link to="/api-docs" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-md [&.active]:bg-blue-50 dark:[&.active]:bg-blue-900/20 [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-mono">
                  API Docs
                </Link>
                <Link to="/hire-me" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-md [&.active]:bg-blue-50 dark:[&.active]:bg-blue-900/20 [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  {i18n.language === 'es' ? 'Propuesta de Valor' : 'Value Proposition'}
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
      <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800 py-6 mt-auto text-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 print:hidden flex flex-col items-center justify-center gap-4">
        <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-500 bg-green-50 dark:bg-green-500/10 px-3 py-1 rounded-full border border-green-200 dark:border-green-500/20">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
            {i18n.language === 'es' ? 'Comprometido con la Accesibilidad Web' : 'Committed to Web Accessibility'}
          </div>
          <SystemStatus />
        </div>
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
      <AIChatWidget />
      <VSCodeMode />
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

const apiDocsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/api-docs',
  component: ApiDocsPage,
})

const hireMeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/hire-me',
  component: HireMePage,
})

const dsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/design-system',
  component: DesignSystemPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  projectsRoute,
  coursesRoute,
  analyzerRoute,
  apiDocsRoute,
  hireMeRoute,
  dsRoute,
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
