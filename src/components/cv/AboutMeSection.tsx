import { User, BookOpen, Dumbbell, Zap } from 'lucide-react';
import { AboutMe } from '@/types/cv';
import { motion } from 'framer-motion';

interface AboutMeProps {
  data: AboutMe;
  title: string;
}

const icons = {
  learn: <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
  tech: <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
  gym: <Dumbbell className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
};

export function AboutMeSection({ data, title }: AboutMeProps) {
  return (
    <section className="space-y-6 my-16 print:hidden">
      <header className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2 transition-colors duration-300">
        <User className="w-6 h-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
          {title}
        </h2>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Main Text Card */}
        <motion.div 
          className="md:col-span-8 bg-white dark:bg-gray-800/80 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10 space-y-4">
            {data.description.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-medium">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Highlights Vertical Stack */}
        <div className="md:col-span-4 flex flex-col gap-4">
          {data.highlights.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="flex-1 flex flex-col items-center justify-center gap-3 p-6 bg-white dark:bg-gray-800/80 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm relative overflow-hidden"
            >
              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-inner">
                {icons[item.icon as keyof typeof icons]}
              </div>
              <span className="text-base font-bold text-gray-900 dark:text-gray-100 text-center">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
