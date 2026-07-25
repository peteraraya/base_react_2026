import { motion } from 'framer-motion';
import { Database, Server, Globe, Smartphone, Cloud, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ArchitectureDiagram() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const title = lang === 'es' ? 'Arquitectura: Plataforma de Teleconsulta' : 'Architecture: Telehealth Platform';
  const desc = lang === 'es' 
    ? 'Diagrama del ecosistema de servicios (Video, WebSockets y Almacenamiento GCP) para consultas médicas en tiempo real.'
    : 'Ecosystem diagram (Video, WebSockets, and GCP Storage) for real-time medical consultations.';

  const Node = ({ icon: Icon, label, delay }: { icon: React.ElementType, label: string, delay: number }) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex flex-col items-center gap-2"
    >
      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm border-2 border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
        <Icon className="w-8 h-8" />
      </div>
      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-center max-w-[80px] leading-tight">
        {label}
      </span>
    </motion.div>
  );

  const Connection = ({ delay }: { delay: number }) => (
    <motion.div 
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: 40 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="hidden sm:flex items-center text-gray-300 dark:text-gray-600"
    >
      <div className="h-0.5 flex-1 bg-current" />
      <ArrowRight className="w-4 h-4 shrink-0 -ml-2" />
    </motion.div>
  );

  return (
    <div className="mt-8 mb-4 bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
      <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{title}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">{desc}</p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2">
        
        {/* Client Layer */}
        <div className="flex flex-col gap-4 p-4 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl relative">
          <span className="absolute -top-3 left-4 bg-gray-50 dark:bg-gray-900 px-2 text-xs font-mono text-gray-400">Frontend</span>
          <Node icon={Globe} label="Portal Pacientes" delay={0.1} />
          <Node icon={Globe} label="Portal Médicos" delay={0.2} />
        </div>

        <Connection delay={0.4} />

        {/* Node.js / Express Backend Layer */}
        <div className="flex flex-col gap-4 p-4 border border-dashed border-purple-300 dark:border-purple-900/50 rounded-xl relative bg-purple-50/50 dark:bg-purple-900/10">
          <span className="absolute -top-3 left-4 bg-purple-50 dark:bg-gray-900 px-2 text-xs font-mono text-purple-500">Backend API</span>
          <Node icon={Server} label="Node.js Express" delay={0.5} />
          <Node icon={Globe} label="Socket.io" delay={0.6} />
        </div>

        <Connection delay={0.7} />

        {/* External Services Layer */}
        <div className="flex flex-col gap-4 p-4 border border-dashed border-blue-300 dark:border-blue-900/50 rounded-xl relative bg-blue-50/50 dark:bg-blue-900/10">
          <span className="absolute -top-3 left-4 bg-blue-50 dark:bg-gray-900 px-2 text-xs font-mono text-blue-500">Services</span>
          <Node icon={Smartphone} label="Agora Video" delay={0.8} />
          <Node icon={Cloud} label="GCP Storage" delay={0.9} />
        </div>

        <Connection delay={1.0} />

        {/* Data Layer */}
        <div className="flex flex-col gap-4 p-4 border border-dashed border-green-300 dark:border-green-900/50 rounded-xl relative bg-green-50/50 dark:bg-green-900/10">
          <span className="absolute -top-3 left-4 bg-green-50 dark:bg-gray-900 px-2 text-xs font-mono text-green-500">Database</span>
          <Node icon={Database} label="MongoDB" delay={1.1} />
        </div>

      </div>
    </div>
  );
}
