import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { Activity, RefreshCw, BarChart2 } from 'lucide-react';

interface MacroDataVisualizerProps {
  theme: ThemeMode;
}

export const MacroDataVisualizer: React.FC<MacroDataVisualizerProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [timeframe, setTimeframe] = useState<'1M' | '3M' | '1Y' | 'ALL'>('1Y');
  const [activeCurvePoint, setActiveCurvePoint] = useState<number | null>(4);

  const curveData = [
    { tenor: '1M', rate: 5.32, hist: 5.45, label: '1-Month T-Bill' },
    { tenor: '3M', rate: 5.28, hist: 5.40, label: '3-Month T-Bill' },
    { tenor: '6M', rate: 5.14, hist: 5.30, label: '6-Month T-Bill' },
    { tenor: '1Y', rate: 4.88, hist: 5.10, label: '1-Year Treasury' },
    { tenor: '2Y', rate: 4.22, hist: 4.75, label: '2-Year Benchmark' },
    { tenor: '5Y', rate: 3.96, hist: 4.35, label: '5-Year Note' },
    { tenor: '10Y', rate: 4.18, hist: 4.25, label: '10-Year Benchmark Note' },
    { tenor: '30Y', rate: 4.45, hist: 4.40, label: '30-Year Bond' },
  ];

  return (
    <div
      className={`w-full rounded-xl border p-4 sm:p-5 transition-colors font-mono ${
        isDark
          ? 'bg-[#0f172a]/95 border-amber-500/20 text-slate-200'
          : 'bg-stone-50 border-stone-200 text-slate-900 shadow-xs'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/40">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            KAIROS // SOVEREIGN YIELD CURVE & LIQUIDITY REGIME
          </span>
        </div>

        {/* Timeframe selector */}
        <div className="flex items-center gap-1 text-[11px]">
          {(['1M', '3M', '1Y', 'ALL'] as const).map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                timeframe === tf
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : isDark
                  ? 'text-slate-400 hover:text-white bg-slate-800/60'
                  : 'text-slate-600 hover:text-slate-900 bg-stone-200'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Yield Curve Graph (SVG) */}
      <div className="relative h-44 w-full mb-3 flex flex-col justify-end">
        <svg className="w-full h-36 overflow-visible" viewBox="0 0 700 140" preserveAspectRatio="none">
          {/* Grid lines */}
          <line x1="0" y1="20" x2="700" y2="20" stroke={isDark ? '#1e293b' : '#e2e8f0'} strokeDasharray="3 3" />
          <line x1="0" y1="60" x2="700" y2="60" stroke={isDark ? '#1e293b' : '#e2e8f0'} strokeDasharray="3 3" />
          <line x1="0" y1="100" x2="700" y2="100" stroke={isDark ? '#1e293b' : '#e2e8f0'} strokeDasharray="3 3" />

          {/* Historical comparison path */}
          <path
            d="M 20,20 Q 150,30 300,55 T 500,85 T 680,80"
            fill="none"
            stroke={isDark ? '#475569' : '#94a3b8'}
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Current Yield Curve Path */}
          <path
            d="M 20,28 Q 150,42 300,95 T 500,105 T 680,72"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="3"
          />

          {/* Points */}
          {curveData.map((pt, index) => {
            const x = 20 + (index * (660 / (curveData.length - 1)));
            const y = 140 - ((pt.rate - 3.5) / 2.2) * 120;
            const isSelected = activeCurvePoint === index;

            return (
              <g key={pt.tenor} className="cursor-pointer" onClick={() => setActiveCurvePoint(index)}>
                <circle
                  cx={x}
                  cy={y}
                  r={isSelected ? 6 : 4}
                  fill={isSelected ? '#38bdf8' : '#f59e0b'}
                  stroke={isDark ? '#0f172a' : '#ffffff'}
                  strokeWidth="2"
                  className="transition-all"
                />
                {isSelected && (
                  <circle cx={x} cy={y} r={10} fill="none" stroke="#38bdf8" strokeWidth="1" className="animate-ping" />
                )}
              </g>
            );
          })}
        </svg>

        {/* Tenor Labels */}
        <div className="flex justify-between text-[11px] text-slate-400 mt-2 px-1">
          {curveData.map((pt, idx) => (
            <button
              key={pt.tenor}
              onClick={() => setActiveCurvePoint(idx)}
              className={`hover:text-amber-400 transition-colors ${
                activeCurvePoint === idx ? 'text-sky-400 font-bold underline' : ''
              }`}
            >
              {pt.tenor}
            </button>
          ))}
        </div>
      </div>

      {/* Point Inspector Strip */}
      {activeCurvePoint !== null && (
        <div className={`mt-2 p-2.5 rounded text-xs flex flex-wrap items-center justify-between gap-2 border ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
        }`}>
          <div className="flex items-center gap-2">
            <BarChart2 className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-bold text-slate-200">{curveData[activeCurvePoint].label} ({curveData[activeCurvePoint].tenor}):</span>
            <span className="text-amber-400 font-bold tabular-nums">{curveData[activeCurvePoint].rate.toFixed(2)}%</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400 text-[11px]">
            <span>Hist (6M Prior): <span className="tabular-nums">{curveData[activeCurvePoint].hist.toFixed(2)}%</span></span>
            <span className="text-emerald-400 font-semibold">Spread 2Y/10Y: -4 bps</span>
          </div>
        </div>
      )}
    </div>
  );
};
