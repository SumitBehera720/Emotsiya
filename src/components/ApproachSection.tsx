import React from 'react';
import { BookOpen, Compass, Award, Users, RefreshCw, Trophy, Calendar, CheckSquare, Sparkles } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const ApproachSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Learn',
      desc: 'Understand root causes.',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
    },
    {
      num: '02',
      title: 'Experience',
      desc: 'Real-life civic activities.',
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
    },
    {
      num: '03',
      title: 'Practice',
      desc: 'Daily habit challenges.',
      icon: CheckSquare,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
    },
    {
      num: '04',
      title: 'Connect',
      desc: 'Unite local communities.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
    },
    {
      num: '05',
      title: 'Transform',
      desc: 'Adopt lasting habits.',
      icon: RefreshCw,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    },
    {
      num: '06',
      title: 'Lead',
      desc: 'Active nation ambassador.',
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const habitBuilders = [
    { title: 'Live Events', desc: 'Awareness & live sessions', icon: Calendar },
    { title: 'Youth Competitions', desc: 'National recognition', icon: Trophy },
    { title: 'Field Exposure', desc: 'Practical community action', icon: Compass },
    { title: 'Community Drives', desc: 'Local neighborhood impact', icon: Users },
    { title: 'Tech Modules', desc: 'Digital citizen tracking', icon: Sparkles },
    { title: 'Leadership Roles', desc: 'Social ambassador status', icon: Award },
  ];

  return (
    <section id="approach" className="py-10 sm:py-16 md:py-24 bg-[#faf7f2] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <RevealOnScroll className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-8 sm:mb-14">
          <span className="px-3.5 py-1 rounded-full bg-white/80 border border-amber-900/15 text-amber-900 text-[10px] sm:text-xs font-black tracking-wider uppercase backdrop-blur-md shadow-sm">
            Our Methodology
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            We Don&apos;t Just Educate. <span className="font-serif italic text-amber-800">We Transform.</span>
          </h2>
          <p className="text-slate-700 text-xs sm:text-base leading-relaxed font-medium">
            Emotsiya focuses on transformation. We do not simply teach concepts — we build daily habits and real-world action.
          </p>
        </RevealOnScroll>

        {/* 6 Step Progression Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4 mb-8 sm:mb-14">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <RevealOnScroll key={s.num} delay={(idx % 6) * 50}>
                <div className="relative rounded-2xl bg-white/80 border border-white shadow-md backdrop-blur-xl hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full">
                  <div>
                    {/* Photo Header */}
                    <div className="h-20 sm:h-24 w-full relative overflow-hidden bg-slate-900 image-zoom-container">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/90 text-amber-950 text-[9px] font-mono font-black shadow-sm">
                        Step {s.num}
                      </span>
                    </div>

                    <div className="p-3 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <div className="p-1 rounded bg-amber-100 text-amber-800 shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-amber-800 transition-colors">
                          {s.title}
                        </h3>
                      </div>
                      <p className="text-[10px] text-slate-600 font-medium leading-tight">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Habit Builders Card Grid */}
        <RevealOnScroll delay={100} className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/85 border border-white shadow-lg backdrop-blur-2xl space-y-5">
          <div className="text-center md:text-left space-y-0.5">
            <h3 className="text-lg sm:text-2xl font-black text-slate-900">How We Build Positive Habits</h3>
            <p className="text-xs font-medium text-slate-600">Integrated learning models for lasting societal transformation</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-1">
            {habitBuilders.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white/90 border border-slate-200/80 flex items-start gap-2.5 hover:border-amber-400 shadow-sm"
                >
                  <div className="p-2 rounded-lg bg-amber-100/70 text-amber-900 border border-amber-200 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900">{item.title}</h4>
                    <p className="text-[10px] text-slate-600 mt-0.5 font-medium leading-snug">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};
