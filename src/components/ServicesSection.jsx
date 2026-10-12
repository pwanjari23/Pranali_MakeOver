import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Camera, Scissors, Flower2, HeartHandshake, GraduationCap, ArrowUpRight, Check } from 'lucide-react';
import { SERVICES_LIST, CLIENT_INFO } from '../data/content';

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'bridal', label: 'Bridal & Occasion' },
    { id: 'hair-skin', label: 'Hair & Skin Care' },
    { id: 'spa-academy', label: 'Spa & Academy' },
  ];

  const filteredServices = SERVICES_LIST.filter((srv) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'bridal') {
      return srv.id === 'bridal-makeup' || srv.id === 'celebrity-media';
    }
    if (selectedCategory === 'hair-skin') {
      return srv.id === 'hair-styling' || srv.id === 'skin-facials';
    }
    if (selectedCategory === 'spa-academy') {
      return srv.id === 'spa-grooming' || srv.id === 'academy-training';
    }
    return true;
  });

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return Sparkles;
      case 'Camera': return Camera;
      case 'Scissors': return Scissors;
      case 'Flower2': return Flower2;
      case 'HeartHandshake': return HeartHandshake;
      case 'GraduationCap': return GraduationCap;
      default: return Sparkles;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#171310] text-luxury-ivory relative">
      {/* Background grain */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
              Curated Offerings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-ivory font-medium mt-1">
              Bespoke Beauty &amp; Artistry
            </h2>
            <p className="mt-3 text-sm text-luxury-softText max-w-xl font-light">
              Each experience is customized to your distinctive features, occasion timing, and personal aesthetic vision.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-luxury-gold text-luxury-dark shadow-md'
                    : 'bg-luxury-card/70 border border-luxury-border text-luxury-softText hover:text-luxury-ivory hover:border-luxury-gold/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between mb-3 text-xs text-luxury-goldLight px-1">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
            Swipe sideways to view all {filteredServices.length} offerings
          </span>
          <span className="text-luxury-softText text-[10px]">← Drag &rarr;</span>
        </div>

        {/* Services Container: Horizontal Snap-Rail on Mobile, 3-Col Grid on Desktop */}
        <motion.div
          layout
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 md:overflow-visible"
        >
          <AnimatePresence>
            {filteredServices.map((service) => {
              const IconComponent = getIcon(service.icon);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={service.id}
                  className="w-[84vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink rounded-3xl overflow-hidden bg-luxury-surface border border-luxury-border hover:border-luxury-gold/50 shadow-xl flex flex-col group transition-all duration-500"
                >
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-luxury-card">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-surface via-transparent to-black/20" />
                    
                    {/* Floating Service Badge */}
                    <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-luxury-dark/90 backdrop-blur-md border border-luxury-gold/40 flex items-center justify-center text-luxury-gold shadow-md">
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <div className="absolute bottom-3 left-4">
                      <span className="text-[11px] tracking-wider uppercase text-luxury-gold font-medium bg-luxury-dark/80 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-luxury-border">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-luxury-ivory font-medium group-hover:text-luxury-goldLight transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-luxury-softText font-light leading-relaxed">
                        {service.description}
                      </p>

                      {/* Feature Checklist */}
                      <div className="mt-4 pt-4 border-t border-luxury-border/60 space-y-2">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-luxury-ivory/80">
                            <Check className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Action Link to WhatsApp with Pre-filled Message */}
                    <div className="mt-6 pt-4 border-t border-luxury-border/60">
                      <a
                        href={`${CLIENT_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello Pranali Beauty Parlour, I am interested in inquiring about ${service.title}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-luxury-gold hover:text-luxury-goldLight group/link"
                      >
                        <span>Enquire on WhatsApp</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Notice for Custom Consultation */}
        <div className="mt-12 text-center">
          <p className="text-xs text-luxury-softText">
            Looking for bespoke bridal package curation or on-venue destination travel?{' '}
            <a
              href={`${CLIENT_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Pranali, I would like to consult regarding a customized bridal package.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-gold hover:underline font-medium ml-1"
            >
              Consult directly via WhatsApp &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
