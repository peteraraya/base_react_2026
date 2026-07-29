import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Activity, Server, Database, Globe, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function SystemStatus() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/20 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-colors"
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        {lang === 'es' ? 'Sistemas Operativos' : 'All Systems Operational'}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-full right-0 sm:left-1/2 sm:-translate-x-1/2 mb-4 w-72 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl rounded-xl p-4 z-50 text-left print:hidden"
            >
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-500" />
                  <span className="font-bold text-gray-900 dark:text-white text-sm">System Status</span>
                </div>
                <span className="text-xs text-gray-500 font-mono">Uptime: 99.99%</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Globe className="w-4 h-4 text-gray-400" /> Frontend (React)
                  </div>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Server className="w-4 h-4 text-gray-400" /> API Gateway
                  </div>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Database className="w-4 h-4 text-gray-400" /> Database (PostgreSQL)
                  </div>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 text-center flex justify-between">
                <span>Last deploy: 2 hours ago</span>
                <span className="text-blue-500">v1.1.09</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
