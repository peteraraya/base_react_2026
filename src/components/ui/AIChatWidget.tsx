import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

      if (currentLang === 'es') {
        if (lowerInput.includes('react') || lowerInput.includes('frontend')) {
          botResponse = 'Pedro tiene amplia experiencia en frontend con React (desde clases hasta Hooks y Server Components), Next.js y Angular. Ha liderado migraciones complejas hacia React.';
        } else if (lowerInput.includes('backend') || lowerInput.includes('node')) {
          botResponse = 'En backend domina Node.js, NestJS y PHP. Recientemente ha trabajado mucho con arquitecturas serverless en Atlassian Forge y Supabase.';
        } else if (lowerInput.includes('experiencia') || lowerInput.includes('trabajo')) {
          botResponse = 'Tiene más de 8 años de experiencia, destacando su rol Full Stack en Ticblue (2020-2026) donde lideró el desarrollo end-to-end de múltiples plataformas.';
        } else if (lowerInput.includes('contacto') || lowerInput.includes('correo') || lowerInput.includes('email')) {
          botResponse = 'Puedes escribirle a piteraraya@gmail.com o contactarlo por LinkedIn. ¡Estará feliz de hablar contigo!';
        } else {
          botResponse = '¡Interesante! Como soy un bot básico simulado para este portafolio, te sugiero revisar la sección de "Experiencia" o contactarlo directamente para más detalles sobre eso.';
        }
      } else {
        if (lowerInput.includes('react') || lowerInput.includes('frontend')) {
          botResponse = 'Pedro has extensive frontend experience with React, Next.js, and Angular. He has led complex migrations to React.';
        } else if (lowerInput.includes('backend') || lowerInput.includes('node')) {
          botResponse = 'In backend he is proficient in Node.js, NestJS, and PHP. He recently works heavily with serverless architectures on Atlassian Forge and Supabase.';
        } else if (lowerInput.includes('experience') || lowerInput.includes('work')) {
          botResponse = 'He has over 8 years of experience, highlighting his Full Stack role at Ticblue (2020-2026) where he led end-to-end development of multiple platforms.';
        } else if (lowerInput.includes('contact') || lowerInput.includes('email')) {
          botResponse = 'You can email him at piteraraya@gmail.com or connect on LinkedIn. He would be happy to chat!';
        } else {
          botResponse = 'Interesting! As I am a basic simulated bot for this portfolio, I suggest checking the "Experience" section or contacting him directly for more details.';
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
