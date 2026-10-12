import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, X, Eye } from 'lucide-react';
import { Instagram } from './InstagramIcon';
import { ASSET_IMAGES, CLIENT_INFO } from '../data/content';

export default function CelebrityPortfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-luxury-dark text-luxury-ivory relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Editorial Artistry &amp; Shoots
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-ivory font-medium mt-1">
              Celebrity Work &amp; Portfolio
            </h2>
            <p className="mt-3 text-sm text-luxury-softText max-w-xl font-light">
              Explore signature transformations crafted for bridal couture, regional media productions, song videos, and high-fashion editorial sessions.
            </p>
          </div>

          {/* Instagram Action Button */}
          <div>
            <a
              href={CLIENT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-luxury-gold/40 bg-luxury-surface hover:bg-luxury-gold hover:text-luxury-dark text-luxury-gold text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg group"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow @pranali_chilap_makeupartist</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between mb-3 text-xs text-luxury-goldLight px-1">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
            Swipe sideways to view all {ASSET_IMAGES.portfolio.length} portfolio looks
          </span>
          <span className="text-luxury-softText text-[10px]">← Drag &rarr;</span>
        </div>

        {/* Gallery: Mobile Touch-Snap Carousel, Desktop 3-Col Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 md:overflow-visible">
          {ASSET_IMAGES.portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-[84vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink group relative rounded-[28px] overflow-hidden bg-luxury-surface border border-luxury-border shadow-xl cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              {/* Image Frame */}
              <div className="aspect-[3/4] overflow-hidden bg-luxury-card relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Category Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] tracking-wider uppercase px-3 py-1 rounded-full bg-luxury-dark/80 backdrop-blur-md border border-luxury-border text-luxury-goldLight font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Hover Quick Zoom Icon */}
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-luxury-dark/80 backdrop-blur-md border border-luxury-border/60 flex items-center justify-center text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Bottom Caption & Details */}
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <span className="text-[10px] tracking-widest uppercase text-luxury-gold font-bold">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-xl text-luxury-ivory font-medium mt-0.5 group-hover:text-luxury-goldLight transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-luxury-softText mt-1 line-clamp-2 font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Feed Invitation Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-luxury-surface border border-luxury-border/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-luxury-gold to-luxury-rose flex items-center justify-center text-luxury-dark shadow-md shrink-0">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-luxury-ivory font-semibold">
                Discover More Live Transformations On Instagram
              </h4>
              <p className="text-xs text-luxury-softText mt-0.5">
                Catch behind-the-scenes reels, bridal BTS, student work, and event shoots updated weekly.
              </p>
            </div>
          </div>

          <a
            href={CLIENT_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-luxury-card hover:bg-luxury-gold hover:text-luxury-dark border border-luxury-border text-xs uppercase tracking-wider font-semibold text-luxury-ivory transition-colors duration-300 shrink-0"
          >
            Visit Profile
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full bg-luxury-surface border border-luxury-border rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-luxury-dark/80 text-luxury-ivory hover:text-luxury-gold border border-luxury-border flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[4/3] bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-luxury-card border border-luxury-border text-luxury-gold font-medium">
                    {selectedImage.category}
                  </span>
                  <span className="text-xs text-luxury-softText">• {selectedImage.tag}</span>
                </div>
                <h3 className="font-serif text-2xl text-luxury-ivory font-medium">
                  {selectedImage.title}
                </h3>
                <p className="mt-2 text-sm text-luxury-softText font-light">
                  {selectedImage.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-luxury-border flex items-center justify-between">
                  <a
                    href={CLIENT_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold uppercase tracking-wider text-luxury-gold hover:underline flex items-center gap-1.5"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>View More on Instagram</span>
                  </a>

                  <a
                    href={`${CLIENT_INFO.whatsappUrl}?text=${encodeURIComponent(`Hi Pranali, I loved this portfolio look: ${selectedImage.title}. Is a similar style available for my date?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-luxury-gold text-luxury-dark text-xs font-semibold uppercase tracking-wider hover:bg-luxury-goldLight transition-colors"
                  >
                    Enquire This Style
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
