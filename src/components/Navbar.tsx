import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detect active section with better threshold
      const sections = ["hero", "specifications", "showcase", "gallery", "features", "testimonials"];
      const navHeight = 80; // Account for fixed navbar
      
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in the viewport center
          if (rect.top <= navHeight + 50 && rect.bottom >= navHeight + 50) {
            current = section;
            break;
          }
        }
      }
      
      // Default to hero when at top
      if (window.scrollY < 100) {
        current = "hero";
      }
      
      setActiveSection(current);
    };
    
    handleScroll(); // Call once on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(target)) {
        // Don't close if clicking the toggle button
        const toggleButton = document.querySelector('[aria-label*="menu"]');
        if (toggleButton && toggleButton.contains(target)) {
          return;
        }
        closeMenu();
      }
    };

    if (isMenuOpen) {
      // Small delay to prevent immediate closing
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 100);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : '';
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeMenu();
    
    const target = document.getElementById(targetId);
    if (target) {
      const navHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-md py-3" 
          : "bg-white/80 backdrop-blur-sm py-4"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <button 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(e as any, 'hero');
          }}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          aria-label="Choco3D Home"
        >
          <img 
            src="/choco3d-logo.png" 
            alt="Choco3D Logo" 
            className={cn(
              "transition-all duration-300",
              isScrolled ? "h-9 sm:h-10" : "h-10 sm:h-12"
            )} 
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, 'hero')}
            className={cn(
              "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 whitespace-nowrap",
              activeSection === "hero" 
                ? "bg-pulse-500 text-white shadow-md" 
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            )}
          >
            Home
          </a>
          <a 
            href="#specifications" 
            onClick={(e) => handleNavClick(e, 'specifications')}
            className={cn(
              "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 whitespace-nowrap",
              activeSection === "specifications" 
                ? "bg-pulse-500 text-white shadow-md" 
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            )}
          >
            Technology
          </a>
          <a 
            href="#gallery" 
            onClick={(e) => handleNavClick(e, 'gallery')}
            className={cn(
              "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 whitespace-nowrap",
              activeSection === "gallery" 
                ? "bg-pulse-500 text-white shadow-md" 
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            )}
          >
            Gallery
          </a>
          <a 
            href="#features" 
            onClick={(e) => handleNavClick(e, 'features')}
            className={cn(
              "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 whitespace-nowrap",
              activeSection === "features" 
                ? "bg-pulse-500 text-white shadow-md" 
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            )}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => handleNavClick(e, 'testimonials')}
            className={cn(
              "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 whitespace-nowrap",
              activeSection === "testimonials" 
                ? "bg-pulse-500 text-white shadow-md" 
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            )}
          >
            Testimonials
          </a>
          <div className="w-px h-6 bg-gray-300 mx-2"></div>
          <a 
            href="#get-access" 
            onClick={(e) => handleNavClick(e, 'get-access')}
            className="button-primary text-sm py-2.5 px-5 inline-flex items-center shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none active:scale-95" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300",
          isMenuOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none -z-10"
        )}
        onClick={closeMenu}
        aria-hidden="true"
      />
      
      {/* Mobile Navigation Menu */}
      <div 
        ref={menuRef}
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white lg:hidden shadow-2xl transition-all duration-300 ease-out",
          isMenuOpen ? "translate-x-0 z-50" : "translate-x-full -z-10"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <img 
              src="/choco3d-logo.png" 
              alt="Choco3D Logo" 
              className="h-10" 
            />
            <button 
              onClick={closeMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Navigation */}
          <nav className="flex-1 overflow-y-auto py-6 px-6">
            <div className="flex flex-col space-y-2">
              <a 
                href="#hero" 
                onClick={(e) => handleNavClick(e, 'hero')}
                className={cn(
                  "text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300",
                  activeSection === "hero" 
                    ? "bg-pulse-500 text-white" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                Home
              </a>
              <a 
                href="#specifications" 
                onClick={(e) => handleNavClick(e, 'specifications')}
                className={cn(
                  "text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300",
                  activeSection === "specifications" 
                    ? "bg-pulse-500 text-white" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                Technology
              </a>
              <a 
                href="#gallery" 
                onClick={(e) => handleNavClick(e, 'gallery')}
                className={cn(
                  "text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300",
                  activeSection === "gallery" 
                    ? "bg-pulse-500 text-white" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                Gallery
              </a>
              <a 
                href="#features" 
                onClick={(e) => handleNavClick(e, 'features')}
                className={cn(
                  "text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300",
                  activeSection === "features" 
                    ? "bg-pulse-500 text-white" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                Features
              </a>
              <a 
                href="#testimonials" 
                onClick={(e) => handleNavClick(e, 'testimonials')}
                className={cn(
                  "text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300",
                  activeSection === "testimonials" 
                    ? "bg-pulse-500 text-white" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                Testimonials
              </a>
            </div>
          </nav>

          {/* Mobile Menu CTA */}
          <div className="p-6 border-t bg-gray-50">
            <a 
              href="#get-access" 
              onClick={(e) => handleNavClick(e, 'get-access')}
              className="button-primary w-full inline-flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
