import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, ExternalLink, QrCode, Copy, Check, MessageSquareHeart } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { CLIENT_INFO } from '../data/content';

export default function GoogleReviewsSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CLIENT_INFO.googleReviewUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const sampleReviews = [
    {
      author: "Pooja K.",
      time: "Recent Google Review",
      rating: 5,
      service: "Bridal Couture Makeover",
      comment: "Pranali did absolute magic on my wedding day! The makeup was flawless, radiant and stayed fresh throughout the entire ceremony. Everyone praised the look!"
    },
    {
      author: "Snehal M.",
      time: "Recent Google Review",
      rating: 5,
      service: "Academy Masterclass Student",
      comment: "Best makeup academy in Pune! Pranali ma'am gives personal attention and teaches all tips from basic skin prep to advanced bridal styles with live models."
    },
    {
      author: "Neha S.",
      time: "Recent Google Review",
      rating: 5,
      service: "Skin Facial & Hair Spa",
      comment: "Super hygienic studio at Icon Tower. The facial left my skin glowing for days and the hair spa was so relaxing. Highly recommend her services!"
    }
  ];

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#130F0D] text-luxury-ivory relative overflow-hidden border-t border-luxury-border/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxury-card border border-luxury-border text-luxury-gold text-xs tracking-wider uppercase mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verified Google Business Presence</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-ivory font-medium">
            Loved by Our Patrons
          </h2>
          <p className="mt-3 text-sm text-luxury-softText font-light">
            Rated <span className="text-luxury-gold font-semibold">5.0 ★</span> across {CLIENT_INFO.googleReviewCount}+ verified reviews on Google. Scan the QR code or tap below to share your experience with us!
          </p>
        </div>

        {/* Main Grid: QR Code Stand on Left, Customer Praise on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Official Google QR Code Display Stand */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md rounded-[32px] bg-gradient-to-b from-[#251E18] via-[#1B1511] to-[#14100D] border-2 border-luxury-gold/40 p-7 sm:p-9 shadow-2xl shadow-black/80 relative text-center"
            >
              {/* Gold Top Emblem / Google Badge */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span className="font-semibold text-xs tracking-wider uppercase text-luxury-ivory">
                  Google Verified Business
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-luxury-ivory font-medium">
                {CLIENT_INFO.googleBusinessTitle}
              </h3>

              {/* Star Rating Bar */}
              <div className="flex items-center justify-center gap-1.5 mt-2 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="text-luxury-ivory text-sm font-bold ml-1.5">5.0</span>
                <span className="text-luxury-softText text-xs font-light">({CLIENT_INFO.googleReviewCount} reviews)</span>
              </div>

              {/* QR Code Container */}
              <div className="my-6 p-4 rounded-2xl bg-white mx-auto w-fit shadow-xl border-4 border-luxury-gold/50 group relative">
                <QRCodeSVG
                  value={CLIENT_INFO.googleReviewUrl}
                  size={190}
                  level="H"
                  includeMargin={false}
                  imageSettings={{
                    src: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%2314110F'/><text x='50' y='65' font-size='55' font-family='serif' fill='%23C5A371' text-anchor='middle'>P</text></svg>",
                    x: undefined,
                    y: undefined,
                    height: 38,
                    width: 38,
                    excavate: true,
                  }}
                />
              </div>

              <p className="text-xs text-luxury-goldLight font-medium">
                Scan with your phone camera to write a review
              </p>
              <p className="text-[11px] text-luxury-softText mt-0.5">
                Takes only 15 seconds • Helps future brides &amp; patrons
              </p>

              {/* Action Buttons: Direct Review Link & Copy */}
              <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={CLIENT_INFO.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-full bg-gradient-to-r from-luxury-gold to-luxury-goldMuted text-luxury-dark font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-luxury-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Review on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopy}
                  className="py-3 px-4 rounded-full bg-luxury-card border border-luxury-border text-luxury-softText hover:text-luxury-ivory text-xs flex items-center justify-center gap-1.5 transition-colors"
                  aria-label="Copy review link"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied Link!' : 'Copy Link'}</span>
                </button>
              </div>

              {/* Physical Studio Address */}
              <div className="mt-5 pt-4 border-t border-luxury-border/60 text-[11px] text-luxury-softText">
                <p className="line-clamp-2">
                  📍 {CLIENT_INFO.fullAddress}
                </p>
              </div>

            </motion.div>
          </div>

          {/* Right Column: Customer Feedback Cards */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-luxury-gold font-semibold flex items-center gap-1.5">
                <MessageSquareHeart className="w-4 h-4" />
                Recent Verified Feedback
              </span>
              <a
                href={CLIENT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-luxury-goldLight hover:underline font-medium"
              >
                View all 48 reviews on Google &rarr;
              </a>
            </div>

            {sampleReviews.map((rev, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-luxury-surface border border-luxury-border hover:border-luxury-gold/40 transition-colors shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-luxury-gold/15 border border-luxury-gold/30 text-luxury-gold font-serif font-bold text-sm flex items-center justify-center">
                      {rev.author[0]}
                    </div>
                    <div>
                      <h4 className="font-serif text-base text-luxury-ivory font-medium">
                        {rev.author}
                      </h4>
                      <p className="text-[10px] text-luxury-softText">
                        {rev.service} • {rev.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-luxury-softText font-light leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </motion.div>
            ))}

            {/* Quick Invitation Banner */}
            <div className="p-4 rounded-xl bg-luxury-card/70 border border-luxury-border flex items-center justify-between gap-4">
              <p className="text-xs text-luxury-softText">
                Visited our studio or taken our academy training recently?
              </p>
              <a
                href={CLIENT_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-luxury-gold hover:text-luxury-goldLight shrink-0"
              >
                Rate Us on Google &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
