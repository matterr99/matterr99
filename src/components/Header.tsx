import React from 'react';
import { Category, ThemeMode } from '../types';
import { Search, Mail } from 'lucide-react';

interface HeaderProps {
  theme: ThemeMode;
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
  onOpenSearch: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  activeCategory,
  onSelectCategory,
  onOpenSearch,
  onOpenContact,
}) => {
  const isDark = theme === 'dark';

  return (
    <header
      className={`w-full border-b transition-colors sticky top-0 z-40 backdrop-blur-md ${
        isDark
          ? 'bg-[#0d1321]/90 border-slate-800 text-slate-100'
          : 'bg-[#ffffff]/95 border-slate-200 text-slate-900 shadow-xs'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark (Single text element wordmark) */}
        <button
          onClick={() => onSelectCategory('all')}
          className="text-left group cursor-pointer focus:outline-hidden"
        >
          <div className="flex flex-col">
            <span
              className={`text-xl sm:text-2xl font-black tracking-tighter uppercase font-editorial-sans transition-colors ${
                isDark
                  ? 'text-white group-hover:text-amber-400'
                  : 'text-slate-950 group-hover:text-amber-600'
              }`}
            >
              GABRIEL VASQUEZ
            </span>
          </div>
        </button>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold uppercase tracking-wider font-editorial-sans">
          <button
            onClick={() => onSelectCategory('all')}
            className={`transition-colors cursor-pointer relative py-1 ${
              activeCategory === 'all'
                ? isDark
                  ? 'text-amber-400 border-b-2 border-amber-400'
                  : 'text-amber-600 border-b-2 border-amber-600'
                : isDark
                ? 'text-slate-400 hover:text-slate-100'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Front Page
          </button>
          <button
            onClick={() => onSelectCategory('macro')}
            className={`transition-colors cursor-pointer relative py-1 ${
              activeCategory === 'macro'
                ? isDark
                  ? 'text-amber-400 border-b-2 border-amber-400'
                  : 'text-amber-600 border-b-2 border-amber-600'
                : isDark
                ? 'text-slate-400 hover:text-slate-100'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Macro Intelligence
          </button>
          <button
            onClick={() => onSelectCategory('tennis')}
            className={`transition-colors cursor-pointer relative py-1 ${
              activeCategory === 'tennis'
                ? isDark
                  ? 'text-amber-400 border-b-2 border-amber-400'
                  : 'text-amber-600 border-b-2 border-amber-600'
                : isDark
                ? 'text-slate-400 hover:text-slate-100'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Athletic Science
          </button>
          <button
            onClick={() => onSelectCategory('webdev')}
            className={`transition-colors cursor-pointer relative py-1 ${
              activeCategory === 'webdev'
                ? isDark
                  ? 'text-amber-400 border-b-2 border-amber-400'
                  : 'text-amber-600 border-b-2 border-amber-600'
                : isDark
                ? 'text-slate-400 hover:text-slate-100'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Web Engineering
          </button>
          <button
            onClick={() => onSelectCategory('wire')}
            className={`transition-colors cursor-pointer relative py-1 flex items-center gap-1.5 ${
              activeCategory === 'wire'
                ? isDark
                  ? 'text-amber-400 border-b-2 border-amber-400'
                  : 'text-amber-600 border-b-2 border-amber-600'
                : isDark
                ? 'text-slate-400 hover:text-slate-100'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            The Wire
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenSearch}
            className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono transition-all cursor-pointer ${
              isDark
                ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
            }`}
            title="Search dispatches & projects"
          >
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Search</span>
            <kbd className={`px-1 rounded text-[10px] ${isDark ? 'bg-slate-900 text-slate-400' : 'bg-white text-slate-600'}`}>⌘K</kbd>
          </button>

          <button
            onClick={onOpenContact}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-bold font-editorial-sans uppercase tracking-wider transition-all cursor-pointer shadow-xs whitespace-nowrap ${
              isDark
                ? 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                : 'bg-slate-900 hover:bg-slate-800 text-white'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Inquire</span>
          </button>
        </div>
      </div>
    </header>
  );
};
