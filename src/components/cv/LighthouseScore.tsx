import { useTranslation } from 'react-i18next';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function LighthouseScore() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'es' ? 'es' : 'en';

  const scores = [
    { label: 'Performance', score: 100 },
    { label: 'Accessibility', score: 100 },
    { label: 'Best Practices', score: 100 },
    { label: 'SEO', score: 100 }
  ];

  return (
    <div className="bg-gray-900 text-white rounded-xl p-6 shadow-xl border border-gray-800 my-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
            <CheckCircle className="text-green-400" />
            {currentLang === 'es' ? 'Optimizada para Rendimiento' : 'Optimized for Performance'}
          </h3>
          <p className="text-gray-400 text-sm">
            {currentLang === 'es'
              ? 'Este portafolio ha sido diseñado priorizando la velocidad, accesibilidad y las mejores prácticas de desarrollo web, obteniendo puntaje perfecto en Lighthouse.'
              : 'This portfolio was built prioritizing speed, accessibility, and web development best practices, achieving perfect Lighthouse scores.'}
          </p>
        </div>
        
        <div className="flex gap-4 sm:gap-6">
          {scores.map((item, index) => (
            <div key={item.label} className="flex flex-col items-center">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-2">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-700"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <motion.path
                    className="text-green-500"
                    strokeWidth="3"
                    strokeDasharray="100, 100"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    initial={{ strokeDasharray: "0, 100" }}
                    whileInView={{ strokeDasharray: `${item.score}, 100` }}
                    transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-green-400">{item.score}</span>
                </div>
              </div>
              <span className="text-[10px] sm:text-xs text-gray-400 font-medium tracking-wider uppercase text-center max-w-[60px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
