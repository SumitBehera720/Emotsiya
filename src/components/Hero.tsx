import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MapPin, 
  BookOpen,
  Sparkles,
  ShieldCheck,
  Award,
  Users,
  HeartHandshake
} from 'lucide-react';

interface HeroProps {
  onOpenPassModal: (tier?: '199' | '499') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPassModal }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#faf8f5]"
    >
      {/* Full-Screen Background Image (Positioned Right for Main Subjects) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          src="/hero-fullscreen-right.png"
          alt="Emotsiya Movement Youth Leaders"
          className="w-full h-full object-cover object-right sm:object-right-center"
        />
      </div>

      {/* Clean Soft Light Gradient Overlays on Left Side for Seamless Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/95 to-transparent lg:via-[#faf8f5]/90 lg:to-transparent/20 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-transparent to-[#faf8f5]/40 z-[1]" />

      {/* Ambient Glowing Orbs */}
      <div className="absolute top-16 left-10 w-[500px] h-[500px] bg-[#d96b52]/10 rounded-full blur-[140px] pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Clean Reference Style Content */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            {/* Top Minimal Ticker Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-stone-200 shadow-sm backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d96b52] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#d96b52]"></span>
              </span>
              <span className="text-xs font-bold text-[#1a1a1a] tracking-wide uppercase">
                Emotsiya Movement 2026
              </span>
              <span className="text-stone-300">•</span>
              <span className="text-xs text-[#d96b52] font-extrabold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#d96b52]" />
                <span>National Civic & Human Development Initiative</span>
              </span>
            </div>

            {/* Main Reference Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1a1a1a] leading-[1.08] font-serif-heading">
              India is progressing.{' '}
              <span className="block mt-1.5 font-serif italic text-[#d96b52]">
                But progress needs people.
              </span>
            </h1>

            {/* Reference Subtitle */}
            <p className="text-base sm:text-xl text-stone-600 font-medium leading-relaxed max-w-xl">
              Most educational systems focus on information. We focus on transformation. It’s time to shift from basic awareness to lasting behavioral change across 1,000+ partner schools and colleges.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              
              {/* Primary Course Catalog Button */}
              <a
                href="#courses"
                className="px-8 py-4 text-sm font-black text-white bg-[#d96b52] hover:bg-[#c85a42] rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center gap-3 group"
              >
                <BookOpen className="w-4 h-4 text-white" />
                <span>Explore Certified Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Event Pass Button */}
              <button
                onClick={() => onOpenPassModal('199')}
                className="px-6 py-4 text-sm font-bold text-[#1a1a1a] bg-white hover:bg-stone-50 border border-stone-300 hover:border-[#d96b52] rounded-2xl transition-all flex items-center gap-2 backdrop-blur-md shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#d96b52]" />
                <span>Get Event Pass (₹199 / ₹499)</span>
              </button>
            </div>

            {/* Clean Key Impact Metrics Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 max-w-lg border-t border-stone-200">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#1a1a1a] font-serif-heading">7</p>
                <p className="text-xs font-bold text-stone-500 mt-0.5 uppercase tracking-wider">National Challenges</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#d96b52] font-serif-heading">100K+</p>
                <p className="text-xs font-bold text-stone-500 mt-0.5 uppercase tracking-wider">Youth Joined</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#1a1a1a] font-serif-heading">1,000+</p>
                <p className="text-xs font-bold text-stone-500 mt-0.5 uppercase tracking-wider">Partner Schools</p>
              </div>
            </div>

            {/* Clean Trust Proof Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-extrabold text-stone-700 pt-2">
              <div className="flex items-center gap-1.5 p-2.5 rounded-xl bg-white border border-stone-200 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Certs</span>
              </div>
              <div className="flex items-center gap-1.5 p-2.5 rounded-xl bg-white border border-stone-200 shadow-sm">
                <HeartHandshake className="w-4 h-4 text-[#d96b52] shrink-0" />
                <span>Direct Impact</span>
              </div>
              <div className="flex items-center gap-1.5 p-2.5 rounded-xl bg-white border border-stone-200 shadow-sm">
                <Users className="w-4 h-4 text-stone-800 shrink-0" />
                <span>1000+ Schools</span>
              </div>
              <div className="flex items-center gap-1.5 p-2.5 rounded-xl bg-white border border-stone-200 shadow-sm">
                <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>National Badge</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};









