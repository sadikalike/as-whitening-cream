'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stats = [
    { value: "50K+", label: "Happy Customers", icon: "👥", desc: "Global community" },
    { value: "7 Days", label: "Visible Results", icon: "⚡", desc: "Guaranteed" },
    { value: "100%", label: "Natural Formula", icon: "🌿", desc: "No chemicals" },
    { value: "24/7", label: "Expert Support", icon: "💬", desc: "Always here" },
  ];

  const features = [
    { icon: "🔬", title: "Clinically Tested", desc: "Dermatologist approved formula" },
    { icon: "🌱", title: "Natural Ingredients", desc: "No harsh chemicals, no parabens" },
    { icon: "💎", title: "All Skin Types", desc: "Safe for every skin tone & texture" },
  ];

  const benefits = [
    "Reduces dark spots & hyperpigmentation",
    "Even skin tone in 7 days",
    "SPF 30 protection",
    "24-hour hydration",
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen bg-black overflow-hidden scroll-mt-20"
    >
      {/* ========== CREAM-INSPIRED SOFT BACKGROUND ========== */}
      
      {/* Main Gradient - Cream & Gold tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-amber-900/20" />
      
      {/* Soft Cream Glow - Center */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-400/5 blur-3xl"
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
      
      {/* Floating Cream Orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-400/3 blur-2xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-amber-400/3 blur-2xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Gentle Floating Particles - Cream Inspired */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(isMobile ? 15 : 25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-amber-400/20 to-amber-400/5"
              style={{
                width: `${2 + (i % 4)}px`,
                height: `${2 + (i % 4)}px`,
                left: `${(i * 13) % 100}%`,
                top: `${(i * 7) % 100}%`,
              }}
              animate={{
                y: [0, -30, -60],
                x: [0, (i % 2 === 0 ? 10 : -10), 0],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 5 + (i % 3),
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Premium Border Accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      {/* ========== MAIN CONTENT ========== */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 py-16 md:py-28">

        {/* Top Label with Cream Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center md:justify-start gap-3 mb-6"
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: "50px" } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-amber-400 to-transparent"
          />
          <motion.span 
            animate={{ 
              opacity: [0.7, 1, 0.7],
              letterSpacing: ["0.3em", "0.35em", "0.3em"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-amber-400/80 text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-bold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            ✨ Our Philosophy ✨
          </motion.span>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: "50px" } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="h-px bg-gradient-to-l from-amber-400 to-transparent hidden md:block"
          />
        </motion.div>

        {/* Main Heading with Premium Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.2] md:leading-[1.1] tracking-tighter mb-4 text-center md:text-left"
          style={{ fontFamily: "'Playfair Display', 'Space Grotesk', serif" }}
        >
          Science Behind
          <br />
          <motion.span 
            className="font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent bg-[length:200%_auto] inline-block"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Perfect Skin
          </motion.span>
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "100px" } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-amber-400 via-amber-400/50 to-transparent mx-auto md:mx-0 mb-8 md:mb-10"
        />

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* LEFT SIDE: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full"
          >
            <p className="text-white/60 text-sm md:text-base leading-relaxed font-light mb-4 text-center md:text-left"
               style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              AS Whitening Cream combines advanced dermatological science with nature's finest ingredients.
              Our formula is clinically tested, cruelty-free, and designed for all skin types.
            </p>
            <p className="text-white/50 text-sm md:text-base leading-relaxed font-light mb-6 text-center md:text-left"
               style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              We believe everyone deserves radiant, even-toned skin without harsh chemicals.
            </p>

            {/* Benefits Grid with Stagger Animation */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-1.5 h-1.5 rounded-full bg-amber-400/60 group-hover:bg-amber-400 transition-colors"
                  />
                  <span className="text-white/50 text-xs md:text-sm font-light group-hover:text-white/70 transition-colors"
                        style={{ fontFamily: "'Inter', sans-serif" }}>
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Feature Cards with Premium Hover Effects */}
            <div className="space-y-3 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + i * 0.1, ease: "easeOut" }}
                  whileHover={{ 
                    scale: 1.03, 
                    x: 10,
                    backgroundColor: "rgba(245,158,11,0.08)",
                  }}
                  className="group flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 hover:border-amber-400/40 transition-all duration-500 cursor-pointer"
                >
                  <motion.span 
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    className="text-2xl group-hover:text-amber-400 transition-colors"
                  >
                    {f.icon}
                  </motion.span>
                  <div>
                    <div className="text-white text-sm font-semibold tracking-wide group-hover:text-amber-400 transition-colors"
                         style={{ fontFamily: "'Inter', sans-serif" }}>
                      {f.title}
                    </div>
                    <div className="text-white/40 text-xs mt-0.5">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button with Shine Animation */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('cream')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative w-full md:w-auto overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-bold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Discover Our Cream
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>

          {/* RIGHT SIDE: Image & Stats - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:block w-full"
          >
            <div className="space-y-5">
              {/* Premium Image Card with Hover Zoom */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                className="relative overflow-hidden rounded-2xl border border-amber-400/30 shadow-2xl shadow-amber-400/10"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative"
                >
                  <Image
                    src="/about.jpg"
                    alt="AS Whitening Cream Premium Product"
                    width={550}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
                
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-amber-400/30">
                  <motion.div 
                    className="flex items-center gap-2"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-amber-400 text-sm">✨</span>
                    <p className="text-white text-xs font-medium tracking-wide"
                       style={{ fontFamily: "'Inter', sans-serif" }}>
                      Premium Quality • Dermatologist Tested
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Stats Grid with Flip Animation on Hover */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1, ease: "easeOut" }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="relative overflow-hidden p-4 rounded-xl border bg-gradient-to-br from-amber-400/10 to-transparent border-amber-400/30 shadow-lg cursor-pointer"
                  >
                    <motion.div
                      className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-amber-400/20 blur-xl"
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                    <div className="flex items-center gap-2 mb-1">
                      <motion.span 
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="text-xl"
                      >
                        {s.icon}
                      </motion.span>
                      <motion.div 
                        className="text-2xl md:text-3xl font-bold text-amber-400"
                        style={{ fontFamily: "'Playfair Display', 'Space Grotesk', serif" }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      >
                        {s.value}
                      </motion.div>
                    </div>
                    <div className="text-white/60 text-[9px] tracking-wider uppercase font-semibold"
                         style={{ fontFamily: "'Inter', sans-serif" }}>
                      {s.label}
                    </div>
                    <div className="text-white/30 text-[8px] mt-1">{s.desc}</div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badge with Rating Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-amber-400/10 via-amber-400/5 to-transparent border border-amber-400/30 rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center"
                  >
                    <span className="text-amber-400 text-sm">⭐</span>
                  </motion.div>
                  <div>
                    <div className="text-white text-xs font-bold tracking-wide"
                         style={{ fontFamily: "'Inter', sans-serif" }}>
                      Trusted by 50,000+ Customers
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, idx) => (
                          <motion.span
                            key={idx}
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.5, delay: idx * 0.1, repeat: Infinity }}
                            className="text-amber-400 text-[10px]"
                          >
                            ★
                          </motion.span>
                        ))}
                      </div>
                      <span className="text-white/40 text-[9px]">4.9 / 5</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* MOBILE VERSION - Optimized */}
        <div className="lg:hidden mt-8 space-y-4">
          {/* Mobile Stats */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -3 }}
                className="relative overflow-hidden p-3 rounded-xl bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-400/30"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">{s.icon}</span>
                  <div className="text-lg font-bold text-amber-400"
                       style={{ fontFamily: "'Playfair Display', sans-serif" }}>
                    {s.value}
                  </div>
                </div>
                <div className="text-white/50 text-[8px] tracking-wider uppercase font-semibold">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 1, ease: "easeOut" }}
            className="bg-gradient-to-r from-amber-400/10 via-amber-400/5 to-transparent border border-amber-400/30 rounded-xl p-3"
          >
            <div className="flex items-center gap-2">
              <motion.div 
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center"
              >
                <span className="text-amber-400 text-sm">⭐</span>
              </motion.div>
              <div>
                <div className="text-white text-xs font-bold"
                     style={{ fontFamily: "'Inter', sans-serif" }}>
                  Trusted by 50,000+ Customers
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className="text-amber-400/80 text-[9px]">★</span>
                  ))}
                  <span className="text-white/40 text-[8px]">4.9/5</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
            className="relative overflow-hidden rounded-xl border border-amber-400/30"
          >
            <Image
              src="/about.jpg"
              alt="AS Whitening Cream"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-black/50 backdrop-blur-sm rounded-lg p-2 border border-amber-400/20">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-xs">✨</span>
                <p className="text-white text-[8px] font-medium">Premium Quality • Dermatologist Tested</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mt-8 lg:mt-12"
        />
      </div>
    </section>
  );
}