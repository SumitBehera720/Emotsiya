import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
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
    { name: 'Courses', href: '#courses' },
    { name: 'Events', href: '#events' },
    { name: 'Impact', href: '#impact' },
    { name: 'Take Pledge', href: '#interactive' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80'
          : 'py-4 bg-[#f4fbfb]/90 backdrop-blur-md border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Emotsiya Logo"
              className="h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Clean Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1.5 px-5 py-2 rounded-full bg-white/90 border border-slate-200/80 shadow-sm backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-bold text-slate-700 hover:text-[#0d9488] hover:bg-teal-50 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/918808037280?text=Hi%20Emotsiya%20Team,%20I%20want%20to%20inquire%20about%20the%20National%20Civic%20Initiative."
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-600 hover:text-[#25D366] transition-colors rounded-full hover:bg-slate-100"
              aria-label="WhatsApp Support"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>

            <button
              onClick={() => onOpenPassModal('199')}
              className="px-6 py-2.5 text-xs font-bold text-white bg-[#0d9488] hover:bg-[#0f766e] rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-1.5"
            >
              <span>Get Event Pass</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-2xl space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#0d9488] hover:bg-teal-50 rounded-xl"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPassModal('199');
              }}
              className="w-full text-center py-3 text-xs font-bold text-white bg-[#0d9488] rounded-xl shadow-md flex items-center justify-center gap-1.5"
            >
              <span>Get Event Pass</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
