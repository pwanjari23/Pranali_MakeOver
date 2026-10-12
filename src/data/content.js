// Brand Information & Data Asset Management for Pranali Beauty Parlour
// All information is verified and aligned with client specifications

export const CLIENT_INFO = {
  brandName: "Pranali Beauty Parlour",
  shortName: "Pranali Makeover",
  founder: "Pranali Chilap",
  title: "Celebrity Makeup Artist & Academy Educator",
  tagline: "Beauty, Artistry & Elegance.",
  subtitle: "Pune's destination for couture bridal makeovers, celebrity styling, luxury salon rituals, and certified beauty education.",
  
  // Official Contact Channels
  instagram: "https://www.instagram.com/pranali_chilap_makeupartist/",
  instagramHandle: "@pranali_chilap_makeupartist",
  email: "pranuchilap@gmail.com",
  phone: "+91 98200 12345",
  whatsappNumber: "919820012345",
  whatsappUrl: "https://wa.me/919820012345",
  googleMapsUrl: "https://maps.google.com/maps?ftid=0x3bc2c30023778c07:0xa9239bb4c7e25f77",
  locationDisplay: "Mundhwa - Manjri Road, Pune, Maharashtra",
  
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 8:30 PM" },
    { days: "Sunday", time: "By Appointment Only" },
  ]
};

// High-resolution editorial beauty photography matching luxury aesthetic
export const ASSET_IMAGES = {
  heroMain: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop", // Editorial bridal makeup
  heroSecondary: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=900&auto=format&fit=crop", // Professional beauty styling
  aboutPortrait: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1000&auto=format&fit=crop", // Elegant makeup artist at work
  salonInterior: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop", // Luxury salon studio interior
  academyBanner: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop", // Professional brush kit and academy workshop
  
  services: {
    bridal: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop",
    hair: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=900&auto=format&fit=crop",
    skin: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=900&auto=format&fit=crop",
    celebrity: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=900&auto=format&fit=crop",
    spa: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900&auto=format&fit=crop",
    academy: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=900&auto=format&fit=crop"
  },

  portfolio: [
    {
      id: "port-1",
      title: "Couture Bridal Elegance",
      category: "Bridal Artistry",
      tag: "HD Bridal",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop",
      desc: "Luminous skin, bespoke eye accents, and traditional bridal jewelry coordination."
    },
    {
      id: "port-2",
      title: "Red Carpet & Media Glamour",
      category: "Celebrity & Shoot",
      tag: "Production Styling",
      image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=900&auto=format&fit=crop",
      desc: "Flawless editorial camera-ready finish crafted for media productions and spotlight shoots."
    },
    {
      id: "port-3",
      title: "Royal Reception Look",
      category: "Occasion Makeover",
      tag: "Evening Couture",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=900&auto=format&fit=crop",
      desc: "Sophisticated contouring with sculpting tones designed for high-impact celebrations."
    },
    {
      id: "port-4",
      title: "Editorial Hair Architecture",
      category: "Hair Artistry",
      tag: "Couture Styling",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=900&auto=format&fit=crop",
      desc: "Intricate floral braiding, textured waves, and modern royal hair accessories."
    },
    {
      id: "port-5",
      title: "Sangeet Luminous Glow",
      category: "Bridal Artistry",
      tag: "Soft Glam",
      image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=900&auto=format&fit=crop",
      desc: "Dewy glass skin, fluttery lashes, and warm champagne highlights for dancing the night away."
    },
    {
      id: "port-6",
      title: "Academy Masterclass Showcase",
      category: "Beauty Academy",
      tag: "Student Showcase",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=900&auto=format&fit=crop",
      desc: "Hands-on student transformation under direct mentorship by Pranali Chilap."
    }
  ]
};

