import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const HeroSection = () => {
  const navigate = useNavigate();
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      </div>

      {/* Grid pattern overlay (optional, keeping for texture if needed, or removing if video is enough. Keeping subtle.) */}
      <div
        className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            AI-Powered E-commerce Solutions
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-display font-bold text-foreground tracking-tighter mb-8 leading-[0.95]"
        >
          We Build the AI Systems
          <br />
          <TypewriterEffect
            words={[
              "That Power Profitable E-commerce.",
              "That Automate Growth.",
              "That Scale Revenue.",
              "That Optimise Operations."
            ]}
            className="text-gradient-primary"
            cursorClassName="bg-blue-500"
            typingSpeed={50}
            deletingSpeed={30}
          />
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-body"
        >
          Stop bleeding money on support and inefficiencies. We deploy intelligent
          agents that cut costs and recover revenue.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => handleScroll('#case-study')}
              size="lg"
              className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full font-medium text-base group"
            >
              View Case Studies
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => navigate('/contact')}
              variant="outline"
              size="lg"
              className="border-border hover:border-primary/50 hover:bg-primary/5 text-foreground px-8 py-6 rounded-full font-medium text-base backdrop-blur-sm bg-background/20"
            >
              Start a Conversation
            </Button>
          </motion.div>
        </motion.div>

        {/* Trusted by section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24"
        >
          <p className="text-sm text-muted-foreground mb-8">Trusted by forward-thinking brands</p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {['Haya Fit', 'Brand 2', 'Brand 3', 'Brand 4'].map((brand) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0.4 }}
                whileHover={{ opacity: 1 }}
                className="text-muted-foreground/50 hover:text-foreground font-heading font-bold text-xl transition-all duration-300 cursor-default"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;