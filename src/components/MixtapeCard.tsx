import React from 'react';
import { Play, Heart } from 'lucide-react';

interface MixtapeCardProps {
  title: string;
  image: string;
  tracks: number;
  duration: string;
}

export default function MixtapeCard({ title, image, tracks, duration }: MixtapeCardProps) {
  return (
    <div className="group relative">
      <div className="relative w-64 h-72">
        {/* Hexagon shape */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 clip-hexagon transform transition-transform group-hover:scale-[1.02]"></div>
        <div className="absolute inset-[2px] clip-hexagon overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transform transition-transform group-hover:scale-110"
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 clip-hexagon bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            <button className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur flex items-center justify-center">
              <Play size={24} className="text-white" />
            </button>
            <button className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur flex items-center justify-center">
              <Heart size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm text-gray-600">{tracks} tracks • {duration}</p>
      </div>
    </div>
  );
}