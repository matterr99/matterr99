import React, { useState, useEffect } from 'react';
import { ProjectDossier, WireDispatch, ThemeMode } from '../types';
import { Search, X, ChevronRight, FileText, Activity } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  theme: ThemeMode;
  projects: ProjectDossier[];
  dispatches: WireDispatch[];
  onClose: () => void;
  onSelectProject: (project: ProjectDossier) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  theme,
  projects,
  dispatches,
  onClose,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.deck.toLowerCase().includes(query.toLowerCase()) ||
      p.kicker.toLowerCase().includes(query.toLowerCase()) ||
      p.specifications.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredDispatches = dispatches.filter(
    (d) =>
      d.title.toLowerCase().includes(query.toLowerCase()) ||
      d.summary.toLowerCase().includes(query.toLowerCase()) ||
      d.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm">
      <div
        className={`w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden font-mono text-xs ${
          isDark
            ? 'bg-[#0c121d] border-slate-700 text-slate-100'
            : 'bg-white border-slate-300 text-slate-900'
        }`}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            type="text"
            placeholder="Search macro models, tennis biomechanics, repositories, keywords..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className={`w-full bg-transparent text-sm font-editorial-sans focus:outline-hidden ${
              isDark ? 'text-white placeholder:text-slate-500' : 'text-slate-950 placeholder:text-slate-400'
            }`}
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-white cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline px-1.5 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400">
            ESC
          </kbd>
        </div>

        {/* Search Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {/* Projects Section */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-2 px-2">
                PROJECT DOSSIERS & SYSTEMS ({filteredProjects.length})
              </div>
              <div className="space-y-1">
                {filteredProjects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectProject(p);
                      onClose();
                    }}
                    className={`p-3 rounded-xl transition-colors cursor-pointer flex items-center justify-between gap-3 ${
                      isDark ? 'hover:bg-slate-800/80' : 'hover:bg-stone-100'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="text-[10px] text-amber-500 font-bold">{p.kicker}</div>
                      <div className="font-editorial-sans font-bold text-sm text-slate-100 truncate">{p.title}</div>
                      <div className="text-xs text-slate-400 truncate">{p.deck}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wire Dispatches Section */}
          {filteredDispatches.length > 0 && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-2 px-2">
                THE WIRE DISPATCHES ({filteredDispatches.length})
              </div>
              <div className="space-y-1">
                {filteredDispatches.map((d) => (
                  <div
                    key={d.id}
                    className={`p-3 rounded-xl transition-colors ${
                      isDark ? 'hover:bg-slate-800/60' : 'hover:bg-stone-100'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-[10px] text-slate-400">
                      <span className="text-amber-400 font-bold">{d.kicker}</span>
                      <span>·</span>
                      <span>{d.timestamp}</span>
                    </div>
                    <div className="font-editorial-sans font-semibold text-xs text-slate-200 mt-0.5">{d.title}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredProjects.length === 0 && filteredDispatches.length === 0 && (
            <div className="p-8 text-center text-slate-500 font-editorial-sans">
              No dispatches or dossiers found matching "{query}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
