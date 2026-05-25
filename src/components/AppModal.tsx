import React, { useState, useEffect } from 'react';
import { BrandMode } from '../types';
import { 
  X, 
  Terminal, 
  TrendingUp, 
  Lock, 
  Compass, 
  Cpu, 
  HelpCircle, 
  Coins, 
  Sparkles, 
  History, 
  Check, 
  AlertCircle,
  ChevronRight,
  Send,
  UserCheck2,
  ServerCrash
} from 'lucide-react';

interface AppModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: BrandMode;
}

export default function AppModal({ isOpen, onClose, mode }: AppModalProps) {
  const [activeTab, setActiveTab] = useState<'swap' | 'redeploy' | 'diagnostics'>('swap');
  const [payAmount, setPayAmount] = useState('5000');
  const [receiveAmount, setReceiveAmount] = useState('5000');
  const [selectedCol, setSelectedCol] = useState('USDT');
  const [selectedTarget, setSelectedTarget] = useState('KASH');
  
  // Transaction logs simulation
  const [txs, setTxs] = useState([
    { id: 'tx-0', hash: '0x81fa...92ad', action: 'Deposit USDT', amount: '$15,000.00', status: 'COMPLETED', time: '10 mins ago' },
    { id: 'tx-1', hash: '0x49ba...e31c', action: 'Mint KASH', amount: '15,000 KASH', status: 'COMPLETED', time: '8 mins ago' },
    { id: 'tx-2', hash: '0x221d...b08c', action: 'Collateral Lock', amount: '$10,000.00', status: 'COMPLETED', time: '2 mins ago' }
  ]);
  
  const [sysLog, setSysLog] = useState<string[]>([
    'Initializing AppChain consensus handshakes...',
    'EVM network state connected on port 3000.',
    'Sovereign liquidity pool validated. TVL: $95.7M.'
  ]);

  const [loading, setLoading] = useState(false);

  // Auto add system logs
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      const logs = [
        'Syncing ERC-7518 cross-chain status with Arbitrum...',
        'Compiling real-time NAV reports with BlackRock Oracle...',
        'Validating zero-knowledge proof contracts...',
        'Refreshing institutional deposit rate vectors (4.21% APR)...'
      ];
      const randomLog = logs[Math.floor(Math.random() * logs.length)];
      setSysLog(prev => [...prev.slice(-4), `[${new Date().toLocaleTimeString()}] ${randomLog}`]);
    }, 8000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSwap = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const newTx = {
        id: `tx-${Date.now()}`,
        hash: `0x${Math.random().toString(16).substr(2, 4)}...${Math.random().toString(16).substr(2, 4)}`,
        action: `Convert ${payAmount} ${selectedCol} -> ${receiveAmount} ${selectedTarget}`,
        amount: `${receiveAmount} ${selectedTarget}`,
        status: 'COMPLETED',
        time: 'Just now'
      };
      setTxs(prev => [newTx, ...prev]);
      setSysLog(prev => [...prev.slice(-4), `[${new Date().toLocaleTimeString()}] Transaction ${newTx.hash} committed successfully.`]);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in font-sans">
      
      {/* Container Terminal Window */}
      <div className="relative w-full max-w-5xl h-[85vh] bg-[#05060b] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        
        {/* Top Operational Header Bar */}
        <div className="bg-[#07080f] px-6 py-4 border-b border-white/5 flex items-center justify-between shrink-0">
          
          {/* Left Title details */}
          <div className="flex items-center gap-3">
            <Terminal className="w-4 h-4 text-blue-400" />
            <div className="flex items-center gap-2">
              <span className="font-display font-semibold text-sm text-white tracking-tight uppercase">
                {mode === 'tether' && 'KAIO Institutional Workspace'}
                {mode === 'teeth' && 'TEETH Dental Vault'}
                {mode === 'tteh' && 'TTEH Particle Control'}
              </span>
              <span className="hidden md:inline px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-mono uppercase tracking-widest font-bold">
                ● Live Mainnet Tunnel
              </span>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-[10px] text-zinc-500 font-mono">
              SESSION EXPIRATION: 11:29:43 UTC
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Inner Panel Framework Layout */}
        <div className="flex-1 grid grid-cols-12 overflow-hidden bg-black/50">
          
          {/* Sub Workspace Sidebar */}
          <div className="col-span-12 md:col-span-3 bg-black/40 border-r border-white/5 p-4 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block pl-2">Operations</span>
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab('swap')}
                    className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-mono transition-all text-left ${
                      activeTab === 'swap' 
                        ? 'bg-blue-500/10 text-blue-400 font-semibold border border-blue-500/20' 
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Coins className="w-4 h-4" />
                      <span>Mint & Redeem</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setActiveTab('redeploy')}
                    className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-mono transition-all text-left ${
                      activeTab === 'redeploy' 
                        ? 'bg-blue-500/10 text-blue-400 font-semibold border border-blue-500/20' 
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      <span>Reserve Assets</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setActiveTab('diagnostics')}
                    className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-mono transition-all text-left ${
                      activeTab === 'diagnostics' 
                        ? 'bg-blue-500/10 text-blue-400 font-semibold border border-blue-500/20' 
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4" />
                      <span>Engine Logs</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </nav>
              </div>

              {/* Status parameters */}
              <div className="p-4 bg-white/[0.01] border border-white/5 rounded-2xl space-y-3">
                <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-1">
                  <UserCheck2 className="w-3 h-3 text-emerald-400" /> Premium Account Profile
                </div>
                <div className="text-xs text-zinc-200">
                  <div className="text-zinc-500 text-[10px]">ORGANIZATION</div>
                  <span className="font-semibold text-gray-100 font-mono">Taza Allam Enterprise</span>
                </div>
                <div className="text-xs text-zinc-200">
                  <div className="text-zinc-500 text-[10px]">COMPLIANCE TIER</div>
                  <span className="font-bold text-blue-400">KYC/AML LEVEL 3 APPROVED</span>
                </div>
              </div>
            </div>

            {/* Sidebar bottom signature */}
            <div className="text-[10px] text-zinc-600 font-mono border-t border-white/5 pt-4">
              <span>SECURITY CERTIFIED VIA HALBORN</span>
            </div>
          </div>

          {/* Core Interactive Center Area */}
          <div className="col-span-12 md:col-span-9 p-6 flex flex-col justify-between overflow-y-auto">
            
            {/* VIEW SUB-TAB: MINT & REDEEM SWAP */}
            {activeTab === 'swap' && (
              <div className="space-y-6 animate-fade-in max-w-xl mx-auto w-full">
                
                {/* Intro message */}
                <div className="space-y-1 text-center">
                  <h3 className="font-sans font-medium text-lg text-white">Collateral Converter</h3>
                  <p className="text-zinc-400 text-xs">
                    Mint {selectedTarget === 'KASH' ? 'KASH' : selectedTarget} tokens directly from raw USDC/USDT instantly at guaranteed 1:1 parity exchange rates.
                  </p>
                </div>

                {/* Swap Interface layout card */}
                <form onSubmit={handleSwap} className="space-y-4 bg-white/[0.02] border border-white/5 p-5 rounded-2xl">
                  
                  {/* From Token parameter input */}
                  <div className="bg-black/60 p-4 border border-white/10 rounded-xl space-y-2">
                    <div className="flex justify-between text-[10px] font-mono text-zinc-500 uppercase">
                      <span>Fund Source Depositing</span>
                      <span>Balance: 124,000 USD</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <select 
                        value={selectedCol}
                        onChange={(e) => setSelectedCol(e.target.value)}
                        className="bg-[#05060b] border border-white/15 px-3 py-1.5 rounded-lg text-xs text-white uppercase focus:outline-none"
                      >
                        <option>USDT</option>
                        <option>USDC</option>
                        <option>EUR</option>
                      </select>
                      <input 
                        type="number" 
                        required
                        value={payAmount}
                        onChange={(e) => {
                          setPayAmount(e.target.value);
                          setReceiveAmount(e.target.value); // 1:1 pegged
                        }}
                        className="w-full bg-transparent text-right text-lg text-white font-mono focus:outline-none placeholder-zinc-600" 
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  {/* Redirection indicator */}
                  <div className="flex justify-center -my-1">
                    <div className="w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 text-xs text-center font-bold relative z-10">
                      ↓
                    </div>
                  </div>

                  {/* Target Mint token inputs */}
                  <div className="bg-black/60 p-4 border border-white/10 rounded-xl space-y-2">
                    <div className="flex justify-between text-[10px] font-mono text-zinc-500 uppercase">
                      <span>Mint Target Yield Token</span>
                      <span>Estimated Peg: 1.00 USD</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <select 
                        value={selectedTarget}
                        onChange={(e) => setSelectedTarget(e.target.value)}
                        className="bg-[#05060b] border border-white/15 px-3 py-1.5 rounded-lg text-xs text-white uppercase focus:outline-none"
                      >
                        <option>KASH</option>
                        <option>TEETH-BOND</option>
                        <option>TTEH-QUANT</option>
                      </select>
                      <input 
                        type="text" 
                        readOnly
                        value={receiveAmount}
                        className="w-full bg-transparent text-right text-lg text-gray-300 font-mono focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Action Mint submit */}
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/40 text-white font-mono text-xs font-bold uppercase rounded-xl transition-all shadow-lg active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 rounded-full border border-t-transparent border-white animate-spin" />
                        <span>PROCESSING PROTOCOL CONSENSUS...</span>
                      </>
                    ) : (
                      <>
                        <span>EXECUTE SECURE MINT FLOW</span>
                      </>
                    )}
                  </button>

                </form>

                {/* Transaction history log header */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                    <History className="w-3.5 h-3.5 text-zinc-500" />
                    <span>RECENT REAL-TIME TRANSFERS</span>
                  </div>
                  <div className="space-y-1.5 max-h-[140px] overflow-y-auto no-scrollbar">
                    {txs.map((tx) => (
                      <div key={tx.id} className="p-3 bg-white/[0.01] border border-white/5 rounded-xl flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-600">{tx.hash}</span>
                          <span className="text-gray-200">{tx.action}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-blue-400 font-semibold">{tx.amount}</span>
                          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded uppercase font-bold">
                            {tx.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* VIEW SUB-TAB: RESERVE REDEPLOY */}
            {activeTab === 'redeploy' && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h4 className="font-sans font-medium text-lg text-white">Consolidation Proofs</h4>
                  <p className="text-xs text-zinc-400">
                    Real-time asset reserve proof tracking. Review digital storage custodian addresses and treasury bond balances securely.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
                    <div className="text-xs font-mono text-[#E5DCC5] uppercase">Coinbase Safe Custody V1</div>
                    <span className="block text-zinc-500 font-mono text-[10px] break-all">0x71e892d77aef902bca881a27eef01adcf9810b10</span>
                    <div className="flex justify-between items-baseline pt-2">
                      <span className="text-[10px] text-zinc-400">Total Reserves Held:</span>
                      <span className="font-mono text-white text-base font-semibold">$54,204,180.20 USDT</span>
                    </div>
                  </div>

                  <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
                    <div className="text-xs font-mono text-[#E5DCC5] uppercase">Securitize SPV Trust Hub</div>
                    <span className="block text-zinc-500 font-mono text-[10px] break-all">0x334bf02ced9100fae92ba8cf62df98cff0df1a0112</span>
                    <div className="flex justify-between items-baseline pt-2">
                      <span className="text-[10px] text-zinc-400">U.S. Bonds Matched:</span>
                      <span className="font-mono text-white text-base font-semibold">$41,520,311.53 USDC</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/15 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed text-zinc-400">
                    <span className="text-white font-semibold block mb-1">Audit Status Update</span>
                    An automated reserve synchronization checks and publishes proof matrices every 4 hours. Independent audit vectors have confirmed 1:1 reserve solvency continuously for the past 420 days.
                  </div>
                </div>
              </div>
            )}

            {/* VIEW SUB-TAB: LOGS & DIAGNOSTICS */}
            {activeTab === 'diagnostics' && (
              <div className="space-y-4 animate-fade-in flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-sans font-medium text-lg text-white">Sovereign AppChain Diagnostics Terminal</h4>
                  <p className="text-xs text-zinc-400 mb-4">
                    Continuous monitoring of API request payloads, consensus block validations, and local environment variables.
                  </p>
                </div>

                {/* Console text log block */}
                <div className="bg-black/80 font-mono text-[11px] leading-relaxed text-blue-400/90 p-5 rounded-2xl border border-white/10 flex-1 overflow-y-auto min-h-[160px] space-y-1">
                  <div className="text-zinc-500">// Appended live diagnostics logs</div>
                  {sysLog.map((log, index) => (
                    <div key={index} className="flex gap-2">
                      <span className="text-zinc-600 select-none">&gt;&gt;</span>
                      <span>{log}</span>
                    </div>
                  ))}
                  <div className="w-1.5 h-3.5 bg-blue-400 inline-block animate-pulse" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-mono mt-2">
                  <div className="p-3 bg-white/[0.01] border border-white/5 rounded-xl">
                    <span className="block text-[10px] text-zinc-500">APP DELEGATION ROUTE</span>
                    <span className="text-gray-300">https://kaio-rwa-appchain/node-8</span>
                  </div>
                  <div className="p-3 bg-white/[0.01] border border-white/5 rounded-xl">
                    <span className="block text-[10px] text-zinc-500">TRANSACTION TAX EXEMPTION</span>
                    <span className="text-[#E5DCC5] font-semibold">TRUE (ERC-7518)</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom operational state statement */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] text-zinc-500 font-mono gap-4 shrink-0">
              <div className="flex items-center gap-1">
                <span>SYSTEM STATUS:</span>
                <span className="text-emerald-400 font-semibold uppercase">FULLY OPTIMAL</span>
              </div>
              <div className="text-zinc-400">
                ACTIVE OPERATOR KEY: <span className="font-semibold text-[#E5DCC5]">TA_ENTERPRISE_ALLAM_AUTHORIZED</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
