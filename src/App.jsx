import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandHighlights from './components/BrandHighlights';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CelebrityPortfolio from './components/CelebrityPortfolio';
import AcademySection from './components/AcademySection';
import VisitBookingSection from './components/VisitBookingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileQuickDock from './components/MobileQuickDock';

function App() {
  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-ivory font-sans selection:bg-luxury-gold selection:text-luxury-dark">
      {/* Premium Floating Header */}
      <Navbar />

      {/* Main Page Flow */}
      <main>
        {/* A. Hero Section with Editorial Asymmetric Layout */}
        <Hero />

        {/* B. Brand Feature Highlight Banner (matching reference middle card) */}
        <BrandHighlights />

        {/* C. About Pranali Chilap & 4-Pillar Philosophy Grid */}
        <AboutSection />

        {/* D. Comprehensive Services & Tailored Treatments Grid */}
        <ServicesSection />

        {/* E. Celebrity Work & High-Fashion Makeup Portfolio */}
        <CelebrityPortfolio />

        {/* F. Dedicated Beauty & Makeup Artistry Academy */}
        <AcademySection />

        {/* G. Working Hours, Studio Location & Booking Section (matching reference split layout) */}
        <VisitBookingSection />

        {/* H. Quick Consultation & Contact Section with Verified Links */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Action (Desktop/Tablet) */}
      <FloatingWhatsApp />

      {/* Floating Quick Dock Navigation (Mobile Only) */}
      <MobileQuickDock />
    </div>
  );
}

export default App;
