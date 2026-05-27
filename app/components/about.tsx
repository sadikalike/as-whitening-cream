'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { value: "5K+", label: "Happy Customers", gold: false, icon: "👥" },
    { value: "7 Days", label: "Visible Results", gold: true, icon: "⚡" },
    { value: "100%", label: "Natural Formula", gold: false, icon: "🌿" },
    { value: "24/7", label: "Expert Support", gold: false, icon: "💬" },
  ];

  const features = [
    { icon: "🧬", title: "Clinically Tested", desc: "Dermatologist approved formula", color: "from-blue-500/20" },
    { icon: "🌿", title: "Natural Ingredients", desc: "No harsh chemicals", color: "from-green-500/20" },
    { icon: "✨", title: "All Skin Types", desc: "Safe for every skin tone", color: "from-yellow-500/20" },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen bg-black overflow-hidden scroll-mt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,215,0,0.06),transparent_60%)]" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", damping: 30 }}
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-yellow-400/5 blur-3xl"
      />
      <motion.div
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
        }}
        transition={{ type: "spring", damping: 30 }}
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-yellow-400/3 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 py-16 md:py-32">

        {/* Top label with mobile animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center md:justify-start gap-3 mb-6"
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: "30px" } : {}}
            transition={{ duration: 0.5 }}
            className="w-8 h-px bg-yellow-400/60"
          />
          <span className="text-yellow-400/80 text-[11px] tracking-[0.3em] uppercase font-semibold">
            Our Philosophy
          </span>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: "30px" } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-8 h-px bg-yellow-400/60 hidden md:block"
          />
        </motion.div>

        {/* Main heading with mobile responsive */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.2] md:leading-[1.1] tracking-tighter mb-4 text-center md:text-left"
        >
          Science Behind
          <br />
          <span className="font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent bg-200% animate-shimmer">
            Perfect Skin
          </span>
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "60px" } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-yellow-400 to-transparent mx-auto md:mx-0 mb-8"
        />

        {/* Mobile-first grid layout */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-24 items-start">

          {/* Right side on mobile (Image) - Moving to top for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:hidden mb-6"
          >
            {/* Mobile Image Card */}
            <div className="relative overflow-hidden rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/[0.08] to-transparent">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <Image
                src="/about.jpg"
                alt="About AS Whitening Cream"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/70 backdrop-blur-md rounded-xl p-3 border border-yellow-400/30">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-base">✨</span>
                  <p className="text-white text-[11px] font-medium">Premium Quality • Dermatologist Tested</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left: text + features + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-2 lg:order-1"
          >
            <p className="text-white/60 text-sm md:text-base leading-relaxed font-light mb-3 text-center md:text-left">
              AS Whitening Cream combines advanced dermatological science with natural ingredients.
              Our formula is clinically tested, cruelty-free, and designed for all skin types.
            </p>
            <p className="text-white/60 text-sm md:text-base leading-relaxed font-light mb-8 text-center md:text-left">
              We believe everyone deserves radiant, even-toned skin without harsh chemicals.
            </p>

            {/* Feature pills - mobile optimized */}
            <div className="flex flex-col gap-3 mb-10">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3 hover:border-yellow-400/30 transition-all duration-300 cursor-pointer"
                >
                  <motion.span 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="text-2xl"
                  >
                    {f.icon}
                  </motion.span>
                  <div>
                    <div className="text-white text-sm font-medium">{f.title}</div>
                    <div className="text-white/45 text-xs">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button - mobile optimized */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('cream')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative w-full md:w-auto overflow-hidden bg-gradient-to-r from-yellow-400/10 to-transparent border border-yellow-400/40 text-yellow-400 px-8 py-4 rounded-full text-sm tracking-[0.2em] uppercase font-semibold hover:text-black transition-all duration-500"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Discover Our Cream
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-yellow-400"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>

          {/* Right: Image + Stats - Desktop version */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2 hidden lg:block"
          >
            <div className="space-y-5">
              {/* Desktop Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative overflow-hidden rounded-2xl border border-yellow-400/20"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                <Image
                  src="/about.jpg"
                  alt="About AS Whitening Cream"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-yellow-400/30">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">✨</span>
                    <p className="text-white text-xs font-medium">Premium Quality • Dermatologist Tested</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`relative overflow-hidden p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      s.gold
                        ? "bg-yellow-400/[0.06] border-yellow-400/30 hover:border-yellow-400/60"
                        : "bg-white/[0.03] border-white/10 hover:border-yellow-400/30"
                    }`}
                  >
                    {s.gold && (
                      <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400/10 rounded-full blur-xl" />
                    )}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{s.icon}</span>
                      <div className={`text-xl md:text-2xl font-light ${s.gold ? "text-yellow-400" : "text-white"}`}>
                        {s.value}
                      </div>
                    </div>
                    <div className="text-white/45 text-[9px] tracking-wider uppercase">{s.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Trust badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1 }}
                className="bg-gradient-to-r from-yellow-400/[0.08] to-transparent border border-yellow-400/20 rounded-xl p-3"
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400"
                  >
                    ⭐
                  </motion.div>
                  <div>
                    <div className="text-white text-xs font-medium">Trusted by thousands</div>
                    <div className="text-white/40 text-[9px]">4.9 / 5 average rating</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Stats Grid - Visible only on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 gap-3 mt-8 lg:hidden"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
              whileHover={{ y: -3 }}
              className={`relative overflow-hidden p-4 rounded-xl border ${
                s.gold
                  ? "bg-yellow-400/[0.06] border-yellow-400/30"
                  : "bg-white/[0.03] border-white/10"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base">{s.icon}</span>
                <div className={`text-lg font-light ${s.gold ? "text-yellow-400" : "text-white"}`}>
                  {s.value}
                </div>
              </div>
              <div className="text-white/45 text-[8px] tracking-wider uppercase">{s.label}</div>
            </motion.div>
          ))}
          
          {/* Mobile Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 1 }}
            className="col-span-2 bg-gradient-to-r from-yellow-400/[0.08] to-transparent border border-yellow-400/20 rounded-xl p-3"
          >
            <div className="flex items-center gap-2">
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-7 h-7 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400 text-xs"
              >
                ⭐
              </motion.div>
              <div>
                <div className="text-white text-[10px] font-medium">Trusted by thousands</div>
                <div className="text-white/40 text-[8px]">4.9 / 5 average rating</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent mt-12 lg:mt-24"
        />
      </div>

      {/* Add shimmer animation keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s ease infinite;
        }
      `}</style>
    </section>
  );
}