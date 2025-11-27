import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [fillProgress, setFillProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const fillInterval = setInterval(() => {
      setFillProgress((prev) => {
        if (prev >= 100) {
          clearInterval(fillInterval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              onComplete();
            }, 800);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 18);

    return () => clearInterval(fillInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            transition: { 
              duration: 0.8, 
              ease: [0.25, 0.1, 0.25, 1] 
            } 
          }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden"
        >
          {/* Animated background mesh */}
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          
          {/* Floating orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
            style={{ background: "radial-gradient(circle, hsl(187 100% 50% / 0.2) 0%, transparent 70%)" }}
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
            style={{ background: "radial-gradient(circle, hsl(263 70% 58% / 0.2) 0%, transparent 70%)" }}
          />

          {/* Main SMARB text with liquid fill */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              {/* Base text (outline) */}
              <h1
                className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[240px] font-bold text-muted/30"
                style={{
                  letterSpacing: "-0.03em",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                SMARB
              </h1>

              {/* Filling liquid text */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: `inset(${100 - fillProgress}% 0 0 0)`,
                }}
              >
                <h1
                  className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[240px] font-bold text-gradient"
                  style={{
                    letterSpacing: "-0.03em",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  SMARB
                </h1>
              </motion.div>

              {/* Wave effect at fill line */}
              <motion.div
                className="absolute left-0 right-0 pointer-events-none"
                style={{
                  top: `${100 - fillProgress}%`,
                  transform: "translateY(-50%)",
                }}
                animate={{
                  opacity: fillProgress > 5 && fillProgress < 100 ? [0.4, 0.8, 0.4] : 0,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  width="100%"
                  height="30"
                  viewBox="0 0 1200 30"
                  preserveAspectRatio="none"
                  className="w-full"
                >
                  <motion.path
                    d="M0,15 Q300,5 600,15 T1200,15 L1200,30 L0,30 Z"
                    fill="url(#liquidGradientDark)"
                    animate={{
                      d: [
                        "M0,15 Q300,5 600,15 T1200,15 L1200,30 L0,30 Z",
                        "M0,15 Q300,25 600,15 T1200,15 L1200,30 L0,30 Z",
                        "M0,15 Q300,5 600,15 T1200,15 L1200,30 L0,30 Z",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <defs>
                    <linearGradient id="liquidGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(187 100% 50%)" stopOpacity="0.5" />
                      <stop offset="50%" stopColor="hsl(263 70% 58%)" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Quote */}
          <motion.div
            className="absolute bottom-32 left-1/2 transform -translate-x-1/2 max-w-xl px-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground font-light italic">
              "Building tomorrow's digital solutions, today."
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="h-1 bg-muted/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                initial={{ width: "0%" }}
                animate={{ width: `${fillProgress}%` }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              />
            </div>
            <motion.p
              className="text-center mt-4 text-sm text-muted-foreground font-medium tabular-nums"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.round(fillProgress)}%
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
