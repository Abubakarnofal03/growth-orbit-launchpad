import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
    { name: "About", path: "/", section: "about" },
    { name: "Services", path: "/", section: "services" },
    { name: "Work", path: "/", section: "case-studies" },
    { name: "Ventures", path: "/", section: "ventures" },
    { name: "Contact", path: "/", section: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong shadow-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-16 xs:h-18 sm:h-20 lg:h-24 px-6 lg:px-20 max-w-[1440px] mx-auto w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center group min-w-0 flex-shrink-0">
          <img 
            src="/lovable-uploads/logo.png" 
            alt="SMARB Technologies - AI Solutions & Software Development Company Logo" 
            width="48"
            height="48"
            loading="eager"
            className="h-8 w-auto sm:h-10 lg:h-12 transition-all duration-300 group-hover:scale-105"
          />
          <span className="text-sm sm:text-base lg:text-xl font-bold text-foreground group-hover:text-primary transition-all duration-300 ml-2">
            <span className="inline xl:hidden">SMARB</span>
            <span className="hidden xl:inline">SMARB Technologies</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
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
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              {item.name}
              <motion.span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"
              />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2.5 text-sm font-semibold rounded-xl shadow-glow-cyan hover:opacity-90 transition-all duration-300"
              asChild
            >
              <a href="#contact">
                Get a Quote
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-xl glass border border-white/10 text-foreground hover:bg-white/10 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-white/5"
          >
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={(e) => {
                      setIsOpen(false);
                      if (item.section && item.path === "/") {
                        e.preventDefault();
                        setTimeout(() => {
                          if (location.pathname !== "/") {
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
                    className="block py-3 px-4 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-xl transition-all"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <Button
                  className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground py-3 text-base font-semibold rounded-xl shadow-glow-cyan"
                  asChild
                >
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    Get a Quote
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
