import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, ExternalLink, Github as GithubIcon, Loader2, Calendar } from 'lucide-react';
import { fetchGithubRepos } from '@/lib/api/github';
import { useProjectFilterStore } from '@/stores/useProjectFilterStore';
import { FadeIn } from '@/components/animations/FadeIn';

export function ProjectsPage() {
  const { t } = useTranslation();
  
  // Usuario de GitHub
  const GITHUB_USERNAME = 'peteraraya';
  
  const { data: repos, isLoading, isError } = useQuery({
    queryKey: ['github-repos', GITHUB_USERNAME],
    queryFn: () => fetchGithubRepos(GITHUB_USERNAME),
    staleTime: 1000 * 60 * 5, // 5 minutos de cache
  });

  const { 
    searchQuery, 
    selectedLanguage, 
    sortBy, 
    setSearchQuery, 
    setSelectedLanguage, 
    setSortBy 
  } = useProjectFilterStore();

  // Extraer lenguajes únicos
  const languages = useMemo(() => {
    if (!repos) return [];
    const langs = new Set<string>();
    repos.forEach(repo => {
      if (repo.language) langs.add(repo.language);
    });
    return Array.from(langs).sort();
  }, [repos]);

  // Filtrar y ordenar
  const filteredRepos = useMemo(() => {
    if (!repos) return [];
    
    // Filtramos los forks para mostrar solo proyectos originales
    let result = repos.filter(repo => !repo.fork);

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(repo => 
        repo.name.toLowerCase().includes(query) || 
        (repo.description && repo.description.toLowerCase().includes(query))
      );
    }

    if (selectedLanguage) {
      result = result.filter(repo => repo.language === selectedLanguage);
    }

    result.sort((a, b) => {
      if (sortBy === 'stars') return b.stargazers_count - a.stargazers_count;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });

    return result;
  }, [repos, searchQuery, selectedLanguage, sortBy]);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8 space-y-8">
      <FadeIn delay={0.1}>
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
            {t('projects.title', 'Galería de Proyectos')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl">
            {t('projects.description', 'Explora mis repositorios en tiempo real conectados con la API de GitHub. Filtra por tecnología o busca un proyecto específico.')}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          
          {/* Search */}
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder={t('projects.search', 'Buscar proyectos...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-100 transition-shadow"
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">
              {t('projects.sort', 'Ordenar por:')}
            </label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full md:w-auto px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-100 cursor-pointer"
            >
              <option value="updated">{t('projects.sortUpdated', 'Más recientes')}</option>
              <option value="stars">{t('projects.sortStars', 'Estrellas')}</option>
              <option value="name">{t('projects.sortName', 'Nombre')}</option>
            </select>
          </div>
        </div>

        {/* Language Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          <button
            onClick={() => setSelectedLanguage(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedLanguage === null 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
            }`}
          >
            {t('projects.all', 'Todos')}
          </button>
          {languages.map(lang => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedLanguage === lang 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* States */}
      {isLoading && (
        <div className="py-20 flex flex-col items-center justify-center text-blue-500">
          <Loader2 className="w-10 h-10 animate-spin mb-4" />
          <p className="text-gray-600 dark:text-gray-400 font-medium">Cargando repositorios...</p>
        </div>
      )}

      {isError && (
        <div className="py-20 text-center">
          <p className="text-red-500 font-medium">Ocurrió un error al cargar los proyectos desde GitHub.</p>
        </div>
      )}

      {/* Projects Grid */}
      {!isLoading && !isError && (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredRepos.map((repo, index) => (
              <motion.div
                key={repo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                    {repo.name}
                  </h3>
                  <div className="flex gap-2 text-gray-500 dark:text-gray-400">
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors" title="Live Demo">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors" title="GitHub Source">
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                  {repo.description || "Sin descripción disponible."}
                </p>

                <div className="flex items-center justify-between text-xs font-medium text-gray-500 dark:text-gray-400 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50">
                  <div className="flex items-center gap-4">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400" />
                      {repo.stargazers_count}
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(repo.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredRepos.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-12 text-center"
            >
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {t('projects.noResults', 'No se encontraron proyectos que coincidan con la búsqueda.')}
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
}
