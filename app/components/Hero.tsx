"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play().catch(err => {
        console.error("Video play failed:", err);
        setError(true);
      });
    };

    video.addEventListener('canplaythrough', playVideo);
    video.addEventListener('loadeddata', playVideo);
    playVideo();

    return () => {
      video.removeEventListener('canplaythrough', playVideo);
      video.removeEventListener('loadeddata', playVideo);
    };
  }, []);

  const [particles, setParticles] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 8 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section id="home" className="relative h-[100vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
              <div className="text-white/50 text-center p-4">
                <p className="text-amber-400 text-sm">⚠️ Video not found</p>
                <p className="text-xs mt-2">Path: /public/images/video.mp4</p>
              </div>
            </div>
          )}
          
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ objectPosition: "center center" }}
            onError={() => setError(true)}
          >
            <source src="/images/video.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0" />

        {/* TOP: Badge + Heading + Subtext */}
        <div
          className="absolute left-0 right-0 z-10 flex flex-col items-center text-center px-4 gap-2"
          style={{ top: "88px" }}
        >
          {/* Badge - Inter Font */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/10"
          >
            <span className="w-1 h-1 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-400/90 text-[10px] tracking-[0.3em] uppercase font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}>
              LUXURY SKINCARE
            </span>
          </motion.div>

          {/* Main Heading - Premium Sans Serif (Space Grotesk / Clash Display style) */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-[1.1] tracking-tighter drop-shadow-2xl"
            style={{ fontFamily: "'Space Grotesk', 'Clash Display', 'Inter', sans-serif" }}
          >
            Whitening{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
              Perfection
            </span>
          </motion.h1>

          {/* Decorative line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px bg-gradient-to-r from-amber-400 via-amber-300 to-transparent"
          />

          {/* Subtext - Inter Light */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/80 text-xs sm:text-sm max-w-[280px] sm:max-w-md leading-relaxed font-medium tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Advanced formula for radiant, even-toned skin.{" "}
            <span className="text-amber-400 font-semibold">Visible results in just 7 days.</span>
          </motion.p>
        </div>

        {/* BOTTOM: Buttons + Scroll */}
        <div
          className="absolute left-0 right-0 z-10 flex flex-col items-center gap-3 px-4"
          style={{ bottom: "20px" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-[240px] sm:max-w-sm"
          >
            <button
              onClick={() => document.getElementById("cream")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-black py-2.5 rounded-full text-xs font-bold tracking-wider hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              SHOP NOW →
            </button>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full border border-white/40 text-white py-2.5 rounded-full text-xs font-bold tracking-wider hover:border-amber-400 hover:text-amber-400 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              LEARN MORE
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-white/40 text-[8px] tracking-[0.3em] uppercase font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}>SCROLL</span>
            <div className="w-4 h-6 border border-white/30 rounded-full flex justify-center">
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-0.5 h-2 bg-amber-400 rounded-full mt-1"
              />
            </div>
          </motion.div>
        </div>

        {/* Floating particles */}
        {windowSize.width > 0 && particles.length > 0 && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            {particles.map((particle, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: particle.x,
                  y: particle.y,
                  opacity: 0
                }}
                animate={{ 
                  y: [particle.y, particle.y - 150, particle.y - 300],
                  opacity: [0, 0.4, 0],
                  x: particle.x + (Math.random() * 120 - 60)
                }}
                transition={{ 
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
                className="absolute w-1 h-1 rounded-full bg-amber-400/40 blur-[0.5px]"
              />
            ))}
          </div>
        )}

        {/* Premium corner accents */}
        <div className="absolute bottom-6 left-6 z-10 opacity-30">
          <div className="w-8 h-px bg-gradient-to-r from-amber-400 to-transparent" />
          <div className="w-px h-8 bg-gradient-to-b from-amber-400 to-transparent mt-1" />
        </div>
        <div className="absolute top-24 right-6 z-10 opacity-30">
          <div className="w-8 h-px bg-gradient-to-l from-amber-400 to-transparent" />
          <div className="w-px h-8 bg-gradient-to-t from-amber-400 to-transparent mt-1" />
        </div>

      </div>
    </section>
  );
}