import React, { useState } from 'react';
import { Calendar, Clock, Video, ArrowRight, MapPin, Users } from 'lucide-react';

interface EventSectionProps {
  onOpenPassModal: (tier?: '199' | '499') => void;
}

export const EventSection: React.FC<EventSectionProps> = ({ onOpenPassModal }) => {
  const [activeTab, setActiveTab] = useState<'live' | 'future' | 'past'>('live');

  const liveEvents = [
    {
      id: 'live-1',
      title: 'National Civic Action Drive & Youth Townhall',
      subtitle: 'Live Interactive Session with National Civic Mentors',
      date: 'Today • 04:00 PM IST',
      status: 'LIVE NOW',
      attendees: '1,420 Registered',
      location: 'Virtual Zoom & Live Stream',
      desc: 'Interactive workshop on youth responsibility, environmental habits, and street traffic awareness.',
      tags: ['Civic Action', 'Youth Mentorship', 'Live Q&A'],
      passRequired: '199' as const,
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'live-2',
      title: 'School Leadership & Habit Building Workshop',
      subtitle: 'For Students & Educators Across 100+ Schools',
      date: 'Today • 06:30 PM IST',
      status: 'STARTING SOON',
      attendees: '890 Registered',
      location: 'Online Workshop Hub',
      desc: 'Developing self-discipline, mental resilience, and zero-waste daily routines in schools.',
      tags: ['School Initiative', 'Habit Building'],
      passRequired: '199' as const,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const futureEvents = [
    {
      id: 'fut-1',
      title: '7 National Challenges Summit 2026',
      date: 'September 15, 2026 • 10:00 AM',
      countdown: '11 Days to go',
      location: 'Hybrid (New Delhi & Online)',
      desc: 'Annual national conference bringing together 1,000+ school delegates, student leaders, and community changemakers.',
      tags: ['National Summit', 'Certification'],
      passRequired: '499' as const,
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'fut-2',
      title: 'Cleanliness & Waste Management Drive',
      date: 'September 22, 2026 • 09:00 AM',
      countdown: '18 Days to go',
      location: 'Multi-City Community Hubs',
      desc: 'Hands-on community cleanliness drive. Participants earn the Emotsiya Green Ambassador Badge.',
      tags: ['Field Action', 'Green Badge'],
      passRequired: '199' as const,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'fut-3',
      title: 'Youth EQ & Mental Wellness Masterclass',
      date: 'October 05, 2026 • 05:00 PM IST',
      countdown: '31 Days to go',
      location: 'Virtual Interactive Room',
      desc: 'Masterclass on stress management, emotional balance, public speaking confidence, and ethical leadership.',
      tags: ['EQ Masterclass', 'Mental Health'],
      passRequired: '499' as const,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const pastEvents = [
    {
      id: 'past-1',
      title: 'Traffic Safety & Pedestrian Discipline Drive 2026',
      date: 'August 20, 2026',
      participants: '3,200+ Youth',
      impact: '50+ Junctions',
      desc: 'Over 3,000 youth took part in creating road safety awareness banners and assisting traffic discipline.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'past-2',
      title: 'Drug & Addiction Prevention Youth Rally',
      date: 'August 05, 2026',
      participants: '5,000+ Youth',
      impact: '25 Pledges',
      desc: 'A nationwide digital and offline pledge campaign empowering teenagers to choose healthy habits.',
      image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'past-3',
      title: 'Emotsiya National School Launch Ceremony',
      date: 'July 12, 2026',
      participants: '10,000+ Viewers',
      impact: '100+ Partners',
      desc: 'Official launch of the 6-step transformation approach curriculum across partnering schools.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="events" className="py-20 md:py-28 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d96b52]/10 border border-[#d96b52]/20 text-[#d96b52] text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>National Movement Events</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight font-serif-heading">
            Join Our <span className="text-[#d96b52] italic font-serif">Live Events & Summits</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-medium leading-relaxed">
            Real-world civic action drives, online townhalls, and national leadership summits empowering youth across India.
          </p>

          {/* Tabs Switcher */}
          <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
            <button
              onClick={() => setActiveTab('live')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'live'
                  ? 'bg-[#d96b52] text-white shadow-md'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
            >
              🔥 Live & Today ({liveEvents.length})
            </button>

            <button
              onClick={() => setActiveTab('future')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'future'
                  ? 'bg-[#d96b52] text-white shadow-md'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
            >
              📅 Upcoming Events ({futureEvents.length})
            </button>

            <button
              onClick={() => setActiveTab('past')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'past'
                  ? 'bg-[#d96b52] text-white shadow-md'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
            >
              ✨ Past Impact ({pastEvents.length})
            </button>
          </div>
        </div>

        {/* Live Events Grid */}
        {activeTab === 'live' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {liveEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-sm hover:shadow-xl hover:border-[#d96b52]/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="relative h-52 rounded-2xl overflow-hidden bg-stone-100">
                    <img src={evt.image} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#d96b52] text-white text-xs font-black flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      <span>{evt.status}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-300" />
                        <span>{evt.date}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-amber-300" />
                        <span>{evt.attendees}</span>
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#d96b52] transition-colors leading-snug">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-stone-500 font-bold uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#d96b52]" />
                    <span>{evt.location}</span>
                  </p>

                  <p className="text-sm text-stone-600 font-medium leading-relaxed">
                    {evt.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {evt.tags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-600 text-[11px] font-semibold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-100 flex items-center justify-between mt-6">
                  <div>
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">Access Pass</span>
                    <span className="text-lg font-black text-[#d96b52]">₹{evt.passRequired}</span>
                  </div>

                  <button
                    onClick={() => onOpenPassModal(evt.passRequired)}
                    className="px-6 py-3 rounded-full bg-[#d96b52] hover:bg-[#c25942] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <Video className="w-4 h-4" />
                    <span>Join Live with Pass</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: UPCOMING EVENTS */}
        {activeTab === 'future' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futureEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-3xl border border-stone-200/90 p-5 shadow-sm hover:shadow-xl hover:border-[#d96b52]/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="relative h-44 rounded-2xl overflow-hidden bg-stone-100">
                    <img src={evt.image} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#1a1a1a] text-[11px] font-extrabold shadow-sm">
                      {evt.countdown}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#d96b52] transition-colors leading-snug line-clamp-1">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-stone-500 font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#d96b52]" />
                    <span>{evt.date}</span>
                  </p>

                  <p className="text-xs text-stone-500 font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#d96b52]" />
                    <span>{evt.location}</span>
                  </p>

                  <p className="text-xs text-stone-600 font-medium leading-relaxed line-clamp-2">
                    {evt.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-4">
                  <span className="text-sm font-black text-[#d96b52]">₹{evt.passRequired} Pass</span>

                  <button
                    onClick={() => onOpenPassModal(evt.passRequired)}
                    className="px-4 py-2 rounded-full bg-white border border-stone-300 hover:border-[#d96b52] hover:text-[#d96b52] text-[#1a1a1a] font-bold text-xs transition-all flex items-center gap-1 shadow-sm"
                  >
                    <span>Reserve Seat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: PAST EVENTS */}
        {activeTab === 'past' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-3xl border border-stone-200/90 p-5 shadow-sm flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="relative h-44 rounded-2xl overflow-hidden bg-stone-100">
                    <img src={evt.image} alt={evt.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-bold shadow-sm">
                      Completed
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug line-clamp-1">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-stone-400 font-medium">
                    📅 {evt.date}
                  </p>

                  <p className="text-xs text-stone-600 font-medium leading-relaxed line-clamp-2">
                    {evt.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-4">
                  <div className="grid grid-cols-2 gap-2 text-xs font-bold w-full">
                    <div className="p-2 rounded-xl bg-stone-50 text-center">
                      <span className="text-stone-400 block text-[9px] uppercase">Youth Impacted</span>
                      <span className="font-bold text-[#1a1a1a]">{evt.participants}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-stone-50 text-center">
                      <span className="text-stone-400 block text-[9px] uppercase">Key Metric</span>
                      <span className="font-bold text-[#d96b52]">{evt.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
