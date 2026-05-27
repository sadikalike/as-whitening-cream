'use client';
import { useRef, useState, useEffect } from 'react';

export default function Testimonials() {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Althaf",
      location: "Mangalore, India",
      rating: 5,
      text: "I've been using this whitening cream for 2 months now. My dark spots have significantly faded and my skin looks so much brighter! Best investment for my skin.",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 2,
      name: "Anwar",
      location: "Kasargod, India",
      rating: 5,
      text: "Amazing product! Within just 7 days, I could see visible results. My pimple marks are gone and skin tone is even. Highly recommended!",
      date: "1 month ago",
      verified: true
    },
    {
      id: 3,
      name: "Irshad",
      location: "Kasargod, India",
      rating: 4,
      text: "Great cream for everyday use. It's lightweight, non-greasy, and gives a natural glow. My pores look smaller and skin feels smoother.",
      date: "3 weeks ago",
      verified: true
    },
    {
      id: 4,
      name: "Sinan",
      location: "Hassan, India",
      rating: 5,
      text: "Finally found a cream that works! The 7-day challenge showed real results. My friends noticed the difference in my skin. Thank you AS Whitening!",
      date: "5 days ago",
      verified: true
    },
    {
      id: 5,
      name: "Nithin",
      location: "Mangalore, India",
      rating: 5,
      text: "Excellent product for pigmentation. My melasma has reduced drastically. The texture is smooth and absorbs quickly. Will repurchase!",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 6,
      name: "Abhishek",
      location: "Kasargod, India",
      rating: 4,
      text: "Good value for money. The cream is effective and doesn't cause any irritation. My skin looks more radiant and even-toned.",
      date: "1 week ago",
      verified: true
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      ref={ref}
      id="testimonials"
      className="py-20 md:py-28 px-5 md:px-12 bg-black scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 md:gap-3 mb-5 md:mb-6">
            <div className="w-8 md:w-12 h-px bg-yellow-400/60" />
            <span className="text-yellow-400/80 text-[10px] md:text-[11px] tracking-[0.3em] uppercase">
              What Our Customers Say
            </span>
            <div className="w-8 md:w-12 h-px bg-yellow-400/60" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
            Real Stories,{" "}
            <span className="font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          
          <div className="w-20 h-px bg-yellow-400/40 mx-auto my-5 md:my-6" />
          
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto px-3">
            Join thousands of satisfied customers who have transformed their skin with AS Whitening Cream
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Single Testimonial - No Animation */}
        <div className="relative">
          <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 md:p-12">
            {/* Rating Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-yellow-400' : 'text-white/20'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-white/80 text-base md:text-lg leading-relaxed text-center mb-8 max-w-2xl mx-auto">
              "{currentTestimonial.text}"
            </p>

            {/* Quotation mark */}
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-yellow-400/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* User Info */}
            <div className="flex items-center justify-center gap-3 pt-4">
              <div className="w-14 h-14 rounded-full bg-yellow-400/20 border border-yellow-400/40 flex items-center justify-center">
                <span className="text-yellow-400 text-2xl font-bold">
                  {currentTestimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-white font-medium text-base">{currentTestimonial.name}</p>
                  {currentTestimonial.verified && (
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <p className="text-white/50 text-sm">{currentTestimonial.location}</p>
              </div>
            </div>

            {/* Date */}
            <p className="text-center text-white/30 text-xs mt-4">{currentTestimonial.date}</p>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`transition-all duration-300 ${
                currentIndex === i
                  ? 'w-8 h-2 bg-yellow-400 rounded-full'
                  : 'w-2 h-2 bg-white/30 rounded-full hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="bg-gradient-to-r from-yellow-400/[0.08] to-transparent border border-yellow-400/20 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
              Ready to Transform Your Skin?
            </h3>
            <p className="text-white/50 text-sm md:text-base max-w-md mx-auto mb-6">
              Join thousands of satisfied customers and experience the difference
            </p>
            <button
              onClick={() => document.getElementById('cream')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full text-sm font-bold tracking-wide hover:shadow-2xl hover:shadow-yellow-500/40 transition-all duration-300"
            >
              Shop Now
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent mt-16 md:mt-20" />
      </div>
    </section>
  );
}