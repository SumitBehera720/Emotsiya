import React, { useState } from 'react';
import { Calendar, Clock, Video, ArrowRight, MapPin, Users } from 'lucide-react';

interface EventSectionProps {
  onOpenPassModal: (tier?: '199' | '499') => void;
}

export const EventSection: React.FC<EventSectionProps> = ({ onOpenPassModal }) => {
  const [activeTab, setActiveTab] = useState<'live' | 'upcoming'>('live');

  const liveEvents = [
    {
      id: 'live-1',
      title: 'National Civic Action Drive & Youth Townhall',
      date: 'Today • 04:00 PM IST',
      status: 'LIVE NOW',
      attendees: '1,420 Registered',
      location: 'Virtual Zoom & Live Stream',
      desc: 'Interactive workshop on youth responsibility, environmental habits, and street traffic awareness.',
      passRequired: '199' as const,
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'live-2',
      title: 'School Leadership & Habit Building Workshop',
      date: 'Today • 06:30 PM IST',
      status: 'STARTING SOON',
      attendees: '890 Registered',
      location: 'Online Workshop Hub',
      desc: 'Developing self-discipline, mental resilience, and zero-waste daily routines in schools.',
      passRequired: '199' as const,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const upcomingEvents = [
    {
      id: 'fut-1',
      title: '7 National Challenges Summit 2026',
      date: 'September 15, 2026 • 10:00 AM',
      countdown: '11 Days to go',
      location: 'Hybrid (New Delhi & Online)',
      desc: 'Annual national conference bringing together school delegates and student leaders.',
      passRequired: '499' as const,
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'fut-2',
      title: 'Cleanliness & Waste Management Drive',
      date: 'September 22, 2026 • 09:00 AM',
      countdown: '18 Days to go',
      location: 'Multi-City Community Hubs',
      desc: 'Hands-on community cleanliness drive earning the Emotsiya Green Ambassador Badge.',
      passRequired: '199' as const,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="events" className="py-24 lg:py-32 bg-[#f4fbfb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d9488]/10 border border-[#0d9488]/20 text-[#0d9488] text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>National Events</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#164e63] leading-tight font-serif-heading">
            Live Events & <span className="text-[#0d9488] italic font-serif">Youth Summits</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Participate in live interactive townhalls and national leadership summits across India.
          </p>

          {/* Clean Tab Switcher */}
          <div className="flex justify-center items-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('live')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'live'
                  ? 'bg-[#0d9488] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-teal-50'
              }`}
            >
              🔥 Live & Today ({liveEvents.length})
            </button>

            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'upcoming'
                  ? 'bg-[#0d9488] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-teal-50'
              }`}
            >
              📅 Upcoming Events ({upcomingEvents.length})
            </button>
          </div>
        </div>

        {/* Live Events Grid */}
        {activeTab === 'live' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {liveEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl hover:border-[#0d9488]/30 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="relative h-52 rounded-2xl overflow-hidden bg-slate-100">
                    <img src={evt.image} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0d9488] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      <span>{evt.status}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-teal-300" />
                        <span>{evt.date}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-teal-300" />
                        <span>{evt.attendees}</span>
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#164e63] group-hover:text-[#0d9488] transition-colors leading-snug">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#0d9488]" />
                    <span>{evt.location}</span>
                  </p>

                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {evt.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-6">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Access Pass</span>
                    <span className="text-xl font-black text-[#0d9488]">₹{evt.passRequired}</span>
                  </div>

                  <button
                    onClick={() => onOpenPassModal(evt.passRequired)}
                    className="px-6 py-3 rounded-full bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold text-xs shadow-sm hover:shadow-md transition-all flex items-center gap-2"
                  >
                    <Video className="w-4 h-4" />
                    <span>Join Event</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upcoming Events Grid */}
        {activeTab === 'upcoming' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl hover:border-[#0d9488]/30 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="relative h-52 rounded-2xl overflow-hidden bg-slate-100">
                    <img src={evt.image} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 px-3.5 py-1 rounded-full bg-white/95 text-slate-800 text-xs font-bold shadow-sm">
                      {evt.countdown}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#164e63] group-hover:text-[#0d9488] transition-colors leading-snug">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#0d9488]" />
                    <span>{evt.date}</span>
                  </p>

                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {evt.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-6">
                  <span className="text-lg font-black text-[#0d9488]">₹{evt.passRequired} Pass</span>

                  <button
                    onClick={() => onOpenPassModal(evt.passRequired)}
                    className="px-6 py-3 rounded-full bg-white border border-slate-300 hover:border-[#0d9488] hover:text-[#0d9488] text-slate-800 font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Reserve Seat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
