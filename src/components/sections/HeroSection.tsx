import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollY, [0, 1000], [0, 400]);
  const textY = useTransform(scrollY, [0, 1000], [0, 200]);

  const typewriterWords = [
    "Leading Technology Solutions for Global Businesses",
    "Innovating Digital Experiences That Scale",
    "Empowering Startups and Enterprises Worldwide",
    "Transforming Ideas Into Scalable Reality"
  ];

  const { currentText, isTyping, isDeleting } = useTypewriter({
    words: typewriterWords,
    typeSpeed: 60,
    deleteSpeed: 35,
    delayBetweenWords: 1200,
    holdTime: 1800
  });

  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center justify-center relative w-full overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#002B5B]/80 via-[#0050A0]/70 to-[#002B5B]/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-10" />
      
      {/* Animated particles/glow effect with Parallax */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: backgroundY }}
          animate={{
            x: [0, 100, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-[#0078D7]/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: backgroundY }}
          animate={{
            x: [0, -100, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#0050A0]/20 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-20 max-w-[1440px] w-full">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20"
          >
            <Sparkles className="h-4 w-4 text-[#0078D7]" />
            <span className="text-sm font-semibold">Trusted by Global Enterprises</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight min-h-[4rem] sm:min-h-[5rem] md:min-h-[8rem] tracking-tight"
          >
            <span className="relative bg-gradient-to-r from-blue-300 via-white to-blue-400 bg-clip-text text-transparent inline-block"
              style={{
                willChange: 'transform',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                transition: 'filter 300ms ease-out',
                filter: isDeleting ? 'blur(0.3px)' : 'none'
              }}
            >
              {currentText.trim()}
              <span className={`inline-block w-1 bg-gradient-to-b from-[#0078D7] to-[#0078D7]/60 ml-1 ${isTyping || isDeleting ? 'animate-blink' : ''}`}
                style={{
                  height: '1.2em',
                  marginTop: '0.1em',
                  verticalAlign: 'top',
                  opacity: 0.9
                }}
              />
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Trusted software engineers delivering cloud, AI, and web excellence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <div>
              <Button
                size="lg"
                className="group bg-[#0078D7] hover:bg-[#0066B8] text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-[#0078D7]/50 transition-all duration-300 relative overflow-hidden w-full sm:w-auto"
                asChild
              >
                <a href="#contact">
                  <span className="relative z-10 flex items-center">
                    Work With Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#0078D7] to-[#0050A0] opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </a>
              </Button>
            </div>
            
            <div>
              <Button
                variant="outline"
                size="lg"
                className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <a href="#case-studies">
                  Our Projects
                  <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-white/80 font-medium"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>100% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>ISO-Standard Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;