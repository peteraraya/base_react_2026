import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { cvData } from '@/data/cv';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageTransition } from '@/components/animations/PageTransition';
import { SpotlightCard } from '@/components/animations/SpotlightCard';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export function ContactPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'es' ? 'es' : 'en';
  const data = cvData[currentLang];
  const contact = data.contact;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Guardamos la referencia al formulario antes de la operación asíncrona
    const formElement = event.currentTarget;
    
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    const formData = new FormData(formElement);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    
    if (accessKey) {
      formData.append("access_key", accessKey);
    } else {
      console.error("Missing Web3Forms Access Key in environment variables.");
      setIsError(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        formElement.reset();
      } else {
        setIsError(true);
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <PageTransition>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Columna Izquierda: Información de contacto */}
          <div className="flex flex-col gap-6">
            {contactItems.map((item, idx) => (
              <a 
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block transform hover:-translate-y-1 transition-all duration-300 rounded-2xl ${item.colorClass} h-full`}
              >
                <SpotlightCard className="group p-6 border-2 border-transparent h-full">
                  <div className="flex items-center w-full h-full">
                    <div className="flex-shrink-0 w-14 h-14 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
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
                  </div>
                </SpotlightCard>
              </a>
            ))}
          </div>

          {/* Columna Derecha: Formulario de contacto */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
             <form onSubmit={onSubmit} className="space-y-6">
               <div>
                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                   {t('contact.form.name')}
                 </label>
                 <input 
                   type="text" 
                   id="name" 
                   name="name" 
                   required
                   className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-100 transition-shadow"
                 />
               </div>
               
               <div>
                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                   {t('contact.form.email')}
                 </label>
                 <input 
                   type="email" 
                   id="email" 
                   name="email" 
                   required
                   className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-100 transition-shadow"
                 />
               </div>

               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                   {t('contact.form.message')}
                 </label>
                 <textarea 
                   id="message" 
                   name="message" 
                   required
                   rows={5}
                   className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-100 transition-shadow resize-none"
                 ></textarea>
               </div>

               {isSuccess && (
                 <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg">
                   <CheckCircle2 className="w-5 h-5" />
                   <span className="text-sm font-medium">{t('contact.form.success')}</span>
                 </div>
               )}

               {isError && (
                 <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                   <AlertCircle className="w-5 h-5" />
                   <span className="text-sm font-medium">{t('contact.form.error')}</span>
                 </div>
               )}

               <button 
                 type="submit" 
                 disabled={isSubmitting}
                 className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-300 font-medium shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
               >
                 {isSubmitting ? (
                   <>
                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                     <span>{t('contact.form.sending')}</span>
                   </>
                 ) : (
                   <>
                     <Send className="w-5 h-5" />
                     <span>{t('contact.form.send')}</span>
                   </>
                 )}
               </button>
             </form>
          </div>

        </div>
      </FadeIn>
    </div>
    </PageTransition>
  );
}
