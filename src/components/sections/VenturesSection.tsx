import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, GlowCard, Magnetic } from "@/components/ui/ScrollAnimations";

const VenturesSection = () => {
  const ventures = [
    {
      id: 1,
      name: "VisaMate",
      url: "https://visamate.pro",
      description: "AI-powered visa application management system that automates document processing and provides real-time status tracking.",
      features: [
        "AI document verification",
        "Automated screening",
        "Real-time tracking",
        "Multi-language support"
      ],
      logo: "/visamate-logo.png",
      status: "live",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      id: 2,
      name: "SkillMap",
      url: "#",
      description: "AI-driven platform that analyzes skills and project requirements to automatically form optimal teams.",
      features: [
        "AI skill analysis",
        "Team optimization",
        "Performance prediction",
        "Resource tracking"
      ],
      logo: null,
      status: "coming-soon",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      id: 3,
      name: "The Shopping Cart",
      url: "https://www.theshoppingcart.shop",
      description: "Comprehensive e-commerce platform with modern design and optimized checkout experience.",
      features: [
        "Modern e-commerce",
        "Optimized checkout",
        "Product management",
        "SEO optimization"
      ],
      logo: "/theshoppingcart logo.jpg",
      status: "live",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      name: "Decorium",
      url: "https://decorium.com.pk",
      description: "Elegant e-commerce platform specializing in long-lasting metal decoratives and home accessories.",
      features: [
        "E-commerce store",
        "Catalog management",
        "Order processing",
        "Digital marketing"
      ],
      logo: "/decorium logo.jpg",
      status: "live",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="ventures" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-20 max-w-[1440px] w-full relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="slide-up" className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-secondary/10 text-secondary border border-secondary/20 mb-6">
            <Sparkles className="inline h-4 w-4 mr-2" />
            Our Ventures
          </span>
          <h2 className="text-display font-bold mb-6 text-foreground">
            Products We've{" "}
            <span className="text-gradient">Built</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Platforms and products developed, maintained, and scaled by SMARB Technologies
          </p>
        </ScrollReveal>

        {/* Ventures Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto" staggerDelay={0.15}>
          {ventures.map((venture, index) => (
            <StaggerItem key={venture.id}>
              <Magnetic strength={0.05}>
                <GlowCard 
                  glowColor={index % 2 === 0 ? "cyan" : "violet"}
                  className="glass rounded-2xl overflow-hidden border border-white/5 h-full group"
                >
                  {/* Status badge */}
                  {venture.status === "coming-soon" && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0 shadow-glow-cyan">
                        Coming Soon
                      </Badge>
                    </div>
                  )}
                  
                  {/* Gradient top bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${venture.gradient}`} />
                  
                  <div className="p-8">
                    {/* Logo */}
                    <div className="flex items-center justify-center mb-6">
                      {venture.logo ? (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="relative"
                        >
                          <img 
                            src={venture.logo} 
                            alt={`${venture.name} logo`}
                            className="h-16 w-auto rounded-lg"
                          />
                        </motion.div>
                      ) : (
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className={`h-16 w-16 bg-gradient-to-br ${venture.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <span className="text-2xl font-bold text-white">
                            {venture.name.charAt(0)}
                          </span>
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-2xl font-bold mb-4 text-center text-foreground group-hover:text-gradient transition-all duration-300">
                      {venture.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                      {venture.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {venture.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="h-4 w-4 text-brand-emerald flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    {venture.status === "coming-soon" ? (
                      <Button 
                        variant="outline" 
                        className="w-full glass border-white/10 cursor-not-allowed opacity-50" 
                        disabled
                      >
                        Coming Soon
                      </Button>
                    ) : (
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button 
                          className={`w-full bg-gradient-to-r ${venture.gradient} text-white border-0 hover:opacity-90 transition-all duration-300 group/btn`}
                          asChild
                        >
                          <a href={venture.url} target="_blank" rel="noopener noreferrer">
                            Visit Website
                            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </GlowCard>
              </Magnetic>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default VenturesSection;
