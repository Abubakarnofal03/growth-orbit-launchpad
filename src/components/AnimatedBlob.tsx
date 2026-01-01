import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const AnimatedBlob = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  const isLight = theme === "light";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {isLight ? (
        <>
          {/* Light mode: Large blue gradient blob */}
          <motion.div
            className="absolute -top-1/4 -right-1/4 w-[900px] h-[900px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsla(210, 100%, 60%, 0.25) 0%, hsla(210, 100%, 70%, 0.1) 40%, transparent 70%)",
              filter: "blur(60px)",
            }}
            animate={{
              x: [0, 80, -20, 0],
              y: [0, 40, -30, 0],
              scale: [1, 1.15, 1.05, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Light mode: Secondary blue blob */}
          <motion.div
            className="absolute -bottom-1/3 -left-1/4 w-[700px] h-[700px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsla(220, 90%, 55%, 0.2) 0%, hsla(220, 80%, 60%, 0.08) 40%, transparent 70%)",
              filter: "blur(70px)",
            }}
            animate={{
              x: [0, -60, 30, 0],
              y: [0, -50, 20, 0],
              scale: [1, 1.2, 0.95, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />

          {/* Light mode: Floating center accent */}
          <motion.div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsla(200, 85%, 55%, 0.15) 0%, transparent 60%)",
              filter: "blur(50px)",
            }}
            animate={{
              x: [0, 50, -40, 0],
              y: [0, -30, 40, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </>
      ) : (
        <>
          {/* Dark mode: Primary large blob */}
          <motion.div
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Dark mode: Secondary smaller blob */}
          <motion.div
            className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-25"
            style={{
              background: "radial-gradient(circle, hsl(var(--secondary) / 0.4) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
            animate={{
              x: [0, -40, 0],
              y: [0, -50, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Dark mode: Tertiary accent blob */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, hsl(var(--accent) / 0.3) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -20, 20, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </>
      )}
    </div>
  );
};

export default AnimatedBlob;
