import React from 'react';
import { ProjectDossier, ThemeMode } from '../types';
import { ArrowUpRight, BookOpen, Clock, ExternalLink, Zap } from 'lucide-react';

interface SecondaryFeatureCardProps {
  project: ProjectDossier;
  theme: ThemeMode;
  onOpenDossier: (project: ProjectDossier) => void;
}

export const SecondaryFeatureCard: React.FC<SecondaryFeatureCardProps> = ({
  project,
  theme,
  onOpenDossier,
}) => {
  const isDark = theme === 'dark';
  const isLive = project.statusType === 'live';

  return (
    <article
      className={`border rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
        isDark
          ? 'bg-[#0f172a]/80 border-slate-800 hover:border-slate-700 text-slate-100 shadow-md'
          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-900 shadow-2xs'
      }`}
    >
      <div>
        {/* Visual Header */}
        <div
          onClick={() => onOpenDossier(project)}
          className="relative aspect-16/9 overflow-hidden cursor-pointer group bg-slate-950"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Status Label on image */}
          <div className="absolute top-3 left-3">
            <span
              className={`text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded backdrop-blur-md flex items-center gap-1.5 ${
                isLive
                  ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                  : 'bg-sky-950/80 text-sky-400 border border-sky-500/30'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-emerald-400 animate-ping' : 'bg-sky-400'}`}></span>
              {project.status}
            </span>
          </div>

          <div className="absolute bottom-2.5 right-3 text-white/90 text-xs font-mono flex items-center gap-1">
            <span className="text-[11px] group-hover:text-amber-400 transition-colors">INSPECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6">
          {/* Metadata */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
            <span className="font-bold text-sky-400 uppercase">{project.kicker}</span>
            <span aria-hidden="true">·</span>
            <span>{project.readTime}</span>
          </div>

          {/* Headline */}
          <h3
            onClick={() => onOpenDossier(project)}
            className={`text-xl sm:text-2xl font-bold tracking-tight font-editorial-serif leading-snug cursor-pointer hover:underline transition-colors ${
              isDark ? 'text-white hover:text-sky-300' : 'text-slate-950 hover:text-sky-600'
            }`}
            style={{ textWrap: 'balance' }}
          >
            {project.title}
          </h3>

          {/* Deck */}
          <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed font-editorial-sans">
            {project.deck}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-800/40">
            {project.metrics.slice(0, 2).map((m, idx) => (
              <div
                key={idx}
                className={`p-2.5 rounded-lg border font-mono ${
                  isDark ? 'bg-slate-950/50 border-slate-800/70' : 'bg-stone-50 border-stone-200'
                }`}
              >
                <div className="text-[10px] text-slate-400 uppercase truncate">{m.label}</div>
                <div className="text-sm font-bold text-slate-200 mt-0.5 tabular-nums truncate">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-5 sm:p-6 pt-0 flex items-center justify-between gap-2">
        <button
          onClick={() => onOpenDossier(project)}
          className={`text-xs font-semibold font-editorial-sans px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
            isDark
              ? 'text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700'
              : 'text-slate-700 hover:text-slate-900 bg-stone-100 hover:bg-stone-200'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5 text-sky-400" />
          <span>Case Study</span>
        </button>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold font-editorial-sans uppercase tracking-wider px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-sky-500 text-white hover:text-slate-950 border border-sky-500/40 transition-all flex items-center gap-1.5 group cursor-pointer shadow-xs"
          >
            <span>Launch Live</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        ) : (
          <button
            onClick={() => onOpenDossier(project)}
            className="text-xs font-bold font-editorial-sans uppercase tracking-wider px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 text-sky-400" />
            <span>Architecture</span>
          </button>
        )}
      </div>
    </article>
  );
};
