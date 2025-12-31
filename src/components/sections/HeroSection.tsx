import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import AnimatedBlob from "@/components/AnimatedBlob";

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-brutal opacity-30" />
      <AnimatedBlob />
      
      {/* Scanlines */}
      <div className="absolute inset-0 scanlines pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="tag-neon">AI-Powered Solutions</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-massive font-display text-foreground mb-6"
          >
            <span className="glitch" data-text="WE BUILD">WE BUILD</span>
            <br />
            <span className="text-gradient-harsh">AI SYSTEMS</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-sans"
          >
            Stop bleeding money on support and inefficiencies. We deploy intelligent 
            agents that <span className="text-primary">cut costs</span> and <span className="text-secondary">recover revenue</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#case-studies")}
              className="group bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider text-lg px-8 py-6 hover-brutal"
            >
              View Case Studies
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/contact")}
              className="group border-2 border-foreground/20 hover:border-primary font-mono uppercase tracking-wider text-lg px-8 py-6"
            >
              Start a Conversation
            </Button>
          </motion.div>

          {/* Trust Marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 border-y border-border py-4 overflow-hidden"
          >
            <div className="flex animate-marquee whitespace-nowrap">
              {["TRUSTED BY INNOVATORS", "•", "AI AUTOMATION", "•", "E-COMMERCE", "•", "CUSTOM SOFTWARE", "•", "TRUSTED BY INNOVATORS", "•", "AI AUTOMATION", "•", "E-COMMERCE", "•", "CUSTOM SOFTWARE", "•"].map((text, i) => (
                <span key={i} className="mx-4 font-mono text-sm uppercase tracking-widest text-muted-foreground">
                  {text}
                </span>
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
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("#services")}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
