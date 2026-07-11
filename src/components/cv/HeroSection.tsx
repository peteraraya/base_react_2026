import { MapPin, Mail, Linkedin, Github, Download, Phone } from 'lucide-react';
import { CVData } from '@/types/cv';

export function HeroSection({ data }: { data: CVData }) {
  return (
    <section className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 text-center sm:text-left">
      <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100 flex items-center justify-center">
        {/* Asegúrate de tener una imagen llamada profile.png en tu carpeta public/ */}
        <img src="/profile.png" alt={data.name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Pedro+Araya&size=160&background=random'; }} />
      </div>

      <div className="space-y-4 flex-1">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">{data.name}</h1>
        <p className="text-xl sm:text-2xl text-blue-600 font-medium">{data.role}</p>
        
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4">
          <div className="flex items-center gap-1.5 text-gray-600 px-1">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span className="font-medium">{data.location}</span>
          </div>
          <a href={`mailto:${data.contact.email}`} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-700 rounded-full transition-all duration-300 font-medium text-sm focus:ring-2 focus:ring-blue-600 outline-none">
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">Enviar correo a </span>
            <span>Email</span>
          </a>
          <a href={`tel:${data.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-700 rounded-full transition-all duration-300 font-medium text-sm focus:ring-2 focus:ring-blue-600 outline-none">
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">Llamar al </span>
            <span>Teléfono</span>
          </a>
          <a href={`https://${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-700 rounded-full transition-all duration-300 font-medium text-sm focus:ring-2 focus:ring-blue-600 outline-none">
            <Linkedin className="w-4 h-4" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a href={`https://${data.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-700 rounded-full transition-all duration-300 font-medium text-sm focus:ring-2 focus:ring-blue-600 outline-none">
            <Github className="w-4 h-4" aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Call to Action Principal */}
        <div className="pt-4 flex justify-center sm:justify-start">
          <a 
            href="/CV_Pedro_Araya_2026.pdf" 
            download="CV_Pedro_Araya.pdf" 
            className="group flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-blue-600 text-white rounded-full transition-colors duration-300 font-medium shadow-sm hover:shadow-md active:scale-95 outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            <span>Descargar CV</span>
          </a>
        </div>

      </div>
    </section>
  );
}
