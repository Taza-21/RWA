import React, { useState } from 'react';
import { BrandMode } from '../types';
import { ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  mode: BrandMode;
  onJoinWaitlist: (email: string) => void;
}

export default function Hero({ mode, onJoinWaitlist }: HeroProps) {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      onJoinWaitlist(email);
      setJoined(true);
      setEmail('');
      setTimeout(() => setJoined(false), 5000);
    }
  };

  // Slogans and main copy depending on custom mode
  const getBrandedHero = () => {
    switch (mode) {
      case 'teeth':
        return {
          title: 'TEETH 🦷',
          subtitle: 'Is Biting',
          tag: 'PLAQUE CONTROL',
          desc: 'Anti-cavity, fully polished, high-calcium onchain yield. Build custom financial bridges that bite through inflation.',
        };
      case 'tteh':
        return {
          title: 'TTEH 🚀',
          subtitle: 'Is Cosmic',
          tag: 'SUPER VELOCITY',
          desc: 'Relativistic blockchain speeds. Fully quantum-encrypted, zero-latency physical yield mechanisms for futuristic capital markets.',
        };
      case 'tether':
      default:
        return {
          title: 'KASH 💰',
          subtitle: 'Is Coming',
          tag: 'RWA AppChain',
          desc: 'Permissionless. Institutional-grade. Onchain Yield. Connect real-world financial vehicles to sovereign capital rails.',
        };
    }
  };

  const copy = getBrandedHero();

  return (
    <section id="hero" className="relative w-full min-h-[85vh] flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Grid Pattern with Glowing Stars */}
      <div className="absolute inset-0 bg-[#030308]" style={{
        backgroundImage: 'radial-gradient(ellipse 60% 60% at 50% -20%, rgba(30, 41, 150, 0.15), rgba(0,0,0,0))'
      }}>
        {/* Constellation Grid */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 0), radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }} />
      </div>

      {/* Decorative Left Dots cluster matching the screenshot precisely! */}
      <div className="absolute bottom-12 left-12 hidden md:block z-10">
        <div className="grid grid-cols-4 gap-4 opacity-75">
          {Array.from({ length: 16 }).map((_, i) => {
            const row = Math.floor(i / 4);
            const col = i % 4;
            // Fading opacity based on distance to bottom-left
            const opacityClass = (() => {
              if (row === 0 && col === 0) return 'opacity-100 scale-110';
              if (row + col <= 1) return 'opacity-85 scale-100';
              if (row + col <= 2) return 'opacity-60 scale-90';
              if (row + col <= 3) return 'opacity-35 scale-75';
              return 'opacity-15 scale-50';
            })();
            return (
              <div
                key={i}
                className={`w-3.5 h-3.5 rounded-full bg-[#E5DCC5] transition-all duration-300 hover:scale-125 ${opacityClass}`}
              />
            );
          })}
        </div>
      </div>

      {/* Futuristic Orbit Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Core Hero Container */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Center rotating graphic logo */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-all duration-1000" />
          <div className="relative w-24 h-24 flex items-center justify-center bg-black/40 border border-white/5 rounded-full shadow-2xl backdrop-blur-sm">
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-white animate-[spin_50s_linear_infinite] group-hover:scale-105 transition-transform duration-500">
              <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 360) / 12;
                return (
                  <g key={i} transform={`rotate(${angle} 50 50)`}>
                    <line x1="50" y1="28" x2="50" y2="12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="50" cy="8" r="3" fill="currentColor" />
                  </g>
                );
              })}
            </svg>
            <span className="absolute font-display font-semibold text-[10px] tracking-widest text-[#E5DCC5] uppercase">
              {mode === 'tether' && 'KAIO'}
              {mode === 'teeth' && 'TEETH'}
              {mode === 'tteh' && 'TTEH'}
            </span>
          </div>
        </div>

        {/* Big Displays Title */}
        <h1 className="font-display font-bold text-5xl md:text-8xl tracking-tight text-white mb-2 leading-none">
          {copy.title}
        </h1>
        <h2 className="font-sans font-medium text-3xl md:text-5xl text-gray-400 mb-6 tracking-tight">
          {copy.subtitle}
        </h2>

        {/* Description message */}
        <p className="max-w-[580px] text-gray-400 text-sm md:text-base leading-relaxed mb-10 tracking-wide font-sans font-light">
          {copy.desc}
        </p>

        {/* Waitlist interactive input form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md relative">
          <div className="relative flex items-center p-1 bg-white/5 border border-white/15 hover:border-white/25 focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/10 rounded-full transition-all duration-300">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter institutional email*"
              required
              className="w-full bg-transparent pl-5 pr-4 py-3 text-xs md:text-sm text-white placeholder-gray-500 font-sans focus:outline-none focus:ring-0"
            />
            <button
              type="submit"
              className="bg-[#E5DCC5] hover:bg-white text-gray-900 font-mono text-xs font-bold uppercase py-2.5 px-6 rounded-full cursor-pointer transition-all duration-300 active:scale-95 shrink-0 flex items-center gap-1.5"
            >
              <span>JOIN THE WAITLIST</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Success Alerts */}
          {joined && (
            <div className="absolute top-full left-0 right-0 mt-3 p-3 bg-emerald-500/10 border border-emerald-500/25 rounded-2xl flex items-center justify-center gap-2 text-xs text-emerald-400 font-sans animate-fade-in">
              <CheckCircle2 className="w-4 h-4" />
              <span>Perfect! You have secured a premium tier slot under the {mode.toUpperCase()} protocol.</span>
            </div>
          )}
        </form>

        {/* Floating background coordinate label */}
        <div className="mt-8 opacity-20 hover:opacity-100 transition-opacity font-mono text-[9px] tracking-widest text-[#E5DCC5] flex items-center gap-2">
          <span>PORTAL VER: 4.10.8</span>
          <span>•</span>
          <span>LATENCY: 1.2MS</span>
          <span>•</span>
          <span>ENCRYPTION: SHAKE-256</span>
        </div>
      </div>
    </section>
  );
}
