import React from 'react';
import { Mail, Phone, Globe, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#f4fbfb] text-slate-600 border-t border-slate-200/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-200/80">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center">
              <img src="/logo.png" alt="Emotsiya Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-xs text-slate-600 max-w-sm leading-relaxed font-medium">
              India&apos;s National Civic Education & Human Development Initiative dedicated to transforming youth behavior and nurturing future leaders.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#164e63] uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#courses" className="hover:text-[#0d9488] transition-colors">Certified Courses</a></li>
              <li><a href="#events" className="hover:text-[#0d9488] transition-colors">National Events</a></li>
              <li><a href="#gallery" className="hover:text-[#0d9488] transition-colors">Impact Gallery</a></li>
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#164e63] uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#0d9488]" />
                <a href="https://emotsiya.co.in" target="_blank" rel="noreferrer" className="hover:text-[#0d9488]">emotsiya.co.in</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0d9488]" />
                <a href="mailto:director@emotsiya.co.in" className="hover:text-[#0d9488]">director@emotsiya.co.in</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0d9488]" />
                <a href="tel:+918808037280" className="hover:text-[#0d9488]">+91 88080 37280</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Emotsiya Initiative. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <span>Lucknow • New Delhi • India</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white text-slate-700 hover:text-[#0d9488] border border-slate-200 shadow-sm transition-colors"
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
