import { Accessibility, Type, Eye, Link, FastForward, Check } from 'lucide-react';
import { useUIStore } from '@/stores/uiStore';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AccessibilityWidget() {
  const { accessibility, updateAccessibility } = useUIStore();
  const { i18n } = useTranslation();
  const isEs = i18n.language === 'es';
  const [isOpen, setIsOpen] = useState(false);

  const toggleHighContrast = () => updateAccessibility({ highContrast: !accessibility.highContrast });
  const toggleHighlightLinks = () => updateAccessibility({ highlightLinks: !accessibility.highlightLinks });
  const toggleDyslexicFont = () => updateAccessibility({ dyslexicFont: !accessibility.dyslexicFont });
  const toggleReduceMotion = () => updateAccessibility({ reduceMotion: !accessibility.reduceMotion });
  const increaseFontSize = () => updateAccessibility({ fontSize: Math.min(accessibility.fontSize + 10, 200) });
  const decreaseFontSize = () => updateAccessibility({ fontSize: Math.max(accessibility.fontSize - 10, 100) });

  return (
    <div className="fixed bottom-6 left-24 z-50 print:hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-16 left-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 flex flex-col gap-2 min-w-[280px]"
          >
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-2 mb-2">
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
                {isEs ? 'Accesibilidad' : 'Accessibility'}
              </span>
            </div>

            {/* Font Size */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-gray-50 dark:bg-gray-700/50">
              <span className="text-sm font-medium flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Type className="w-4 h-4" /> {isEs ? 'Tamaño de Texto' : 'Text Size'}
              </span>
              <div className="flex items-center gap-2">
                <button onClick={decreaseFontSize} className="w-6 h-6 flex items-center justify-center bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 font-bold">-</button>
                <span className="text-xs font-mono">{accessibility.fontSize}%</span>
                <button onClick={increaseFontSize} className="w-6 h-6 flex items-center justify-center bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 font-bold">+</button>
              </div>
            </div>

            {/* Toggles */}
            {[
              { id: 'highContrast', icon: Eye, label: isEs ? 'Alto Contraste' : 'High Contrast', state: accessibility.highContrast, toggle: toggleHighContrast },
              { id: 'highlightLinks', icon: Link, label: isEs ? 'Resaltar Enlaces' : 'Highlight Links', state: accessibility.highlightLinks, toggle: toggleHighlightLinks },
              { id: 'dyslexicFont', icon: Type, label: isEs ? 'Fuente para Dislexia' : 'Dyslexia Font', state: accessibility.dyslexicFont, toggle: toggleDyslexicFont },
              { id: 'reduceMotion', icon: FastForward, label: isEs ? 'Reducir Movimiento' : 'Reduce Motion', state: accessibility.reduceMotion, toggle: toggleReduceMotion },
            ].map((option) => (
              <button
                key={option.id}
                onClick={option.toggle}
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-colors w-full text-left
                  ${option.state 
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 border border-transparent'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <option.icon className="w-4 h-4" />
                  {option.label}
                </div>
                {option.state && <Check className="w-4 h-4" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-105 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300"
        aria-label={isEs ? 'Accesibilidad' : 'Accessibility'}
        title={isEs ? 'Opciones de Accesibilidad Web' : 'Web Accessibility Options'}
      >
        <Accessibility className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </button>
    </div>
  );
}
