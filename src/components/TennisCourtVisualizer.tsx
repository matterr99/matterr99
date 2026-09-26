import React, { useState, useEffect, useRef } from 'react';
import { ThemeMode } from '../types';
import { Target, Zap, RotateCcw } from 'lucide-react';

interface TennisCourtVisualizerProps {
  theme: ThemeMode;
}

export const TennisCourtVisualizer: React.FC<TennisCourtVisualizerProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [strokeType, setStrokeType] = useState<'serve' | 'forehand' | 'backhand'>('forehand');
  const [spinRate, setSpinRate] = useState<number>(2850); // RPM
  const [velocity, setVelocity] = useState<number>(124); // km/h

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let progress = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Court boundaries
      const w = canvas.width;
      const h = canvas.height;

      // Court fill
      ctx.fillStyle = isDark ? '#0b1e16' : '#14532d';
      ctx.fillRect(20, 20, w - 40, h - 40);

      // Court baseline and sidelines
      ctx.strokeStyle = '#a3e635';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(30, 30, w - 60, h - 60);

      // Net
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 2]);
      ctx.beginPath();
      ctx.moveTo(w / 2, 25);
      ctx.lineTo(w / 2, h - 25);
      ctx.stroke();
      ctx.setLineDash([]);

      // Service boxes
      ctx.strokeStyle = 'rgba(163, 230, 53, 0.6)';
      ctx.lineWidth = 1;
      ctx.strokeRect(w * 0.25, 45, w * 0.5, h - 90);
      ctx.beginPath();
      ctx.moveTo(w * 0.25, h / 2);
      ctx.lineTo(w * 0.75, h / 2);
      ctx.stroke();

      // Trajectory calculation based on stroke
      let startX = 40;
      let startY = strokeType === 'serve' ? 45 : strokeType === 'forehand' ? h - 50 : 50;
      let targetX = w - 50;
      let targetY = strokeType === 'serve' ? h - 55 : strokeType === 'forehand' ? 60 : h - 60;
      let controlX = w * 0.5;
      let controlY = (startY + targetY) / 2 + (strokeType === 'forehand' ? -25 : 20);

      // Draw trajectory arc
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.7)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(controlX, controlY, targetX, targetY);
      ctx.stroke();

      // Animated ball position
      progress = (progress + 0.015) % 1;
      const t = progress;
      const bx = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * controlX + t * t * targetX;
      const by = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * controlY + t * t * targetY;

      // Ball glow & core
      ctx.beginPath();
      ctx.arc(bx, by, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#facc15';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#facc15';
      ctx.fill();
      ctx.shadowBlur = 0;

      // Landing crosshair at target
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(targetX, targetY, 6, 0, Math.PI * 2);
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [strokeType, spinRate, velocity, isDark]);

  return (
    <div
      className={`w-full rounded-xl border p-4 sm:p-5 transition-colors font-mono ${
        isDark
          ? 'bg-[#0b141a]/95 border-emerald-500/20 text-slate-200'
          : 'bg-emerald-950/5 border-emerald-200 text-slate-900 shadow-xs'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-emerald-900/40">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            BIOMECHANICS // KINEMATIC SHOT VECTOR SIMULATION
          </span>
        </div>

        {/* Stroke Type Selector */}
        <div className="flex items-center gap-1 text-[11px]">
          {(['forehand', 'serve', 'backhand'] as const).map((s) => (
            <button
              key={s}
              onClick={() => {
                setStrokeType(s);
                if (s === 'serve') {
                  setVelocity(195);
                  setSpinRate(2200);
                } else if (s === 'forehand') {
                  setVelocity(124);
                  setSpinRate(2850);
                } else {
                  setVelocity(112);
                  setSpinRate(2100);
                }
              }}
              className={`px-2 py-0.5 rounded capitalize transition-colors cursor-pointer ${
                strokeType === s
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : isDark
                  ? 'text-slate-400 hover:text-white bg-slate-800/60'
                  : 'text-slate-600 hover:text-slate-900 bg-stone-200'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* 2D Canvas */}
      <div className="relative w-full h-44 rounded-lg overflow-hidden bg-slate-950 flex items-center justify-center">
        <canvas ref={canvasRef} width={500} height={176} className="w-full h-full object-contain" />
        <div className="absolute top-2 left-3 text-[10px] text-emerald-400 font-bold tracking-wider">
          COURT OVERLAY · 2D RADAR
        </div>
      </div>

      {/* Telemetry Strip */}
      <div className={`mt-3 p-2.5 rounded text-xs flex flex-wrap items-center justify-between gap-3 border ${
        isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-400 text-[11px]">Ball Velocity:</span>
            <span className="font-bold text-amber-400 tabular-nums">{velocity} km/h</span>
          </div>
          <div className="flex items-center gap-1.5">
            <RotateCcw className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-slate-400 text-[11px]">Topspin RPM:</span>
            <span className="font-bold text-sky-400 tabular-nums">{spinRate} RPM</span>
          </div>
        </div>

        <div className="text-[11px] text-emerald-400 font-semibold">
          Kinetic Chain Status: OPTIMAL COIL
        </div>
      </div>
    </div>
  );
};
