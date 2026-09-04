import React from 'react';
import { MessageSquare, Award, TrendingUp, Brain, Scale, Star, Briefcase, CheckCircle2 } from 'lucide-react';

export const LifeSkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Communication Skills',
      icon: MessageSquare,
      skills: ['Public Speaking', 'Effective Dialogue', 'Persuasive Presentation'],
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Leadership & Vision',
      icon: Award,
      skills: ['Team Management', 'Ethical Decision-Making', 'Crisis Problem-Solving'],
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Personal Growth',
      icon: TrendingUp,
      skills: ['Self-Confidence', 'Habit Self-Discipline', 'Goal Achievement'],
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Mental Strength & EQ',
      icon: Brain,
      skills: ['Emotional Intelligence', 'Stress Mastery', 'Positive Mental Attitude'],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Moral Integrity',
      icon: Scale,
      skills: ['Uncompromising Integrity', 'Civic Duty', 'Ethical Governance'],
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Social Recognition',
      icon: Star,
      skills: ['Community Respect', 'Ambassador Badges', 'National Network'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-8 sm:mb-14">
          <span className="px-3.5 py-1 rounded-full bg-white/80 border border-amber-900/15 text-amber-900 text-[10px] sm:text-xs font-black tracking-wider uppercase backdrop-blur-md shadow-sm">
            Beyond Civic Education
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            When Citizens Grow, <span className="font-serif italic text-amber-800">Society Grows.</span>
          </h2>
          <p className="text-slate-700 text-xs sm:text-base leading-relaxed font-medium">
            Participants develop essential life skills that shape both responsible citizens and highly capable future professionals.
          </p>
        </div>

        {/* 6 Visual Skill Cards 2-Column Mobile Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-14">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl sm:rounded-3xl bg-white/80 border border-white shadow-md backdrop-blur-xl hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Photo Header */}
                  <div className="h-28 sm:h-36 w-full relative overflow-hidden bg-slate-900 image-zoom-container">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                    
                    <div className="absolute bottom-2 left-2 flex items-center gap-1.5 text-white">
                      <div className="p-1.5 rounded-lg bg-amber-900/90 text-amber-300 backdrop-blur-md shadow-sm">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-xs sm:text-base font-black line-clamp-1">{cat.title}</h3>
                    </div>
                  </div>

                  <div className="p-3 sm:p-5 space-y-2">
                    <ul className="space-y-1.5">
                      {cat.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-slate-800">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span className="line-clamp-1">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-3 sm:px-5 pb-3 sm:pb-4 pt-1 border-t border-slate-200/80 text-[9px] sm:text-[10px] font-black text-amber-800 uppercase tracking-wider font-mono">
                  Masterclass Active
                </div>
              </div>
            );
          })}
        </div>

        {/* Career & Financial Advantage Banner */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/85 border border-white shadow-lg backdrop-blur-2xl text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-[10px] sm:text-xs font-extrabold shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-amber-700" />
            <span>Employability & Career Advantage</span>
          </div>

          <p className="text-sm sm:text-xl font-serif italic text-slate-900 max-w-3xl mx-auto leading-relaxed">
            &ldquo;The same qualities that build responsible citizens — leadership, communication, discipline, teamwork, and problem-solving — are the same qualities top employers value.&rdquo;
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-1">
            {['Leadership', 'Communication', 'Discipline', 'Teamwork', 'Problem-Solving', 'Emotional Intelligence'].map((tag, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-amber-50/80 border border-amber-200 text-[10px] sm:text-xs font-extrabold text-slate-900 shadow-sm">
                ✓ {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
