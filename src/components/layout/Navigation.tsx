import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Rocket } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const navItems = [
    { name: "Home", path: "/", section: "home" },
    { name: "About", path: "/", section: "about" },
    { name: "Services", path: "/", section: "services" },
    { name: "Case Studies", path: "/", section: "case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/", section: "contact" },
  ];

  const whatsappNumber = "971505940132";
  const whatsappMessage = "Hi! I'd like to get a free audit for my business.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg border-b border-gray-200"
          : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between h-16 xs:h-18 sm:h-20 lg:h-24 px-3 xs:px-4 sm:px-6 lg:px-8 max-w-full w-full">
        {/* Logo - Left Corner */}
        <Link to="/" className="flex items-center group min-w-0 flex-shrink-0 max-w-[65%] sm:max-w-[45%] md:max-w-none">
          <img 
            src="/lovable-uploads/logo.png" 
            alt="SMARB Technologies Logo" 
            className="h-10 w-auto xs:h-11 sm:h-12 md:h-14 lg:h-16 xl:h-18 transition-all duration-300 flex-shrink-0"
          />
          <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-poppins font-bold text-foreground group-hover:text-primary transition-all duration-300 ml-2 sm:ml-3 truncate min-w-0">
            <span className="inline sm:hidden lg:inline">SMARB</span>
            <span className="hidden sm:inline lg:hidden xl:inline"> Technologies</span>
          </span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={(e) => {
                if (item.section && item.path === "/") {
                  e.preventDefault();
                  const element = document.getElementById(item.section);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className={`text-base font-medium transition-colors duration-200 hover:text-primary relative font-poppins ${
                location.pathname === item.path && !item.section
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {item.name}
              {location.pathname === item.path && !item.section && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Medium Screen Navigation - Centered */}
        <div className="hidden md:flex lg:hidden absolute left-1/2 transform -translate-x-1/2 items-center space-x-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={(e) => {
                if (item.section && item.path === "/") {
                  e.preventDefault();
                  const element = document.getElementById(item.section);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary relative font-poppins ${
                location.pathname === item.path && !item.section
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {item.name}
              {location.pathname === item.path && !item.section && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right Corner - Contact Button and Mobile Menu */}
        <div className="flex items-center space-x-1 xs:space-x-2 sm:space-x-3 flex-shrink-0 min-w-0">
          {/* Large Screen Contact Button */}
          <div className="hidden lg:flex">
            <Button 
              variant="default" 
              size="lg" 
              className="px-4 xl:px-6 py-2.5 text-sm font-semibold whitespace-nowrap"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </Button>
          </div>

          {/* Medium Screen Contact Button */}
          <div className="hidden md:flex lg:hidden">
            <Button 
              variant="default" 
              size="default" 
              className="px-3 py-2 text-sm font-semibold whitespace-nowrap"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Contact
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 xs:p-2.5 rounded-lg hover:bg-secondary transition-all duration-300 bg-secondary/30 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6 xs:h-7 xs:w-7 text-foreground" /> : <Menu className="h-6 w-6 xs:h-7 xs:w-7 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={(e) => {
                    setIsOpen(false);
                    if (item.section && item.path === "/") {
                      e.preventDefault();
                      // Small delay to allow menu to close first
                      setTimeout(() => {
                        if (location.pathname !== "/") {
                          // Navigate to home page first, then scroll
                          window.location.href = `/#${item.section}`;
                        } else {
                          const element = document.getElementById(item.section);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }, 100);
                    }
                  }}
                  className={`block py-3 text-base font-medium transition-colors font-poppins ${
                    location.pathname === item.path && !item.section
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="default" 
                className="w-full mt-6 py-3 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium hover:shadow-strong transform hover:scale-105 transition-all duration-300" 
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;