import { BestPractice } from '@/types/cv';
import { Card } from '@/components/ui/Card';
import { CheckCircle2, Code2, TestTubes, Layers, GitMerge, Award } from 'lucide-react';

interface BestPracticesSectionProps {
  practices: BestPractice[];
  title: string;
}

export function BestPracticesSection({ practices, title }: BestPracticesSectionProps) {
  if (!practices || practices.length === 0) return null;

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'code': return <Code2 className="w-6 h-6 text-blue-500" />;
      case 'test': return <TestTubes className="w-6 h-6 text-green-500" />;
      case 'architecture': return <Layers className="w-6 h-6 text-purple-500" />;
      case 'cicd': return <GitMerge className="w-6 h-6 text-orange-500" />;
      default: return <CheckCircle2 className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <Card>
      <header className="flex items-center gap-2 mb-6 transition-colors duration-300">
        <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">{title}</h2>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {practices.map((practice, index) => (
          <div key={index} className="p-5 flex items-start gap-4 border dark:border-gray-700 rounded-xl hover:shadow-md transition-shadow bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg shrink-0 transition-colors duration-300">
              {getIcon(practice.icon)}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg mb-2 transition-colors duration-300">
                {practice.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                {practice.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
