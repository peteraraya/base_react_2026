import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function TerminalSection() {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<React.ReactNode[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    let newOutput = <></>;
    
    if (cmd === 'npx pedro-araya' || cmd === 'npx pedro-araya-cv') {
      newOutput = (
        <div className="text-green-400">
          <p>{`> Executing npx pedro-araya-cv...`}</p>
          <br/>
          <p className="font-bold text-blue-400">Pedro Araya - Full Stack Developer</p>
          <p>Location: Quillota, Chile</p>
          <p>Stack: React, TypeScript, NestJS, Atlassian Forge</p>
          <br/>
          <p>Contact: piteraraya@gmail.com</p>
          <p>GitHub: github.com/peteraraya</p>
          <p>Portfolio: pedroaraya.vercel.app</p>
          <br/>
          <p className="text-yellow-400">Ready to build amazing things!</p>
        </div>
      );
    } else if (cmd === 'clear') {
      setOutput([]);
      setInput('');
      return;
    } else if (cmd === '') {
      newOutput = <></>;
    } else {
      newOutput = <p className="text-red-400">Command not found: {cmd}. Try 'npx pedro-araya-cv'</p>;
    }

    setOutput(prev => [...prev, 
      <div key={prev.length} className="mb-2">
        <p className="text-gray-400">$ {input}</p>
        {newOutput}
      </div>
    ]);
    setInput('');
  };

  const [typedWelcome, setTypedWelcome] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [output, isTyping, typedWelcome]);

  useEffect(() => {
    if (output.length === 0) {
      const fullText = t('nav.home') === 'Inicio' ? "Bienvenido a la Terminal de Pedro." : "Welcome to Pedro's Terminal.";
      let currentText = '';
      let i = 0;
      
      const interval = setInterval(() => {
        if (i < fullText.length) {
          currentText += fullText.charAt(i);
          setTypedWelcome(currentText);
          i++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          setOutput([
            <div key="welcome" className="mb-4">
              <p className="text-green-400">{fullText}</p>
              <p className="text-gray-400 mt-2 transition-opacity duration-1000">
                {t('nav.home') === 'Inicio' ? "Escribe" : "Type"} <span className="text-white font-bold text-blue-400 bg-blue-900/30 px-1 rounded">npx pedro-araya-cv</span> {t('nav.home') === 'Inicio' ? "para ver mi información, o" : "to see my card, or"} <span className="text-white font-bold">clear</span> {t('nav.home') === 'Inicio' ? "para limpiar." : "to reset."}
              </p>
            </div>
          ]);
        }
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [output.length, t]);

  return (
    <div className="w-full rounded-xl overflow-hidden bg-[#1e1e1e] border border-gray-800 shadow-2xl font-mono text-sm print:hidden">
      {/* Window Header */}
      <div className="flex items-center px-4 py-3 bg-[#2d2d2d] border-b border-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 flex justify-center items-center text-gray-400 text-xs gap-2">
          <TerminalIcon className="w-4 h-4" />
          <span>pedro@macbook:~</span>
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="bg-[#1e1e1e] border-b border-gray-800 px-4 py-2 flex items-center justify-between text-xs text-gray-500">
        <span className="flex items-center gap-2">🚀 Try in your real terminal: <code className="text-blue-400 select-all font-bold">npx pedro-araya-cv</code></span>
      </div>
      
      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="p-4 h-64 overflow-y-auto text-gray-300 relative group scroll-smooth"
        onClick={() => inputRef.current?.focus()}
      >
        {isTyping ? (
          <div className="mb-4">
            <p className="text-green-400">{typedWelcome}<span className="animate-pulse">_</span></p>
          </div>
        ) : (
          output.map((out, i) => (
            <div key={i}>{out}</div>
          ))
        )}
        
        <form onSubmit={handleSubmit} className={`flex items-center mt-2 ${isTyping ? 'opacity-0' : 'opacity-100 transition-opacity'}`}>
          <span className="text-green-400 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-100"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
}
