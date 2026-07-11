import { useUIStore } from '@/stores/uiStore'

export function ToastContainer() {
  const toasts = useUIStore((s) => s.toasts)
  const removeToast = useUIStore((s) => s.removeToast)

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => {
        const bgColors = {
          success: 'bg-green-600',
          error: 'bg-red-600',
          info: 'bg-blue-600',
          warning: 'bg-yellow-600',
        }

        return (
          <div
            key={toast.id}
            className={`flex items-center justify-between px-4 py-3 rounded text-white shadow-lg ${bgColors[toast.type]} min-w-[200px]`}
          >
            <span>{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-4 text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>
        )
      })}
    </div>
  )
}