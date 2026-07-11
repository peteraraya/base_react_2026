import { Code } from 'lucide-react';

export function SkillsSection({ skills, title }: { skills: Record<string, string>; title: string }) {
  return (
    <section className="space-y-6" aria-labelledby="skills-heading">
      <header className="flex items-center gap-2 border-b border-gray-200 pb-2">
        <Code className="w-6 h-6 text-blue-600" aria-hidden="true" />
        <h2 id="skills-heading" className="text-2xl font-bold text-gray-900">{title}</h2>
      </header>
      
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
        {Object.entries(skills).map(([category, items], idx) => (
          <article key={idx} className="flex flex-col">
            <h3 className="font-semibold text-gray-900 mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.split(',').map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
