import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import confetti from 'canvas-confetti';
import { Mail, Briefcase, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ColumnId = 'backlog' | 'interview' | 'offer' | 'hired';

export function HireMeKanban() {
  const { i18n } = useTranslation();
  const isEs = i18n.language === 'es';

  const [cardColumn, setCardColumn] = useState<ColumnId>('backlog');

  const columns: { id: ColumnId; title: string }[] = [
    { id: 'backlog', title: isEs ? 'Candidatos' : 'Candidates' },
    { id: 'interview', title: isEs ? 'Entrevista Técnica' : 'Tech Interview' },
    { id: 'offer', title: isEs ? 'Oferta' : 'Offer' },
    { id: 'hired', title: isEs ? '¡Contratado!' : 'Hired!' },
  ];

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', 'pedro-card');
    e.currentTarget.classList.add('opacity-50');
  };

  const handleDragEnd = (e: React.DragEvent) => {
    e.currentTarget.classList.remove('opacity-50');
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, colId: ColumnId) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    if (data === 'pedro-card' && cardColumn !== colId) {
      setCardColumn(colId);
      if (colId === 'hired') {
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.5 },
          colors: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6']
        });
      }
    }
  };

  return (
    <div className="mt-24 max-w-5xl mx-auto print:hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">
          {isEs ? 'Simulador de Contratación (Kanban)' : 'Hiring Simulator (Kanban)'}
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          {isEs 
            ? 'Arrastra mi tarjeta hasta la columna final para ver cómo manejo interfaces Drag & Drop (y estado).' 
            : 'Drag my card to the final column to see how I handle Drag & Drop interfaces (and state).'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 overflow-x-auto pb-4">
        {columns.map((col) => (
          <div
            key={col.id}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, col.id)}
            className={`flex flex-col bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-4 border-2 transition-colors min-h-[250px]
              ${cardColumn === col.id ? 'border-transparent' : 'border-dashed border-gray-200 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-700'}
            `}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wider">{col.title}</h3>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-bold px-2 py-0.5 rounded-full">
                {cardColumn === col.id ? '1' : '0'}
              </span>
            </div>

            <AnimatePresence>
              {cardColumn === col.id && (
                <motion.div
                  layoutId="pedro-card"
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm rounded-xl p-4 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                >
                  <div
                    draggable
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    className="cursor-grab active:cursor-grabbing w-full h-full"
                  >
                  <div className="flex items-center gap-3 mb-3">
                    <img src="/img/pedroaraya.png" alt="Pedro" className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Pedro+Araya'; }} />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white leading-tight">Pedro Araya</h4>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Senior Full Stack</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-400 font-semibold">React 19</span>
                    <span className="text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-400 font-semibold">NestJS</span>
                    <span className="text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-400 font-semibold">Zustand</span>
                  </div>

                  {col.id === 'hired' ? (
                    <a 
                      href="mailto:piteraraya@gmail.com"
                      className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-xs py-2 rounded-lg transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {isEs ? 'Enviar Oferta' : 'Send Offer'}
                    </a>
                  ) : (
                    <div className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1 pointer-events-none">
                      {isEs ? 'Arrastrar' : 'Drag me'} <ChevronRight className="w-3 h-3" />
                    </div>
                  )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
