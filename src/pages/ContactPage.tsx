import { useTranslation } from 'react-i18next';
import { cvData } from '@/data/cv';
import { FadeIn } from '@/components/animations/FadeIn';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export function ContactPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'es' ? 'es' : 'en';
  const data = cvData[currentLang];
  const contact = data.contact;

  const contactItems = [
    {
      title: currentLang === 'es' ? 'Correo Electrónico' : 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: <Mail className="w-8 h-8 text-blue-500" />,
      colorClass: 'hover:border-blue-500 hover:shadow-blue-500/20'
    },
    {
      title: currentLang === 'es' ? 'LinkedIn' : 'LinkedIn',
      value: 'Pedro Araya Gálvez',
      href: `https://${contact.linkedin}`,
      icon: <Linkedin className="w-8 h-8 text-indigo-500" />,
      colorClass: 'hover:border-indigo-500 hover:shadow-indigo-500/20'
    },
    {
      title: currentLang === 'es' ? 'GitHub' : 'GitHub',
      value: 'peteraraya',
      href: `https://${contact.github}`,
      icon: <Github className="w-8 h-8 text-gray-700 dark:text-gray-300" />,
      colorClass: 'hover:border-gray-500 hover:shadow-gray-500/20'
    },
    {
      title: currentLang === 'es' ? 'Teléfono' : 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s+/g, '')}`,
      icon: <Phone className="w-8 h-8 text-emerald-500" />,
      colorClass: 'hover:border-emerald-500 hover:shadow-emerald-500/20'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 space-y-12 relative min-h-[80vh] flex flex-col justify-center">
      {/* Elemento de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/5 dark:to-indigo-500/5 blur-3xl -z-10 rounded-full pointer-events-none" />
      
      <FadeIn delay={0.1}>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 tracking-tight">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactItems.map((item, idx) => (
            <a 
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center p-6 bg-white dark:bg-gray-800 rounded-2xl border-2 border-transparent shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${item.colorClass}`}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
