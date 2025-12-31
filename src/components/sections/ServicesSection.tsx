import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Bot, TrendingUp, Workflow, Code, ShoppingCart, Database } from "lucide-react";

const services = [
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI Automation",
    description: "Deploy intelligent agents that handle customer support, data processing, and business operations 24/7.",
    tag: "Featured",
    size: "large",
  },
  {
    id: "custom-software",
    icon: Code,
    title: "Custom Software",
    description: "Bespoke applications built to solve your unique business challenges.",
    size: "medium",
  },
  {
    id: "crm-development",
    icon: Database,
    title: "CRM Development",
    description: "Custom CRM solutions that streamline your sales and customer relationships.",
    size: "medium",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description: "High-converting online stores optimized for growth and scalability.",
    size: "medium",
  },
  {
    id: "revenue-recovery",
    icon: TrendingUp,
    title: "Revenue Recovery",
    description: "AI-powered systems to recover abandoned carts and maximize customer lifetime value.",
    size: "medium",
  },
  {
    id: "workflow-automation",
    icon: Workflow,
    title: "Workflow Automation",
    description: "Custom integrations and automations that eliminate manual tasks.",
    size: "medium",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-brutal opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="tag-electric mb-4 inline-block">What We Do</span>
          <h2 className="text-giant font-display text-foreground">
            SERVICES
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => navigate(`/services/${service.id}`)}
              className={`group cursor-pointer p-8 border-2 border-border hover:border-primary bg-card/50 backdrop-blur-sm transition-all duration-300 hover-brutal ${
                service.size === "large" ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* Tag */}
              {service.tag && (
                <span className="tag-neon mb-4 inline-block">{service.tag}</span>
              )}

              {/* Icon */}
              <div className="mb-6">
                <service.icon className="h-12 w-12 text-primary" />
              </div>

              {/* Content */}
              <h3 className={`font-display tracking-wide mb-4 ${
                service.size === "large" ? "text-5xl" : "text-3xl"
              }`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground font-sans leading-relaxed">
                {service.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-mono text-sm uppercase tracking-wider">Learn More</span>
                <span className="text-xl">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
