import React from 'react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4">CeCe Frey</h4>
            <p className="text-white/80 mb-6">Join the journey and be part of something extraordinary.</p>
            <SocialLinks />
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#music" className="text-white/80 hover:text-white">Music</a></li>
              <li><a href="#events" className="text-white/80 hover:text-white">Events</a></li>
              <li><a href="#community" className="text-white/80 hover:text-white">Community</a></li>
              <li><a href="#subscribe" className="text-white/80 hover:text-white">Subscribe</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="text-white/80 hover:text-white">FAQ</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white">Contact</a></li>
              <li><a href="#terms" className="text-white/80 hover:text-white">Terms</a></li>
              <li><a href="#privacy" className="text-white/80 hover:text-white">Privacy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-white/80 mb-4">Stay updated with latest news and releases.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white/40"
              />
              <button className="px-4 py-2 bg-white text-purple-900 rounded-lg hover:bg-white/90">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>© {new Date().getFullYear()} CeCe Frey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}