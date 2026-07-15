import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { cvData } from '@/data/cv';
import { FadeIn } from '@/components/animations/FadeIn';
import { PageTransition } from '@/components/animations/PageTransition';
import { SpotlightCard } from '@/components/animations/SpotlightCard';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, AlertCircle, Copy, Calendar } from 'lucide-react';
import { useUIStore } from '@/stores/uiStore';
import { CalendarModal } from '@/components/ui/CalendarModal';

export function ContactPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'es' ? 'es' : 'en';
  const data = cvData[currentLang];
  const contact = data.contact;
  const addToast = useUIStore((s) => s.addToast);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

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

  const handleCopy = (text: string, title: string) => {
    navigator.clipboard.writeText(text);
    addToast(
      currentLang === 'es' ? `¡${title} copiado al portapapeles!` : `${title} copied to clipboard!`,
      'success'
    );
  };

  const contactItems = [
    {
      title: currentLang === 'es' ? 'Correo Electrónico' : 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      copyValue: contact.email,
      icon: <Mail className="w-8 h-8 text-blue-500" />,
      colorClass: 'hover:border-blue-500 hover:shadow-blue-500/20'
    },
    {
      title: currentLang === 'es' ? 'LinkedIn' : 'LinkedIn',
      value: 'Pedro Araya Gálvez',
      href: `https://${contact.linkedin}`,
      target: "_blank",
      icon: <Linkedin className="w-8 h-8 text-indigo-500" />,
      colorClass: 'hover:border-indigo-500 hover:shadow-indigo-500/20'
    },
    {
      title: currentLang === 'es' ? 'GitHub' : 'GitHub',
      value: 'peteraraya',
      href: `https://${contact.github}`,
      target: "_blank",
      icon: <Github className="w-8 h-8 text-gray-700 dark:text-gray-300" />,
      colorClass: 'hover:border-gray-500 hover:shadow-gray-500/20'
    },
    {
      title: currentLang === 'es' ? 'Teléfono' : 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s+/g, '')}`,
      copyValue: contact.phone,
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
            
            {/* Banner de Disponibilidad */}
            <SpotlightCard className="p-6 border border-green-200 dark:border-green-900/50 bg-green-50/50 dark:bg-green-900/10 relative overflow-hidden flex flex-col gap-5">
              <div className="absolute top-0 right-0 p-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-green-800 dark:text-green-400 mb-2">
                  {currentLang === 'es' ? '🚀 Disponibilidad Inmediata' : '🚀 Immediate Availability'}
                </h3>
                <p className="text-green-700 dark:text-green-500/80 font-medium text-sm leading-relaxed">
                  {currentLang === 'es' 
                    ? 'Abierto a escuchar nuevas oportunidades laborales (roles remotos). Si mi perfil se ajusta a lo que buscas, ¡me encantaría conversar!' 
                    : 'Open to hearing about new job opportunities (remote roles). If my profile fits what you are looking for, I would love to chat!'}
                </p>
              </div>
              
              {/* HOTFIX: Botón de calendario oculto temporalmente
              <button 
                onClick={() => setIsCalendarOpen(true)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all duration-300 font-bold shadow-md hover:shadow-lg active:scale-95 outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <Calendar className="w-5 h-5" />
                <span>{currentLang === 'es' ? 'Agendar videollamada (15 min)' : 'Schedule a call (15 min)'}</span>
              </button>
              */}
            </SpotlightCard>

            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-2">
              {currentLang === 'es' ? 'Canales de Contacto' : 'Contact Channels'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactItems.map((item, idx) => (
                <div key={idx} className={`relative block transform hover:-translate-y-1 transition-all duration-300 rounded-xl ${item.colorClass} w-full`}>
                  <SpotlightCard className="group p-5 border border-gray-100 dark:border-gray-800 h-full flex flex-col justify-center items-center text-center gap-3">
                    
                    {item.copyValue && (
                      <button 
                        onClick={(e) => { e.preventDefault(); handleCopy(item.copyValue!, item.title); }}
                        className="absolute top-3 right-3 p-2 bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                        title={currentLang === 'es' ? 'Copiar al portapapeles' : 'Copy to clipboard'}
                        aria-label="Copiar"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    )}

                    <a href={item.href} target={item.target || "_self"} rel={item.target ? "noopener noreferrer" : undefined} className="flex flex-col items-center w-full h-full outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="w-full overflow-hidden mt-3">
                        <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 font-medium text-xs truncate w-full px-2">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </SpotlightCard>
                </div>
              ))}
            </div>
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

    {/* Calendar Modal */}
    <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </PageTransition>
  );
}
