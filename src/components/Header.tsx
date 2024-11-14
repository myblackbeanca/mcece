import React, { useState } from 'react';
import { Menu, X, Music, Disc, Play, FileText, Heart, ShoppingBag, Calendar, Crown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#album", label: "New Music", icon: Music },
    { href: "#mixtapes", label: "Mixtapes", icon: Disc },
    { href: "#music", label: "Music", icon: Play },
    { href: "#epk", label: "EPK", icon: FileText },
    { href: "#fundraiser", label: "Support", icon: Heart },
    { href: "#merch", label: "Merch", icon: ShoppingBag },
    { href: "#events", label: "Live Shows", icon: Calendar },
    { href: "#subscription", label: "Join", icon: Crown }
  ];

  const handleClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-lg z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gradient-to-br from-purple-600 to-pink-600 rotate-45 transform -skew-x-12"></div>
          <span className="font-bold text-xl">CeCe Frey</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ href, label, icon: Icon }) => (
            <div key={href} className="relative group">
              <button 
                onClick={() => handleClick(href)}
                className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors p-2"
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
                {label}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          ))}
        </nav>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-t shadow-lg md:hidden">
            <nav className="flex flex-col">
              {links.map(({ href, label, icon: Icon }) => (
                <button 
                  key={href}
                  onClick={() => handleClick(href)}
                  className="flex items-center gap-3 px-4 py-3 border-b hover:bg-gray-50 transition-colors text-left"
                >
                  <Icon size={18} className="text-purple-600" />
                  {label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}