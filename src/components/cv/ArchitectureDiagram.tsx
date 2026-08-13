import { motion } from 'framer-motion';
import { Database, Server, Globe, Smartphone, Cloud, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ArchitectureDiagram() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const title = lang === 'es' ? 'Arquitectura: Plataforma Inteligente (PostulaTrack)' : 'Architecture: Smart Platform (PostulaTrack)';
  const desc = lang === 'es' 
    ? 'Diagrama del ecosistema de servicios (IA, Scraping, NestJS y PostgreSQL con pgvector) para la gestión inteligente de empleo.'
    : 'Ecosystem diagram (AI, Scraping, NestJS, and PostgreSQL with pgvector) for intelligent job management.';

  const Node = ({ icon: Icon, label, delay }: { icon: any, label: string, delay: number }) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      drag
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      whileDrag={{ scale: 1.1, zIndex: 50 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center gap-2 cursor-grab active:cursor-grabbing relative z-10"
      title="Drag me!"
    >
      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-xl shadow-md border-2 border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 pointer-events-none">
        <Icon className="w-8 h-8" />
      </div>
      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-center max-w-[80px] leading-tight pointer-events-none">
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
      className="hidden sm:flex items-center text-gray-300 dark:text-gray-600 relative overflow-hidden"
    >
      <div className="h-1 flex-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden relative">
        <motion.div 
          className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{ x: ['-100%', '300%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: delay * 0.5 }}
        />
      </div>
      <ArrowRight className="w-4 h-4 shrink-0 -ml-2 z-10 text-gray-400 dark:text-gray-500" />
    </motion.div>
  );

  return (
    <div className="mt-8 mb-4 bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden relative">
      <div className="absolute top-4 right-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold px-2 py-1 rounded animate-pulse">
        Interactive Playground
      </div>
      <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{title}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">{desc} (Puedes arrastrar los nodos).</p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2">
        
        {/* Client Layer */}
        <div className="flex flex-col gap-4 p-4 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl relative">
          <span className="absolute -top-3 left-4 bg-gray-50 dark:bg-gray-900 px-2 text-xs font-mono text-gray-400">Frontend</span>
          <Node icon={Smartphone} label="Angular 17+ (Signals)" delay={0.1} />
          <Node icon={Globe} label="Tailwind CSS UI" delay={0.2} />
        </div>

        <Connection delay={0.3} />

        {/* NestJS Backend Layer */}
        <div className="flex flex-col gap-4 p-4 border border-dashed border-purple-300 dark:border-purple-900/50 rounded-xl relative bg-purple-50/50 dark:bg-purple-900/10">
          <span className="absolute -top-3 left-4 bg-purple-50 dark:bg-gray-900 px-2 text-xs font-mono text-purple-500">Backend Core</span>
          <Node icon={Server} label="NestJS API" delay={0.4} />
          <Node icon={Cloud} label="Scraping Engine" delay={0.5} />
          <Node icon={Server} label="Match Scoring" delay={0.6} />
        </div>

        <Connection delay={0.7} />

        {/* External Services Layer */}
        <div className="flex flex-col gap-4 p-4 border border-dashed border-blue-300 dark:border-blue-900/50 rounded-xl relative bg-blue-50/50 dark:bg-blue-900/10">
          <span className="absolute -top-3 left-4 bg-blue-50 dark:bg-gray-900 px-2 text-xs font-mono text-blue-500">Integrations</span>
          <Node icon={Globe} label="Google OAuth2" delay={0.8} />
          <Node icon={Cloud} label="AI (ATS Analysis)" delay={0.9} />
        </div>

        <Connection delay={1.0} />

        {/* Data Layer */}
        <div className="flex flex-col gap-4 p-4 border border-dashed border-green-300 dark:border-green-900/50 rounded-xl relative bg-green-50/50 dark:bg-green-900/10">
          <span className="absolute -top-3 left-4 bg-green-50 dark:bg-gray-900 px-2 text-xs font-mono text-green-500">Database</span>
          <Node icon={Database} label="PostgreSQL + pgvector" delay={1.1} />
          <Node icon={Database} label="Prisma ORM" delay={1.2} />
        </div>

      </div>
    </div>
  );
}
