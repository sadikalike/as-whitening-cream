'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setShowThankYou(true);
    setForm({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  const emailAddress = "alikesaheed17@gmail.com";
  const instagramLink = "https://www.instagram.com/aswhitening_store";
  const whatsappNumber = "918310424827";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const contactInfo = [
    { icon: "📞", title: "Phone / WhatsApp", value: "+91-8310424827", link: whatsappLink, color: "from-green-500/20" },
    { icon: "✉️", title: "Email", value: emailAddress, link: `mailto:${emailAddress}`, color: "from-blue-500/20" },
    { icon: "🕐", title: "Business Hours", value: "Monday - Saturday, 10AM - 7PM", link: null, color: "from-purple-500/20" },
  ];

  const socialLinks = [
    { icon: "💬", link: whatsappLink, label: "WhatsApp", bg: "from-green-500/20" },
    { icon: "📷", link: instagramLink, label: "Instagram", bg: "from-pink-500/20" },
    { icon: "✉️", link: `mailto:${emailAddress}`, label: "Email", bg: "from-blue-500/20" },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-20 md:py-28 px-5 md:px-12 bg-black overflow-hidden scroll-mt-20"
    >
      {/* Static Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-amber-950/15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-3xl" />
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-amber-400/3 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-amber-400/3 blur-3xl" />

      {/* Static Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Static Particles */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-amber-400/10"
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                left: `${(i * 19) % 100}%`,
                top: `${(i * 13) % 100}%`,
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 md:gap-3 mb-5 md:mb-6"
          >
            <div className="w-8 md:w-10 h-px bg-gradient-to-r from-transparent to-amber-400/60" />
            <span className="text-amber-400/80 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold">
              ✨ Get In Touch ✨
            </span>
            <div className="w-8 md:w-10 h-px bg-gradient-to-l from-transparent to-amber-400/60" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.2] tracking-tighter mb-4"
          >
            Let's Talk{" "}
            <span className="font-bold text-amber-400">
              Skincare
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white/50 text-sm md:text-base max-w-md mx-auto leading-relaxed px-3"
          >
            Have questions about our products? We're here to help you achieve perfect skin.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-5"
          >
            <h3 className="text-white text-lg md:text-xl font-semibold mb-4 md:mb-6 flex items-center gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-amber-400 to-transparent" />
              Contact Information
            </h3>
            
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                className={`relative overflow-hidden bg-gradient-to-r ${item.color} to-transparent border border-white/10 rounded-2xl p-5 md:p-6 hover:border-amber-400/40 transition-all duration-200 cursor-pointer`}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="text-2xl md:text-3xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs md:text-sm mb-1 tracking-wide font-medium">
                      {item.title}
                    </p>
                    {item.link ? (
                      <a 
                        href={item.link}
                        target={item.title === "Instagram" ? "_blank" : "_self"}
                        rel={item.title === "Instagram" ? "noopener noreferrer" : ""}
                        className="text-white text-sm md:text-base font-medium hover:text-amber-400 transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm md:text-base">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              viewport={{ once: true }}
              className="flex gap-4 mt-6 md:mt-8"
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target={social.label === "Instagram" ? "_blank" : "_self"}
                  rel={social.label === "Instagram" ? "noopener noreferrer" : ""}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative overflow-hidden w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${social.bg} to-transparent border border-white/20 flex items-center justify-center text-white hover:border-amber-400/60 hover:text-amber-400 transition-all duration-200 group`}
                  title={social.label}
                >
                  <span className="text-xl md:text-2xl">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-4 md:mb-6 flex items-center gap-2">
                <div className="w-8 h-px bg-gradient-to-r from-amber-400 to-transparent" />
                Send us a Message
              </h3>
              
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                className="w-full p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-200"
                required
              />
              
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                className="w-full p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-200"
                required
              />
              
              <textarea
                rows={4}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                className="w-full p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition-all duration-200 resize-none"
                required
              />
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-black py-3 md:py-4 rounded-xl text-sm md:text-base font-bold tracking-wide hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    SENDING...
                  </div>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    SEND MESSAGE
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Thank You Popup */}
        <AnimatePresence>
          {showThankYou && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
            >
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2">
                <span className="text-xl">✅</span>
                <span className="font-medium">Thank you! We'll contact you soon.</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mt-16 md:mt-20" />
      </div>
    </section>
  );
}