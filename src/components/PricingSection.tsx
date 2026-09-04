import React from 'react';
import { Zap, ArrowRight, Star, ShieldCheck, Award } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface PricingSectionProps {
  onSelectPass: (tier: '199' | '499') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPass }) => {
  return (
    <section id="pricing" className="py-10 sm:py-16 md:py-24 bg-[#faf7f2] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/3 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-amber-200/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-8 sm:mb-14">
          <span className="px-3.5 py-1 rounded-full bg-white/80 border border-amber-900/15 text-amber-900 text-[10px] sm:text-xs font-black tracking-wider uppercase backdrop-blur-md shadow-sm">
            Pass Tiers
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Choose Your <span className="font-serif italic text-amber-800">Emotsiya Pass</span>
          </h2>
          <p className="text-slate-700 text-xs sm:text-base font-medium">
            Empower your journey in national civic education, habit building, and youth leadership.
          </p>
        </div>

        {/* 2 Main Liquid Glass Pass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-4xl mx-auto">
          
          {/* TIER 1: ₹199 Standard Citizen Pass */}
          <div className="rounded-2xl sm:rounded-3xl bg-white/85 border border-white p-6 sm:p-9 space-y-5 flex flex-col justify-between shadow-lg backdrop-blur-2xl hover:shadow-xl transition-all duration-300">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-100/70 border border-amber-300 text-amber-900 text-[10px] sm:text-xs font-extrabold">
                  Standard Pass
                </span>
                <span className="text-[10px] sm:text-xs text-slate-600 font-mono font-bold">Individual Access</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Standard Pass</h3>
                <p className="text-xs text-slate-600 mt-0.5 font-medium">For students, educators & citizens starting their civic journey.</p>
              </div>

              <div className="flex items-baseline gap-2 pt-2 border-t border-slate-200/80">
                <span className="text-4xl sm:text-5xl font-black text-slate-900">₹199</span>
                <span className="text-xs font-bold text-slate-600">/ one-time pass</span>
              </div>

              <ul className="space-y-2.5 text-xs font-bold text-slate-800 pt-1">
                {[
                  'Access to all Live Online Workshops & Townhalls',
                  'Digital Habit Tracker & Civic Education Handbook',
                  'Verified Certificate of Participation',
                  'Access to Community Discussion Group',
                  'WhatsApp Event Updates & Task Reminders',
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectPass('199')}
              className="w-full py-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-300 hover:border-amber-500 text-slate-900 font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm mt-4"
            >
              <span>Get ₹199 Standard Pass</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* TIER 2: ₹499 Premium Leader Pass */}
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-900 via-amber-950 to-slate-950 text-white p-6 sm:p-9 space-y-5 flex flex-col justify-between relative shadow-xl hover:shadow-2xl transition-all duration-300">
            
            {/* VIP Ribbon */}
            <div className="absolute -top-3.5 right-6 px-3 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] sm:text-xs flex items-center gap-1 shadow-md">
              <Star className="w-3 h-3 fill-slate-950" />
              <span>Leader VIP Access</span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] sm:text-xs font-extrabold">
                  Premium Leader Pass
                </span>
                <span className="text-[10px] sm:text-xs text-amber-400 font-black font-mono">VIP TIER</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">Premium Leader Pass</h3>
                <p className="text-xs text-amber-100/80 mt-0.5 font-medium">For aspiring leaders wanting priority access, kit & mentorship.</p>
              </div>

              <div className="flex items-baseline gap-2 pt-2 border-t border-amber-800/60">
                <span className="text-4xl sm:text-5xl font-black text-amber-400">₹499</span>
                <span className="text-xs font-bold text-slate-300">/ one-time complete pass</span>
              </div>

              <ul className="space-y-2.5 text-xs font-extrabold text-white pt-1">
                {[
                  'Everything in ₹199 Standard Pass',
                  'VIP seat in Live Workshops & priority Q&A with speakers',
                  'Youth Leadership & EQ Masterclass exclusive modules',
                  'Emotsiya Ambassador Digital & Physical Badge',
                  'Direct 1-on-1 Mentorship Session booking',
                  'Priority allocation in local Community Projects',
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectPass('499')}
              className="w-full py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Get ₹499 Premium VIP Pass</span>
            </button>
          </div>

        </div>

        {/* WhatsApp Direct Help Note */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm font-bold text-slate-700 inline-flex flex-wrap items-center justify-center gap-1.5">
            <span>Need institutional or bulk passes?</span>
            <a
              href="https://wa.me/918808037280?text=Hi%20Emotsiya%20Team,%20I%20want%20to%20inquire%20about%20institutional%20or%20bulk%20passes."
              target="_blank"
              rel="noreferrer"
              className="text-[#25D366] hover:underline font-extrabold flex items-center gap-1"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
