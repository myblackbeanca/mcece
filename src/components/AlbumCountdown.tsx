import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function AlbumCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const releaseDate = new Date('2025-12-14T00:00:00');
      const now = new Date();
      const difference = +releaseDate - +now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="album" className="py-16 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 clip-hexagon"></div>
            <div className="absolute inset-[2px] clip-hexagon overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80" 
                alt="New Album"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">New Album Coming Soon</h2>
            <p className="text-xl mb-8 text-white/90">
              "Midnight Dreams" - The most anticipated album of 2025
            </p>

            <div className="grid grid-cols-4 gap-4 max-w-lg">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">{String(value).padStart(2, '0')}</div>
                  <div className="text-sm text-white/80 capitalize">{unit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}