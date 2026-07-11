import { create } from 'zustand'

export type ToastType = 'success' | 'error' | 'info' | 'warning'

export type Toast = {
  id: string
  message: string
  type: ToastType
}

type UIState = {
  toasts: Toast[]
  addToast: (message: string, type: ToastType) => void
  removeToast: (id: string) => void
}

export const useUIStore = create<UIState>((set) => ({
  toasts: [],
  addToast: (message, type) => {
    const id = crypto.randomUUID()
    set((state) => ({ toasts: [...state.toasts, { id, message, type }] }))
    setTimeout(() => {
      set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }))
    }, 3000)
  },
  removeToast: (id) =>
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
}))