'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
      ref={ref}
      id="testimonials"
      className="relative py-20 md:py-28 px-5 md:px-12 bg-black overflow-hidden scroll-mt-20"
    >
      {/* ========== PREMIUM BACKGROUND ========== */}
      
      {/* Main Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-amber-950/15" />
      
      {/* Soft Animated Glows */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-amber-400/3 blur-3xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-amber-400/3 blur-3xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.012)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Gentle Floating Particles */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-amber-400/15 to-amber-400/5"
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                left: `${(i * 19) % 100}%`,
                top: `${(i * 13) % 100}%`,
              }}
              animate={{
                y: [0, -40, -80],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 6 + (i % 4),
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Premium Border Accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
            className="inline-flex items-center gap-2 md:gap-3 mb-5 md:mb-6"
          >
            <div className="w-8 md:w-10 h-px bg-gradient-to-r from-transparent to-amber-400/60" />
            <span className="text-amber-400/80 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold"
                  style={{ fontFamily: "'Inter', sans-serif" }}>
              ✨ What Our Customers Say ✨
            </span>
            <div className="w-8 md:w-10 h-px bg-gradient-to-l from-transparent to-amber-400/60" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.2] tracking-tighter px-2"
            style={{ fontFamily: "'Playfair Display', 'Space Grotesk', serif" }}
          >
            Real Stories,{" "}
            <span className="font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
              Real Results
            </span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-amber-400 via-amber-400/50 to-transparent mx-auto my-5 md:my-6"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-3"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Join thousands of satisfied customers who have transformed their skin with AS Whitening Cream
          </motion.p>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-4 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-amber-400/20 hover:border-amber-400/50 transition-all duration-300 cursor-pointer"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-amber-400/20 hover:border-amber-400/50 transition-all duration-300 cursor-pointer"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Testimonial Card with Animation */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-10 lg:p-12 backdrop-blur-sm"
            >
              {/* Rating Stars */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center gap-1.5 mb-6"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                    className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-amber-400' : 'text-white/20'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </motion.div>

              {/* Testimonial Text */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed text-center mb-8 max-w-2xl mx-auto"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                "{currentTestimonial.text}"
              </motion.p>

              {/* Quotation mark */}
              <motion.div 
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="flex justify-center mb-6"
              >
                <svg className="w-10 h-10 text-amber-400/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </motion.div>

              {/* User Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-center gap-4 pt-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400/30 to-amber-400/10 border border-amber-400/40 flex items-center justify-center"
                >
                  <span className="text-amber-400 text-2xl font-bold"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                    {currentTestimonial.name.charAt(0)}
                  </span>
                </motion.div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-white font-semibold text-base"
                       style={{ fontFamily: "'Inter', sans-serif" }}>
                      {currentTestimonial.name}
                    </p>
                    {currentTestimonial.verified && (
                      <motion.svg 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7, type: "spring" }}
                        className="w-4 h-4 text-amber-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </motion.svg>
                    )}
                  </div>
                  <p className="text-white/50 text-sm"
                     style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                    {currentTestimonial.location}
                  </p>
                </div>
              </motion.div>

              {/* Date */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center text-white/30 text-xs mt-6"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                {currentTestimonial.date}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center gap-2.5 mt-10"
        >
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentIndex(i)}
              className={`transition-all duration-300 cursor-pointer ${
                currentIndex === i
                  ? 'w-8 h-2.5 bg-amber-400 rounded-full shadow-lg shadow-amber-400/30'
                  : 'w-2.5 h-2.5 bg-white/30 rounded-full hover:bg-white/50'
              }`}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-amber-400/10 via-amber-400/5 to-transparent border border-amber-400/20 rounded-2xl p-6 md:p-10 relative overflow-hidden">
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <h3 className="text-2xl md:text-3xl font-light text-white mb-3"
                style={{ fontFamily: "'Playfair Display', 'Space Grotesk', serif" }}>
              Ready to Transform Your Skin?
            </h3>
            <p className="text-white/50 text-sm md:text-base max-w-md mx-auto mb-6"
               style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              Join thousands of satisfied customers and experience the difference
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0 0 0 0 rgba(245,158,11,0)", "0 0 0 8px rgba(245,158,11,0.2)", "0 0 0 0 rgba(245,158,11,0)"]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              onClick={() => document.getElementById('cream')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-black px-10 py-3.5 rounded-full text-sm font-bold tracking-wide hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Shop Now
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mt-16 md:mt-20"
        />
      </div>
    </section>
  );
}