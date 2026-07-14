'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../locales';

export default function ShaderPage() {
  const { language, t } = useLanguage();
  const [stats, setStats] = useState({ time: 0, mx: 0, my: 0, fps: 60 });
  const isRtl = language === 'ar';

  useEffect(() => {
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsInterval = setInterval(() => {
      setStats((s) => ({ ...s, fps: frameCount }));
      frameCount = 0;
    }, 1000);

    const handleMouseMove = (e: MouseEvent) => {
      setStats((s) => ({
        ...s,
        mx: Math.round(e.clientX),
        my: Math.round(e.clientY)
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updateTime = (tFrame: number) => {
      frameCount++;
      setStats((s) => ({
        ...s,
        time: Number((tFrame * 0.001).toFixed(2))
      }));
      requestRef = requestAnimationFrame(updateTime);
    };

    let requestRef = requestAnimationFrame(updateTime);

    return () => {
      clearInterval(fpsInterval);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  const hudLabels = {
    tr: {
      title: 'WebGL Gölgelendirici Laboratuvarı',
      active: 'Sistem Durumu: ÇALIŞIYOR',
      time: 'Çalışma Süresi',
      mouse: 'Fare Konumu',
      fps: 'Kare Hızı',
      back: 'Geri Dön'
    },
    en: {
      title: 'WebGL Shader Laboratory',
      active: 'System Status: ACTIVE',
      time: 'Simulation Time',
      mouse: 'Cursor Position',
      fps: 'Frame Rate',
      back: 'Back to Safety'
    },
    ar: {
      title: 'مختبر المؤثرات البصرية WebGL',
      active: 'حالة النظام: نشط',
      time: 'زمن المحاكاة',
      mouse: 'إحداثيات المؤشر',
      fps: 'معدل الإطارات',
      back: 'العودة للرئيسية'
    }
  }[language];

  return (
    <div className="flex-grow flex items-center justify-center min-h-screen relative overflow-hidden bg-black select-none">
      {/* HUD Overlay Panel */}
      <div 
        className={`absolute bottom-10 z-20 w-full max-w-md bg-surface-container-lowest/80 backdrop-blur-md border border-primary/20 p-8 font-label-sm text-label-sm text-on-surface-variant flex flex-col gap-6 shadow-2xl ${
          isRtl ? 'right-10 text-right items-end' : 'left-10 text-left items-start'
        }`}
      >
        <div className={`flex items-center gap-2 border-b border-primary/10 pb-4 w-full justify-between ${isRtl ? 'flex-row-reverse' : ''}`}>
          <span className="text-primary font-bold uppercase tracking-widest text-sm">
            {hudLabels.title}
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0" />
        </div>

        <div className="space-y-3 w-full font-mono text-xs">
          <div className={`flex justify-between ${isRtl ? 'flex-row-reverse' : ''}`}>
            <span className="text-on-surface-variant/60">{hudLabels.active}</span>
          </div>
          <div className={`flex justify-between ${isRtl ? 'flex-row-reverse' : ''}`}>
            <span className="text-on-surface-variant/60">{hudLabels.time}:</span>
            <span className="text-primary font-bold">{stats.time}s</span>
          </div>
          <div className={`flex justify-between ${isRtl ? 'flex-row-reverse' : ''}`}>
            <span className="text-on-surface-variant/60">{hudLabels.mouse}:</span>
            <span className="text-primary font-bold">X: {stats.mx}px, Y: {stats.my}px</span>
          </div>
          <div className={`flex justify-between ${isRtl ? 'flex-row-reverse' : ''}`}>
            <span className="text-on-surface-variant/60">{hudLabels.fps}:</span>
            <span className="text-primary font-bold">{stats.fps} FPS</span>
          </div>
        </div>

        <button 
          onClick={() => window.history.back()}
          className="border border-primary/30 hover:border-primary text-primary px-6 py-2 transition-all font-bold hover:bg-primary/5 uppercase tracking-wider text-xs w-full text-center"
        >
          {hudLabels.back}
        </button>
      </div>

      {/* Center Eagle Logo Watermark */}
      <div className="relative z-10 opacity-15 pointer-events-none hover:opacity-25 transition-opacity duration-500 scale-75 md:scale-100">
        <div className="w-64 h-64 border-4 border-dashed border-primary/30 rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-[120px]">
            local_shipping
          </span>
        </div>
      </div>
    </div>
  );
}
