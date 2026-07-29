import { useTranslation } from 'react-i18next';
import { Code, Briefcase, Globe, Award } from 'lucide-react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

function NumberTicker({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useSpring(0, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  const display = useTransform(motionValue, (current) => 
    `${prefix}${Math.round(current)}${suffix}`
  );

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function ImpactMetrics() {
  const { i18n } = useTranslation();
  const isEs = i18n.language === 'es';

  const metrics = [
    {
      id: 1,
      icon: <Briefcase className="w-6 h-6 text-blue-500" />,
      num: 8,
      prefix: "+",
      suffix: "",
      label: isEs ? "Años de Experiencia" : "Years Experience",
    },
    {
      id: 2,
      icon: <Code className="w-6 h-6 text-green-500" />,
      num: 10,
      prefix: "+",
      suffix: "",
      label: isEs ? "Proyectos Entregados" : "Projects Delivered",
    },
    {
      id: 3,
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      num: 100,
      prefix: "",
      suffix: "%",
      label: isEs ? "Trabajo Remoto" : "Remote Work",
    },
    {
      id: 4,
      icon: <Award className="w-6 h-6 text-amber-500" />,
      num: 14,
      prefix: "+",
      suffix: "",
      label: isEs ? "Cursos Completados" : "Courses Completed",
    }
  ];

  return (
    <section className="py-8 border-y border-gray-200 dark:border-gray-800 print:hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {metrics.map((metric, index) => (
          <motion.div 
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col items-center p-4 rounded-2xl bg-white dark:bg-gray-800/50 shadow-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900/50 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="mb-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-full group-hover:scale-110 transition-transform">
              {metric.icon}
            </div>
            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-1 tracking-tighter">
              <NumberTicker value={metric.num} prefix={metric.prefix} suffix={metric.suffix} />
            </h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
