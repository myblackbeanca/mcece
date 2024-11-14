import React, { useState } from 'react';
import { X, Lock, Phone } from 'lucide-react';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (code: string) => void;
  type: 'listen' | 'claim' | 'phone';
  eventTitle?: string;
}

export default function VerificationModal({ 
  isOpen, 
  onClose, 
  onVerify, 
  type,
  eventTitle 
}: VerificationModalProps) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const getTitle = () => {
    switch (type) {
      case 'listen':
        return 'Enter MINY Password';
      case 'claim':
        return 'Claim Your MINY';
      case 'phone':
        return 'RSVP for ' + eventTitle;
      default:
        return 'Verify';
    }
  };

  const getPlaceholder = () => {
    switch (type) {
      case 'listen':
        return 'Enter MINY password';
      case 'claim':
        return 'Enter your email';
      case 'phone':
        return 'Enter your phone number';
      default:
        return 'Enter verification code';
    }
  };

  const getMessage = () => {
    switch (type) {
      case 'listen':
        return 'Enter your MINY password to access exclusive content';
      case 'claim':
        return 'Enter your email to claim your MINY membership';
      case 'phone':
        return 'Enter your phone number to RSVP. Your MINY access code will be sent before the event.';
      default:
        return 'Enter verification code';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>
        
        <div className="p-6">
          <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
            {type === 'phone' ? (
              <Phone size={24} className="text-purple-600" />
            ) : (
              <Lock size={24} className="text-purple-600" />
            )}
          </div>
          
          <h3 className="text-2xl font-bold text-center mb-2">{getTitle()}</h3>
          <p className="text-gray-600 text-center mb-6">
            {getMessage()}
          </p>

          <div className="space-y-4">
            <input
              type={type === 'phone' ? 'tel' : type === 'claim' ? 'email' : 'text'}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={getPlaceholder()}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
            />
            
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
              onClick={() => onVerify(input)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              {type === 'phone' ? 'RSVP Now' : type === 'claim' ? 'Claim MINY' : 'Verify'}
            </button>

            <button
              onClick={onClose}
              className="w-full text-gray-600 py-2 hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}