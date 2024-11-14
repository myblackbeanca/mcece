import React from 'react';
import { Crown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[70vh] bg-gradient-to-r from-purple-900 to-pink-600 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80')`
        }}
      />
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <div className="flex items-center gap-3 mb-6">
          <Crown size={32} className="text-yellow-400" />
          <h1 className="text-4xl md:text-6xl font-bold">Welcome, Sarah!</h1>
        </div>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
          Dive into exclusive experiences with CeCe Frey
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-pink-500 hover:bg-pink-600 rounded-full font-semibold transition-all transform hover:scale-105">
            Claim Your MINY
          </button>
          <a 
            href="#events" 
            className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full font-semibold transition-all text-center"
          >
            RSVP for Events
          </a>
        </div>
      </div>
    </div>
  );
}