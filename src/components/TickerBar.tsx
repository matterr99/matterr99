import React, { useState, useEffect } from 'react';
import { TICKER_DATA } from '../data/portfolioData';
import { ThemeMode } from '../types';
import { Sun, Moon, Volume2, VolumeX, TrendingUp, TrendingDown, Clock, Terminal } from 'lucide-react';

interface TickerBarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onSelectSymbol?: (symbol: string) => void;
}

export const TickerBar: React.FC<TickerBarProps> = ({ theme, onToggleTheme }) => {
  const [time, setTime] = useState<string>('');
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/New_York',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  return (
    <div
      className={`w-full border-b text-xs font-mono transition-colors select-none ${
        isDark
          ? 'bg-[#080c14] border-slate-800/80 text-slate-300'
          : 'bg-[#111827] border-slate-900 text-slate-200'
      }`}
    >
      {/* Top Utility Strip */}
      <div className="max-w-[1440px] mx-auto px-4 py-1.5 flex items-center justify-between border-b border-slate-800/60 text-[11px]">
        <div className="flex items-center gap-4 overflow-hidden">
          <div className="flex items-center gap-1.5 font-bold tracking-wider text-amber-400 shrink-0">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>BLOOMBERG EDITORIAL TERMINAL</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <div className="hidden sm:flex items-center gap-1 text-slate-400 shrink-0">
            <Clock className="w-3 h-3 text-slate-500" />
            <span>NYC {time || '11:09:12'} EDT</span>
          </div>
          <span className="text-slate-600 hidden md:inline">|</span>
          <div className="hidden md:flex items-center gap-1 text-slate-400 shrink-0">
            <span>EDITION: GLOBAL DISPATCH · VOL. 2026.09</span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {/* Audio Dispatch Simulated Player */}
          <button
            onClick={toggleAudio}
            title="Listen to Bloomberg Executive Audio Briefing"
            className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3 h-3 text-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-semibold">AUDIO DISPATCH PLAYING</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3 h-3 text-slate-400" />
                <span>LISTEN (3 MIN)</span>
              </>
            )}
          </button>

          {/* Theme Mode Switcher */}
          <button
            onClick={onToggleTheme}
            className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title={isDark ? 'Switch to Editorial Broadsheet (Light Mode)' : 'Switch to Terminal Dark Mode'}
          >
            {isDark ? (
              <>
                <Sun className="w-3 h-3 text-amber-400" />
                <span className="hidden sm:inline">BROADSHEET LIGHT</span>
              </>
            ) : (
              <>
                <Moon className="w-3 h-3 text-sky-400" />
                <span className="hidden sm:inline">TERMINAL DARK</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Real-time Continuous Ticker Strip */}
      <div className="w-full overflow-hidden relative py-1 bg-black/40 flex items-center">
        <div className="bg-amber-500 text-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider shrink-0 z-10 flex items-center gap-1">
          <Terminal className="w-3 h-3" />
          <span>LIVE FEEDS</span>
        </div>

        <div className="overflow-hidden whitespace-nowrap flex-1 relative mask-linear">
          <div className="animate-ticker flex items-center gap-6 pl-4">
            {[...TICKER_DATA, ...TICKER_DATA].map((item, idx) => (
              <div key={`${item.symbol}-${idx}`} className="inline-flex items-center gap-2 text-[11px]">
                <span className="font-bold text-slate-200">{item.symbol}</span>
                <span className="text-slate-400">{item.value}</span>
                <span
                  className={`flex items-center gap-0.5 font-semibold ${
                    item.isPositive ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {item.isPositive ? (
                    <TrendingUp className="w-2.5 h-2.5" />
                  ) : (
                    <TrendingDown className="w-2.5 h-2.5" />
                  )}
                  {item.change}
                </span>
                <span className="text-slate-700 ml-2">/</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
