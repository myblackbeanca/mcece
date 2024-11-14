import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

const tourSteps = [
  {
    title: "New Music First",
    description: "Be the first to experience CeCe's latest music with our countdown to new releases.",
    target: "#album"
  },
  {
    title: "CeCe Mixtapes",
    description: "Explore curated playlists featuring CeCe's personal favorites and musical journey.",
    target: "#mixtapes"
  },
  {
    title: "Music & Videos",
    description: "Access CeCe's latest releases and exclusive video content for MINY holders.",
    target: "#music"
  },
  {
    title: "About CeCe",
    description: "Learn more about CeCe's journey and access her Electronic Press Kit (EPK) at playerone.minyvinyl.com/cece",
    target: "#epk"
  },
  {
    title: "Support the Journey",
    description: "Be part of CeCe's musical journey by supporting upcoming releases and projects.",
    target: "#fundraiser"
  },
  {
    title: "Official Merch",
    description: "Shop exclusive merchandise with special discounts for MINY holders.",
    target: "#merch"
  },
  {
    title: "Live Shows & Events",
    description: "Discover upcoming performances, exclusive MINYSets, and VIP experiences.",
    target: "#events"
  },
  {
    title: "CeCe Exclusives",
    description: "Join the exclusive community for early access, special perks, and more.",
    target: "#subscription"
  }
];

export default function GuidedTour() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasSeenTour, setHasSeenTour] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const tourSeen = localStorage.getItem('guidedTourSeen');
      if (!tourSeen) {
        setIsOpen(true);
        const firstElement = document.querySelector(tourSteps[0].target);
        firstElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      const element = document.querySelector(tourSteps[currentStep + 1].target);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      completeTour();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      const element = document.querySelector(tourSteps[currentStep - 1].target);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const completeTour = () => {
    setIsOpen(false);
    setHasSeenTour(true);
    localStorage.setItem('guidedTourSeen', 'true');
  };

  if (!isOpen || hasSeenTour) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md mx-4">
      <div className="bg-white rounded-xl shadow-xl p-6 border border-purple-100">
        <button 
          onClick={completeTour}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">{tourSteps[currentStep].title}</h3>
          <p className="text-gray-600">{tourSteps[currentStep].description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {tourSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentStep ? 'bg-purple-600' : 'bg-purple-200'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            {currentStep > 0 && (
              <button
                onClick={handlePrevious}
                className="flex items-center gap-1 text-gray-600 hover:text-gray-800"
              >
                <ChevronLeft size={20} />
                Previous
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex items-center gap-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
            >
              {currentStep === tourSteps.length - 1 ? 'Got it!' : 'Next'}
              {currentStep < tourSteps.length - 1 && <ChevronRight size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}