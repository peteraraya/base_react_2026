import { useUIStore } from '@/stores/uiStore';
import { useTranslation } from 'react-i18next';
import { ShieldAlert, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieConsentBanner() {
  const { hasAcceptedCookies, acceptCookies } = useUIStore();
  const { i18n } = useTranslation();
  const isEs = i18n.language === 'es';

  return (
    <AnimatePresence>
      {!hasAcceptedCookies && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 print:hidden"
        >
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-2xl flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-full shrink-0 text-blue-600 dark:text-blue-400">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {isEs ? 'Privacidad y Ley N° 19.628' : 'Privacy & Law N° 19.628'}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {isEs 
                    ? 'Este portafolio utiliza cookies estrictamente necesarias (Local Storage) para guardar tus preferencias de accesibilidad y diseño, en cumplimiento con la normativa chilena sobre Protección de la Vida Privada.' 
                    : 'This portfolio uses strictly necessary cookies (Local Storage) to save your accessibility and design preferences, in compliance with Chilean regulations on Privacy Protection.'}
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-1">
              <button 
                onClick={acceptCookies}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                {isEs ? 'Entendido' : 'Understood'}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
