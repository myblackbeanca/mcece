import React, { useState } from 'react';
import { Lock, Check } from 'lucide-react';
import VerificationModal from './VerificationModal';

export default function VideoSection() {
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = (code: string) => {
    if (code === 'hellominy') {
      setIsVerified(true);
    }
    setIsVerificationOpen(false);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-64 h-64 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 clip-hexagon"></div>
            <div className="absolute inset-[2px] clip-hexagon overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80" 
                alt="CeCe Exclusive Video"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Exclusive MINY Video</h2>
            <p className="text-gray-600 mb-6">
              Get access to exclusive behind-the-scenes footage and special performances only available to MINY holders.
            </p>

            {!isVerified ? (
              <button 
                onClick={() => setIsVerificationOpen(true)}
                className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
              >
                <Lock size={20} />
                Unlock with MINY
              </button>
            ) : (
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://player.vimeo.com/video/7985761"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                ></iframe>
              </div>
            )}
          </div>
        </div>

        <VerificationModal
          isOpen={isVerificationOpen}
          onClose={() => setIsVerificationOpen(false)}
          onVerify={handleVerification}
          type="listen"
        />
      </div>
    </section>
  );
}