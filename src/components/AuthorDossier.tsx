import React, { useState } from 'react';
import { AUTHOR_PROFILE } from '../data/portfolioData';
import { ThemeMode } from '../types';
import { Mail, Copy, Check, ExternalLink, Award, FileText, Github } from 'lucide-react';

interface AuthorDossierProps {
  theme: ThemeMode;
  onOpenContact: () => void;
}

export const AuthorDossier: React.FC<AuthorDossierProps> = ({ theme, onOpenContact }) => {
  const isDark = theme === 'dark';
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(AUTHOR_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`border rounded-2xl p-5 sm:p-6 transition-all duration-300 ${
        isDark
          ? 'bg-[#0f172a]/80 border-slate-800 text-slate-100 shadow-md'
          : 'bg-white border-slate-200 text-slate-900 shadow-2xs'
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Profile Avatar */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden border border-amber-500/30 bg-slate-900">
          <img
            src={AUTHOR_PROFILE.avatarUrl}
            alt={AUTHOR_PROFILE.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Name & Title */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-500 font-bold uppercase tracking-wider mb-1">
            <Award className="w-3.5 h-3.5" />
            <span>EXECUTIVE DOSSIER</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-editorial-serif tracking-tight truncate">
            {AUTHOR_PROFILE.name}
          </h3>
          <p className="text-xs text-slate-400 font-editorial-sans mt-0.5 leading-snug line-clamp-2">
            {AUTHOR_PROFILE.role}
          </p>
        </div>
      </div>

      {/* Bio Prose */}
      <p className="mt-4 text-xs sm:text-sm text-slate-300 font-editorial-sans leading-relaxed border-t border-slate-800/40 pt-3">
        {AUTHOR_PROFILE.bio}
      </p>

      {/* Core Competencies Matrix */}
      <div className="mt-4 space-y-2 font-mono text-xs">
        {AUTHOR_PROFILE.competencies.map((comp, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg border ${
              isDark ? 'bg-slate-950/60 border-slate-800/70' : 'bg-stone-50 border-stone-200'
            }`}
          >
            <div className="font-bold text-amber-400 text-[11px] uppercase tracking-wider">
              {comp.label}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">{comp.detail}</div>
          </div>
        ))}
      </div>

      {/* Email & External Actions */}
      <div className="mt-5 pt-4 border-t border-slate-800/40 flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={handleCopyEmail}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-mono transition-colors cursor-pointer border ${
              isDark
                ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700'
                : 'bg-stone-100 hover:bg-stone-200 text-slate-800 border-stone-300'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-bold">Email Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span className="truncate">{AUTHOR_PROFILE.email}</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenContact}
            className="px-3.5 py-2 rounded-lg text-xs font-bold font-editorial-sans uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors shrink-0 cursor-pointer shadow-xs"
          >
            Inquire
          </button>
        </div>

        {/* GitHub Bridge */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono px-1">
          <span>GitHub: @matterr99</span>
          <a
            href={AUTHOR_PROFILE.externalLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:underline flex items-center gap-1"
          >
            <Github className="w-3 h-3" />
            <span>View Repositories</span>
          </a>
        </div>
      </div>
    </div>
  );
};
