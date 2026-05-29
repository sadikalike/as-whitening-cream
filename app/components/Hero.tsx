"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    // Better mobile detection
    const checkMobile = () => {
      const userAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const screenWidth = window.innerWidth < 768;
      const isMobileDevice = userAgent || screenWidth;
      
      setIsMobile(isMobileDevice);
      
      // Set video source based on device
      if (isMobileDevice) {
        setVideoSrc("/images/videombl.mp4");
      } else {
        setVideoSrc("/images/video.mp4");
      }
    };
    
    checkMobile();
    
    // Handle resize
    const handleResize = () => {
      const userAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const screenWidth = window.innerWidth < 768;
      const isMobileDevice = userAgent || screenWidth;
      setIsMobile(isMobileDevice);
      
      if (isMobileDevice) {
        setVideoSrc("/images/videombl.mp4");
      } else {
        setVideoSrc("/images/video.mp4");
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;

    // Mobile autoplay fix
    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.error("Video play failed:", err);
          setError(true);
        });
      }
    };

    // Load and play
    video.load();
    
    // Add event listeners
    video.addEventListener('canplaythrough', playVideo);
    video.addEventListener('loadeddata', playVideo);
    
    // Small delay for mobile
    setTimeout(playVideo, 100);
    
    // User interaction fallback for mobile
    const handleUserInteraction = () => {
      playVideo();
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
    };
    
    if (isMobile) {
      document.addEventListener('touchstart', handleUserInteraction);
      document.addEventListener('click', handleUserInteraction);
    }

    return () => {
      video.removeEventListener('canplaythrough', playVideo);
      video.removeEventListener('loadeddata', playVideo);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
    };
  }, [videoSrc, isMobile]);

  return (
    <section id="home" className="relative h-[100vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {!error && videoSrc ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              className="w-full h-full object-cover"
              style={{ objectPosition: "center center" }}
              onError={() => setError(true)}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
              <div className="text-white/50 text-center p-4">
                <p className="text-amber-400 text-sm">✨ AS Whitening Cream</p>
                <p className="text-xs mt-2">Premium Skincare</p>
              </div>
            </div>
          )}
          
          {/* Overlay gradients */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0" />

        {/* TOP: Badge + Heading + Subtext */}
        <div
          className="absolute left-0 right-0 z-10 flex flex-col items-center text-center px-4 gap-2"
          style={{ top: "88px" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/10"
          >
            <span className="w-1 h-1 rounded-full bg-amber-400" />
            <span className="text-amber-400/90 text-[10px] tracking-[0.3em] uppercase font-semibold">
              LUXURY SKINCARE
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-[1.1] tracking-tighter drop-shadow-2xl"
          >
            Whitening{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
              Perfection
            </span>
          </motion.h1>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-px bg-gradient-to-r from-amber-400 via-amber-300 to-transparent"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-white/80 text-xs sm:text-sm max-w-[280px] sm:max-w-md leading-relaxed font-medium tracking-wide"
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
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-[240px] sm:max-w-sm"
          >
            <button
              onClick={() => document.getElementById("cream")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-black py-2.5 rounded-full text-xs font-bold tracking-wider hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              SHOP NOW →
            </button>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full border border-white/40 text-white py-2.5 rounded-full text-xs font-bold tracking-wider hover:border-amber-400 hover:text-amber-400 transition-all duration-200 hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              LEARN MORE
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-white/40 text-[8px] tracking-[0.3em] uppercase font-medium">SCROLL</span>
            <div className="w-4 h-6 border border-white/30 rounded-full flex justify-center">
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-0.5 h-2 bg-amber-400 rounded-full mt-1"
              />
            </div>
          </motion.div>
        </div>

        {/* Corner accents */}
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