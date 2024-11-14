import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AlbumCountdown from './components/AlbumCountdown';
import MixtapesSection from './components/MixtapesSection';
import EPKSection from './components/EPKSection';
import MusicSection from './components/MusicSection';
import EventsSection from './components/EventsSection';
import FundraiserSection from './components/FundraiserSection';
import MerchSection from './components/MerchSection';
import VideoSection from './components/VideoSection';
import SubscriptionSection from './components/SubscriptionSection';
import Footer from './components/Footer';
import VerificationModal from './components/VerificationModal';
import GuidedTour from './components/GuidedTour';

const App = () => {
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);

  const handleVerification = (code: string) => {
    console.log('Verifying code:', code);
    setIsVerificationOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <AlbumCountdown />
        <MixtapesSection />
        <MusicSection />
        <VideoSection />
        <FundraiserSection />
        <MerchSection />
        <EventsSection />
        <EPKSection />
        <SubscriptionSection />
      </main>
      
      <Footer />
      
      <VerificationModal
        isOpen={isVerificationOpen}
        onClose={() => setIsVerificationOpen(false)}
        onVerify={handleVerification}
        type="listen"
      />

      <GuidedTour />
    </div>
  );
};

export default App;