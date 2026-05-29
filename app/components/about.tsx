'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen bg-black overflow-hidden scroll-mt-20"
    >
      {/* Static backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-amber-900/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-400/5 blur-3xl pointer-events-none" />

      {/* Particles — only desktop */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-amber-400/10"
              initial={{ opacity: 0, y: 0 }}
              animate={{ 
                opacity: [0, 0.15, 0],
                y: [0, -40, -80]
              }}
              transition={{
                duration: 6,
                delay: i * 1,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                left: `${(i * 15 + 10) % 90}%`,
                top: `${(i * 12 + 20) % 100}%`,
                willChange: 'transform'
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 py-16 md:py-28">

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center md:justify-start gap-3 mb-6"
        >
          <div className="w-[50px] h-px bg-gradient-to-r from-amber-400 to-transparent" />
          <span className="text-amber-400/70 text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-bold">
            ✨ Our Philosophy ✨
          </span>
          <div className="w-[50px] h-px bg-gradient-to-l from-amber-400 to-transparent hidden md:block" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.2] md:leading-[1.1] tracking-tighter mb-4 text-center md:text-left"
        >
          Science Behind
          <br />
          <span className="font-bold text-amber-400 inline-block">
            Perfect Skin
          </span>
        </motion.h2>

        {/* Underline */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: "100px", opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="h-px bg-gradient-to-r from-amber-400 via-amber-400/50 to-transparent mx-auto md:mx-0 mb-8 md:mb-10"
        />

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left Column */}
          <div className="w-full">
            <motion.p
              variants={fadeLeft}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="text-white/60 text-sm md:text-base leading-relaxed font-light mb-4 text-center md:text-left"
            >
              AS Whitening Cream combines advanced dermatological science with nature's finest ingredients.
              Our formula is clinically tested, cruelty-free, and designed for all skin types.
            </motion.p>
            
            <motion.p
              variants={fadeLeft}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="text-white/50 text-sm md:text-base leading-relaxed font-light mb-6 text-center md:text-left"
            >
              We believe everyone deserves radiant, even-toned skin without harsh chemicals.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit}
                  variants={fadeLeft}
                  className="flex items-center gap-2 group cursor-pointer"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60 group-hover:bg-amber-400 transition-all duration-150" />
                  <span className="text-white/50 text-xs md:text-sm font-light group-hover:text-white/70 transition-colors duration-150">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Features */}
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-3 mb-8"
            >
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeLeft}
                  whileHover={{ x: 5, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="group flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 hover:border-amber-400/40 hover:bg-amber-400/[0.05] transition-all duration-150 cursor-pointer"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-150">
                    {f.icon}
                  </span>
                  <div>
                    <div className="text-white text-sm font-semibold tracking-wide group-hover:text-amber-400 transition-colors duration-150">
                      {f.title}
                    </div>
                    <div className="text-white/40 text-xs mt-0.5">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Button */}
            <motion.button
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.35, delay: 0.25 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('cream')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative w-full md:w-auto bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-bold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-150"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Discover Our Cream
                <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
              </span>
            </motion.button>
          </div>

          {/* Right Column - Desktop */}
          <div className="hidden lg:block w-full">
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="space-y-5"
            >
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl border border-amber-400/30 group">
                <div className="overflow-hidden">
                  <Image
                    src="/about.jpg"
                    alt="AS Whitening Cream Premium Product"
                    width={550}
                    height={450}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-amber-400/30">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 text-sm">✨</span>
                    <p className="text-white text-xs font-medium tracking-wide">
                      Premium Quality • Dermatologist Tested
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <motion.div
                variants={staggerChildren}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-2 gap-3"
              >
                {stats.map((s) => (
                  <motion.div
                    key={s.label}
                    variants={fadeRight}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="relative overflow-hidden p-4 rounded-xl border bg-gradient-to-br from-amber-400/10 to-transparent border-amber-400/30 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{s.icon}</span>
                      <div className="text-2xl md:text-3xl font-bold text-amber-400">
                        {s.value}
                      </div>
                    </div>
                    <div className="text-white/60 text-[9px] tracking-wider uppercase font-semibold">
                      {s.label}
                    </div>
                    <div className="text-white/30 text-[8px] mt-1">{s.desc}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                variants={fadeRight}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.35, delay: 0.25 }}
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-r from-amber-400/10 via-amber-400/5 to-transparent border border-amber-400/30 rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center">
                    <span className="text-amber-400 text-sm">⭐</span>
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold tracking-wide">
                      Trusted by 50,000+ Customers
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, idx) => (
                          <span key={idx} className="text-amber-400 text-[10px]">★</span>
                        ))}
                      </div>
                      <span className="text-white/40 text-[9px]">4.9 / 5</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="lg:hidden mt-8 space-y-4">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-3"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="relative overflow-hidden p-3 rounded-xl bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-400/30"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">{s.icon}</span>
                  <div className="text-lg font-bold text-amber-400">
                    {s.value}
                  </div>
                </div>
                <div className="text-white/50 text-[8px] tracking-wider uppercase font-semibold">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="bg-gradient-to-r from-amber-400/10 via-amber-400/5 to-transparent border border-amber-400/30 rounded-xl p-3"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center">
                <span className="text-amber-400 text-sm">⭐</span>
              </div>
              <div>
                <div className="text-white text-xs font-bold">Trusted by 50,000+ Customers</div>
                <div className="flex items-center gap-1 mt-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className="text-amber-400/80 text-[9px]">★</span>
                  ))}
                  <span className="text-white/40 text-[8px]">4.9/5</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="relative overflow-hidden rounded-xl border border-amber-400/30"
          >
            <Image
              src="/about.jpg"
              alt="AS Whitening Cream"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-black/50 backdrop-blur-sm rounded-lg p-2 border border-amber-400/20">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-xs">✨</span>
                <p className="text-white text-[8px] font-medium">Premium Quality • Dermatologist Tested</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mt-8 lg:mt-12 origin-left"
        />
      </div>
    </section>
  );
}