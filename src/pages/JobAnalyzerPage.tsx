import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageTransition } from '@/components/animations/PageTransition';
import { SpotlightCard } from '@/components/animations/SpotlightCard';
import { Sparkles, CheckCircle2, AlertTriangle, ChevronRight, FileSearch, Target, Calendar } from 'lucide-react';
import { analyzeJobDescription, JobAnalysis } from '@/lib/analyzer';
import { CalendarModal } from '@/components/ui/CalendarModal';

export function JobAnalyzerPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'es' ? 'es' : 'en';
  const [jobDescription, setJobDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<JobAnalysis | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleAnalyze = () => {
    if (!jobDescription.trim()) return;
    
    setIsAnalyzing(true);
    setResult(null);

    // Usamos el motor heurístico frontend para analizar el texto
    setTimeout(() => {
      const analysis = analyzeJobDescription(jobDescription, currentLang);
      setResult(analysis);
      setIsAnalyzing(false);
    }, 1500); // Simulamos 1.5s de carga para la experiencia de usuario
  };

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto p-4 sm:p-8 space-y-12 relative min-h-[80vh]">
        {/* Elemento de fondo */}
        <div className="absolute top-0 right-0 w-full h-[400px] bg-gradient-to-b from-purple-500/10 to-blue-500/5 blur-3xl -z-10 rounded-full pointer-events-none" />
        
        <FadeIn delay={0.1}>
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-gray-100 tracking-tight flex items-center justify-center gap-3">
              {t('analyzer.title')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('analyzer.description')}
            </p>
          </div>
        </FadeIn>

        {/* Input Zone */}
        <FadeIn delay={0.2}>
          <SpotlightCard className="p-1 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl rounded-2xl overflow-hidden">
            <div className="p-6 sm:p-8 flex flex-col gap-6">
              <div className="relative">
                <FileSearch className="absolute top-4 left-4 w-6 h-6 text-gray-400" />
                <textarea 
                  rows={6}
                  placeholder={t('analyzer.paste')}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-gray-100 transition-shadow resize-none"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  disabled={isAnalyzing}
                />
              </div>
              <div className="flex justify-end gap-3">
                {jobDescription.trim() && (
                  <button 
                    onClick={() => {
                      setJobDescription('');
                      setResult(null);
                    }}
                    disabled={isAnalyzing}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-300 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{currentLang === 'es' ? 'Borrar' : 'Clear'}</span>
                  </button>
                )}
                <button 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing || !jobDescription.trim()}
                  className="flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-all duration-300 font-bold shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{t('analyzer.analyzing')}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>{t('analyzer.analyze')}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </SpotlightCard>
        </FadeIn>

        {/* Results Zone */}
        {isAnalyzing && (
          <FadeIn delay={0.1}>
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 border-4 border-purple-200 dark:border-purple-900/30 rounded-full animate-pulse" />
                <div className="absolute inset-0 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                <Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400 animate-bounce" />
              </div>
              <p className="text-lg font-medium text-gray-600 dark:text-gray-400 animate-pulse">
                {t('analyzer.analyzing')}
              </p>
            </div>
          </FadeIn>
        )}

        {result && (
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-6">
              
              {/* Extracted Data Badges */}
              {result.extractedData && (
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-100 dark:border-blue-800 flex items-center gap-2" title={currentLang === 'es' ? 'Empresa' : 'Company'}>
                    <span>🏢</span> {result.extractedData.company}
                  </div>
                  <div className="px-4 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold border border-purple-100 dark:border-purple-800 flex items-center gap-2" title={currentLang === 'es' ? 'Rol detectado' : 'Detected Role'}>
                    <span>👨‍💻</span> {result.extractedData.role}
                  </div>
                  <div className="px-4 py-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold border border-green-100 dark:border-green-800 flex items-center gap-2" title={currentLang === 'es' ? 'Modalidad' : 'Modality'}>
                    <span>🌍</span> {result.extractedData.modality}
                  </div>
                  <div className="px-4 py-2 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-semibold border border-amber-100 dark:border-amber-800 flex items-center gap-2" title={currentLang === 'es' ? 'Salario estimado/ofrecido' : 'Estimated/Offered Salary'}>
                    <span>💰</span> {result.extractedData.salary}
                  </div>
                </div>
              )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Score & Verdict */}
              <div className="md:col-span-1 space-y-6">
                <SpotlightCard className="p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-2xl flex flex-col items-center text-center">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">{t('analyzer.score')}</h3>
                  <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-100 dark:text-gray-800" />
                      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={`${251.2 * (result.compatibilityScore / 100)} 251.2`} className="text-green-500 transition-all duration-1000 ease-out" />
                    </svg>
                    <span className="absolute text-3xl font-black text-gray-900 dark:text-white">{result.compatibilityScore}%</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {result.verdict}
                  </p>
                  
                  {/* CTA para agendar */}
                  <div className="mt-6 w-full pt-6 border-t border-gray-100 dark:border-gray-800">
                    <button
                      onClick={() => setIsCalendarOpen(true)}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white rounded-xl transition-all duration-300 font-bold shadow-md hover:shadow-lg active:scale-95"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>{currentLang === 'es' ? 'Agendar Entrevista (15 min)' : 'Schedule Interview (15 min)'}</span>
                    </button>
                  </div>
                </SpotlightCard>
              </div>

              {/* Details */}
              <div className="md:col-span-2 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Matches */}
                  <SpotlightCard className="p-6 border border-green-200 dark:border-green-900/30 bg-green-50/30 dark:bg-green-900/10 rounded-2xl">
                    <h3 className="text-lg font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" /> {t('analyzer.matches')}
                    </h3>
                    <ul className="space-y-4">
                      {result.matches.map((m, i) => (
                        <li key={i} className="flex flex-col">
                          <span className="font-bold text-gray-900 dark:text-gray-100">{m.skill}</span>
                          <span className="text-xs text-green-600 dark:text-green-500 mt-1 bg-green-100 dark:bg-green-900/30 w-fit px-2 py-0.5 rounded-md">✓ {m.evidenceInCV}</span>
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>

                  {/* Gaps */}
                  <SpotlightCard className="p-6 border border-orange-200 dark:border-orange-900/30 bg-orange-50/30 dark:bg-orange-900/10 rounded-2xl">
                    <h3 className="text-lg font-bold text-orange-700 dark:text-orange-400 mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" /> {t('analyzer.gaps')}
                    </h3>
                    <ul className="space-y-3">
                      {result.gaps.map((g, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${g.severity === 'high' ? 'bg-red-500' : 'bg-orange-400'}`} />
                          <span className="font-medium text-gray-800 dark:text-gray-200">{g.skill}</span>
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </div>

                {/* Strategy */}
                <SpotlightCard className="p-6 border border-purple-200 dark:border-purple-900/30 bg-purple-50/30 dark:bg-purple-900/10 rounded-2xl">
                  <h3 className="text-lg font-bold text-purple-700 dark:text-purple-400 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" /> {t('analyzer.strategy')}
                  </h3>
                  <ul className="space-y-3">
                    {result.strategicRecommendations.map((rec, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
                        <ChevronRight className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </div>

            </div>
            </div>
          </FadeIn>
        )}
      </div>

      {/* Calendar Modal */}
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </PageTransition>
  );
}
