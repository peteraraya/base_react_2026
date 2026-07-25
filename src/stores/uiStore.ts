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
  isVsCodeMode: boolean
  toggleVsCodeMode: () => void
  isRetroMode: boolean
  setRetroMode: (isRetro: boolean) => void
}

export const useUIStore = create<UIState>((set) => ({
  toasts: [],
  isVsCodeMode: false,
  toggleVsCodeMode: () => set((state) => ({ isVsCodeMode: !state.isVsCodeMode })),
  isRetroMode: false,
  setRetroMode: (isRetro) => {
    set({ isRetroMode: isRetro });
    if (isRetro) {
      document.documentElement.classList.add('retro-mode');
    } else {
      document.documentElement.classList.remove('retro-mode');
    }
  },
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