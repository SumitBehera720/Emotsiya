import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  ArrowRight, 
  MapPin, 
  Calendar,
  ShieldCheck,
  Award,
  Users,
  HeartHandshake
} from 'lucide-react';

interface HeroProps {
  onOpenPassModal: (tier?: '199' | '499') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPassModal }) => {
  // Motion animation variants for smooth staggered reveal
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-[#faf7f2]"
    >
      {/* Full-Screen Background Image with Smooth Entrance Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          src="/hero-fullscreen-right.png"
          alt="Emotsiya Movement Youth Leaders"
          className="w-full h-full object-cover object-right sm:object-right-center"
        />
      </div>

      {/* Clean Soft Light Gradient Overlays on Left Side for Seamless Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f2] via-[#faf7f2]/95 to-transparent lg:via-[#faf7f2]/90 lg:to-transparent/20 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f2] via-transparent to-[#faf7f2]/50 z-[1]" />

      {/* Animated Ambient Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-16 left-10 w-[500px] h-[500px] bg-amber-200/35 rounded-full blur-[130px] pointer-events-none z-[1]"
      />
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-emerald-200/25 rounded-full blur-[120px] pointer-events-none z-[1]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Framer Motion Staggered Content Container */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            
            {/* Top Minimal Ticker Pill */}
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-amber-900/15 shadow-sm backdrop-blur-md">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span className="text-xs font-bold text-slate-900 tracking-wide uppercase">
                  Emotsiya Movement 2026
                </span>
                <span className="text-amber-800/40 font-bold">•</span>
                <span className="text-xs text-amber-900 font-extrabold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-700" />
                  <span>🇮🇳 Youth Civic Movement</span>
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
              Building Great Citizens.{' '}
              <span className="block mt-1.5 font-serif italic text-amber-800">
                Building a Great Nation.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-base sm:text-xl text-slate-700 font-medium leading-relaxed max-w-xl">
              Empowering 100,000+ Students across 1,000+ Partner Schools & Colleges to lead real civic transformation across India.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              
              {/* Primary Pass CTA */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenPassModal('199')}
                className="px-8 py-4 text-sm font-black text-white bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 hover:from-amber-800 hover:to-amber-950 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3 group"
              >
                <span>Get Event Pass</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-xs font-mono">
                  ₹199 / ₹499
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Secondary Button */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#events"
                className="px-6 py-4 text-sm font-bold text-slate-800 bg-white/90 hover:bg-white border border-slate-300 hover:border-amber-600 rounded-2xl transition-all flex items-center gap-2 backdrop-blur-md shadow-sm"
              >
                <Calendar className="w-4 h-4 text-amber-700" />
                <span>Explore Events</span>
              </motion.a>
            </motion.div>

            {/* Clean Key Impact Metrics Bar */}
            <motion.div variants={itemVariants} className="pt-6 grid grid-cols-3 gap-4 max-w-lg border-t border-slate-300/80">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-slate-900">7</p>
                <p className="text-xs font-bold text-slate-600 mt-0.5">National Challenges</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-amber-800">100K+</p>
                <p className="text-xs font-bold text-slate-600 mt-0.5">Youth Joined</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-amber-900">1,000+</p>
                <p className="text-xs font-bold text-slate-600 mt-0.5">Partner Schools</p>
              </div>
            </motion.div>

            {/* Clean Trust Proof Badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-extrabold text-slate-700 pt-2">
              <motion.div whileHover={{ y: -2 }} className="flex items-center gap-1.5 p-2 rounded-xl bg-white/80 border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Certs</span>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} className="flex items-center gap-1.5 p-2 rounded-xl bg-white/80 border border-slate-200">
                <HeartHandshake className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Direct Impact</span>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} className="flex items-center gap-1.5 p-2 rounded-xl bg-white/80 border border-slate-200">
                <Users className="w-4 h-4 text-amber-800 shrink-0" />
                <span>1000+ Schools</span>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} className="flex items-center gap-1.5 p-2 rounded-xl bg-white/80 border border-slate-200">
                <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>National Badge</span>
              </motion.div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};








