import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/api/queryClient'
import { router } from '@/app/router'
import '@/styles/globals.css'
import '@/lib/i18n'

// Performance Metrics Reporter
if (typeof window !== 'undefined') {
  setTimeout(() => {
    try {
      const paintMetrics = performance.getEntriesByType('paint');
      const fcp = paintMetrics.find(m => m.name === 'first-contentful-paint');
      if (fcp) {
        console.log(
          `%c⚡ Performance Report%c\nFirst Contentful Paint (FCP): %c${fcp.startTime.toFixed(2)}ms`,
          "color: #10b981; font-size: 14px; font-weight: bold;",
          "color: inherit;",
          fcp.startTime < 1000 ? "color: #10b981; font-weight: bold;" : "color: #f59e0b; font-weight: bold;"
        );
      }
    } catch {
      // Ignorar si no está soportado
    }
  }, 3000);
}

// Console Easter Egg for Recruiters
console.log(
  "%c👋 ¡Hola! ¿Revisando el código? 🚀\n%cSi estás buscando a un desarrollador proactivo, que escriba código limpio y con atención al detalle, ¡hablemos!\n%c✉️ piteraraya@gmail.com",
  "color: #3b82f6; font-size: 20px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);",
  "color: #10b981; font-size: 14px; margin-top: 5px; font-weight: bold;",
  "color: #8b5cf6; font-size: 14px; margin-top: 5px; text-decoration: underline;"
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)