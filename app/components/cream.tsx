'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Cream() {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const benefits = [
    { 
      id: 'dark',
      image: "/dark.jpg",
      title: "Dark Spot Reduction", 
      desc: "Targets hyperpigmentation for even tone" 
    },
    { 
      id: 'pimple',
      image: "/pimple.jpg",
      title: "Pimple Control", 
      desc: "Prevents breakouts and reduces acne" 
    },
    { 
      id: 'pore',
      image: "/pore.jpg",
      title: "Pore Minimizing", 
      desc: "Refines skin texture and minimizes pores" 
    },
  ];

  const steps = [
    { step: "01", text: "Cleanse your face thoroughly" },
    { step: "02", text: "Apply pea-sized amount" },
    { step: "03", text: "Massage gently in circles" },
    { step: "04", text: "Use morning & night daily" },
  ];

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const whatsappNumber = "918310424827";
  const whatsappMessage = "Hi, I want to buy AS Whitening Cream";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleBuyNow = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="cream" className="relative py-20 md:py-28 px-5 md:px-12 bg-black overflow-hidden scroll-mt-20">
      {/* ========== PREMIUM CREAM-INSPIRED BACKGROUND ========== */}
      
      {/* Main Gradient - Soft Cream & Gold */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-amber-950/20" />
      
      {/* Soft Radial Glows */}
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
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-amber-400/3 blur-3xl"
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
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-amber-400/3 blur-3xl"
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

      {/* Subtle Grid Pattern - Premium Look */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Gentle Floating Particles - Cream Inspired */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-amber-400/15 to-amber-400/5"
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                left: `${(i * 17) % 100}%`,
                top: `${(i * 11) % 100}%`,
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

      <div className="relative z-10 max-w-6xl mx-auto">

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
              ✨ Our Product ✨
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
            The{" "}
            <span className="font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
              Whitening Cream
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
            className="text-white/50 text-sm md:text-base max-w-xs md:max-w-xl mx-auto leading-relaxed px-3"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Advanced formula for radiant, even-toned skin — crafted with nature and science.
          </motion.p>
        </motion.div>

        {/* Benefits Section - 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-2xl p-5 md:p-6 text-center hover:border-amber-400/40 transition-all duration-500 group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image Container */}
              <div className="relative w-full h-36 sm:h-40 md:h-48 mx-auto mb-4 md:mb-5 overflow-hidden rounded-xl">
                <motion.div 
                  className="w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {!imageErrors[item.id] ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(item.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl md:text-5xl bg-gradient-to-br from-amber-400/20 to-transparent">
                      {item.id === 'dark' && '🎯'}
                      {item.id === 'pimple' && '✨'}
                      {item.id === 'pore' && '🔬'}
                    </div>
                  )}
                </motion.div>
              </div>
              
              <h3 className="text-white text-sm md:text-base font-semibold mb-1 md:mb-2 group-hover:text-amber-400 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}>
                {item.title}
              </h3>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed"
                 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Product + Details Section */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">

          {/* Left: Product Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden bg-gradient-to-br from-amber-400/10 to-white/[0.02] border border-amber-400/20 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-400/5 rounded-full blur-3xl" />

            {/* Cream Image with Animation */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] mx-auto mb-4 md:mb-6"
            >
              <img
                src="/cream.jpg"
                alt="AS Whitening Cream"
                className="w-full h-auto object-contain drop-shadow-2xl"
                style={{ 
                  background: 'transparent',
                  maxHeight: '280px'
                }}
                onError={(e) => {
                  console.error('Cream image failed to load');
                  e.currentTarget.src = '/fallback.jpg';
                }}
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1.5 mb-3 md:mb-4"
            >
              <motion.span 
                className="w-1.5 h-1.5 rounded-full bg-amber-400"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
              <span className="text-amber-400 text-[10px] md:text-xs tracking-widest uppercase font-bold"
                    style={{ fontFamily: "'Inter', sans-serif" }}>
                Premium Formula
              </span>
            </motion.div>

            <p className="text-white/50 text-xs md:text-sm mb-2"
               style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              AS Whitening Cream — 50g
            </p>
            
            <motion.p 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5, type: "spring" }}
              className="text-4xl sm:text-5xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text"
              style={{ fontFamily: "'Playfair Display', 'Space Grotesk', serif" }}
            >
              ₹999
            </motion.p>
            
            <p className="text-white/30 text-[10px] md:text-xs mt-2">Free shipping on orders above ₹999</p>
          </motion.div>

          {/* Right: Info + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 md:gap-4"
          >
            {/* 7 Day Challenge */}
            <motion.div 
              whileHover={{ x: 8 }}
              className="bg-gradient-to-r from-amber-400/8 to-transparent border border-amber-400/15 rounded-xl md:rounded-2xl p-4 md:p-5"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                <motion.span 
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-lg md:text-xl"
                >
                  ⚡
                </motion.span>
                <p className="text-white font-semibold text-xs md:text-sm"
                   style={{ fontFamily: "'Inter', sans-serif" }}>
                  7 Days Challenge
                </p>
              </div>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed"
                 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                Use twice daily — morning & night. See a visible difference in just 1 week.
              </p>
            </motion.div>

            {/* How to Use */}
            <motion.div 
              whileHover={{ x: 8 }}
              className="bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="text-lg md:text-xl">📖</span>
                <p className="text-white font-semibold text-xs md:text-sm"
                   style={{ fontFamily: "'Inter', sans-serif" }}>
                  How to Use
                </p>
              </div>
              <div className="flex flex-col gap-2 md:gap-2.5">
                {steps.map((s, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-2 md:gap-3"
                  >
                    <span className="text-amber-400/60 text-[9px] md:text-[10px] font-mono tracking-widest font-bold">{s.step}</span>
                    <div className="w-px h-3 md:h-4 bg-white/10" />
                    <span className="text-white/50 text-xs md:text-sm"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                      {s.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button with Premium Animation */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              animate={{ 
                boxShadow: ["0 0 0 0 rgba(245,158,11,0)", "0 0 0 8px rgba(245,158,11,0.2)", "0 0 0 0 rgba(245,158,11,0)"]
              }}
              transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              onClick={handleBuyNow}
              className="w-full relative overflow-hidden bg-gradient-to-r from-amber-400 to-amber-500 text-black py-3 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold tracking-wide hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300"
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
                <span className="text-base">📱</span>
                BUY NOW — ₹999
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            {/* WhatsApp Contact */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center text-white/30 text-[10px] md:text-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Bulk orders:{" "}
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-400/60 hover:text-amber-400 transition-colors"
              >
                +91-8310424827
              </a>
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mt-16 md:mt-24"
        />
      </div>
    </section>
  );
}