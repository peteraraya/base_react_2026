import { Code, ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '@/types/cv';
import { Card } from '@/components/ui/Card';
import { useTranslation } from 'react-i18next';

export function ProjectsSection({ projects, title }: { projects: Project[]; title: string }) {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <section className="space-y-6" aria-labelledby="projects-heading">
      <header className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2 transition-colors duration-300">
        <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
        <h2 id="projects-heading" className="text-xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">{title}</h2>
      </header>

      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <Card key={idx} className="hover:shadow-lg hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full overflow-hidden group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm relative">
            {project.image && (
              <div className="w-full h-32 bg-gray-200 dark:bg-gray-800 overflow-hidden shrink-0 relative border-b border-gray-100 dark:border-gray-700/50">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${project.name.split(' ').join('+')}&background=0D8ABC&color=fff&size=400`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  {project.link && (
                    <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5" />
                      {isEn ? 'View Project' : 'Ver Proyecto'}
                    </span>
                  )}
                </div>
              </div>
            )}
            
            <div className="p-4 md:p-5 flex flex-col flex-1">
              <header className="flex flex-col gap-1.5 mb-3">
                <div className="flex justify-between items-start gap-3">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white transition-colors duration-300 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {project.name}
                  </h3>
                  {project.period && (
                    <time className="text-[10px] font-mono font-bold tracking-wider text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/40 px-2 py-0.5 rounded shrink-0">
                      {project.period}
                    </time>
                  )}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{project.description}</p>
              </header>
              
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-xs mt-auto pt-3 border-t border-gray-100 dark:border-gray-700/50">
                {project.achievements.map((ach, aIdx) => (
                  <li key={aIdx} className="flex gap-2.5 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 shrink-0 mt-1.5" />
                    <span className="leading-relaxed opacity-90">{ach}</span>
                  </li>
                ))}
              </ul>

              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute inset-0 z-10 focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 outline-none rounded-xl"
                  aria-label={isEn ? `View project ${project.name}` : `Ver proyecto ${project.name}`}
                >
                  <span className="sr-only">{isEn ? 'View Project' : 'Ver Proyecto'}</span>
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
