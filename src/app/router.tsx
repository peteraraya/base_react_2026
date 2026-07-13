import { createRouter, createRootRoute, createRoute, Outlet, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { ToastContainer } from '@/components/feedback/ToastContainer'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const RootComponent = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-300">
      <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 shadow-sm sticky top-0 z-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl text-gray-800 dark:text-gray-100 tracking-tight">{t('header.portfolio')}</h1>
          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              <Link to="/" className="[&.active]:font-semibold [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/about" className="[&.active]:font-semibold [&.active]:text-blue-600 dark:[&.active]:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
                {t('nav.about')}
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
      <main className="flex-1 max-w-6xl mx-auto w-full">
        <Outlet />
      </main>
      <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800 py-6 mt-auto text-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
        &copy; {new Date().getFullYear()} {t('footer.rights')}
      </footer>
      <ToastContainer />
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

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  contactRoute,
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
