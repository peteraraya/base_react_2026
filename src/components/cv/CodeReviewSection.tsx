import { GitPullRequest, Check, MessageSquare, GitCommit } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function CodeReviewSection() {
  const { i18n } = useTranslation();
  const isEs = i18n.language === 'es';
  const [isApproved, setIsApproved] = useState(false);

  return (
    <section className="space-y-6 my-16 print:hidden" aria-labelledby="pr-heading">
      <header className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-700 pb-2 transition-colors duration-300">
        <GitPullRequest className="w-6 h-6 text-purple-600 dark:text-purple-400" aria-hidden="true" />
        <h2 id="pr-heading" className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
          {isEs ? 'Code Review (Simulación)' : 'Code Review (Simulation)'}
        </h2>
      </header>

      <div className="bg-white dark:bg-[#0d1117] rounded-xl border border-gray-200 dark:border-[#30363d] overflow-hidden shadow-sm">
        {/* PR Header */}
        <div className="bg-gray-50 dark:bg-[#161b22] px-4 py-3 border-b border-gray-200 dark:border-[#30363d] flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-[#c9d1d9] flex items-center gap-2">
              Refactor: Migrate to NestJS Guards and Passport JWT <span className="text-gray-400 font-normal">#42</span>
            </h3>
            <div className="flex items-center gap-2 mt-1 text-sm text-gray-500 dark:text-[#8b949e]">
              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${isApproved ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400' : 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400'}`}>
                {isApproved ? 'Merged' : 'Open'}
              </span>
              <span><strong>peteraraya</strong> {isEs ? 'quiere hacer merge de' : 'wants to merge'} 1 commit {isEs ? 'en' : 'into'} <code className="bg-gray-200 dark:bg-[#30363d] px-1 rounded">main</code> {isEs ? 'desde' : 'from'} <code className="bg-gray-200 dark:bg-[#30363d] px-1 rounded">feat/nestjs-jwt-auth</code></span>
            </div>
          </div>
          {!isApproved && (
            <button 
              onClick={() => setIsApproved(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-md text-sm font-semibold h-fit flex items-center gap-2 transition-colors shrink-0"
            >
              <Check className="w-4 h-4" /> Approve PR
            </button>
          )}
        </div>

        {/* PR Diffs */}
        <div className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
          <div className="border border-gray-200 dark:border-[#30363d] rounded-lg overflow-hidden">
            <div className="bg-gray-100 dark:bg-[#21262d] px-4 py-2 border-b border-gray-200 dark:border-[#30363d] flex items-center gap-2 text-gray-600 dark:text-[#8b949e] text-xs">
              <span className="text-red-500">- 4</span> <span className="text-green-500">+ 5</span> src/applications/applications.controller.ts
            </div>
            <div className="bg-white dark:bg-[#0d1117] text-gray-800 dark:text-[#c9d1d9] whitespace-pre min-w-[600px]">
              <div className="flex bg-red-50 dark:bg-[#ffebe9]/10 hover:bg-red-100 dark:hover:bg-[#ffebe9]/20">
                <div className="w-12 text-right pr-2 text-gray-400 dark:text-[#8b949e] select-none border-r border-red-200 dark:border-red-900/30">22</div>
                <div className="w-12 text-right pr-2 text-gray-400 dark:text-[#8b949e] select-none border-r border-red-200 dark:border-red-900/30 bg-red-100 dark:bg-[#ffebe9]/20"></div>
                <div className="pl-4 text-red-700 dark:text-[#ff7b72]">- <span className="text-gray-500">// Legacy token validation inside controller</span></div>
              </div>
              <div className="flex bg-red-50 dark:bg-[#ffebe9]/10 hover:bg-red-100 dark:hover:bg-[#ffebe9]/20">
                <div className="w-12 text-right pr-2 text-gray-400 dark:text-[#8b949e] select-none border-r border-red-200 dark:border-red-900/30">23</div>
                <div className="w-12 text-right pr-2 text-gray-400 dark:text-[#8b949e] select-none border-r border-red-200 dark:border-red-900/30 bg-red-100 dark:bg-[#ffebe9]/20"></div>
                <div className="pl-4 text-red-700 dark:text-[#ff7b72]">- <span className="text-purple-600 dark:text-[#d2a8ff]">@Get</span>(<span className="text-green-600 dark:text-[#a5d6ff]">':id'</span>)</div>
              </div>
              <div className="flex bg-red-50 dark:bg-[#ffebe9]/10 hover:bg-red-100 dark:hover:bg-[#ffebe9]/20">
                <div className="w-12 text-right pr-2 text-gray-400 dark:text-[#8b949e] select-none border-r border-red-200 dark:border-red-900/30">24</div>
                <div className="w-12 text-right pr-2 text-gray-400 dark:text-[#8b949e] select-none border-r border-red-200 dark:border-red-900/30 bg-red-100 dark:bg-[#ffebe9]/20"></div>
                <div className="pl-4 text-red-700 dark:text-[#ff7b72]">- <span className="text-purple-600 dark:text-[#d2a8ff]">async</span> findOne(<span className="text-blue-600 dark:text-[#79c0ff]">@Req()</span> req, <span className="text-blue-600 dark:text-[#79c0ff]">@Param</span>(<span className="text-green-600 dark:text-[#a5d6ff]">'id'</span>) id: <span className="text-blue-600 dark:text-[#79c0ff]">string</span>) {'{'}</div>
              </div>
              <div className="flex bg-red-50 dark:bg-[#ffebe9]/10 hover:bg-red-100 dark:hover:bg-[#ffebe9]/20">
                <div className="w-12 text-right pr-2 text-gray-400 dark:text-[#8b949e] select-none border-r border-red-200 dark:border-red-900/30">25</div>
                <div className="w-12 text-right pr-2 text-gray-400 dark:text-[#8b949e] select-none border-r border-red-200 dark:border-red-900/30 bg-red-100 dark:bg-[#ffebe9]/20"></div>
                <div className="pl-4 text-red-700 dark:text-[#ff7b72]">-   <span className="text-purple-600 dark:text-[#d2a8ff]">if</span> (!req.headers.authorization) <span className="text-purple-600 dark:text-[#d2a8ff]">throw new</span> UnauthorizedException();</div>
              </div>
              
              <div className="flex bg-green-50 dark:bg-[#e6ffed]/10 hover:bg-green-100 dark:hover:bg-[#e6ffed]/20">
                <div className="w-12 text-right pr-2 text-gray-400 dark:text-[#8b949e] select-none border-r border-green-200 dark:border-green-900/30 bg-green-100 dark:bg-[#e6ffed]/20"></div>
                <div className="w-12 text-right pr-2 text-gray-400 dark:text-[#8b949e] select-none border-r border-green-200 dark:border-green-900/30">22</div>
                <div className="pl-4 text-green-700 dark:text-[#3fb950]">+ <span className="text-gray-500">// Modern NestJS Guards & Passport Strategy</span></div>
              </div>
              <div className="flex bg-green-50 dark:bg-[#e6ffed]/10 hover:bg-green-100 dark:hover:bg-[#e6ffed]/20">
                <div className="w-12 text-right pr-2 text-gray-400 dark:text-[#8b949e] select-none border-r border-green-200 dark:border-green-900/30 bg-green-100 dark:bg-[#e6ffed]/20"></div>
                <div className="w-12 text-right pr-2 text-gray-400 dark:text-[#8b949e] select-none border-r border-green-200 dark:border-green-900/30">23</div>
                <div className="pl-4 text-green-700 dark:text-[#3fb950]">+ <span className="text-purple-600 dark:text-[#d2a8ff]">@UseGuards</span>(JwtAuthGuard)</div>
              </div>
              <div className="flex bg-green-50 dark:bg-[#e6ffed]/10 hover:bg-green-100 dark:hover:bg-[#e6ffed]/20">
                <div className="w-12 text-right pr-2 text-gray-400 dark:text-[#8b949e] select-none border-r border-green-200 dark:border-green-900/30 bg-green-100 dark:bg-[#e6ffed]/20"></div>
                <div className="w-12 text-right pr-2 text-gray-400 dark:text-[#8b949e] select-none border-r border-green-200 dark:border-green-900/30">24</div>
                <div className="pl-4 text-green-700 dark:text-[#3fb950]">+ <span className="text-purple-600 dark:text-[#d2a8ff]">@Get</span>(<span className="text-green-600 dark:text-[#a5d6ff]">':id'</span>)</div>
              </div>
              <div className="flex bg-green-50 dark:bg-[#e6ffed]/10 hover:bg-green-100 dark:hover:bg-[#e6ffed]/20">
                <div className="w-12 text-right pr-2 text-gray-400 dark:text-[#8b949e] select-none border-r border-green-200 dark:border-green-900/30 bg-green-100 dark:bg-[#e6ffed]/20"></div>
                <div className="w-12 text-right pr-2 text-gray-400 dark:text-[#8b949e] select-none border-r border-green-200 dark:border-green-900/30">25</div>
                <div className="pl-4 text-green-700 dark:text-[#3fb950]">+ <span className="text-purple-600 dark:text-[#d2a8ff]">async</span> findOne(<span className="text-blue-600 dark:text-[#79c0ff]">@CurrentUser</span>() user: UserEntity, <span className="text-blue-600 dark:text-[#79c0ff]">@Param</span>(<span className="text-green-600 dark:text-[#a5d6ff]">'id'</span>) id: <span className="text-blue-600 dark:text-[#79c0ff]">string</span>) {'{'}</div>
              </div>
              <div className="flex bg-green-50 dark:bg-[#e6ffed]/10 hover:bg-green-100 dark:hover:bg-[#e6ffed]/20">
                <div className="w-12 text-right pr-2 text-gray-400 dark:text-[#8b949e] select-none border-r border-green-200 dark:border-green-900/30 bg-green-100 dark:bg-[#e6ffed]/20"></div>
                <div className="w-12 text-right pr-2 text-gray-400 dark:text-[#8b949e] select-none border-r border-green-200 dark:border-green-900/30">26</div>
                <div className="pl-4 text-green-700 dark:text-[#3fb950]">+   <span className="text-purple-600 dark:text-[#d2a8ff]">return</span> <span className="text-purple-600 dark:text-[#d2a8ff]">this</span>.applicationsService.findOneUserApp(id, user.id);</div>
              </div>
            </div>
          </div>
        </div>

        {/* PR Timeline */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-[#0d1117] border-t border-gray-200 dark:border-[#30363d]">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-[#1f6feb]/20 flex items-center justify-center border border-blue-200 dark:border-[#1f6feb]">
                <MessageSquare className="w-4 h-4 text-blue-600 dark:text-[#58a6ff]" />
              </div>
              <div className="w-0.5 h-full bg-gray-200 dark:bg-[#30363d] my-1" />
            </div>
            <div className="pb-6">
              <div className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-[#30363d] rounded-lg p-3 shadow-sm inline-block">
                <span className="font-semibold text-gray-900 dark:text-[#c9d1d9] mr-2">TechLead</span>
                <span className="text-gray-600 dark:text-[#8b949e]">Great refactor! This fixes the technical debt we had on authentication.</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${isApproved ? 'bg-purple-100 border-purple-200 dark:bg-purple-900/30 dark:border-purple-500' : 'bg-gray-100 border-gray-200 dark:bg-[#21262d] dark:border-[#30363d]'}`}>
                {isApproved ? <GitMerge className="w-4 h-4 text-purple-600 dark:text-purple-400" /> : <GitCommit className="w-4 h-4 text-gray-400" />}
              </div>
            </div>
            <div>
              {isApproved ? (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-gray-700 dark:text-[#c9d1d9] mt-1">
                  <strong>TechLead</strong> merged commit <code className="text-xs">a1b2c3d</code> into <code className="text-xs">main</code>
                </motion.div>
              ) : (
                <div className="text-gray-500 dark:text-[#8b949e] mt-1 italic">
                  {isEs ? 'Esperando revisión...' : 'Awaiting review...'}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Inline workaround
import { GitMerge } from 'lucide-react';