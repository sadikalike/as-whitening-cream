"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set window size after mount
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

  // Don't render particles on server
  const [particles, setParticles] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    // Generate random particles only on client side
    const newParticles = Array.from({ length: 6 }, () => ({
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
                <p className="text-yellow-400 text-sm">⚠️ Video not found</p>
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
            style={{ 
              objectPosition: "center center",
            }}
            onError={() => setError(true)}
          >
            <source src="/images/video.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-0" />

        {/* TOP: Badge + Heading + Subtext */}
        <div
          className="absolute left-0 right-0 z-10 flex flex-col items-center text-center px-4 gap-1.5"
          style={{ top: "88px" }}
        >
          {/* Badge with animation */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1"
          >
            <span className="w-1 h-1 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-yellow-400/90 text-[9px] tracking-[0.25em] uppercase font-light">
              LUXURY SKINCARE
            </span>
          </motion.div>

          {/* Heading with space between words */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-6xl sm:text-8xl font-light text-white leading-[1.05] tracking-tighter drop-shadow-2xl"
          >
            Whitening{" "}
            <span className="font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Perfection
            </span>
          </motion.h1>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "40px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px bg-gradient-to-r from-yellow-400 to-transparent"
          />

          {/* Subtext with animation */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/70 text-[11px] max-w-[200px] leading-snug font-light"
          >
            Advanced formula for radiant, even-toned skin.{" "}
            <span className="text-yellow-400/90">Visible results in just 7 days.</span>
          </motion.p>
        </div>

        {/* BOTTOM: Buttons + Scroll */}
        <div
          className="absolute left-0 right-0 z-10 flex flex-col items-center gap-2 px-4"
          style={{ bottom: "1px" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-2 w-full max-w-[200px] sm:max-w-sm"
          >
            <button
              onClick={() => document.getElementById("cream")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-2 rounded-full text-[11px] font-bold tracking-wide hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              SHOP NOW →
            </button>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full border border-white/40 text-white py-2 rounded-full text-[11px] font-bold tracking-wide hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              LEARN MORE
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center gap-0.5"
          >
            <span className="text-white/40 text-[8px] tracking-[0.2em] uppercase font-light">SCROLL</span>
            <div className="w-3.5 h-5 border border-white/30 rounded-full flex justify-center">
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-0.5 h-1.5 bg-yellow-400 rounded-full mt-1"
              />
            </div>
          </motion.div>
        </div>

        {/* Floating particles animation - Fixed for SSR */}
        {windowSize.width > 0 && particles.length > 0 && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((particle, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: particle.x,
                  y: particle.y,
                  opacity: 0
                }}
                animate={{ 
                  y: [particle.y, particle.y - 100, particle.y - 200],
                  opacity: [0, 0.5, 0],
                  x: particle.x + (Math.random() * 100 - 50)
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
                className="absolute w-0.5 h-0.5 rounded-full bg-yellow-400/30"
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}