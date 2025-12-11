import { motion } from "framer-motion";
import { Bot, TrendingUp, GitBranch, Zap, Code, ShoppingCart, Users, Globe, Cpu, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: "ai-automation",
      icon: <Bot className="h-8 w-8" />,
      title: "AI Automation",
      description: "24/7 intelligent agents for customer support, lead qualification, and workflow automation. Zero wait times, infinite scale.",
    },
    {
      id: "custom-software",
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software",
      description: "Bespoke applications tailored to your unique business requirements and workflows.",
    },
    {
      id: "crm-development",
      icon: <Users className="h-8 w-8" />,
      title: "CRM Development",
      description: "Custom CRM solutions that streamline sales, marketing, and customer relationships.",
    },
    {
      id: "ecommerce-stores",
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Stores",
      description: "High-converting online stores built for scale and optimized for revenue.",
    },
    {
      id: "wordpress-development",
      icon: <Globe className="h-8 w-8" />,
      title: "WordPress Development",
      description: "Custom WordPress sites, themes, and plugins for any business need.",
    },
    {
      id: "data-analytics",
      icon: <Database className="h-8 w-8" />,
      title: "Data & Analytics",
      description: "Real-time dashboards and insights powered by AI.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">What We Build</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-h2 font-bold text-foreground tracking-tight mb-6">
            Full-Stack
            <span className="text-gradient-primary"> Technology Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From AI automation to custom software — we build the systems that scale your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              onClick={() => navigate(`/services/${service.id}`)}
              className={`bento-card p-6 group cursor-pointer ${index === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''}`}
            >
              <div className="h-full flex flex-col">
                <div className="mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow">
                  {service.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;