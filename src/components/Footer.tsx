import React from 'react';
import { ThemeMode, Category } from '../types';
import { ArrowUp, Terminal, Shield, Github } from 'lucide-react';
import { AUTHOR_PROFILE } from '../data/portfolioData';

interface FooterProps {
  theme: ThemeMode;
  onSelectCategory: (category: Category) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, onSelectCategory, onOpenContact }) => {
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`w-full border-t mt-16 transition-colors font-editorial-sans ${
        isDark ? 'bg-[#080c14] border-slate-800/80 text-slate-400' : 'bg-stone-100 border-slate-300 text-slate-600'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/60">
          {/* Col 1: Brand & Mission */}
          <div className="space-y-3">
            <div className="text-xl font-black font-editorial-sans text-white uppercase tracking-tighter">
              GABRIEL VASQUEZ
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Selected Works, Macro Intelligence Environments, Athletic Science Methodologies & Full-Stack Web Architectures.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>TERMINAL STATUS: ONLINE</span>
            </div>
          </div>

          {/* Col 2: Core Departments */}
          <div className="space-y-2.5 font-mono text-xs">
            <div className="font-bold text-slate-200 uppercase text-[11px] tracking-wider mb-2">
              DEPARTMENTS
            </div>
            <div>
              <button
                onClick={() => onSelectCategory('macro')}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                01. Macro Intelligence (Kairos)
              </button>
            </div>
            <div>
              <button
                onClick={() => onSelectCategory('tennis')}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                02. Athletic Science (Tennis Portfolio)
              </button>
            </div>
            <div>
              <button
                onClick={() => onSelectCategory('webdev')}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                03. Web Systems & UI Architecture
              </button>
            </div>
            <div>
              <button
                onClick={() => onSelectCategory('wire')}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                04. The Wire Dispatches
              </button>
            </div>
          </div>

          {/* Col 3: Live Deployments */}
          <div className="space-y-2.5 font-mono text-xs">
            <div className="font-bold text-slate-200 uppercase text-[11px] tracking-wider mb-2">
              PRODUCTION BRIDGES
            </div>
            <div>
              <a
                href={AUTHOR_PROFILE.externalLinks.kairosLive}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <span>Kairos Macro Hub ↗</span>
              </a>
            </div>
            <div>
              <a
                href={AUTHOR_PROFILE.externalLinks.tennisLive}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <span>Tennis Portfolio Monograph ↗</span>
              </a>
            </div>
            <div>
              <a
                href={AUTHOR_PROFILE.externalLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <span>GitHub Repositories ↗</span>
              </a>
            </div>
          </div>

          {/* Col 4: Inquiry & Back to Top */}
          <div className="space-y-3">
            <div className="font-bold text-slate-200 font-mono uppercase text-[11px] tracking-wider">
              COMMUNICATIONS
            </div>
            <p className="text-xs text-slate-400">
              Available for macro research consulting, athlete analytics, and high-craft software engineering.
            </p>
            <button
              onClick={onOpenContact}
              className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold font-mono text-xs transition-colors border border-slate-700 cursor-pointer"
            >
              Direct Inquiry
            </button>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} GABRIEL VASQUEZ · ALL RIGHTS RESERVED · EDITORIAL BROADSHEET FORMAT
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
