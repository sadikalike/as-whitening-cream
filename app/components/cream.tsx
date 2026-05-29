'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Cream() {
  const [imageErrors, setImageErrors] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const whatsappNumber = "918310424827";
  const whatsappMessage = "Hi, I want to buy AS Whitening Cream";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleBuyNow = () => {
    window.open(whatsappLink, '_blank');
  };

  // Fast animation variants
  const fadeUpFast = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  const fadeLeftFast = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  const fadeRightFast = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <section id="cream" className="relative py-20 md:py-28 px-5 md:px-12 bg-black overflow-hidden scroll-mt-20">
      
      {/* Static Background - No animations */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-amber-950/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-3xl" />
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-amber-400/3 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-amber-400/3 blur-3xl" />

      {/* Static Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Static Particles - No animation loop */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-amber-400/10"
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                left: `${(i * 17) % 100}%`,
                top: `${(i * 11) % 100}%`,
                opacity: 0.1
              }}
            />
          ))}
        </div>
      )}

      {/* Static Border Accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header Section - Fast animations */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            variants={fadeUpFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 md:gap-3 mb-5 md:mb-6"
          >
            <div className="w-8 md:w-10 h-px bg-gradient-to-r from-transparent to-amber-400/60" />
            <span className="text-amber-400/80 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold">
              ✨ Our Product ✨
            </span>
            <div className="w-8 md:w-10 h-px bg-gradient-to-l from-transparent to-amber-400/60" />
          </motion.div>
          
          <motion.h2 
            variants={fadeUpFast}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.05 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.2] tracking-tighter px-2"
          >
            The{" "}
            <span className="font-bold text-amber-400">
              Whitening Cream
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
            variants={fadeUpFast}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white/50 text-sm md:text-base max-w-xs md:max-w-xl mx-auto leading-relaxed px-3"
          >
            Advanced formula for radiant, even-toned skin — crafted with nature and science.
          </motion.p>
        </div>

        {/* Benefits Section - 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16">
          {benefits.map((item, i) => (
            <motion.div
              key={item.id}
              variants={fadeUpFast}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-2xl p-5 md:p-6 text-center hover:border-amber-400/40 transition-all duration-200 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200" />
              
              <div className="relative w-full h-36 sm:h-40 md:h-48 mx-auto mb-4 md:mb-5 overflow-hidden rounded-xl">
                <div className="w-full h-full transition-transform duration-300 hover:scale-105">
                  {!imageErrors[item.id] ? (
                    // eslint-disable-next-line @next/next/no-img-element
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
                </div>
              </div>
              
              <h3 className="text-white text-sm md:text-base font-semibold mb-1 md:mb-2 hover:text-amber-400 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Product + Details Section */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">

          {/* Left: Product Card */}
          <motion.div
            variants={fadeLeftFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-br from-amber-400/10 to-white/[0.02] border border-amber-400/20 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-400/5 rounded-full blur-3xl" />

            <div className="relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] mx-auto mb-4 md:mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/cream.jpg"
                alt="AS Whitening Cream"
                className="w-full h-auto object-contain drop-shadow-2xl"
                style={{ maxHeight: '280px' }}
                onError={(e) => {
                  e.currentTarget.src = '/fallback.jpg';
                }}
              />
            </div>

            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1.5 mb-3 md:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-amber-400 text-[10px] md:text-xs tracking-widest uppercase font-bold">
                Premium Formula
              </span>
            </div>

            <p className="text-white/50 text-xs md:text-sm mb-2">
              AS Whitening Cream — 50g
            </p>
            
            <p className="text-4xl sm:text-5xl md:text-5xl font-bold text-amber-400">
              ₹999
            </p>
            
            <p className="text-white/30 text-[10px] md:text-xs mt-2">Free shipping on orders above ₹999</p>
          </motion.div>

          {/* Right: Info + CTA */}
          <motion.div
            variants={fadeRightFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3 md:gap-4"
          >
            {/* 7 Day Challenge */}
            <div className="bg-gradient-to-r from-amber-400/8 to-transparent border border-amber-400/15 rounded-xl md:rounded-2xl p-4 md:p-5 transition-all duration-200 hover:border-amber-400/30">
              <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                <span className="text-lg md:text-xl">⚡</span>
                <p className="text-white font-semibold text-xs md:text-sm">
                  7 Days Challenge
                </p>
              </div>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed">
                Use twice daily — morning & night. See a visible difference in just 1 week.
              </p>
            </div>

            {/* How to Use */}
            <div className="bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 transition-all duration-200 hover:border-white/20">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="text-lg md:text-xl">📖</span>
                <p className="text-white font-semibold text-xs md:text-sm">
                  How to Use
                </p>
              </div>
              <div className="flex flex-col gap-2 md:gap-2.5">
                {steps.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-3">
                    <span className="text-amber-400/60 text-[9px] md:text-[10px] font-mono tracking-widest font-bold">{s.step}</span>
                    <div className="w-px h-3 md:h-4 bg-white/10" />
                    <span className="text-white/50 text-xs md:text-sm">
                      {s.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBuyNow}
              className="w-full relative bg-gradient-to-r from-amber-400 to-amber-500 text-black py-3 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold tracking-wide hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>📱</span>
                BUY NOW — ₹999
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
            </motion.button>

            {/* WhatsApp Contact */}
            <p className="text-center text-white/30 text-[10px] md:text-xs">
              Bulk orders:{" "}
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-400/60 hover:text-amber-400 transition-colors duration-200"
              >
                +91-8310424827
              </a>
            </p>
          </motion.div>
        </div>

        {/* Bottom Decorative Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mt-16 md:mt-24 origin-left"
        />
      </div>
    </section>
  );
}