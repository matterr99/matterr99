import React from 'react';
import { ProjectDossier, ThemeMode } from '../types';
import { ArrowUpRight, BookOpen, Clock, ShieldCheck, ExternalLink, TrendingUp } from 'lucide-react';

interface LeadFeatureCardProps {
  project: ProjectDossier;
  theme: ThemeMode;
  onOpenDossier: (project: ProjectDossier) => void;
}

export const LeadFeatureCard: React.FC<LeadFeatureCardProps> = ({
  project,
  theme,
  onOpenDossier,
}) => {
  const isDark = theme === 'dark';

  return (
    <article
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isDark
          ? 'bg-[#0f172a]/80 border-slate-800 hover:border-amber-500/40 text-slate-100 shadow-xl'
          : 'bg-white border-slate-200 hover:border-amber-500/40 text-slate-900 shadow-sm'
      }`}
    >
      {/* Top Editorial Kicker & Unboxed Metadata */}
      <div className="p-5 sm:p-6 pb-0">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-2.5">
          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-500 uppercase tracking-wider">{project.kicker}</span>
            <span className="text-slate-500" aria-hidden="true">·</span>
            <span className="text-slate-400">{project.publishDate}</span>
            <span className="text-slate-500" aria-hidden="true">·</span>
            <span className="text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-500" />
              {project.readTime}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>{project.status}</span>
          </div>
        </div>

        {/* Lead Headline in Editorial Serif with balance */}
        <h2
          onClick={() => onOpenDossier(project)}
          className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-editorial-serif leading-tight cursor-pointer hover:underline transition-all ${
            isDark ? 'text-white hover:text-amber-300' : 'text-slate-950 hover:text-amber-600'
          }`}
          style={{ textWrap: 'balance' }}
        >
          {project.title}
        </h2>

        {/* Deck prose */}
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-400 font-editorial-sans max-w-3xl">
          {project.deck}
        </p>

        {/* Byline */}
        <div className="mt-4 pt-3 border-t border-slate-800/40 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Analysis by <strong className="text-slate-200">Gabriel Vasquez</strong></span>
          <span className="text-slate-500">Institutional Macro Desk</span>
        </div>
      </div>

      {/* Hero Visual Presentation */}
      <div className="mt-5 px-5 sm:px-6">
        <div
          onClick={() => onOpenDossier(project)}
          className="relative aspect-16/9 rounded-xl overflow-hidden cursor-pointer group bg-slate-950 border border-slate-800/80"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            onError={(e) => {
              // Graceful fallback
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Quick Inspector badge */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
            <span className="truncate max-w-[80%] text-[11px]">{project.imageCaption}</span>
            <span className="shrink-0 flex items-center gap-1 text-amber-400 font-bold text-[11px]">
              <span>EXPLORE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>

      {/* Key Analytical Takeaways (The Bloomberg Big Take) */}
      <div className="p-5 sm:p-6">
        <div className={`p-4 rounded-xl border ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-stone-50 border-stone-200'
        }`}>
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-amber-400">
              EXECUTIVE BRIEF // KEY ANALYTICAL TAKEAWAYS
            </h3>
          </div>

          <ul className="space-y-2 text-xs sm:text-sm font-editorial-sans text-slate-300">
            {project.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-amber-400 font-mono font-bold mt-0.5 text-xs">0{idx + 1}.</span>
                <span className="leading-relaxed">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tabular Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg border font-mono ${
                isDark ? 'bg-slate-950/60 border-slate-800/80' : 'bg-white border-slate-200'
              }`}
            >
              <div className="text-[10px] text-slate-400 uppercase truncate">{m.label}</div>
              <div className="text-base font-bold text-slate-100 mt-0.5 tabular-nums truncate">
                {m.value}
              </div>
              {m.delta && (
                <div className="text-[10px] text-emerald-400 mt-0.5 truncate">{m.delta}</div>
              )}
            </div>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-slate-800/60">
          <button
            onClick={() => onOpenDossier(project)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold font-editorial-sans uppercase tracking-wider transition-all cursor-pointer ${
              isDark
                ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                : 'bg-stone-100 hover:bg-stone-200 text-slate-900 border border-stone-300'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Read Full Technical Monograph</span>
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold font-editorial-sans uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all shadow-md group cursor-pointer"
            >
              <span>Access Live Kairos Terminal</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
