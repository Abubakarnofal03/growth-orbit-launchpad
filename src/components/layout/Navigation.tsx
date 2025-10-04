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
    { name: t('nav.home'), path: "/", section: "home" },
    { name: t('nav.about'), path: "/", section: "about" },
    { name: t('nav.services'), path: "/", section: "services" },
    { name: t('nav.caseStudies'), path: "/", section: "case-studies" },
    { name: t('ventures.title'), path: "/", section: "ventures" },
    { name: t('nav.contact'), path: "/", section: "contact" },
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
          ? "bg-white shadow-lg border-b border-gray-200"
          : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between h-16 xs:h-18 sm:h-20 lg:h-24 px-3 xs:px-4 sm:px-6 lg:px-8 max-w-full w-full">
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
          <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-poppins font-bold text-foreground group-hover:text-primary transition-all duration-300 sm:ml-1">
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
              className={`text-xs xl:text-sm 2xl:text-base font-medium transition-colors duration-200 hover:text-primary relative font-poppins whitespace-nowrap ${
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
        <div className="hidden md:flex lg:hidden absolute left-1/2 transform -translate-x-1/2 items-center space-x-2">
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
              className={`text-xs font-medium transition-colors duration-200 hover:text-primary relative font-poppins whitespace-nowrap ${
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

        {/* Right Corner - Language Toggle, Contact Button and Mobile Menu */}
        <div className="flex items-center space-x-1 xs:space-x-2 sm:space-x-3 flex-shrink-0 min-w-0">
          {/* Language Toggle Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="px-2 py-1.5 text-xs font-medium border border-gray-300 hover:bg-gray-50 transition-all duration-200"
          >
            <Languages className="h-4 w-4 mr-1" />
            {language.toUpperCase()}
          </Button>

          {/* Large Screen Contact Button */}
          <div className="hidden lg:flex">
            <Button 
              variant="default" 
              size="lg" 
              className="px-4 xl:px-6 py-2.5 text-sm font-semibold whitespace-nowrap"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {t('nav.contactUs')}
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
                {t('nav.contact')}
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
                  className={`block py-3 text-base font-medium transition-colors font-poppins ${
                    location.pathname === item.path && !item.section
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 mt-6">
                {/* Language Toggle in Mobile Menu */}
                <Button
                  variant="outline"
                  onClick={toggleLanguage}
                  className="w-full py-2 text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-all duration-200"
                >
                  <Languages className="h-4 w-4 mr-2" />
                  {t('language.switchTo')} {language === 'en' ? t('language.german') : t('language.english')}
                </Button>
                
                <Button 
                  variant="default" 
                  className="w-full py-3 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium hover:shadow-strong transform hover:scale-105 transition-all duration-300" 
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    {t('nav.contactUs')}
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