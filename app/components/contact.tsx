'use client';
import { useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
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
    { 
      icon: "📞", 
      title: "Phone / WhatsApp", 
      value: "+91-8310424827", 
      link: whatsappLink, 
      color: "from-green-500/20" 
    },
    { 
      icon: "✉️", 
      title: "Email", 
      value: emailAddress, 
      link: `mailto:${emailAddress}`, 
      color: "from-blue-500/20" 
    },
    { 
      icon: "🕐", 
      title: "Business Hours", 
      value: "Monday - Saturday, 10AM - 7PM", 
      link: null, 
      color: "from-purple-500/20" 
    },
  ];

  const socialLinks = [
    { 
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.167 2.132-.646c.999.573 2.052.858 3.199.859 3.18 0 5.767-2.587 5.768-5.766.001-3.18-2.586-5.767-5.768-5.767zm3.392 8.244c-.165.467-.551.837-1.004.978-.453.142-.945.188-1.438.154-.521-.038-.9-.156-1.479-.391-.68-.276-1.277-.766-1.737-1.374-.46-.609-.717-1.305-.743-2.033-.012-.369.038-.739.15-1.095.111-.356.275-.69.49-.992.43-.602 1.058-1.035 1.757-1.27.699-.236 1.45-.285 2.177-.156.572.102 1.09.346 1.497.699.407.353.666.778.765 1.229.088.4.06.815-.08 1.199-.14.385-.379.72-.683.969l.509-1.902c-.421-.168-.864-.252-1.312-.246-.388.006-.771.083-1.128.228-.357.144-.679.362-.946.638-.267.277-.471.608-.6.971-.129.362-.18.749-.15 1.134.029.385.117.756.26 1.101.143.345.339.658.577.921.239.263.515.471.815.616.301.144.622.223.948.23.536.013 1.063-.14 1.506-.438l-2.046.676z"/>
        </svg>
      ),
      link: whatsappLink, 
      label: "WhatsApp",
      bg: "from-green-500/20"
    },
    { 
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      link: instagramLink, 
      label: "Instagram",
      bg: "from-pink-500/20"
    },
    { 
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      link: `mailto:${emailAddress}`, 
      label: "Email",
      bg: "from-blue-500/20"
    },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-20 md:py-28 px-5 md:px-12 overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
      
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
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

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
              Get In Touch
            </span>
            <div className="w-8 md:w-12 h-px bg-gradient-to-l from-transparent via-yellow-400/60 to-yellow-400/60" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-3 md:mb-4"
          >
            Let's Talk{" "}
            <span className="font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Skincare
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
            className="text-white/50 text-sm md:text-base max-w-md mx-auto leading-relaxed px-3"
          >
            Have questions about our products? We're here to help you achieve perfect skin.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 md:space-y-5"
          >
            <h3 className="text-white text-lg md:text-xl font-medium mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-6 h-px bg-yellow-400/50" />
              Contact Information
            </h3>
            
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 5, scale: 1.02 }}
                className={`relative overflow-hidden bg-gradient-to-r ${item.color} to-transparent border border-white/10 rounded-2xl p-5 md:p-6 hover:border-yellow-400/30 transition-all duration-300 group cursor-pointer`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-start gap-3 md:gap-4">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="text-2xl md:text-3xl"
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <p className="text-white/40 text-xs md:text-sm mb-1 tracking-wide">{item.title}</p>
                    {item.link ? (
                      <a 
                        href={item.link}
                        target={item.title === "Instagram" ? "_blank" : "_self"}
                        rel={item.title === "Instagram" ? "noopener noreferrer" : ""}
                        className="text-white text-sm md:text-base font-medium hover:text-yellow-400 transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm md:text-base">{item.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Social Icons - WhatsApp, Instagram, Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex gap-3 mt-6 md:mt-8"
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target={social.label === "Instagram" ? "_blank" : "_self"}
                  rel={social.label === "Instagram" ? "noopener noreferrer" : ""}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative overflow-hidden w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${social.bg} to-transparent border border-white/20 flex items-center justify-center text-white hover:border-yellow-400/60 hover:text-yellow-400 transition-all duration-300 group`}
                  title={social.label}
                >
                  <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-all duration-300 rounded-full" />
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.form
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-5"
            >
              <h3 className="text-white text-lg md:text-xl font-medium mb-4 md:mb-6 flex items-center gap-2">
                <span className="w-6 h-px bg-yellow-400/50" />
                Send us a Message
              </h3>
              
              {['name', 'email', 'message'].map((field, i) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="relative group"
                >
                  {field !== 'message' ? (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      placeholder={field === 'name' ? 'Your Name' : 'Your Email'}
                      value={form[field as keyof typeof form] as string}
                      onChange={(e) => setForm({...form, [field]: e.target.value})}
                      className="w-full p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:bg-white/10 transition-all duration-300"
                      required
                    />
                  ) : (
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      value={form.message}
                      onChange={(e) => setForm({...form, message: e.target.value})}
                      className="w-full p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:bg-white/10 transition-all duration-300 resize-none"
                      required
                    />
                  )}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/0 to-transparent group-hover:from-yellow-400/5 transition-all duration-500 pointer-events-none" />
                </motion.div>
              ))}
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={!isSubmitting ? {
                  boxShadow: ["0 0 0 0 rgba(234, 179, 8, 0)", "0 0 0 5px rgba(234, 179, 8, 0.2)", "0 0 0 0 rgba(234, 179, 8, 0)"]
                } : {}}
                transition={{ repeat: Infinity, duration: 2 }}
                className="relative w-full overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 md:py-4 rounded-xl text-sm md:text-base font-bold tracking-wide hover:shadow-2xl hover:shadow-yellow-500/40 transition-all duration-300 disabled:opacity-70"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                      />
                      SENDING...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </>
                  )}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        {/* Thank You Message Popup */}
        <AnimatePresence>
          {showThankYou && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
            >
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2">
                <span className="text-xl">✅</span>
                <span className="font-medium">Thank you! We'll contact you soon.</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent mt-16 md:mt-20"
        />
      </div>
    </section>
  );
}