import React, { useState } from 'react';
import { AUTHOR_PROFILE } from '../data/portfolioData';
import { ThemeMode } from '../types';
import { X, Send, Copy, Check, Mail, MessageSquare, Terminal } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  theme: ThemeMode;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, theme, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: 'Institutional Macro & Tech Consultation', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;
  const isDark = theme === 'dark';

  const handleCopy = () => {
    navigator.clipboard.writeText(AUTHOR_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        className={`w-full max-w-lg rounded-2xl border shadow-2xl overflow-hidden font-mono text-xs ${
          isDark
            ? 'bg-[#0a0f18] border-slate-700 text-slate-100'
            : 'bg-white border-slate-300 text-slate-900'
        }`}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-amber-400" />
            <span className="font-bold text-amber-400 uppercase tracking-wider">
              INQUIRY // GABRIEL VASQUEZ DISPATCH DESK
            </span>
          </div>
          <button onClick={onClose} className="p-1 rounded text-slate-400 hover:text-white cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <div>
              <div className="text-[10px] text-slate-400 uppercase">Direct Email</div>
              <div className="font-bold text-slate-200 mt-0.5">{AUTHOR_PROFILE.email}</div>
            </div>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-2 bg-emerald-950/20 border border-emerald-500/30 rounded-xl">
              <Check className="w-8 h-8 text-emerald-400 mx-auto" />
              <div className="font-bold text-emerald-400 text-sm font-editorial-sans">
                Inquiry Transmitted Successfully
              </div>
              <div className="text-slate-400 text-xs">
                Your dispatch has been routed to Gabriel Vasquez. A response will follow shortly.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 font-editorial-sans">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Elena Rostova / Portfolio Manager"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className={`w-full p-2.5 rounded-lg border text-xs focus:outline-hidden ${
                    isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-stone-50 border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="elena@fund.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className={`w-full p-2.5 rounded-lg border text-xs focus:outline-hidden ${
                    isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-stone-50 border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Message / Consultation Scope</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your inquiry regarding macro intelligence, tennis methodologies, or engineering architecture..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className={`w-full p-2.5 rounded-lg border text-xs focus:outline-hidden ${
                    isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-stone-50 border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all font-mono"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Transmit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
