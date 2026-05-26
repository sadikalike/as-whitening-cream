'use client';
import { motion } from 'framer-motion';

export default function Cream() {
  const benefits = [
    { icon: "🎯", title: "Dark Spot Reduction", desc: "Targets hyperpigmentation for even tone" },
    { icon: "✨", title: "Pimple Control", desc: "Prevents breakouts and reduces acne" },
    { icon: "🔬", title: "Pore Minimizing", desc: "Refines skin texture and minimizes pores" },
  ];

  const steps = [
    { step: "01", text: "Cleanse your face thoroughly" },
    { step: "02", text: "Apply pea-sized amount" },
    { step: "03", text: "Massage gently in circles" },
    { step: "04", text: "Use morning & night daily" },
  ];

  return (
    <section id="cream" className="relative py-28 px-6 md:px-12 bg-black overflow-hidden scroll-mt-20">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.012)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-yellow-400/60" />
            <span className="text-yellow-400/80 text-[10px] tracking-[0.35em] uppercase font-medium">
              Our Product
            </span>
            <div className="w-8 h-px bg-yellow-400/60" />
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-white leading-tight tracking-tighter">
            The{" "}
            <span className="font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Whitening Cream
            </span>
          </h2>
          <div className="w-16 h-px bg-yellow-400/40 mx-auto my-6" />
          <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            Advanced formula for radiant, even-toned skin — crafted with nature and science.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden bg-white/[0.03] border border-white/8 rounded-2xl p-8 text-center hover:border-yellow-400/25 transition-all duration-500 group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-4xl mb-5">{item.icon}</div>
              <h3 className="text-white text-base font-medium mb-2">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Product + Details */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* Left: Product card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-br from-yellow-400/[0.06] to-white/[0.02] border border-yellow-400/15 rounded-3xl p-10 flex flex-col items-center justify-center text-center"
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-400/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl" />

            <span className="text-8xl mb-6 block">🧴</span>

            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-yellow-400 text-xs tracking-widest uppercase font-medium">Premium Formula</span>
            </div>

            <p className="text-white/50 text-sm mb-3">AS Whitening Cream — 50g</p>
            <p className="text-5xl font-light text-white">₹499</p>
            <p className="text-white/30 text-xs mt-2">Free shipping on orders above ₹999</p>
          </motion.div>

          {/* Right: Info + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {/* 7 day challenge */}
            <div className="bg-gradient-to-r from-yellow-400/[0.07] to-transparent border border-yellow-400/15 rounded-2xl p-5 hover:border-yellow-400/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">⚡</span>
                <p className="text-white font-medium text-sm">7 Days Challenge</p>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Use twice daily — morning & night. See a visible difference in just 1 week.
              </p>
            </div>

            {/* How to use */}
            <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-5 hover:border-yellow-400/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">📖</span>
                <p className="text-white font-medium text-sm">How to Use</p>
              </div>
              <div className="flex flex-col gap-2.5">
                {steps.map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-yellow-400/60 text-[10px] font-mono tracking-widest">{s.step}</span>
                    <div className="w-px h-4 bg-white/10" />
                    <span className="text-white/50 text-sm">{s.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-4 rounded-2xl text-sm font-bold tracking-wide hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300"
            >
              BUY NOW — ₹499
            </motion.button>

            <p className="text-center text-white/30 text-xs">
              Bulk orders:{" "}
              <a href="tel:+919611043858" className="text-yellow-400/60 hover:text-yellow-400 transition-colors">
                +91-9611043858
              </a>
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent mt-24"
        />
      </div>
    </section>
  );
}