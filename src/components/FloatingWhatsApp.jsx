import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { CLIENT_INFO } from '../data/content';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="hidden sm:flex fixed bottom-6 right-6 z-40 items-center gap-3">
      {/* Mini Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-luxury-dark/95 border border-luxury-gold/40 text-luxury-ivory text-xs shadow-2xl backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Chat with Pranali</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-luxury-softText hover:text-white ml-1"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href={`${CLIENT_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Pranali Beauty Parlour, I would like to enquire about your services and appointment availability.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/60 transition-colors relative group"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-25 group-hover:opacity-40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-current" />
      </motion.a>
    </div>
  );
}
