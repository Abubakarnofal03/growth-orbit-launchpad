import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after 2s
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    // Complete and unmount after animation finishes
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3200); // 2s wait + 1.2s animation

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A1628] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={isExiting ? { 
        opacity: 0,
        y: "-100%"
      } : { opacity: 1 }}
      transition={
        isExiting ? {
          opacity: { duration: 0.4, ease: "easeIn" },
          y: { duration: 0.8, delay: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }
        } : {}
      }
    >
      {/* Gradient orbs background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#00D9FF] opacity-20 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#9D4EDD] opacity-20 blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.25, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* SMARB text */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-[120px] md:text-[180px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-[#9D4EDD] to-[#00D9FF] bg-[length:200%_auto]"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          SMARB
        </motion.h1>
        
        {/* Glowing underline */}
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent mt-4"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      {/* Loading indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-[#00D9FF]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
