import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  ArrowUpRight, 
  TrendingUp, 
  Users, 
  Target,
  BarChart3,
  Calendar,
  CheckCircle,
  Code,
  Clock,
  Zap
} from "lucide-react";

const CaseStudies = () => {
  const navigate = useNavigate();
  
  const caseStudies = [
    {
      id: "1",
      title: "Engineering Design & Simulation Platform",
      client: "Engineering Research Lab",
      industry: "Engineering Software",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&h=600&fit=crop",
      results: [
        { metric: "Platforms Integrated", value: "8+", icon: <Code className="h-5 w-5" /> },
        { metric: "Design Time", value: "-40%", icon: <Clock className="h-5 w-5" /> },
      ],
      tags: ["ANSYS", "Fusion 360", "SOLIDWORKS"],
    },
    {
      id: "2",
      title: "Bio-Inspired Quadruped Robot",
      client: "Robotics Research Institute",
      industry: "Robotics",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
      results: [
        { metric: "Energy Efficiency", value: "+25%", icon: <Zap className="h-5 w-5" /> },
        { metric: "Terrain Adaptation", value: "+35%", icon: <Target className="h-5 w-5" /> },
      ],
      tags: ["Robotics", "Hybrid Actuation", "Bio-Inspired"],
    },
    {
      id: "3",
      title: "O'TRADE AI Chatbot",
      client: "O'Trade",
      industry: "E-commerce / Chatbots",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop",
      results: [
        { metric: "User Engagement", value: "+60%", icon: <Users className="h-5 w-5" /> },
        { metric: "Automation Rate", value: "70%", icon: <BarChart3 className="h-5 w-5" /> },
      ],
      tags: ["AI Chatbot", "Botpress", "GPT-4o"],
    },
    {
      id: "4",
      title: "Shopify E-Commerce Store",
      client: "Omnifits",
      industry: "E-Commerce / Fitness",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=600&fit=crop",
      results: [
        { metric: "Checkout Conversion", value: "+25%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Uptime", value: "99.9%", icon: <CheckCircle className="h-5 w-5" /> },
      ],
      tags: ["Shopify", "E-commerce", "UX Design"],
    },
    {
      id: "5",
      title: "VisaMate: AI Visa Application System",
      client: "Global Immigration Services",
      industry: "Government Services",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      results: [
        { metric: "Processing Time", value: "-70%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "User Satisfaction", value: "95%", icon: <Users className="h-5 w-5" /> },
      ],
      tags: ["AI Automation", "Government", "Document Processing"],
    },
    {
      id: "6",
      title: "SkillMap: AI Team Formation Platform",
      client: "TechCorp Solutions",
      industry: "Technology",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      results: [
        { metric: "Team Formation Speed", value: "400%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Cost Savings", value: "35%", icon: <BarChart3 className="h-5 w-5" /> },
      ],
      tags: ["AI/ML", "Team Management", "Resource Optimization"],
    },
    {
      id: "7",
      title: "PDF_QA with RAG",
      client: "LegalTech Innovations",
      industry: "Legal Services",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      results: [
        { metric: "Research Speed", value: "500%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Accuracy Rate", value: "98%", icon: <Target className="h-5 w-5" /> },
      ],
      tags: ["RAG Systems", "Legal Tech", "NLP"],
    },
    {
      id: "8",
      title: "Haya Fit Intima AI Support",
      client: "Haya Fit Intima",
      industry: "E-commerce / Fashion",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      results: [
        { metric: "Cost Reduction", value: "50%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Response Time", value: "Instant", icon: <Calendar className="h-5 w-5" /> },
      ],
      tags: ["AI Automation", "Customer Support", "E-commerce"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-brutal opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="tag-neon mb-4 sm:mb-6 inline-block">Our Work</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-giant font-display text-foreground mb-4 sm:mb-6">
              CASE STUDIES
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl">
              Real results from real clients. See how we've helped businesses 
              achieve exceptional growth through AI and automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/case-study/${study.id}`)}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <div className="relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background/90 text-foreground font-mono text-xs">
                        {study.industry}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-display mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 font-mono">{study.client}</p>
                    
                    {/* Key Results Preview */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center p-3 bg-muted/50 border border-border">
                          <div className="text-xl font-display text-primary">{result.value}</div>
                          <div className="text-xs text-muted-foreground font-mono uppercase">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="tag-electric text-xs">{tag}</span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-primary font-mono text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Project</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-brutal opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-4 sm:mb-6">
              READY TO BE NEXT?
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground mb-8 sm:mb-10">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider px-6 sm:px-10 py-5 sm:py-7 w-full sm:w-auto"
            >
              Start Your Project
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;