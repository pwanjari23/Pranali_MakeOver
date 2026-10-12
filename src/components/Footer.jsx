import { Mail, Phone, MapPin, ArrowUp, Sparkles } from 'lucide-react';
import { Instagram } from './InstagramIcon';
import { CLIENT_INFO } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#100D0B] text-luxury-ivory border-t border-luxury-border/60 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Layout matching reference structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start pb-14 border-b border-luxury-border/60">
          
          {/* Column 1: Useful Links */}
          <div>
            <h4 className="font-serif text-lg text-luxury-goldLight font-medium mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2.5 text-xs text-luxury-softText">
              <li>
                <a href="#home" className="hover:text-luxury-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-luxury-gold transition-colors">About Pranali</a>
              </li>
              <li>
                <a href="#services" className="hover:text-luxury-gold transition-colors">Salon &amp; Bridal Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-luxury-gold transition-colors">Celebrity &amp; Shoot Work</a>
              </li>
              <li>
                <a href="#academy" className="hover:text-luxury-gold transition-colors">Beauty Academy Courses</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-luxury-gold transition-colors">Google Reviews (5.0 ★)</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-luxury-gold transition-colors">Book An Appointment</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Brand Emblem & Centerpiece */}
          <div className="text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full border border-luxury-gold/60 flex items-center justify-center bg-luxury-surface text-luxury-gold font-serif text-2xl font-bold mb-3 shadow-lg">
              P
            </div>
            <h3 className="font-serif text-2xl tracking-wider text-luxury-ivory font-semibold">
              PRANALI
            </h3>
            <p className="text-[11px] tracking-[0.25em] uppercase text-luxury-gold font-medium mt-0.5">
              Beauty Parlour &amp; Academy
            </p>
            <p className="mt-3 text-xs text-luxury-softText max-w-xs font-light leading-relaxed">
              Couture bridal styling, professional makeover artistry, and certified academy education based in Pune.
            </p>

            <div className="flex items-center gap-3 mt-5">
              <a
                href={CLIENT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-luxury-card border border-luxury-border flex items-center justify-center text-luxury-softText hover:text-luxury-gold hover:border-luxury-gold/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={CLIENT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-luxury-card border border-luxury-border flex items-center justify-center text-luxury-softText hover:text-luxury-gold hover:border-luxury-gold/50 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${CLIENT_INFO.email}`}
                className="w-8 h-8 rounded-full bg-luxury-card border border-luxury-border flex items-center justify-center text-luxury-softText hover:text-luxury-gold hover:border-luxury-gold/50 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Location & Details */}
          <div className="md:text-right flex flex-col md:items-end">
            <h4 className="font-serif text-lg text-luxury-goldLight font-medium mb-4">
              Our Location
            </h4>
            <p className="text-xs text-luxury-softText max-w-xs leading-relaxed">
              {CLIENT_INFO.locationDisplay}
            </p>
            <a
              href={CLIENT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-luxury-gold hover:underline mt-2 font-medium"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Get Directions on Google Maps</span>
            </a>

            <div className="mt-4 pt-3 border-t border-luxury-border/40 text-[11px] text-luxury-softText">
              <p>Mon – Sat: 10:00 AM – 8:30 PM</p>
              <p>Sunday: By Appointment Only</p>
            </div>
          </div>

        </div>

        {/* Bottom bar with Back to Top button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-luxury-softText/80">
          <p>
            &copy; {new Date().getFullYear()} Pranali Beauty Parlour. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-luxury-gold transition-colors group"
          >
            <span>Back to Top</span>
            <div className="w-6 h-6 rounded-full bg-luxury-card border border-luxury-border flex items-center justify-center group-hover:border-luxury-gold">
              <ArrowUp className="w-3 h-3 text-luxury-gold" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
