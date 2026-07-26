import { useState } from 'react';
import { PageTransition } from '@/components/animations/PageTransition';
import { useTranslation } from 'react-i18next';
import { Layers, MousePointer2 } from 'lucide-react';

export function DesignSystemPage() {
  const { i18n } = useTranslation();
  const isEs = i18n.language === 'es';

  const [btnSize, setBtnSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [btnVariant, setBtnVariant] = useState<'primary' | 'secondary' | 'outline'>('primary');
  
  const getBtnClasses = () => {
    let classes = 'rounded-xl font-bold transition-all flex items-center justify-center ';
    
    // Size
    if (btnSize === 'sm') classes += 'px-3 py-1.5 text-sm ';
    else if (btnSize === 'md') classes += 'px-5 py-2.5 text-base ';
    else classes += 'px-8 py-4 text-lg ';

    // Variant
    if (btnVariant === 'primary') classes += 'bg-blue-600 hover:bg-blue-700 text-white shadow-md ';
    else if (btnVariant === 'secondary') classes += 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white ';
    else classes += 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-900/30 ';

    return classes;
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto p-4 sm:p-8 pt-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-8 h-8 text-purple-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Design System</h1>
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-2 py-1 rounded text-xs font-bold font-mono border border-purple-200 dark:border-purple-800">v1.2.0</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            {isEs 
              ? 'Un entorno aislado interactivo (estilo Storybook) para probar los componentes UI de este portafolio. Demuestra mi enfoque en la creación de componentes modulares, reutilizables y altamente personalizables.' 
              : 'An isolated interactive environment (Storybook style) to test this portfolio\'s UI components. Demonstrates my focus on building modular, reusable, and highly customizable components.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3 space-y-2 border-r border-gray-200 dark:border-gray-800 pr-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Components</h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg font-medium cursor-pointer">Button</div>
            <div className="px-4 py-2 rounded-lg font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-not-allowed opacity-50">Card</div>
            <div className="px-4 py-2 rounded-lg font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-not-allowed opacity-50">Modal</div>
            <div className="px-4 py-2 rounded-lg font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-not-allowed opacity-50">Input</div>
          </div>

          {/* Canvas */}
          <div className="lg:col-span-9 flex flex-col min-h-[500px] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-white dark:bg-[#0a0a0a]">
            {/* Toolbar */}
            <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 flex items-center gap-2">
                <MousePointer2 className="w-4 h-4" /> Canvas
              </span>
            </div>

            {/* Render Area */}
            <div className="flex-1 flex items-center justify-center p-12 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTI4LDEyOCwxMjgsMC4yKSIvPjwvc3ZnPg==')]">
              <button className={getBtnClasses()}>
                {isEs ? 'Botón Interactivo' : 'Interactive Button'}
              </button>
            </div>

            {/* Controls Area */}
            <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-6">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">Properties</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Size Control */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Size</label>
                  <div className="flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    {['sm', 'md', 'lg'].map(s => (
                      <button 
                        key={s}
                        onClick={() => setBtnSize(s as any)}
                        className={`flex-1 py-2 text-sm font-medium transition-colors ${btnSize === s ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                      >
                        {s.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Variant Control */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Variant</label>
                  <div className="flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    {['primary', 'secondary', 'outline'].map(v => (
                      <button 
                        key={v}
                        onClick={() => setBtnVariant(v as any)}
                        className={`flex-1 py-2 text-sm font-medium capitalize transition-colors ${btnVariant === v ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
