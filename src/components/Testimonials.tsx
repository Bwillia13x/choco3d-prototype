import React, { useRef } from "react";
import { Quote } from "lucide-react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "Choco3D revolutionized our luxury chocolate line. We can now offer completely personalized designs at scale, delighting our corporate clients with unprecedented customization.",
  author: "Sarah Chen",
  role: "Head Chocolatier, Luxe Confections",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "The precision and consistency are game-changing. We reduced production time by 60% while maintaining the artisanal quality our hotel chain demands.",
  author: "Michael Rodriguez",
  role: "F&B Director, Prestige Hotels Group",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "As a specialty baker, Choco3D allowed us to expand into custom chocolate work without hiring additional staff. The ROI was clear within 6 months.",
  author: "Dr. Amara Patel",
  role: "Owner, Artisan Patisserie",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "Our event planning business now offers chocolate favors that match any theme perfectly. Choco3D has become our competitive advantage in the luxury market.",
  author: "Jason Lee",
  role: "CEO, Premier Events Co.",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return (
    <div className="group relative bg-cover bg-center rounded-2xl p-8 sm:p-10 h-full flex flex-col justify-between text-white transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden border-2 border-transparent hover:border-white/20" style={{
      backgroundImage: `url('${backgroundImage}')`
    }}>
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/60 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/70 transition-all duration-500"></div>
      
      {/* Decorative corner element with animation */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/90 rounded-bl-3xl flex items-center justify-center transition-all duration-300 group-hover:w-24 group-hover:h-24">
        <Quote className="w-10 h-10 text-pulse-500 transform rotate-180 transition-transform duration-300 group-hover:scale-110" />
      </div>
      
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="relative z-10">
        <div className="mb-6">
          <Quote className="w-12 h-12 text-white/40 mb-4 transition-all duration-300 group-hover:text-white/60 group-hover:scale-110" />
        </div>
        <p className="text-lg sm:text-xl mb-8 font-medium leading-relaxed text-white/95 pr-12 transition-all duration-300 group-hover:text-white">
          {content}
        </p>
        <div className="border-t border-white/20 pt-6 mt-auto transition-colors duration-300 group-hover:border-white/40">
          <h4 className="font-semibold text-xl mb-1 transition-all duration-300 group-hover:text-white">{author}</h4>
          <p className="text-white/70 text-sm transition-colors duration-300 group-hover:text-white/90">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative" id="testimonials" ref={sectionRef}>
      <div className="section-container animate-on-scroll">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="pulse-chip mx-auto mb-4 sm:mb-6">
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900 mb-4">
            Loved by Industry Leaders
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Discover how businesses like yours are transforming their chocolate production with Choco3D
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TestimonialCard 
                content={testimonial.content} 
                author={testimonial.author} 
                role={testimonial.role} 
                gradient={testimonial.gradient} 
                backgroundImage={testimonial.backgroundImage} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
