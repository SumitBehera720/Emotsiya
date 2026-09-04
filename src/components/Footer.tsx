import React from 'react';
import { Mail, Phone, Globe, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#faf7f2] text-slate-600 border-t border-amber-900/10 pt-10 sm:pt-16 pb-8 sm:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-10 pb-8 sm:pb-12 border-b border-slate-200/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3">
            <img src="/logo.png" alt="Emotsiya" className="h-10 sm:h-12 w-auto object-contain" />
            <p className="text-xs text-slate-600 max-w-sm leading-relaxed font-medium">
              Emotsiya is India&apos;s National Civic Education & Human Development Initiative dedicated to transforming human behaviour, building habit discipline, and nurturing future leaders.
            </p>
            <div className="pt-1 text-xs font-serif italic text-amber-800">
              &ldquo;Educate Citizens. Build Character. Transform Communities. Create a Great Nation.&rdquo;
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-1.5 text-xs font-bold">
              {['Home', 'About Us', '7 Challenges', 'Our Approach', 'Events', 'Gallery', 'Passes'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`} className="hover:text-amber-800 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* National 7 Challenges */}
          <div className="space-y-2">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">7 Challenges</h4>
            <ul className="space-y-1.5 text-xs font-bold">
              {[
                'Crime Reduction',
                'Pollution Control',
                'Drug & Addiction Prevention',
                'Traffic Safety',
                'Cleanliness & Transit',
                'Social Connection',
                'Happiness & Wellness',
              ].map((c) => (
                <li key={c} className="hover:text-amber-800 transition-colors cursor-pointer">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="space-y-2">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">Contact & Office</h4>
            <ul className="space-y-2 text-xs font-bold">
              <li className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <a href="https://emotsiya.co.in" target="_blank" rel="noreferrer" className="hover:text-amber-800">
                  emotsiya.co.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <a href="mailto:director@emotsiya.co.in" className="hover:text-amber-800">
                  director@emotsiya.co.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <a href="tel:+918808037280" className="hover:text-amber-800">
                  +91 88080 37280
                </a>
              </li>
            </ul>

            <div className="pt-1">
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] text-slate-700 font-mono shadow-sm">
                Lucknow • New Delhi • India
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-bold text-slate-600 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Emotsiya Initiative. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-slate-500 text-[11px]">Every Emotion Matters</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white text-slate-800 hover:text-amber-800 border border-slate-200 shadow-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
