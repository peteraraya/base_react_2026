import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Star, GitCommit, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface GitHubData {
  public_repos: number;
  followers: number;
  following: number;
}

export function GitHubStats() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'es' ? 'es' : 'en';
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/peteraraya')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading || !data) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {currentLang === 'es' ? 'Actividad en GitHub' : 'GitHub Activity'}
        </h3>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800"
        >
          <GitCommit className="w-5 h-5 text-blue-500 mb-2" />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{data.public_repos}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Repositorios</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800"
        >
          <Users className="w-5 h-5 text-green-500 mb-2" />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{data.followers}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Followers</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800"
        >
          <Star className="w-5 h-5 text-yellow-500 mb-2" />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">Activo</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Status</span>
        </motion.div>
      </div>
      <div className="mt-6 text-center">
        <a 
          href="https://github.com/peteraraya" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
        >
          {currentLang === 'es' ? 'Ver perfil completo' : 'View full profile'} &rarr;
        </a>
      </div>
    </div>
  );
}
