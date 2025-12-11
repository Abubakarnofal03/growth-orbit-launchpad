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
          }, 400);
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
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-[#030712] flex items-center justify-center overflow-hidden"
        >
          {/* Background mesh gradient */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#6366F1]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#22D3EE]/8 rounded-full blur-[100px]" />
          </div>

          {/* Main SMARB text with fill */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              {/* Base text (outline) */}
              <h1
                className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-bold text-[#1a1f2e]"
                style={{
                  letterSpacing: "-0.04em",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                SMARB
              </h1>

              {/* Filling text */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: `inset(${100 - fillProgress}% 0 0 0)`,
                }}
              >
                <h1
                  className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-bold bg-gradient-to-b from-[#6366F1] via-[#8B5CF6] to-[#22D3EE] bg-clip-text text-transparent"
                  style={{
                    letterSpacing: "-0.04em",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  SMARB
                </h1>
              </motion.div>

              {/* Wave effect */}
              <motion.div
                className="absolute left-0 right-0"
                style={{
                  top: `${100 - fillProgress}%`,
                  transform: "translateY(-50%)",
                }}
                animate={{
                  opacity: fillProgress > 5 && fillProgress < 100 ? [0.3, 0.6, 0.3] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  width="100%"
                  height="30"
                  viewBox="0 0 1200 30"
                  preserveAspectRatio="none"
                  className="w-full h-[30px]"
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
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <defs>
                    <linearGradient id="liquidGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366F1" stopOpacity="0.5" />
                      <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#6366F1" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="h-[2px] bg-[#1a1f2e] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${fillProgress}%` }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              />
            </div>
            <p className="text-center mt-3 text-xs text-[#64748B] font-medium tracking-wider">
              {Math.round(fillProgress)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;