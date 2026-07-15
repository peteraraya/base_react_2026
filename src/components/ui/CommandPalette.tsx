import { Command } from 'cmdk';
import { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { 
  Monitor, Moon, Sun, 
  Home, User, Briefcase, BookOpen, Mail, 
  Search, FileText 
} from 'lucide-react';

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Escuchar por Cmd+K o Ctrl+K y Escape para cerrar
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const toggleTheme = (newTheme: 'light' | 'dark' | 'system') => {
    if (newTheme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      localStorage.removeItem('theme');
      window.document.documentElement.classList.toggle('dark', isDark);
    } else {
      localStorage.setItem('theme', newTheme);
      window.document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/50 dark:bg-black/60 backdrop-blur-sm transition-all" onClick={() => setOpen(false)}>
      <Command 
        className="w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        loop
      >
        <div className="flex items-center border-b border-gray-100 dark:border-gray-800 px-3 py-3">
          <Search className="w-5 h-5 text-gray-500 mr-2 shrink-0" />
          <Command.Input 
            placeholder={i18n.language === 'es' ? "¿Qué necesitas buscar?" : "Type a command or search..."} 
            className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 text-lg"
          />
          <kbd className="hidden sm:inline-flex px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded text-xs border border-gray-200 dark:border-gray-700 ml-2">
            ESC
          </kbd>
        </div>

        <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700">
          <Command.Empty className="py-6 text-center text-sm text-gray-500">
            {i18n.language === 'es' ? "No se encontraron resultados." : "No results found."}
          </Command.Empty>

          <Command.Group heading={i18n.language === 'es' ? "Navegación" : "Navigation"} className="text-xs font-medium text-gray-500 mb-1 px-2 py-2">
            <Command.Item onSelect={() => runCommand(() => navigate({ to: '/' }))} className="flex items-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 aria-selected:text-blue-600 dark:aria-selected:text-blue-400 transition-colors">
              <Home className="w-4 h-4 mr-3" />
              {t('nav.home')}
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => navigate({ to: '/about' }))} className="flex items-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 aria-selected:text-blue-600 dark:aria-selected:text-blue-400 transition-colors">
              <User className="w-4 h-4 mr-3" />
              {t('nav.about')}
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => navigate({ to: '/projects' }))} className="flex items-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 aria-selected:text-blue-600 dark:aria-selected:text-blue-400 transition-colors">
              <Briefcase className="w-4 h-4 mr-3" />
              {t('nav.projects')}
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => navigate({ to: '/courses' }))} className="flex items-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 aria-selected:text-blue-600 dark:aria-selected:text-blue-400 transition-colors">
              <BookOpen className="w-4 h-4 mr-3" />
              {t('nav.courses')}
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => navigate({ to: '/contact' }))} className="flex items-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 aria-selected:text-blue-600 dark:aria-selected:text-blue-400 transition-colors">
              <Mail className="w-4 h-4 mr-3" />
              {t('nav.contact')}
            </Command.Item>
          </Command.Group>

          <Command.Group heading={i18n.language === 'es' ? "Acciones" : "Actions"} className="text-xs font-medium text-gray-500 mb-1 px-2 py-2 border-t border-gray-100 dark:border-gray-800 mt-2">
            <Command.Item onSelect={() => runCommand(() => window.open('/CV_Pedro_Araya_2026.pdf', '_blank'))} className="flex items-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 aria-selected:text-blue-600 dark:aria-selected:text-blue-400 transition-colors">
              <FileText className="w-4 h-4 mr-3" />
              {i18n.language === 'es' ? "Descargar CV (PDF)" : "Download Resume (PDF)"}
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => window.print())} className="flex items-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 aria-selected:text-blue-600 dark:aria-selected:text-blue-400 transition-colors">
              <Monitor className="w-4 h-4 mr-3" />
              {i18n.language === 'es' ? "Imprimir Portafolio" : "Print Portfolio"}
            </Command.Item>
          </Command.Group>

          <Command.Group heading={i18n.language === 'es' ? "Tema" : "Theme"} className="text-xs font-medium text-gray-500 mb-1 px-2 py-2 border-t border-gray-100 dark:border-gray-800 mt-2">
            <Command.Item onSelect={() => runCommand(() => toggleTheme('light'))} className="flex items-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 aria-selected:text-blue-600 dark:aria-selected:text-blue-400 transition-colors">
              <Sun className="w-4 h-4 mr-3" />
              {i18n.language === 'es' ? "Modo Claro" : "Light Mode"}
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => toggleTheme('dark'))} className="flex items-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 aria-selected:text-blue-600 dark:aria-selected:text-blue-400 transition-colors">
              <Moon className="w-4 h-4 mr-3" />
              {i18n.language === 'es' ? "Modo Oscuro" : "Dark Mode"}
            </Command.Item>
          </Command.Group>

          <Command.Group heading={i18n.language === 'es' ? "Secretos 👀" : "Secrets 👀"} className="text-xs font-medium text-gray-500 mb-1 px-2 py-2 border-t border-gray-100 dark:border-gray-800 mt-2">
            <Command.Item onSelect={() => runCommand(() => {
              document.body.animate([
                { transform: 'rotate(0)' },
                { transform: 'rotate(360deg)' }
              ], { duration: 1000, iterations: 1 });
            })} className="flex items-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 aria-selected:text-blue-600 dark:aria-selected:text-blue-400 transition-colors">
              🚀 Do a barrel roll
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => {
              document.documentElement.classList.toggle('invert');
            })} className="flex items-center px-3 py-2.5 rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 aria-selected:text-blue-600 dark:aria-selected:text-blue-400 transition-colors">
              🦇 Modo Invertido
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}