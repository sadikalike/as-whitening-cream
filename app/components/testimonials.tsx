'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Althaf",
      location: "Mangalore, India",
      rating: 5,
      text: "I've been using this whitening cream for 2 months now. My dark spots have significantly faded and my skin looks so much brighter! Best investment for my skin.",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 2,
      name: "Anwar",
      location: "Kasargod, India",
      rating: 5,
      text: "Amazing product! Within just 7 days, I could see visible results. My pimple marks are gone and skin tone is even. Highly recommended!",
      date: "1 month ago",
      verified: true
    },
    {
      id: 3,
      name: "Irshad",
      location: "Kasargod, India",
      rating: 4,
      text: "Great cream for everyday use. It's lightweight, non-greasy, and gives a natural glow. My pores look smaller and skin feels smoother.",
      date: "3 weeks ago",
      verified: true
    },
    {
      id: 4,
      name: "Sinan",
      location: "Hassan, India",
      rating: 5,
      text: "Finally found a cream that works! The 7-day challenge showed real results. My friends noticed the difference in my skin. Thank you AS Whitening!",
      date: "5 days ago",
      verified: true
    },
    {
      id: 5,
      name: "Nithin",
      location: "Mangalore, India",
      rating: 5,
      text: "Excellent product for pigmentation. My melasma has reduced drastically. The texture is smooth and absorbs quickly. Will repurchase!",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 6,
      name: "Abhishek",
      location: "Kasargod, India",
      rating: 4,
      text: "Good value for money. The cream is effective and doesn't cause any irritation. My skin looks more radiant and even-toned.",
      date: "1 week ago",
      verified: true
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-28 px-5 md:px-12 bg-black overflow-hidden scroll-mt-20"
    >
      {/* Static Background - No animations */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-amber-950/15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-3xl" />
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-amber-400/3 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-amber-400/3 blur-3xl" />

      {/* Static Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Static Particles - No animation */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-amber-400/10"
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                left: `${(i * 19) % 100}%`,
                top: `${(i * 13) % 100}%`,
                opacity: 0.1
              }}
            />
          ))}
        </div>
      )}

      {/* Static Border Accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header Section - Fast animations */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 md:gap-3 mb-5 md:mb-6"
          >
            <div className="w-8 md:w-10 h-px bg-gradient-to-r from-transparent to-amber-400/60" />
            <span className="text-amber-400/80 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold">
              ✨ What Our Customers Say ✨
            </span>
            <div className="w-8 md:w-10 h-px bg-gradient-to-l from-transparent to-amber-400/60" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.2] tracking-tighter px-2"
          >
            Real Stories,{" "}
            <span className="font-bold text-amber-400">
              Real Results
            </span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-amber-400 via-amber-400/50 to-transparent mx-auto my-5 md:my-6"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-3"
          >
            Join thousands of satisfied customers who have transformed their skin with AS Whitening Cream
          </motion.p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-amber-400/20 hover:border-amber-400/50 transition-all duration-200 cursor-pointer"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-amber-400/20 hover:border-amber-400/50 transition-all duration-200 cursor-pointer"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Card - Standard Slider Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10"
            >
              {/* Rating Stars - No animation delay */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-amber-400' : 'text-white/20'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed text-center mb-6 max-w-2xl mx-auto">
                "{currentTestimonial.text}"
              </p>

              {/* Quotation Icon */}
              <div className="flex justify-center mb-6">
                <svg className="w-8 h-8 text-amber-400/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* User Info */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400/30 to-amber-400/10 border border-amber-400/40 flex items-center justify-center">
                  <span className="text-amber-400 text-xl font-bold">
                    {currentTestimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-white font-semibold text-sm">
                      {currentTestimonial.name}
                    </p>
                    {currentTestimonial.verified && (
                      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-white/50 text-xs">
                    {currentTestimonial.location}
                  </p>
                </div>
              </div>

              {/* Date */}
              <p className="text-center text-white/30 text-xs mt-4">
                {currentTestimonial.date}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`transition-all duration-200 cursor-pointer ${
                currentIndex === i
                  ? 'w-8 h-2 bg-amber-400 rounded-full'
                  : 'w-2 h-2 bg-white/30 rounded-full hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* CTA Section - Static, no shine animation */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-400/10 via-amber-400/5 to-transparent border border-amber-400/20 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-light text-white mb-2">
              Ready to Transform Your Skin?
            </h3>
            <p className="text-white/50 text-sm md:text-base max-w-md mx-auto mb-5">
              Join thousands of satisfied customers and experience the difference
            </p>
            <button
              onClick={() => document.getElementById('cream')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black px-8 py-3 rounded-full text-sm font-bold tracking-wide hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200"
            >
              Shop Now
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mt-12 md:mt-16" />
      </div>
    </section>
  );
}