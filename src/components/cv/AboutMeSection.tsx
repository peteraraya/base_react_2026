import { User, BookOpen, Dumbbell, Zap } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { AboutMe } from '@/types/cv';

interface AboutMeProps {
  data: AboutMe;
  title: string;
}

const icons = {
  learn: <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
  tech: <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
  gym: <Dumbbell className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
};

export function AboutMeSection({ data, title }: AboutMeProps) {
  return (
    <Card>
      <header className="flex items-center gap-2 mb-6">
        <User className="w-6 h-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
      </header>
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 leading-relaxed text-lg space-y-4">
          {data.description.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 dark:text-gray-300">{paragraph}</p>
          ))}
        </div>
        
        <div className="w-full md:w-64 flex flex-col gap-4">
          {data.highlights.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800/80 rounded-xl border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md hover:scale-[1.02]"
            >
              <div className="p-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                {icons[item.icon as keyof typeof icons]}
              </div>
              <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
