import React from 'react';
import { MessageSquare, Users, Heart } from 'lucide-react';

export default function CommunitySection() {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Fan Community</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare size={24} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fan Forum</h3>
            <p className="text-gray-600 mb-4">Connect with other fans, share your thoughts, and join discussions.</p>
            <button className="text-purple-600 font-medium hover:text-purple-700">
              Join Discussion →
            </button>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <Users size={24} className="text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fan Meetups</h3>
            <p className="text-gray-600 mb-4">Organize and join local fan meetups in your area.</p>
            <button className="text-purple-600 font-medium hover:text-purple-700">
              Find Meetups →
            </button>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Heart size={24} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fan Art</h3>
            <p className="text-gray-600 mb-4">Share your creative works and get featured on CeCe's social media.</p>
            <button className="text-purple-600 font-medium hover:text-purple-700">
              Submit Art →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}