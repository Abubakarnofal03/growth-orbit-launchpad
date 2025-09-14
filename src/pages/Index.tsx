import { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { sendContactEmail, initializeEmailJS, ContactFormData } from "@/lib/email";
import { useToast } from "@/components/ui/use-toast";
import SEOHead from "@/components/SEOHead";
import AnalyticsSetup from "@/components/AnalyticsSetup";
import AlternativeNamesSchema from "@/components/AlternativeNamesSchema";
import FAQSchema from "@/components/FAQ-schema";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Bot, 
  Database, 
  TrendingUp, 
  ShoppingCart, 
  Search,
  Globe,
  ArrowRight,
  Star,
  Quote,
  CheckCircle,
  Award,
  Zap,
  Target,
  Shield,
  Mail,
  BarChart,
  Smartphone,
  ArrowUpRight,
  Calendar,
  BarChart3,
  MessageCircle,
  Phone,
  Clock,
  Send,
  X,
  FileText,
  Users,
  Brain,
  Rocket,
  ExternalLink
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTypewriter } from "@/hooks/use-typewriter";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState(false);

  // Initialize EmailJS on component mount
  useEffect(() => {
    initializeEmailJS();
  }, []);

  // Typewriter animation configuration
  const typewriterWords = [
    "AI-Powered Solutions & Digital Marketing for Global Businesses",
    "Transforming Ideas Into Scalable Reality",
    "Innovating Digital Experiences That Drive ROI"
  ];

  const { currentText } = useTypewriter({
    words: typewriterWords,
    typeSpeed: 60,
    deleteSpeed: 40,
    delayBetweenWords: 2000,
    holdTime: 3000
  });

  const whatsappNumber = "971505940132";
  const whatsappMessage = "Hi! I'd like to get a FREE DEMO of your AI solutions for my business.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Solutions",
      description: "WhatsApp & Website Chatbots, RAG Systems for document automation, AI-powered business process automation.",
      features: ["WhatsApp & Website Chatbots", "RAG Systems", "AI Business Automation", "Document Processing"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web & App Development", 
      description: "Shopify & WordPress E-commerce Stores, Custom Backend & Database Development, Full-Stack Web Applications.",
      features: ["Shopify & WordPress Stores", "Custom Backend Development", "Full-Stack Applications", "Database Design"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads, Snapchat Ads, SEO & Google SEO Optimization, Content Strategy.",
      features: ["Google & Meta Ads", "Multi-Platform Advertising", "SEO Optimization", "Content Strategy"],
      color: "from-green-500 to-teal-600"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "VisaMate AI Automation",
      description: "Helped streamline visa documentation with RAG-based chatbot system.",
      problem: "Complex visa application processes causing delays and errors",
      solution: "AI-powered document processing and automation system",
      result: "70% reduction in processing time, 85% fewer errors",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["AI Automation", "RAG Systems", "Document Processing"]
    },
    {
      id: 2,
      title: "SkillMap EdTech Platform",
      description: "AI-powered career mapping project to guide students & professionals.",
      problem: "Difficulty matching skills with career opportunities",
      solution: "AI-driven team formation and skill matching platform",
      result: "400% faster team formation, 180% project success rate",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      tags: ["AI/ML", "EdTech", "Career Mapping"]
    },
    {
      id: 3,
      title: "PDF_QA RAG System",
      description: "Created a smart QA system for document-heavy industries.",
      problem: "Time-consuming document research and analysis",
      solution: "RAG-based intelligent document question-answering system",
      result: "500% faster research, 98% accuracy rate",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      tags: ["RAG Systems", "Document AI", "Legal Tech"]
    }
  ];

  const trustMetrics = [
    { label: "Projects Delivered", value: "50+" },
    { label: "Countries Served", value: "4+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Years Experience", value: "4+" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendContactEmail(formData);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openCaseStudy = (caseStudy: any) => {
    setSelectedCaseStudy(caseStudy);
    setIsCaseStudyModalOpen(true);
  };

  return (
    <Layout>
      <SEOHead
        title="SMARB Technologies | AI Solutions, Software Development & Digital Marketing"
        description="Leading technology company specializing in AI solutions, custom software development, and digital marketing. Transform your business with SMARB Technologies - serving globally from Pakistan."
        keywords="AI Chatbot Development in UAE & UK, Shopify & WordPress E-commerce Solutions, Digital Marketing Google Ads Meta Ads SEO, RAG Systems, WhatsApp Chatbots, Custom Software Development Dubai, Business Automation UAE"
        canonicalUrl="https://www.smarbtechnologies.com/"
      />
      <AnalyticsSetup />
      <AlternativeNamesSchema />
      <FAQSchema />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {currentText}
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From Chatbots to Shopify Stores, we deliver scalable technology that drives ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Rocket className="mr-2 h-5 w-5" />
                  Get Your Free Demo Today
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-2 hover:bg-blue-50"
                onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust Banner */}
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-lg">
              <Shield className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-foreground">
                Trusted by Businesses in UAE, UK, USA & Pakistan
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About SMARB Technologies
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              SMARB Technologies is a UAE-headquartered global tech agency delivering AI solutions, 
              software development, and ROI-driven marketing. We specialize in WhatsApp AI chatbots, 
              RAG systems, Shopify & WordPress stores, backend systems, and full-stack web apps.
            </p>

            <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full">
              <Globe className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-semibold text-blue-800">Serving clients in UAE, UK, USA, and beyond</span>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {trustMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive measurable results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 text-white`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* SEO-focused service headings */}
          <div className="text-center space-y-8">
            <h3 className="text-2xl font-bold text-foreground">AI Chatbot Development in UAE & UK</h3>
            <h3 className="text-2xl font-bold text-foreground">Shopify & WordPress E-commerce Solutions</h3>
            <h3 className="text-2xl font-bold text-foreground">Digital Marketing: Google Ads, Meta Ads & SEO</h3>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Proven Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real projects, real results. See how we've helped businesses transform and scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={`${study.title} case study`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {study.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {study.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="font-semibold text-red-600 text-sm">Problem:</span>
                        <p className="text-sm text-muted-foreground">{study.problem}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-blue-600 text-sm">Solution:</span>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-green-600 text-sm">Result:</span>
                        <p className="text-sm text-muted-foreground">{study.result}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => openCaseStudy(study)}
                      className="w-full"
                    >
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Automate Your Business & Scale Growth?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join hundreds of businesses that have transformed their operations with our AI solutions and digital marketing expertise.
            </p>
            
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat With Us on WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Let's Start a Conversation</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <MessageCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        +971 50 594 0132
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:info@smarbtechnologies.com" className="text-blue-600 hover:underline">
                        info@smarbtechnologies.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Globe className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Website</p>
                      <p className="text-muted-foreground">www.smarbtechnologies.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Headquartered in UAE</strong> | Serving clients globally
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="mt-1"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <Dialog open={isCaseStudyModalOpen} onOpenChange={setIsCaseStudyModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-4">
              {selectedCaseStudy?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedCaseStudy && (
            <div className="space-y-6">
              <img 
                src={selectedCaseStudy.image} 
                alt={selectedCaseStudy.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Problem</h4>
                  <p className="text-sm text-muted-foreground">{selectedCaseStudy.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Solution</h4>
                  <p className="text-sm text-muted-foreground">{selectedCaseStudy.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Result</h4>
                  <p className="text-sm text-muted-foreground">{selectedCaseStudy.result}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.tags.map((tag: string, idx: number) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Index;