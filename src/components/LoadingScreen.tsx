import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [fillProgress, setFillProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Smooth, professional fill animation
    const fillInterval = setInterval(() => {
      setFillProgress((prev) => {
        if (prev >= 100) {
          clearInterval(fillInterval);
          // Brief pause before exit
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              onComplete();
            }, 1000);
          }, 500);
          return 100;
        }
        return prev + 1.8; // Smooth, controlled fill rate
      });
    }, 20);

    return () => clearInterval(fillInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100vh", 
            transition: { 
              duration: 1.2, 
              ease: [0.25, 0.1, 0.25, 1] 
            } 
          }}
          className="fixed inset-0 z-[9999] bg-[#F8FAFC] flex items-center justify-center overflow-hidden"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#002B5B]/5 via-transparent to-[#0050A0]/5" />

          {/* Main SMARB text with liquid fill */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              {/* Base text (subtle outline) */}
              <h1
                className="text-[100px] sm:text-[140px] md:text-[180px] lg:text-[220px] xl:text-[260px] font-bold text-[#E5E7EB]"
                style={{
                  letterSpacing: "-0.03em",
                  fontFamily: "Inter, sans-serif",
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
                  className="text-[100px] sm:text-[140px] md:text-[180px] lg:text-[220px] xl:text-[260px] font-bold bg-gradient-to-b from-[#002B5B] via-[#0050A0] to-[#002B5B] bg-clip-text text-transparent"
                  style={{
                    letterSpacing: "-0.03em",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  SMARB
                </h1>
              </motion.div>

              {/* Refined liquid wave effect at fill line */}
              <motion.div
                className="absolute left-0 right-0"
                style={{
                  top: `${100 - fillProgress}%`,
                  transform: "translateY(-50%)",
                }}
                animate={{
                  opacity: fillProgress > 10 && fillProgress < 100 ? [0.4, 0.7, 0.4] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  width="100%"
                  height="40"
                  viewBox="0 0 1200 40"
                  preserveAspectRatio="none"
                  className="w-full h-[40px]"
                >
                  <motion.path
                    d="M0,20 Q300,5 600,20 T1200,20 L1200,40 L0,40 Z"
                    fill="url(#liquidGradient)"
                    initial={{ d: "M0,20 Q300,5 600,20 T1200,20 L1200,40 L0,40 Z" }}
                    animate={{
                      d: [
                        "M0,20 Q300,5 600,20 T1200,20 L1200,40 L0,40 Z",
                        "M0,20 Q300,35 600,20 T1200,20 L1200,40 L0,40 Z",
                        "M0,20 Q300,5 600,20 T1200,20 L1200,40 L0,40 Z",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <defs>
                    <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0050A0" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#0078D7" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#002B5B" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Inspirational Quote */}
          <motion.div
            className="absolute bottom-32 left-1/2 transform -translate-x-1/2 max-w-2xl px-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="text-lg sm:text-xl text-[#6B7280] font-light italic leading-relaxed">
              "Building tomorrow's digital solutions, today."
            </p>
          </motion.div>

          {/* Professional progress indicator */}
          <motion.div
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-80 max-w-[90%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="h-[2px] bg-[#E5E7EB] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#002B5B] via-[#0050A0] to-[#002B5B] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${fillProgress}%` }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              />
            </div>
            <motion.p
              className="text-center mt-4 text-sm text-[#6B7280] font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
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
