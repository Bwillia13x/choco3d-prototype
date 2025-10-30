
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden" id="get-access" ref={ctaRef}>
      {/* Subtle pattern background */}
      <div className="absolute inset-0 pattern-grid opacity-40"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pulse-300 to-transparent"></div>
      
      <div className="section-container relative z-10 opacity-0 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto glass-card p-6 sm:p-8 md:p-10 lg:p-14 text-center overflow-hidden relative border-2 border-white/40">
          {/* Decorative gradient orbs */}
          <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-pulse-400/30 to-orange-300/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-tr from-pulse-300/20 to-transparent rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none"></div>
          
          <div className="pulse-chip mx-auto mb-4 sm:mb-6">
            <span>Limited Availability</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Transform Your Business with <br className="hidden sm:inline" />
            <span className="text-pulse-500">Industrial 3D Chocolate Printing</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join leading chocolatiers, patisseries, and hospitality businesses already using Choco3D 
            to create stunning customized designs, reduce production time, and eliminate waste.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a 
              href="#get-access" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('get-access');
                if (element) {
                  const offset = 80;
                  const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
                  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
              }}
              className="button-primary group flex items-center justify-center w-full sm:w-auto text-base sm:text-lg px-8 py-4 hover:scale-105 hover:shadow-glow"
            >
              Request a Demo
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
            <a href="#specifications" className="button-secondary w-full sm:w-auto text-center text-base sm:text-lg px-8 py-4 hover:scale-105">
              View Technical Specs
            </a>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-pulse-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-pulse-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Commitment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
