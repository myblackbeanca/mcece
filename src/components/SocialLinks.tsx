import React from 'react';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

export default function SocialLinks() {
  const socials = [
    { icon: Instagram, url: 'https://instagram.com/cecefrey', label: 'Instagram' },
    { icon: Twitter, url: 'https://twitter.com/cecefrey', label: 'Twitter' },
    { icon: Youtube, url: 'https://youtube.com/cecefrey', label: 'YouTube' },
    { icon: Facebook, url: 'https://facebook.com/cecefrey', label: 'Facebook' }
  ];

  return (
    <div className="flex items-center gap-4">
      {socials.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label={label}
        >
          <Icon size={20} className="text-white" />
        </a>
      ))}
    </div>
  );
}