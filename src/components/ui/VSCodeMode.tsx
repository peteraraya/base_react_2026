import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cvData } from '@/data/cv';
import { useUIStore } from '@/stores/uiStore';
import { X, Code, FileText, FileJson, FileCode, Terminal, LayoutTemplate, Settings, Bell, Circle } from 'lucide-react';
import { motion } from 'framer-motion';

type FileKey = 'about' | 'experience' | 'projects' | 'skills';

interface FileConfig {
  id: FileKey;
  name: string;
  icon: any;
  iconColor: string;
}

export function VSCodeMode() {
  const { isVsCodeMode, toggleVsCodeMode } = useUIStore();
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'es' ? 'es' : 'en';
  const data = cvData[currentLang];

  const [activeFile, setActiveFile] = useState<FileKey>('experience');

  if (!isVsCodeMode) return null;

  const files: FileConfig[] = [
    { id: 'about', name: 'aboutMe.md', icon: FileText, iconColor: 'text-blue-400' },
    { id: 'experience', name: 'experience.ts', icon: FileCode, iconColor: 'text-blue-500' },
    { id: 'projects', name: 'projects.json', icon: FileJson, iconColor: 'text-yellow-400' },
    { id: 'skills', name: 'skills.yml', icon: LayoutTemplate, iconColor: 'text-purple-400' },
  ];

  const renderCode = () => {
    switch (activeFile) {
      case 'about':
        return (
          <pre className="font-mono text-sm leading-loose">
            <span className="text-blue-400"># {data.name}</span>{'\n'}
            <span className="text-gray-400"> {data.role} @ {data.location}</span>{'\n\n'}
            <span className="text-yellow-300">## Resumen</span>{'\n'}
            <span className="text-gray-300">{data.summary}</span>{'\n\n'}
            <span className="text-yellow-300">## Contacto</span>{'\n'}
            <span className="text-gray-400">- </span><span className="text-blue-300">Email:</span> <span className="text-green-300">{data.contact.email}</span>{'\n'}
            <span className="text-gray-400">- </span><span className="text-blue-300">GitHub:</span> <span className="text-green-300">{data.contact.github}</span>{'\n'}
            <span className="text-gray-400">- </span><span className="text-blue-300">LinkedIn:</span> <span className="text-green-300">{data.contact.linkedin}</span>
          </pre>
        );
      case 'experience':
        return (
          <pre className="font-mono text-sm leading-loose">
            <span className="text-purple-400">import</span> <span className="text-blue-300">{'{ Experience }'}</span> <span className="text-purple-400">from</span> <span className="text-green-300">'@/types'</span>;<span className="text-gray-500"> // I love TypeScript</span>{'\n\n'}
            <span className="text-purple-400">export const</span> <span className="text-blue-300">experienceHistory</span><span className="text-gray-300">: Experience[] = [</span>{'\n'}
            {data.experience.map((exp, index) => (
              <span key={index}>
                <span className="text-gray-300">  {'{'}</span>{'\n'}
                <span className="text-blue-200">    company:</span> <span className="text-green-300">"{exp.company}"</span><span className="text-gray-300">,</span>{'\n'}
                <span className="text-blue-200">    role:</span> <span className="text-green-300">"{exp.role}"</span><span className="text-gray-300">,</span>{'\n'}
                <span className="text-blue-200">    period:</span> <span className="text-green-300">"{exp.period}"</span><span className="text-gray-300">,</span>{'\n'}
                <span className="text-blue-200">    projects:</span> <span className="text-gray-300">[</span>{'\n'}
                {exp.projects?.map((proj, pIndex) => (
                  <span key={pIndex}>
                    <span className="text-gray-300">      {'{'}</span>{'\n'}
                    <span className="text-blue-200">        name:</span> <span className="text-green-300">"{proj.name}"</span><span className="text-gray-300">,</span>{'\n'}
                    <span className="text-blue-200">        achievements:</span> <span className="text-gray-300">[</span>{'\n'}
                    {proj.achievements.map((ach, aIndex) => (
                      <span key={aIndex} className="text-green-300">          "{ach}"{aIndex < proj.achievements.length - 1 ? ',' : ''}{'\n'}</span>
                    ))}
                    <span className="text-gray-300">        ]</span>{'\n'}
                    <span className="text-gray-300">      {'}'}{pIndex < exp.projects!.length - 1 ? ',' : ''}</span>{'\n'}
                  </span>
                ))}
                {exp.achievements?.length && (
                  <span>
                    <span className="text-blue-200">    achievements:</span> <span className="text-gray-300">[</span>{'\n'}
                    {exp.achievements.map((ach, aIndex) => (
                      <span key={aIndex} className="text-green-300">      "{ach}"{aIndex < exp.achievements!.length - 1 ? ',' : ''}{'\n'}</span>
                    ))}
                    <span className="text-gray-300">    ]</span>{'\n'}
                  </span>
                )}
                <span className="text-gray-300">  {'}'}{index < data.experience.length - 1 ? ',' : ''}</span>{'\n'}
              </span>
            ))}
            <span className="text-gray-300">];</span>
          </pre>
        );
      case 'projects':
        return (
          <pre className="font-mono text-sm leading-loose text-gray-300">
            {'{'}{'\n'}
            <span className="text-blue-300">  "projects"</span>: [{'\n'}
            {data.projects.map((proj, index) => (
              <span key={index}>
                {'    {'}{'\n'}
                <span className="text-blue-300">      "name"</span>: <span className="text-green-300">"{proj.name}"</span>,{'\n'}
                <span className="text-blue-300">      "period"</span>: <span className="text-green-300">"{proj.period}"</span>,{'\n'}
                <span className="text-blue-300">      "description"</span>: <span className="text-green-300">"{proj.description}"</span>{proj.link ? ',' : ''}{'\n'}
                {proj.link && (
                  <><span className="text-blue-300">      "link"</span>: <span className="text-green-300">"{proj.link}"</span></>
                )}
                {'\n    }'}{index < data.projects.length - 1 ? ',' : ''}{'\n'}
              </span>
            ))}
            {'  ]'}{'\n'}
            {'}'}
          </pre>
        );
      case 'skills':
        return (
          <pre className="font-mono text-sm leading-loose">
            <span className="text-blue-300">skills:</span>{'\n'}
            {Object.entries(data.skills).map(([category, skillsStr]) => (
              <span key={category}>
                <span className="text-blue-200">  {category}:</span>{'\n'}
                {skillsStr.split(',').map((skill, index) => (
                  <span key={index}>
                    <span className="text-gray-400">    - </span><span className="text-green-300">{skill.trim()}</span>{'\n'}
                  </span>
                ))}
              </span>
            ))}
          </pre>
        );
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#1e1e1e] text-[#cccccc] font-sans flex flex-col h-screen w-screen overflow-hidden"
    >
      {/* Title Bar */}
      <div className="h-8 bg-[#323233] flex items-center justify-between px-3 text-xs select-none">
        <div className="flex items-center gap-3">
          <Code className="w-4 h-4 text-blue-400" />
          <div className="flex gap-4 hidden sm:flex text-gray-400">
            <span className="hover:text-gray-200 cursor-pointer">File</span>
            <span className="hover:text-gray-200 cursor-pointer">Edit</span>
            <span className="hover:text-gray-200 cursor-pointer">Selection</span>
            <span className="hover:text-gray-200 cursor-pointer">View</span>
            <span className="hover:text-gray-200 cursor-pointer">Go</span>
            <span className="hover:text-gray-200 cursor-pointer">Run</span>
            <span className="hover:text-gray-200 cursor-pointer">Terminal</span>
          </div>
        </div>
        <div className="text-gray-400 text-center flex-1 sm:flex-none">
          {data.name.replace(' ', '')}Portfolio - Visual Studio Code
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleVsCodeMode} className="text-gray-400 hover:text-white bg-red-500/10 hover:bg-red-500/30 px-2 py-1 rounded transition-colors" title="Exit VS Code Mode">
            Exit Mode
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-6 border-r border-[#252526]">
          <FileText className="w-6 h-6 text-white cursor-pointer" />
          <Terminal className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-300" />
          <div className="mt-auto flex flex-col gap-6">
            <Settings className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-300 mb-4" />
          </div>
        </div>

        {/* Sidebar / Explorer */}
        <div className="w-64 bg-[#252526] flex flex-col border-r border-[#1e1e1e]">
          <div className="text-xs uppercase px-4 py-2 text-gray-400 font-semibold tracking-wide">
            Explorer
          </div>
          <div className="px-1">
            <div className="flex items-center gap-1 text-sm text-gray-300 font-bold px-3 py-1 cursor-pointer">
              <span className="text-xs">▼</span> PORTFOLIO
            </div>
            <div className="flex flex-col mt-1">
              {files.map(file => (
                <div 
                  key={file.id} 
                  onClick={() => setActiveFile(file.id)}
                  className={`flex items-center gap-2 px-6 py-1 text-sm cursor-pointer select-none transition-colors ${
                    activeFile === file.id ? 'bg-[#37373d] text-white' : 'text-gray-400 hover:bg-[#2a2d2e] hover:text-gray-300'
                  }`}
                >
                  <file.icon className={`w-4 h-4 ${file.iconColor}`} />
                  {file.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] overflow-hidden">
          {/* Tabs */}
          <div className="flex h-9 bg-[#252526] overflow-x-auto no-scrollbar">
            {files.map(file => (
              <div 
                key={file.id}
                onClick={() => setActiveFile(file.id)}
                className={`flex items-center gap-2 px-4 min-w-[120px] border-r border-[#1e1e1e] cursor-pointer group select-none ${
                  activeFile === file.id ? 'bg-[#1e1e1e] text-white border-t border-t-blue-500' : 'bg-[#2d2d2d] text-gray-500 hover:bg-[#2d2d2d]/80'
                }`}
              >
                <file.icon className={`w-4 h-4 ${file.iconColor}`} />
                <span className="text-sm">{file.name}</span>
                <X className={`w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 ${activeFile === file.id ? 'text-gray-400 hover:text-white' : ''}`} />
              </div>
            ))}
          </div>

          {/* Breadcrumbs */}
          <div className="h-6 flex items-center px-4 text-xs text-gray-500 gap-1 border-b border-[#252526] shadow-sm">
            <span>portfolio</span>
            <span></span>
            <span>src</span>
            <span></span>
            <span className="text-gray-400">{files.find(f => f.id === activeFile)?.name}</span>
          </div>

          {/* Code View */}
          <div className="flex-1 overflow-auto p-4 custom-vscode-scrollbar">
            <div className="flex">
              {/* Line Numbers */}
              <div className="w-12 flex flex-col text-right pr-4 text-[#858585] text-sm font-mono select-none">
                {Array.from({ length: 150 }).map((_, i) => (
                  <div key={i} className={i + 1 === 1 ? 'text-[#c6c6c6]' : ''}>{i + 1}</div>
                ))}
              </div>
              {/* Actual Code */}
              <div className="flex-1">
                {renderCode()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-3 text-xs select-none">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
            <span className="text-sm">×</span> 0
            <span className="text-sm ml-2">⚠</span> 0
          </div>
          <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
            <Circle className="w-3 h-3 animate-pulse" /> Live Share
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer hidden sm:block">Ln 1, Col 1</span>
          <span className="hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer hidden sm:block">Spaces: 2</span>
          <span className="hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer hidden sm:block">UTF-8</span>
          <span className="hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
            {activeFile === 'experience' ? 'TypeScript React' : activeFile === 'about' ? 'Markdown' : activeFile === 'projects' ? 'JSON' : 'YAML'}
          </span>
          <span className="hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer flex items-center gap-1">
            <Bell className="w-3 h-3" />
          </span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-vscode-scrollbar::-webkit-scrollbar {
          width: 14px;
          height: 14px;
        }
        .custom-vscode-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-vscode-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(121, 121, 121, 0.4);
          border: 3px solid #1e1e1e;
        }
        .custom-vscode-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 100, 100, 0.7);
        }
      `}} />
    </motion.div>
  );
}
