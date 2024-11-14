import React from 'react';
import { Play, Heart } from 'lucide-react';

const mixtapes = [
  {
    name: "CeCe's Songs",
    description: "A handpicked collection of her most loved tracks, sharing her journey through music.",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80",
    shortenedLink: "https://go.minyvinyl.com/cecesongs"
  },
  {
    name: "Favorite Holiday Songs",
    description: "Get into the festive spirit with CeCe's favorite holiday tunes, perfect for the season.",
    imageUrl: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&q=80",
    shortenedLink: "https://go.minyvinyl.com/ceceholiday"
  },
  {
    name: "Favorite New Artist Songs",
    description: "Discover the new artists CeCe is loving right now, and maybe find a few new favorites of your own.",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80",
    shortenedLink: "https://go.minyvinyl.com/cecenewartists"
  }
];

export default function MixtapesSection() {
  return (
    <section id="mixtapes" className="py-16 bg-gradient-to-b from-purple-900/5 to-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">CeCe Mixtapes</h2>
        <p className="text-gray-600 mb-8">Dive into curated mixtapes by CeCe, each one capturing a unique vibe</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mixtapes.map((mixtape) => (
            <div key={mixtape.name} className="group relative">
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 clip-hexagon transform transition-transform group-hover:scale-[1.02]"></div>
                <div className="absolute inset-[2px] clip-hexagon overflow-hidden rotate-12 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src={mixtape.imageUrl} 
                    alt={mixtape.name}
                    className="w-full h-full object-cover transform transition-transform group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute inset-0 clip-hexagon bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 flex items-center justify-center gap-4">
                    <a 
                      href={mixtape.shortenedLink}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur flex items-center justify-center"
                    >
                      <Play size={24} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-semibold text-lg">{mixtape.name}</h4>
                <p className="text-gray-600 text-sm mt-2">{mixtape.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}