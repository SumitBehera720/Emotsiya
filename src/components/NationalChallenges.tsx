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
    <section id="challenges" className="py-10 sm:py-16 md:py-24 bg-[#faf7f2] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <RevealOnScroll className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-8 sm:mb-14">
          <span className="px-3.5 py-1 rounded-full bg-white/80 border border-amber-900/15 text-amber-900 text-[10px] sm:text-xs font-black tracking-wider uppercase backdrop-blur-md shadow-sm">
            The 7 National Challenges
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Seven Challenges. <span className="font-serif italic text-amber-800">One Human Solution.</span>
          </h2>
          <p className="text-slate-700 text-xs sm:text-base leading-relaxed font-medium">
            Emotsiya identifies seven national challenges shaping everyday life in India. Each looks different on the surface — yet all trace back to human behaviour.
          </p>
        </RevealOnScroll>

        {/* Visual Photo Cards 2-Column Mobile Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {challenges.map((c, idx) => {
            const Icon = c.icon;
            return (
              <RevealOnScroll key={c.num} delay={(idx % 4) * 60}>
                <div className="group relative rounded-2xl sm:rounded-3xl bg-white/80 border border-white shadow-md hover:shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden h-full">
                  <div>
                    {/* Photo Header Container */}
                    <div className="aspect-[16/11] w-full relative overflow-hidden bg-slate-900 image-zoom-container">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent"></div>
                      
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/95 text-slate-900 text-[9px] sm:text-xs font-black font-mono shadow-sm">
                        {c.num}
                      </span>
                      <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-amber-900 text-amber-100 text-[8px] sm:text-[10px] font-black shadow-sm">
                        {c.tag}
                      </span>

                      <div className="absolute bottom-2 left-2 p-1.5 sm:p-2 rounded-lg bg-white/90 text-amber-800 shadow-sm backdrop-blur-md">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>

                    <div className="p-3 sm:p-5 space-y-1 sm:space-y-2">
                      <h3 className="text-xs sm:text-base font-black text-slate-900 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
                        {c.title}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed font-medium line-clamp-2 sm:line-clamp-none">
                        {c.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-3 sm:px-5 pb-3 sm:pb-5 pt-1 border-t border-slate-200/80 flex items-center justify-between text-[10px] sm:text-xs font-extrabold text-slate-700 group-hover:text-amber-800 transition-colors">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Active
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
