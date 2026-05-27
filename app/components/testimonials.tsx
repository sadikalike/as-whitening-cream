'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      text: "I've been using this whitening cream for 2 months now. My dark spots have significantly faded and my skin looks so much brighter! Best investment for my skin.",
      image: "/user1.jpg",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 2,
      name: "Rahul Verma",
      location: "Delhi, India",
      rating: 5,
      text: "Amazing product! Within just 7 days, I could see visible results. My pimple marks are gone and skin tone is even. Highly recommended!",
      image: "/user2.jpg",
      date: "1 month ago",
      verified: true
    },
    {
      id: 3,
      name: "Anjali Nair",
      location: "Bangalore, India",
      rating: 4,
      text: "Great cream for everyday use. It's lightweight, non-greasy, and gives a natural glow. My pores look smaller and skin feels smoother.",
      image: "/user3.jpg",
      date: "3 weeks ago",
      verified: true
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Pune, India",
      rating: 5,
      text: "Finally found a cream that works! The 7-day challenge showed real results. My friends noticed the difference in my skin. Thank you AS Whitening!",
      image: "/user4.jpg",
      date: "5 days ago",
      verified: true
    },
    {
      id: 5,
      name: "Neha Gupta",
      location: "Chennai, India",
      rating: 5,
      text: "Excellent product for pigmentation. My melasma has reduced drastically. The texture is smooth and absorbs quickly. Will repurchase!",
      image: "/user5.jpg",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 6,
      name: "Amit Patel",
      location: "Ahmedabad, India",
      rating: 4,
      text: "Good value for money. The cream is effective and doesn't cause any irritation. My skin looks more radiant and even-toned.",
      image: "/user6.jpg",
      date: "1 week ago",
      verified: true
    }
  ];

  // Horizontal scroll on mobile
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative py-20 md:py-28 px-5 md:px-12 bg-gradient-to-b from-black to-gray-950 overflow-hidden scroll-mt-20"
    >
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.01)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Floating Orbs */}
      <motion.div
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", damping: 30 }}
        className="absolute top-40 right-20 w-72 h-72 rounded-full bg-yellow-400/5 blur-3xl"
      />
      <motion.div
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
        }}
        transition={{ type: "spring", damping: 30 }}
        className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-yellow-400/3 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 md:gap-3 mb-5 md:mb-6"
          >
            <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-yellow-400/60" />
            <span className="text-yellow-400/80 text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-semibold">
              What Our Customers Say
            </span>
            <div className="w-8 md:w-12 h-px bg-gradient-to-l from-transparent via-yellow-400/60 to-yellow-400/60" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4"
          >
            Real Stories,{" "}
            <span className="font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Real Results
            </span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent mx-auto my-5 md:my-6"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-3"
          >
            Join thousands of satisfied customers who have transformed their skin with AS Whitening Cream
          </motion.p>
        </motion.div>

        {/* Mobile Horizontal Scroll Buttons */}
        <div className="flex justify-end gap-2 mb-4 md:hidden">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-yellow-400/20 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-yellow-400/20 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Testimonials - Horizontal Scroll on Mobile, Grid on Desktop */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-6 md:pb-0 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group min-w-[85%] md:min-w-0 snap-start"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-6 md:p-8 hover:border-yellow-400/30 transition-all duration-500 h-full flex flex-col">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-white/20'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400/20 to-transparent border border-yellow-400/30 flex items-center justify-center overflow-hidden">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=ffd700&color=000&bold=true`;
                        }}
                      />
                    ) : (
                      <span className="text-xl">{testimonial.name.charAt(0)}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-white font-medium text-sm">{testimonial.name}</p>
                      {testimonial.verified && (
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <p className="text-white/40 text-xs">{testimonial.location}</p>
                  </div>
                </div>

                {/* Date */}
                <p className="text-white/30 text-[10px] mt-3">{testimonial.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400/[0.08] to-transparent border border-yellow-400/20 rounded-2xl p-8 md:p-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl" />
            
            <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
              Ready to Transform Your Skin?
            </h3>
            <p className="text-white/50 text-sm md:text-base max-w-md mx-auto mb-6">
              Join thousands of satisfied customers and experience the difference
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('cream')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full text-sm font-bold tracking-wide hover:shadow-2xl hover:shadow-yellow-500/40 transition-all duration-300"
            >
              Shop Now
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent mt-16 md:mt-20"
        />
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}