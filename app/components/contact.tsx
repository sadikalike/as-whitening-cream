'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-gradient-to-t from-black to-gray-950 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-white/30 text-xs tracking-[0.3em] uppercase block mb-4">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Let's Talk <span className="font-bold">Skincare</span>
          </h2>
          <div className="w-16 h-px bg-white/30 mx-auto my-6" />
          <p className="text-white/50 text-base max-w-md mx-auto">
            Have questions about our products? We're here to help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium text-white mb-4">Contact Information</h3>
            <div className="space-y-4 text-white/60">
              <div>
                <p className="text-white/40 text-sm mb-1">Phone / WhatsApp</p>
                <a href="tel:+919611043858" className="text-2xl text-white hover:text-white/70 transition">
                  +91-9611043858
                </a>
              </div>
              <div>
                <p className="text-white/40 text-sm mb-1">Email</p>
                <p>care@aswhiteningcream.com</p>
              </div>
              <div>
                <p className="text-white/40 text-sm mb-1">Business Hours</p>
                <p>Monday - Saturday, 10AM - 7PM</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
              className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition"
              required
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({...form, message: e.target.value})}
              className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition"
              required
            />
            <button
              type="submit"
              className="w-full bg-white text-black px-6 py-3 text-sm font-medium tracking-wide hover:bg-white/90 transition rounded-lg"
            >
              SEND MESSAGE
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}