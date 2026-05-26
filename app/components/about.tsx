'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const stats = [
    { value: "50K+", label: "Happy Customers", gold: false },
    { value: "7 Days", label: "Visible Results", gold: true },
    { value: "100%", label: "Natural Formula", gold: false },
    { value: "24/7", label: "Expert Support", gold: false },
  ];

  const features = [
    { icon: "🧬", title: "Clinically Tested", desc: "Dermatologist approved formula" },
    { icon: "🌿", title: "Natural Ingredients", desc: "No harsh chemicals" },
    { icon: "✨", title: "All Skin Types", desc: "Safe for every skin tone" },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen bg-black overflow-hidden scroll-mt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,215,0,0.04),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.012)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-yellow-400/60" />
          <span className="text-yellow-400/80 text-[10px] tracking-[0.35em] uppercase font-medium">
            Our Philosophy
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tighter mb-6"
        >
          Science Behind
          <br />
          <span className="font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
            Perfect Skin
          </span>
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "60px" } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-px bg-yellow-400/50 mb-8"
        />

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: text + features + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-white/55 text-base md:text-lg leading-relaxed font-light mb-4">
              AS Whitening Cream combines advanced dermatological science with natural ingredients.
              Our formula is clinically tested, cruelty-free, and designed for all skin types.
            </p>
            <p className="text-white/55 text-base md:text-lg leading-relaxed font-light mb-10">
              We believe everyone deserves radiant, even-toned skin without harsh chemicals.
            </p>

            {/* Feature pills */}
            <div className="flex flex-col gap-3 mb-12">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 bg-white/[0.03] border border-white/8 rounded-2xl px-5 py-4 hover:border-yellow-400/20 transition-all duration-300"
                >
                  <span className="text-2xl">{f.icon}</span>
                  <div>
                    <div className="text-white text-sm font-medium">{f.title}</div>
                    <div className="text-white/40 text-xs">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('cream')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden bg-transparent border border-yellow-400/50 text-yellow-400 px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase font-medium hover:text-black transition-colors duration-500"
            >
              <span className="relative z-10">Discover Our Cream</span>
              <motion.div
                className="absolute inset-0 bg-yellow-400"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>

          {/* Right: stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative overflow-hidden p-7 rounded-2xl border transition-all duration-500 ${
                  s.gold
                    ? "bg-yellow-400/[0.04] border-yellow-400/25 hover:border-yellow-400/50"
                    : "bg-white/[0.03] border-white/8 hover:border-yellow-400/25"
                }`}
              >
                {s.gold && (
                  <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/10 rounded-full blur-2xl" />
                )}
                <div className={`text-3xl md:text-4xl font-light mb-2 ${s.gold ? "text-yellow-400" : "text-white"}`}>
                  {s.value}
                </div>
                <div className="text-white/45 text-xs tracking-widest uppercase">{s.label}</div>
              </motion.div>
            ))}

            {/* Wide bottom card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="col-span-2 bg-gradient-to-r from-yellow-400/[0.06] to-transparent border border-yellow-400/15 rounded-2xl p-7 hover:border-yellow-400/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-400/15 flex items-center justify-center text-yellow-400 text-lg">
                  ⭐
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Trusted by thousands</div>
                  <div className="text-white/40 text-xs mt-0.5">4.9 / 5 average rating across all reviews</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent mt-24"
        />
      </div>
    </section>
  );
}