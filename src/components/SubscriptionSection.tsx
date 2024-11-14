import React from 'react';
import { Crown, Check, Star, Video, Calendar, Gift } from 'lucide-react';

export default function SubscriptionSection() {
  const benefits = [
    {
      icon: Video,
      title: 'Exclusive Content',
      description: 'Behind-the-scenes footage and exclusive trailers'
    },
    {
      icon: Calendar,
      title: 'Early Access',
      description: 'Be first to access new releases and events'
    },
    {
      icon: Star,
      title: 'VIP Events',
      description: 'Access to exclusive virtual events and meetups'
    },
    {
      icon: Gift,
      title: 'Special Perks',
      description: 'Member-only merchandise and special offers'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Join CeCe Exclusives</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get exclusive access to behind-the-scenes content, early releases, and special events
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

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
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0" />
                  <span>Exclusive behind-the-scenes content</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0" />
                  <span>Early access to new releases</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0" />
                  <span>Monthly virtual meetups</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0" />
                  <span>Exclusive merchandise discounts</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-green-500 flex-shrink-0" />
                  <span>Priority RSVP for events</span>
                </li>
              </ul>
              
              <a 
                href="https://fin.minyvinyl.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center justify-center gap-2"
              >
                <Crown size={20} />
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}