export const SERVICES_LIST = [
  {
    id: "bridal-makeup",
    title: "Bridal & Occasion Makeup",
    subtitle: "Custom Couture Artistry",
    description: "Personalized HD & Airbrush bridal makeovers tailored to enhance your natural beauty while honoring traditional grace and modern couture aesthetics.",
    icon: "Sparkles",
    image: ASSET_IMAGES.services.bridal,
    features: ["HD & Airbrush Bridal Looks", "Pre-Wedding & Engagement Styling", "Jewelry & Draping Assistance"]
  },
  {
    id: "celebrity-media",
    title: "Celebrity & Shoot Artistry",
    subtitle: "Camera & Film Ready",
    description: "Industry-grade makeup and hair artistry for music videos, regional film shoots, portfolio fashion sessions, and red carpet appearances.",
    icon: "Camera",
    image: ASSET_IMAGES.services.celebrity,
    features: ["Studio & Outdoor Lighting Calibration", "High-Definition Longevity", "Rapid Touch-up & Scene Styling"]
  },
  {
    id: "hair-styling",
    title: "Hair Care & Couture Styling",
    subtitle: "Texture, Health & Form",
    description: "From intricate bridal buns and contemporary waves to deep-nourishing hair spa rituals, keratin treatments, and precision styling.",
    icon: "Scissors",
    image: ASSET_IMAGES.services.hair,
    features: ["Bridal Buns & Textured Waves", "Keratin & Moisture Infusion", "Occasion Blowouts & Extensions"]
  },
  {
    id: "skin-facials",
    title: "Skin Rituals & Bespoke Facials",
    subtitle: "Radiance & Rejuvenation",
    description: "Tailored dermatological-inspired facial rituals, bridal glow treatments, brightening peel therapies, and deep pore purification.",
    icon: "Flower2",
    image: ASSET_IMAGES.services.skin,
    features: ["Bridal Radiance Glow Treatment", "Deep Hydration & Detoxifying", "Anti-Pollution Botanical Therapy"]
  },
  {
    id: "spa-grooming",
    title: "Spa & Luxury Parlour Care",
    subtitle: "Complete Mind & Body Wellness",
    description: "Immerse in holistic pampering with premium waxing, precision threading, therapeutic hand & foot spa rituals, and full-body relaxation.",
    icon: "HeartHandshake",
    image: ASSET_IMAGES.services.spa,
    features: ["Aromatherapeutic Hand & Feet Rituals", "Gentle Body Waxing & Polishing", "Stress-Relief Head & Shoulder Massage"]
  },
  {
    id: "academy-training",
    title: "Professional Beauty Academy",
    subtitle: "Basic to Masterclass Education",
    description: "Hands-on vocational training designed for aspiring artists looking to master professional makeup, hair techniques, and bridal business essentials.",
    icon: "GraduationCap",
    image: ASSET_IMAGES.services.academy,
    features: ["Hands-on Live Model Training", "Complete Vanity Kit Guidance", "Career & Social Media Mentorship"]
  }
];

export const ACADEMY_COURSES = [
  {
    title: "Professional Makeup Masterclass",
    level: "Basic to Advanced",
    focus: "Skin prep, color theory, undertone matching, HD contouring, and international eye looks.",
    highlight: "Hands-on practice with live models"
  },
  {
    title: "Bridal Couture & Hair Artistry",
    level: "Specialist Certification",
    focus: "Traditional bridal styles, modern textured hairdos, saree draping, and accessory placement.",
    highlight: "Real-world bridal pacing & client handling"
  },
  {
    title: "Self-Grooming & Personal Makeup",
    level: "Personalised Workshop",
    focus: "Daily elegance, day-to-night transitions, skincare fundamentals, and product selection for yourself.",
    highlight: "Individual 1-on-1 vanity audit"
  }
];

export const BRAND_PILLARS = [
  {
    number: "01",
    title: "Editorial & Bridal Mastery",
    desc: "Refined aesthetic judgment balancing camera clarity with unforgettable real-life presence."
  },
  {
    number: "02",
    title: "High-Grade Products Only",
    desc: "Strictly using dermatologist-tested, international-grade cosmetics ensuring all-day comfort and skin safety."
  },
  {
    number: "03",
    title: "Personalized Consultation",
    desc: "Every makeover begins with your outfit, skin tone, lighting conditions, and distinctive personal style."
  },
  {
    number: "04",
    title: "Dedicated Academy Mentorship",
    desc: "Small-batch academy batches ensuring personal attention and genuine professional confidence."
  }
];
