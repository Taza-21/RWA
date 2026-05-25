import React, { useState } from 'react';
import { BrandMode } from '../types';
import { Mail, Check, Star, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  mode: BrandMode;
}

export default function Footer({ mode }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const getBrandedDescription = () => {
    switch (mode) {
      case 'teeth':
        return 'RWAs, ensuring seamless brushing, plaque compliance, and root liquidity in DeFi through a dental-grade Sovereign AppChain.';
      case 'tteh':
        return 'RWAs, ensuring micro-dimensional movement, sub-second compliance, and tachyon-rate liquidity in Hyper-DeFi through a quantum AppChain.';
      case 'tether':
      default:
        return 'RWAs, ensuring seamless movement, compliance, and liquidity in DeFi through a sovereign AppChain.';
    }
  };

  return (
    <footer id="footer-newsletter" className="relative w-full bg-[#030308] border-t border-white/5 pt-20 pb-12 px-6 overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* UPPER BLOCK: Newsletter & Core Vision Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5 items-center">
          
          {/* Vision description on left */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-sans font-normal text-2xl md:text-3xl text-white tracking-tight leading-snug">
              {getBrandedDescription()}
            </h3>
            <p className="text-zinc-500 text-xs font-light max-w-lg">
              Unlock access to real yields through multi-audited, legally-compliant alternative credit vehicles built on top of the world's most stable protocols.
            </p>
          </div>

          {/* Interactive Subscribe Newsletter Box */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-[10px] uppercase font-mono tracking-widest text-[#E5DCC5]">
              Get continuous NAV updates
            </div>
            <form onSubmit={handleSubscribe} className="relative flex items-center p-1 bg-white/5 border border-white/10 rounded-full hover:border-white/20 transition-all duration-300">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Institutional Email*"
                className="w-full bg-transparent pl-5 pr-4 py-3 text-xs text-white placeholder-zinc-500 font-sans focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                className="bg-[#E5DCC5] hover:bg-white text-gray-950 font-mono text-[10px] font-bold uppercase py-2.5 px-6 rounded-full cursor-pointer transition-all shrink-0 flex items-center gap-1.5"
              >
                <span>SUBSCRIBE</span>
                {subscribed ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Mail className="w-3.5 h-3.5" />}
              </button>
            </form>

            {subscribed && (
              <span className="text-[10px] text-emerald-400 font-mono animate-fade-in block pl-3">
                ✓ Successfully enrolled! Check your secure inbox for encrypted verification logs.
              </span>
            )}
          </div>

        </div>

        {/* MIDDLE BLOCK: Sitemap Grid Hierarchy */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Brand & Sitemaps */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 100 100" className="w-6 h-6 text-white">
                <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                {Array.from({ length: 12 }).map((_, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="34"
                    x2="50"
                    y2="20"
                    transform={`rotate(${(i * 360) / 12} 50 50)`}
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                ))}
              </svg>
              <span className="font-display font-bold text-base tracking-tight text-white uppercase">
                {mode === 'tether' && 'KAIO'}
                {mode === 'teeth' && 'TEETH'}
                {mode === 'tteh' && 'TTEH'}
              </span>
            </div>
            <p className="text-[10px] text-zinc-500 leading-relaxed font-light font-mono">
              Empowering next-generation collateral movement. 100% compliant, fully audited.
            </p>
          </div>

          {/* Sitemaps lists */}
          <div>
            <span className="block text-[10px] uppercase font-mono tracking-widest text-[#E5DCC5] mb-4">
              {mode === 'tether' && 'KAIO'}
              {mode === 'teeth' && 'TEETH CO'}
              {mode === 'tteh' && 'TTEH SPACE'}
            </span>
            <ul className="space-y-2.5 text-xs text-zinc-500 font-light">
              <li className="hover:text-white transition-colors cursor-pointer">Partners</li>
              <li className="hover:text-white transition-colors cursor-pointer">Platform</li>
              <li className="hover:text-white transition-colors cursor-pointer">Funds</li>
              <li className="hover:text-white transition-colors cursor-pointer">About</li>
            </ul>
          </div>

          <div>
            <span className="block text-[10px] uppercase font-mono tracking-widest text-[#E5DCC5] mb-4">RESOURCES</span>
            <ul className="space-y-2.5 text-xs text-zinc-500 font-light">
              <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-white transition-colors cursor-pointer">Brand Assets</li>
              <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Events</li>
              <li className="hover:text-white transition-colors cursor-pointer">Documentation</li>
              <li className="flex items-center gap-1.5 opacity-60">Help Center <span className="bg-white/5 border border-white/15 text-zinc-300 px-1 py-0.5 rounded-[4px] text-[8px] font-mono leading-none font-bold uppercase">SOON</span></li>
            </ul>
          </div>

          <div>
            <span className="block text-[10px] uppercase font-mono tracking-widest text-[#E5DCC5] mb-4">LEGAL & SOCIAL</span>
            <ul className="space-y-2.5 text-xs text-zinc-500 font-light">
              <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Terms of Use</li>
              <li className="hover:text-white transition-colors cursor-pointer">Disclaimers</li>
              <li className="border-t border-white/5 pt-2.5 mt-2.5 font-semibold text-gray-400">CONNECT</li>
              <li className="hover:text-white transition-colors cursor-pointer">X / Twitter</li>
              <li className="hover:text-white transition-colors cursor-pointer">Telegram</li>
              <li className="hover:text-white transition-colors cursor-pointer">LinkedIn</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BLOCK: Legal terms and "Taza Allam" credit precisely positioned at the bottom */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-10 border-t border-white/5 items-start text-[10px] font-mono leading-relaxed text-zinc-600">
          
          <div className="md:col-span-8 space-y-2 font-mono">
            <p className="uppercase tracking-wider font-semibold">Legal & Regulatory Disclosures</p>
            <p className="font-sans font-light text-zinc-500 text-[9px] max-w-2xl leading-relaxed">
              KAIO (or TEETH / TTEH) is a technology development company and does not offer financial client services, investment advice, or trade routing. All fund descriptions, token positions, yield calculations and statistics shown in this website template represent a simulated preview application and have not been registered under standard regional SEC, FCA, or FINMA compliance laws. Digital asset products are hyper-volatile and carry severe loss profiles.
            </p>
          </div>

          {/* Taza Allam elegant footer credit */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between self-end gap-3 font-mono">
            <div className="text-right text-zinc-400 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>LICENSED OPERATOR PROTOCOL</span>
            </div>
            <div className="flex flex-col md:items-end gap-1.5 border-t border-white/5 pt-3 w-full md:w-auto">
              <span className="text-zinc-500">
                ©2025 KAIO. All rights reserved.
              </span>
              <span className="text-xs text-white font-semibold tracking-wider flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl uppercase hover:bg-white/10 transition-colors">
                <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
                <span className="text-zinc-400 mr-1">Premium Partner:</span>
                <span className="bg-gradient-to-r from-amber-400 via-[#E5DCC5] to-emerald-400 bg-clip-text text-transparent font-bold">
                  Taza Allam
                </span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
