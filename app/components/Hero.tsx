"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try to play video
    const playVideo = () => {
      video.play().catch(err => {
        console.error("Video play failed:", err);
        setError(true);
      });
    };

    // Wait for video to be ready
    video.addEventListener('canplay', playVideo);
    
    // Try immediately if already loaded
    if (video.readyState >= 2) {
      playVideo();
    }

    return () => {
      video.removeEventListener('canplay', playVideo);
    };
  }, []);

  return (
    <section id="home" className="relative h-[100vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          
          {/* Show error message if video fails */}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
              <div className="text-white/50 text-center">
                <p className="text-yellow-400">⚠️ Video not found</p>
                <p className="text-xs mt-2">Check: /public/images/video.mp4</p>
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
              filter: "brightness(1.05) contrast(1.08) saturate(1.15)",
            }}
            onError={() => setError(true)}
          >
            <source src="/images/video.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-0" />

        {/* TOP: Badge + Heading + Subtext */}
        <div
          className="absolute left-0 right-0 z-10 flex flex-col items-center text-center px-4 gap-1.5"
          style={{ top: "88px" }}
        >
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="w-1 h-1 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-yellow-400/90 text-[9px] tracking-[0.25em] uppercase font-light">
              LUXURY SKINCARE
            </span>
          </div>

          <h1 className="text-6xl sm:text-8xl font-light text-white leading-[1.05] tracking-tighter drop-shadow-2xl">
            Whitening
            <br />
            <span className="font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Perfection
            </span>
          </h1>

          <div className="w-10 h-px bg-gradient-to-r from-yellow-400 to-transparent mx-auto" />

          <p className="text-white/80 text-[11px] max-w-[200px] leading-snug font-light drop-shadow-md">
            Advanced formula for radiant, even-toned skin.{" "}
            <span className="text-yellow-400/90">Visible results in just 7 days.</span>
          </p>
        </div>

        {/* BOTTOM: Buttons + Scroll */}
        <div
          className="absolute left-0 right-0 z-10 flex flex-col items-center gap-2 px-4"
          style={{ bottom: "1px" }}
        >
          <div className="flex flex-col sm:flex-row gap-2 w-full max-w-[200px] sm:max-w-sm">
            <button
              onClick={() => document.getElementById("cream")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-2 rounded-full text-[11px] font-bold tracking-wide hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-105"
            >
              SHOP NOW →
            </button>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full border border-white/40 text-white py-2 rounded-full text-[11px] font-bold tracking-wide hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
            >
              LEARN MORE
            </button>
          </div>

          <div className="flex flex-col items-center gap-0.5">
            <span className="text-white/40 text-[8px] tracking-[0.2em] uppercase font-light">SCROLL</span>
            <div className="w-3.5 h-5 border border-white/30 rounded-full flex justify-center">
              <div className="w-0.5 h-1 bg-yellow-400 rounded-full mt-1 animate-bounce" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}