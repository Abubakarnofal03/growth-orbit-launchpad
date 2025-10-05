import { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
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
import { TrendingUp, Palette, Users, Code, ArrowRight, Star, Quote, CheckCircle, Globe, Award, Zap, Target, ChevronLeft, ChevronRight, Shield, Search, Mail, BarChart, Smartphone, ArrowUpRight, ShoppingCart, Calendar, BarChart3, Linkedin, Twitter, MessageCircle, Phone, Clock, Send, X, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTypewriter } from "@/hooks/use-typewriter";
import OptimizedImage from "@/components/OptimizedImage";
const Index = () => {
  const {
    toast
  } = useToast();
  const {
    t
  } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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
  const typewriterWords = [t('hero.typewriter1'), t('hero.typewriter2'), t('hero.typewriter3'), t('hero.typewriter4')];
  const {
    currentText,
    isTyping,
    isDeleting,
    currentWordIndex
  } = useTypewriter({
    words: typewriterWords,
    typeSpeed: 60,
    // Faster typing
    deleteSpeed: 35,
    // Faster deletion
    delayBetweenWords: 1200,
    // Slightly shorter pause
    holdTime: 1800 // Slightly shorter hold
  });
  const services = [{
    icon: <Code className="h-8 w-8" />,
    title: t('services.software.title'),
    description: t('services.software.description'),
    features: [t('services.software.feature1'), t('services.software.feature2'), t('services.software.feature3'), t('services.software.feature4')],
    color: "from-blue-500 to-purple-600"
  }, {
    icon: <TrendingUp className="h-8 w-8" />,
    title: t('services.ai.title'),
    description: t('services.ai.description'),
    features: [t('services.ai.feature1'), t('services.ai.feature2'), t('services.ai.feature3'), t('services.ai.feature4')],
    color: "from-purple-500 to-pink-600"
  }, {
    icon: <Globe className="h-8 w-8" />,
    title: t('services.business.title'),
    description: t('services.business.description'),
    features: [t('services.business.feature1'), t('services.business.feature2'), t('services.business.feature3'), t('services.business.feature4')],
    color: "from-green-500 to-teal-600"
  }, {
    icon: <Palette className="h-8 w-8" />,
    title: t('services.ecommerce.title'),
    description: t('services.ecommerce.description'),
    features: [t('services.ecommerce.feature1'), t('services.ecommerce.feature2'), t('services.ecommerce.feature3'), t('services.ecommerce.feature4')],
    color: "from-orange-500 to-red-600"
  }];
  const detailedServices = [{
    id: "software",
    icon: <Code className="h-12 w-12 text-primary" />,
    title: t('services.software.title'),
    description: t('services.software.description'),
    features: [t('services.software.feature1'), t('services.software.feature2'), t('services.software.feature3'), t('services.software.feature4'), t('services.software.feature5'), t('services.software.feature6')],
    deliverables: [t('services.software.deliverable1'), t('services.software.deliverable2'), t('services.software.deliverable3'), t('services.software.deliverable4')],
    timeline: t('services.software.timeline')
  }, {
    id: "ai-ml",
    icon: <TrendingUp className="h-12 w-12 text-primary" />,
    title: t('services.ai.title'),
    description: t('services.ai.description'),
    features: [t('services.ai.feature1'), t('services.ai.feature2'), t('services.ai.feature3'), t('services.ai.feature4'), t('services.ai.feature5'), t('services.ai.feature6')],
    deliverables: [t('services.ai.deliverable1'), t('services.ai.deliverable2'), t('services.ai.deliverable3'), t('services.ai.deliverable4')],
    timeline: t('services.ai.timeline')
  }, {
    id: "business",
    icon: <Globe className="h-12 w-12 text-primary" />,
    title: t('services.business.title'),
    description: t('services.business.description'),
    features: [t('services.business.feature1'), t('services.business.feature2'), t('services.business.feature3'), t('services.business.feature4'), t('services.business.feature5'), t('services.business.feature6')],
    deliverables: [t('services.business.deliverable1'), t('services.business.deliverable2'), t('services.business.deliverable3'), t('services.business.deliverable4')],
    timeline: t('services.business.timeline')
  }, {
    id: "ecommerce",
    icon: <Palette className="h-12 w-12 text-primary" />,
    title: t('services.ecommerce.title'),
    description: t('services.ecommerce.description'),
    features: [t('services.ecommerce.feature1'), t('services.ecommerce.feature2'), t('services.ecommerce.feature3'), t('services.ecommerce.feature4'), t('services.ecommerce.feature5'), t('services.ecommerce.feature6')],
    deliverables: [t('services.ecommerce.deliverable1'), t('services.ecommerce.deliverable2'), t('services.ecommerce.deliverable3'), t('services.ecommerce.deliverable4')],
    timeline: t('services.ecommerce.timeline')
  }];
  const additionalServices = [{
    icon: <Target className="h-6 w-6" />,
    title: t('services.additional.strategy.title'),
    description: t('services.additional.strategy.description')
  }, {
    icon: <Search className="h-6 w-6" />,
    title: t('services.additional.architecture.title'),
    description: t('services.additional.architecture.description')
  }, {
    icon: <Mail className="h-6 w-6" />,
    title: t('services.additional.api.title'),
    description: t('services.additional.api.description')
  }, {
    icon: <BarChart className="h-6 w-6" />,
    title: t('services.additional.analytics.title'),
    description: t('services.additional.analytics.description')
  }, {
    icon: <Smartphone className="h-6 w-6" />,
    title: t('services.additional.mobile.title'),
    description: t('services.additional.mobile.description')
  }, {
    icon: <Globe className="h-6 w-6" />,
    title: t('services.additional.global.title'),
    description: t('services.additional.global.description')
  }];
  const caseStudies = [{
    id: 1,
    title: "Engineering Design & Simulation Platform",
    client: "Engineering Research Lab",
    industry: "Engineering Software / Simulation",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&h=600&fit=crop",
    challenge: "Need for comprehensive modeling, simulation, and optimization capabilities across multiple engineering design software platforms for robotics and mechanical systems.",
    solution: "Developed an integrated platform leveraging ANSYS Workbench, Fusion 360, SOLIDWORKS, and related tools for advanced engineering analysis and optimization.",
    results: [{
      metric: "Software Integration",
      value: "8+ platforms",
      icon: <Code className="h-5 w-5" />
    }, {
      metric: "Simulation Accuracy",
      value: "98%",
      icon: <Target className="h-5 w-5" />
    }, {
      metric: "Design Time Reduction",
      value: "-40%",
      icon: <Clock className="h-5 w-5" />
    }, {
      metric: "Resource Efficiency",
      value: "+65%",
      icon: <BarChart3 className="h-5 w-5" />
    }],
    timeline: "12 months",
    tags: ["ANSYS", "Fusion 360", "SOLIDWORKS", "MATLAB", "CAD", "FEA", "CFD", "Optimization"],
    testimonial: "This platform revolutionized our engineering workflow by seamlessly integrating multiple design and simulation tools, significantly improving our development efficiency.",
    clientRole: "Lead Research Engineer"
  }, {
    id: 2,
    title: "Bio-Inspired Quadruped Robot with Hybrid Actuation",
    client: "Robotics Research Institute",
    industry: "Robotics / Research",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
    challenge: "Traditional quadruped robots lack adaptability and energy efficiency due to rigid motor-only actuation systems, limiting their performance in real-world applications.",
    solution: "Developed a hybrid-actuated quadruped robot combining artificial nematic muscles with traditional motors and a continuum spine for enhanced mobility and efficiency.",
    results: [{
      metric: "Energy Efficiency",
      value: "+25%",
      icon: <Zap className="h-5 w-5" />
    }, {
      metric: "Terrain Adaptation",
      value: "+35%",
      icon: <Target className="h-5 w-5" />
    }, {
      metric: "Actuator Accuracy",
      value: "93%",
      icon: <CheckCircle className="h-5 w-5" />
    }, {
      metric: "Project Timeline",
      value: "12 weeks",
      icon: <Calendar className="h-5 w-5" />
    }],
    timeline: "3 months",
    tags: ["H. Actuation", "Bio-Inspired", "ANSYS", "MATLAB", "Control Systems"],
    testimonial: "This quadruped robot demonstrates how hybrid actuation and soft robotics principles can enhance mobility beyond traditional rigid systems.",
    clientRole: "Academic Supervisor"
  }, {
    id: 3,
    title: "O’TRADE AI Chatbot – Multilingual Wholesale Assistant",
    client: "O’Trade",
    industry: "Chatbots",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop",
    challenge: "O’Trade needed a multilingual AI chatbot to streamline wholesale product inquiries, handle customer requests, and automate receipt generation across Webchat and WhatsApp. The existing manual workflow slowed down response time, led to errors, and limited scalability.",
    solution: "Developed an AI-powered chatbot using Botpress and GPT-4o, integrated with WooCommerce REST API for product data. The bot supports natural product queries, multilingual conversations (English, French, Arabic), PDF receipt generation, and escalation to human agents. Future integration planned for real-time shipping estimates and currency conversions.",
    results: [{
      metric: "Response Speed",
      value: "Instant",
      icon: <TrendingUp className="h-5 w-5" />
    }, {
      metric: "User Engagement",
      value: "+60%",
      icon: <Users className="h-5 w-5" />
    }, {
      metric: "Error Reduction",
      value: "-80%",
      icon: <Target className="h-5 w-5" />
    }, {
      metric: "Automation Coverage",
      value: "70% of queries",
      icon: <BarChart3 className="h-5 w-5" />
    }],
    timeline: "4 weeks (Phase 1), ongoing updates",
    tags: ["AI Chatbot", "Botpress", "GPT-4o", "WooCommerce API", "Multilingual Support", "PDF Automation", "WhatsApp Business API"],
    testimonial: "The O’TRADE AI Chatbot transformed our customer interactions. Clients can now inquire in their own language, get product details instantly, and even receive receipts in PDF format — all without waiting for a sales rep.",
    clientRole: "Head of Digital Transformation, O’Trade"
  }, {
    id: 2,
    title: "Shopify E-Commerce Store Development for Omnifits",
    client: "Omnifits",
    industry: "E-Commerce / Fitness Apparel",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=600&fit=crop",
    challenge: "Omnifits needed a modern, mobile-first e-commerce solution for their premium fitness apparel brand with optimized checkout flow and seamless product management for 100+ SKUs.",
    solution: "Developed a custom Shopify-based e-commerce platform with tailored fitness niche theme, optimized product pages, integrated payment gateways, shipping automation, and SEO-friendly structure.",
    results: [{
      metric: "Uptime",
      value: "99.9%",
      icon: <CheckCircle className="h-5 w-5" />
    }, {
      metric: "User Engagement",
      value: "+45%",
      icon: <TrendingUp className="h-5 w-5" />
    }, {
      metric: "Checkout Conversion",
      value: "+25%",
      icon: <Target className="h-5 w-5" />
    }, {
      metric: "Product SKUs Managed",
      value: "100+",
      icon: <ShoppingCart className="h-5 w-5" />
    }],
    timeline: "4-6 weeks",
    tags: ["Shopify", "WordPress", "E-commerce", "UX Design", "Omnifits", "Performance Optimization"],
    testimonial: "The new Shopify store exceeded our expectations with seamless performance and significantly improved user engagement and conversion rates.",
    clientRole: "Founder, Omnifits"
  }, {
    id: 3,
    title: "VisaMate: AI-Powered Visa Application System",
    client: "FAST NUCES",
    industry: "Government Services",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    challenge: "Complex visa application processes causing delays, errors, and poor user experience for applicants and immigration officers.",
    solution: "Developed an intelligent visa application management system with AI automation, document processing, and real-time status tracking.",
    results: [{
      metric: "Processing Time",
      value: "-70%",
      icon: <TrendingUp className="h-5 w-5" />
    }, {
      metric: "Error Rate",
      value: "-85%",
      icon: <Target className="h-5 w-5" />
    }, {
      metric: "User Satisfaction",
      value: "95%",
      icon: <Users className="h-5 w-5" />
    }, {
      metric: "Efficiency Gain",
      value: "300%",
      icon: <BarChart3 className="h-5 w-5" />
    }],
    timeline: "8 months",
    tags: ["AI Automation",, "Consultancy", "Document Processing", "System Integration"],
    testimonial: "VisaMate revolutionized our visa processing operations. The AI automation and streamlined workflow have dramatically improved efficiency.",
    clientRole: "CTO, Global Immigration Services"
  }, {
    id: 4,
    title: "SkillMap: AI-Driven Team Formation Platform",
    client: "SMARB Technologies",
    industry: "Technology",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    challenge: "Large technology company struggling with optimal team formation, skill matching, and project resource allocation.",
    solution: "Built an AI-powered platform that analyzes skills, experience, and project requirements to automatically form optimal teams.",
    results: [{
      metric: "Team Formation Speed",
      value: "400%",
      icon: <TrendingUp className="h-5 w-5" />
    }, {
      metric: "Project Success Rate",
      value: "180%",
      icon: <Target className="h-5 w-5" />
    }, {
      metric: "Resource Utilization",
      value: "250%",
      icon: <Users className="h-5 w-5" />
    }, {
      metric: "Cost Savings",
      value: "35%",
      icon: <BarChart3 className="h-5 w-5" />
    }],
    timeline: "6 months",
    tags: ["AI/ML", "Team", "Skill Matching", "Resource Optimization"],
    testimonial: "SkillMap transformed how we build teams. The AI recommendations are incredibly accurate and have improved our project outcomes significantly.",
    clientRole: "VP Engineering, TechCorp Solutions"
  }, {
    id: 5,
    title: "PDF_QA with RAG: Intelligent Document System",
    client: "LegalTech Innovations",
    industry: "Legal Services",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    challenge: "Legal firm struggling with document analysis, research efficiency, and providing quick answers from large document repositories.",
    solution: "Implemented a RAG-based intelligent document question-answering system that provides instant, accurate responses from legal documents.",
    results: [{
      metric: "Research Speed",
      value: "500%",
      icon: <TrendingUp className="h-5 w-5" />
    }, {
      metric: "Accuracy Rate",
      value: "98%",
      icon: <Target className="h-5 w-5" />
    }, {
      metric: "Client Response Time",
      value: "-80%",
      icon: <Calendar className="h-5 w-5" />
    }, {
      metric: "Productivity Gain",
      value: "400%",
      icon: <BarChart3 className="h-5 w-5" />
    }],
    timeline: "5 months",
    tags: ["RAG Systems", "Legal Tech", "Document AI", "Natural Language Processing"],
    testimonial: "The RAG system has transformed our legal research capabilities. We can now provide clients with instant, accurate answers from our document library.",
    clientRole: "Managing Partner, LegalTech Innovations"
  }, {
    id: 6,
    title: "Motion Study & Impact Analysis of RoboCup Robot",
    client: "RoboCup SSL Research Project",
    industry: "Mechanical Engineering / Robotics",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    challenge: "In RoboCup Small Size League (SSL), precision ball control is critical. This project involved designing a compact, lightweight, and durable robot body with an efficient dribbler system capable of withstanding repeated high-speed impacts while maintaining grip and stability.",
    solution: "Developed a comprehensive CAD design using Fusion 360 with motion studies and ANSYS Workbench analysis for dribbler impact optimization at multiple RPMs, focusing on roller material elasticity and wear resistance.",
    results: [{
      metric: "CAD Design & Assembly",
      value: "2 weeks",
      icon: <Target className="h-5 w-5" />
    }, {
      metric: "Motion Simulation",
      value: "4 days",
      icon: <TrendingUp className="h-5 w-5" />
    }, {
      metric: "FEA Impact Analysis",
      value: "1 week",
      icon: <BarChart3 className="h-5 w-5" />
    }, {
      metric: "Error Rate Deviation",
      value: "<5%",
      icon: <CheckCircle className="h-5 w-5" />
    }],
    timeline: "6 weeks",
    tags: ["Mechanical", "Fusion 360", "ANSYS Workbench", "RoboCup SSL", "CAD Design", "Dribbler Analysis", "Robotics"],
    testimonial: "The comprehensive design and analysis approach resulted in a 30% faster ball handling response with optimized durability and performance.",
    clientRole: "Research Team Lead, RoboCup SSL Project"
  }];
  const testimonials = [{
    content: "SMARB Technologies delivered an exceptional AI-powered visa management system that revolutionized our operations. The automation and efficiency gains are remarkable.",
    author: "Sohaib Ul Haq",
    role: "Student committee head, GIKI",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  }, {
    content: "Their AI and machine learning expertise helped us build a sophisticated team formation platform. The results exceeded our expectations in every way.",
    author: "Abubakar Nofal",
    role: "AI Engineer, FAST NUCES",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }, {
    content: "The RAG-based document system transformed our legal research capabilities. We can now provide students with instant, accurate answers from our document library.",
    author: "Muhammad Fayyaz",
    role: "HOD, Computer science department, FAST NUCES",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }];
  const stats = [{
    number: "50+",
    label: t('about.metrics.clients')
  }, {
    number: "5+",
    label: t('about.metrics.experience')
  }];
  const values = [{
    icon: <Target className="h-8 w-8 text-primary" />,
    title: t('values.innovation.title'),
    description: t('values.innovation.description')
  }, {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: t('values.results.title'),
    description: t('values.results.description')
  }, {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: t('values.global.title'),
    description: t('values.global.description')
  }, {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: t('values.quality.title'),
    description: t('values.quality.description')
  }];
  const team = [{
    name: "M.Arslan Zia",
    role: t('team.arslan.role'),
    bio: [t('team.arslan.bio1'), t('team.arslan.bio2'), t('team.arslan.bio3'), t('team.arslan.bio4'), t('team.arslan.bio5')],
    image: "/lovable-uploads/arslan.jpeg",
    social: {
      linkedin: "www.linkedin.com/in/muhammad-arslan-zia-00b2522b8"
    }
  }, {
    name: "M.Abubakar Nofal",
    role: t('team.abubakar.role'),
    bio: [t('team.abubakar.bio1'), t('team.abubakar.bio2'), t('team.abubakar.bio3'), t('team.abubakar.bio4'), t('team.abubakar.bio5')],
    image: "/lovable-uploads/abubakar.jpeg",
    social: {
      linkedin: "www.linkedin.com/in/m-abubakar-nofal-b652512b8"
    }
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const whatsappNumber = "+971505940132";
  const whatsappMessage = t('whatsapp.message');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Contact form data structures
  const contactMethods = [{
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    description: "Get in touch via email",
    value: "info.smarb@gmail.com",
    action: "mailto:info.smarb@gmail.com",
    actionText: "Send Email"
  }, {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "WhatsApp",
    description: "Quick chat on WhatsApp",
    value: "+971 50 594 0132",
    action: "https://wa.me/+971505940132?text=Hi! I'd like to discuss my technology project with you.",
    actionText: "Chat Now"
  }, {
    icon: <Users className="h-6 w-6" />,
    title: "Follow Us",
    description: "Connect on social media",
    value: "LinkedIn • Instagram • Facebook",
    socialLinks: [{
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/108614278/",
      icon: <Linkedin className="h-4 w-4" />
    }, {
      name: "Instagram",
      url: "https://www.instagram.com/smarb.technologies?igsh=MWFudmtrYTE2cWU1MQ==",
      icon: <Users className="h-4 w-4" />
    }, {
      name: "Facebook",
      url: "https://www.facebook.com/share/1YUYds45fv/",
      icon: <Users className="h-4 w-4" />
    }]
  }];
  const officeInfo = [{
    icon: <Clock className="h-5 w-5" />,
    label: "Business Hours",
    value: "Always Open"
  }, {
    icon: <Globe className="h-5 w-5" />,
    label: "Headquarters",
    value: "Pakistan"
  }];
  const budgetRanges = ["Less than $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000 - $100,000", "More than $100,000"];

  // Contact form handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all required fields (Name, Email, and Message).');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }
    try {
      await sendContactEmail(formData as ContactFormData);

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });

      // Show success message
      alert('Message sent successfully! We\'ll get back to you within 24 hours.');
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Something went wrong. Please try again or contact us directly at info.smarb@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };
  return <>
      <SEOHead title="SMARB Technologies | Leading AI Solutions, Software Development & Digital Marketing Company" description="Transform your business with SMARB Technologies - Pakistan's premier AI solutions and software development company. Expert services in machine learning, custom software, business automation, and digital marketing for global enterprises." keywords="SMARB Technologies, Smarb Technologies, Smart Technologies, Smartb Technologies, Smarb Tech, Smart Tech, Smab Technologies, AI Solutions, Machine Learning, Software Development, Digital Marketing, Business Automation, RAG Systems, NLP, Computer Vision, Custom Software, API Development, Web Development, Mobile Apps, IT Consulting, Technology Company, Pakistan Tech Company" canonicalUrl="https://www.smarbtechnologies.com/" />
      <AnalyticsSetup />
      <AlternativeNamesSchema />
      <FAQSchema />
      <Layout>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative w-full overflow-hidden">
        {/* Video Background */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Black tint overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        {/* Gradient overlay for additional depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-20" />
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-30 max-w-7xl w-full">
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-center text-white max-w-5xl mx-auto px-2 sm:px-4">
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2
            }} className="mb-8">
              
            </motion.div>
            
            <motion.h1 initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4
            }} className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-hero font-bold mb-4 sm:mb-6 md:mb-8 leading-tight font-poppins px-2 sm:px-0 min-h-[2.5rem] xs:min-h-[3rem] sm:min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem] xl:min-h-[7rem] break-words hyphens-auto overflow-hidden" style={{
              wordBreak: 'break-word'
            }}>
              {/* Fallback static heading for accessibility and JS fallback */}
              {/* <span className="sr-only">
                Leading Technology Solutions for Global Businesses
               </span> */}
              
              {/* Dynamic typewriter heading with inline cursor */}
              <span className="relative bg-gradient-to-r from-blue-300 via-white to-blue-400 bg-clip-text text-transparent" style={{
                minHeight: '4rem',
                display: 'inline-block',
                width: '100%',
                willChange: 'transform',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                transition: 'filter 300ms ease-out',
                filter: isDeleting ? 'blur(0.3px)' : 'none'
              }}>
                {currentText.trim()}
                <span className={`inline-block w-1 bg-gradient-to-b from-primary to-primary/60 ml-1 ${isTyping || isDeleting ? 'animate-blink' : ''}`} style={{
                  height: '1.2em',
                  marginTop: '0.1em',
                  verticalAlign: 'top',
                  opacity: 0.9
                }} />
              </span>
            </motion.h1>
            
            {/* Typewriter indicator */}
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5
            }} className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {typewriterWords.map((_, index) => <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentWordIndex % typewriterWords.length ? 'bg-primary scale-125' : 'bg-white/30 scale-100'}`} />)}
              </div>
            </motion.div>
            
            <motion.p initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.6
            }} className="text-base sm:text-lg md:text-xl lg:text-body-lg text-white/90 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto font-poppins px-4 sm:px-0">
              {t('hero.subheadline')}
            </motion.p>
            
            <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.8
            }} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  {t('hero.getInTouch')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="hero-secondary" size="lg" asChild>
                <a href="#case-studies">
                  {t('hero.viewOurWork')}
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <br />
      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-4">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-background w-full">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 max-w-7xl w-full">
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
            <Badge className="bg-blue-900 text-white font-bold mb-4 font-poppins text-base px-4 py-2">{t('about.title')}</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-subhead font-bold mb-6 font-poppins break-words">
              {t('about.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto font-poppins break-words">
              {t('about.description')}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto font-poppins mt-4 break-words">
              {t('about.trust')}
            </p>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-8 mb-20 max-w-2xl mx-auto">
            {stats.map((stat, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>)}
          </div>



          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }}>
              <Badge className="bg-blue-900 text-white font-bold mb-4 text-base px-4 py-2">Our Mission</Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Driving Digital Innovation
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our mission is to empower businesses worldwide through cutting-edge technology solutions, 
                AI innovation, and strategic digital transformation. We believe every organization deserves 
                access to world-class technology expertise.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Headquartered in Pakistan, we combine regional expertise with global technology standards 
                to deliver solutions that drive real business impact. Our team is passionate about helping 
                enterprises thrive in the digital age.
              </p>
            </motion.div>

            <motion.div initial={{
              opacity: 0,
              x: 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} className="grid grid-cols-2 gap-6">
              {values.map((value, index) => <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 overflow-hidden">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h4 className="font-semibold mb-2 break-words">{value.title}</h4>
                  <p className="text-sm text-muted-foreground break-words">{value.description}</p>
                </Card>)}
            </motion.div>
          </div>

          {/* Section Divider */}
          <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-4">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
      <br />
          {/* Team Section */}
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">

            <Badge className="bg-blue-900 text-white font-bold mb-4 text-base px-4 py-2">Our Team</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the Technology Experts
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the founders who combine technical expertise with business acumen to deliver 
              innovative solutions that drive real results for our clients worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {team.map((member, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.2
            }} viewport={{
              once: true
            }}>
                <Card className="p-4 sm:p-6 md:p-8 hover:shadow-strong transition-all duration-300 group relative overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="relative">
                        <OptimizedImage src={member.image} alt={`${member.name} - ${member.role} at SMARB Technologies`} width={128} height={128} sizes="128px" className="w-32 h-32 rounded-2xl object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 group-hover:scale-105" />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Star className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <h4 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{member.name}</h4>
                        <p className="text-primary font-semibold mb-4 text-base sm:text-lg">{member.role}</p>
                        
                        <div className="space-y-2 mb-6">
                          {member.bio.map((point, pointIndex) => <div key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-justify">{point}</span>
                            </div>)}
                        </div>
                        
                        <Button variant="outline" size="sm" className="group/btn hover:bg-primary hover:text-white transition-all duration-300" asChild>
                          <a href={`https://${member.social.linkedin}`} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            {t('team.connectLinkedIn')}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-4">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/20 w-full">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 max-w-7xl w-full">
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
            <Badge className="bg-blue-900 text-white font-bold mb-4 font-poppins text-base px-4 py-2">{t('services.title')}</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-subhead font-bold mb-6 font-poppins break-words">
              {t('services.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto font-poppins break-words">
              {t('services.subtitle')}
            </p>
          </motion.div>

            {/* Main Services */}
            <div className="space-y-20 mb-20">
            {detailedServices.map((service, index) => <motion.div key={service.id} id={service.id} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} viewport={{
              once: true
            }}>
              <Card className="p-4 sm:p-6 md:p-8 hover:shadow-strong transition-all duration-300 group">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="w-full">
                  <div className="mb-4 flex justify-center lg:justify-start group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 text-center lg:text-left break-words">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed text-center lg:text-left break-words">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 flex items-center justify-center lg:justify-start text-sm">
                      <Shield className="h-3 w-3 mr-2 text-primary" />
                      What's Included
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {service.features.map((feature, idx) => <li key={idx} className="text-xs text-muted-foreground flex items-center">
                          <Zap className="h-3 w-3 mr-2 text-primary flex-shrink-0" />
                          {feature}
                        </li>)}
                    </ul>
                  </div>

                  <div className="flex justify-center lg:justify-start w-full">
                    <Button variant="premium" asChild className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs px-4 py-2 text-xs font-semibold rounded-lg">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center">
                        <span className="block sm:hidden">
                          {t('services.getQuote')}
                        </span>
                        <span className="hidden sm:block md:hidden">
                          {t('services.getFullQuote').replace('{service}', service.title.split(" ")[0])}
                        </span>
                        <span className="hidden md:block">
                          {t('services.getFullQuote').replace('{service}', service.title)}
                        </span>
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="w-full space-y-6 mt-8 lg:mt-0">
                  <div className="bg-gradient-card p-4 sm:p-6 rounded-xl">
                  <h4 className="font-semibold mb-3 text-primary">{t('services.deliverables')}</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, idx) => <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {deliverable}
                    </li>)}
                  </ul>
                  </div>

                  <div className="bg-gradient-card p-4 sm:p-6 rounded-xl">
                  <h4 className="font-semibold mb-3 text-primary">{t('services.timeline')}</h4>
                  <p className="text-sm text-muted-foreground">{service.timeline}</p>
                  </div>
                </div>
                </div>
              </Card>
              </motion.div>)}
            </div>

          {/* Additional Services */}
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
            <Badge className="bg-blue-900 text-white font-bold mb-4 text-base px-4 py-2">Additional Services</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Specialized Solutions
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Targeted services to address specific business needs and challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {additionalServices.map((service, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} viewport={{
              once: true
            }}>
                <Card className="p-6 hover:shadow-medium transition-all duration-300 group cursor-pointer">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h4 className="font-semibold mb-2 break-words">{service.title}</h4>
                  <p className="text-sm text-muted-foreground break-words">{service.description}</p>
                </Card>
              </motion.div>)}
          </div>

          <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center">
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
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-4">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-background w-full">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 max-w-7xl w-full">
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
            <Badge className="bg-blue-900 text-white font-bold mb-4 font-poppins text-base px-4 py-2">{t('caseStudies.title')}</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-subhead font-bold mb-6 font-poppins break-words">
              {t('caseStudies.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto font-poppins break-words">
              {t('caseStudies.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study, index) => <motion.div key={study.id} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} viewport={{
              once: true
            }}>
                <Card className="overflow-hidden hover:shadow-strong transition-all duration-300 group">
                  <div className="relative">
                    <img src={study.image} alt={study.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-900 text-white font-bold text-sm px-3 py-1">
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
                      {study.results.slice(0, 4).map((result, idx) => <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-primary">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </div>)}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {study.tags.slice(0, 3).map(tag => <Badge key={tag} className="bg-blue-900 text-white font-bold text-sm px-3 py-1">
                          {tag}
                        </Badge>)}
                    </div>

                    <Button variant="outline" className="w-full group" onClick={() => {
                    setSelectedCaseStudy(study);
                    setIsCaseStudyModalOpen(true);
                  }}>
                      {t('caseStudies.viewProject')}
                      <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>)}
          </div>

        </div>
      </section>

      {/* Testimonials
       <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-blue-900 text-white font-bold mb-4 font-poppins text-base px-4 py-2">Client Testimonials</Badge>
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
       </section> */}

      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-secondary/20 px-4">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Our Ventures Section */}
      <section id="ventures" className="py-20 bg-background w-full">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 max-w-7xl w-full">
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
            <Badge className="bg-blue-900 text-white font-bold mb-4 font-poppins text-base px-4 py-2">{t('ventures.title')}</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-subhead font-bold mb-6 font-poppins break-words">
              {t('ventures.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto font-poppins break-words">
              {t('ventures.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* VisaMate */}
            <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }}>
              <Card className="p-8 hover:shadow-strong transition-all duration-300 group h-full overflow-hidden">
                <div className="flex items-center justify-center mb-6">
                  <img src="/visamate-logo.png" alt="VisaMate - AI-Powered Visa Application Services by SMARB Technologies" className="h-16 w-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-primary transition-colors break-words">
                  VisaMate
                </h3>
                <p className="text-muted-foreground mb-6 text-center leading-relaxed break-words">
                  {t('ventures.visamate.description')}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm break-words">{t('ventures.visamate.feature1')}</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm break-words">{t('ventures.visamate.feature2')}</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm break-words">{t('ventures.visamate.feature3')}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://visamate.pro" target="_blank" rel="noopener noreferrer">
                    {t('ventures.visitWebsite')}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>
            </motion.div>

            {/* SkillMap - Coming Soon */}
            <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.1
            }} viewport={{
              once: true
            }}>
              <Card className="p-8 hover:shadow-strong transition-all duration-300 group h-full overflow-hidden relative">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-white">Coming Soon</Badge>
                </div>
                <div className="flex items-center justify-center mb-6">
                  <div className="h-16 w-16 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">SM</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-primary transition-colors break-words">
                  SkillMap
                </h3>
                <p className="text-muted-foreground mb-6 text-center leading-relaxed break-words">
                  {t('ventures.skillmap.description')}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm break-words">{t('ventures.skillmap.feature1')}</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm break-words">{t('ventures.skillmap.feature2')}</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm break-words">{t('ventures.skillmap.feature3')}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" disabled>
                  {t('ventures.comingSoon')}
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-4">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="py-20 bg-primary relative w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 max-w-7xl w-full relative z-10">
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center text-white max-w-4xl mx-auto">
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
                  {t('hero.getInTouch')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="hero-secondary" size="lg" asChild>
                <a href="#case-studies">
                  {t('hero.viewOurWork')}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-4">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Our Ventures Section */}
      <section id="ventures" className="py-20 bg-background w-full">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 max-w-7xl w-full">
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
            <Badge className="bg-blue-900 text-white font-bold mb-4 font-poppins text-base px-4 py-2">{t('ventures.title')}</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-subhead font-bold mb-6 font-poppins">
              {t('ventures.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-poppins">
              {t('ventures.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* VisaMate Card */}
            <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.1
            }} viewport={{
              once: true
            }}>
              <Card className="h-full p-6 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                <div className="text-center">
                  <div className="mb-6">
                    <img src="/visamate-logo.png" alt="VisaMate Logo" className="h-16 w-auto mx-auto object-contain" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 font-poppins break-words">{t('ventures.visamate.title')}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed break-words">
                    {t('ventures.visamate.description')}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300" asChild>
                    <a href="https://visamate.pro" target="_blank" rel="noopener noreferrer" aria-label="Visit VisaMate website">
                      {t('ventures.visamate.cta')}
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Yellow Bee Marketing Card */}
            <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2
            }} viewport={{
              once: true
            }}>
              <Card className="h-full p-6 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                <div className="text-center">
                  <div className="mb-6">
                    <img src="/yellowbee-logo.png" alt="Yellow Bee Marketing Logo" className="h-16 w-auto mx-auto object-contain" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 font-poppins break-words">{t('ventures.yellowbee.title')}<sup className="text-xs text-yellow-500 ml-1">TM</sup></h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed break-words">
                    {t('ventures.yellowbee.description')}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300" asChild>
                    <a href="https://www.facebook.com/share/1aYGh3P21D/" target="_blank" rel="noopener noreferrer" aria-label="Visit Yellow Bee Marketing Facebook page">
                      {t('ventures.yellowbee.cta')}
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* SkillMap Card */}
            <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.3
            }} viewport={{
              once: true
            }}>
              <Card className="h-full p-6 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 group cursor-pointer relative">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-500 text-white font-bold text-xs px-2 py-1">
                    {t('ventures.comingSoon')}
                  </Badge>
                </div>
                <div className="text-center">
                  <div className="mb-6">
                    <img src="/lovable-uploads/logo.png" alt="SkillMap Logo" className="h-16 w-auto mx-auto object-contain" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 font-poppins break-words">{t('ventures.skillmap.title')}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed break-words">
                    {t('ventures.skillmap.description')}
                  </p>
                  <Button variant="outline" className="w-full opacity-50 cursor-not-allowed" disabled>
                    {t('ventures.skillmap.cta')}
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-4">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background w-full">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 max-w-7xl w-full">
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
            <Badge className="bg-blue-900 text-white font-bold mb-4 font-poppins text-base px-4 py-2">{t('contact.title')}</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-subhead font-bold mb-6 font-poppins break-words">
              {t('contact.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto font-poppins break-words">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {contactMethods.map((method, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} viewport={{
              once: true
            }}>
                <Card className="p-6 text-center hover:shadow-medium transition-all duration-300 group">
                  <div className="inline-flex p-3 bg-primary rounded-full text-primary-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                  <p className="font-medium mb-4">{method.value}</p>
                  {method.socialLinks ? <div className="flex flex-wrap gap-2 justify-center max-w-full">
                      {method.socialLinks.map((social, socialIndex) => <Button key={socialIndex} variant="outline" size="sm" asChild className="group-hover:border-primary group-hover:text-primary min-w-0 flex-shrink-0">
                          <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-2 py-1">
                            <span className="flex-shrink-0">{social.icon}</span>
                            <span className="ml-1 text-xs truncate max-w-[60px] sm:max-w-none">{social.name}</span>
                          </a>
                        </Button>)}
                    </div> : <Button variant="outline" asChild className="group-hover:border-primary group-hover:text-primary">
                      <a href={method.action} target="_blank" rel="noopener noreferrer">
                        {method.actionText}
                      </a>
                    </Button>}
                </Card>
              </motion.div>)}
          </div>

          {/* Contact Form & Office Info */}
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }}>
              <div className="mb-6 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                <p className="text-sm text-primary">
                  <strong>Headquartered in Pakistan, serving clients worldwide.</strong> Our team is available 24/7 to support your technology needs.
                </p>
              </div>
              <Card className="p-6 sm:p-8">
                <div className="mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Send Us a Message</h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  try {
                    await sendContactEmail(formData);
                    toast({
                      title: "Message sent successfully!",
                      description: "We'll get back to you as soon as possible."
                    });
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      budget: '',
                      message: ''
                    });
                  } catch (error) {
                    toast({
                      title: "Error sending message",
                      description: error instanceof Error ? error.message : "Please try again or contact us through other means.",
                      variant: "destructive"
                    });
                  } finally {
                    setIsSubmitting(false);
                  }
                }} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact.form.name')} *</Label>
                      <Input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} placeholder="Your full name" className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.form.email')} *</Label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" className="w-full" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">{t('contact.form.company')}</Label>
                      <Input id="company" name="company" type="text" value={formData.company} onChange={handleInputChange} placeholder="Your company name" className="w-full" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.form.message')} *</Label>
                    <Textarea id="message" name="message" required value={formData.message} onChange={handleInputChange} placeholder="Tell us about your project, goals, and how we can help..." rows={5} className="w-full" />
                  </div>

                  <Button type="submit" variant="premium" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        {t('contact.form.sending')}
                      </> : <>
                        <Send className="mr-2 h-4 w-4" />
                        {t('contact.form.send')}
                      </>}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Office Info */}
            <motion.div initial={{
              opacity: 0,
              x: 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} className="space-y-8">
              {/* Office Information */}
              <Card className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Our Office</h3>
                <div className="space-y-6">
                  {officeInfo.map((info, index) => <div key={index} className="flex items-start space-x-4">
                      <div className="text-primary mt-1">{info.icon}</div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <p className="text-muted-foreground text-sm">{info.value}</p>
                      </div>
                    </div>)}
                </div>
              </Card>

              {/* Quick Response Guarantee */}
              <Card className="p-6 bg-primary text-primary-foreground">
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
      <section className="py-16 sm:py-20 bg-secondary/20 w-full">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 max-w-7xl w-full">
          <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center max-w-3xl mx-auto">
            <Badge className="bg-blue-900 text-white font-bold mb-4 text-base px-4 py-2">Still Have Questions?</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              We're Here to Help
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Have questions about our technology solutions, AI capabilities, or development process? 
              Don't hesitate to reach out. We're always happy to help.
            </p>
            <Button variant="premium" size="lg" asChild>
              <a href="https://wa.me/+971505940132?text=Hi! I have some questions about your technology solutions." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Case Study Modal */}
      <Dialog open={isCaseStudyModalOpen} onOpenChange={setIsCaseStudyModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedCaseStudy && <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-2">
                  {selectedCaseStudy.title}
                </DialogTitle>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>{selectedCaseStudy.client}</span>
                  <span>•</span>
                  <span>{selectedCaseStudy.industry}</span>
                  <span>•</span>
                  <span>{selectedCaseStudy.timeline}</span>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {/* Hero Image */}
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img src={selectedCaseStudy.image} alt={selectedCaseStudy.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Challenge Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-red-500" />
                    Challenge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>

                {/* Solution Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCaseStudy.solution}
                  </p>
                </div>

                {/* Results Section */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-blue-500" />
                    Results & Impact
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedCaseStudy.results.map((result, index) => <Card key={index} className="p-4 text-center">
                        <div className="flex justify-center mb-2">
                          {result.icon}
                        </div>
                        <div className="text-2xl font-bold text-primary mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {result.metric}
                        </div>
                      </Card>)}
                  </div>
                </div>

                {/* Technologies/Tags */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Code className="h-5 w-5 mr-2 text-purple-500" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudy.tags.map((tag, index) => <Badge key={index} className="bg-blue-900 text-white font-bold text-sm px-3 py-1">
                        {tag}
                      </Badge>)}
                  </div>
                </div>

                {/* Client Testimonial */}
                <div className="bg-secondary/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Quote className="h-5 w-5 mr-2 text-primary" />
                    Client Testimonial
                  </h3>
                  <blockquote className="text-lg italic mb-4 leading-relaxed">
                    "{selectedCaseStudy.testimonial}"
                  </blockquote>
                  <div className="text-sm text-muted-foreground">
                    — {selectedCaseStudy.clientRole}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex justify-center pt-4">
                  <Button className="w-full sm:w-auto" asChild>
                    <a href="#contact">
                      {t('contact.form.submit')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </>}
        </DialogContent>
      </Dialog>
      </Layout>
    </>;
};
export default Index;