'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Cream() {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
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

  // WhatsApp link
  const whatsappNumber = "918310424827";
  const whatsappMessage = "Hi, I want to buy AS Whitening Cream";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleBuyNow = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="cream" className="relative py-20 md:py-28 px-5 md:px-12 bg-black overflow-hidden scroll-mt-20">

      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.012)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", damping: 30 }}
        className="absolute top-20 left-10 w-48 h-48 rounded-full bg-yellow-400/5 blur-3xl"
      />
      <motion.div
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
        }}
        transition={{ type: "spring", damping: 30 }}
        className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-yellow-400/3 blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header with mobile animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 md:gap-3 mb-5 md:mb-6"
          >
            <div className="w-6 md:w-8 h-px bg-yellow-400/60" />
            <span className="text-yellow-400/80 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-medium">
              Our Product
            </span>
            <div className="w-6 md:w-8 h-px bg-yellow-400/60" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl font-light text-white leading-tight tracking-tighter px-2"
          >
            The{" "}
            <span className="font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Whitening Cream
            </span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-px bg-yellow-400/40 mx-auto my-5 md:my-6"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/50 text-sm md:text-base max-w-xs md:max-w-xl mx-auto leading-relaxed px-3"
          >
            Advanced formula for radiant, even-toned skin — crafted with nature and science.
          </motion.p>
        </motion.div>

        {/* Benefits with Square Images - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-2xl p-5 md:p-8 text-center hover:border-yellow-400/30 transition-all duration-500 group cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Square Image */}
              <div className="relative w-full h-36 sm:h-40 md:h-48 mx-auto mb-4 md:mb-5 overflow-hidden bg-gradient-to-br from-yellow-400/20 to-transparent border border-yellow-400/20 rounded-xl group-hover:scale-105 transition-transform duration-500">
                {!imageErrors[item.id] ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(item.id)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl md:text-6xl">
                    {item.id === 'dark' && '🎯'}
                    {item.id === 'pimple' && '✨'}
                    {item.id === 'pore' && '🔬'}
                  </div>
                )}
              </div>
              
              <h3 className="text-white text-sm md:text-base font-medium mb-1 md:mb-2">{item.title}</h3>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Product + Details */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">

          {/* Left: Product card with Cream Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden bg-gradient-to-br from-yellow-400/[0.08] to-white/[0.02] border border-yellow-400/20 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-28 h-28 bg-yellow-400/5 rounded-full blur-2xl" />

            {/* Cream Image */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] mx-auto mb-4 md:mb-6"
            >
              <img
                src="/cream.jpg"
                alt="AS Whitening Cream"
                className="w-full h-full object-contain drop-shadow-2xl"
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-3 py-1.5 mb-3 md:mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-yellow-400 text-[10px] md:text-xs tracking-widest uppercase font-medium">Premium Formula</span>
            </motion.div>

            <p className="text-white/50 text-xs md:text-sm mb-2">AS Whitening Cream — 50g</p>
            <motion.p 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl font-light text-white"
            >
              ₹999
            </motion.p>
            <p className="text-white/30 text-[10px] md:text-xs mt-2">Free shipping on orders above ₹999</p>
          </motion.div>

          {/* Right: Info + CTA - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 md:gap-4"
          >
            {/* 7 day challenge */}
            <motion.div 
              whileHover={{ x: 5 }}
              className="bg-gradient-to-r from-yellow-400/[0.08] to-transparent border border-yellow-400/15 rounded-xl md:rounded-2xl p-4 md:p-5"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                <motion.span 
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-lg md:text-xl"
                >
                  ⚡
                </motion.span>
                <p className="text-white font-medium text-xs md:text-sm">7 Days Challenge</p>
              </div>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed">
                Use twice daily — morning & night. See a visible difference in just 1 week.
              </p>
            </motion.div>

            {/* How to use */}
            <motion.div 
              whileHover={{ x: 5 }}
              className="bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="text-lg md:text-xl">📖</span>
                <p className="text-white font-medium text-xs md:text-sm">How to Use</p>
              </div>
              <div className="flex flex-col gap-2 md:gap-2.5">
                {steps.map((s, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 md:gap-3"
                  >
                    <span className="text-yellow-400/60 text-[9px] md:text-[10px] font-mono tracking-widest">{s.step}</span>
                    <div className="w-px h-3 md:h-4 bg-white/10" />
                    <span className="text-white/50 text-xs md:text-sm">{s.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button - WhatsApp Link */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              animate={{ 
                boxShadow: ["0 0 0 0 rgba(234, 179, 8, 0)", "0 0 0 10px rgba(234, 179, 8, 0)", "0 0 0 0 rgba(234, 179, 8, 0)"]
              }}
              transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              onClick={handleBuyNow}
              className="w-full relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold tracking-wide hover:shadow-2xl hover:shadow-yellow-500/40 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-base">📱</span>
                BUY NOW — ₹999
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            {/* WhatsApp direct contact */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-white/30 text-[10px] md:text-xs"
            >
              Bulk orders:{" "}
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400/60 hover:text-yellow-400 transition-colors"
              >
                +91-8310424827
              </a>
            </motion.p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent mt-16 md:mt-24"
        />
      </div>
    </section>
  );
}