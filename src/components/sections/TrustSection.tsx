import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Clock, Users, Zap } from "lucide-react";

const stats = [
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: Users, value: "50+", label: "Clients Served" },
  { icon: Zap, value: "100+", label: "Projects Delivered" },
  { icon: Shield, value: "99%", label: "Client Satisfaction" },
];

const clients = [
  "Haya Fit Intima",
  "Decorium",
  "TheShoppingCart",
  "VisaMate",
  "YellowBee",
];

const TrustSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-brutal opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 border border-border bg-card/50 backdrop-blur-sm hover-brutal"
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="counter text-primary">{stat.value}</div>
              <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trusted By Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-y border-border py-8 overflow-hidden"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="tag-neon">Trusted By</span>
            <span className="text-muted-foreground font-mono text-sm">
              Forward-thinking brands
            </span>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...clients, ...clients].map((client, index) => (
                <span
                  key={index}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-giant font-display text-stroke mx-4 sm:mx-8 hover:text-foreground transition-all duration-300 cursor-default"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 border border-primary/30 bg-primary/5">
            <Shield className="h-4 w-4 text-primary" />
            <span className="font-mono text-xs uppercase tracking-wider">
              24/7 Support
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border border-secondary/30 bg-secondary/5">
            <Clock className="h-4 w-4 text-secondary" />
            <span className="font-mono text-xs uppercase tracking-wider">
              Fast Delivery
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border border-accent/30 bg-accent/5">
            <Zap className="h-4 w-4 text-accent" />
            <span className="font-mono text-xs uppercase tracking-wider">
              AI-Powered
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
