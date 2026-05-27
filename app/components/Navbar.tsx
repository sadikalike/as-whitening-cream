
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-2xl border-b border-yellow-400/20 shadow-2xl shadow-black/50' 
          : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent backdrop-blur-sm'
      }`}>
        
        {/* Animated gradient background on scroll */}
        <motion.div 
          className="absolute inset-0 opacity-0 pointer-events-none"
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo with transparent background */}
            <motion.button 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              onClick={() => scrollToSection('home')} 
              className="group relative cursor-pointer z-50"
            >
              <div className="relative">
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                  priority
                  style={{ 
                    backgroundColor: 'transparent',
                    mixBlendMode: 'normal'
                  }}
                />
                
                {/* Premium underline animation */}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-yellow-400/0 blur-xl group-hover:bg-yellow-400/5 transition-all duration-500 rounded-full -z-10" />
              </div>
            </motion.button>

            {/* Desktop Navigation - Without Icons */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 rounded-full ${
                    activeSection === item.id
                      ? 'text-yellow-400'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {/* Premium background effect */}
                  <motion.div 
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'bg-yellow-400/10' 
                        : hoveredItem === item.id 
                          ? 'bg-white/5' 
                          : ''
                    }`}
                    initial={false}
                    animate={{ scale: activeSection === item.id ? 1 : 0.9 }}
                  />
                  
                  <span className="relative z-10">
                    {item.label}
                  </span>
                  
                  {/* Active indicator - Premium dot */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50"
                      transition={{ duration: 0.3, type: "spring", stiffness: 500 }}
                    />
                  )}
                  
                  {/* Hover line effect */}
                  <motion.div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-400 to-yellow-400/0"
                    initial={{ width: "0%" }}
                    animate={{ width: hoveredItem === item.id ? "60%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Premium Shop Button - Desktop */}
            <motion.button
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('cream')}
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black px-8 py-2.5 rounded-full text-sm font-bold tracking-wide hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              
              <span className="relative z-10">SHOP NOW</span>
              <motion.span 
                className="relative z-10 text-lg"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.button>

            {/* Premium Mobile Menu Button */}
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden relative w-10 h-10 focus:outline-none z-50 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5">
                <motion.span 
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                  className={`block h-0.5 bg-gradient-to-r from-yellow-400 to-white transition-all duration-300`}
                />
                <motion.span 
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  className={`block h-0.5 bg-gradient-to-r from-yellow-400 to-white transition-all duration-300 my-1.5`}
                />
                <motion.span 
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                  className={`block h-0.5 bg-gradient-to-r from-yellow-400 to-white transition-all duration-300`}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Premium Progress Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"
          style={{ width: `${scrollProgress}%` }}
          initial={false}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
        
        {/* Progress bar glow effect */}
        <div 
          className="absolute bottom-0 left-0 h-[2px] bg-yellow-400/30 blur-sm"
          style={{ width: `${scrollProgress}%` }}
        />
      </nav>

      {/* Premium Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden"
            />
            
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              className="fixed top-20 left-0 right-0 z-40 md:hidden px-4"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 shadow-2xl">
                <div className="space-y-3">
                  {navItems.map((item, i) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ delay: i * 0.05, type: "spring", stiffness: 400 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-6 py-4 rounded-xl transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-yellow-400/20 to-yellow-500/10 text-yellow-400 border border-yellow-400/30 shadow-lg shadow-yellow-400/20'
                          : 'text-white/80 hover:bg-white/10 hover:text-white hover:translate-x-2'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-base font-medium tracking-wide">{item.label}</span>
                        {activeSection === item.id && (
                          <motion.div 
                            className="w-1.5 h-1.5 rounded-full bg-yellow-400"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          />
                        )}
                      </div>
                    </motion.button>
                  ))}
                  
                  {/* Premium Mobile Shop Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => scrollToSection('cream')}
                    className="w-full mt-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-4 rounded-xl text-base font-bold tracking-wide hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <span className="relative z-10">SHOP NOW →</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Subtle floating particles effect when scrolled */}
      {scrolled && (
        <div className="fixed top-20 left-0 right-0 pointer-events-none z-40">
          <div className="absolute top-0 left-1/4 w-1 h-1 bg-yellow-400/30 rounded-full animate-ping" />
          <div className="absolute top-2 right-1/3 w-0.5 h-0.5 bg-yellow-400/20 rounded-full animate-pulse" />
          <div className="absolute top-4 left-1/3 w-0.5 h-0.5 bg-yellow-400/25 rounded-full animate-pulse delay-500" />
        </div>
      )}
    </>
  );
}