import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink } from "lucide-react";

const VenturesSection = () => {
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

  return (
    <section id="ventures" className="py-20 bg-[#F8FAFC] w-full">
      <div className="container mx-auto px-6 lg:px-20 max-w-[1440px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#111827]">
            Our Ventures
          </h2>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            Products and platforms built, maintained, and marketed by SMARB Technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="p-8 hover:shadow-xl transition-all duration-300 group h-full overflow-hidden relative rounded-xl border border-[rgba(0,0,0,0.06)]">
                {venture.status === "coming-soon" && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-[#0078D7] text-white">Coming Soon</Badge>
                  </div>
                )}
                
                <div className="flex items-center justify-center mb-6">
                  {venture.logo ? (
                    <img 
                      src={venture.logo} 
                      alt={`${venture.name} logo`}
                      className="h-16 w-auto"
                    />
                  ) : (
                    <div className="h-16 w-16 bg-gradient-to-br from-[#0050A0] to-[#002B5B] rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {venture.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-[#0050A0] transition-colors text-[#111827]">
                  {venture.name}
                </h3>
                
                <p className="text-[#6B7280] mb-6 text-center leading-relaxed">
                  {venture.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {venture.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0050A0] mt-1 mr-3 flex-shrink-0" />
                      <span className="text-sm text-[#6B7280]">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {venture.status === "coming-soon" ? (
                  <Button 
                    variant="outline" 
                    className="w-full cursor-not-allowed opacity-50" 
                    disabled
                  >
                    Coming Soon
                  </Button>
                ) : (
                  <Button 
                    variant="outline" 
                    className="w-full group/btn hover:bg-[#0050A0] hover:text-white hover:border-[#0050A0] transition-all duration-300" 
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
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;

