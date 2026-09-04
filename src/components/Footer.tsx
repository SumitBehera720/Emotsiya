import React from 'react';
import { Mail, Phone, Globe, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#faf8f5] text-stone-600 border-t border-stone-200/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-stone-200/80">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Emotsiya" className="h-10 w-auto object-contain" />
              <span className="font-serif text-xl font-bold text-[#1a1a1a]">EMOTSIYA</span>
            </div>
            <p className="text-xs text-stone-600 max-w-sm leading-relaxed font-medium">
              India&apos;s National Civic Education & Human Development Initiative dedicated to transforming youth behavior and nurturing future leaders.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#courses" className="hover:text-[#d96b52] transition-colors">Certified Courses</a></li>
              <li><a href="#events" className="hover:text-[#d96b52] transition-colors">National Events</a></li>
              <li><a href="#gallery" className="hover:text-[#d96b52] transition-colors">Impact Gallery</a></li>
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#d96b52]" />
                <a href="https://emotsiya.co.in" target="_blank" rel="noreferrer" className="hover:text-[#d96b52]">emotsiya.co.in</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d96b52]" />
                <a href="mailto:director@emotsiya.co.in" className="hover:text-[#d96b52]">director@emotsiya.co.in</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d96b52]" />
                <a href="tel:+918808037280" className="hover:text-[#d96b52]">+91 88080 37280</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-stone-500">
          <p>© {new Date().getFullYear()} Emotsiya Initiative. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <span>Lucknow • New Delhi • India</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white text-stone-700 hover:text-[#d96b52] border border-stone-200 shadow-sm transition-colors"
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
