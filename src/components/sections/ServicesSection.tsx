import { motion } from "framer-motion";
import { Bot, TrendingUp, GitBranch, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Support Agents",
      description: "24/7 intelligent customer support that resolves tickets instantly. Zero wait times, consistent quality, infinite scale.",
      size: "large",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Revenue Recovery",
      description: "Automated systems that identify and recover lost revenue from cart abandonment to failed payments.",
      size: "medium",
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Custom Workflows",
      description: "Bespoke automation pipelines that eliminate repetitive tasks and streamline operations.",
      size: "medium",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Analytics",
      description: "Live dashboards powered by AI insights.",
      size: "small",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
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
    <section id="services" className="py-32 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary mb-4 block">What We Build</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-h2 font-bold text-foreground tracking-tight mb-6">
            Intelligent Systems for
            <br />
            <span className="text-gradient-primary">Modern Commerce</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enterprise-grade AI solutions that transform how you operate, sell, and support.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {/* Large Card - AI Support */}
          <motion.div
            variants={itemVariants}
            className="bento-card p-8 md:col-span-2 md:row-span-2 group cursor-pointer"
          >
            <div className="h-full flex flex-col">
              <div className="mb-6 text-primary group-hover:text-accent transition-colors duration-300">
                <Bot className="h-10 w-10" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                {services[0].title}
              </h3>
              <p className="text-muted-foreground text-base flex-grow">
                {services[0].description}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">Always Online</span>
                </div>
              </div>
            </div>
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          </motion.div>

          {/* Revenue Recovery */}
          <motion.div
            variants={itemVariants}
            className="bento-card p-6 md:col-span-1 md:row-span-1 group cursor-pointer"
          >
            <div className="h-full flex flex-col">
              <div className="mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {services[1].title}
              </h3>
              <p className="text-muted-foreground text-sm flex-grow line-clamp-3">
                {services[1].description}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          </motion.div>

          {/* Custom Workflows */}
          <motion.div
            variants={itemVariants}
            className="bento-card p-6 md:col-span-1 md:row-span-1 group cursor-pointer"
          >
            <div className="h-full flex flex-col">
              <div className="mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                <GitBranch className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {services[2].title}
              </h3>
              <p className="text-muted-foreground text-sm flex-grow line-clamp-3">
                {services[2].description}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          </motion.div>

          {/* Real-time Analytics - spans 2 cols */}
          <motion.div
            variants={itemVariants}
            className="bento-card p-6 md:col-span-2 md:row-span-1 group cursor-pointer"
          >
            <div className="h-full flex items-center gap-6">
              <div className="text-primary group-hover:text-accent transition-colors duration-300">
                <Zap className="h-10 w-10" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {services[3].title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {services[3].description}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;