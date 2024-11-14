import React from 'react';
import { Crown, Check } from 'lucide-react';

export default function SubscriptionCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
        <div className="flex items-center gap-2 mb-4">
          <Crown size={24} />
          <h3 className="text-2xl font-bold">CeCe Exclusives</h3>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold">$4.99</span>
          <span className="text-white/80">/ month</span>
        </div>
      </div>
      
      <div className="p-6">
        <ul className="space-y-4">
          {[
            'Early access to new releases',
            'Exclusive behind-the-scenes content',
            'Monthly virtual meetups',
            'Exclusive merchandise discounts',
            'Priority RSVP for events'
          ].map((benefit, i) => (
            <li key={i} className="flex items-center gap-3">
              <Check size={20} className="text-green-500 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        
        <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}