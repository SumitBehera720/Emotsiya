import React from 'react';
import { Target, CheckCircle2, Heart, Shield, Sparkles, Compass, Award, Users, Lightbulb, BookOpen } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const transformationPillars = [
    { from: 'Responsibility', to: 'Safer Communities', icon: Shield },
    { from: 'Discipline', to: 'Safer Roads', icon: Target },
    { from: 'Sustainable Habits', to: 'Cleaner Environment', icon: Sparkles },
    { from: 'Purpose & Self-Control', to: 'Reduced Addiction', icon: Compass },
    { from: 'Empathy & Cooperation', to: 'Stronger Connection', icon: Heart },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d96b52]/10 border border-[#d96b52]/20 text-[#d96b52] text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>About Emotsiya Movement</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight font-serif-heading">
            Building Better Citizens for a <span className="text-[#d96b52] italic font-serif">Stronger Tomorrow</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-medium leading-relaxed">
            Emotsiya is India&apos;s National Civic Education & Human Development Initiative empowering students, schools, and youth with real-world values, life skills, and civic responsibility.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Column Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200 group">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80"
                alt="Emotsiya Youth Leadership Drive"
                className="w-full h-80 lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 text-[#1a1a1a] text-xs font-bold shadow-sm">
                100,000+ Active Youth
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-300">CIVIC EDUCATION & HABITS</span>
                <h3 className="text-xl font-bold leading-snug">Empowering the Next Generation of Indian Leaders</h3>
              </div>
            </div>
          </div>

          {/* Right Column Value Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-1">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#d96b52]/10 text-[#d96b52] shrink-0 mt-0.5">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1a1a1a]">Behavioral Education Matrix</h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">Bridging the gap between theoretical knowledge and daily civic action.</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-1">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#d96b52]/10 text-[#d96b52] shrink-0 mt-0.5">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1a1a1a]">School & College Integration</h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">Partnered with 1000+ educational institutions nationwide.</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-1">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#d96b52]/10 text-[#d96b52] shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1a1a1a]">Recognized Youth Certification</h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">Official national certificates awarded to participants upon completion.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Core Philosophy Banner */}
        <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <span className="text-xs font-bold text-[#d96b52] uppercase tracking-wider block">Core Philosophy</span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#1a1a1a] mt-1">
                &ldquo;Every social problem is ultimately a human behaviour problem.&rdquo;
              </h3>
            </div>
            <div className="px-5 py-2.5 rounded-2xl bg-[#faf8f5] border border-stone-200 text-center shrink-0">
              <p className="text-xs font-bold text-stone-500">Emotsiya Principle</p>
              <p className="text-sm font-black text-[#d96b52]">Change Behaviour = Transform Society</p>
            </div>
          </div>

          {/* Transformation Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-4 border-t border-stone-100">
            {transformationPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-4 rounded-2xl bg-[#faf8f5] border border-stone-200/60 space-y-2">
                  <div className="flex items-center gap-2 text-[#d96b52]">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-bold text-[#1a1a1a]">{item.from}</span>
                  </div>
                  <div className="text-[11px] font-bold text-[#d96b52]">→ Transforms To</div>
                  <div className="text-xs font-bold text-[#1a1a1a] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item.to}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
