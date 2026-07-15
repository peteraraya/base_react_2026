import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SpotlightCard } from '@/components/animations/SpotlightCard';
import { 
  Briefcase, 
  ArrowUpRight, 
  X, 
  Cloud, 
  Shield, 
  Database,
  Code2,
  Building
} from 'lucide-react';
import { cvData } from '@/data/cv';

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  icon: any;
  achievements: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  gradient: string;
}

const getCaseStudies = (lang: 'es' | 'en'): CaseStudy[] => {
  const data = cvData[lang];
  const ticblue = data.experience.find(e => e.company === 'Ticblue');
  const projects = ticblue?.projects || [];

  return [
    {
      id: 'forge',
      title: projects.find(p => p.name.includes('Forge'))?.name || 'Forge Project',
      company: 'Ticblue',
      icon: Cloud,
      achievements: projects.find(p => p.name.includes('Forge'))?.achievements || [],
      metrics: [
        { label: lang === 'es' ? 'Time-to-market' : 'Time-to-market', value: '-30%' },
        { label: lang === 'es' ? 'Resolución de Casos' : 'Edge Cases', value: '10+' }
      ],
      tags: ['Serverless', 'Atlassian Forge', 'Node.js', 'React'],
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      id: 'rgstcs',
      title: projects.find(p => p.name.includes('RGSTCS'))?.name || 'Teleconsulta RGSTCS',
      company: 'Ticblue',
      icon: Shield,
      achievements: projects.find(p => p.name.includes('RGSTCS'))?.achievements || [],
      metrics: [
        { label: lang === 'es' ? 'Consultas' : 'Consultations', value: '+33k' },
        { label: lang === 'es' ? 'Pacientes' : 'Patients', value: '+11k' }
      ],
      tags: ['RBAC', 'MFA', 'Seguridad', 'Telemedicina'],
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      id: 'uvlpic',
      title: projects.find(p => p.name.includes('UVLPIC'))?.name || 'Plataforma UVLPIC',
      company: 'Ticblue',
      icon: Database,
      achievements: projects.find(p => p.name.includes('UVLPIC'))?.achievements || [],
      metrics: [
        { label: lang === 'es' ? 'Vulnerabilidades' : 'Vulnerabilities', value: '0' },
        { label: lang === 'es' ? 'End-to-End' : 'End-to-End', value: '100%' }
      ],
      tags: ['Marketplace', 'Economía Circular', 'Full Stack'],
      gradient: "from-emerald-500/10 to-teal-500/10"
    }
  ];
};

export function CaseStudiesSection() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'es' ? 'es' : 'en';
  const studies = getCaseStudies(currentLang);
  
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedStudy = studies.find(s => s.id === selectedId);

  return (
    <div className="py-12 print:hidden">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-4">
          <Briefcase className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          <span className="text-xs font-semibold tracking-wide uppercase text-gray-600 dark:text-gray-400">
            {currentLang === 'es' ? 'Casos de Estudio' : 'Case Studies'}
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
          {currentLang === 'es' ? 'Trabajo destacado.' : 'Featured work.'}
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl font-medium">
          {currentLang === 'es' 
            ? 'Una mirada profunda a los proyectos de mayor impacto y complejidad arquitectónica que he diseñado y llevado a producción.' 
            : 'A deep dive into the highest-impact and architecturally complex projects I have designed and shipped.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {studies.map((study) => (
          <motion.div
            layoutId={`card-container-${study.id}`}
            key={study.id}
            onClick={() => setSelectedId(study.id)}
            className="cursor-pointer group h-full"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <SpotlightCard className="h-full bg-white dark:bg-[#0a0a0a] rounded-[2rem] border border-gray-200/60 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none transition-all duration-500 p-8 flex flex-col relative overflow-hidden">
              
              {/* Subtle background gradient */}
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${study.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                    <Building className="w-4 h-4" />
                    {study.company}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                
                <motion.h3 
                  layoutId={`title-${study.id}`}
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight tracking-tight"
                >
                  {study.title}
                </motion.h3>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {study.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="text-xs font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400 bg-gray-100/80 dark:bg-white/5 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                  {study.tags.length > 2 && (
                    <span className="text-xs font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400 bg-gray-100/80 dark:bg-white/5 px-2.5 py-1 rounded-md">
                      +{study.tags.length - 2}
                    </span>
                  )}
                </div>

                <div className="mt-auto pt-8 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div className="text-3xl font-extrabold tracking-tighter text-gray-900 dark:text-white">
                        {metric.value}
                      </div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedStudy && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-gray-900/20 dark:bg-black/40 backdrop-blur-md z-40"
            />
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6 pointer-events-none">
              <motion.div
                layoutId={`card-container-${selectedStudy.id}`}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="w-full max-w-3xl bg-white dark:bg-[#0a0a0a] rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl overflow-hidden pointer-events-auto border border-gray-200/50 dark:border-white/10 max-h-[90vh] flex flex-col relative"
              >
                {/* Background glow in modal */}
                <div className={`absolute top-0 left-0 w-full h-48 bg-gradient-to-b ${selectedStudy.gradient} opacity-50`} />

                <div className="p-6 sm:p-8 relative z-10 flex justify-between items-start">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100/80 dark:bg-white/10 border border-gray-200/50 dark:border-white/5 mb-4 backdrop-blur-sm">
                      <Building className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" />
                      <span className="text-xs font-semibold tracking-wide uppercase text-gray-600 dark:text-gray-300">
                        {selectedStudy.company}
                      </span>
                    </div>
                    <motion.h3 
                      layoutId={`title-${selectedStudy.id}`}
                      className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight"
                    >
                      {selectedStudy.title}
                    </motion.h3>
                  </div>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="p-2.5 bg-gray-100/50 dark:bg-white/5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors backdrop-blur-sm"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 overflow-y-auto relative z-10 flex-1">
                  
                  {/* Expanded Metrics Section - Stripe Style */}
                  <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-12 py-6 border-y border-gray-100 dark:border-white/10 mb-8">
                    {selectedStudy.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col">
                        <div className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-5">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                        {currentLang === 'es' ? 'Impacto y Desarrollo' : 'Impact & Development'}
                      </h4>
                      <div className="space-y-4">
                        {selectedStudy.achievements.map((achievement, idx) => (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx, duration: 0.5 }}
                            key={idx} 
                            className="flex items-start gap-3"
                          >
                            <div className="mt-1 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            </div>
                            <span className="text-base text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5">
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                          <Code2 className="w-4 h-4 text-gray-400" />
                          {currentLang === 'es' ? 'Tecnologías' : 'Technologies'}
                        </h4>
                        <div className="flex flex-col gap-3">
                          {selectedStudy.tags.map((tag, idx) => (
                            <span key={idx} className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}