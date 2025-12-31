import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
      >
        {/* Scanlines */}
        <div className="absolute inset-0 scanlines pointer-events-none" />
        
        {/* Grid */}
        <div className="absolute inset-0 grid-brutal opacity-20" />

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-giant font-display glitch animate-flicker"
          data-text="SMARB"
        >
          SMARB
        </motion.h1>

        {/* Progress Bar */}
        <div className="w-64 mt-12">
          <div className="h-1 bg-border overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
              Loading
            </span>
            <span className="font-mono text-xs text-primary">
              {progress}%
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
