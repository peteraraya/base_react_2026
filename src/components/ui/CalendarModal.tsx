import { useEffect, useState } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Opcionalmente, puedes cambiar este link por tu username real de Cal.com
  calLink?: string;
  name?: string;
  email?: string;
}

export function CalendarModal({ isOpen, onClose, calLink = "peerric/15min", name, email }: CalendarModalProps) {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (!isOpen) return;

    (async function () {
      const cal = await getCalApi();
      
      // Observador para cambios de tema en el documento
      const updateTheme = () => {
        const isDark = window.document.documentElement.classList.contains('dark');
        cal("ui", {
          theme: isDark ? "dark" : "light",
          styles: { branding: { brandColor: "#7c3aed" } }, // Purple-600
          hideEventTypeDetails: false,
          layout: "month_view"
        });
      };

      // Configuración inicial del tema
      updateTheme();

      // Configurar el evento de linkReady para ocultar el loader
      cal("on", {
        action: "linkReady",
        callback: () => {
          setIsLoading(false);
        }
      });
      cal("on", {
        action: "linkFailed",
        callback: () => {
          setIsLoading(false);
        }
      });

      // Crear un observer para detectar cambios en las clases del <html>
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            updateTheme();
          }
        });
      });
      observer.observe(document.documentElement, { attributes: true });

      return () => observer.disconnect();
    })();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      // Reiniciar el estado de carga al cerrar
      setIsLoading(true);
    }
  }, [isOpen]);

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

        
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
