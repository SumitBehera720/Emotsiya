import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, HeartHandshake, Award, Users, Sparkles, Flame, MapPin, Calendar, Star } from 'lucide-react';

interface HeroProps {
  onOpenPassModal: (tier?: '199' | '499') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPassModal }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const campaignSlides = [
    {
      id: 0,
      title: 'School Leadership & Youth Civic Action',
      tagline: 'Empowering 1 Lakh+ Students Across 1000+ Partner Schools & Colleges',
      bgImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=2000&q=80',
      badge: 'National School Initiative',
      category: 'Civic Responsibility',
    },
    {
      id: 1,
      title: 'Environmental & Zero-Waste Cleanliness Drives',
      tagline: '500+ Tree Plantations & Plastic-Free Neighborhood Campaigns',
      bgImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80',
      badge: 'Green Community Drive',
      category: 'Environmental',
    },
    {
      id: 2,
      title: 'Road Safety & Pedestrian Discipline Campaign',
      tagline: 'Spreading Helmet & Traffic Safety Awareness Across 50+ Cities',
      bgImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2000&q=80',
      badge: 'Safer Roads Campaign',
      category: 'Traffic Safety',
    },
    {
      id: 3,
      title: 'Youth EQ & Employability Masterclass',
      tagline: 'Cultivating Resilience, Public Speaking & Practical Leadership Skills',
      bgImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=80',
      badge: 'Character & Employability',
      category: 'Life Skills',
    },
  ];

  const currentSlide = campaignSlides[activeSlide];

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center pt-20 pb-10 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-b from-[#fdfbf7] via-[#faf6ee] to-[#f5efe4]">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-10 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-amber-200/30 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-emerald-200/25 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Live Ticker Bar */}
        <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 rounded-full bg-white/90 border border-amber-900/15 shadow-sm backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-black text-amber-950 tracking-wider uppercase">
            Emotsiya Movement 2026
          </span>
          <span className="text-[10px] text-amber-800 font-extrabold">• Registration Open (₹199 / ₹499)</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-[10px] sm:text-xs font-black uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              <span>{currentSlide.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Building Great Citizens.{' '}
              <span className="block mt-1 font-serif italic text-amber-800">
                Building a Great Nation.
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-700 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {currentSlide.tagline}
            </p>

            {/* Campaign Slider Tabs */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-[11px] font-extrabold text-slate-700">
                <span className="flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-600" />
                  Active Citizen Campaigns
                </span>
                <span className="text-amber-800">Slide {activeSlide + 1} of 4</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {campaignSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`p-2.5 rounded-xl border text-left transition-all text-xs font-bold flex flex-col justify-between ${
                      activeSlide === idx
                        ? 'bg-amber-900 text-white border-amber-950 shadow-md scale-[1.02]'
                        : 'bg-white/80 border-slate-200 text-slate-700 hover:bg-white hover:border-amber-400 backdrop-blur-md'
                    }`}
                  >
                    <span className={`text-[9px] font-mono font-black ${activeSlide === idx ? 'text-amber-300' : 'text-amber-800'}`}>0{idx + 1}</span>
                    <span className="line-clamp-1 mt-0.5 font-extrabold text-[11px]">{slide.category}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={() => onOpenPassModal('199')}
                className="px-6 py-3.5 text-xs sm:text-sm font-black text-white bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 hover:from-amber-800 hover:to-amber-950 rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <span>Get Event Pass (₹199 / ₹499)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#events"
                className="px-5 py-3.5 text-xs sm:text-sm font-bold text-slate-800 bg-white/90 border border-slate-300 rounded-xl hover:bg-white hover:border-amber-600 transition-all flex items-center gap-1.5 backdrop-blur-md shadow-sm"
              >
                <Calendar className="w-4 h-4 text-amber-700" />
                <span>View Events</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 grid grid-cols-3 gap-2.5 max-w-lg mx-auto lg:mx-0 border-t border-amber-900/10">
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/80 border border-amber-900/10 backdrop-blur-md text-center sm:text-left">
                <p className="text-xl sm:text-2xl font-black text-slate-900">7</p>
                <p className="text-[10px] font-bold text-slate-600">Challenges</p>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/80 border border-amber-900/10 backdrop-blur-md text-center sm:text-left">
                <p className="text-xl sm:text-2xl font-black text-amber-800">1 Lakh+</p>
                <p className="text-[10px] font-bold text-slate-600">Students</p>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/80 border border-amber-900/10 backdrop-blur-md text-center sm:text-left">
                <p className="text-xl sm:text-2xl font-black text-amber-900">1000+</p>
                <p className="text-[10px] font-bold text-slate-600">Schools</p>
              </div>
            </div>

          </div>

          {/* Right Hero Section: High-Res Dynamic Photo Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="rounded-2xl sm:rounded-3xl bg-white/90 border border-white p-3.5 sm:p-4 space-y-3.5 shadow-xl backdrop-blur-2xl relative overflow-hidden group">
                
                {/* Active Photo Container */}
                <div className="relative h-48 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-inner image-zoom-container">
                  <img
                    key={currentSlide.id}
                    src={currentSlide.bgImage}
                    alt={currentSlide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                  
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-extrabold flex items-center gap-1 shadow-sm">
                    <MapPin className="w-3 h-3 text-amber-700" />
                    <span>Nationwide Drive</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-amber-300 font-mono">FEATURED INITIATIVE</span>
                    <h3 className="text-sm sm:text-base font-extrabold line-clamp-1">{currentSlide.title}</h3>
                  </div>
                </div>

                {/* Quick Event Pass Card */}
                <div className="p-3.5 rounded-xl sm:rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                      <span className="text-xs font-black text-slate-900 uppercase">OFFICIAL PASS TIERS</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[9px] font-black">Active Tiers</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div
                      onClick={() => onOpenPassModal('199')}
                      className="p-2.5 rounded-lg bg-white border border-amber-200 hover:border-amber-500 cursor-pointer transition-all shadow-sm"
                    >
                      <span className="text-[9px] font-bold text-slate-600 block">STANDARD</span>
                      <span className="text-xl font-black text-slate-900">₹199</span>
                      <span className="text-[9px] text-slate-500 block">Entry + Certificate</span>
                    </div>

                    <div
                      onClick={() => onOpenPassModal('499')}
                      className="p-2.5 rounded-lg bg-gradient-to-br from-amber-900 to-amber-950 text-white cursor-pointer transition-all shadow-sm"
                    >
                      <span className="text-[9px] font-bold text-amber-300 block">VIP LEADER</span>
                      <span className="text-xl font-black text-white">₹499</span>
                      <span className="text-[9px] text-amber-100/80 block">VIP Seat + Toolkit</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenPassModal('199')}
                    className="w-full py-2.5 px-3 bg-amber-900 hover:bg-amber-950 text-white font-extrabold text-xs rounded-lg transition-all text-center shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>Book Your Pass Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Verified Certificate</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <HeartHandshake className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>Direct Impact</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                    <span>School Network</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>National Badge</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
