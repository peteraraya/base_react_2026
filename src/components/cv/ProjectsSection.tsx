import { Code, ExternalLink } from 'lucide-react';
import { Project } from '@/types/cv';
import { Card } from '@/components/ui/Card';

export function ProjectsSection({ projects, title }: { projects: Project[]; title: string }) {
  return (
    <section className="space-y-6" aria-labelledby="projects-heading">
      <header className="flex items-center gap-2 border-b border-gray-200 pb-2">
        <Code className="w-6 h-6 text-blue-600" aria-hidden="true" />
        <h2 id="projects-heading" className="text-2xl font-bold text-gray-900">{title}</h2>
      </header>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <Card key={idx} className="hover:shadow-md transition-shadow flex flex-col h-full">
            <header className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
              {project.period && (
                <time className="text-xs font-mono font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded-md">
                  {project.period}
                </time>
              )}
            </header>
            
            <div className="mb-4">
              <p className="text-sm text-gray-500">{project.description}</p>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors focus:ring-2 focus:ring-blue-600 rounded-md outline-none"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span>Ver Proyecto</span>
                </a>
              )}
            </div>
            
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-gray-600 text-sm mt-auto">
              {project.achievements.map((ach, aIdx) => (
                <li key={aIdx}>{ach}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
