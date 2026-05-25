import React, { useState } from 'react';
import { BrandMode, PortfolioAsset } from '../types';
import { 
  Building2, 
  Layers, 
  Coins, 
  TrendingUp, 
  FolderIcon, 
  HelpCircle, 
  Wallet, 
  HandCoins, 
  ArrowRightLeft, 
  Search, 
  Dot,
  FileSpreadsheet,
  ArrowUpRight,
  ArrowDownLeft,
  ChevronRight,
  Plus
} from 'lucide-react';

interface PlatformProps {
  mode: BrandMode;
}

export default function Platform({ mode }: PlatformProps) {
  // Sidebar options for mock preview panel
  const [activeMockTab, setActiveMockTab] = useState<'portfolio' | 'products' | 'lending' | 'gateway'>('products');
  const [activeProductSubTab, setActiveProductSubTab] = useState<'offers' | 'orders' | 'holdings'>('holdings');
  const [hoveredChartIndex, setHoveredChartIndex] = useState<number | null>(null);

  // Deposit/loan state variables
  const [depositAmount, setDepositAmount] = useState('');
  const [portfolioValue, setPortfolioValue] = useState(120000.40);
  const [borrowAsset, setBorrowAsset] = useState('bhmf');
  const [borrowAmount, setBorrowAmount] = useState('15000');

  // Chart coordinate mock simulation
  const chartData = [
    { month: 'Jan', val: 92400, label: '$92,400.10' },
    { month: 'Feb', val: 98100, label: '$98,100.50' },
    { month: 'Mar', val: 104200, label: '$104,200.24' },
    { month: 'Apr', val: 101800, label: '$101,800.80' },
    { month: 'May', val: 112900, label: '$112,900.35' },
    { month: 'Jun', val: 118400, label: '$118,400.90' },
    { month: 'Jul', val: 120000.40, label: '$120,000.40' },
    { month: 'Aug', val: 123800, label: '$123,800.15' },
    { month: 'Sept', val: 121500, label: '$121,500.60' },
    { month: 'Oct', val: 128900, label: '$128,900.99' },
  ];

  // Table items on the products view
  const [assets, setAssets] = useState<PortfolioAsset[]>([
    { id: 'bhmf', name: 'Brevan Howard Master Fund (BHMF)', symbol: 'BHMF', shares: '5,626.321', value: 24000.08, unrealizedGains: '+6.1%', weight: '20%' },
    { id: 'brmm', name: 'BlackRock Money Market (BRMM)', symbol: 'BRMM', shares: '15,626.321', value: 36000.12, unrealizedGains: '+2.4%', weight: '30%' },
    { id: 'ldcf', name: mode === 'teeth' ? 'Dental Carry Fund (LDCF)' : 'Laser Digital Carry Fund (LDCF)', symbol: 'LDCF', shares: '6,926.321', value: 60000.20, unrealizedGains: '+8.9%', weight: '50%' }
  ]);

  const handleDepositSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(depositAmount);
    if (!isNaN(amt) && amt > 0) {
      setPortfolioValue(prev => prev + amt);
      setDepositAmount('');
      // Update one of the assets for visual persistence
      setAssets(prev => prev.map(a => {
        if (a.id === 'brmm') {
          return { ...a, value: a.value + amt, shares: (parseFloat(a.shares.replace(/,/g, '')) + amt / 10).toLocaleString(undefined, { minimumFractionDigits: 3 }) };
        }
        return a;
      }));
    }
  };

  // Dynamic content based on active mode (teeth, tteh, tether)
  const getBrandedLabels = () => {
    switch (mode) {
      case 'teeth':
        return {
          title: 'We don\'t just drill your teeth, we are giving them cavities utility.',
          subtitle: 'PLAQUE ECOSYSTEM',
          bullets: [
            { num: '01', title: 'Experience true bite quality', text: 'Buy, trade, sell tooth premium bonds on secondary markets - clean plaque with zero friction.' },
            { num: '02', title: 'Unlock your dental enamel', text: 'Enjoy the health-grade flexibility of borrowing against composite assets with low-interest dental loans.' },
            { num: '03', title: 'Seamless Teeth UX', text: 'Brush away complex network gas fees. One unified composite bridge for all tooth chains.' }
          ]
        };
      case 'tteh':
        return {
          title: 'We don\'t just launch quantum channels, we are giving them infinite velocity.',
          subtitle: 'TTEH ENGINE',
          bullets: [
            { num: '01', title: 'Relativistic Market Trading', text: 'Commit high-tier collateral contracts at post-instant speed in alternative dimension routers.' },
            { num: '02', title: 'Holographic Collateral Base', text: 'Supercharge liquidity profiles across multiple sub-atomic state systems with smart micro-nodes.' },
            { num: '03', title: 'Quantum UX Tunneling', text: 'Bypasses standard transaction memory pools. Instant settlement via superconducting protocol rails.' }
          ]
        };
      case 'tether':
      default:
        return {
          title: 'We don\'t just tokenise your assets, we are giving them utility.',
          subtitle: 'OUR PLATFORM',
          bullets: [
            { num: '01', title: 'Experience true ownership', text: 'Buy, trade, sell on secondary markets - do it all with KAIO.' },
            { num: '02', title: 'Unlock your collateral', text: 'Enjoy the flexibility of utilizing institutional-grade assets with loans powered by smart-contracts.' },
            { num: '03', title: 'Seamless UX', text: 'Get the KAIO experience no matter which network you\'re using.' }
          ]
        };
    }
  };

  const content = getBrandedLabels();

  return (
    <section id="platform" className="relative w-full py-24 px-6 bg-[#030308]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Editorial Platform List (01, 02, 03) */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E5DCC5]">
                {content.subtitle}
              </span>
              <h2 className="font-sans font-normal text-3xl md:text-4xl text-white tracking-tight leading-tight">
                {content.title}
              </h2>
            </div>

            <div className="space-y-8">
              {content.bullets.map((bullet, i) => (
                <div key={i} className="flex gap-4 group">
                  <span className="font-mono text-sm text-[#E5DCC5] border border-[#E5DCC5]/20 rounded-full w-8 h-8 flex items-center justify-center bg-white/[0.02] shrink-0 group-hover:bg-[#E5DCC5] group-hover:text-gray-950 transition-all duration-300">
                    {bullet.num}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base text-gray-100 group-hover:text-white mb-2">
                      {bullet.title}
                    </h3>
                    <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                      {bullet.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Interactive High-Fidelity App UI Mockup */}
          <div className="lg:col-span-8">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-[#07080f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              
              {/* Custom mock banner stating status */}
              <div className="w-full bg-[#E5DCC5]/5 border-b border-white/5 py-1.5 px-3 flex items-center justify-between text-[10px] text-zinc-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>SECURE CONNECTED • ENVIRONMENT</span>
                </div>
                <span>SANDBOX SIMULATION</span>
              </div>

              {/* Main App Grid */}
              <div className="flex-1 grid grid-cols-12 overflow-hidden">
                
                {/* Mock App Left Sidebar */}
                <div className="col-span-3 bg-black/40 border-r border-white/5 p-4 flex flex-col justify-between">
                  <div>
                    {/* Tiny App Brand */}
                    <div className="flex items-center gap-1.5 mb-8">
                      <svg viewBox="0 0 100 100" className="w-4 h-4 text-white">
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
                      <span className="font-display font-medium text-[11px] tracking-wide text-white uppercase">
                        {mode === 'tether' && 'KAIO App'}
                        {mode === 'teeth' && 'TEETH Dent'}
                        {mode === 'tteh' && 'TTEH Portal'}
                      </span>
                    </div>

                    {/* Navigation Items */}
                    <nav className="space-y-1">
                      <button
                        onClick={() => setActiveMockTab('portfolio')}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] font-mono text-left transition-all ${
                          activeMockTab === 'portfolio' 
                            ? 'bg-blue-500/10 text-blue-400 font-medium' 
                            : 'text-zinc-500 hover:text-white hover:bg-white/[0.02]'
                        }`}
                      >
                        <FolderIcon className="w-3.5 h-3.5" />
                        PORTFOLIO
                      </button>
                      <button
                        onClick={() => setActiveMockTab('products')}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] font-mono text-left transition-all ${
                          activeMockTab === 'products' 
                            ? 'bg-blue-500/10 text-blue-400 font-medium' 
                            : 'text-zinc-500 hover:text-white hover:bg-white/[0.02]'
                        }`}
                      >
                        <Layers className="w-3.5 h-3.5" />
                        PRODUCTS
                      </button>
                      <button
                        onClick={() => setActiveMockTab('lending')}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] font-mono text-left transition-all ${
                          activeMockTab === 'lending' 
                            ? 'bg-blue-500/10 text-blue-400 font-medium' 
                            : 'text-zinc-500 hover:text-white hover:bg-white/[0.02]'
                        }`}
                      >
                        <HandCoins className="w-3.5 h-3.5" />
                        LENDING
                      </button>
                      <button
                        onClick={() => setActiveMockTab('gateway')}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] font-mono text-left transition-all ${
                          activeMockTab === 'gateway' 
                            ? 'bg-blue-500/10 text-blue-400 font-medium' 
                            : 'text-zinc-500 hover:text-white hover:bg-white/[0.02]'
                        }`}
                      >
                        <ArrowRightLeft className="w-3.5 h-3.5" />
                        GATEWAY
                      </button>
                    </nav>
                  </div>

                  {/* Sidebar bottom */}
                  <div className="pt-4 border-t border-white/5 flex items-center gap-1 text-[9px] text-zinc-500 font-mono">
                    <HelpCircle className="w-3 h-3 text-zinc-600" />
                    <span>HELP AND SUPPORT</span>
                  </div>
                </div>

                {/* Mock App Workspace content */}
                <div className="col-span-9 p-5 flex flex-col justify-between overflow-y-auto no-scrollbar bg-black/10">
                  
                  {/* WORKSPACE VIEW: PORTFOLIO */}
                  {activeMockTab === 'portfolio' && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-[10px] font-mono text-zinc-500 uppercase">Ecosystem Balance</h4>
                          <span className="font-display font-semibold text-xl text-white">
                            ${portfolioValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" /> +3.8% APY avg
                        </span>
                      </div>

                      {/* Mock Interactive Deposit */}
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                        <div className="flex items-center gap-1.5 text-xs text-gray-200 font-mono">
                          <Wallet className="w-3.5 h-3.5 text-blue-400" />
                          <span>MOCK ASSET INTAKE</span>
                        </div>
                        <p className="text-[11px] text-zinc-400">
                          Transfer capital into this demo platform. This will update the simulated yields instantly.
                        </p>
                        <form onSubmit={handleDepositSubmit} className="flex gap-2">
                          <input
                            type="number"
                            value={depositAmount}
                            onChange={(e) => setDepositAmount(e.target.value)}
                            placeholder="Amount in USD (e.g. 5000)"
                            className="bg-black/40 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 flex-1"
                          />
                          <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-mono text-[10px] font-semibold uppercase px-4 py-1.5 rounded-lg transition-colors cursor-pointer"
                          >
                            Deposit
                          </button>
                        </form>
                      </div>

                      {/* Asset Distribution */}
                      <div className="space-y-2">
                        <h5 className="text-[10px] font-mono text-zinc-500 uppercase">Asset Allocation</h5>
                        <div className="grid grid-cols-3 gap-2">
                          {assets.map((a, i) => (
                            <div key={i} className="p-2.5 rounded-lg bg-black/40 border border-white/5 space-y-1">
                              <span className="text-[9px] font-mono text-zinc-500">{a.symbol}</span>
                              <div className="text-xs text-white font-semibold">
                                ${a.value.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                              </div>
                              <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                                <div className="bg-blue-500 h-1 rounded-full" style={{ width: a.weight }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* WORKSPACE VIEW: PRODUCTS */}
                  {activeMockTab === 'products' && (
                    <div className="space-y-4 animate-fade-in">
                      {/* Products Sub-tabs: OFFERS, ORDERS, HOLDINGS */}
                      <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <div className="flex gap-4">
                          {['offers', 'orders', 'holdings'].map((sub) => (
                            <button
                              key={sub}
                              onClick={() => setActiveProductSubTab(sub as any)}
                              className={`text-[10px] font-mono uppercase tracking-wider relative pb-1.5 cursor-pointer ${
                                activeProductSubTab === sub 
                                  ? 'text-white font-semibold' 
                                  : 'text-zinc-500 hover:text-zinc-300'
                              }`}
                            >
                              {sub}
                              {activeProductSubTab === sub && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
                              )}
                            </button>
                          ))}
                        </div>
                        <span className="text-[9px] font-mono text-zinc-500">3 ACTIVE VEHICLES</span>
                      </div>

                      {/* Banner display resembling the blue/gray screenshot */}
                      <div className="p-4 rounded-xl bg-gradient-to-br from-blue-900/40 via-blue-950/20 to-zinc-950 border border-blue-500/20 flex flex-col justify-between">
                        <div>
                          <div className="text-[9px] font-mono text-blue-300 uppercase tracking-wide">Total Investments</div>
                          <div className="text-[10px] text-zinc-400 font-sans mb-1.5">Total investment positions on tokenised funds</div>
                          <div className="text-xl font-display font-semibold text-white">
                            ${portfolioValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                        </div>
                        <div className="mt-2 text-[9px] font-mono text-emerald-400 font-medium flex items-center">
                          Unrealised Gains/Losses: +$3,412.50 (+2.92%)
                        </div>
                      </div>

                      {/* Interactive performance graph charting from screenshots */}
                      <div className="relative pt-2">
                        <div className="flex justify-between text-[8px] text-zinc-500 font-mono mb-1.5">
                          <span>PERFORMANCE OVER TIME</span>
                          <span>
                            {hoveredChartIndex !== null 
                              ? `HOVERED: ${chartData[hoveredChartIndex].label} (${chartData[hoveredChartIndex].month})`
                              : 'HOVER PATH POINTS FOR DATA'}
                          </span>
                        </div>

                        {/* Chart Line Representation SVG */}
                        <div className="h-20 w-full relative">
                          <svg viewBox="0 0 500 100" className="w-full h-full text-blue-400 stroke-current fill-none">
                            {/* Gradient area */}
                            <defs>
                              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>

                            {/* Polygon Area */}
                            <polygon
                              points="0,100 50,85 100,75 150,60 200,68 250,55 300,45 350,38 400,25 450,28 500,10 500,100 0,100"
                              fill="url(#chartGradient)"
                              strokeWidth="0"
                            />

                            {/* Main Curve */}
                            <path
                              d="M 0 100 Q 25 88 50 85 T 100 75 T 150 60 T 200 68 T 250 55 T 300 45 T 350 38 T 400 25 T 450 28 T 500 10"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />

                            {/* Interactive Hover Nodes */}
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => {
                              const lx = (idx * 500) / 9;
                              const pointsY = [88, 85, 75, 60, 68, 55, 45, 38, 25, 10]; // mock curve coordinates
                              const ly = pointsY[idx];
                              return (
                                <g 
                                  key={idx} 
                                  className="cursor-pointer group/node"
                                  onMouseEnter={() => setHoveredChartIndex(idx)}
                                  onMouseLeave={() => setHoveredChartIndex(null)}
                                >
                                  {/* Click active circle */}
                                  <circle cx={lx} cy={ly} r="3" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" className="opacity-75 transition-transform group-hover/node:scale-150" />
                                  <rect x={lx - 15} y="0" width="30" height="100" fill="transparent" />
                                </g>
                              );
                            })}
                          </svg>
                        </div>
                        {/* Month display labels */}
                        <div className="flex justify-between text-[8px] text-zinc-500 font-mono mt-1">
                          {chartData.map((d, i) => (
                            <span 
                              key={i} 
                              className={`transition-colors duration-200 ${hoveredChartIndex === i ? 'text-white font-bold' : ''}`}
                            >
                              {d.month}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Mini Table displaying tokenized funds */}
                      <div className="overflow-hidden border border-white/5 rounded-xl">
                        <div className="grid grid-cols-12 bg-white/[0.02] p-2 text-[8px] font-mono text-zinc-400 tracking-wider">
                          <span className="col-span-6">PRODUCT</span>
                          <span className="col-span-3 text-right">SHARES</span>
                          <span className="col-span-3 text-right">VALUE</span>
                        </div>
                        <div className="divide-y divide-white/5">
                          {assets.map((ast, i) => (
                            <div key={i} className="grid grid-cols-12 p-3 text-[10px] items-center hover:bg-white/[0.01]">
                              <div className="col-span-6 flex flex-col">
                                <span className="font-sans font-medium text-gray-200">{ast.name}</span>
                                <span className="text-[8px] font-mono text-rose-400 group">{ast.unrealizedGains} Gains</span>
                              </div>
                              <span className="col-span-3 text-right font-mono text-zinc-400">{ast.shares}</span>
                              <span className="col-span-3 text-right font-mono text-gray-100 font-semibold">
                                ${ast.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* WORKSPACE VIEW: LENDING */}
                  {activeMockTab === 'lending' && (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <h4 className="text-[10px] font-mono text-zinc-500 uppercase">Collateralized Loans</h4>
                        <span className="text-sm text-gray-300 font-light">
                          Borrow USD liquidity against your locked institutional token positions.
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                          <label className="block text-[9px] font-mono text-zinc-500 uppercase">1. Select Collateral</label>
                          <select 
                            value={borrowAsset}
                            onChange={(e) => setBorrowAsset(e.target.value)}
                            className="w-full bg-black/60 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none"
                          >
                            <option value="bhmf">BHMF Fund Balance</option>
                            <option value="brmm">BRMM Fund Balance</option>
                            <option value="ldcf">LDCF Fund Balance</option>
                          </select>

                          <div className="text-[10px] text-zinc-400 flex justify-between">
                            <span>Available Collateral:</span>
                            <span className="font-mono text-white">
                              ${(assets.find(a => a.id === borrowAsset)?.value || 0).toLocaleString()} MD
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                          <label className="block text-[9px] font-mono text-zinc-500 uppercase">2. Loan Amount (USD)</label>
                          <input 
                            type="number"
                            value={borrowAmount}
                            onChange={(e) => setBorrowAmount(e.target.value)}
                            className="w-full bg-black/60 border border-white/10 rounded-lg p-2 text-xs text-white font-mono focus:outline-none"
                            placeholder="Enter amount"
                          />
                          <div className="text-[10px] text-zinc-400 flex justify-between">
                            <span>LTV Ratio:</span>
                            <span className="font-mono text-blue-400 font-semibold">
                              {(() => {
                                const colVal = assets.find(a => a.id === borrowAsset)?.value || 1;
                                const ltv = (parseFloat(borrowAmount) / colVal) * 100;
                                return isNaN(ltv) ? '0%' : `${ltv.toFixed(1)}%`;
                              })()}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-between">
                        <div className="text-xs text-zinc-300 space-y-1">
                          <div>Assumed interest rate: <span className="text-white font-mono">4.21% APR</span></div>
                          <div className="text-[10px] text-zinc-500">Liquidation margin buffer: 80%</div>
                        </div>
                        <button 
                          onClick={() => alert(`Demo simulated successfully: Requested collateralized loan of $${borrowAmount} under smart contract agreement 48AA20.`)}
                          className="bg-blue-500 hover:bg-blue-600 text-white font-mono text-[10px] font-semibold uppercase px-5 py-2.5 rounded-lg transition-transform active:scale-95 cursor-pointer"
                        >
                          Request Loan
                        </button>
                      </div>
                    </div>
                  )}

                  {/* WORKSPACE VIEW: GATEWAY */}
                  {activeMockTab === 'gateway' && (
                    <div className="space-y-4 animate-fade-in fill-none">
                      <div>
                        <h4 className="text-[10px] font-mono text-zinc-500 uppercase font-bold text-blue-400">AppChain Gateway Router</h4>
                        <span className="text-xs text-zinc-400 block mt-1">
                          Bridge or settle real-world funds directly to onchain networks cleanly in compliance with ERC-7518.
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-lg flex items-center justify-between text-xs text-gray-300">
                          <div className="flex items-center gap-2">
                            <span className="p-1 px-1.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-mono font-bold">SOURCE</span>
                            <span>Sovereign RWA AppChain</span>
                          </div>
                          <span className="font-mono font-medium">${portfolioValue.toLocaleString()} MD</span>
                        </div>

                        <div className="flex justify-center">
                          <div className="w-6 h-6 rounded-full border border-white/10 bg-black flex items-center justify-center relative -my-1 text-zinc-500 font-bold text-xs pointer-events-none">
                            ↓
                          </div>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-lg flex items-center justify-between text-xs text-gray-300">
                          <div className="flex items-center gap-2">
                            <span className="p-1 px-1.5 rounded bg-blue-500/10 text-blue-400 text-[9px] font-mono font-bold">TARGET</span>
                            <span>Ethereum Mainnet / Arbitrum Vault</span>
                          </div>
                          <span className="font-mono text-zinc-500">0x8a92f0...f021</span>
                        </div>
                      </div>

                      <div className="p-3 bg-[#E5DCC5]/5 border border-[#E5DCC5]/10 rounded-xl">
                        <p className="text-[11px] text-[#E5DCC5] font-light leading-relaxed">
                          ⚡ AppChain settlement executes batch operations to minimize L1 network costs. Average transaction clearing takes ~90 seconds.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Workspace bottom action */}
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] text-zinc-500 font-mono">
                    <span>ASSET CUSTODY MANAGED VIA HK-TRUST</span>
                    <span>KAIO ECOSYSTEM NETWORK</span>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
