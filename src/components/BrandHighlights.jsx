import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Camera, Scissors, GraduationCap, CheckCircle2 } from 'lucide-react';
import { ASSET_IMAGES, CLIENT_INFO } from '../data/content';

export default function BrandHighlights() {
  const highlights = [
    {
      icon: Sparkles,
      title: "Bridal Artistry",
      desc: "HD & Airbrush couture"
    },
    {
      icon: Camera,
      title: "Celebrity & Shoot",
      desc: "Camera-calibrated makeup"
    },
    {
      icon: Scissors,
      title: "Hair & Skin Care",
      desc: "Bespoke salon rituals"
    },
    {
      icon: GraduationCap,
      title: "Beauty Academy",
      desc: "Hands-on certified training"
    }
  ];

  return (
    <section className="py-12 bg-luxury-dark text-luxury-ivory border-t border-b border-luxury-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Reference-Style Card */}
        <div className="rounded-[28px] bg-luxury-surface border border-luxury-border/80 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Backlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-luxury-border group shadow-lg">
                <img
                  src={ASSET_IMAGES.aboutPortrait}
                  alt="Pranali Chilap at work"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-luxury-dark/85 backdrop-blur-md px-3 py-1 rounded-full border border-luxury-gold/30 text-[11px] text-luxury-goldLight font-medium">
                  Artistry in Action
                </div>
              </div>
            </div>

            {/* Right Text & Feature Pills */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
                Pune's Trusted Beauty Studio
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-luxury-ivory font-medium mt-1">
                What We Provide To Our Patrons
              </h2>
              <p className="mt-3 text-sm sm:text-base text-luxury-softText font-light leading-relaxed">
                From bespoke pre-bridal skincare and high-fashion red carpet styling to foundational hands-on makeup training, our studio on Mundhwa-Manjri Road delivers high-standard aesthetic care.
              </p>

              {/* 4 Feature Pills (exact aesthetic of the reference pill row) */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{ y: -3, scale: 1.02 }}
                      className="p-3.5 rounded-xl bg-luxury-card/90 border border-luxury-border/90 flex flex-col items-center text-center hover:border-luxury-gold/50 transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center mb-2">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-semibold text-luxury-ivory tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-luxury-softText mt-0.5">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
