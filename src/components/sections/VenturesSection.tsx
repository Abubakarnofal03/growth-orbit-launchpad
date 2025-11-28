import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink } from "lucide-react";
import { useTextReveal } from "@/hooks/use-text-reveal";

const VenturesSection = () => {
  const venturesDescription = "Products and platforms built, maintained, and marketed by SMARB Technologies";
  const { ref: descRef, displayedText: descText, inView: descInView } = useTextReveal(venturesDescription, 20);

  const ventures = [
    {
      id: 1,
      name: "VisaMate",
      url: "https://visamate.pro",
      description: "AI-powered visa application management system that automates document processing, application screening, and provides real-time status tracking for applicants worldwide.",
      features: [
        "AI-powered document verification",
        "Automated application screening",
        "Real-time status tracking",
        "Multi-language support"
      ],
      logo: "/visamate-logo.png",
      status: "live"
    },
    {
      id: 2,
      name: "SkillMap",
      url: "#",
      description: "AI-driven platform that analyzes skills, experience, and project requirements to automatically form optimal teams for maximum project success.",
      features: [
        "AI-powered skill analysis",
        "Team composition optimization",
        "Performance prediction",
        "Resource availability tracking"
      ],
      logo: null,
      status: "coming-soon"
    },
    {
      id: 3,
      name: "The Shopping Cart",
      url: "https://www.theshoppingcart.shop",
      description: "A comprehensive e-commerce store built, maintained, and marketed by SMARB Technologies. Offering a seamless shopping experience with modern design and optimized performance.",
      features: [
        "Modern e-commerce platform",
        "Optimized checkout flow",
        "Product management system",
        "Marketing & SEO optimization"
      ],
      logo: "/theshoppingcart logo.jpg",
      status: "live"
    },
    {
      id: 4,
      name: "Decorium",
      url: "https://decorium.com.pk",
      description: "An elegant e-commerce platform specializing in long-lasting metal decoratives, home organizers, and garden accessories. Built and maintained by SMARB Technologies.",
      features: [
        "E-commerce store for decoratives",
        "Product catalog management",
        "Order processing system",
        "Digital marketing & maintenance"
      ],
      logo: "/decorium logo.jpg",
      status: "live"
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
    <section id="ventures" className="py-32 bg-background w-full relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(var(--primary)/0.03),transparent_60%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-20 max-w-[1440px] w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary/70 mb-4"
          >
            Our Products
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground tracking-tight">
            Our Ventures
          </h2>
          <div ref={descRef} className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed min-h-[2rem]">
              {descInView ? descText : venturesDescription}
              {descInView && descText.length < venturesDescription.length && (
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
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {ventures.map((venture) => (
            <motion.div
              key={venture.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="p-10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full overflow-hidden relative rounded-2xl border border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm">
                {venture.status === "coming-soon" && (
                  <div className="absolute top-6 right-6 z-10">
                    <Badge className="bg-accent text-accent-foreground font-semibold">Coming Soon</Badge>
                  </div>
                )}
                
                <div className="flex items-center justify-center mb-8">
                  {venture.logo ? (
                    <img 
                      src={venture.logo} 
                      alt={`${venture.name} logo`}
                      className="h-16 w-auto"
                    />
                  ) : (
                    <div className="h-16 w-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {venture.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-primary transition-colors text-foreground tracking-tight">
                  {venture.name}
                </h3>
                
                <p className="text-muted-foreground mb-8 text-center leading-relaxed">
                  {venture.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {venture.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {venture.status === "coming-soon" ? (
                  <Button 
                    variant="outline" 
                    className="w-full cursor-not-allowed opacity-50 rounded-xl h-12" 
                    disabled
                  >
                    Coming Soon
                  </Button>
                ) : (
                  <Button 
                    variant="outline" 
                    className="w-full group/btn border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 rounded-xl h-12 font-semibold" 
                    asChild
                  >
                    <a href={venture.url} target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </Button>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VenturesSection;
