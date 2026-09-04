import React from 'react';
import { ShieldAlert, Leaf, Ban, Navigation, Sparkles, Users, Heart, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const NationalChallenges: React.FC = () => {
  const challenges = [
    {
      num: '01',
      title: 'Crime Reduction & Ethics',
      desc: 'Ethics, legal awareness, community watch, and youth duty for safer neighborhoods.',
      icon: ShieldAlert,
      tag: 'Safer Communities',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '02',
      title: 'Pollution & Waste Control',
      desc: 'Environmental stewardship, zero-waste habits, and tree plantation drives.',
      icon: Leaf,
      tag: 'Cleaner Environment',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '03',
      title: 'Drug & Addiction Prevention',
      desc: 'Building awareness, self-control, and resilience for healthier youth lifestyles.',
      icon: Ban,
      tag: 'Healthier Lives',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '04',
      title: 'Traffic & Pedestrian Safety',
      desc: 'Road-safety awareness, helmet compliance, and civic pedestrian respect.',
      icon: Navigation,
      tag: 'Safer Roads',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '05',
      title: 'Public Cleanliness & Transit',
      desc: 'Daily hygiene habits, waste separation, and responsible public transit usage.',
      icon: Sparkles,
      tag: 'Civic Pride',
      image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '06',
      title: 'Social Connection & Harmony',
      desc: 'Fostering empathy, cooperation, and vibrant local community youth engagement.',
      icon: Users,
      tag: 'Stronger Connection',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '07',
      title: 'Happiness & EQ Wellness',
      desc: 'Cultivating emotional intelligence, mental resilience, and personal wellbeing.',
      icon: Heart,
      tag: 'Emotional Health',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="challenges" className="py-20 md:py-28 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <RevealOnScroll className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d96b52]/10 border border-[#d96b52]/20 text-[#d96b52] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The 7 National Challenges</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight font-serif-heading">
            Seven Challenges. <span className="text-[#d96b52] italic font-serif">One Human Solution.</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-medium leading-relaxed">
            Emotsiya identifies seven national challenges shaping everyday life in India. Each looks different on the surface — yet all trace back to human behaviour.
          </p>
        </RevealOnScroll>

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((c, idx) => {
            const Icon = c.icon;
            return (
              <RevealOnScroll key={c.num} delay={(idx % 4) * 60}>
                <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-[#d96b52]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden h-full group">
                  <div>
                    {/* Photo Header Container */}
                    <div className="aspect-[16/11] w-full relative overflow-hidden bg-stone-100">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-[#1a1a1a] text-xs font-black font-mono shadow-sm">
                        {c.num}
                      </span>
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#d96b52] text-white text-[11px] font-bold shadow-sm">
                        {c.tag}
                      </span>

                      <div className="absolute bottom-3 left-3 p-2 rounded-xl bg-white/90 text-[#d96b52] shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#d96b52] transition-colors leading-snug">
                        {c.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed font-medium">
                        {c.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-700 group-hover:text-[#d96b52] transition-colors">
                    <span className="flex items-center gap-1.5 text-stone-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Active Program</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
};
