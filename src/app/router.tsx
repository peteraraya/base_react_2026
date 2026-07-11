import { createRouter, createRootRoute, createRoute, Outlet, redirect } from '@tanstack/react-router'
import { ProductsPage } from '@/pages/products/ProductsPage'
import { useAuthStore } from '@/stores/authStore'
import { ToastContainer } from '@/components/feedback/ToastContainer'

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white border-b p-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">My App</h1>
        <button 
          onClick={() => {
            const s = useAuthStore.getState()
            if (s.isAuthenticated) s.logout()
            else s.setAuth({ id: '1', email: 'test@test.com', name: 'Test' }, 'token')
          }}
          className="text-sm underline"
        >
          {useAuthStore((s: any) => s.isAuthenticated) ? 'Logout' : 'Login'}
        </button>
      </header>
      <main>
        <Outlet />
      </main>
      <ToastContainer />
    </div>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <div className="p-8">
      <h2 className="text-xl mb-4">Bienvenido</h2>
      <a href="/products" className="text-blue-600 underline">Ir a productos</a>
    </div>
  ),
})

const protectedRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'protected',
  beforeLoad: () => {
    if (!useAuthStore.getState().isAuthenticated) {
      throw redirect({ to: '/' })
    }
  },
})

const productsRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/products',
  component: ProductsPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  protectedRoute.addChildren([productsRoute]),
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}