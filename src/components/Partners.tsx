import React from 'react';
import { Shield, Sparkles, Award, Target, Landmark } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      name: 'BREVAN HOWARD',
      sub: 'DIGITAL',
      detail: 'Institutional Digital Asset Management',
      icon: <Landmark className="w-5 h-5 text-zinc-400 group-hover:text-amber-300 transition-colors" />
    },
    {
      name: 'FURTHER',
      sub: 'VENTURES',
      detail: 'Web3 & Financial Technology Hub',
      icon: <Target className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
    },
    {
      name: 'Karatage',
      sub: 'CAPITAL',
      detail: 'Alternative Yield & Structuring',
      icon: <Award className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
    },
    {
      name: 'Laser Digital',
      sub: 'NOMURA GROUP',
      detail: 'Bank-Backed Institutional Crypto Infrastructure',
      icon: <Shield className="w-5 h-5 text-zinc-400 group-hover:text-purple-400 transition-colors" />
    },
    {
      name: 'LYRIK',
      sub: 'LIQUIDITY',
      detail: 'Sovereign Debt Tokenization Platform',
      icon: <Sparkles className="w-5 h-5 text-zinc-400 group-hover:text-teal-400 transition-colors" />
    },
    {
      name: 'SHOROOQ',
      sub: 'PARTNERS',
      detail: 'Leading Middle East Technology VC',
      icon: <Target className="w-5 h-5 text-zinc-400 group-hover:text-red-400 transition-colors" />
    },
    {
      name: 'webn',
      sub: 'ECOSYSTEM',
      detail: 'Incubated by Alan Howard & BH Digital',
      icon: <Landmark className="w-5 h-5 text-zinc-400 group-hover:text-pink-400 transition-colors" />
    }
  ];

  return (
    <section id="partners" className="relative w-full py-24 px-6 bg-[#030308] border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Container Split Layout: Left Text & Right Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E5DCC5]">
              Vetted Foundations
            </span>
            <h2 className="font-sans font-normal text-3xl md:text-4xl text-white tracking-tight leading-tight">
              From our partners to the solutions and investments we enable –{' '}
              <span className="text-blue-400 font-medium bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                we are committed to excellence
              </span>{' '}
              in everything we do at KAIO.
            </h2>
            <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
              We collaborate with global tier-1 banking consortia, premier digital asset funds, and regulatory champions to structure fully compliant, institutional-grade onchain yield.
            </p>
          </div>

          {/* Right Partners Grid of logos */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="group p-5 bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 rounded-2xl flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
                  {partner.icon}
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-bold text-sm text-gray-100 tracking-tight uppercase group-hover:text-white">
                      {partner.name}
                    </span>
                    <span className="font-mono text-[9px] uppercase text-zinc-500 group-hover:text-zinc-400">
                      {partner.sub}
                    </span>
                  </div>
                  <p className="text-zinc-500 text-[10px] mt-1 leading-snug group-hover:text-zinc-400 transition-colors">
                    {partner.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
