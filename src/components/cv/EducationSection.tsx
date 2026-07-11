import { GraduationCap } from 'lucide-react';
import { Education } from '@/types/cv';

export function EducationSection({ education, title }: { education: Education[]; title: string }) {
  return (
    <section className="space-y-6 pb-12" aria-labelledby="education-heading">
      <header className="flex items-center gap-2 border-b border-gray-200 pb-2">
        <GraduationCap className="w-6 h-6 text-blue-600" aria-hidden="true" />
        <h2 id="education-heading" className="text-2xl font-bold text-gray-900">{title}</h2>
      </header>

      <div className="space-y-4">
        {education.map((edu, idx) => (
          <article key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{edu.title}</h3>
              <p className="text-gray-600 font-medium">{edu.institution}</p>
            </div>
            <div className="mt-2 sm:mt-0 text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full w-fit">
              {edu.status}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
