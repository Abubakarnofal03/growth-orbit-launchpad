import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Shield, Award, Zap } from "lucide-react";
import AnimatedBlob from "@/components/AnimatedBlob";
import { useTypewriter } from "@/hooks/use-typewriter";

const clientLogos = [
  { name: "Decorium", logo: "/decorium logo.jpg" },
  { name: "TheShoppingCart", logo: "/theshoppingcart logo.jpg" },
  { name: "VisaMate", logo: "/visamate-logo.png" },
  { name: "YellowBee", logo: "/yellowbee-logo.png" },
];

const typewriterWords = [
  "Revenue Machines",
  "Growth Engines",
  "Market Leaders",
  "Industry Disruptors",
];

const HeroSection = () => {
  const navigate = useNavigate();
  const { currentText, isTyping } = useTypewriter({
    words: typewriterWords,
    typeSpeed: 80,
    deleteSpeed: 50,
    holdTime: 2000,
  });

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-brutal opacity-10" />
      <AnimatedBlob />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Exclusive Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 px-6 py-3 border border-primary/40 bg-primary/10 backdrop-blur-sm">
              <Award className="w-4 h-4 text-primary" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-medium">
                Elite AI Partnership
              </span>
              <Award className="w-4 h-4 text-primary" />
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-foreground mb-4"
          >
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide mb-2">
              WE BUILD
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide text-gradient-harsh min-h-[1.2em]">
              {currentText}
              <span className={`inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle ${isTyping ? 'animate-pulse' : ''}`} />
            </span>
          </motion.h1>

          {/* Premium Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-sans leading-relaxed"
          >
            We partner with <span className="text-foreground font-medium">ambitious brands</span> to deploy 
            AI systems that generate <span className="text-primary font-semibold">7-figure returns</span>. 
            Not for everyone—only for those ready to dominate.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-mono text-sm">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="h-5 w-5 text-secondary" />
              <span className="font-mono text-sm">$12M+ Revenue Generated</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="h-5 w-5 text-accent" />
              <span className="font-mono text-sm">Fortune 500 Trusted</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="group bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider px-10 py-7 text-base"
            >
              Apply for Partnership
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#case-studies")}
              className="group border-2 border-border hover:border-primary hover:bg-primary/5 font-mono uppercase tracking-wider px-10 py-7 text-base"
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="border-t border-border/50 pt-12"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground/60 mb-8">
              Trusted by industry leaders
            </p>
            <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="group"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-12 md:h-14 md:w-14 object-contain rounded grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
            onClick={() => scrollToSection("#services")}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Explore</span>
            <ArrowDown className="h-4 w-4 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
