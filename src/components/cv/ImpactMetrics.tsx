import { useTranslation } from 'react-i18next';
import { Code, Briefcase, Globe, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export function ImpactMetrics() {
  const { i18n } = useTranslation();
  const isEs = i18n.language === 'es';

  const metrics = [
    {
      id: 1,
      icon: <Briefcase className="w-6 h-6 text-blue-500" />,
      value: "+8",
      label: isEs ? "Años de Experiencia" : "Years Experience",
    },
    {
      id: 2,
      icon: <Code className="w-6 h-6 text-green-500" />,
      value: "+10",
      label: isEs ? "Proyectos Entregados" : "Projects Delivered",
    },
    {
      id: 3,
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      value: "100%",
      label: isEs ? "Trabajo Remoto" : "Remote Work",
    },
    {
      id: 4,
      icon: <Award className="w-6 h-6 text-amber-500" />,
      value: "+14",
      label: isEs ? "Cursos Completados" : "Courses Completed",
    }
  ];

  return (
    <section className="py-8 border-y border-gray-200 dark:border-gray-800 print:hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {metrics.map((metric, index) => (
          <motion.div 
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center p-4 rounded-2xl bg-white dark:bg-gray-800/50 shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300"
          >
            <div className="mb-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-full">
              {metric.icon}
            </div>
            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-1">
              {metric.value}
            </h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
