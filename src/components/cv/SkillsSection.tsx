import { Code } from 'lucide-react';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Cloud, renderSimpleIcon, ICloud } from 'react-icon-cloud';
import { 
  siReact, siNextdotjs, siAngular, siTypescript, siTailwindcss, siJavascript, 
  siHtml5, siCss, siNodedotjs, siExpress, siNestjs, siPhp, siWordpress, 
  siPostgresql, siMongodb, siSupabase, siJest, siTestinglibrary, siGit, siJira, 
  siDocker, siFramer, siNpm, siMui
} from 'simple-icons';

export function SkillsSection({ skills, title }: { skills: Record<string, string>; title: string }) {
  const [viewMode, setViewMode] = useState<'matrix' | 'categories' | 'globe'>('matrix');
  const { i18n } = useTranslation();

  // Hardcoded visual levels for impressive radar/matrix presentation
  const coreSkills = [
    { name: 'React / Next.js', level: 95 },
    { name: 'Node.js / Express', level: 90 },
    { name: 'TypeScript', level: 90 },
    { name: 'Serverless / AWS', level: 85 },
    { name: 'PostgreSQL / SQL', level: 85 },
    { name: 'Testing (Jest/Playwright)', level: 80 }
  ];

  return (
    <section className="space-y-6" aria-labelledby="skills-heading">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-700 pb-2 transition-colors duration-300">
        <div className="flex items-center gap-2">
          <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
          <h2 id="skills-heading" className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">{title}</h2>
        </div>
        
        <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg print:hidden overflow-x-auto no-scrollbar">
          <button 
            onClick={() => setViewMode('matrix')}
            className={`px-3 py-1 text-sm font-medium rounded-md transition-all whitespace-nowrap ${viewMode === 'matrix' ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
          >
            {i18n.language === 'es' ? 'Matriz' : 'Matrix'}
          </button>
          <button 
            onClick={() => setViewMode('categories')}
            className={`px-3 py-1 text-sm font-medium rounded-md transition-all whitespace-nowrap ${viewMode === 'categories' ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
          >
            {i18n.language === 'es' ? 'Categorías' : 'Categories'}
          </button>
          <button 
            onClick={() => setViewMode('globe')}
            className={`px-3 py-1 text-sm font-medium rounded-md transition-all whitespace-nowrap ${viewMode === 'globe' ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
          >
            {i18n.language === 'es' ? 'Globo 3D' : '3D Globe'}
          </button>
        </div>
      </header>
      
      {viewMode === 'globe' ? (
        <div className="flex items-center justify-center animate-in fade-in zoom-in-95 duration-700 w-full overflow-hidden bg-gray-50 dark:bg-[#111111] rounded-3xl border border-gray-200 dark:border-gray-800 shadow-inner py-8">
          <SkillGlobe />
        </div>
      ) : viewMode === 'matrix' ? (
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 animate-in fade-in duration-500">
          {coreSkills.map((skill, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                  className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 animate-in fade-in duration-500">
          {Object.entries(skills).map(([category, items], idx) => (
            <article key={idx} className="flex flex-col">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 transition-colors duration-300">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.split(',').map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 hover:scale-105 transform cursor-default"
                  >
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

const icons = [
  siReact, siNextdotjs, siAngular, siTypescript, siTailwindcss, siJavascript, 
  siHtml5, siCss, siNodedotjs, siExpress, siNestjs, siPhp, siWordpress, 
  siPostgresql, siMongodb, siSupabase, siJest, siTestinglibrary, siGit, siJira, 
  siDocker, siFramer, siNpm, siMui
];

const SkillGlobe = () => {
  const renderedIcons = useMemo(() => {
    return icons.map((icon) =>
      renderSimpleIcon({
        icon,
        size: 42,
        aProps: {
          href: undefined,
          target: undefined,
          rel: undefined,
          onClick: (e: any) => e.preventDefault(),
        },
      })
    );
  }, []);

  const cloudProps: Omit<ICloud, 'children'> = {
    containerProps: {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 40,
      },
    },
    options: {
      clickToFront: 500,
      depth: 1,
      imageScale: 2,
      initial: [0.1, -0.1],
      outlineColour: '#0000',
      reverse: true,
      tooltip: 'native',
      tooltipDelay: 0,
      wheelZoom: false,
    },
  };

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
};
