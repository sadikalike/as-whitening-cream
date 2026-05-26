'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update scroll progress
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (winScroll / height) * 100;
      setScrollProgress(progress);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'cream', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'cream', label: 'Cream' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-gold-400/20 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <motion.button 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => scrollToSection('home')} 
              className="group relative cursor-pointer z-50"
            >
              <div className="relative">
                <span className="text-white text-xl md:text-2xl font-light tracking-[0.3em]">
                  AS
                  <span className="font-bold bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                    WHITENING
                  </span>
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400/50 group-hover:w-full transition-all duration-300" />
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-5 py-2 text-sm tracking-wide transition-all duration-300 rounded-full ${
                    activeSection === item.id
                      ? 'text-gold-400'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-400"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <div className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 ${
                    activeSection === item.id ? 'bg-gold-400/5' : 'hover:bg-white/5'
                  }`} />
                </motion.button>
              ))}
            </div>

            {/* Shop Button - Desktop */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('cream')}
              className="hidden md:flex items-center gap-2 bg-gold-400 text-black px-6 py-2.5 rounded-full text-sm font-bold tracking-wide hover:bg-gold-500 hover:shadow-lg hover:shadow-gold-500/50 transition-all duration-300"
            >
              <span>SHOP NOW</span>
              <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden relative w-8 h-8 focus:outline-none z-50"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6">
                <span className={`block h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1.5' : ''
                }`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 my-1.5 ${
                  isOpen ? 'opacity-0' : ''
                }`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`} />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Progress Bar on Scroll - FIXED: using state instead of direct window access */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gold-400 to-gold-600"
          style={{
            width: `${scrollProgress}%`
          }}
        />
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 md:hidden"
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-20 left-0 right-0 z-40 md:hidden"
            >
              <div className="mx-4 p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="space-y-2">
                  {navItems.map((item, i) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gold-400/10 text-gold-400 border border-gold-400/30'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className="text-base font-medium tracking-wide">{item.label}</span>
                    </motion.button>
                  ))}
                  
                  {/* Mobile Shop Button */}
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    onClick={() => scrollToSection('cream')}
                    className="w-full mt-4 bg-gold-400 text-black px-5 py-4 rounded-xl text-base font-bold tracking-wide hover:bg-gold-500 transition-all duration-300"
                  >
                    SHOP NOW →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}