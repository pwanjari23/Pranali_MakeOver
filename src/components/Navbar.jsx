import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Phone, MapPin } from 'lucide-react';
import { Instagram } from './InstagramIcon';
import { CLIENT_INFO } from '../data/content';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Celebrity Work', href: '#portfolio' },
    { name: 'Academy', href: '#academy' },
    { name: 'Visit & Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-luxury-dark/95 backdrop-blur-md py-3 border-b border-luxury-border shadow-2xl text-luxury-ivory'
          : 'bg-gradient-to-b from-luxury-dark/80 via-luxury-dark/40 to-transparent py-5 text-luxury-ivory'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-luxury-gold/60 flex items-center justify-center bg-luxury-surface text-luxury-gold font-serif text-xl font-bold group-hover:scale-105 transition-transform duration-300">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-wider text-luxury-ivory font-semibold group-hover:text-luxury-goldLight transition-colors">
                PRANALI
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-luxury-gold font-medium -mt-1">
                Beauty & Academy
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-luxury-ivory/85 hover:text-luxury-gold transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={CLIENT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-luxury-softText hover:text-luxury-gold hover:bg-white/5 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href={`${CLIENT_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Pranali Beauty Parlour, I would like to book an appointment.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider overflow-hidden bg-gradient-to-r from-luxury-gold to-luxury-goldMuted text-luxury-dark shadow-md hover:shadow-luxury-gold/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                Book Appointment
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-luxury-ivory hover:text-luxury-gold hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-luxury-dark border-b border-luxury-border px-6 pt-4 pb-8 space-y-4"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-luxury-ivory/90 hover:text-luxury-gold py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`${CLIENT_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Pranali Beauty Parlour, I would like to book an appointment.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-luxury-gold text-luxury-dark flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Book an Appointment
              </a>

              <div className="flex items-center justify-center gap-6 pt-2 text-luxury-softText text-sm">
                <a
                  href={CLIENT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-luxury-gold"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href={CLIENT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-luxury-gold"
                >
                  <MapPin className="w-4 h-4" />
                  Pune Studio
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
