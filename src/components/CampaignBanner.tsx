import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface CampaignBannerProps {
  onOpenPassModal: (tier?: '199' | '499') => void;
}

export const CampaignBanner: React.FC<CampaignBannerProps> = ({ onOpenPassModal }) => {
  return (
    <section className="relative py-28 overflow-hidden bg-[#faf7f2] text-slate-900 my-8">
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-amber-200/25 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Campaign Info */}
          <div className="lg:col-span-7 space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-white/80 border border-amber-900/15 text-amber-900 text-xs font-black tracking-wider uppercase backdrop-blur-md shadow-sm">
              Emotsiya Nationwide Field Action Campaign
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Transforming Classrooms to Communities.{' '}
              <span className="block font-serif italic text-amber-800 mt-1">
                From Awareness to Nation Building.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed font-medium">
              Over 1 Lakh+ students and 1,000+ educational institutions are uniting to solve real-world civic challenges through habit-building campaigns and youth leadership drives.
            </p>

            {/* Split Media Photo Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-44 group image-zoom-container">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80"
                  alt="School Leadership Drive"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-xs font-extrabold text-white">School Leadership Drive</span>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg h-44 group image-zoom-container">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80"
                  alt="Eco Cleanliness Drive"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-xs font-extrabold text-white">Eco Cleanliness Drive</span>
              </div>
            </div>

            {/* Live Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white/80 border border-white backdrop-blur-xl shadow-md">
                <span className="text-2xl font-black text-slate-900">100+</span>
                <span className="block text-xs font-bold text-slate-600">Partner Cities</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/80 border border-white backdrop-blur-xl shadow-md">
                <span className="text-2xl font-black text-amber-800">1000+</span>
                <span className="block text-xs font-bold text-slate-600">Schools & Inst.</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/80 border border-white backdrop-blur-xl shadow-md">
                <span className="text-2xl font-black text-slate-900">100+</span>
                <span className="block text-xs font-bold text-slate-600">Field Drives</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/80 border border-white backdrop-blur-xl shadow-md">
                <span className="text-2xl font-black text-emerald-700">7</span>
                <span className="block text-xs font-bold text-slate-600">National Challenges</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pass Card Banner */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <div className="p-8 rounded-3xl bg-white/85 border border-white shadow-2xl backdrop-blur-2xl space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-amber-900 uppercase font-mono tracking-wider">REGISTRATION TICKETS</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Live Booking
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900">Join the Next National Field Drive</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Reserve your ₹199 Standard Pass or ₹499 VIP Pass to receive direct participation kits, live session entry, and certified ambassador badges.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-700">Pass Options:</span>
                  <span className="text-sm font-extrabold text-amber-900">₹199 / ₹499</span>
                </div>
                <p className="text-[11px] text-slate-600">Includes participation kit + verified citizen digital badge.</p>
              </div>

              <button
                onClick={() => onOpenPassModal('199')}
                className="w-full py-4 px-4 bg-amber-900 hover:bg-amber-950 text-white font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Get Event Pass (₹199 / ₹499)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/918808037280?text=Hi%20Emotsiya%20Team,%20I%20want%20to%20inquire%20about%20the%20Nationwide%20Field%20Action%20Campaign."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp Instant Inquiry</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
