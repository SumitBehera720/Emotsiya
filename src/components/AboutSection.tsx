import React from 'react';
import { Target, CheckCircle2, Heart, Shield, Sparkles, Compass, Award, Users, Lightbulb, BookOpen } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const transformationPillars = [
    { from: 'Responsibility', to: 'Safer Communities', icon: Shield, color: 'text-amber-700', bg: 'bg-amber-100/60' },
    { from: 'Discipline', to: 'Safer Roads', icon: Target, color: 'text-slate-800', bg: 'bg-slate-100/80' },
    { from: 'Sustainable Habits', to: 'Cleaner Environment', icon: Sparkles, color: 'text-emerald-700', bg: 'bg-emerald-100/60' },
    { from: 'Purpose & Self-Control', to: 'Reduced Addiction', icon: Compass, color: 'text-amber-800', bg: 'bg-amber-100/80' },
    { from: 'Empathy & Cooperation', to: 'Stronger Communities', icon: Heart, color: 'text-rose-700', bg: 'bg-rose-100/60' },
  ];

  return (
    <section id="about" className="py-10 sm:py-16 md:py-24 bg-[#faf7f2] relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-200/20 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-8 sm:mb-14">
          <span className="px-3.5 py-1 rounded-full bg-white/80 border border-amber-900/15 text-amber-900 text-[10px] sm:text-xs font-black tracking-wider uppercase backdrop-blur-md shadow-sm">
            About Emotsiya Movement
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Building Better Citizens for a <span className="font-serif italic text-amber-800">Stronger Tomorrow</span>
          </h2>
          <p className="text-slate-700 text-xs sm:text-base leading-relaxed font-medium">
            Emotsiya is India&apos;s National Civic Education & Human Development Initiative empowering students, schools, and youth with values, skills, and real-life experiences.
          </p>
        </div>

        {/* Visual 2-Column Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center mb-8 sm:mb-14">
          
          {/* Left Column: High-Res Youth Action Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white image-zoom-container">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80"
                alt="Emotsiya Youth Leadership Drive"
                className="w-full h-56 sm:h-80 lg:h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
              
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-[10px] sm:text-xs font-black flex items-center gap-1.5 shadow-sm">
                <Users className="w-3.5 h-3.5 text-amber-700" />
                <span>100,000+ Active Youth</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-0.5">
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-amber-300 font-mono">CIVIC EDUCATION & HABITS</span>
                <h3 className="text-sm sm:text-lg font-black leading-snug">Empowering the Next Generation of Indian Leaders</h3>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Compact Liquid Glass Value Cards */}
          <div className="lg:col-span-6 space-y-2.5 sm:space-y-3">
            
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 border border-white backdrop-blur-xl shadow-md space-y-1">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-900">Behavioral Education Matrix</h4>
                  <p className="text-[11px] text-slate-600">Bridging the gap between knowledge and daily civic action.</p>
                </div>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 border border-white backdrop-blur-xl shadow-md space-y-1">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-900">School & College Integration</h4>
                  <p className="text-[11px] text-slate-600">Partnered with 1000+ educational institutions nationwide.</p>
                </div>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 border border-white backdrop-blur-xl shadow-md space-y-1">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-100 text-slate-900 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-900">Recognized Youth Certification</h4>
                  <p className="text-[11px] text-slate-600">Official certificates awarded to participants in ₹199 & ₹499 tiers.</p>
                </div>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 border border-white backdrop-blur-xl shadow-md space-y-1">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-100 text-amber-900 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-900">National Impact Campaign</h4>
                  <p className="text-[11px] text-slate-600">Building sustainable habits across cleanliness, safety, and leadership.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Philosophy Card Banner */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/85 border border-white shadow-lg backdrop-blur-2xl space-y-5 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 font-mono">Core Philosophy</span>
              <h3 className="text-lg sm:text-2xl font-serif italic text-slate-900 leading-snug">
                &ldquo;Every social problem is ultimately a human behaviour problem.&rdquo;
              </h3>
            </div>
            <div className="shrink-0 px-4 py-2 rounded-xl bg-amber-50/80 border border-amber-200 text-center shadow-sm">
              <p className="text-[10px] font-bold text-amber-900/70">Emotsiya Principle</p>
              <p className="text-xs font-black text-slate-900">Change Behaviour = Transform Society</p>
            </div>
          </div>

          {/* Connected Transformation Pillars Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 pt-4 border-t border-slate-200/80">
            {transformationPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/90 border border-slate-200/80 space-y-2 flex flex-col justify-between hover:border-amber-400 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-md ${item.bg}`}>
                      <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                    </div>
                    <span className="text-[11px] font-bold text-slate-900 line-clamp-1">{item.from}</span>
                  </div>
                  <div className="text-[10px] text-amber-800 font-mono font-black">↓ Transforms To</div>
                  <div className="text-[11px] font-black text-slate-900 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="line-clamp-1">{item.to}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision Quote Banner */}
        <div className="text-center p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950 text-white shadow-lg">
          <p className="text-base sm:text-2xl font-serif italic max-w-3xl mx-auto leading-relaxed">
            &ldquo;Great people build great communities. Great communities build great nations.&rdquo;
          </p>
          <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-widest text-amber-300 font-mono">— Emotsiya National Vision</span>
        </div>

      </div>
    </section>
  );
};
