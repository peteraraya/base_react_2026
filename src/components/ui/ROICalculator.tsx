import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calculator, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { SpotlightCard } from '@/components/animations/SpotlightCard';

export function ROICalculator() {
  const { i18n } = useTranslation();
  const isEs = i18n.language === 'es';

  const [teamSize, setTeamSize] = useState(5);
  const [avgSalary, setAvgSalary] = useState(3000);
  const [projectMonths, setProjectMonths] = useState(12);

  // Time-to-market reduction explicitly mentioned in CV: 30%
  const timeReduction = 0.30; 
  const oldTime = projectMonths;
  const newTime = projectMonths * (1 - timeReduction);
  const monthsSaved = oldTime - newTime;

  // Cost calculation
  const monthlyBurnRate = teamSize * avgSalary;
  const oldCost = monthlyBurnRate * oldTime;
  const newCost = monthlyBurnRate * newTime;
  const moneySaved = oldCost - newCost;

  return (
    <div className="mt-24 max-w-5xl mx-auto print:hidden">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-4">
          <Calculator className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-xs font-semibold tracking-wide uppercase text-blue-600 dark:text-blue-400">
            {isEs ? 'Impacto en el Negocio' : 'Business Impact'}
          </span>
        </div>
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">
          {isEs ? 'Calculadora de ROI' : 'ROI Calculator'}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          {isEs 
            ? 'Basado en mi experiencia real reduciendo el time-to-market en un 30% usando arquitecturas Cloud/Serverless. Descubre cuánto ahorrarías.' 
            : 'Based on my real experience reducing time-to-market by 30% using Cloud/Serverless architectures. Discover how much you would save.'}
        </p>
      </div>

      <SpotlightCard className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col lg:flex-row gap-10">
        
        {/* Sliders Input */}
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <label className="flex justify-between text-sm font-bold text-gray-700 dark:text-gray-300 mb-4">
              <span>{isEs ? 'Tamaño del Equipo de Desarrollo' : 'Development Team Size'}</span>
              <span className="text-blue-600 dark:text-blue-400 text-lg">{teamSize} {isEs ? 'Devs' : 'Devs'}</span>
            </label>
            <input 
              type="range" min="1" max="20" step="1" 
              value={teamSize} onChange={(e) => setTeamSize(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div>
            <label className="flex justify-between text-sm font-bold text-gray-700 dark:text-gray-300 mb-4">
              <span>{isEs ? 'Salario Promedio Mensual por Dev' : 'Avg. Monthly Salary per Dev'}</span>
              <span className="text-blue-600 dark:text-blue-400 text-lg">${avgSalary.toLocaleString()}</span>
            </label>
            <input 
              type="range" min="500" max="10000" step="500" 
              value={avgSalary} onChange={(e) => setAvgSalary(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div>
            <label className="flex justify-between text-sm font-bold text-gray-700 dark:text-gray-300 mb-4">
              <span>{isEs ? 'Duración Estimada del Proyecto' : 'Estimated Project Length'}</span>
              <span className="text-blue-600 dark:text-blue-400 text-lg">{projectMonths} {isEs ? 'Meses' : 'Months'}</span>
            </label>
            <input 
              type="range" min="3" max="24" step="1" 
              value={projectMonths} onChange={(e) => setProjectMonths(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        </div>

        {/* Results Output */}
        <div className="flex-1 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-center border border-gray-100 dark:border-gray-700">
          <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8 text-center">
            {isEs ? 'Impacto Estimado con Pedro' : 'Estimated Impact with Pedro'}
          </h3>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">
                {monthsSaved.toFixed(1)} <span className="text-lg text-gray-500 font-medium">{isEs ? 'meses' : 'mos'}</span>
              </div>
              <div className="text-xs font-bold text-gray-500">
                {isEs ? 'TIEMPO AHORRADO' : 'TIME SAVED'}
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">
                ${(moneySaved / 1000).toFixed(1)}k
              </div>
              <div className="text-xs font-bold text-gray-500">
                {isEs ? 'PRESUPUESTO AHORRADO' : 'BUDGET SAVED'}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 flex items-start gap-4 shadow-sm">
            <TrendingUp className="w-6 h-6 text-purple-500 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
              {isEs 
                ? 'Un desarrollador Senior no solo escribe código, sino que toma decisiones arquitectónicas (como migrar a Serverless o automatizar CI/CD) que aceleran radicalmente el ciclo de vida del producto.'
                : 'A Senior developer doesn\'t just write code; they make architectural decisions (like migrating to Serverless or automating CI/CD) that radically accelerate the product lifecycle.'}
            </p>
          </div>
        </div>

      </SpotlightCard>
    </div>
  );
}
