import { Briefcase, GitBranch, GitCommit } from 'lucide-react';
import { Experience } from '@/types/cv';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function ExperienceSection({ experiences, title }: { experiences: Experience[]; title: string }) {
  const [isGitMode, setIsGitMode] = useState(true);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <section className="space-y-6" aria-labelledby="experience-heading">
      <header className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2 transition-colors duration-300">
        <div className="flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
          <h2 id="experience-heading" className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">{title}</h2>
        </div>
        <button
          onClick={() => setIsGitMode(!isGitMode)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-mono font-bold transition-all border ${
            isGitMode 
              ? 'bg-gray-900 text-green-400 border-gray-700 hover:bg-gray-800' 
              : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
          title={lang === 'es' ? 'Alternar vista de Git Tree' : 'Toggle Git Tree view'}
        >
          <GitBranch className="w-4 h-4" />
          {isGitMode ? 'git switch main' : 'git checkout -b tree'}
        </button>
      </header>
      
      {isGitMode ? (
        <div className="relative pt-4 pb-8 bg-[#0d1117] text-gray-300 rounded-xl p-6 font-mono text-sm overflow-hidden border border-[#30363d] shadow-2xl">
          {/* Main branch line */}
          <div className="absolute top-10 bottom-10 left-[39px] w-1 bg-blue-500 z-0 opacity-50" />
          
          <div className="space-y-12 relative z-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* Main Commit Node */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative mt-1">
                    <div className="w-8 h-8 rounded-full bg-[#0d1117] border-4 border-blue-500 flex items-center justify-center relative z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                      <GitCommit className="w-4 h-4 text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-1 bg-[#161b22] border border-[#30363d] p-4 rounded-lg hover:border-blue-500/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-blue-400 font-bold text-base">{exp.role}</span>
                        <span className="text-gray-400 ml-2">@ {exp.company}</span>
                      </div>
                      <span className="text-[#8b949e] text-xs bg-[#21262d] px-2 py-1 rounded-md">{exp.period}</span>
                    </div>
                    {exp.achievements && (
                      <div className="mt-3 text-[#c9d1d9] space-y-2">
                        {exp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex gap-2">
                            <span className="text-green-400 select-none">+</span>
                            <span className="text-sm">{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Branches (Projects) */}
                {exp.projects && exp.projects.length > 0 && (
                  <div className="relative ml-4 mt-6 space-y-6">
                    {/* Branch out curved line */}
                    <svg className="absolute -top-10 left-[18px] w-12 h-16 z-0" fill="none">
                      <path d="M 2 0 C 2 30, 42 20, 42 60" stroke="#a855f7" strokeWidth="4" className="opacity-50" />
                    </svg>
                    
                    {/* Secondary branch line */}
                    <div className="absolute top-2 bottom-6 left-[58px] w-1 bg-purple-500 z-0 opacity-50" />

                    {exp.projects.map((project, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-4 pl-10 relative">
                        <div className="relative mt-1">
                          <div className="w-6 h-6 rounded-full bg-[#0d1117] border-4 border-purple-500 flex items-center justify-center relative z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                            <GitCommit className="w-3 h-3 text-purple-400" />
                          </div>
                        </div>
                        <div className="flex-1 bg-[#161b22] border border-[#30363d] p-3 rounded-lg hover:border-purple-500/50 transition-colors">
                          <div className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                            <GitBranch className="w-3 h-3" /> feature/{project.name.toLowerCase().replace(/ /g, '-')}
                          </div>
                          <div className="text-[#c9d1d9] space-y-2">
                            {project.achievements.map((ach, aIdx) => (
                              <div key={aIdx} className="flex gap-2">
                                <span className="text-green-400 select-none">+</span>
                                <span className="text-sm">{ach}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Merge back line */}
                    <svg className="absolute -bottom-8 left-[18px] w-12 h-16 z-0" fill="none">
                      <path d="M 42 0 C 42 30, 2 20, 2 60" stroke="#a855f7" strokeWidth="4" className="opacity-50" />
                    </svg>
                    <div className="h-4" /> {/* Spacing for merge */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
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
      )}
    </section>
  );
}
