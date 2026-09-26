import React, { useState } from 'react';
import { ProjectDossier, ThemeMode } from '../types';
import { X, ExternalLink, Github, BookOpen, Layers, Terminal, CheckCircle2, Share2, Printer } from 'lucide-react';
import { MacroDataVisualizer } from './MacroDataVisualizer';
import { TennisCourtVisualizer } from './TennisCourtVisualizer';

interface InteractiveDossierModalProps {
  project: ProjectDossier | null;
  theme: ThemeMode;
  onClose: () => void;
}

export const InteractiveDossierModal: React.FC<InteractiveDossierModalProps> = ({
  project,
  theme,
  onClose,
}) => {
  if (!project) return null;

  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState<'monograph' | 'simulator' | 'specs'>('monograph');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] rounded-2xl border shadow-2xl flex flex-col overflow-hidden transition-all ${
          isDark
            ? 'bg-[#0a0f18] border-slate-700 text-slate-100'
            : 'bg-white border-slate-300 text-slate-900'
        }`}
      >
        {/* Modal Top Control Bar */}
        <div className="px-6 py-4 border-b border-slate-800/80 flex items-center justify-between gap-4 bg-slate-950/40">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="font-bold text-amber-400">{project.kicker}</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">{project.readTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              title="Copy dossier link"
              className={`p-1.5 rounded text-xs transition-colors cursor-pointer ${
                isDark ? 'text-slate-400 hover:text-white bg-slate-800/60' : 'text-slate-600 hover:text-slate-900 bg-stone-100'
              }`}
            >
              {copiedLink ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => window.print()}
              title="Print Dossier"
              className={`p-1.5 rounded text-xs transition-colors cursor-pointer hidden sm:block ${
                isDark ? 'text-slate-400 hover:text-white bg-slate-800/60' : 'text-slate-600 hover:text-slate-900 bg-stone-100'
              }`}
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className={`p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer ${
                isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-stone-200 hover:bg-stone-300 text-slate-800'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Segmented Tab Navigation */}
        <div className="px-6 pt-3 pb-2 border-b border-slate-800/60 flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setActiveTab('monograph')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'monograph'
                ? 'bg-amber-400 text-slate-950 font-bold'
                : isDark
                ? 'text-slate-400 hover:text-slate-200 bg-slate-900'
                : 'text-slate-600 hover:text-slate-900 bg-stone-100'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Monograph</span>
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'simulator'
                ? 'bg-amber-400 text-slate-950 font-bold'
                : isDark
                ? 'text-slate-400 hover:text-slate-200 bg-slate-900'
                : 'text-slate-600 hover:text-slate-900 bg-stone-100'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab('specs')}
            className={`px-3 py-1.5 rounded-md font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'specs'
                ? 'bg-amber-400 text-slate-950 font-bold'
                : isDark
                ? 'text-slate-400 hover:text-slate-200 bg-slate-900'
                : 'text-slate-600 hover:text-slate-900 bg-stone-100'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Specifications & Stack</span>
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Header Block */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold">{project.status}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">PUBLISHED {project.publishDate.toUpperCase()}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-editorial-serif tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="mt-3 text-base sm:text-lg text-slate-400 font-editorial-sans leading-relaxed">
              {project.deck}
            </p>
          </div>

          {/* TAB 1: Monograph */}
          {activeTab === 'monograph' && (
            <div className="space-y-6">
              {/* Featured Image */}
              <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-slate-300">
                  {project.imageCaption}
                </div>
              </div>

              {/* Key Takeaways Callout */}
              <div
                className={`p-5 rounded-xl border font-editorial-sans ${
                  isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-stone-50 border-stone-200'
                }`}
              >
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3">
                  Core Architectural Invariants & Findings
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {project.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-amber-400 font-mono font-bold">0{idx + 1}.</span>
                      <span className="leading-relaxed">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deep Dive Text Paragraphs */}
              <div className="space-y-6 font-editorial-sans">
                {project.deepDiveContent.map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-xl font-bold font-editorial-serif tracking-tight text-white border-b border-slate-800/60 pb-2">
                      {section.heading}
                    </h3>
                    {section.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className={`text-sm sm:text-base leading-relaxed text-slate-300 ${
                          pIdx === 0 && idx === 0
                            ? 'first-letter:text-4xl first-letter:font-editorial-serif first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-amber-400'
                            : ''
                        }`}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Interactive Simulator */}
          {activeTab === 'simulator' && (
            <div className="space-y-6">
              {project.category === 'macro' ? (
                <MacroDataVisualizer theme={theme} />
              ) : project.category === 'tennis' ? (
                <TennisCourtVisualizer theme={theme} />
              ) : (
                <div
                  className={`p-6 rounded-xl border font-mono text-xs space-y-4 ${
                    isDark ? 'bg-slate-900 border-slate-800' : 'bg-stone-50 border-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-2 text-sky-400 font-bold uppercase tracking-wider">
                    <Terminal className="w-4 h-4" />
                    <span>SYSTEM RUNTIME & PERFORMANCE TELEMETRY</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded bg-slate-950/80 border border-slate-800">
                      <div className="text-slate-400">Interaction Latency Budget:</div>
                      <div className="text-emerald-400 font-bold text-sm mt-1">&lt; 16.6ms (60fps guaranteed)</div>
                    </div>
                    <div className="p-3 rounded bg-slate-950/80 border border-slate-800">
                      <div className="text-slate-400">Bundle Splitting:</div>
                      <div className="text-emerald-400 font-bold text-sm mt-1">Zero-chunk blocking architecture</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Specifications & Stack */}
          {activeTab === 'specs' && (
            <div className="space-y-5 font-mono text-xs">
              <div
                className={`p-5 rounded-xl border space-y-4 ${
                  isDark ? 'bg-slate-900 border-slate-800' : 'bg-stone-50 border-stone-200'
                }`}
              >
                <div>
                  <span className="text-slate-400 uppercase text-[10px] tracking-wider block">System Architecture</span>
                  <p className="text-slate-100 font-bold text-sm mt-1">{project.specifications.architecture}</p>
                </div>

                <div>
                  <span className="text-slate-400 uppercase text-[10px] tracking-wider block">Focus Area</span>
                  <p className="text-amber-400 font-semibold mt-1">{project.specifications.focusArea}</p>
                </div>

                <div>
                  <span className="text-slate-400 uppercase text-[10px] tracking-wider block">Target Users</span>
                  <p className="text-slate-200 mt-1">{project.specifications.targetUsers}</p>
                </div>

                <div>
                  <span className="text-slate-400 uppercase text-[10px] tracking-wider block mb-2">Core Tech Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {project.specifications.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Sticky Actions */}
        <div className="px-6 py-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 bg-slate-950/80">
          <div className="text-xs font-mono text-slate-400">
            Gabriel Vasquez Research Group · Confidential Dossier
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-colors ${
                  isDark ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-stone-200 hover:bg-stone-300 text-slate-900'
                }`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Source</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg text-xs font-bold font-editorial-sans uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all shadow-md flex items-center gap-1.5 group cursor-pointer"
              >
                <span>Launch Production App</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
