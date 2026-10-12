import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Heart, GraduationCap, Award, Check } from 'lucide-react';
import { CLIENT_INFO, ASSET_IMAGES, BRAND_PILLARS } from '../data/content';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-luxury-dark text-luxury-ivory relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Top Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Image with architectural border */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[30px] overflow-hidden border border-luxury-border shadow-2xl bg-luxury-surface">
              <div className="aspect-[4/5]">
                <img
                  src={ASSET_IMAGES.aboutPortrait}
                  alt="Pranali Chilap - Makeup Artist & Educator"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
                  Founder &amp; Principal Artist
                </span>
                <h3 className="font-serif text-2xl text-luxury-ivory font-medium mt-1">
                  {CLIENT_INFO.founder}
                </h3>
                <p className="text-xs text-luxury-softText mt-0.5">
                  Professional Makeup Artist &amp; Academy Mentor
                </p>
              </div>
            </div>

            {/* Accent badge */}
            <div className="absolute -bottom-4 -right-4 bg-luxury-card border border-luxury-gold/40 rounded-2xl p-4 shadow-xl text-center hidden sm:block">
              <span className="text-2xl font-serif text-luxury-gold font-bold">100%</span>
              <p className="text-[10px] text-luxury-softText uppercase tracking-wider font-semibold">
                Authentic Craft
              </p>
            </div>
          </div>

          {/* Right Column: Authentic Brand Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
              The Essence of Artistry
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-ivory font-medium mt-2 leading-tight">
              Elevating Natural Beauty Through Precision, Passion &amp; Purpose.
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-luxury-softText font-light leading-relaxed">
              <p>
                Founded by professional makeup artist <strong className="text-luxury-ivory font-medium">Pranali Chilap</strong>, <span className="text-luxury-ivory">Pranali Beauty Parlour</span> is built upon the philosophy that beauty is not a mask, but an authentic celebration of personal grace.
              </p>
              <p>
                With extensive experience working across couture bridal transformations, regional film and media productions, fashion shoots, and celebrity styling, Pranali brings a trained editorial eye to every client consultation.
              </p>
              <p>
                Beyond day-to-day salon care, our studio is dedicated to nurturing the next generation of creative talent through <strong className="text-luxury-ivory font-medium">Pranali Makeover Academy</strong>, providing aspiring beauty artists with hands-on technical mastery and professional guidance.
              </p>
            </div>

            {/* Quick value badges */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-luxury-card/60 border border-luxury-border/60">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/15 text-luxury-gold flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs text-luxury-ivory font-medium">
                  Couture Bridal &amp; HD Makeovers
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-luxury-card/60 border border-luxury-border/60">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/15 text-luxury-gold flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <span className="text-xs text-luxury-ivory font-medium">
                  Celebrity &amp; Media Shoot Experience
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-luxury-card/60 border border-luxury-border/60">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/15 text-luxury-gold flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <span className="text-xs text-luxury-ivory font-medium">
                  Personalized Salon &amp; Skin Care
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-luxury-card/60 border border-luxury-border/60">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/15 text-luxury-gold flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-xs text-luxury-ivory font-medium">
                  Certified Beauty Training Academy
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Brand Pillars (Matching the exact amber-champagne 4-card grid in reference image) */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
              Our Core Philosophy
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-luxury-ivory font-medium mt-1">
              Refined Standards of Care &amp; Craft
            </h3>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="flex sm:hidden items-center justify-between mb-3 text-xs text-luxury-goldLight px-1">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
              Swipe across our 4 core pillars
            </span>
            <span className="text-luxury-softText text-[10px]">← Drag &rarr;</span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 sm:overflow-visible"
          >
            {BRAND_PILLARS.map((pillar) => (
              <motion.div
                key={pillar.number}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="w-[78vw] max-w-[280px] shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink rounded-2xl p-6 bg-gradient-to-b from-[#2B231D] to-[#1E1814] border border-[#3E332B] shadow-lg relative group transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl text-luxury-gold font-bold">
                    {pillar.number}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h4 className="font-serif text-lg text-luxury-ivory font-semibold mb-2 group-hover:text-luxury-goldLight transition-colors">
                  {pillar.title}
                </h4>

                <p className="text-xs text-luxury-softText font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
