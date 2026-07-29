import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cvData } from '@/data/cv';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
}

export function AIChatWidget() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'es' ? 'es' : 'en';
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: currentLang === 'es' 
        ? '¡Hola! Soy el asistente virtual de Pedro. ¿Qué te gustaría saber sobre su experiencia o habilidades?' 
        : 'Hi! I am Pedro\'s virtual assistant. What would you like to know about his experience or skills?',
      isBot: true
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const newMsg: Message = { id: Date.now().toString(), text: input, isBot: false };
    setMessages(prev => [...prev, newMsg]);
    setInput('');

    // Simulate AI response based on keywords
    setTimeout(() => {
      const lowerInput = newMsg.text.toLowerCase();
      let botResponse = '';
      const data = cvData[currentLang];
      
      const isEs = currentLang === 'es';

      // Advanced CV Keyword Matching Logic
      const hasWord = (...words: string[]) => words.some(w => lowerInput.includes(w));

      if (hasWord('contacto', 'correo', 'email', 'contact', 'mail', 'phone', 'llamar')) {
        botResponse = isEs 
          ? `Puedes contactarlo a través de su email ${data.contact.email} o en LinkedIn (${data.contact.linkedin}). ¡Responde muy rápido!`
          : `You can reach him via email at ${data.contact.email} or LinkedIn (${data.contact.linkedin}). He replies very quickly!`;
      } 
      else if (hasWord('experiencia', 'trabajo', 'experience', 'work', 'job', 'ticblue')) {
        const ticblueExp = data.experience.find(e => e.company === 'Ticblue');
        botResponse = isEs
          ? `Pedro tiene más de 8 años de experiencia. Su rol más largo ha sido en Ticblue (${ticblueExp?.period}), donde diseñó arquitecturas Serverless y lideró proyectos como la Plataforma de Teleconsulta y UVLPIC.`
          : `Pedro has over 8 years of experience. His longest role was at Ticblue (${ticblueExp?.period}), where he designed Serverless architectures and led projects like the Telehealth Platform and UVLPIC.`;
      }
      else if (hasWord('frontend', 'react', 'next', 'angular', 'tailwind', 'ui')) {
        botResponse = isEs
          ? `En Frontend es un experto. Sus tecnologías principales son: ${data.skills.Frontend}.`
          : `He is a Frontend expert. His main technologies are: ${data.skills.Frontend}.`;
      }
      else if (hasWord('backend', 'node', 'express', 'nest', 'java', 'spring', 'php', 'api')) {
        botResponse = isEs
          ? `En Backend domina fuertemente Node.js y Java. Su stack incluye: ${data.skills.Backend}.`
          : `In Backend he strongly masters Node.js and Java. His stack includes: ${data.skills.Backend}.`;
      }
      else if (hasWord('base de datos', 'database', 'sql', 'postgres', 'mongo', 'supabase')) {
        botResponse = isEs
          ? `Trabaja habitualmente con PostgreSQL, MongoDB y arquitecturas BaaS como Supabase, integrando Row-Level Security (RLS) para máxima seguridad.`
          : `He regularly works with PostgreSQL, MongoDB, and BaaS architectures like Supabase, integrating Row-Level Security (RLS) for maximum security.`;
      }
      else if (hasWord('estudio', 'educacion', 'education', 'universidad', 'inacap', 'titulo')) {
        const edu = data.education?.[0];
        botResponse = isEs
          ? `Estudió "${edu?.title || 'Informática'}" en ${edu?.institution || 'la universidad'}. Además, es un ávido estudiante autodidacta con más de 20 cursos técnicos completados.`
          : `He studied "${edu?.title || 'Computer Science'}" at ${edu?.institution || 'university'}. He is also an avid self-taught student with over 20 completed technical courses.`;
      }
      else if (hasWord('proyecto', 'project', 'centinela', 'gym')) {
        const p1 = data.projects?.[0]?.name;
        const p2 = data.projects?.[1]?.name;
        botResponse = isEs
          ? `Tiene varios proyectos demostrables. Por ejemplo, "${p1}" y "${p2}". Puedes probarlos en la pestaña de Proyectos.`
          : `He has several demonstrable projects. For example, "${p1}" and "${p2}". You can test them in the Projects tab.`;
      }
      else if (hasWord('ingles', 'idioma', 'english', 'language')) {
        botResponse = isEs
          ? `Habla Español (Nativo) y tiene un nivel de Inglés técnico que le permite leer y documentar código sin problemas.`
          : `He speaks Spanish (Native) and has a technical English level that allows him to read and document code without issues.`;
      }
      else {
        // Fallback: Dynamic generic search across the stringified CV
        const cvString = JSON.stringify(data).toLowerCase();
        // Remove special chars to extract pure words from input
        const cleanWords = lowerInput.replace(/[¿?¡!.,]/g, '').split(' ').filter(w => w.length > 3);
        
        const foundWord = cleanWords.find(w => cvString.includes(w));

        if (foundWord) {
          botResponse = isEs
            ? `¡Sí! Pedro tiene experiencia relacionada con "${foundWord}". Puedes encontrar más detalles sobre eso navegando por las secciones de Experiencia o Habilidades en el menú.`
            : `Yes! Pedro has experience related to "${foundWord}". You can find more details about it by browsing the Experience or Skills sections in the menu.`;
        } else {
          botResponse = isEs
            ? 'Hmm, no encontré una respuesta directa sobre eso en mi base de datos. ¡Te sugiero contactarlo directamente a piteraraya@gmail.com!'
            : 'Hmm, I couldn\'t find a direct answer about that in my database. I suggest contacting him directly at piteraraya@gmail.com!';
        }
      }

      setMessages(prev => [...prev, { id: Date.now().toString(), text: botResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-20 z-40 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 print:hidden ${isOpen ? 'scale-0' : 'scale-100'}`}
        aria-label="Open AI Chat"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
        </span>
      </button>

      {/* Ventana de Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[450px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden print:hidden"
          >
            {/* Header */}
            <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                <span className="font-semibold">AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-blue-200 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                    msg.isBot 
                      ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-tl-none shadow-sm' 
                      : 'bg-blue-600 text-white rounded-tr-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={currentLang === 'es' ? 'Pregunta algo...' : 'Ask something...'}
                className="flex-1 bg-gray-100 dark:bg-gray-800 border-none rounded-full px-4 py-2 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
