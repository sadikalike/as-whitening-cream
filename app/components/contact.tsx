'use client';
import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('✨ Thank you! We will contact you soon.');
    setForm({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: "📞", title: "Phone / WhatsApp", value: "+91-9611043858", link: "tel:+919611043858", color: "from-green-500/20" },
    { icon: "✉️", title: "Email", value: "care@aswhiteningcream.com", link: null, color: "from-blue-500/20" },
    { icon: "🕐", title: "Business Hours", value: "Monday - Saturday, 10AM - 7PM", link: null, color: "from-purple-500/20" },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-20 md:py-28 px-5 md:px-12 overflow-hidden scroll-mt-20"
    >
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
      
      {/* Animated Background Orbs */}
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
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header with modern styling */}
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
          
          {/* Left: Contact Information - Modern Cards */}
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
                        className="text-white text-base md:text-xl font-medium hover:text-yellow-400 transition-colors"
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
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex gap-3 mt-6 md:mt-8"
            >
              {['📱', '💬', '📘', '📷'].map((social, i) => (
                <motion.button
                  key={i}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg md:text-xl hover:border-yellow-400/50 hover:bg-yellow-400/10 transition-all duration-300"
                >
                  {social}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Contact Form - Modern Design */}
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
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="text-center text-white/30 text-[10px] md:text-xs mt-3"
              >
                We'll get back to you within 24 hours
              </motion.p>
            </motion.form>
          </motion.div>
        </div>

        {/* Bottom Divider */}
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