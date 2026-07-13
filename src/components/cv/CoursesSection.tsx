import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, CheckCircle2, Clock, PlayCircle } from 'lucide-react';
import { Course } from '@/types/cv';

interface CoursesSectionProps {
  courses: Course[];
  title: string;
}

export function CoursesSection({ courses, title }: CoursesSectionProps) {
  const [activeTab, setActiveTab] = useState<'completed' | 'in-progress'>('completed');

  const filteredCourses = courses.filter(course => course.status === activeTab);

  return (
    <section className="space-y-6 pb-12" aria-labelledby="courses-heading">
      <header className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
        <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
        <h2 id="courses-heading" className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
      </header>

      {/* Tabs */}
      <div className="flex p-1 space-x-1 bg-gray-100 dark:bg-gray-800/50 rounded-xl w-fit">
        <button
          onClick={() => setActiveTab('completed')}
          className={`relative px-6 py-2.5 text-sm font-medium rounded-lg transition-colors ${
            activeTab === 'completed' ? 'text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
          }`}
        >
          {activeTab === 'completed' && (
            <motion.div
              layoutId="coursesTabBubble"
              className="absolute inset-0 bg-white dark:bg-gray-700 shadow-sm rounded-lg"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Completados
          </span>
        </button>
        <button
          onClick={() => setActiveTab('in-progress')}
          className={`relative px-6 py-2.5 text-sm font-medium rounded-lg transition-colors ${
            activeTab === 'in-progress' ? 'text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
          }`}
        >
          {activeTab === 'in-progress' && (
            <motion.div
              layoutId="coursesTabBubble"
              className="absolute inset-0 bg-white dark:bg-gray-700 shadow-sm rounded-lg"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-500" />
            En Progreso
          </span>
        </button>
      </div>

      {/* Course Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <AnimatePresence mode="popLayout">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.title}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative flex flex-col p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-all overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent dark:from-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {course.title}
                  </h3>
                  <div className="flex-shrink-0 ml-4 p-2 bg-gray-50 dark:bg-gray-900 rounded-lg group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>

                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
                  {course.platform} {course.instructor && `· ${course.instructor}`}
                </div>

                {/* Progress Bar */}
                <div className="mt-auto">
                  <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                    <span className={course.status === 'completed' ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}>
                      {course.status === 'completed' ? 'Completado' : 'En progreso'}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">{course.progress || 0}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress || 0}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full ${
                        course.status === 'completed' 
                          ? 'bg-gradient-to-r from-emerald-400 to-emerald-500' 
                          : 'bg-gradient-to-r from-amber-400 to-amber-500'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {filteredCourses.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full py-8 text-center text-gray-500 dark:text-gray-400"
          >
            No hay cursos en esta categoría.
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
