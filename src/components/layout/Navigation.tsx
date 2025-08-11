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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
    // { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const whatsappNumber = "+923241693025";
  const whatsappMessage = "Hi! I'd like to get a free audit for my business.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-medium border-b border-gray-200"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between h-16 lg:h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo - Absolute Left */}
        <Link to="/" className="flex items-center group flex-shrink-0">
          <img 
            src="/lovable-uploads/logo.png" 
            alt="SMARB Technologies Logo" 
            className="h-20 w-auto"
          />
          <span className="text-2xl font-poppins font-bold tracking-wider text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text group-hover:from-blue-700 group-hover:via-purple-700 group-hover:to-indigo-700 transition-all duration-300 drop-shadow-sm">
            SMARB Technologies
          </span>
        </Link>

        {/* Desktop Navigation - Hidden on small screens */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-4 lg:space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary relative font-poppins ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-gray-700"
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right Side - Contact Button and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Desktop Contact Button */}
          <div className="hidden lg:flex">
            <Button variant="default" size="default" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </Button>
          </div>

          {/* Medium Screen Contact Button */}
          <div className="hidden md:flex lg:hidden">
            <Button variant="default" size="default" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
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
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 text-sm font-medium transition-colors font-poppins ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="default" className="w-full mt-4" asChild>
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