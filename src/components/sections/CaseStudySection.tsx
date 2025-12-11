import { motion } from "framer-motion";
import { ArrowUpRight, Clock, TrendingDown, Bot } from "lucide-react";

const CaseStudySection = () => {
  const stats = [
    { value: "50%", label: "Cost Reduction", icon: <TrendingDown className="h-5 w-5" /> },
    { value: "24/7", label: "Uptime", icon: <Clock className="h-5 w-5" /> },
    { value: "Zero", label: "Human Intervention", icon: <Bot className="h-5 w-5" /> },
  ];

  return (
    <section id="case-study" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium text-primary mb-4 block">Case Study</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-h2 font-bold text-foreground tracking-tight mb-6">
              Haya Fit Intima
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A premium fitness brand drowning in customer service tickets. We deployed an AI agent 
              that now handles 90% of inquiries autonomously — from order tracking to returns processing.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2 text-primary">
                    {stat.icon}
                  </div>
                  <div className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors group"
            >
              Get similar results
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Mock Dashboard */}
            <div className="bento-card p-6 relative">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-muted-foreground">AI Support Dashboard</span>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Tickets Today", value: "1,247" },
                  { label: "Resolved", value: "1,122" },
                  { label: "Avg. Time", value: "< 30s" },
                ].map((item) => (
                  <div key={item.label} className="bg-background/50 rounded-lg p-4">
                    <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                    <div className="text-xl font-heading font-bold text-foreground">{item.value}</div>
                  </div>
                ))}
              </div>

              {/* Chat Preview */}
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs">
                    C
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
                    <p className="text-sm text-foreground">Where is my order #HF78291?</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-primary/20 border border-primary/30 rounded-2xl rounded-tr-none px-4 py-2 max-w-[80%]">
                    <p className="text-sm text-foreground">
                      Your order is out for delivery! Expected arrival: Today by 5PM. 
                      <span className="text-primary"> Track live →</span>
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-px bg-gradient-to-b from-primary/20 to-transparent rounded-2xl opacity-50 blur-xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;