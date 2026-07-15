import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SpotlightCard } from '@/components/animations/SpotlightCard';
import { 
  Briefcase, 
  ArrowRight, 
  X, 
  Cloud, 
  Shield, 
  Database,
  Code2,
  CheckCircle2,
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
}

// Map the projects to a richer data structure for the case studies
const getCaseStudies = (lang: 'es' | 'en'): CaseStudy[] => {
  const data = cvData[lang];
  // Extract Ticblue projects
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
        { label: lang === 'es' ? 'Resolución Edge Cases' : 'Edge Cases Resolved', value: '10+' }
      ],
      tags: ['Serverless', 'Atlassian Forge', 'Node.js', 'React']
    },
    {
      id: 'rgstcs',
      title: projects.find(p => p.name.includes('RGSTCS'))?.name || 'RGSTCS',
      company: 'Ticblue',
      icon: Shield,
      achievements: projects.find(p => p.name.includes('RGSTCS'))?.achievements || [],
      metrics: [
        { label: lang === 'es' ? 'Consultas' : 'Consultations', value: '+33.000' },
        { label: lang === 'es' ? 'Pacientes' : 'Patients', value: '+11.000' }
      ],
      tags: ['RBAC', 'MFA', 'Seguridad', 'Telemedicina']
    },
    {
      id: 'uvlpic',
      title: projects.find(p => p.name.includes('UVLPIC'))?.name || 'UVLPIC',
      company: 'Ticblue',
      icon: Database,
      achievements: projects.find(p => p.name.includes('UVLPIC'))?.achievements || [],
      metrics: [
        { label: lang === 'es' ? 'Vulnerabilidades' : 'Vulnerabilities', value: '0' },
        { label: lang === 'es' ? 'End-to-End' : 'End-to-End', value: '100%' }
      ],
      tags: ['Marketplace', 'Economía Circular', 'Full Stack']
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
    <div className="py-8 print:hidden">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
          <Briefcase className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            {currentLang === 'es' ? 'Casos de Estudio' : 'Case Studies'}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {currentLang === 'es' 
              ? 'Proyectos de alto impacto y arquitectura compleja' 
              : 'High-impact projects and complex architecture'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {studies.map((study) => (
          <motion.div
            layoutId={`card-${study.id}`}
            key={study.id}
            onClick={() => setSelectedId(study.id)}
            className="cursor-pointer group h-full"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <SpotlightCard className="h-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-colors p-6 flex flex-col">
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                  <study.icon className="w-6 h-6" />
                </div>
                <motion.div 
                  className="opacity-0 group-hover:opacity-100 transition-opacity bg-blue-100 dark:bg-blue-900/40 p-2 rounded-full text-blue-600 dark:text-blue-400"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
              
              <motion.h3 
                layoutId={`title-${study.id}`}
                className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight"
              >
                {study.title}
              </motion.h3>
              
              <motion.div 
                layoutId={`company-${study.id}`}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 mb-6"
              >
                <Building className="w-4 h-4" />
                {study.company}
              </motion.div>

              {/* Metrics Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-auto mb-6">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-gray-700/30 p-3 rounded-lg border border-gray-100 dark:border-gray-700/50">
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {study.tags.slice(0, 2).map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-md">
                    {tag}
                  </span>
                ))}
                {study.tags.length > 2 && (
                  <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-md">
                    +{study.tags.length - 2}
                  </span>
                )}
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
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-gray-900/40 dark:bg-black/60 backdrop-blur-sm z-40"
            />
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-8 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedStudy.id}`}
                className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto border border-gray-200 dark:border-gray-700 max-h-[90vh] flex flex-col"
              >
                <div className="p-6 sm:p-8 border-b border-gray-100 dark:border-gray-700 flex justify-between items-start bg-gray-50/50 dark:bg-gray-800/80">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                        <selectedStudy.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <motion.h3 
                          layoutId={`title-${selectedStudy.id}`}
                          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
                        >
                          {selectedStudy.title}
                        </motion.h3>
                        <motion.div 
                          layoutId={`company-${selectedStudy.id}`}
                          className="flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 mt-1"
                        >
                          <Building className="w-4 h-4" />
                          {selectedStudy.company}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="p-2 bg-white dark:bg-gray-700 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border border-gray-200 dark:border-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-6 sm:p-8 overflow-y-auto">
                  
                  {/* Expanded Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {selectedStudy.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30 text-center">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wide">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Code2 className="w-5 h-5 text-blue-500" />
                        {currentLang === 'es' ? 'Logros Clave e Impacto' : 'Key Achievements & Impact'}
                      </h4>
                      <ul className="space-y-4">
                        {selectedStudy.achievements.map((achievement, idx) => (
                          <motion.li 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            key={idx} 
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                        {currentLang === 'es' ? 'Stack Tecnológico' : 'Tech Stack'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedStudy.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                            {tag}
                          </span>
                        ))}
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
