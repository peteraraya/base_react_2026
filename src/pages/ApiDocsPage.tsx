import { useState } from 'react';
import { PageTransition } from '@/components/animations/PageTransition';
import { cvData } from '@/data/cv';
import { useTranslation } from 'react-i18next';
import { Server, Key, Box, FileJson } from 'lucide-react';

interface Endpoint {
  method: 'GET' | 'POST';
  path: string;
  description: string;
  response: any;
}

export function ApiDocsPage() {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'es' ? 'es' : 'en';
  const data = cvData[lang];

  const endpoints: Endpoint[] = [
    {
      method: 'GET',
      path: '/api/v1/developer/profile',
      description: 'Retrieves core profile information and contact details.',
      response: {
        name: data.name,
        role: data.role,
        location: data.location,
        contact: data.contact,
        status: 'Available'
      }
    },
    {
      method: 'GET',
      path: '/api/v1/developer/skills',
      description: 'Returns a categorized map of technical skills.',
      response: data.skills
    },
    {
      method: 'GET',
      path: '/api/v1/developer/experience',
      description: 'Fetches complete work history and achievements.',
      response: data.experience
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [executed, setExecuted] = useState<Record<number, boolean>>({});

  const handleExecute = (index: number) => {
    setExecuted(prev => ({ ...prev, [index]: true }));
  };

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto p-4 sm:p-8 pt-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Server className="w-8 h-8 text-emerald-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Developer API</h1>
            <span className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-bold font-mono">1.0.0</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            {lang === 'es' 
              ? 'Bienvenido a la documentación de mi API interactiva. Aquí puedes explorar mi perfil como si fuera un microservicio.' 
              : 'Welcome to my interactive API documentation. You can explore my profile as if it were a microservice.'}
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900/30 p-6 rounded-xl border border-gray-200 dark:border-gray-800 mb-8 flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2"><Globe className="w-4 h-4 text-blue-500"/> Base URL</h3>
            <code className="bg-white dark:bg-black px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 text-sm text-pink-600 dark:text-pink-400 block w-fit">
              https://api.pedroaraya.dev
            </code>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2"><Key className="w-4 h-4 text-yellow-500"/> Authentication</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-black px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 block w-fit">
              No API key required
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Endpoints</h2>
          
          {endpoints.map((ep, index) => {
            const isExpanded = expandedIndex === index;
            const isExecuted = executed[index];

            return (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-sm">
                {/* Endpoint Header */}
                <div 
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors ${isExpanded ? 'bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700' : ''}`}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                >
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400 font-bold px-3 py-1 rounded text-sm w-16 text-center">
                      {ep.method}
                    </span>
                    <span className="font-mono text-gray-900 dark:text-gray-100 font-semibold text-sm sm:text-base">
                      {ep.path}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0 ml-19 sm:ml-0">
                    {ep.description}
                  </span>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="p-4 sm:p-6 bg-white dark:bg-[#0d1117]">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <Box className="w-4 h-4"/> Parameters
                      </h4>
                      {!isExecuted ? (
                        <button 
                          onClick={() => handleExecute(index)}
                          className="bg-gray-900 hover:bg-black text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 px-4 py-1.5 rounded-lg text-sm font-bold transition-colors shadow-sm"
                        >
                          Execute
                        </button>
                      ) : (
                        <button 
                          onClick={() => setExecuted(prev => ({ ...prev, [index]: false }))}
                          className="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 px-4 py-1.5 rounded-lg text-sm font-bold transition-colors"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                    
                    <div className="text-sm text-gray-500 italic mb-6">No parameters required.</div>

                    {/* Response Area */}
                    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#161b22]">
                      <div className="bg-gray-100 dark:bg-[#21262d] px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-600 dark:text-gray-300 flex items-center gap-2">
                          <FileJson className="w-4 h-4"/> Server Response
                        </span>
                        {isExecuted && <span className="text-xs text-green-600 dark:text-green-400 font-mono bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded">200 OK</span>}
                      </div>
                      <div className="p-4 overflow-x-auto">
                        <pre className="font-mono text-sm text-gray-800 dark:text-[#c9d1d9]">
                          {isExecuted ? JSON.stringify(ep.response, null, 2) : <span className="text-gray-400 italic">Click "Execute" to fetch data...</span>}
                        </pre>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}

// Temporary workaround for Globe missing icon in this scope if not imported above
import { Globe } from 'lucide-react';
