import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const StickyBottomBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsVisible(scrolled && !isDismissed);
    };

    setIsVisible(!isDismissed);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const whatsappNumber = "+971505940132";
  const whatsappMessage = "Hi! I'd like to get a free audit for my business.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-blue-900 text-white shadow-strong"
        >
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-3 max-w-7xl">
            <div className="flex items-center justify-between gap-2 sm:gap-4 overflow-hidden">
              <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0 overflow-hidden">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <div className="flex-1 min-w-0 overflow-hidden">
                  <p className="text-sm font-medium truncate hidden sm:block">
                    Ready to grow your business?
                  </p>
                  <p className="text-xs sm:text-xs text-white/80 truncate">
                    <span className="sm:hidden">Free Audit Available</span>
                    <span className="hidden sm:inline">Get your free audit now via WhatsApp</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                <Button
                  variant="hero-secondary"
                  size="sm"
                  asChild
                  className="whitespace-nowrap text-xs sm:text-sm px-2 sm:px-3"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <span className="sm:hidden">Audit</span>
                    <span className="hidden sm:inline">Free Audit</span>
                  </a>
                </Button>
                <button
                  onClick={handleDismiss}
                  className="p-1 hover:bg-white/20 rounded transition-colors flex-shrink-0"
                  aria-label="Dismiss"
                >
                  <X className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBottomBar;