import { Check, X, Zap } from 'lucide-react';
import { PageTransition } from '@/components/animations/PageTransition';
import { useTranslation } from 'react-i18next';

export function HireMePage() {
  const { i18n } = useTranslation();
  const isEs = i18n.language === 'es';

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto p-4 sm:p-8 pt-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            {isEs ? 'Mi Propuesta de Valor.' : 'My Value Proposition.'}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {isEs 
              ? 'Por qué sumar un perfil Senior Full Stack cambia por completo la dinámica de tu equipo.' 
              : 'Why adding a Senior Full Stack profile completely changes your team dynamics.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Junior Plan */}
          <div className="bg-white dark:bg-gray-800/50 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col opacity-70 scale-95">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {isEs ? 'Un Desarrollador Junior' : 'A Junior Developer'}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 h-10">
              {isEs ? 'Excelente para resolver tickets sencillos.' : 'Great for resolving simple tickets.'}
            </p>
            <div className="text-xl font-black text-gray-900 dark:text-white mb-6">
              {isEs ? 'Curva de Aprendizaje Alta' : 'Steep Learning Curve'}
            </div>
            <button disabled className="w-full py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 font-bold mb-8 cursor-not-allowed">
              {isEs ? 'Consume tiempo del equipo' : 'Requires team time'}
            </button>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400 flex-1">
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-gray-400 shrink-0" /> {isEs ? 'Escribe código que funciona' : 'Writes functional code'}</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-gray-400 shrink-0" /> {isEs ? 'Sabe usar Git básico' : 'Knows basic Git'}</li>
              <li className="flex items-start gap-3 text-red-500/70"><X className="w-4 h-4 shrink-0 mt-0.5" /> {isEs ? 'Requiere micro-management' : 'Requires micro-management'}</li>
              <li className="flex items-start gap-3 text-red-500/70"><X className="w-4 h-4 shrink-0 mt-0.5" /> {isEs ? 'Deuda técnica a largo plazo' : 'Creates technical debt over time'}</li>
            </ul>
          </div>

          {/* Senior Plan (Pedro) */}
          <div className="bg-gradient-to-b from-blue-600 to-blue-800 rounded-3xl p-1 shadow-2xl relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1 whitespace-nowrap">
              <Zap className="w-4 h-4 fill-white" /> EL IMPACTO
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-[1.4rem] p-8 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full" />
              <h3 className="text-xl font-black text-blue-600 dark:text-blue-400 mb-2">Pedro Araya (Senior)</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 h-10">
                {isEs ? 'El motor que impulsa la calidad y velocidad del equipo.' : 'The engine that drives team quality and velocity.'}
              </p>
              <div className="text-xl font-black text-gray-900 dark:text-white mb-6">
                {isEs ? 'Aporta valor en el 1er Sprint' : 'Adds value on the 1st Sprint'}
              </div>
              <a href="mailto:piteraraya@gmail.com" className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold mb-8 text-center transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95">
                {isEs ? 'Agendar Entrevista' : 'Schedule Interview'}
              </a>
              <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300 flex-1 font-medium">
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> {isEs ? 'Autonomía 100% remota' : '100% remote autonomy'}</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> {isEs ? 'Lidera arquitecturas (Cloud/Serverless)' : 'Leads architectures (Cloud/Serverless)'}</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> {isEs ? 'Garantiza calidad (Testing & SOLID)' : 'Guarantees quality (Testing & SOLID)'}</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> {isEs ? 'Resolución proactiva de bloqueos' : 'Proactive blocker resolution'}</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> {isEs ? 'Visión integral: Negocio y Código' : 'Holistic vision: Business & Code'}</li>
              </ul>
            </div>
          </div>

          {/* AI Plan */}
          <div className="bg-white dark:bg-gray-800/50 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col opacity-70 scale-95">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {isEs ? 'Inteligencia Artificial' : 'Artificial Intelligence'}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 h-10">
              {isEs ? 'Copilotos y autocompletado (Cursor, Copilot).' : 'Copilots and autocomplete (Cursor, Copilot).'}
            </p>
            <div className="text-xl font-black text-gray-900 dark:text-white mb-6">
              {isEs ? 'Requiere un Experto' : 'Requires an Expert'}
            </div>
            <button disabled className="w-full py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 font-bold mb-8 cursor-not-allowed">
              {isEs ? 'No sustituye criterio' : 'Cannot replace judgment'}
            </button>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400 flex-1">
              <li className="flex items-center gap-3"><Check className="w-4 h-4 text-gray-400 shrink-0" /> Genera boilerplates velozmente</li>
              <li className="flex items-start gap-3 text-red-500/70"><X className="w-4 h-4 shrink-0 mt-0.5" /> {isEs ? 'No entiende lógica de negocio compleja' : 'Does not understand complex business logic'}</li>
              <li className="flex items-start gap-3 text-red-500/70"><X className="w-4 h-4 shrink-0 mt-0.5" /> {isEs ? 'Alucina requerimientos críticos' : 'Hallucinates critical requirements'}</li>
              <li className="flex items-start gap-3 text-red-500/70"><X className="w-4 h-4 shrink-0 mt-0.5" /> {isEs ? 'Necesita que Pedro revise su código' : 'Needs Pedro to review its code'}</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
