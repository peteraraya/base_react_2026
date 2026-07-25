import { MessageCircle } from 'lucide-react';
import { Testimonial } from '@/types/cv';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const title = lang === 'es' ? 'Testimonios & Recomendaciones' : 'Testimonials & Recommendations';

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="space-y-6" aria-labelledby="testimonials-heading">
      <header className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2 transition-colors duration-300">
        <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
        <h2 id="testimonials-heading" className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
          {title}
        </h2>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {testimonials.map((t, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between"
          >
            <div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-6 leading-relaxed">
                "{t.text}"
              </p>
            </div>
            <div className="flex items-center gap-4 mt-auto">
              {t.avatar && (
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-gray-100 dark:ring-gray-700" loading="lazy" />
              )}
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100">{t.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
