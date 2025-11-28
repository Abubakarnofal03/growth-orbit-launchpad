import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Globe, Zap, Cloud } from "lucide-react";
import { useTextReveal } from "@/hooks/use-text-reveal";

const ServicesSection = () => {
  const servicesDescription = "Comprehensive technology solutions to transform your business";
  const { ref: descRef, displayedText: descText, inView: descInView } = useTextReveal(servicesDescription, 20);

  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Custom Software",
      description: "Tailored enterprise applications"
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Web Development",
      description: "Scalable, secure, lightning-fast"
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "AI & Automation",
      description: "Smarter workflows, real-time insights"
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "Cloud Solutions",
      description: "Resilient, global-ready infrastructure"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section id="services" className="py-32 bg-card w-full relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.03),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-20 max-w-[1440px] w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary/70 mb-4"
          >
            What We Do
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground tracking-tight">
            Our Services
          </h2>
          <div ref={descRef} className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed min-h-[2rem]">
              {descInView ? descText : servicesDescription}
              {descInView && descText.length < servicesDescription.length && (
                <span className="inline-block w-0.5 h-5 bg-primary/60 ml-0.5 animate-pulse" />
              )}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group"
            >
              <Card className="p-10 text-center hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 rounded-2xl border border-border/50 hover:border-primary/30 h-full bg-background/80 backdrop-blur-sm cursor-pointer relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-8 flex justify-center text-primary group-hover:text-accent transition-colors duration-300 relative z-10"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight relative z-10">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {service.description}
                </p>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
