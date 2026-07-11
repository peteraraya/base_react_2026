import { Briefcase } from 'lucide-react';
import { Experience } from '@/types/cv';

export function ExperienceSection({ experiences, title }: { experiences: Experience[]; title: string }) {
  return (
    <section className="space-y-6" aria-labelledby="experience-heading">
      <header className="flex items-center gap-2 border-b border-gray-200 pb-2">
        <Briefcase className="w-6 h-6 text-blue-600" aria-hidden="true" />
        <h2 id="experience-heading" className="text-2xl font-bold text-gray-900">{title}</h2>
      </header>
      
      <div className="space-y-10 pl-2">
        {experiences.map((exp, idx) => (
          <article key={idx} className="relative pl-6 sm:pl-8 border-l-2 border-gray-200">
            <span className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1.5 border-4 border-white shadow-sm" aria-hidden="true"></span>
            
            <header className="mb-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
              </div>
              <time className="text-sm font-mono text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit">
                {exp.period}
              </time>
            </header>
            
            {exp.projects ? (
              <div className="space-y-6">
                {exp.projects.map((project, pIdx) => (
                  <div key={pIdx}>
                    <h4 className="font-semibold text-gray-800 mb-2">{project.name}</h4>
                    <ul className="list-disc list-outside ml-5 space-y-1.5 text-gray-600">
                      {project.achievements.map((ach, aIdx) => (
                        <li key={aIdx}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="list-disc list-outside ml-5 space-y-1.5 text-gray-600">
                {exp.achievements?.map((ach, aIdx) => (
                  <li key={aIdx}>{ach}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
