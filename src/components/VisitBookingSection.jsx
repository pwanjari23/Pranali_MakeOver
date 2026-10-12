import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Phone, Mail, MapPin, Calendar, ArrowUpRight, MessageCircle } from 'lucide-react';
import { CLIENT_INFO, ASSET_IMAGES } from '../data/content';

export default function VisitBookingSection() {
  return (
    <section className="py-20 lg:py-28 bg-luxury-dark text-luxury-ivory relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching reference typography */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
            Reserve Your Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-ivory font-medium mt-1">
            Plan To Visit? Or Book Your Visit!
          </h2>
          <p className="mt-3 text-sm text-luxury-softText font-light">
            We welcome you to our Pune studio for bridal trials, bespoke salon pampering, and academy consultations.
          </p>
        </div>

        {/* Split Container directly mirroring the reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Dark Luxury Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[32px] bg-[#1E1915] border border-[#382F28] p-8 sm:p-10 shadow-2xl relative overflow-hidden"
            >
              {/* Working Hours Block */}
              <div className="border-b border-luxury-border/80 pb-8">
                <div className="flex items-center gap-2.5 text-luxury-gold mb-4">
                  <Clock className="w-4 h-4" />
                  <h3 className="font-serif text-xl sm:text-2xl text-luxury-goldLight font-medium">
                    Working Hours
                  </h3>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  {CLIENT_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center text-luxury-softText">
                      <span className="font-medium text-luxury-ivory/90">{h.days}</span>
                      <span className="text-luxury-goldLight font-light">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Your Visit Contact Block */}
              <div className="py-8 border-b border-luxury-border/80">
                <div className="flex items-center gap-2.5 text-luxury-gold mb-4">
                  <Calendar className="w-4 h-4" />
                  <h3 className="font-serif text-xl sm:text-2xl text-luxury-goldLight font-medium">
                    Book Your Visit
                  </h3>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-luxury-softText">
                  <a
                    href={`mailto:${CLIENT_INFO.email}`}
                    className="flex items-center gap-3 hover:text-luxury-gold transition-colors"
                  >
                    <Mail className="w-4 h-4 text-luxury-gold shrink-0" />
                    <span className="break-all">{CLIENT_INFO.email}</span>
                  </a>

                  <a
                    href={CLIENT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-luxury-gold transition-colors"
                  >
                    <Phone className="w-4 h-4 text-luxury-gold shrink-0" />
                    <span>{CLIENT_INFO.phone}</span>
                  </a>

                  <a
                    href={CLIENT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:text-luxury-gold transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                    <span>{CLIENT_INFO.locationDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Action Button matching the reference golden pill button */}
              <div className="pt-8">
                <a
                  href={`${CLIENT_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Pranali Beauty Parlour, I want to book an appointment.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-luxury-gold to-luxury-goldMuted text-luxury-dark font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-luxury-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Book Now via WhatsApp</span>
                </a>
              </div>

            </motion.div>
          </div>

          {/* Right High-End Studio Interior Photo (mirroring reference visual) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[32px] overflow-hidden border border-luxury-border shadow-2xl bg-luxury-surface group"
            >
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src={ASSET_IMAGES.salonInterior}
                  alt="Pranali Beauty Parlour Salon Studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 via-transparent to-black/20 pointer-events-none" />

              {/* Bottom Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-semibold">
                    Studio Experience
                  </span>
                  <p className="font-serif text-lg text-luxury-ivory font-medium">
                    Clean, Sanitized &amp; Relaxing Atmosphere
                  </p>
                </div>

                <a
                  href={CLIENT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-luxury-dark/90 backdrop-blur-md border border-luxury-gold/40 text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark text-xs font-medium transition-colors flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
