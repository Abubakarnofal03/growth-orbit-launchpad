import { motion } from "framer-motion";
import { ArrowUpRight, Bot, ShoppingCart, Globe, Plane } from "lucide-react";

const CaseStudySection = () => {
  const caseStudies = [
    {
      name: "Haya Fit Intima",
      category: "AI Automation",
      description: "Deployed an AI support agent handling 90% of customer inquiries autonomously — from order tracking to returns.",
      stats: [
        { value: "50%", label: "Cost Reduction" },
        { value: "24/7", label: "Uptime" },
        { value: "90%", label: "Auto-resolved" },
      ],
      icon: <Bot className="h-6 w-6" />,
      featured: true,
    },
    {
      name: "Decorium",
      category: "E-commerce",
      description: "Built a premium furniture e-commerce platform with seamless checkout and inventory management.",
      stats: [
        { value: "3x", label: "Conversion Rate" },
        { value: "40%", label: "Revenue Growth" },
      ],
      icon: <ShoppingCart className="h-6 w-6" />,
      logo: "/decorium logo.jpg",
    },
    {
      name: "TheShoppingCart",
      category: "Custom Platform",
      description: "Full-stack shopping platform with multi-vendor support and real-time order tracking.",
      stats: [
        { value: "10K+", label: "Daily Orders" },
        { value: "99.9%", label: "Uptime" },
      ],
      icon: <Globe className="h-6 w-6" />,
      logo: "/theshoppingcart logo.jpg",
    },
    {
      name: "VisaMate",
      category: "SaaS Product",
      description: "AI-powered visa application assistant helping users navigate complex immigration processes.",
      stats: [
        { value: "85%", label: "Success Rate" },
        { value: "50K+", label: "Users Helped" },
      ],
      icon: <Plane className="h-6 w-6" />,
      logo: "/visamate-logo.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="case-study" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">Our Work</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-h2 font-bold text-foreground tracking-tight mb-6">
            Case Studies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results for forward-thinking brands.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.name}
              variants={itemVariants}
              className={`bento-card p-8 group cursor-pointer ${study.featured ? 'md:col-span-2' : ''}`}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {study.logo ? (
                      <img 
                        src={study.logo} 
                        alt={study.name} 
                        className="h-12 w-12 rounded-xl object-cover"
                      />
                    ) : (
                      <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        {study.icon}
                      </div>
                    )}
                    <div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                        {study.name}
                      </h3>
                      <span className="text-sm text-primary">{study.category}</span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ x: 4, y: -4 }}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 flex-grow">
                  {study.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6">
                  {study.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;