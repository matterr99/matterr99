import React, { useState } from 'react';
import { ArrowUpRight, Mail, Github, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('matterr99@outlook.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects = [
    {
      id: 'tennis',
      tag: 'Athletic Science',
      status: 'Live Module',
      statusColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      title: 'Tennis Portfolio',
      subtitle: 'Player Development & Biomechanics Insights',
      description:
        'Player development methodologies, kinetic chain efficiency diagnostics, and modern tennis training insights.',
      url: 'https://matterr99.github.io/Tennis-portfolio/index.html',
      image: 'IMG_5243.jpeg',
      fallbackImage: '/src/assets/images/tennis_stadium_miami_match_1790448145183.jpg',
      actionText: 'Open Tennis Portfolio',
    },
    {
      id: 'kairos',
      tag: 'Macro Intelligence',
      status: 'In Progress',
      statusColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      title: 'Kairos Global Research',
      subtitle: 'Cross-Asset Macro Research Terminal',
      description:
        'Cross-asset macro research terminal tracking global liquidity conditions, sovereign yield curves, and central bank balance sheets.',
      url: 'https://matterr99.github.io/kairos-macro-trading-hub/',
      image: '/src/assets/images/macro_uptrend_chart_1790448067447.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1200&auto=format&fit=crop&q=80',
      actionText: 'Access Kairos Terminal',
    },
    {
      id: 'webdev',
      tag: 'Web Engineering',
      status: 'Active Repos',
      statusColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
      title: 'Web Development',
      subtitle: 'Clean UI/UX & Systems Architecture',
      description:
        'Showcase of clean UI/UX architectures, performant reactive state paradigms, custom scripts, and modern web applications.',
      url: 'https://github.com/matterr99',
      image: '/src/assets/images/bloomberg_web_architecture_1790446190321.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80',
      actionText: 'Explore Repositories',
    },
  ];

  return (
    <div className="min-h-[100dvh] bg-[#0b0f19] text-slate-100 font-sans selection:bg-amber-400 selection:text-black flex flex-col justify-between overflow-x-hidden">
      {/* 1. Mobile-Optimized Sticky Header */}
      <header className="sticky top-0 z-30 bg-[#0e1422]/95 backdrop-blur-md border-b border-slate-800/80 pt-[env(safe-area-inset-top)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">
          <a
            href="#"
            className="text-base sm:text-xl font-black tracking-tighter uppercase font-sans text-white hover:text-amber-400 active:text-amber-300 transition-colors shrink-0 flex items-center gap-1"
          >
            <span>GABRIEL VASQUEZ</span>
            <span className="text-amber-400">.</span>
          </a>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Direct Email / Copy Button with iOS touch target */}
            <a
              href="mailto:matterr99@outlook.com"
              className="min-h-[42px] px-3 sm:px-3.5 py-2 text-xs font-bold font-mono text-slate-300 hover:text-amber-400 active:bg-slate-700/80 active:scale-[0.98] flex items-center gap-1.5 transition-all rounded-xl bg-slate-800/90 border border-slate-700/70 shadow-xs touch-manipulation"
              aria-label="Send Email to Gabriel Vasquez"
            >
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="hidden md:inline">matterr99@outlook.com</span>
              <span className="md:hidden">Email</span>
            </a>

            {/* GitHub Profile Button */}
            <a
              href="https://github.com/matterr99"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[42px] min-w-[42px] flex items-center justify-center p-2 rounded-xl border border-slate-700/80 bg-slate-800/90 hover:bg-slate-700 active:bg-slate-600 active:scale-[0.96] text-slate-300 hover:text-white transition-all shadow-xs touch-manipulation"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* 2. Main Content Container */}
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 py-5 sm:py-10 md:py-12 space-y-6 sm:space-y-10 flex-1">
        {/* Intro Masthead */}
        <div className="border-b border-slate-800/90 pb-5 sm:pb-8 space-y-2 text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              SELECTED WORKS & RESEARCH
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-[1.15]">
            Projects & Repositories
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl leading-relaxed">
            Specialized projects, macro intelligence environments, athletic training methodologies, and core development repositories.
          </p>
        </div>

        {/* 3 Equal Cards Grid - Fluid Responsive Layout */}
        <section className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group border border-slate-800/90 rounded-2xl overflow-hidden bg-[#131b2e]/90 hover:border-slate-700 active:border-slate-600 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-amber-500/5"
              >
                <div>
                  {/* Card Thumbnail Image with Touch Friendly Tap Area */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-16/9 overflow-hidden bg-slate-950 relative cursor-pointer touch-manipulation"
                    aria-label={`Open ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (project.fallbackImage && target.src !== project.fallbackImage) {
                          target.src = project.fallbackImage;
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 active:scale-100 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] via-transparent to-transparent pointer-events-none" />

                    {/* Badge: Category */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/85 text-white backdrop-blur-xs border border-white/10 shadow-sm">
                        {project.tag}
                      </span>
                    </div>

                    {/* Badge: Status */}
                    <div className="absolute bottom-2.5 right-3">
                      <span
                        className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border backdrop-blur-xs ${project.statusColor}`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </a>

                  {/* Card Content Body */}
                  <div className="p-4 sm:p-6 space-y-2 sm:space-y-3 text-left">
                    <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors leading-snug">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="touch-manipulation"
                      >
                        {project.title}
                      </a>
                    </h2>
                    <p className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                      {project.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer with Full-Width Mobile Touch Target (>= 46px height) */}
                <div className="p-4 sm:p-6 pt-0 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-3 sm:mt-4">
                  <span className="text-[11px] font-mono text-slate-500 font-semibold hidden sm:inline">
                    2026 EDITION
                  </span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-amber-400 active:bg-amber-300 active:scale-[0.98] text-white hover:text-black active:text-black border border-slate-700 hover:border-amber-400 text-xs font-bold font-sans uppercase tracking-wider transition-all shadow-md touch-manipulation"
                  >
                    <span>{project.actionText}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Connect / Inquiry Box - Mobile Tap & Copy Optimized */}
        <section className="p-5 sm:p-8 md:p-10 rounded-2xl border border-slate-800 bg-[#131b2e]/60 text-center space-y-3 shadow-md">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-400 block">
            CONNECT & INQUIRE
          </span>
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
            Gabriel Vasquez
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed px-2">
            Available for quantitative macro research, athletic coaching, and web development consultations.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto">
            <a
              href="mailto:matterr99@outlook.com"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 active:bg-amber-200 active:scale-[0.98] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all font-mono touch-manipulation"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span>Send Direct Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 active:bg-slate-600 active:scale-[0.98] text-slate-300 hover:text-white border border-slate-700 font-mono text-xs font-semibold transition-all touch-manipulation cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-emerald-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </section>
      </main>

      {/* 5. Mobile-Safe Footer */}
      <footer className="border-t border-slate-800/80 bg-[#080c14] py-5 sm:py-7 px-4 sm:px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] font-mono text-slate-500 text-center sm:text-left">
          <div className="font-bold text-slate-300 uppercase tracking-wider">
            GABRIEL VASQUEZ · SELECTED WORKS
          </div>
          <div>&copy; 2026 Gabriel Vasquez. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}
