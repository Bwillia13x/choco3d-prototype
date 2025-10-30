
import React from "react";
import chocolateSculptures from "@/assets/chocolate-sculptures-showcase.jpg";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Precision Meets Artistry
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Our industrial 3D chocolate printers deliver unmatched quality and customization 
            for businesses that demand excellence.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src={chocolateSculptures} 
              alt="Exquisite 3D printed chocolate sculptures with intricate geometric patterns created by Choco3D" 
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Industrial-Grade Chocolate Printing</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Built with food-safe components and precision temperature control, Choco3D seamlessly 
              integrates into professional kitchens, production facilities, and artisan workshops, 
              enabling creative freedom at production scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
