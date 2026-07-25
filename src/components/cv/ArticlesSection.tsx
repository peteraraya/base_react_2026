import { BookOpen, ArrowRight } from 'lucide-react';
import { Article } from '@/types/cv';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function ArticlesSection({ articles }: { articles: Article[] }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const title = lang === 'es' ? 'Artículos Técnicos' : 'Technical Articles';

  if (!articles || articles.length === 0) return null;

  return (
    <section className="space-y-6" aria-labelledby="articles-heading">
      <header className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2 transition-colors duration-300">
        <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
        <h2 id="articles-heading" className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
          {title}
        </h2>
      </header>
      
      <div className="grid grid-cols-1 gap-4 pt-2">
        {articles.map((article, idx) => (
          <motion.a 
            key={idx}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group block bg-white dark:bg-gray-800/50 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 dark:from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full" />
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-md">
                    {article.date}
                  </span>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {article.summary}
                </p>
              </div>
              <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors">
                <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-300 group-hover:text-white" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
