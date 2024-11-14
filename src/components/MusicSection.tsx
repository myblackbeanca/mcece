import React, { useState } from 'react';
import { Play, Clock, Music, Lock } from 'lucide-react';
import VerificationModal from './VerificationModal';

export default function MusicSection() {
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [verificationPurpose, setVerificationPurpose] = useState<'listen' | 'claim'>('listen');

  const handleVerification = (code: string) => {
    if (code === '12345' && verificationPurpose === 'listen') {
      window.location.href = 'https://drop.minyvinyl.com/';
    }
    setIsVerificationOpen(false);
  };

  const handleListenClick = () => {
    setVerificationPurpose('listen');
    setIsVerificationOpen(true);
  };

  const handleClaimClick = () => {
    setVerificationPurpose('claim');
    setIsVerificationOpen(true);
  };

  return (
    <section id="music" className="py-16 bg-gradient-to-b from-purple-900/5 to-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Latest Music</h2>
        
        {/* Latest Release */}
        <div className="bg-white rounded-xl shadow-xl p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 clip-hexagon"></div>
              <div className="absolute inset-[2px] clip-hexagon overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80" 
                  alt="Latest Release"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <span className="text-pink-600 font-medium">New Release Sneak Peek</span>
              <h3 className="text-2xl font-bold mb-2">Midnight Dreams</h3>
              <p className="text-gray-600 mb-4">Single • 2024</p>
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={handleClaimClick}
                  className="flex items-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
                >
                  <Lock size={18} />
                  Claim MINY to Listen
                </button>
                <button 
                  onClick={handleListenClick}
                  className="flex items-center gap-2 border border-purple-600 text-purple-600 px-6 py-2 rounded-full hover:bg-purple-50 transition-colors"
                >
                  <Play size={18} />
                  Preview (30s)
                </button>
              </div>
            </div>
          </div>
        </div>

        <VerificationModal
          isOpen={isVerificationOpen}
          onClose={() => setIsVerificationOpen(false)}
          onVerify={handleVerification}
          type={verificationPurpose}
        />
      </div>
    </section>
  );
}