import { MonitorPlay, Github, ExternalLink } from 'lucide-react';

interface ShowcaseItem {
  title: string;
  description: string;
  link: string;
  icon: 'github' | 'demo';
}

const demos: Record<'es' | 'en', ShowcaseItem[]> = {
  es: [
    {
      title: "Gym Tracker App (Live Demo)",
      description: "Aplicación Fullstack en Next.js 15, React 19 y Supabase. Autenticación y dashboard de métricas.",
      link: "https://gym-tracker-eta-amber.vercel.app/",
      icon: "demo"
    },
    {
      title: "Perfil de GitHub",
      description: "Explora mis repositorios públicos, contribuciones y el código fuente de mis proyectos.",
      link: "https://github.com/peteraraya",
      icon: "github"
    }
  ],
  en: [
    {
      title: "Gym Tracker App (Live Demo)",
      description: "Fullstack application using Next.js 15, React 19 and Supabase. Authentication & metrics dashboard.",
      link: "https://gym-tracker-eta-amber.vercel.app/",
      icon: "demo"
    },
    {
      title: "GitHub Profile",
      description: "Explore my public repositories, contributions, and source code of my projects.",
      link: "https://github.com/peteraraya",
      icon: "github"
    }
  ]
};

export function ShowcaseSection({ lang }: { lang: 'es' | 'en' }) {
  const items = demos[lang];
  const title = lang === 'es' ? 'Experiencia Demostrable' : 'Demonstrable Experience';
  
  return (
    <section className="space-y-6 pb-12" aria-labelledby="showcase-heading">
      <header className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
        <MonitorPlay className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
        <h2 id="showcase-heading" className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all duration-200"
          >
            <div className="flex-shrink-0 mt-1">
              {item.icon === 'github' ? (
                <Github className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              ) : (
                <ExternalLink className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              )}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
