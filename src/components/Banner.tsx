import React from 'react';
import { BrandMode } from '../types';
import { Sparkles, Coins, Zap } from 'lucide-react';

interface BannerProps {
  mode: BrandMode;
  onModeChange: (mode: BrandMode) => void;
}

export default function Banner({ mode, onModeChange }: BannerProps) {
  return (
    <div className="relative z-50 w-full bg-[#070814] border-b border-white/5 py-2 px-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        {/* Banner Content */}
        <div className="flex items-center gap-2 text-gray-300 text-center md:text-left">
          <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 font-mono text-[10px] uppercase font-semibold">
            Announcement
          </span>
          <span className="font-sans font-medium">
            {mode === 'tether' && (
              <>
                KAIO Raises Strategic Round Backed by <span className="text-[#26A17B] font-semibold">Tether</span> to Bring Institutional Funds Onchain
              </>
            )}
            {mode === 'teeth' && (
              <>
                KAIO Raises Strategic Round Backed by <span className="text-[#3b82f6] font-semibold underline decoration-wavy">Teeth 🦷</span> to Bring Dental-Grade Institutional Yields Onchain
              </>
            )}
            {mode === 'tteh' && (
              <>
                KAIO Raises Strategic Round Backed by <span className="text-[#a855f7] font-semibold tracking-wider font-mono">TTEH 🚀</span> to Bring Hyper-Quantized DeFi Velocities Onchain
              </>
            )}
          </span>
          <span className="hidden md:inline text-gray-400 font-medium hover:text-white transition-colors cursor-pointer group">
            | Learn More <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>

        {/* Real-time Brand Mode Multi-toggle - "change the ui ux teeth or tteh" */}
        <div className="flex items-center gap-1.5 bg-black/60 p-1 rounded-full border border-white/10 shrink-0">
          <button
            onClick={() => onModeChange('tether')}
            className={`flex items-center gap-1 px-3 py-1 rounded-full font-mono text-[10px] font-semibold transition-all ${
              mode === 'tether'
                ? 'bg-[#26A17B]/20 text-[#26A17B] border border-[#26A17B]/30'
                : 'text-gray-400 hover:text-white border border-transparent'
            }`}
          >
            <Coins className="w-3 h-3" />
            Tether
          </button>
          <button
            onClick={() => onModeChange('teeth')}
            className={`flex items-center gap-1 px-3 py-1 rounded-full font-mono text-[10px] font-semibold transition-all ${
              mode === 'teeth'
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                : 'text-gray-400 hover:text-white border border-transparent'
            }`}
          >
            <span>🦷</span>
            Teeth
          </button>
          <button
            onClick={() => onModeChange('tteh')}
            className={`flex items-center gap-1 px-3 py-1 rounded-full font-mono text-[10px] font-semibold transition-all ${
              mode === 'tteh'
                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                : 'text-gray-400 hover:text-white border border-transparent'
            }`}
          >
            <Zap className="w-3 h-3" />
            TTEH
          </button>
        </div>
      </div>
    </div>
  );
}
