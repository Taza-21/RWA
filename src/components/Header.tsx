import React, { useState, useEffect } from 'react';
import { BrandMode } from '../types';
import { ShieldCheck, Info, HelpCircle, Activity } from 'lucide-react';

interface HeaderProps {
  mode: BrandMode;
  onGoToApp: () => void;
}

export default function Header({ mode, onGoToApp }: HeaderProps) {
  const [tvl, setTvl] = useState(95421500);

  // Smooth TVL tick up simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTvl(prev => prev + Math.floor(Math.random() * 850) + 120);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const formatTVL = (num: number) => {
    return (num / 1000000).toFixed(2);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#030308]/85 backdrop-blur-md border-b border-white/5 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-2.5 cursor-pointer group" onClick={() => scrollToSection('hero')}>
          <div className="relative flex items-center justify-center w-8 h-8">
            {/* Pulsing Sunburst Logo SVG */}
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-white group-hover:rotate-45 transition-transform duration-500 ease-out">
              <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              {/* Rays simulating KAIO's ray design */}
              {Array.from({ length: 16 }).map((_, i) => {
                const angle = (i * 360) / 16;
                return (
                  <line
                    key={i}
                    x1="50"
                    y1="34"
                    x2="50"
                    y2="20"
                    transform={`rotate(${angle} 50 50)`}
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="opacity-80"
                  />
                );
              })}
            </svg>
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white uppercase sm:block">
            {mode === 'tether' && 'KAIO'}
            {mode === 'teeth' && 'TEETH'}
            {mode === 'tteh' && 'TTEH'}
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-gray-400">
          <button
            onClick={() => scrollToSection('funds')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Funds
          </button>
          <button
            onClick={() => scrollToSection('platform')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Platform
          </button>
          <button
            onClick={() => scrollToSection('partners')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Partners
          </button>
          <button
            onClick={() => scrollToSection('footer-newsletter')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Resources
          </button>
        </nav>

        {/* Right side: TVL and Action Button */}
        <div className="flex items-center gap-4">
          {/* TVL Counter panel with floating info tooltip */}
          <div className="relative group/tvl hidden sm:flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs text-gray-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono font-medium">${formatTVL(tvl)}M TVL</span>
            <Info className="w-3.5 h-3.5 text-gray-400 cursor-pointer hover:text-white" />

            {/* Tooltip */}
            <div className="pointer-events-none absolute top-full right-0 mt-2 w-64 p-3 rounded-xl bg-gray-900 border border-white/10 text-[11px] leading-relaxed text-gray-400 opacity-0 group-hover/tvl:opacity-100 transition-opacity duration-200 shadow-2xl z-50">
              <div className="font-semibold text-white mb-1 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Total Value Institutional Deposit
              </div>
              Real-time audited and locked capital across all smart contracts in the ecosystem. Backed 1:1 by reserve assets.
            </div>
          </div>

          <button
            onClick={onGoToApp}
            className="relative font-mono text-xs font-semibold uppercase px-5 py-2 rounded-full text-white bg-white/5 hover:bg-white/10 border border-white/20 transition-all hover:border-white/40 shadow-lg active:scale-95 flex items-center gap-1.5 group cursor-pointer"
          >
            <span>GO TO APP</span>
            <Activity className="w-3.5 h-3.5 text-blue-400 group-hover:animate-pulse" />
          </button>
        </div>
      </div>
    </header>
  );
}
