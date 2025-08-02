import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const StickyBottomBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 500;
      setIsVisible(scrolled && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const whatsappNumber = "+923241693025";
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
          className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-primary text-white shadow-strong"
        >
          <div className="container mx-auto px-4 sm:px-6 py-3">
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                <MessageCircle className="h-5 w-5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate hidden sm:block">
                    Ready to grow your business?
                  </p>
                  <p className="text-xs text-white/80 truncate">
                    <span className="sm:hidden">Free Audit</span>
                    <span className="hidden sm:inline">Get your free audit now via WhatsApp</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                <Button
                  variant="hero-secondary"
                  size="sm"
                  asChild
                  className="whitespace-nowrap"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <span className="sm:hidden">Audit</span>
                    <span className="hidden sm:inline">Free Audit</span>
                  </a>
                </Button>
                <button
                  onClick={handleDismiss}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  aria-label="Dismiss"
                >
                  <X className="h-4 w-4" />
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