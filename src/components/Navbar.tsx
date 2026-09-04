import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  onOpenPassModal: (tier?: '199' | '499') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPassModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: '7 Challenges', href: '#challenges' },
    { name: 'Approach', href: '#approach' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Passes', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 liquid-glass-header shadow-md'
          : 'py-3 bg-[#faf7f2]/90 backdrop-blur-md border-b border-amber-900/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Compact Borderless Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="Emotsiya Logo"
              className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1 px-3 py-1.5 rounded-full bg-white/80 border border-amber-900/10 shadow-sm backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-extrabold text-slate-800 hover:text-amber-900 hover:bg-amber-100/70 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => onOpenPassModal('199')}
              className="px-4 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 rounded-full transition-all shadow-md hover:scale-105 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 fill-white" />
              <span>Pass ₹199 / ₹499</span>
            </button>

            <a
              href="https://wa.me/918808037280?text=Hi%20Emotsiya%20Team,%20I%20want%20to%20inquire%20about%20the%20National%20Civic%20Initiative."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-extrabold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-full shadow-md transition-all hover:scale-105"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <a
              href="https://wa.me/918808037280"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white shadow-sm sm:hidden"
              aria-label="WhatsApp Chat"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:text-slate-900 shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-2 mx-4 p-5 rounded-3xl bg-white/95 border border-amber-900/10 shadow-2xl space-y-4 backdrop-blur-2xl animate-in fade-in duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3.5 py-2 text-xs font-extrabold text-slate-800 hover:text-amber-900 hover:bg-amber-50 rounded-xl"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPassModal('199');
              }}
              className="w-full text-center py-3 text-xs font-extrabold text-white bg-amber-900 rounded-2xl shadow-md"
            >
              Get Event Pass (₹199 / ₹499)
            </button>
            <a
              href="https://wa.me/918808037280"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-3 text-xs font-extrabold text-white bg-[#25D366] rounded-2xl shadow-md flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Chat on WhatsApp (+91 88080 37280)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
