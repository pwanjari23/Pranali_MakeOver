import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { Instagram } from './InstagramIcon';
import { CLIENT_INFO } from '../data/content';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    serviceType: 'Bridal & Occasion Makeup',
    date: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Pranali Beauty Parlour,\n\nName: ${formData.name || 'Not specified'}\nService Needed: ${formData.serviceType}\nPreferred Date: ${formData.date || 'Flexible'}\nNotes: ${formData.notes || 'None'}\n\nI would like to enquire about availability and consultation.`;
    
    const whatsappUrl = `https://wa.me/${CLIENT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#15110E] text-luxury-ivory relative overflow-hidden border-t border-luxury-border/80">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Connect With Pranali
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-ivory font-medium mt-1">
            Enquire &amp; Reserve
          </h2>
          <p className="mt-3 text-sm text-luxury-softText font-light">
            Whether preparing for your wedding day, planning an editorial shoot, refreshing your skin, or enrolling in our beauty academy, we are just a message away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Direct Access Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <motion.a
              whileHover={{ x: 4 }}
              href={`${CLIENT_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Pranali Beauty Parlour, I would like to book a consultation.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-luxury-surface border border-luxury-border hover:border-luxury-gold/50 flex items-center justify-between group transition-all duration-300 block shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">
                    Instant Chat
                  </span>
                  <h4 className="font-serif text-lg text-luxury-ivory font-medium group-hover:text-luxury-gold transition-colors">
                    WhatsApp Enquiry
                  </h4>
                  <p className="text-xs text-luxury-softText mt-0.5">
                    {CLIENT_INFO.phone}
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold uppercase text-luxury-gold tracking-wider group-hover:translate-x-1 transition-transform">
                Chat &rarr;
              </span>
            </motion.a>

            {/* Email Card */}
            <motion.a
              whileHover={{ x: 4 }}
              href={`mailto:${CLIENT_INFO.email}`}
              className="p-6 rounded-2xl bg-luxury-surface border border-luxury-border hover:border-luxury-gold/50 flex items-center justify-between group transition-all duration-300 block shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-luxury-card border border-luxury-border text-luxury-gold flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-luxury-gold font-semibold">
                    Direct Email
                  </span>
                  <h4 className="font-serif text-lg text-luxury-ivory font-medium group-hover:text-luxury-gold transition-colors">
                    Official Inquiries
                  </h4>
                  <p className="text-xs text-luxury-softText mt-0.5 break-all">
                    {CLIENT_INFO.email}
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold uppercase text-luxury-gold tracking-wider group-hover:translate-x-1 transition-transform">
                Email &rarr;
              </span>
            </motion.a>

            {/* Instagram Card */}
            <motion.a
              whileHover={{ x: 4 }}
              href={CLIENT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-luxury-surface border border-luxury-border hover:border-luxury-gold/50 flex items-center justify-between group transition-all duration-300 block shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-950/60 border border-pink-500/30 text-pink-400 flex items-center justify-center shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-pink-400 font-semibold">
                    Social Portfolio
                  </span>
                  <h4 className="font-serif text-lg text-luxury-ivory font-medium group-hover:text-luxury-gold transition-colors">
                    Instagram Official
                  </h4>
                  <p className="text-xs text-luxury-softText mt-0.5">
                    {CLIENT_INFO.instagramHandle}
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold uppercase text-luxury-gold tracking-wider group-hover:translate-x-1 transition-transform">
                View &rarr;
              </span>
            </motion.a>

            {/* Location & Maps Card */}
            <motion.a
              whileHover={{ x: 4 }}
              href={CLIENT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-luxury-surface border border-luxury-border hover:border-luxury-gold/50 flex items-center justify-between group transition-all duration-300 block shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-luxury-card border border-luxury-border text-luxury-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-luxury-gold font-semibold">
                    Studio Location
                  </span>
                  <h4 className="font-serif text-lg text-luxury-ivory font-medium group-hover:text-luxury-gold transition-colors">
                    Pune, Maharashtra
                  </h4>
                  <p className="text-xs text-luxury-softText mt-0.5">
                    {CLIENT_INFO.locationDisplay}
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold uppercase text-luxury-gold tracking-wider group-hover:translate-x-1 transition-transform">
                Maps &rarr;
              </span>
            </motion.a>

          </div>

          {/* Right Column: Seamless WhatsApp Enquiry Builder Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-luxury-surface border border-luxury-border p-8 sm:p-10 shadow-2xl relative">
              <h3 className="font-serif text-2xl text-luxury-ivory font-medium">
                Quick Consultation Request
              </h3>
              <p className="text-xs sm:text-sm text-luxury-softText font-light mt-1">
                Fill out your details below to generate a direct, pre-formatted message sent directly to Pranali via WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-luxury-softText font-semibold mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-luxury-card border border-luxury-border text-sm text-luxury-ivory placeholder-luxury-softText/50 focus:outline-none focus:border-luxury-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-luxury-softText font-semibold mb-2">
                      Service / Inquiry Type
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-luxury-card border border-luxury-border text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold transition-colors"
                    >
                      <option value="Bridal & Occasion Makeup">Bridal &amp; Occasion Makeup</option>
                      <option value="Celebrity & Media Shoot Styling">Celebrity &amp; Media Shoot Styling</option>
                      <option value="Hair Care & Couture Styling">Hair Care &amp; Couture Styling</option>
                      <option value="Skin Rituals & Bespoke Facials">Skin Rituals &amp; Bespoke Facials</option>
                      <option value="Spa & Luxury Parlour Care">Spa &amp; Luxury Parlour Care</option>
                      <option value="Pranali Academy Makeup Course">Pranali Academy Makeup Course</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-luxury-softText font-semibold mb-2">
                    Preferred Date / Event Timing (Optional)
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-luxury-card border border-luxury-border text-sm text-luxury-ivory placeholder-luxury-softText/50 focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-luxury-softText font-semibold mb-2">
                    Special Requests or Message
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about your event, venue location, or course questions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-luxury-card border border-luxury-border text-sm text-luxury-ivory placeholder-luxury-softText/50 focus:outline-none focus:border-luxury-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-luxury-gold to-luxury-goldMuted text-luxury-dark font-semibold text-xs uppercase tracking-wider shadow-lg shadow-luxury-gold/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <span>Send Direct Inquiry to WhatsApp</span>
                </button>

                {submitted && (
                  <div className="flex items-center gap-2 text-xs text-emerald-400 justify-center pt-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>WhatsApp chat initiated in new tab!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
