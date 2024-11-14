import React from 'react';
import { Music2, Users, Trophy, ExternalLink } from 'lucide-react';

export default function EPKSection() {
  const stats = [
    { icon: Music2, value: "500K+", label: "Monthly Listeners" },
    { icon: Users, value: "1.2M+", label: "Social Following" },
    { icon: Trophy, value: "25+", label: "Festival Appearances" }
  ];

  return (
    <section id="epk" className="py-16 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 clip-hexagon"></div>
            <div className="absolute inset-[2px] clip-hexagon overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80" 
                alt="CeCe Frey"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">About CeCe</h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              CeCe Frey is a rising star in the indie pop scene, known for her powerful vocals and magnetic stage presence. Born in Chicago, she started her musical journey at age 7, performing in local venues. Her unique blend of pop, R&B, and electronic elements has earned her a dedicated following and critical acclaim. CeCe's music speaks to the heart, addressing themes of empowerment, love, and personal growth.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center p-4 bg-white/10 rounded-xl backdrop-blur">
                  <Icon size={24} className="mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">{value}</div>
                  <div className="text-white/80 text-sm">{label}</div>
                </div>
              ))}
            </div>

            <a
              href="https://playerone.minyvinyl.com/cece"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-900 rounded-full hover:bg-white/90 transition-colors font-medium"
            >
              View Full EPK
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}