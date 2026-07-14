import { Briefcase } from 'lucide-react';
import { Experience } from '@/types/cv';
import { motion } from 'framer-motion';

export function ExperienceSection({ experiences, title }: { experiences: Experience[]; title: string }) {
  return (
    <section className="space-y-6" aria-labelledby="experience-heading">
      <header className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2 transition-colors duration-300">
        <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
        <h2 id="experience-heading" className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">{title}</h2>
      </header>
      
      <div className="space-y-10 pl-2">
        {experiences.map((exp, idx) => (
          <motion.article 
            key={idx} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-6 sm:pl-8 border-l-2 border-gray-200 dark:border-gray-700 transition-colors duration-300"
          >
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: idx * 0.1 + 0.3 }}
              className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full -left-[9px] top-1.5 border-4 border-white dark:border-gray-900 shadow-sm transition-colors duration-300" 
              aria-hidden="true"
            />
            
            <header className="mb-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{exp.role}</h3>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 transition-colors duration-300">{exp.company}</p>
              </div>
              <time className="text-sm font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full w-fit transition-colors duration-300">
                {exp.period}
              </time>
            </header>
            
            {exp.projects ? (
              <div className="space-y-6">
                {exp.projects.map((project, pIdx) => (
                  <div key={pIdx}>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">{project.name}</h4>
                    <ul className="list-disc list-outside ml-5 space-y-1.5 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      {project.achievements.map((ach, aIdx) => (
                        <li key={aIdx}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="list-disc list-outside ml-5 space-y-1.5 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {exp.achievements?.map((ach, aIdx) => (
                  <li key={aIdx}>{ach}</li>
                ))}
              </ul>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
