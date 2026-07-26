import { MapPin, Mail, Linkedin, Github, Download, Phone, Copy } from 'lucide-react';
import { CVData } from '@/types/cv';
import { useUIStore } from '@/stores/uiStore';
import { useTranslation } from 'react-i18next';
import { generateVCard } from '@/lib/vcard';
import { Contact as ContactIcon } from 'lucide-react';

export function HeroSection({ data }: { data: CVData }) {
  const addToast = useUIStore((s) => s.addToast);
  const { i18n } = useTranslation();
  const isEs = i18n.language === 'es';

  const handleCopy = (text: string, type: 'Email' | 'Teléfono') => {
    navigator.clipboard.writeText(text);
    addToast(
      isEs ? `¡${type} copiado al portapapeles!` : `${type} copied to clipboard!`,
      'success'
    );
  };

  return (
    <section className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 text-left p-4 sm:p-8 rounded-3xl overflow-hidden mb-12">
      {/* Background Animated Orbs for Premium SaaS look */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none print:hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/20 dark:bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-10 -right-20 w-72 h-72 bg-purple-500/20 dark:bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-colors duration-300 relative z-10">
        <img src="/img/pedroaraya.png" alt={data.name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Pedro+Araya&size=160&background=random'; }} />
      </div>

      <div className="space-y-4 flex-1 w-full min-w-0">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight transition-colors duration-300">{data.name}</h1>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 transition-colors duration-300">
          <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-medium">{data.role}</p>
          {data.availability && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider w-fit shadow-sm border border-emerald-200 dark:border-emerald-800">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{data.availability}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 px-1 py-1 transition-colors duration-300">
          <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span className="font-medium text-sm sm:text-base">{data.location}</span>
        </div>
        
        {/* Controles unificados con wrap para móviles */}
        <div className="flex flex-wrap items-center justify-start gap-3 mt-4 w-full print:hidden">
          
          <div className="flex items-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full overflow-hidden hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-600 dark:focus-within:ring-blue-500">
            <a 
              href={`mailto:${data.contact.email}`} 
              className="flex items-center gap-2 px-3 py-1.5 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium text-sm outline-none"
              title={isEs ? "Enviar email" : "Send email"}
            >
              <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Email</span>
            </a>
            <button 
              onClick={() => handleCopy(data.contact.email, 'Email')} 
              className="px-2.5 py-1.5 border-l border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 outline-none transition-colors"
              title={isEs ? "Copiar al portapapeles" : "Copy to clipboard"}
            >
              <Copy className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>
          
          <div className="flex items-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full overflow-hidden hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-600 dark:focus-within:ring-blue-500">
            <a 
              href={`tel:${data.contact.phone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-2 px-3 py-1.5 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium text-sm outline-none"
              title={isEs ? "Llamar" : "Call"}
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Teléfono</span>
            </a>
            <button 
              onClick={() => handleCopy(data.contact.phone, 'Teléfono')} 
              className="px-2.5 py-1.5 border-l border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 outline-none transition-colors"
              title={isEs ? "Copiar al portapapeles" : "Copy to clipboard"}
            >
              <Copy className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>

          <a href={`https://${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 rounded-full transition-all duration-300 font-medium text-sm focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 outline-none">
            <Linkedin className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>

          <a href={`https://${data.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 rounded-full transition-all duration-300 font-medium text-sm focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 outline-none">
            <Github className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>GitHub</span>
          </a>

 

          <button 
            onClick={() => generateVCard(data.name, data.role, data.contact)}
            className="flex items-center gap-2 px-4 py-1.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/30 text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 rounded-full transition-all duration-300 font-bold text-sm outline-none"
            title={isEs ? 'Añadir a mis contactos (vCard)' : 'Add to contacts (vCard)'}
          >
            <ContactIcon className="w-4 h-4 shrink-0 text-purple-500" aria-hidden="true" />
            <span>vCard</span>
          </button>

          <a 
            href="/CV_Pedro_Araya_2026.pdf" 
            download="CV_Pedro_Araya_2026.pdf" 
            className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 font-bold text-sm shadow-md hover:shadow-lg active:scale-95 outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            <Download className="w-4 h-4 shrink-0 animate-bounce" aria-hidden="true" />
            <span>{isEs ? 'Descargar CV (PDF)' : 'Download CV (PDF)'}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
