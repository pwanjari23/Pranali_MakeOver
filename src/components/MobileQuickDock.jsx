import React from 'react';
import { Sparkles, Camera, GraduationCap, MapPin, MessageCircle } from 'lucide-react';
import { CLIENT_INFO } from '../data/content';

export default function MobileQuickDock() {
  return (
    <div className="sm:hidden fixed bottom-3 left-3 right-3 z-40 pointer-events-auto">
      <div className="bg-luxury-dark/95 backdrop-blur-lg border border-luxury-gold/40 rounded-full px-3 py-2 shadow-2xl flex items-center justify-between shadow-black/80">
        
        {/* Quick Section Shortcuts */}
        <div className="flex items-center gap-1">
          <a
            href="#services"
            className="flex flex-col items-center justify-center px-2 py-1 text-[10px] text-luxury-softText hover:text-luxury-gold active:text-luxury-gold transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold mb-0.5" />
            <span>Services</span>
          </a>

          <a
            href="#portfolio"
            className="flex flex-col items-center justify-center px-2 py-1 text-[10px] text-luxury-softText hover:text-luxury-gold active:text-luxury-gold transition-colors"
          >
            <Camera className="w-3.5 h-3.5 text-luxury-gold mb-0.5" />
            <span>Work</span>
          </a>

          <a
            href="#academy"
            className="flex flex-col items-center justify-center px-2 py-1 text-[10px] text-luxury-softText hover:text-luxury-gold active:text-luxury-gold transition-colors"
          >
            <GraduationCap className="w-3.5 h-3.5 text-luxury-gold mb-0.5" />
            <span>Academy</span>
          </a>

          <a
            href="#contact"
            className="flex flex-col items-center justify-center px-2 py-1 text-[10px] text-luxury-softText hover:text-luxury-gold active:text-luxury-gold transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-luxury-gold mb-0.5" />
            <span>Studio</span>
          </a>
        </div>

        {/* Primary 1-Tap Booking Action */}
        <a
          href={`${CLIENT_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Pranali Beauty Parlour, I would like to book an appointment.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-luxury-gold to-luxury-goldMuted text-luxury-dark text-[11px] font-bold tracking-wide flex items-center gap-1.5 shadow-md shadow-luxury-gold/30 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span>Book Now</span>
        </a>

      </div>
    </div>
  );
}
