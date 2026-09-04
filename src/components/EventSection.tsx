import React, { useState } from 'react';
import { Calendar, Clock, Video, ArrowRight, Download, MapPin, AlertCircle } from 'lucide-react';

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
    <section id="events" className="py-10 sm:py-16 md:py-24 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-8 sm:mb-14">
          <span className="px-3.5 py-1 rounded-full bg-white/80 border border-amber-900/15 text-amber-900 text-[10px] sm:text-xs font-black tracking-wider uppercase backdrop-blur-md shadow-sm">
            Events Hub
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Emotsiya <span className="font-serif italic text-amber-800">Event Details</span>
          </h2>
          <p className="text-slate-700 text-xs sm:text-base font-medium">
            Join live sessions, reserve your spot for upcoming national drives, or explore past event recaps.
          </p>

          {/* Navigation Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white/85 border border-white shadow-md backdrop-blur-xl mt-4">
            <button
              onClick={() => setActiveTab('live')}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 ${
                activeTab === 'live'
                  ? 'bg-amber-900 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping"></span>
              <span>Live Events</span>
            </button>
            <button
              onClick={() => setActiveTab('future')}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 ${
                activeTab === 'future'
                  ? 'bg-amber-900 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Upcoming</span>
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 ${
                activeTab === 'past'
                  ? 'bg-amber-900 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Past</span>
            </button>
          </div>
        </div>

        {/* Tab 1: LIVE EVENTS */}
        {activeTab === 'live' && (
          <div className="space-y-4">
            <div className="p-3 rounded-xl bg-amber-100/70 border border-amber-300 text-slate-900 text-xs font-bold backdrop-blur-md flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-800" />
              <span>Active live sessions require a standard ₹199 or ₹499 Event Pass for full interactive Q&A access.</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {liveEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="rounded-2xl sm:rounded-3xl bg-white/85 border border-white shadow-lg backdrop-blur-2xl hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    <div className="h-40 sm:h-48 w-full relative overflow-hidden bg-slate-900 image-zoom-container">
                      <img
                        src={evt.image}
                        alt={evt.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>
                      
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] sm:text-xs font-black flex items-center gap-1 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                          {evt.status}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-amber-300 font-mono">LIVE STREAMING</span>
                        <h3 className="text-sm sm:text-lg font-black line-clamp-1">{evt.title}</h3>
                      </div>
                    </div>

                    <div className="p-4 space-y-2">
                      <p className="text-xs text-amber-800 font-extrabold">{evt.subtitle}</p>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">{evt.desc}</p>
                    </div>
                  </div>

                  <div className="p-4 pt-0 space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span className="line-clamp-1">{evt.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                        <span className="line-clamp-1">{evt.location}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenPassModal(evt.passRequired)}
                      className="w-full py-3 rounded-xl bg-amber-900 hover:bg-amber-950 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Join Live with Pass (₹{evt.passRequired})</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: UPCOMING EVENTS */}
        {activeTab === 'future' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {futureEvents.map((evt) => (
              <div
                key={evt.id}
                className="rounded-2xl sm:rounded-3xl bg-white/85 border border-white shadow-lg backdrop-blur-2xl hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  <div className="h-36 sm:h-44 w-full relative overflow-hidden bg-slate-900 image-zoom-container">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                    
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/90 text-slate-900 text-[10px] font-black shadow-sm">
                      {evt.countdown}
                    </span>
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-amber-900 text-amber-100 text-[10px] font-black shadow-sm">
                      ₹{evt.passRequired} Pass
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="text-sm sm:text-base font-black text-slate-900 line-clamp-1">{evt.title}</h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">{evt.desc}</p>
                  </div>
                </div>

                <div className="p-4 pt-0 space-y-3">
                  <div className="text-xs font-bold text-slate-700 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-700" />
                      <span className="line-clamp-1">{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-600" />
                      <span className="line-clamp-1">{evt.location}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenPassModal(evt.passRequired)}
                    className="w-full py-3 rounded-xl bg-white border border-slate-300 hover:border-amber-500 text-slate-900 font-extrabold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Reserve Seat (₹{evt.passRequired})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: PAST EVENTS */}
        {activeTab === 'past' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {pastEvents.map((evt) => (
              <div
                key={evt.id}
                className="rounded-2xl sm:rounded-3xl bg-white/85 border border-white shadow-lg backdrop-blur-2xl flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  <div className="h-36 sm:h-44 w-full relative overflow-hidden bg-slate-900 image-zoom-container">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/90 text-slate-900 text-[10px] font-mono font-bold shadow-sm">
                      {evt.date}
                    </span>
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-extrabold shadow-sm">
                      Completed
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="text-sm sm:text-base font-black text-slate-900 line-clamp-1">{evt.title}</h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">{evt.desc}</p>
                  </div>
                </div>

                <div className="p-4 pt-0 space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-800">
                    <div className="p-2 rounded-xl bg-amber-50/70 border border-amber-200 text-center">
                      <span className="text-slate-600 block text-[9px]">Participants</span>
                      <span className="font-black text-slate-900 text-xs">{evt.participants}</span>
                    </div>
                    <div className="p-2 rounded-xl bg-amber-50/70 border border-amber-200 text-center">
                      <span className="text-slate-600 block text-[9px]">Impact</span>
                      <span className="font-black text-amber-900 text-xs">{evt.impact}</span>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/918808037280?text=Hi%20Emotsiya%20Team,%20please%20share%20the%20recap%20report."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 font-extrabold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-700" />
                    <span>Impact Summary PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
