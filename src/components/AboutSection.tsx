import React from 'react';
import { Youtube, Music2, Facebook } from 'lucide-react';

export default function AboutSection() {
  const socialLinks = [
    { icon: Music2, url: 'https://open.spotify.com/artist/cecefrey', label: 'Spotify' },
    { icon: Youtube, url: 'https://youtube.com/cecefrey', label: 'YouTube' },
    { icon: Facebook, url: 'https://facebook.com/cecefrey', label: 'Facebook' }
  ];

  const images = [
    'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80'
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="clip-hexagon overflow-hidden aspect-square rotate-12 hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full h-full">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="CeCe"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    style={{
                      opacity: index === 0 ? 1 : 0,
                      animationName: 'fadeInOut',
                      animationDuration: `${images.length * 3}s`,
                      animationTimingFunction: 'linear',
                      animationDelay: `${index * 3}s`,
                      animationIterationCount: 'infinite'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">About CeCe</h2>
            <p className="text-gray-600 mb-6">
              CeCe is a rising star in the indie music scene, known for her unique blend of electronic pop and soulful vocals. With roots in classical training and a passion for experimental sound design, she creates music that pushes boundaries while remaining accessible and emotionally resonant.
            </p>
            <p className="text-gray-600 mb-8">
              Since her debut in 2020, CeCe has garnered attention for her innovative approach to music production and her dedication to building a genuine connection with her fans through the MINY community.
            </p>

            <div className="flex gap-4 mb-6">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors"
                  aria-label={label}
                >
                  <Icon size={24} className="text-purple-600" />
                </a>
              ))}
            </div>

            <a
              href="https://playerone.minyvinyl.com/cece"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              View EPK
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInOut {
            0%, 33% { opacity: 1; }
            34%, 100% { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
}