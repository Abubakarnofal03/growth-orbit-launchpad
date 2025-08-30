import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  TrendingUp, 
  Palette, 
  Users, 
  Code, 
  ArrowRight,
  Star,
  Quote,
  CheckCircle,
  Globe,
  Award,
  Zap,
  Target,
  ChevronLeft,
  ChevronRight,
  Shield,
  Search,
  Mail,
  BarChart,
  Smartphone,
  ArrowUpRight,
  ShoppingCart,
  Calendar,
  BarChart3,
  Linkedin,
  Twitter,
  MessageCircle,
  Phone,
  Clock,
  Send
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTypewriter } from "@/hooks/use-typewriter";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Typewriter animation configuration
  const typewriterWords = [
    "Leading Technology Solutions for Global Businesses",
    "Innovating Digital Experiences That Scale",
    "Empowering Startups and Enterprises Worldwide",
    "Transforming Ideas Into Scalable Reality"
  ];

  const { currentText, isTyping, isDeleting, currentWordIndex } = useTypewriter({
    words: typewriterWords,
    typeSpeed: 60,
    deleteSpeed: 40,
    delayBetweenWords: 800,
    holdTime: 1500
  });

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Enterprise-grade applications built with Django, Angular, React, and Node.js for scalable business solutions.",
      features: ["Full-Stack Development", "API Development", "Database Design", "System Architecture"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions including NLP, RAG systems, and computer vision to automate and optimize business processes.",
      features: ["Natural Language Processing", "RAG Systems", "Computer Vision", "Predictive Analytics"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure, integrations, and DevOps solutions for modern enterprise needs.",
      features: ["Cloud Architecture", "DevOps", "API Integrations", "Scalability"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "E-commerce Development",
      description: "Professional Shopify and WordPress solutions with custom functionality and optimization.",
      features: ["Shopify Development", "WordPress Customization", "E-commerce Strategy", "Performance Optimization"],
      color: "from-orange-500 to-red-600"
    }
  ];

  const detailedServices = [
    {
      id: "software",
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "Custom Software Development",
      description: "Enterprise-grade applications built with modern technologies including Django, Angular, React, and Node.js for scalable business solutions.",
      features: [
        "Full-Stack Web Applications",
        "API Development & Integration",
        "Database Design & Optimization",
        "System Architecture & Design",
        "Performance Optimization",
        "Security Implementation"
      ],
      deliverables: [
        "Technical Specification Document",
        "Fully Functional Application",
        "Source Code & Documentation",
        "Deployment & Training"
      ],
      timeline: "8-16 weeks"
    },
    {
      id: "ai-ml",
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "AI & Machine Learning Solutions",
      description: "Intelligent solutions including NLP, RAG systems, and computer vision to automate and optimize business processes.",
      features: [
        "Natural Language Processing (NLP)",
        "Retrieval-Augmented Generation (RAG)",
        "Computer Vision & Image Recognition",
        "Predictive Analytics & Modeling",
        "Machine Learning Model Development",
        "AI Integration & Deployment"
      ],
      deliverables: [
        "AI Solution Architecture",
        "Trained ML Models",
        "Integration Documentation",
        "Performance Reports"
      ],
      timeline: "6-12 weeks"
    },
    {
      id: "cloud",
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Cloud Solutions & Integrations",
      description: "Scalable cloud infrastructure, DevOps solutions, and seamless integrations for modern enterprise needs.",
      features: [
        "Cloud Architecture Design",
        "DevOps & CI/CD Implementation",
        "API Integration & Management",
        "Scalability & Performance",
        "Security & Compliance",
        "Monitoring & Analytics"
      ],
      deliverables: [
        "Cloud Infrastructure Setup",
        "DevOps Pipeline",
        "Integration Documentation",
        "Performance Monitoring"
      ],
      timeline: "4-10 weeks"
    },
    {
      id: "ecommerce",
      icon: <Palette className="h-12 w-12 text-primary" />,
      title: "Shopify & WordPress Development",
      description: "Professional e-commerce solutions with custom functionality, optimization, and strategic implementation.",
      features: [
        "Custom Shopify Development",
        "WordPress Customization",
        "E-commerce Strategy",
        "Performance Optimization",
        "Payment Integration",
        "Analytics & Reporting"
      ],
      deliverables: [
        "Custom E-commerce Platform",
        "Performance Optimization",
        "Integration Setup",
        "Training & Documentation"
      ],
      timeline: "3-8 weeks"
    }
  ];

  const additionalServices = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Business Strategy Consulting",
      description: "Strategic guidance for digital transformation and growth"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Technical Architecture",
      description: "Scalable system design and technology roadmaps"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "API Development",
      description: "Custom API design and third-party integrations"
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Data Analytics",
      description: "Business intelligence and performance insights"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile solutions for iOS and Android"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Deployment",
      description: "Multi-region infrastructure and localization"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "VisaMate: AI-Powered Visa Application System",
      client: "Global Immigration Services",
      industry: "Government Services",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      challenge: "Complex visa application processes causing delays, errors, and poor user experience for applicants and immigration officers.",
      solution: "Developed an intelligent visa application management system with AI automation, document processing, and real-time status tracking.",
      results: [
        { metric: "Processing Time", value: "-70%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Error Rate", value: "-85%", icon: <Target className="h-5 w-5" /> },
        { metric: "User Satisfaction", value: "95%", icon: <Users className="h-5 w-5" /> },
        { metric: "Efficiency Gain", value: "300%", icon: <BarChart3 className="h-5 w-5" /> }
      ],
      timeline: "8 months",
      tags: ["AI Automation", "Government Services", "Document Processing", "System Integration"],
      testimonial: "VisaMate revolutionized our visa processing operations. The AI automation and streamlined workflow have dramatically improved efficiency.",
      clientRole: "CTO, Global Immigration Services"
    },
    {
      id: 2,
      title: "SkillMap: AI-Driven Team Formation Platform",
      client: "TechCorp Solutions",
      industry: "Technology",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      challenge: "Large technology company struggling with optimal team formation, skill matching, and project resource allocation.",
      solution: "Built an AI-powered platform that analyzes skills, experience, and project requirements to automatically form optimal teams.",
      results: [
        { metric: "Team Formation Speed", value: "400%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Project Success Rate", value: "180%", icon: <Target className="h-5 w-5" /> },
        { metric: "Resource Utilization", value: "250%", icon: <Users className="h-5 w-5" /> },
        { metric: "Cost Savings", value: "35%", icon: <BarChart3 className="h-5 w-5" /> }
      ],
      timeline: "6 months",
      tags: ["AI/ML", "Team Management", "Skill Matching", "Resource Optimization"],
      testimonial: "SkillMap transformed how we build teams. The AI recommendations are incredibly accurate and have improved our project outcomes significantly.",
      clientRole: "VP Engineering, TechCorp Solutions"
    },
    {
      id: 3,
      title: "PDF_QA with RAG: Intelligent Document System",
      client: "LegalTech Innovations",
      industry: "Legal Services",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      challenge: "Legal firm struggling with document analysis, research efficiency, and providing quick answers from large document repositories.",
      solution: "Implemented a RAG-based intelligent document question-answering system that provides instant, accurate responses from legal documents.",
      results: [
        { metric: "Research Speed", value: "500%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Accuracy Rate", value: "98%", icon: <Target className="h-5 w-5" /> },
        { metric: "Client Response Time", value: "-80%", icon: <Calendar className="h-5 w-5" /> },
        { metric: "Productivity Gain", value: "400%", icon: <BarChart3 className="h-5 w-5" /> }
      ],
      timeline: "5 months",
      tags: ["RAG Systems", "Legal Tech", "Document AI", "Natural Language Processing"],
      testimonial: "The RAG system has transformed our legal research capabilities. We can now provide clients with instant, accurate answers from our document library.",
      clientRole: "Managing Partner, LegalTech Innovations"
    }
  ];

  const testimonials = [
    {
      content: "SMARB Technologies delivered an exceptional AI-powered visa management system that revolutionized our operations. The automation and efficiency gains are remarkable.",
      author: "Ahmed Al Mansouri",
      role: "CTO, Global Immigration Services",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      content: "Their AI and machine learning expertise helped us build a sophisticated team formation platform. The results exceeded our expectations in every way.",
      author: "Michael Chen",
      role: "VP Engineering, TechCorp Solutions",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      content: "The RAG-based document system transformed our legal research capabilities. We can now provide clients with instant, accurate answers from our document library.",
      author: "Sarah Rodriguez",
      role: "Managing Partner, LegalTech Innovations",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction" },
    { number: "300%", label: "Avg. Efficiency Gain" },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Innovation-First",
      description: "We leverage cutting-edge technologies to deliver breakthrough solutions.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client-Centric",
      description: "Your success is our priority. We build long-term partnerships based on trust.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Excellence",
      description: "Headquartered in UAE, we serve enterprises worldwide with world-class technology.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Quality Assured",
      description: "We maintain the highest standards in software development and AI solutions.",
    },
  ];

  const team = [
    {
      name: "Ahmed Al Mansouri",
      role: "CEO & Founder",
      bio: "15+ years in software engineering and AI solutions. Former technology leader at major UAE enterprises.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/ahmedalmansouri",
        twitter: "https://twitter.com/ahmedalmansouri",
      },
    },
    {
      name: "Sarah Al Hashimi",
      role: "CTO & AI Lead",
      bio: "Expert in machine learning and AI systems with 12+ years experience. PhD in Computer Science from MIT.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/sarahalhashimi",
        twitter: "https://twitter.com/sarahalhashimi",
      },
    },
    {
      name: "Michael Chen",
      role: "Head of Engineering",
      bio: "Full-stack architect and cloud specialist. Led development teams at Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/michaelchen",
        twitter: "https://twitter.com/michaelchen",
      },
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const whatsappNumber = "+923241693025";
  const whatsappMessage = "Hi! I'd like to get a free audit for my business.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Contact form data structures
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "Get in touch via email",
      value: "info@smarb.tech",
      action: "mailto:info@smarb.tech",
      actionText: "Send Email"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      description: "Quick chat on WhatsApp",
      value: "+971 50 123 4567",
      action: "https://wa.me/+971501234567?text=Hi! I'd like to discuss my technology project with you.",
      actionText: "Chat Now"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "Speak directly with our team",
      value: "+971 2 123 4567",
      action: "tel:+97121234567",
      actionText: "Call Now"
    }
  ];

  const officeInfo = [
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Business Hours",
      value: "Always Open"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      label: "Headquarters",
      value: "UAE"
    }
  ];

  const budgetRanges = [
    "Less than $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "More than $100,000"
  ];

  // Contact form handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For now, just show a success message
      // In a real implementation, you would send the form data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: ""
      });
      
      // Show success message (you can implement toast notifications here)
      alert('Message sent successfully! We\'ll get back to you within 24 hours.');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm mb-6 font-poppins text-base px-4 py-2">
                Headquartered in UAE • Global Operations
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-hero font-bold mb-6 sm:mb-8 leading-tight font-poppins px-4 sm:px-0 min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] lg:min-h-[7rem]"
            >
              {/* Fallback static heading for accessibility and JS fallback */}
              {/* <span className="sr-only">
                Leading Technology Solutions for Global Businesses
              </span> */}
              
              {/* Dynamic typewriter heading with inline cursor */}
              <span 
                className="text-white transition-all duration-500 relative"
                style={{ 
                  opacity: currentText ? 1.5 : 0.8,
                  textShadow: isTyping 
                    ? '0 2px 8px rgba(59, 130, 246, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)' 
                    : '0 2px 4px rgba(0, 0, 0, 0.3)',
                  transform: isTyping ? 'scale(1.02)' : 'scale(1)',
                  filter: isDeleting ? 'blur(0.5px)' : 'blur(0px)',
                  minHeight: '1.2em',
                  display: 'inline-block'
                }}
              >
                {currentText || ""}
                {/* Inline cursor that's always with the text */}
                <span 
                  className={`inline-block w-1 h-16 sm:h-20 md:h-24 lg:h-28 bg-gradient-to-b from-primary to-primary/60 ml-1 transition-all duration-200 ${
                    isTyping || isDeleting ? 'animate-pulse' : ''
                  }`}
                  style={{ 
                    animationDuration: '1s',
                    boxShadow: isTyping || isDeleting 
                      ? '0 0 10px rgba(59, 130, 246, 0.5)' 
                      : 'none',
                    opacity: 1,
                    verticalAlign: 'top'
                  }}
                />
              </span>
            </motion.h1>
            
            {/* Typewriter indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center space-x-2 mb-4"
            >
              <div className="flex space-x-1">
                {typewriterWords.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === (currentWordIndex % typewriterWords.length)
                        ? 'bg-primary scale-125'
                        : 'bg-white/30 scale-100'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl lg:text-body-lg text-white/90 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto font-poppins px-4 sm:px-0"
            >
              Headquartered in UAE, we deliver cutting-edge software, AI, and business solutions 
              that drive digital transformation and innovation across industries worldwide.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4 sm:px-0"
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="hero-secondary" size="lg" asChild>
                <a href="#case-studies">
                  View Our Work
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <br/>
      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-4">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4 font-poppins">About Us</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-subhead font-bold mb-6 font-poppins">
              About SMARB Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-poppins">
              We're a UAE-based technology company delivering innovative software, AI, and business solutions 
              to enterprises worldwide, with expertise in digital transformation and cutting-edge technologies.
            </p>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-8 mb-20 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>



          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4">Our Mission</Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Driving Digital Innovation
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our mission is to empower businesses worldwide through cutting-edge technology solutions, 
                AI innovation, and strategic digital transformation. We believe every organization deserves 
                access to world-class technology expertise.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Headquartered in UAE, we combine regional expertise with global technology standards 
                to deliver solutions that drive real business impact. Our team is passionate about helping 
                enterprises thrive in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </motion.div>
          </div>

{/* Section Divider */}
<div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-4">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
      <br/>
          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <Badge variant="secondary" className="mb-4">Our Team</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the Technology Experts
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team brings together expertise in software engineering, AI/ML, cloud computing, 
              and business strategy, united by a common goal: your digital success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-medium transition-all duration-300 group">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-4">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4 font-poppins">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-subhead font-bold mb-6 font-poppins">
              Enterprise Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-poppins">
              From custom software development to AI solutions and cloud infrastructure, 
              we provide comprehensive technology services for modern enterprises.
            </p>
          </motion.div>

          {/* Main Services */}
          <div className="space-y-20 mb-20">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 sm:p-8 md:p-12 hover:shadow-strong transition-all duration-300 group">
                  <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    <div>
                      <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                        {service.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-primary" />
                          What's Included
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center">
                              <Zap className="h-3 w-3 mr-2 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button variant="premium" asChild>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                          Learn More
                        </a>
                      </Button>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gradient-card p-6 rounded-xl">
                        <h4 className="font-semibold mb-3 text-primary">Deliverables</h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gradient-card p-6 rounded-xl">
                        <h4 className="font-semibold mb-3 text-primary">Timeline</h4>
                        <p className="text-sm text-muted-foreground">{service.timeline}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Additional Services</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Specialized Solutions
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Targeted services to address specific business needs and challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-medium transition-all duration-300 group cursor-pointer">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button variant="premium" size="lg" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Get Custom Quote
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-4">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4 font-poppins">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-subhead font-bold mb-6 font-poppins">
              Technology Solutions That Deliver Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-poppins">
              From government services to enterprise technology, see how our AI and software solutions 
              drive measurable impact and transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-strong transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-foreground">
                        {study.industry}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{study.client}</p>
                    
                    {/* Key Results Preview */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {study.results.slice(0, 4).map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-primary">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {study.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full group">
                      View Project
                      <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button variant="premium" size="lg" asChild>
              <a href="/case-studies">
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4 font-poppins">Client Testimonials</Badge>
            <h2 className="text-subhead font-bold mb-6 font-poppins">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 text-center">
              <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
              
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold">{testimonials[currentTestimonial].author}</p>
                    <p className="text-muted-foreground text-sm">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>

              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-secondary/20 px-4">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="py-20 bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-subhead font-bold mb-6 font-poppins">
              Ready to Transform Your Business?
            </h2>
            <p className="text-body-lg text-white/90 mb-8 leading-relaxed font-poppins">
              Join leading enterprises that have revolutionized their operations with our technology solutions.
              Let's discuss how we can drive your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero-secondary" size="lg" asChild>
                <a href="#contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="hero-secondary" size="lg" asChild>
                <a href="#case-studies">
                  View Our Work
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-brand-charcoal px-4">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4 font-poppins">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-subhead font-bold mb-6 font-poppins">
              Let's Start Your Digital Transformation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-poppins">
              Ready to revolutionize your business with cutting-edge technology? Get in touch and let's discuss 
              how we can help you achieve your digital goals.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-medium transition-all duration-300 group">
                  <div className="inline-flex p-3 bg-gradient-primary rounded-full text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                  <p className="font-medium mb-4">{method.value}</p>
                  <Button variant="outline" asChild className="group-hover:border-primary group-hover:text-primary">
                    <a href={method.action} target="_blank" rel="noopener noreferrer">
                      {method.actionText}
                    </a>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Office Info */}
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                <p className="text-sm text-blue-800">
                  <strong>Headquartered in UAE, serving clients worldwide.</strong> Our team is available 24/7 to support your technology needs.
                </p>
              </div>
              <Card className="p-6 sm:p-8">
                <div className="mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Send Us a Message</h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, goals, and how we can help..."
                      rows={5}
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="premium" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
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

            {/* Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Information */}
              <Card className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Our Office</h3>
                <div className="space-y-6">
                  {officeInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-primary mt-1">{info.icon}</div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <p className="text-muted-foreground text-sm">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Response Guarantee */}
              <Card className="p-6 bg-gradient-primary text-white">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">24-Hour Response Guarantee</h4>
                    <p className="text-sm text-white/90">
                      We'll respond to your message within 24 hours, guaranteed.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">Still Have Questions?</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              We're Here to Help
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Have questions about our technology solutions, AI capabilities, or development process? 
              Don't hesitate to reach out. We're always happy to help.
            </p>
            <Button variant="premium" size="lg" asChild>
              <a
                href="https://wa.me/+971501234567?text=Hi! I have some questions about your technology solutions."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
