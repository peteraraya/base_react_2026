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

            {/* Passion for Code Snippet */}
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700/50">
              <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-inner border border-gray-800">
                <div className="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-gray-800 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-xs font-mono text-gray-400">MatchScoreEngine.ts</span>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="text-sm font-mono leading-relaxed">
                    <span className="text-purple-400">@Injectable</span><span className="text-gray-300">()</span>{'\n'}
                    <span className="text-purple-400">export class</span> <span className="text-yellow-300">MatchScoreEngine</span> <span className="text-gray-300">{'{'}</span>{'\n'}
                    <span className="text-gray-300">  </span><span className="text-blue-400">constructor</span><span className="text-gray-300">(</span><span className="text-purple-400">private readonly</span> <span className="text-blue-200">aiService</span><span className="text-gray-300">: </span><span className="text-yellow-300">AiService</span><span className="text-gray-300">) {'{}'}</span>{'\n\n'}
                    <span className="text-gray-300">  </span><span className="text-purple-400">async</span> <span className="text-blue-300">calculateMatch</span><span className="text-gray-300">(</span><span className="text-blue-200">profile</span><span className="text-gray-300">: </span><span className="text-yellow-300">UserProfile</span><span className="text-gray-300">, </span><span className="text-blue-200">job</span><span className="text-gray-300">: </span><span className="text-yellow-300">JobOffer</span><span className="text-gray-300">): </span><span className="text-yellow-300">Promise</span><span className="text-gray-300"></span><span className="text-yellow-300">number</span><span className="text-gray-300"> {'{'}</span>{'\n'}
                    <span className="text-gray-300">    </span><span className="text-gray-500">// My passion for coding means I always give 100%</span>{'\n'}
                    <span className="text-gray-300">    </span><span className="text-purple-400">const</span> <span className="text-blue-200">baseScore</span> <span className="text-gray-300">= </span><span className="text-purple-400">await</span> <span className="text-blue-200">this</span><span className="text-gray-300">.</span><span className="text-blue-200">aiService</span><span className="text-gray-300">.</span><span className="text-blue-300">analyze</span><span className="text-gray-300">(</span><span className="text-blue-200">profile</span><span className="text-gray-300">, </span><span className="text-blue-200">job</span><span className="text-gray-300">);</span>{'\n'}
                    <span className="text-gray-300">    </span><span className="text-purple-400">return</span> <span className="text-yellow-300">Math</span><span className="text-gray-300">.</span><span className="text-blue-300">max</span><span className="text-gray-300">(</span><span className="text-blue-200">baseScore</span><span className="text-gray-300">, </span><span className="text-green-300">100</span><span className="text-gray-300">);</span>{'\n'}
                    <span className="text-gray-300">  {'}'}</span>{'\n'}
                    <span className="text-gray-300">{'}'}</span>
                  </pre>
                </div>
              </div>
            </div>
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
