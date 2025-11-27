import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Code, Target, Clock, BarChart3, Zap, TrendingUp, Users, Calendar, CheckCircle, ShoppingCart } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const CaseStudiesSection = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const caseStudies = [
    {
      id: 1,
      title: "Engineering Design & Simulation Platform",
      client: "Engineering Research Lab",
      industry: "Engineering Software / Simulation",
      challenge: "Need for comprehensive modeling, simulation, and optimization capabilities across multiple engineering design software platforms for robotics and mechanical systems.",
      solution: "Developed an integrated platform leveraging ANSYS Workbench, Fusion 360, SOLIDWORKS, and related tools for advanced engineering analysis and optimization.",
      impact: "60% reduction in deployment downtime",
      results: [
        { metric: "Software Integration", value: "8+ platforms", icon: <Code className="h-5 w-5" /> },
        { metric: "Simulation Accuracy", value: "98%", icon: <Target className="h-5 w-5" /> },
        { metric: "Design Time Reduction", value: "-40%", icon: <Clock className="h-5 w-5" /> },
        { metric: "Resource Efficiency", value: "+65%", icon: <BarChart3 className="h-5 w-5" /> }
      ],
      timeline: "12 months",
      tags: ["ANSYS", "Fusion 360", "SOLIDWORKS", "MATLAB", "CAD", "FEA", "CFD"],
      testimonial: "This platform revolutionized our engineering workflow by seamlessly integrating multiple design and simulation tools, significantly improving our development efficiency.",
      clientRole: "Lead Research Engineer",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Bio-Inspired Quadruped Robot with Hybrid Actuation",
      client: "Robotics Research Institute",
      industry: "Robotics / Research",
      challenge: "Traditional quadruped robots lack adaptability and energy efficiency due to rigid motor-only actuation systems, limiting their performance in real-world applications.",
      solution: "Developed a hybrid-actuated quadruped robot combining artificial nematic muscles with traditional motors and a continuum spine for enhanced mobility and efficiency.",
      impact: "25% improvement in energy efficiency",
      results: [
        { metric: "Energy Efficiency", value: "+25%", icon: <Zap className="h-5 w-5" /> },
        { metric: "Terrain Adaptation", value: "+35%", icon: <Target className="h-5 w-5" /> },
        { metric: "Actuator Accuracy", value: "93%", icon: <CheckCircle className="h-5 w-5" /> },
        { metric: "Project Timeline", value: "12 weeks", icon: <Calendar className="h-5 w-5" /> }
      ],
      timeline: "3 months",
      tags: ["Robotics", "Hybrid Actuation", "Bio-Inspired", "ANSYS", "MATLAB"],
      testimonial: "This quadruped robot demonstrates how hybrid actuation and soft robotics principles can enhance mobility beyond traditional rigid systems.",
      clientRole: "Academic Supervisor",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "O'TRADE AI Chatbot – Multilingual Wholesale Assistant",
      client: "O'Trade",
      industry: "Chatbots / E-commerce",
      challenge: "O'Trade needed a multilingual AI chatbot to streamline wholesale product inquiries, handle customer requests, and automate receipt generation across Webchat and WhatsApp.",
      solution: "Developed an AI-powered chatbot using Botpress and GPT-4o, integrated with WooCommerce REST API for product data. The bot supports natural product queries, multilingual conversations (English, French, Arabic), PDF receipt generation, and escalation to human agents.",
      impact: "60% increase in user engagement",
      results: [
        { metric: "Response Speed", value: "Instant", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "User Engagement", value: "+60%", icon: <Users className="h-5 w-5" /> },
        { metric: "Error Reduction", value: "-80%", icon: <Target className="h-5 w-5" /> },
        { metric: "Automation Coverage", value: "70% of queries", icon: <BarChart3 className="h-5 w-5" /> }
      ],
      timeline: "4 weeks (Phase 1)",
      tags: ["AI Chatbot", "Botpress", "GPT-4o", "WooCommerce API", "Multilingual Support"],
      testimonial: "The O'TRADE AI Chatbot transformed our customer interactions. Clients can now inquire in their own language, get product details instantly, and even receive receipts in PDF format — all without waiting for a sales rep.",
      clientRole: "Head of Digital Transformation, O'Trade",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Shopify E-Commerce Store Development for Omnifits",
      client: "Omnifits",
      industry: "E-Commerce / Fitness Apparel",
      challenge: "Omnifits needed a modern, mobile-first e-commerce solution for their premium fitness apparel brand with optimized checkout flow and seamless product management for 100+ SKUs.",
      solution: "Developed a custom Shopify-based e-commerce platform with tailored fitness niche theme, optimized product pages, integrated payment gateways, shipping automation, and SEO-friendly structure.",
      impact: "25% increase in checkout conversion",
      results: [
        { metric: "Uptime", value: "99.9%", icon: <CheckCircle className="h-5 w-5" /> },
        { metric: "User Engagement", value: "+45%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Checkout Conversion", value: "+25%", icon: <Target className="h-5 w-5" /> },
        { metric: "Product SKUs Managed", value: "100+", icon: <ShoppingCart className="h-5 w-5" /> }
      ],
      timeline: "4-6 weeks",
      tags: ["Shopify", "WordPress", "E-commerce", "UX Design", "Performance Optimization"],
      testimonial: "The new Shopify store exceeded our expectations with seamless performance and significantly improved user engagement and conversion rates.",
      clientRole: "Founder, Omnifits",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "VisaMate: AI-Powered Visa Application System",
      client: "FAST NUCES",
      industry: "Government Services",
      challenge: "Complex visa application processes causing delays, errors, and poor user experience for applicants and immigration officers.",
      solution: "Developed an intelligent visa application management system with AI automation, document processing, and real-time status tracking.",
      impact: "70% reduction in processing time",
      results: [
        { metric: "Processing Time", value: "-70%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Error Rate", value: "-85%", icon: <Target className="h-5 w-5" /> },
        { metric: "User Satisfaction", value: "95%", icon: <Users className="h-5 w-5" /> },
        { metric: "Efficiency Gain", value: "300%", icon: <BarChart3 className="h-5 w-5" /> }
      ],
      timeline: "8 months",
      tags: ["AI Automation", "Document Processing", "System Integration", "Government Services"],
      testimonial: "VisaMate revolutionized our visa processing operations. The AI automation and streamlined workflow have dramatically improved efficiency.",
      clientRole: "CTO, Global Immigration Services",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "SkillMap: AI-Driven Team Formation Platform",
      client: "SMARB Technologies",
      industry: "Technology",
      challenge: "Large technology company struggling with optimal team formation, skill matching, and project resource allocation.",
      solution: "Built an AI-powered platform that analyzes skills, experience, and project requirements to automatically form optimal teams.",
      impact: "400% faster team formation",
      results: [
        { metric: "Team Formation Speed", value: "400%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Project Success Rate", value: "180%", icon: <Target className="h-5 w-5" /> },
        { metric: "Resource Utilization", value: "250%", icon: <Users className="h-5 w-5" /> },
        { metric: "Cost Savings", value: "35%", icon: <BarChart3 className="h-5 w-5" /> }
      ],
      timeline: "6 months",
      tags: ["AI/ML", "Team Management", "Skill Matching", "Resource Optimization"],
      testimonial: "SkillMap transformed how we build teams. The AI recommendations are incredibly accurate and have improved our project outcomes significantly.",
      clientRole: "VP Engineering, TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
    },
    {
      id: 7,
      title: "PDF_QA with RAG: Intelligent Document System",
      client: "LegalTech Innovations",
      industry: "Legal Services",
      challenge: "Legal firm struggling with document analysis, research efficiency, and providing quick answers from large document repositories.",
      solution: "Implemented a RAG-based intelligent document question-answering system that provides instant, accurate responses from legal documents.",
      impact: "500% faster research speed",
      results: [
        { metric: "Research Speed", value: "500%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Accuracy Rate", value: "98%", icon: <Target className="h-5 w-5" /> },
        { metric: "Client Response Time", value: "-80%", icon: <Calendar className="h-5 w-5" /> },
        { metric: "Productivity Gain", value: "400%", icon: <BarChart3 className="h-5 w-5" /> }
      ],
      timeline: "5 months",
      tags: ["RAG Systems", "Legal Tech", "Document AI", "Natural Language Processing"],
      testimonial: "The RAG system has transformed our legal research capabilities. We can now provide clients with instant, accurate answers from our document library.",
      clientRole: "Managing Partner, LegalTech Innovations",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
    },
    {
      id: 8,
      title: "Motion Study & Impact Analysis of RoboCup Robot",
      client: "RoboCup SSL Research Project",
      industry: "Mechanical Engineering / Robotics",
      challenge: "In RoboCup Small Size League (SSL), precision ball control is critical. This project involved designing a compact, lightweight, and durable robot body with an efficient dribbler system capable of withstanding repeated high-speed impacts while maintaining grip and stability.",
      solution: "Developed a comprehensive CAD design using Fusion 360 with motion studies and ANSYS Workbench analysis for dribbler impact optimization at multiple RPMs, focusing on roller material elasticity and wear resistance.",
      impact: "30% faster ball handling response",
      results: [
        { metric: "CAD Design & Assembly", value: "2 weeks", icon: <Target className="h-5 w-5" /> },
        { metric: "Motion Simulation", value: "4 days", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "FEA Impact Analysis", value: "1 week", icon: <BarChart3 className="h-5 w-5" /> },
        { metric: "Error Rate Deviation", value: "<5%", icon: <CheckCircle className="h-5 w-5" /> }
      ],
      timeline: "6 weeks",
      tags: ["Mechanical", "Fusion 360", "ANSYS Workbench", "RoboCup SSL", "CAD Design"],
      testimonial: "The comprehensive design and analysis approach resulted in a 30% faster ball handling response with optimized durability and performance.",
      clientRole: "Research Team Lead, RoboCup SSL Project",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop"
    }
  ];

  const handleCaseStudyClick = (study: any) => {
    setSelectedCaseStudy(study);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="case-studies" className="py-20 bg-muted/30 w-full">
        <div className="container mx-auto px-6 lg:px-20 max-w-[1440px] w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real projects, real results. See how we've helped businesses transform.
            </p>
          </motion.div>

          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory md:grid md:grid-cols-1 md:gap-24 md:overflow-visible no-scrollbar">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className={`min-w-[85vw] md:min-w-0 snap-center grid lg:grid-cols-2 gap-6 md:gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={index % 2 === 1 ? "lg:col-start-2" : ""}
                >
                  <div className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer active-scale" onClick={() => handleCaseStudyClick(study)}>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge className="bg-primary text-primary-foreground mb-2">{study.industry}</Badge>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 + 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}
                >
                  <Card className="p-6 md:p-8 border border-border/50 rounded-xl hover:shadow-xl transition-all duration-300 group bg-card active-scale h-full flex flex-col justify-between">
                    <Badge className="bg-primary/10 text-primary mb-4 hover:bg-primary/20">{study.industry}</Badge>
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-primary font-semibold mb-6">{study.client}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Target className="h-4 w-4 text-red-500" />
                          Challenge
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Solution
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-blue-500" />
                          Impact
                        </h4>
                        <p className="text-muted-foreground font-semibold">{study.impact}</p>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {study.results.slice(0, 4).map((result: any, idx: number) => (
                        <div key={idx} className="bg-muted/50 p-3 rounded-lg text-center">
                          <div className="flex justify-center mb-1 text-primary">
                            {result.icon}
                          </div>
                          <div className="text-lg font-bold text-foreground">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full group/btn text-primary border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      onClick={() => handleCaseStudyClick(study)}
                    >
                      View Full Case Study
                      <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Button>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Swipe Indicator */}
          <div className="md:hidden flex justify-center mt-4 gap-2">
            {caseStudies.map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-primary/20" />
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedCaseStudy && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-2">
                  {selectedCaseStudy.title}
                </DialogTitle>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>{selectedCaseStudy.client}</span>
                  <span>•</span>
                  <span>{selectedCaseStudy.timeline}</span>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={selectedCaseStudy.image}
                    alt={selectedCaseStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-red-500" />
                    Challenge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedCaseStudy.challenge}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedCaseStudy.solution}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-500" />
                    Results & Impact
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedCaseStudy.results.map((result: any, index: number) => (
                      <Card key={index} className="p-4 text-center">
                        <div className="flex justify-center mb-2 text-primary">
                          {result.icon}
                        </div>
                        <div className="text-2xl font-bold text-foreground mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-muted-foreground">{result.metric}</div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Code className="h-5 w-5 text-purple-500" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudy.tags.map((tag: string, index: number) => (
                      <Badge key={index} className="bg-primary text-primary-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Client Testimonial</h3>
                  <blockquote className="text-lg italic mb-4 leading-relaxed text-muted-foreground">
                    "{selectedCaseStudy.testimonial}"
                  </blockquote>
                  <div className="text-sm text-muted-foreground">
                    — {selectedCaseStudy.clientRole}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CaseStudiesSection;
