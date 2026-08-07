import { create } from 'zustand'

export type ToastType = 'success' | 'error' | 'info' | 'warning'

export type Toast = {
  id: string
  message: string
  type: ToastType
}

export type Theme = 'modern' | 'retro' | 'minimal' | 'cyberpunk' | 'glassmorphism' | 'brutalism' | 'high-contrast'

type AccessibilitySettings = {
  fontSize: number; // 100 to 200
  highContrast: boolean;
  highlightLinks: boolean;
  dyslexicFont: boolean;
  reduceMotion: boolean;
}

type UIState = {
  toasts: Toast[]
  addToast: (message: string, type: ToastType) => void
  removeToast: (id: string) => void
  isVsCodeMode: boolean
  toggleVsCodeMode: () => void
  isRetroMode: boolean
  setRetroMode: (isRetro: boolean) => void
  theme: Theme
  setTheme: (theme: Theme) => void
  accessibility: AccessibilitySettings;
  updateAccessibility: (settings: Partial<AccessibilitySettings>) => void;
  hasAcceptedCookies: boolean;
  acceptCookies: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  toasts: [],
  theme: 'modern',
  accessibility: {
    fontSize: 100,
    highContrast: false,
    highlightLinks: false,
    dyslexicFont: false,
    reduceMotion: false,
  },
  hasAcceptedCookies: localStorage.getItem('ley_19628_consent') === 'true',
  acceptCookies: () => {
    localStorage.setItem('ley_19628_consent', 'true');
    set({ hasAcceptedCookies: true });
  },
  updateAccessibility: (settings) => set((state) => {
    const newSettings = { ...state.accessibility, ...settings };
    
    // Apply logic immediately to DOM
    if (newSettings.fontSize !== state.accessibility.fontSize) {
      document.documentElement.style.fontSize = `${newSettings.fontSize}%`;
    }
    if (newSettings.highContrast !== state.accessibility.highContrast) {
      if (newSettings.highContrast) {
        document.documentElement.classList.add('theme-high-contrast');
      } else {
        document.documentElement.classList.remove('theme-high-contrast');
      }
    }
    if (newSettings.highlightLinks !== state.accessibility.highlightLinks) {
      if (newSettings.highlightLinks) document.documentElement.classList.add('a11y-highlight-links');
      else document.documentElement.classList.remove('a11y-highlight-links');
    }
    if (newSettings.dyslexicFont !== state.accessibility.dyslexicFont) {
      if (newSettings.dyslexicFont) document.documentElement.classList.add('a11y-dyslexic-font');
      else document.documentElement.classList.remove('a11y-dyslexic-font');
    }
    if (newSettings.reduceMotion !== state.accessibility.reduceMotion) {
      if (newSettings.reduceMotion) document.documentElement.classList.add('a11y-reduce-motion');
      else document.documentElement.classList.remove('a11y-reduce-motion');
    }

    return { accessibility: newSettings };
  }),
  setTheme: (theme) => {
    set({ theme });
    // Remove previous theme classes
    document.documentElement.classList.remove('theme-retro', 'theme-minimal', 'theme-modern', 'theme-cyberpunk', 'theme-glassmorphism', 'theme-brutalism', 'theme-high-contrast');
    document.documentElement.classList.add(`theme-${theme}`);
    
    // Legacy support for retro-mode
    if (theme === 'retro') {
      document.documentElement.classList.add('retro-mode');
      set({ isRetroMode: true });
    } else {
      document.documentElement.classList.remove('retro-mode');
      set({ isRetroMode: false });
    }
  },
  isVsCodeMode: false,
  toggleVsCodeMode: () => set((state) => ({ isVsCodeMode: !state.isVsCodeMode })),
  isRetroMode: false,
  setRetroMode: (isRetro) => {
    set({ isRetroMode: isRetro, theme: isRetro ? 'retro' : 'modern' });
    if (isRetro) {
      document.documentElement.classList.add('retro-mode');
      document.documentElement.classList.add('theme-retro');
      document.documentElement.classList.remove('theme-modern', 'theme-minimal', 'theme-cyberpunk', 'theme-glassmorphism', 'theme-brutalism', 'theme-high-contrast');
    } else {
      document.documentElement.classList.remove('retro-mode');
      document.documentElement.classList.remove('theme-retro', 'theme-minimal', 'theme-cyberpunk', 'theme-glassmorphism', 'theme-brutalism', 'theme-high-contrast');
      document.documentElement.classList.add('theme-modern');
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