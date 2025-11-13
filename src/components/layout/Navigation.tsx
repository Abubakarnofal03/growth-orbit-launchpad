import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

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
    { name: "About", path: "/", section: "about" },
    { name: "Services", path: "/", section: "services" },
    { name: "Work", path: "/", section: "case-studies" },
    { name: "Ventures", path: "/", section: "ventures" },
    { name: "Contact", path: "/", section: "contact" },
  ];

  const whatsappNumber = "971505940132";
  const whatsappMessage = t('whatsapp.message');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg border-b border-[rgba(0,0,0,0.06)]"
          : "bg-white/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between h-16 xs:h-18 sm:h-20 lg:h-24 pl-4 pr-6 sm:pl-6 lg:pl-6 lg:pr-20 max-w-[1440px] mx-auto w-full">
        {/* Logo - Left Corner */}
        <Link to="/" className="flex items-center group min-w-0 flex-shrink-0">
          <img 
            src="/lovable-uploads/logo.png" 
            alt="SMARB Technologies - AI Solutions & Software Development Company Logo" 
            width="48"
            height="48"
            loading="eager"
            className="h-6 w-auto xs:h-7 sm:h-8 md:h-9 lg:h-10 xl:h-12 transition-all duration-300 flex-shrink-0"
          />
          <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-inter font-bold text-[#111827] group-hover:text-[#0050A0] transition-all duration-300 sm:ml-1">
            <span className="inline xl:hidden">SMARB</span>
            <span className="hidden xl:inline">SMARB Technologies</span>
          </span>

        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-2 xl:space-x-4 2xl:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
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
              className={`text-xs xl:text-sm 2xl:text-base font-medium transition-all duration-300 hover:text-[#0050A0] relative font-inter whitespace-nowrap group ${
                location.pathname === item.path && !item.section
                  ? "text-[#0050A0]"
                  : "text-[#111827]"
              }`}
            >
              {item.name}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0050A0] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              />
              {location.pathname === item.path && !item.section && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0050A0]"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right Corner - Contact Button and Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 flex-nowrap">
          {/* Desktop Contact Button */}
          <div className="hidden lg:flex">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="default" 
                size="lg" 
                className={`group px-4 xl:px-6 py-2.5 text-sm font-semibold whitespace-nowrap flex-shrink-0 hover:shadow-xl transition-all duration-300 rounded-xl relative overflow-hidden ${
                  isScrolled 
                    ? "bg-[#0078D7] hover:bg-[#0066B8] hover:shadow-[#0078D7]/30 text-white border-2 border-[#0078D7]" 
                    : "bg-[#0078D7] hover:bg-[#0066B8] text-white shadow-2xl shadow-black/40 border-2 border-white/20 backdrop-blur-sm"
                }`}
                asChild
              >
                <a href="#contact">
                  <span className="relative z-10 font-bold">Get a Quote</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#0078D7] to-[#0050A0] opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Hamburger Menu Button - Shows on Mobile & Tablet */}
          <button
            className={`lg:hidden p-2 rounded-lg hover:bg-secondary transition-all duration-300 bg-secondary/30 flex-shrink-0 min-w-[40px] min-h-[40px] flex items-center justify-center ${
              isScrolled ? "text-[#111827]" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[rgba(0,0,0,0.06)]"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
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
                  className={`block py-3 text-base font-medium transition-colors font-inter ${
                    location.pathname === item.path && !item.section
                      ? "text-[#0050A0]"
                      : "text-[#111827] hover:text-[#0050A0]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 mt-6">
                <Button
                  variant="default" 
                  className="w-full py-3 text-base font-semibold bg-[#0078D7] hover:bg-[#0066B8] text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-250" 
                  asChild
                >
                  <a href="#contact">
                    Get a Quote
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;