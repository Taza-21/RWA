import React, { useState } from 'react';
import { BrandMode, Fund } from '../types';
import { ChevronLeft, ChevronRight, HelpCircle, ArrowUpRight, Check, Sparkles, Building2 } from 'lucide-react';

interface FundsProps {
  mode: BrandMode;
}

export default function Funds({ mode }: FundsProps) {
  const [selectedFund, setSelectedFund] = useState<string | null>('scope');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Dynamic values depending on selected brand mode
  const getBrandedCategory = () => {
    switch (mode) {
      case 'teeth': return 'DENTAL TOOTH TRUST';
      case 'tteh': return 'HYPER VELOCITY FLUID';
      case 'tether':
      default: return 'PRIVATE CREDIT';
    }
  };

  const funds: Fund[] = [
    {
      id: 'cash',
      name: 'CASH',
      manager: 'By BlackRock',
      description: 'Fully backed treasury & cash-equivalent vehicle onchain. Combines supreme security with instant, continuous liquidity redemption windows.',
      minInvestment: '$1,000',
      tvl: '$34.2M',
      liquidity: 'Instant (24/7)',
      category: 'GOVERNMENT TREASURY',
      tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      cardBg: 'dark'
    },
    {
      id: 'scope',
      name: 'SCOPE',
      manager: 'By Hamilton Lane',
      description: 'An evergreen fund focused on senior secured private credit investments, targeting downside protection and yield. [Designed for institutional and accredited players].',
      minInvestment: '$10,000',
      tvl: '$14.7M',
      liquidity: 'Monthly',
      category: getBrandedCategory(),
      tagColor: 'bg-[#121316]/15 text-[#121316]/75 border-[#121316]/10 font-bold',
      cardBg: 'cream' // Unique yellow-cream color from screenshot
    },
    {
      id: 'volt',
      name: 'VOLT',
      manager: 'By Laser Digital',
      description: 'Systematic yielding mechanism capitalizing on underlying crypto asset arbitrage. Enhanced via Nomura corporate security layers.',
      minInvestment: '$25,000',
      tvl: '$21.8M',
      liquidity: 'Weekly',
      category: 'ARBITRAGE EXPOSURE',
      tagColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      cardBg: 'dark'
    },
    {
      id: 'macro',
      name: 'MACRO',
      manager: 'By Brevan Howard',
      description: 'Tokenized gateway into world-renowned macroeconomic macro trades and market rate movements, shielded from localized liquidity failures.',
      minInvestment: '$50,000',
      tvl: '$25.0M',
      liquidity: 'Quarterly',
      category: 'MACRO TACTICAL',
      tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      cardBg: 'dark'
    }
  ];

  return (
    <section id="funds" className="relative w-full py-24 px-6 bg-[#030308] border-b border-white/5 overflow-hidden">
      
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#E5DCC5]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E5DCC5]">
              Active Investment Frameworks
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-white tracking-tight">
              Institutional Funds
            </h2>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
            <span>AUDITED BY HALBORN</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>SOLVENCY RATIO: 104%</span>
          </div>
        </div>

        {/* Horizontal Card Layout - Matching Screenshot 4 (Yellow card, sleek dark cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {funds.map((fund) => {
            const isCream = fund.cardBg === 'cream';
            const isSelected = selectedFund === fund.id;

            return (
              <div
                key={fund.id}
                onClick={() => setSelectedFund(fund.id)}
                className={`relative p-8 rounded-3xl cursor-pointer transition-all duration-300 flex flex-col justify-between aspect-[3/4] ${
                  isCream 
                    ? 'cream-card hover:shadow-2xl hover:scale-[1.02] border-transparent' 
                    : 'bg-[#07080f] hover:bg-[#0c0d17] border border-white/10 hover:border-white/20'
                } ${isSelected ? 'ring-2 ring-blue-500 ring-offset-4 ring-offset-[#030308]' : ''}`}
              >
                {/* Top Section */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display font-bold text-3xl tracking-tight uppercase">
                        {fund.name}
                      </h3>
                      <span className={`text-xs block mt-1 ${isCream ? 'text-[#121316]/70' : 'text-zinc-400'}`}>
                        {fund.manager}
                      </span>
                    </div>
                    {/* SVG Fund Icon */}
                    <div className={`p-2 rounded-xl ${isCream ? 'bg-black/5' : 'bg-white/5'}`}>
                      <Building2 className={`w-5 h-5 ${isCream ? 'text-gray-900' : 'text-gray-200'}`} />
                    </div>
                  </div>

                  <p className={`text-xs leading-relaxed font-light ${isCream ? 'text-gray-800' : 'text-zinc-400'}`}>
                    {fund.description}
                  </p>
                </div>

                {/* Middle / Bottom Stats Section */}
                <div className="space-y-6 pt-6 border-t border-black/5 md:border-white/5">
                  <div className="grid grid-cols-3 gap-2 text-left">
                    <div>
                      <span className={`text-[9px] font-mono uppercase block ${isCream ? 'text-[#121316]/60' : 'text-zinc-500'}`}>
                        Min Invest
                      </span>
                      <span className="text-sm font-semibold font-mono tracking-tight">
                        {fund.minInvestment}
                      </span>
                    </div>
                    <div>
                      <span className={`text-[9px] font-mono uppercase block ${isCream ? 'text-[#121316]/60' : 'text-zinc-500'}`}>
                        TVL
                      </span>
                      <span className="text-sm font-semibold font-mono tracking-tight text-blue-500">
                        {fund.tvl}
                      </span>
                    </div>
                    <div>
                      <span className={`text-[9px] font-mono uppercase block ${isCream ? 'text-[#121316]/60' : 'text-zinc-500'}`}>
                        Liquidity
                      </span>
                      <span className="text-sm font-semibold font-mono tracking-tight">
                        {fund.liquidity}
                      </span>
                    </div>
                  </div>

                  {/* Fund category Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] uppercase font-mono px-3 py-1 rounded-full border ${fund.tagColor}`}>
                      • {fund.category}
                    </span>
                    <ArrowUpRight className={`w-4 h-4 opacity-50 ${isCream ? 'text-gray-900' : 'text-white'}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Fund Interactive Allocation Panel */}
        {selectedFund && (
          <div className="p-8 bg-[#07080f] border border-white/10 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-mono text-blue-400 tracking-wider">SELECTED INVESTMENT OPPORTUNITY</span>
              </div>
              <h4 className="font-display font-bold text-2xl text-white">
                {funds.find(f => f.id === selectedFund)?.name} FUND PROSPECTUS
              </h4>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                Unlock fully-vetted credit structures with high risk-adjusted yields. KAIO provides real-time NAV reports, continuous smart-contract reserve audits, and integrated capital insurance vehicles managed by Lloyds Syndicate underwriters.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => alert('Prospectus document is preloaded inside the SECURE storage. Please complete compliance onboarding to access.')}
                  className="bg-[#E5DCC5] hover:bg-white text-gray-900 font-mono text-xs font-bold uppercase px-5 py-2.5 rounded-xl cursor-pointer transition-all duration-300"
                >
                  Download Prospectus (PDF)
                </button>
                <button
                  onClick={() => {
                    setCopiedEmail(true);
                    setTimeout(() => setCopiedEmail(false), 2000);
                  }}
                  className="bg-white/5 hover:bg-white/10 text-white font-mono text-xs border border-white/10 px-5 py-2.5 rounded-xl flex items-center gap-1.5 transition-all"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <ChevronRight className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied Contact!' : 'Schedule Allocation Call'}</span>
                </button>
              </div>
            </div>

            {/* Simulated Yield Calculator */}
            <div className="lg:col-span-5 bg-black/40 p-6 rounded-2xl border border-white/5 space-y-4">
              <h5 className="text-xs font-mono text-[#E5DCC5] uppercase">Expected Yield Estimator</h5>
              <div className="space-y-1">
                <span className="block text-[10px] text-zinc-500 uppercase">Input Principal Deposit</span>
                <span className="text-xl font-mono font-bold text-white">$150,000 USD</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs border-t border-white/5 pt-3">
                <div>
                  <span className="block text-[9px] text-zinc-500">12-Month Expected Yield</span>
                  <span className="font-mono text-emerald-400 font-semibold">+$11,430.75</span>
                </div>
                <div>
                  <span className="block text-[9px] text-zinc-500">Historical Net Returns</span>
                  <span className="font-mono text-blue-400 font-semibold">+7.62% APY</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
