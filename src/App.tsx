import React, { useState } from 'react';
import { BrandMode } from './types';
import Banner from './components/Banner';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Platform from './components/Platform';
import Funds from './components/Funds';
import Footer from './components/Footer';
import AppModal from './components/AppModal';

export default function App() {
  // State for overall brand configuration ('tether' | 'teeth' | 'tteh')
  const [brandMode, setBrandMode] = useState<BrandMode>('tether');
  
  // State for terminal app simulation overlay popup
  const [isAppOpen, setIsAppOpen] = useState(false);

  // Simulated list of users registered in the current sandbox turn
  const [waitlistUsers, setWaitlistUsers] = useState<string[]>([]);

  const handleJoinWaitlist = (email: string) => {
    setWaitlistUsers(prev => [...prev, email]);
    console.log(`[Waitlist Log] Successfully registered voter: ${email}`);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-[#E5DCC5]/30 selection:text-white">
      
      {/* Dynamic Multi-mode Announcement Banner */}
      <Banner 
        mode={brandMode} 
        onModeChange={(newMode) => setBrandMode(newMode)} 
      />

      {/* Main Core Header Navigation */}
      <Header 
        mode={brandMode} 
        onGoToApp={() => setIsAppOpen(true)} 
      />

      {/* Main Content Sections stack flow */}
      <main className="flex-1">
        {/* Hero introduction section */}
        <Hero 
          mode={brandMode} 
          onJoinWaitlist={handleJoinWaitlist} 
        />

        {/* Dynamic interactive product platform & layout panel */}
        <Platform 
          mode={brandMode} 
        />

        {/* Institutional Investment Funds & interactive prospectus slider */}
        <Funds 
          mode={brandMode} 
        />

        {/* Vetted core VC partners & platform ecosystems */}
        <Partners />
      </main>

      {/* Footer copyright and Taza Allam branding panel */}
      <Footer 
        mode={brandMode} 
      />

      {/* Complete simulated full-screen terminal trading environment */}
      <AppModal 
        isOpen={isAppOpen} 
        onClose={() => setIsAppOpen(false)} 
        mode={brandMode} 
      />

    </div>
  );
}
