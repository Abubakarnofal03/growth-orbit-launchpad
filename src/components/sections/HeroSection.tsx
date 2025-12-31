import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Shield, Clock, Users, CheckCircle } from "lucide-react";
import AnimatedBlob from "@/components/AnimatedBlob";

const clientLogos = [
  { name: "Haya Fit Intima", logo: null },
  { name: "Decorium", logo: "/decorium logo.jpg" },
  { name: "TheShoppingCart", logo: "/theshoppingcart logo.jpg" },
  { name: "VisaMate", logo: "/visamate-logo.png" },
];

const trustBadges = [
  { icon: Shield, text: "Enterprise Security" },
  { icon: Clock, text: "24/7 Support" },
  { icon: Users, text: "50+ Clients" },
];

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-brutal opacity-20" />
      <AnimatedBlob />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-primary/5 font-mono text-sm uppercase tracking-wider text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              AI-Powered Solutions
            </span>
          </motion.div>

          {/* Main Headline - Clean, no glitch */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-foreground mb-6"
          >
            <span className="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wide">
              WE BUILD
            </span>
            <span className="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wide text-gradient-harsh">
              AI SYSTEMS
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-sans leading-relaxed"
          >
            Stop bleeding money on support and inefficiencies. We deploy intelligent 
            agents that <span className="text-primary font-medium">cut costs</span> and <span className="text-secondary font-medium">recover revenue</span>.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border"
              >
                <badge.icon className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {badge.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#case-studies")}
              className="group bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider px-8 py-6"
            >
              View Case Studies
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/contact")}
              className="group border-2 border-border hover:border-primary font-mono uppercase tracking-wider px-8 py-6"
            >
              Start a Conversation
            </Button>
          </motion.div>

          {/* Trusted By Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="border-t border-border pt-10"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Trusted by forward-thinking brands
            </p>
            <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
              {clientLogos.map((client) => (
                <motion.div
                  key={client.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-10 w-10 object-contain rounded grayscale hover:grayscale-0 transition-all"
                    />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-primary" />
                  )}
                  <span className="font-sans text-sm text-foreground/80">
                    {client.name}
                  </span>
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
