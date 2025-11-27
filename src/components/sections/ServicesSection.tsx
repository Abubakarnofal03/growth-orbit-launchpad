import { motion } from "framer-motion";
import { Code, Globe, Zap, Cloud, Brain, Palette, Database, Shield } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlowCard, Magnetic } from "@/components/ui/ScrollAnimations";

const ServicesSection = () => {
  const services = [
    {
      icon: <Brain className="h-10 w-10" />,
      title: "AI & Machine Learning",
      description: "Custom AI solutions, RAG systems, NLP, and intelligent automation that transform your operations",
      color: "cyan"
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Custom Software",
      description: "Enterprise-grade applications built with modern tech stacks and scalable architecture",
      color: "violet"
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Web Development",
      description: "Lightning-fast, SEO-optimized websites and web applications that convert",
      color: "blue"
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "Cloud Solutions",
      description: "AWS, GCP, and Azure infrastructure with DevOps best practices",
      color: "cyan"
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love and businesses trust",
      color: "violet"
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Data Engineering",
      description: "Scalable data pipelines, analytics, and real-time processing solutions",
      color: "blue"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Cybersecurity",
      description: "Enterprise security audits, penetration testing, and compliance solutions",
      color: "cyan"
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Automation",
      description: "Workflow automation, process optimization, and efficiency solutions",
      color: "violet"
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, hsl(263 70% 58% / 0.2) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, hsl(187 100% 50% / 0.2) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 lg:px-20 max-w-[1440px] w-full relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="slide-up" className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            Our Services
          </span>
          <h2 className="text-display font-bold mb-6 text-foreground">
            What We{" "}
            <span className="text-gradient">Build</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            End-to-end technology solutions designed to scale with your business
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Magnetic strength={0.1}>
                <GlowCard 
                  glowColor={service.color as "cyan" | "violet" | "blue"}
                  className="glass rounded-2xl p-8 text-center border border-white/5 h-full group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`mb-6 flex justify-center ${
                      service.color === "cyan" ? "text-brand-cyan" : 
                      service.color === "violet" ? "text-brand-violet" : 
                      "text-brand-blue"
                    } group-hover:drop-shadow-[0_0_20px_currentColor] transition-all duration-300`}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <motion.div 
                    className="mt-6 w-12 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </GlowCard>
              </Magnetic>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <ScrollReveal animation="fade" delay={0.5} className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need something custom? We've got you covered.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-foreground font-medium hover:border-primary/50 transition-all duration-300"
          >
            Let's discuss your project
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
