import { Palette, Monitor, TerminalSquare, Layout, Zap, Layers, Box } from 'lucide-react';
import { useUIStore, Theme } from '@/stores/uiStore';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeSwitcher() {
  const { theme, setTheme } = useUIStore();
  const { i18n } = useTranslation();
  const isEs = i18n.language === 'es';
  const [isOpen, setIsOpen] = useState(false);

  const themes: { id: Theme; icon: any; label: string }[] = [
    { id: 'modern', icon: Monitor, label: isEs ? 'Moderno' : 'Modern' },
    { id: 'minimal', icon: Layout, label: isEs ? 'Minimalista' : 'Minimal' },
    { id: 'brutalism', icon: Box, label: isEs ? 'Brutalismo' : 'Brutalism' },
    { id: 'cyberpunk', icon: Zap, label: 'Cyberpunk' },
    { id: 'glassmorphism', icon: Layers, label: isEs ? 'Glass (Transparente)' : 'Glassmorphism' },
    { id: 'retro', icon: TerminalSquare, label: isEs ? 'Win98 (Retro)' : 'Win98 (Retro)' },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 print:hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-16 left-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-2 flex flex-col gap-1 min-w-[140px]"
          >
            <div className="px-3 py-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-100 dark:border-gray-700 mb-1">
              {isEs ? 'Plantilla' : 'Template'}
            </div>
            {themes.map((t) => {
              const Icon = t.icon;
              const isActive = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors w-full text-left
                    ${isActive 
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {t.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-105 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300"
        aria-label={isEs ? 'Cambiar Tema' : 'Change Theme'}
        title={isEs ? 'Personalizar Diseño (Zustand State)' : 'Customize Design (Zustand State)'}
      >
        <Palette className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      </button>
    </div>
  );
}
