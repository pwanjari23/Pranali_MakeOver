import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Star, Award, ShieldCheck, ChevronRight } from 'lucide-react';
import { CLIENT_INFO, ASSET_IMAGES } from '../data/content';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-luxury-dark text-luxury-ivory flex items-center">
      {/* Subtle luxury ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-luxury-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-luxury-rose/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Elegant background texture */}
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-luxury-card border border-luxury-border/80 text-luxury-goldLight text-xs tracking-wider uppercase mb-6 w-fit shadow-lg"
            >
              <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
              <span>Couture Makeover & Beauty Academy</span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight text-luxury-ivory"
            >
              BEAUTY, ARTISTRY <br />
              <span className="italic font-normal text-luxury-gold">
                &amp; ELEGANCE.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-luxury-softText max-w-xl leading-relaxed font-light"
            >
              Welcome to <span className="text-luxury-ivory font-medium">Pranali Beauty Parlour</span> — where signature bridal artistry, celebrity media transformations, bespoke salon rituals, and professional beauty education unite in Pune.
            </motion.p>

            {/* CTAs matching reference button style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={`${CLIENT_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Pranali, I would like to book a bridal/makeover appointment.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-luxury-gold to-luxury-goldMuted text-luxury-dark font-medium text-sm tracking-wide shadow-lg shadow-luxury-gold/20 hover:shadow-luxury-gold/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group"
              >
                <span>Book an Appointment</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#services"
                className="px-7 py-3.5 rounded-full border border-luxury-border bg-luxury-card/60 backdrop-blur-sm text-luxury-ivory hover:text-luxury-gold hover:border-luxury-gold/50 font-medium text-sm tracking-wide transition-all duration-300 flex items-center gap-2"
              >
                <span>Explore Services</span>
                <ChevronRight className="w-4 h-4 text-luxury-gold" />
              </a>
            </motion.div>

            {/* Social Proof Bar (matching reference layout pill stats) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-luxury-border/60 flex flex-wrap items-center gap-6 sm:gap-8"
            >
              {/* Avatar stack */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3 overflow-hidden">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-luxury-dark object-cover"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop"
                    alt="Happy Client"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-luxury-dark object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                    alt="Client"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-luxury-dark object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop"
                    alt="Client"
                  />
                  <div className="inline-flex h-10 w-10 rounded-full ring-2 ring-luxury-dark bg-luxury-gold items-center justify-center text-[11px] font-bold text-luxury-dark">
                    250+
                  </div>
                </div>
                <div>
                  <div className="flex items-center text-luxury-gold text-xs gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-luxury-softText mt-0.5 font-medium">
                    250+ Brides &amp; Clients Styled
                  </p>
                </div>
              </div>

              {/* Location Badge */}
              <div className="hidden sm:flex items-center gap-2 pl-6 border-l border-luxury-border/50 text-xs text-luxury-softText">
                <ShieldCheck className="w-4 h-4 text-luxury-gold" />
                <span>Certified Artistry &amp; Academy</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Dual Image Composition (inspired by reference visual) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Tall Image Frame */}
              <div className="relative z-10 rounded-[32px] overflow-hidden border border-luxury-border/80 shadow-2xl bg-luxury-card group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={ASSET_IMAGES.heroMain}
                    alt="Pranali Chilap Bridal & Editorial Makeup"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                {/* Subtle dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-luxury-dark/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <span className="text-[11px] uppercase tracking-widest text-luxury-gold font-semibold">
                    Signature Artistry
                  </span>
                  <h3 className="font-serif text-2xl text-luxury-ivory font-medium mt-1">
                    Couture Bridal &amp; HD Makeover
                  </h3>
                  <p className="text-xs text-luxury-softText mt-1 line-clamp-1">
                    Sculpted for enduring grace, radiant camera tones &amp; timeless memories.
                  </p>
                </div>
              </div>

              {/* Secondary Floating Card (Reference Image style overlapping element) */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden sm:block absolute -bottom-8 -left-10 z-20 w-60 rounded-2xl overflow-hidden border border-luxury-gold/30 bg-luxury-surface/95 backdrop-blur-md p-3 shadow-2xl"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-2.5">
                  <img
                    src={ASSET_IMAGES.heroSecondary}
                    alt="Beauty & Hair Styling"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-luxury-ivory">Pranali Chilap</p>
                    <p className="text-[10px] text-luxury-gold">Celebrity Artist &amp; Educator</p>
                  </div>
                  <a
                    href={CLIENT_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-luxury-card border border-luxury-border flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark transition-colors"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>

              {/* Floating Decorative Gold Stamp */}
              <div className="absolute -top-6 -right-6 z-20 w-24 h-24 rounded-full border border-luxury-gold/40 bg-luxury-dark/90 backdrop-blur-md p-2 flex flex-col items-center justify-center text-center shadow-xl">
                <Award className="w-5 h-5 text-luxury-gold mb-0.5" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-luxury-ivory">Pune</span>
                <span className="text-[8px] text-luxury-gold font-medium">Salon &amp; Academy</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
