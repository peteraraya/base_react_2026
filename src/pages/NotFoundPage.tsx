import { useTranslation } from 'react-i18next';
import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Home, AlertTriangle } from 'lucide-react';
import { PageTransition } from '@/components/animations/PageTransition';

export function NotFoundPage() {
  const { t, i18n } = useTranslation();
  const isEs = i18n.language === 'es';

  return (
    <PageTransition>
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-4">
        <motion.div
          initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
          className="relative text-blue-600 dark:text-blue-500 mb-8"
        >
          <AlertTriangle className="w-32 h-32 opacity-20 absolute -top-4 -left-4" />
          <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter relative z-10">404</h1>
        </motion.div>
        
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {isEs ? "¡Ups! Te has perdido en el ciberespacio." : "Oops! You got lost in cyberspace."}
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
          {isEs 
            ? "La página que estás buscando no existe, ha sido movida o está temporalmente fuera de servicio." 
            : "The page you are looking for doesn't exist, has been moved, or is temporarily unavailable."}
        </p>

        <Link 
          to="/" 
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 font-medium shadow-sm hover:shadow-md"
        >
          <Home className="w-5 h-5" />
          {t('nav.home', isEs ? 'Volver al Inicio' : 'Back to Home')}
        </Link>
      </div>
    </PageTransition>
  );
}
