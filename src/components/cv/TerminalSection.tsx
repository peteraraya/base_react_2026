import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function TerminalSection() {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<React.ReactNode[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    let newOutput = <></>;
    
    if (cmd === 'npx pedro-araya') {
      newOutput = (
        <div className="text-green-400">
          <p>{`> Executing npx pedro-araya...`}</p>
          <br/>
          <p className="font-bold text-blue-400">Pedro Araya - Full Stack Developer</p>
          <p>Location: Chile</p>
          <p>Stack: React, TypeScript, Node.js, Tailwind</p>
          <br/>
          <p>Contact: piteraraya@gmail.com</p>
          <p>GitHub: github.com/peteraraya</p>
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
      newOutput = <p className="text-red-400">Command not found: {cmd}. Try 'npx pedro-araya'</p>;
    }

    setOutput(prev => [...prev, 
      <div key={prev.length} className="mb-2">
        <p className="text-gray-400">$ {input}</p>
        {newOutput}
      </div>
    ]);
    setInput('');
  };

  useEffect(() => {
    if (output.length === 0) {
      setOutput([
        <div key="welcome" className="mb-4">
          <p className="text-green-400">{t('nav.home') === 'Inicio' ? "Bienvenido a la Terminal de Pedro." : "Welcome to Pedro's Terminal."}</p>
          <p className="text-gray-400">{t('nav.home') === 'Inicio' ? "Escribe" : "Type"} <span className="text-white font-bold">npx pedro-araya</span> {t('nav.home') === 'Inicio' ? "para ver mi información, o" : "to see my card, or"} <span className="text-white font-bold">clear</span> {t('nav.home') === 'Inicio' ? "para limpiar." : "to reset."}</p>
        </div>
      ]);
    }
  }, [output.length]);

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
      <div 
        className="p-4 h-64 overflow-y-auto text-gray-300"
        onClick={() => inputRef.current?.focus()}
      >
        {output.map((out, i) => (
          <div key={i}>{out}</div>
        ))}
        
        <form onSubmit={handleSubmit} className="flex items-center mt-2">
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
