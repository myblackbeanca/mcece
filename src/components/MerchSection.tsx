import React, { useState } from 'react';
import { ShoppingBag, Lock, Check } from 'lucide-react';
import VerificationModal from './VerificationModal';

export default function MerchSection() {
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [isMinyHolder, setIsMinyHolder] = useState(false);

  const merch = [
    {
      name: "Limited Edition Vinyl",
      image: "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&q=80",
      price: 49.99,
      holderPrice: 24.99
    },
    {
      name: "Tour Hoodie",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80",
      price: 59.99,
      holderPrice: 29.99
    },
    {
      name: "Exclusive Tee",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80",
      price: 29.99,
      holderPrice: 14.99
    }
  ];

  const exclusiveMerch = [
    {
      name: "Gold Edition Cap",
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&q=80",
      price: 79.99,
      holderPrice: 39.99,
      exclusive: true
    }
  ];

  const handleVerification = (code: string) => {
    if (code === 'hellominy') {
      setIsMinyHolder(true);
    }
    setIsVerificationOpen(false);
  };

  return (
    <section id="merch" className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Official Merch</h2>
          <div className="flex items-center justify-center gap-4">
            <p className="text-gray-600">MINY holders get 50% off all merchandise</p>
            {!isMinyHolder && (
              <button 
                onClick={() => setIsVerificationOpen(true)}
                className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                <Lock size={16} />
                Verify MINY
              </button>
            )}
            {isMinyHolder && (
              <span className="flex items-center gap-2 text-green-600">
                <Check size={16} />
                MINY Verified
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {merch.map((item) => (
            <div key={item.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative pt-[100%]">
                <div className="absolute inset-0 clip-hexagon m-4 overflow-hidden rotate-12 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  {isMinyHolder ? (
                    <div>
                      <div className="text-2xl font-bold text-green-600">${item.holderPrice}</div>
                      <div className="text-sm text-gray-500 line-through">${item.price}</div>
                    </div>
                  ) : (
                    <div className="text-2xl font-bold">${item.price}</div>
                  )}
                </div>
                
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                  <ShoppingBag size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}

          {/* Exclusive Products (Only visible after verification) */}
          {isMinyHolder && exclusiveMerch.map((item) => (
            <div key={item.name} className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-xl shadow-lg overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                MINY Exclusive
              </div>
              <div className="relative pt-[100%]">
                <div className="absolute inset-0 clip-hexagon m-4 overflow-hidden rotate-12 hover:rotate-0 transition-transform duration-500 bg-gradient-to-r from-yellow-300 to-amber-300">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-amber-600">${item.holderPrice}</div>
                    <div className="text-sm text-gray-500 line-through">${item.price}</div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-white py-2 rounded-lg hover:from-yellow-600 hover:to-amber-600 transition-colors flex items-center justify-center gap-2">
                  <ShoppingBag size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
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