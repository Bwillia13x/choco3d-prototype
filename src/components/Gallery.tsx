import React, { useEffect, useRef } from "react";

// Direct imports for reliable loading
import gallery1 from "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png";
import gallery2 from "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png";
import gallery3 from "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png";
import gallery4 from "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png";

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  
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
    
    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll(".gallery-item");
      items.forEach((item) => observer.observe(item));
    }
    
    return () => {
      if (galleryRef.current) {
        const items = galleryRef.current.querySelectorAll(".gallery-item");
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  const galleryItems = [
    {
      image: gallery1,
      title: "Geometric Precision",
      description: "Hexagonal patterns with flawless symmetry"
    },
    {
      image: gallery2,
      title: "Architectural Beauty",
      description: "Spiral structures that defy convention"
    },
    {
      image: gallery3,
      title: "Organic Flow",
      description: "Smooth, flowing designs inspired by nature"
    },
    {
      image: gallery4,
      title: "Intricate Details",
      description: "Mandala patterns with precision down to the millimeter"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-gray-50/50 to-white" id="gallery">
      <div className="section-container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-4 sm:mb-6">
            <span>Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
            Chocolate Artistry <br className="hidden sm:inline" />
            <span className="text-gradient-primary">Redefined</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            From intricate geometric patterns to organic flowing designs, Choco3D transforms 
            your creative vision into edible masterpieces with unprecedented precision.
          </p>
        </div>
        
        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="gallery-item group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer border-2 border-gray-100 hover:border-pulse-200">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={`${item.title} - 3D printed chocolate creation by Choco3D showcasing ${item.description.toLowerCase()}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-100 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Every design printed with food-safe materials and precision temperature control
          </p>
          <a 
            href="#get-access" 
            className="button-primary inline-flex items-center justify-center"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('get-access');
              if (element) {
                const offset = 80;
                const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
              }
            }}
          >
            Start Creating Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
