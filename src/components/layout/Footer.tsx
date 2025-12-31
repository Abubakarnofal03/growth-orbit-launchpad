import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-brutal opacity-20" />
      
      {/* Scanlines */}
      <div className="absolute inset-0 scanlines pointer-events-none" />

      {/* Main CTA Section */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-massive font-display text-stroke mb-8 hover:text-foreground transition-colors duration-500">
            LET'S WORK
          </h2>
          
          <Button
            size="lg"
            onClick={() => navigate("/contact")}
            className="group bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider text-xl px-12 py-8 box-neon"
          >
            Start Your Project
            <ArrowUpRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="divider-brutal" />

      {/* Bottom Section */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span className="text-2xl font-display tracking-wider text-foreground">
            SMARB
          </span>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/smarbtechnologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:info.smarb@gmail.com"
              className="p-3 border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-mono text-sm text-muted-foreground">
            © 2025 SMARB Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
