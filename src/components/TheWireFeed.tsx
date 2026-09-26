import React, { useState } from 'react';
import { WireDispatch, ThemeMode, ProjectDossier } from '../types';
import { Radio, ChevronRight, Filter } from 'lucide-react';

interface TheWireFeedProps {
  dispatches: WireDispatch[];
  theme: ThemeMode;
  onSelectProjectById?: (projectId: string) => void;
  onOpenDispatchModal?: (dispatch: WireDispatch) => void;
}

export const TheWireFeed: React.FC<TheWireFeedProps> = ({
  dispatches,
  theme,
  onSelectProjectById,
  onOpenDispatchModal,
}) => {
  const isDark = theme === 'dark';
  const [activeFilter, setActiveFilter] = useState<'all' | 'macro' | 'tennis' | 'webdev'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(dispatches[0]?.id || null);

  const filteredDispatches =
    activeFilter === 'all'
      ? dispatches
      : dispatches.filter((d) => d.category === activeFilter);

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 font-mono ${
        isDark
          ? 'bg-[#0f172a]/80 border-slate-800 text-slate-100'
          : 'bg-white border-slate-200 text-slate-900 shadow-sm'
      }`}
    >
      {/* Feed Header */}
      <div className="p-4 sm:p-5 border-b border-slate-800/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            THE WIRE // REAL-TIME DISPATCHES
          </h3>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1 text-[10px]">
          <Filter className="w-3 h-3 text-slate-500 mr-1" />
          {(['all', 'macro', 'tennis', 'webdev'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-2 py-0.5 rounded capitalize transition-colors cursor-pointer ${
                activeFilter === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : isDark
                  ? 'text-slate-400 hover:text-white bg-slate-800/60'
                  : 'text-slate-600 hover:text-slate-900 bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Dispatches List */}
      <div className="divide-y divide-slate-800/40 max-h-[540px] overflow-y-auto">
        {filteredDispatches.map((dispatch) => {
          const isExpanded = expandedId === dispatch.id;

          return (
            <div
              key={dispatch.id}
              className={`p-4 transition-colors cursor-pointer ${
                isExpanded
                  ? isDark
                    ? 'bg-slate-900/60'
                    : 'bg-stone-50'
                  : isDark
                  ? 'hover:bg-slate-900/30'
                  : 'hover:bg-stone-50/60'
              }`}
              onClick={() => setExpandedId(isExpanded ? null : dispatch.id)}
            >
              <div className="flex items-center justify-between gap-2 text-[11px] text-slate-400 mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">{dispatch.kicker}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-400 tabular-nums">{dispatch.timestamp}</span>
                </div>
                <ChevronRight
                  className={`w-3.5 h-3.5 text-slate-500 transition-transform ${
                    isExpanded ? 'rotate-90 text-amber-400' : ''
                  }`}
                />
              </div>

              <h4
                className={`text-xs sm:text-sm font-semibold font-editorial-sans leading-snug ${
                  isDark ? 'text-slate-100' : 'text-slate-900'
                }`}
              >
                {dispatch.title}
              </h4>

              {isExpanded && (
                <div className="mt-2.5 pt-2 border-t border-slate-800/40 text-xs text-slate-400 font-editorial-sans leading-relaxed">
                  <p>{dispatch.summary}</p>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                      {dispatch.tags.map((t) => (
                        <span key={t} className="px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-300">
                          #{t}
                        </span>
                      ))}
                    </div>

                    {dispatch.relatedProject && onSelectProjectById && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProjectById(dispatch.relatedProject!);
                        }}
                        className="text-[11px] text-amber-400 hover:underline font-mono font-bold flex items-center gap-1"
                      >
                        <span>Open Related Dossier</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
