import { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Opcionalmente, puedes cambiar este link por tu username real de Cal.com
  calLink?: string; 
}

export function CalendarModal({ isOpen, onClose, calLink = "peerric/15min" }: CalendarModalProps) {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: window.document.documentElement.classList.contains('dark') ? "dark" : "light",
        styles: { branding: { brandColor: "#7c3aed" } }, // Purple-600 to match our UI
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  // Cierra el modal con la tecla Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 print:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-900/60 dark:bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#111111] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-200 dark:border-gray-800"
          >
            {/* Header del Modal */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                {i18n.language === 'es' ? 'Agendar Videollamada' : 'Schedule a Video Call'}
              </h3>
              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Cerrar calendario"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenedor de Cal.com */}
            <div className="flex-1 overflow-y-auto no-scrollbar bg-gray-50 dark:bg-[#111111] p-2 sm:p-4">
              <Cal 
                calLink={calLink}
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: 'month_view' }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
