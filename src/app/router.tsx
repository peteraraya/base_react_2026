import { createRouter, createRootRoute, createRoute, Outlet, Link } from '@tanstack/react-router'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ToastContainer } from '@/components/feedback/ToastContainer'

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <header className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl text-gray-800 tracking-tight">Portfolio</h1>
          <nav className="flex gap-6">
            <Link to="/" className="[&.active]:font-semibold [&.active]:text-blue-600 hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link to="/about" className="[&.active]:font-semibold [&.active]:text-blue-600 hover:text-blue-500 transition-colors">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-6xl mx-auto w-full">
        <Outlet />
      </main>
      <footer className="bg-white border-t py-6 mt-auto text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
      </footer>
      <ToastContainer />
    </div>
  ),
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

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
