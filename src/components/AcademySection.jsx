import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users, CheckCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { ACADEMY_COURSES, ASSET_IMAGES, CLIENT_INFO } from '../data/content';

export default function AcademySection() {
  return (
    <section id="academy" className="py-20 lg:py-28 bg-[#181310] text-luxury-ivory relative overflow-hidden border-t border-b border-luxury-border/60">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Split Layout: Intro on Left, Academy Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxury-card border border-luxury-border text-luxury-gold text-xs tracking-wider uppercase mb-4 w-fit">
              <GraduationCap className="w-4 h-4" />
              <span>Pranali Makeover Academy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-ivory font-medium leading-tight">
              Learn the Art of Beauty. <br />
              <span className="italic text-luxury-gold font-normal">
                Master the Craft.
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-luxury-softText font-light leading-relaxed">
              Step into the world of professional makeup artistry and hairstyling under the direct mentorship of <span className="text-luxury-ivory font-medium">Pranali Chilap</span>. Our academy provides focused, practical training tailored for both aspiring beauty entrepreneurs and individuals seeking refined personal grooming skills.
            </p>

            <div className="mt-8 space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-luxury-gold/20 text-luxury-gold flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs sm:text-sm text-luxury-ivory/90 font-light">
                  <strong className="text-luxury-ivory font-medium">Live Model Practical Training:</strong> Deepen confidence through repetitive, guided application on diverse skin tones and face shapes.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-luxury-gold/20 text-luxury-gold flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs sm:text-sm text-luxury-ivory/90 font-light">
                  <strong className="text-luxury-ivory font-medium">Comprehensive Product Knowledge:</strong> Learn professional kit assembly, formulations, sanitation protocols, and color theory.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-luxury-gold/20 text-luxury-gold flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs sm:text-sm text-luxury-ivory/90 font-light">
                  <strong className="text-luxury-ivory font-medium">Small-Batch Personal Mentorship:</strong> Limited batch sizes ensure one-on-one critique and real-time guidance.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`${CLIENT_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Pranali Makeover Academy, I would like to enquire about your upcoming makeup training courses and batch dates.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-luxury-gold hover:bg-luxury-goldLight text-luxury-dark font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-luxury-gold/20 flex items-center gap-2"
              >
                <span>Enquire About Courses</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <span className="text-xs text-luxury-softText">
                Next batch seats available on request
              </span>
            </div>
          </div>

          {/* Right Academy Training Image Banner */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[32px] overflow-hidden border border-luxury-border shadow-2xl bg-luxury-surface">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={ASSET_IMAGES.academyBanner}
                  alt="Pranali Beauty Academy Training Setup"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-4 rounded-2xl bg-luxury-dark/90 backdrop-blur-md border border-luxury-border/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-luxury-gold font-semibold">
                        Practical Vocational Training
                      </p>
                      <h4 className="font-serif text-lg text-luxury-ivory font-medium mt-0.5">
                        Build Your Independent Beauty Career
                      </h4>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-luxury-card border border-luxury-gold/30 flex items-center justify-center text-luxury-gold">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between mb-3 text-xs text-luxury-goldLight px-1">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
            Swipe sideways to view all {ACADEMY_COURSES.length} courses
          </span>
          <span className="text-luxury-softText text-[10px]">← Drag &rarr;</span>
        </div>

        {/* Course Cards Container: Mobile Snap-Rail, Desktop 3-Col Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
          {ACADEMY_COURSES.map((course, idx) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="w-[84vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink rounded-2xl p-6 sm:p-7 bg-luxury-surface border border-luxury-border hover:border-luxury-gold/50 shadow-xl flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <span className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-luxury-card border border-luxury-border text-luxury-gold font-semibold">
                  {course.level}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl text-luxury-ivory font-medium mt-4">
                  {course.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-luxury-softText font-light leading-relaxed">
                  {course.focus}
                </p>

                <div className="mt-4 pt-4 border-t border-luxury-border/60 flex items-center gap-2 text-xs text-luxury-goldLight">
                  <Sparkles className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
                  <span>{course.highlight}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-luxury-border/60">
                <a
                  href={`${CLIENT_INFO.whatsappUrl}?text=${encodeURIComponent(`Hi Pranali, I want more details about the "${course.title}" course syllabus and schedule.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold uppercase tracking-wider text-luxury-gold hover:text-luxury-goldLight flex items-center justify-between group"
                >
                  <span>Request Syllabus</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
