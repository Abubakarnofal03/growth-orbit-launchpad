import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "/#services" },
    { name: "Case Study", href: "/#case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    if (href.startsWith('/')) {
      if (href === '/contact') {
        navigate(href);
        return;
      }

      // Handle hash links from other pages
      if (href.includes('#')) {
        const [path, hash] = href.split('#');
        if (location.pathname !== path) {
          navigate(href);
          return;
        }

        // If on same page, scroll to hash
        const target = document.querySelector(`#${hash}`);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      navigate(href);
    } else if (href.startsWith('#')) {
      // Legacy support or direct hash on same page
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "glass border-b border-white/5"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-2xl font-heading font-bold text-foreground tracking-tight">
              SMARB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => handleNavClick('/contact')}
                className="glow-button gradient-border bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-medium text-sm"
              >
                Book Strategy
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="md:hidden glass border-t border-white/5"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => handleNavClick('/contact')}
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              >
                Book Strategy
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;