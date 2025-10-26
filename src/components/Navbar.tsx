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
      setIsScrolled(window.scrollY > 10);
      
      // Detect active section
      const sections = ["hero", "specifications", "showcase", "gallery", "features", "testimonials"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(current || "");
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Choco3D"
        >
          <img 
            src="/choco3d-logo.png" 
            alt="Choco3D Logo" 
            className="h-10 sm:h-12" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <a 
            href="#hero" 
            className={cn(
              "nav-link px-4 py-2 rounded-lg transition-all duration-300",
              activeSection === "hero" ? "bg-pulse-50 text-pulse-600" : ""
            )}
          >
            Home
          </a>
          <a 
            href="#specifications" 
            className={cn(
              "nav-link px-4 py-2 rounded-lg transition-all duration-300",
              activeSection === "specifications" ? "bg-pulse-50 text-pulse-600" : ""
            )}
          >
            Technology
          </a>
          <a 
            href="#gallery" 
            className={cn(
              "nav-link px-4 py-2 rounded-lg transition-all duration-300",
              activeSection === "gallery" ? "bg-pulse-50 text-pulse-600" : ""
            )}
          >
            Gallery
          </a>
          <a 
            href="#features" 
            className={cn(
              "nav-link px-4 py-2 rounded-lg transition-all duration-300",
              activeSection === "features" ? "bg-pulse-50 text-pulse-600" : ""
            )}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className={cn(
              "nav-link px-4 py-2 rounded-lg transition-all duration-300",
              activeSection === "testimonials" ? "bg-pulse-50 text-pulse-600" : ""
            )}
          >
            Testimonials
          </a>
          <a 
            href="#get-access" 
            className="button-primary ml-4 inline-flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-gray-700 p-3 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => {
            setIsMenuOpen(false);
            document.body.style.overflow = '';
          }}
        />
      )}
      
      {/* Mobile Navigation Menu */}
      <div 
        ref={menuRef}
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 lg:hidden shadow-2xl transition-transform duration-300 ease-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
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
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
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
                className={cn(
                  "text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300",
                  activeSection === "hero" 
                    ? "bg-pulse-50 text-pulse-600" 
                    : "hover:bg-gray-100"
                )}
                onClick={() => {
                  setIsMenuOpen(false);
                  document.body.style.overflow = '';
                }}
              >
                Home
              </a>
              <a 
                href="#specifications" 
                className={cn(
                  "text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300",
                  activeSection === "specifications" 
                    ? "bg-pulse-50 text-pulse-600" 
                    : "hover:bg-gray-100"
                )}
                onClick={() => {
                  setIsMenuOpen(false);
                  document.body.style.overflow = '';
                }}
              >
                Technology
              </a>
              <a 
                href="#gallery" 
                className={cn(
                  "text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300",
                  activeSection === "gallery" 
                    ? "bg-pulse-50 text-pulse-600" 
                    : "hover:bg-gray-100"
                )}
                onClick={() => {
                  setIsMenuOpen(false);
                  document.body.style.overflow = '';
                }}
              >
                Gallery
              </a>
              <a 
                href="#features" 
                className={cn(
                  "text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300",
                  activeSection === "features" 
                    ? "bg-pulse-50 text-pulse-600" 
                    : "hover:bg-gray-100"
                )}
                onClick={() => {
                  setIsMenuOpen(false);
                  document.body.style.overflow = '';
                }}
              >
                Features
              </a>
              <a 
                href="#testimonials" 
                className={cn(
                  "text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300",
                  activeSection === "testimonials" 
                    ? "bg-pulse-50 text-pulse-600" 
                    : "hover:bg-gray-100"
                )}
                onClick={() => {
                  setIsMenuOpen(false);
                  document.body.style.overflow = '';
                }}
              >
                Testimonials
              </a>
            </div>
          </nav>

          {/* Mobile Menu CTA */}
          <div className="p-6 border-t bg-gray-50">
            <a 
              href="#get-access" 
              className="button-primary w-full inline-flex items-center justify-center"
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
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
