import { Code } from 'lucide-react';

export function SkillsSection({ skills, title }: { skills: Record<string, string>; title: string }) {
  return (
    <section className="space-y-6" aria-labelledby="skills-heading">
      <header className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2 transition-colors duration-300">
        <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
        <h2 id="skills-heading" className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">{title}</h2>
      </header>
      
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
        {Object.entries(skills).map(([category, items], idx) => (
          <article key={idx} className="flex flex-col">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 transition-colors duration-300">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.split(',').map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300"
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
