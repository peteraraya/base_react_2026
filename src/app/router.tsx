import { createRouter, createRootRoute, createRoute, Outlet, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { CoursesPage } from '@/pages/CoursesPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ToastContainer } from '@/components/feedback/ToastContainer'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { CommandPalette } from '@/components/ui/CommandPalette'
import { motion, useScroll, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const RootComponent = () => {
  const { t } = useTranslation();
  const { scrollYProgress, scrollY } = useScroll();
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

      <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 shadow-sm sticky top-0 z-40 transition-colors duration-300 print:hidden">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="font-bold text-xl text-gray-800 dark:text-gray-100 tracking-tight">{t('header.portfolio')}</h1>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full md:w-auto justify-center md:justify-end">
            <nav className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base">
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
              <Link to="/contact" className="[&.active]:font-semibold [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
                {t('nav.contact')}
              </Link>
            </nav>
            <ThemeToggle />
            <LanguageSwitcher />
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

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  projectsRoute,
  coursesRoute,
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
