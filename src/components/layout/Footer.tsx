import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer id="contact" className="relative pt-32 pb-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-background pointer-events-none" />

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Massive CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-bold text-foreground tracking-tighter mb-8">
            Let's Work
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10">
            Ready to transform your e-commerce operations with intelligent AI systems?
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 rounded-full font-medium text-lg group"
              onClick={() => {
                navigate('/contact');
                window.scrollTo(0, 0);
              }}
            >
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <span className="font-heading text-2xl font-bold text-foreground">SMARB</span>
            <span className="text-muted-foreground">Technologies</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <motion.a
              href="https://www.linkedin.com/company/108614278/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-foreground transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="mailto:contact@smarbtechnologies.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-foreground transition-all"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 SMARB Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;