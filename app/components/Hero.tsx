"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [frame, setFrame] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const firstFrame = 1;
  const totalFrames = 40;

  useEffect(() => {
    let rafId = null;
    let lastFrame = 1;
    
    const handleScroll = () => {
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const scrolled = -rect.top;
        
        // Super fast - completes in 40% of scroll
        const scrollDistance = window.innerHeight * 0.4;
        let progress = Math.min(1, Math.max(0, scrolled / scrollDistance));
        
        // Instant linear response
        const eased = progress;
        
        let frameNumber = Math.round(firstFrame + eased * (totalFrames - firstFrame));
        frameNumber = Math.min(totalFrames, Math.max(firstFrame, frameNumber));
        
        if (frameNumber !== lastFrame) {
          setFrame(frameNumber);
          lastFrame = frameNumber;
        }
        
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const padded = String(frame).padStart(3, "0");

  return (
    <section ref={sectionRef} id="home" className="relative h-[100vh] w-full">

      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">

        {/* Background image - Ultra Premium quality */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
          <img
            src={`/images/webp/ezgif-frame-${padded}.png`}
            alt="Product"
            className="w-full h-full object-cover will-change-transform"
            style={{ 
              objectPosition: "center center",
              filter: "brightness(1.25) contrast(1.12) saturate(1.2) drop-shadow(0 0 2px rgba(0,0,0,0.3))",
              imageRendering: "crisp-edges",
              transform: `scale(${1 + (frame / totalFrames) * 0.04})`,
              transition: "none",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden"
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-0" />

        {/* TOP: Badge + Heading + Subtext - EXACT original layout */}
        <div
          className="absolute left-0 right-0 z-10 flex flex-col items-center text-center px-4 gap-1.5"
          style={{ top: "88px" }}
        >
          {/* Badge - EXACT original */}
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="w-1 h-1 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-yellow-400/90 text-[9px] tracking-[0.25em] uppercase font-light">
              LUXURY SKINCARE
            </span>
          </div>

          {/* Heading - EXACT original */}
          <h1 className="text-6xl sm:text-8xl font-light text-white leading-[1.05] tracking-tighter">
            Whitening
            <br />
            <span className="font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Perfection
            </span>
          </h1>

          <div className="w-10 h-px bg-gradient-to-r from-yellow-400 to-transparent mx-auto" />

          {/* Subtext - EXACT original */}
          <p className="text-white/70 text-[11px] max-w-[200px] leading-snug font-light">
            Advanced formula for radiant, even-toned skin.{" "}
            <span className="text-yellow-400/90">Visible results in just 7 days.</span>
          </p>
        </div>

        {/* BOTTOM: Buttons + Scroll - EXACT original layout and position */}
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