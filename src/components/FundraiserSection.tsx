import React from 'react';
import { Heart, ArrowRight, Share2, Users } from 'lucide-react';

const FundraiserSection = () => {
  const totalRequired = 50000;
  const amountRaised = 32750;
  const backers = 1234;
  const percentageRaised = (amountRaised / totalRequired) * 100;

  return (
    <section id="fundraiser" className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Back Our Next Music Release</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Be part of something special! Your support helps bring our new music to life. 
              Join our amazing community of backers and help us create something extraordinary.
            </p>

            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">${amountRaised.toLocaleString()} raised</span>
                <span className="text-gray-600">of ${totalRequired.toLocaleString()}</span>
              </div>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-500"
                  style={{ width: `${percentageRaised}%` }}
                ></div>
              </div>
              <div className="flex items-center gap-2 mt-2 text-gray-600">
                <Users size={16} />
                <span>{backers.toLocaleString()} backers</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://mpower.minyvinyl.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
              >
                <Heart size={20} />
                Power The Release
                <ArrowRight size={20} />
              </a>
              
              <button 
                onClick={() => {
                  navigator.share({
                    title: 'Back CeCe Frey\'s New Release',
                    text: 'Join me in supporting CeCe Frey\'s new music release!',
                    url: window.location.href
                  }).catch(() => {
                    // Fallback for browsers that don't support share API
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  });
                }}
                className="inline-flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 transition-colors"
              >
                <Share2 size={20} />
                Invite Friends
              </button>
            </div>
          </div>

          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 clip-hexagon"></div>
            <div className="absolute inset-[2px] clip-hexagon overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80" 
                alt="Music Release"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundraiserSection;