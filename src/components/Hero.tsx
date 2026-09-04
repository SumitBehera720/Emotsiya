import React from 'react';
import { motion, Variants } from 'framer-motion';
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
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#f4fbfb]"
    >
      {/* Full-Screen Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          src="/hero-fullscreen-right.png"
          alt="Emotsiya Movement Youth Leaders"
          className="w-full h-full object-cover object-right sm:object-right-center"
        />
      </div>

      {/* Clean Soft Teal Tinted Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f4fbfb] via-[#f4fbfb]/95 to-transparent lg:via-[#f4fbfb]/90 lg:to-transparent/20 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#f4fbfb] via-transparent to-[#f4fbfb]/40 z-[1]" />

      {/* Ambient Glowing Teal Orbs */}
      <div className="absolute top-16 left-10 w-[500px] h-[500px] bg-[#0d9488]/10 rounded-full blur-[140px] pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          
          {/* Left Column Content */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            {/* Top Ticker Pill */}
            <motion.div variants={textVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-teal-100 shadow-sm backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0d9488] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0d9488]"></span>
              </span>
              <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">
                Emotsiya Movement 2026
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-[#0d9488] font-bold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#0d9488]" />
                <span>National Civic Initiative</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={textVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#164e63] leading-[1.08] font-serif-heading">
              India is progressing.{' '}
              <span className="block mt-1.5 font-serif italic text-[#0d9488]">
                But progress needs people.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={textVariants} className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
              Most educational systems focus on information. We focus on transformation. It’s time to shift from basic awareness to lasting behavioral change across 1,000+ partner schools and colleges.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={textVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#courses"
                className="px-8 py-4 text-sm font-bold text-white bg-[#0d9488] hover:bg-[#0f766e] rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center gap-3 group"
              >
                <BookOpen className="w-4 h-4 text-white" />
                <span>Explore Certified Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => onOpenPassModal('199')}
                className="px-6 py-4 text-sm font-bold text-slate-800 bg-white hover:bg-teal-50 border border-slate-200 hover:border-[#0d9488] rounded-2xl transition-all flex items-center gap-2 backdrop-blur-md shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#0d9488]" />
                <span>Get Event Pass (₹199 / ₹499)</span>
              </button>
            </motion.div>

            {/* Key Impact Metrics Bar */}
            <motion.div variants={textVariants} className="pt-6 grid grid-cols-3 gap-4 max-w-lg border-t border-slate-200/80">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#164e63] font-serif-heading">7</p>
                <p className="text-xs font-bold text-slate-500 mt-0.5 uppercase tracking-wider">National Challenges</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#0d9488] font-serif-heading">100K+</p>
                <p className="text-xs font-bold text-slate-500 mt-0.5 uppercase tracking-wider">Youth Joined</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#164e63] font-serif-heading">1,000+</p>
                <p className="text-xs font-bold text-slate-500 mt-0.5 uppercase tracking-wider">Partner Schools</p>
              </div>
            </motion.div>

            {/* Trust Proof Badges */}
            <motion.div variants={textVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-bold text-slate-700 pt-2">
              <div className="flex items-center gap-1.5 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#0d9488] shrink-0" />
                <span>Verified Certs</span>
              </div>
              <div className="flex items-center gap-1.5 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <HeartHandshake className="w-4 h-4 text-[#0d9488] shrink-0" />
                <span>Direct Impact</span>
              </div>
              <div className="flex items-center gap-1.5 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <Users className="w-4 h-4 text-slate-800 shrink-0" />
                <span>1000+ Schools</span>
              </div>
              <div className="flex items-center gap-1.5 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <Award className="w-4 h-4 text-[#0d9488] shrink-0" />
                <span>National Badge</span>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};
