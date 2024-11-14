import React, { useState } from 'react';
import { Calendar, MapPin, Users, Mic, MessageSquare, Crown, Star, Mail, Phone } from 'lucide-react';
import VerificationModal from './VerificationModal';

const events = [
  {
    type: "live-show",
    title: "Summer Arena Tour",
    date: "July 15, 2024",
    location: "Madison Square Garden, NYC",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80",
    capacity: "5000",
    vipPerks: ["Meet & Greet", "Soundcheck Access", "Exclusive Merch"]
  },
  {
    type: "minyset",
    title: "Acoustic MINYSet",
    date: "June 2, 2024",
    location: "Virtual Event",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80",
    capacity: "200",
    description: "An intimate acoustic performance exclusively for MINY holders"
  },
  {
    type: "qa",
    title: "Fan Q&A Session",
    date: "May 10, 2024",
    location: "Virtual Event",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80",
    capacity: "300",
    description: "Submit your questions and join CeCe for an interactive Q&A session"
  }
];

export default function EventsSection() {
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistPhone, setWaitlistPhone] = useState('');
  const [showWaitlistSuccess, setShowWaitlistSuccess] = useState(false);

  const handleRSVP = (eventTitle: string) => {
    setSelectedEvent(eventTitle);
    setIsVerificationOpen(true);
  };

  const handleVerification = (code: string) => {
    console.log(`RSVP confirmed for ${selectedEvent}`);
    setIsVerificationOpen(false);
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist submission:', { email: waitlistEmail, phone: waitlistPhone });
    setShowWaitlistForm(false);
    setShowWaitlistSuccess(true);
    setWaitlistEmail('');
    setWaitlistPhone('');
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'live-show': return Star;
      case 'minyset': return Mic;
      case 'qa': return MessageSquare;
      default: return Calendar;
    }
  };

  return (
    <section id="events" className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Upcoming Events & VIP Access</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore CeCe's exclusive events and get VIP access to the best seats, meet-and-greet opportunities, and special experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {events.map((event) => {
            const EventIcon = getEventIcon(event.type);
            return (
              <div key={event.title} className="group bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative w-full pt-[100%]">
                  <div className="absolute inset-0 clip-hexagon m-4 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <EventIcon size={20} className="text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">
                      {event.type === 'live-show' ? 'Live Show' : 
                       event.type === 'minyset' ? 'MINYSet' : 'Fan Q&A'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={18} />
                      <span>Capacity: {event.capacity}</span>
                    </div>
                  </div>

                  {event.type === 'live-show' && (
                    <div className="mb-4">
                      <div className="text-sm font-medium mb-2">VIP Perks:</div>
                      <ul className="text-sm text-gray-600">
                        {event.vipPerks.map((perk, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Crown size={14} className="text-purple-600" />
                            {perk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {event.description && (
                    <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  )}
                  
                  <button 
                    onClick={() => handleRSVP(event.title)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    {event.type === 'live-show' ? (
                      <>
                        <Crown size={18} />
                        Request VIP Access
                      </>
                    ) : (
                      <>
                        <Calendar size={18} />
                        RSVP Now
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* MINYSet Promotion */}
        <div className="bg-gradient-to-r from-purple-900 to-pink-900 text-white rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-32 h-32 flex-shrink-0">
              <div className="absolute inset-0 bg-white/20 clip-hexagon"></div>
              <div className="absolute inset-[2px] clip-hexagon overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80"
                  alt="MINYSet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">MINYSet Exclusive Performances</h3>
              <p className="text-white/90 mb-4">
                Experience CeCe's music in its purest form with exclusive unplugged performances, 
                available only to MINY subscribers. Intimate sessions that bring you closer to the 
                music and the artist herself.
              </p>
              
              {!showWaitlistForm && !showWaitlistSuccess && (
                <button 
                  onClick={() => setShowWaitlistForm(true)}
                  className="bg-white text-purple-900 px-6 py-2 rounded-full hover:bg-white/90 transition-colors flex items-center gap-2"
                >
                  <Crown size={18} />
                  Join MINYSet Waitlist
                </button>
              )}

              {showWaitlistForm && (
                <form onSubmit={handleWaitlistSubmit} className="space-y-4 mt-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-900" />
                        <input
                          type="email"
                          required
                          value={waitlistEmail}
                          onChange={(e) => setWaitlistEmail(e.target.value)}
                          placeholder="Email address"
                          className="w-full pl-10 pr-4 py-2 rounded-lg text-purple-900 placeholder-purple-900/60"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="relative">
                        <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-900" />
                        <input
                          type="tel"
                          required
                          value={waitlistPhone}
                          onChange={(e) => setWaitlistPhone(e.target.value)}
                          placeholder="Phone number"
                          className="w-full pl-10 pr-4 py-2 rounded-lg text-purple-900 placeholder-purple-900/60"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-purple-900 px-6 py-2 rounded-lg hover:bg-white/90 transition-colors font-medium"
                  >
                    Join Waitlist
                  </button>
                </form>
              )}

              {showWaitlistSuccess && (
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 mt-4">
                  <p className="text-lg font-medium">🎉 You're on the list!</p>
                  <p className="text-white/90">
                    We'll notify you when the next MINYSet performance is scheduled.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <VerificationModal
          isOpen={isVerificationOpen}
          onClose={() => setIsVerificationOpen(false)}
          onVerify={handleVerification}
          type="phone"
          eventTitle={selectedEvent}
        />
      </div>
    </section>
  );
}