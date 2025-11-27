import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";
import { useRef } from "react";
import { Magnetic } from "@/components/ui/ScrollAnimations";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const typewriterWords = [
    "AI Solutions That Scale",
    "Software That Performs",
    "Digital Experiences That Convert",
    "Innovation That Drives Growth"
  ];

  const { currentText, isTyping, isDeleting } = useTypewriter({
    words: typewriterWords,
    typeSpeed: 50,
    deleteSpeed: 30,
    delayBetweenWords: 1500,
    holdTime: 2000
  });

  return (
    <section 
      ref={ref} 
      id="home" 
      className="min-h-screen flex items-center justify-center relative w-full overflow-hidden bg-background"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ 
            y: backgroundY,
            background: "radial-gradient(circle, hsl(187 100% 50% / 0.15) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] rounded-full animate-pulse-glow"
        />
        <motion.div
          style={{ 
            y: backgroundY,
            background: "radial-gradient(circle, hsl(263 70% 58% / 0.15) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/3 -right-20 w-[700px] h-[700px] rounded-full animate-pulse-glow"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, hsl(217 91% 60% / 0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <motion.div 
        style={{ y: textY, opacity }}
        className="container mx-auto px-6 lg:px-20 relative z-20 max-w-[1440px] w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-card/50 backdrop-blur-xl rounded-full mb-8 border border-primary/20 shadow-lg shadow-primary/5"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Trusted by Global Enterprises</span>
          </motion.div>

          {/* Main headline with gradient text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-hero font-bold mb-8 leading-tight min-h-[2.5em] tracking-tight"
          >
            <span 
              className="relative text-gradient inline-block"
              style={{
                willChange: 'transform',
                transition: 'filter 300ms ease-out',
                filter: isDeleting ? 'blur(0.5px)' : 'none'
              }}
            >
              {currentText.trim() || "\u00A0"}
              <motion.span 
                className={`inline-block w-[3px] bg-gradient-to-b from-primary to-secondary ml-1 rounded-full ${isTyping || isDeleting ? 'animate-blink' : ''}`}
                style={{
                  height: '0.9em',
                  verticalAlign: 'middle',
                }}
              />
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-subtitle text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Premium software engineering for startups and enterprises. 
            We build AI-powered solutions, web applications, and cloud infrastructure that drive real business results.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Magnetic strength={0.2}>
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-glow-cyan transition-all duration-300 overflow-hidden"
                asChild
              >
                <a href="#contact">
                  <span className="relative z-10 flex items-center gap-2">
                    Work With Us
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </Button>
            </Magnetic>
            
            <Magnetic strength={0.2}>
              <Button
                variant="outline"
                size="lg"
                className="group glass border-primary/30 hover:border-primary/60 text-foreground hover:bg-primary/10 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                asChild
              >
                <a href="#case-studies" className="flex items-center gap-2">
                  View Our Work
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </Magnetic>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
          >
            {[
              "100% Client Satisfaction",
              "ISO-Standard Delivery",
              "24/7 Global Support"
            ].map((item, index) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
