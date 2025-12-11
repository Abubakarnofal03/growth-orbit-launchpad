import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  TrendingUp,
  Target,
  Users,
  BarChart3,
  Calendar,
  CheckCircle,
  Quote,
  Code,
  Clock,
  Zap
} from "lucide-react";


const CaseStudyDetail = () => {
  const { id } = useParams();

  const caseStudies = [
    {
      id: 1,
      title: "Engineering Design & Simulation Platform",
      client: "Engineering Research Lab",
      industry: "Engineering Software / Simulation",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1200&h=600&fit=crop",
      challenge: "Need for comprehensive modeling, simulation, and optimization capabilities across multiple engineering design software platforms for robotics and mechanical systems.",
      solution: "Developed an integrated platform leveraging ANSYS Workbench, Fusion 360, SOLIDWORKS, and related tools for advanced engineering analysis and optimization.",
      results: [
        { metric: "Software Integration", value: "8+ platforms", icon: <Code className="h-5 w-5" /> },
        { metric: "Simulation Accuracy", value: "98%", icon: <Target className="h-5 w-5" /> },
        { metric: "Design Time Reduction", value: "-40%", icon: <Clock className="h-5 w-5" /> },
        { metric: "Resource Efficiency", value: "+65%", icon: <BarChart3 className="h-5 w-5" /> }
      ],
      timeline: "12 months",
      tags: ["ANSYS", "Fusion 360", "SOLIDWORKS", "MATLAB", "CAD", "FEA", "CFD", "Optimization"],
      testimonial: "This platform revolutionized our engineering workflow by seamlessly integrating multiple design and simulation tools, significantly improving our development efficiency.",
      clientRole: "Lead Research Engineer",
      detailedDescription: "Our Engineering Design & Simulation Platform represents a comprehensive solution for modern engineering challenges, integrating multiple industry-standard tools into a cohesive workflow. The platform enables seamless transitions between different phases of engineering design, from initial concept to final optimization.",
      keyFeatures: [
        "3D CAD modeling with Fusion 360, SOLIDWORKS, and CATIA",
        "Finite Element Analysis (FEA) using ANSYS Workbench",
        "Computational Fluid Dynamics (CFD) with ANSYS Fluent",
        "Multibody dynamics simulation with ADAMS",
        "Control system optimization via MATLAB/Simulink",
        "Cloud-based collaboration and version control"
      ],
      technicalStack: [
        "ANSYS Workbench for structural and thermal analysis",
        "Fusion 360 for CAD and generative design",
        "SOLIDWORKS for mechanical design",
        "MATLAB/Simulink for control systems",
        "COMSOL Multiphysics for coupled physics simulation",
        "Custom Python scripts for automation and data processing"
      ],
      implementation: [
        "Requirement analysis and tool selection (4 weeks)",
        "Platform architecture design (8 weeks)",
        "Integration of CAD and simulation tools (16 weeks)",
        "Validation and testing (8 weeks)",
        "Deployment and training (4 weeks)"
      ]
    },
    {
      id: 2,
      title: "Bio-Inspired Quadruped Robot with Hybrid Actuation",
      client: "Robotics Research Institute",
      industry: "Robotics / Research",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=600&fit=crop",
      challenge: "Traditional quadruped robots lack adaptability and energy efficiency due to rigid motor-only actuation systems, limiting their performance in real-world applications.",
      solution: "Developed a hybrid-actuated quadruped robot combining artificial nematic muscles with traditional motors and a continuum spine for enhanced mobility and efficiency.",
      results: [
        { metric: "Energy Efficiency", value: "+25%", icon: <Zap className="h-5 w-5" /> },
        { metric: "Terrain Adaptation", value: "+35%", icon: <Target className="h-5 w-5" /> },
        { metric: "Actuator Accuracy", value: "93%", icon: <CheckCircle className="h-5 w-5" /> },
        { metric: "Project Timeline", value: "12 weeks", icon: <Calendar className="h-5 w-5" /> }
      ],
      timeline: "3 months",
      tags: ["Robotics", "Hybrid Actuation", "Bio-Inspired", "ANSYS", "MATLAB", "Control Systems"],
      testimonial: "This quadruped robot demonstrates how hybrid actuation and soft robotics principles can enhance mobility beyond traditional rigid systems.",
      clientRole: "Academic Supervisor",
      detailedDescription: "Our bio-inspired quadruped robot project pushes the boundaries of robotics by combining traditional motors with artificial nematic muscles and a innovative continuum spine design. This hybrid approach enables more natural movement patterns and improved energy efficiency.",
      keyFeatures: [
        "Hybrid actuation system (nematic muscles + motors)",
        "Bio-inspired continuum spine design",
        "Advanced control system integration",
        "Terrain adaptation capabilities",
        "Energy-efficient gait patterns",
        "Integrated sensor feedback system"
      ],
      technicalStack: [
        "ANSYS for structural and thermal analysis",
        "MATLAB/Simulink for control systems",
        "Fusion 360 for mechanical design",
        "Custom embedded control software",
        "ROS2 for system integration",
        "Python for data processing and analysis"
      ],
      implementation: [
        "CAD design and modeling",
        "Actuator system development",
        "Control system integration",
        "Prototype assembly and testing",
        "Performance optimization"
      ]
    },
    {
      id: 3,
      title: "O'TRADE AI Chatbot – Multilingual Wholesale Assistant",
      client: "O'Trade",
      industry: "Chatbots / E-commerce",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=1200&h=600&fit=crop",
      challenge: "O'Trade needed a multilingual AI chatbot to streamline wholesale product inquiries, handle customer requests, and automate receipt generation across Webchat and WhatsApp.",
      solution: "Developed an AI-powered chatbot using Botpress and GPT-4o, integrated with WooCommerce REST API for product data. The bot supports natural product queries, multilingual conversations (English, French, Arabic), PDF receipt generation, and escalation to human agents.",
      results: [
        { metric: "Response Speed", value: "Instant", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "User Engagement", value: "+60%", icon: <Users className="h-5 w-5" /> },
        { metric: "Error Reduction", value: "-80%", icon: <Target className="h-5 w-5" /> },
        { metric: "Automation Rate", value: "70%", icon: <BarChart3 className="h-5 w-5" /> }
      ],
      timeline: "4 weeks (Phase 1)",
      tags: ["AI Chatbot", "Botpress", "GPT-4o", "WooCommerce API", "Multilingual Support"],
      testimonial: "The O'TRADE AI Chatbot transformed our customer interactions. Clients can now inquire in their own language, get product details instantly, and even receive receipts in PDF format.",
      clientRole: "Head of Digital Transformation, O'Trade",
      detailedDescription: "The O'TRADE AI Chatbot functions as a 24/7 intelligent assistant, bridging the gap between wholesale buyers and the product catalog. Capable of understanding complex queries in multiple languages, it automates the entire inquiry-to-receipt process, significantly reducing the workload on human support staff.",
      keyFeatures: [
        "Multilingual support (English, French, Arabic)",
        "Real-time WooCommerce product inventory integration",
        "Automated PDF receipt generation",
        "Seamless WhatsApp and Webchat integration",
        "Intelligent escalation to human agents",
        "Context-aware conversation handling"
      ],
      technicalStack: [
        "Botpress for chatbot orchestration",
        "OpenAI GPT-4o for natural language understanding",
        "WooCommerce REST API for product data",
        "Node.js for custom integrations",
        "Docker for containerization",
        "WhatsApp Business API"
      ],
      implementation: [
        "Requirement gathering and conversation design (1 week)",
        "Botpress setup and GPT-4o integration (1 week)",
        "WooCommerce API and PDF generation integration (1 week)",
        "Testing, refinement, and deployment (1 week)"
      ]
    },
    {
      id: 4,
      title: "Shopify E-Commerce Store Development for Omnifits",
      client: "Omnifits",
      industry: "E-Commerce / Fitness Apparel",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&h=600&fit=crop",
      challenge: "Omnifits needed a modern, mobile-first e-commerce solution for their premium fitness apparel brand with optimized checkout flow and seamless product management for 100+ SKUs.",
      solution: "Developed a custom Shopify-based e-commerce platform with tailored fitness niche theme, optimized product pages, integrated payment gateways, shipping automation, and SEO-friendly structure.",
      results: [
        { metric: "Uptime", value: "99.9%", icon: <CheckCircle className="h-5 w-5" /> },
        { metric: "User Engagement", value: "+45%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Checkout Conversion", value: "+25%", icon: <Target className="h-5 w-5" /> },
        { metric: "Product SKUs", value: "100+", icon: <Zap className="h-5 w-5" /> }
      ],
      timeline: "4-6 weeks",
      tags: ["Shopify", "Liquid", "E-commerce", "UX Design", "Performance Optimization"],
      testimonial: "The new Shopify store exceeded our expectations with seamless performance and significantly improved user engagement and conversion rates.",
      clientRole: "Founder, Omnifits",
      detailedDescription: "Omnifits required a high-performance, visually striking online store that mirrored the premium quality of their fitness apparel. We delivered a fully customized Shopify solution that not only looks great but is engineered for sales, featuring a streamlined checkout process and advanced inventory management.",
      keyFeatures: [
        "Custom Shopify theme development",
        "Mobile-first responsive design",
        "Advanced product filtering and search",
        "Automated shipping calculation",
        "Integrated payment gateways",
        "SEO optimization and schema markup"
      ],
      technicalStack: [
        "Shopify (Liquid templating)",
        "HTML5, CSS3, JavaScript",
        "Google Analytics 4 integration",
        "Klaviyo for email marketing",
        "Yotpo for reviews",
        "Custom app integrations"
      ],
      implementation: [
        "Theme selection and customization (1 week)",
        "Product data migration and setup (1 week)",
        "App integration and configuration (1 week)",
        "QA, testing, and launch (1 week)"
      ]
    },
    {
      id: 5,
      title: "VisaMate: AI-Powered Visa Application System",
      client: "Global Immigration Services",
      industry: "Government Services",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
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
      clientRole: "CTO, Global Immigration Services",
      detailedDescription: "The VisaMate system represents a comprehensive digital transformation of traditional visa application processes. Our team developed a sophisticated AI-powered platform that automates document verification, application screening, and workflow management while maintaining the highest security standards required for government operations.",
      keyFeatures: [
        "AI-powered document verification and processing",
        "Automated application screening and validation",
        "Real-time status tracking for applicants",
        "Integrated payment processing system",
        "Multi-language support and accessibility",
        "Advanced security and compliance features"
      ],
      technicalStack: [
        "Python Django for backend development",
        "Machine Learning models for document processing",
        "React.js for frontend interface",
        "PostgreSQL for data management",
        "AWS cloud infrastructure",
        "API integrations with government systems"
      ],
      implementation: [
        "Discovery and requirements analysis (4 weeks)",
        "System architecture and design (6 weeks)",
        "AI model development and training (12 weeks)",
        "Frontend and backend development (16 weeks)",
        "Integration testing and deployment (4 weeks)",
        "Training and go-live support (4 weeks)"
      ]
    },
    {
      id: 6,
      title: "SkillMap: AI-Driven Team Formation Platform",
      client: "TechCorp Solutions",
      industry: "Technology",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop",
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
      clientRole: "VP Engineering, TechCorp Solutions",
      detailedDescription: "SkillMap addresses the critical challenge of optimal team formation in large technology organizations. Our AI-driven platform analyzes individual skills, experience levels, project requirements, and team dynamics to automatically suggest optimal team compositions for maximum project success.",
      keyFeatures: [
        "AI-powered skill analysis and matching",
        "Project requirement assessment",
        "Team composition optimization",
        "Performance prediction algorithms",
        "Resource availability tracking",
        "Integration with HR and project management systems"
      ],
      technicalStack: [
        "Python for machine learning algorithms",
        "TensorFlow for AI model development",
        "Node.js backend with Express",
        "Angular frontend framework",
        "MongoDB for flexible data storage",
        "Docker containerization"
      ],
      implementation: [
        "Skill mapping and data analysis (3 weeks)",
        "AI algorithm development (8 weeks)",
        "Platform development and integration (12 weeks)",
        "Testing and optimization (4 weeks)",
        "Deployment and training (3 weeks)"
      ]
    },
    {
      id: 7,
      title: "PDF_QA with RAG: Intelligent Document System",
      client: "LegalTech Innovations",
      industry: "Legal Services",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop",
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
      clientRole: "Managing Partner, LegalTech Innovations",
      detailedDescription: "The PDF_QA system revolutionizes legal document research through Retrieval-Augmented Generation (RAG) technology. This intelligent system processes vast legal document repositories and provides instant, contextually accurate answers to complex legal queries, dramatically improving research efficiency and client service quality.",
      keyFeatures: [
        "RAG-based document question answering",
        "Advanced natural language processing",
        "Legal document parsing and indexing",
        "Context-aware search capabilities",
        "Citation and source tracking",
        "Multi-format document support"
      ],
      technicalStack: [
        "Python with LangChain framework",
        "OpenAI GPT models for language processing",
        "Vector databases for document embedding",
        "FastAPI for backend services",
        "React for user interface",
        "Elasticsearch for document indexing"
      ],
      implementation: [
        "Document analysis and processing pipeline (4 weeks)",
        "RAG system development (8 weeks)",
        "Frontend interface creation (6 weeks)",
        "Integration and testing (4 weeks)",
        "Deployment and user training (3 weeks)"
      ]
    },
    {
      id: 8,
      title: "Motion Study & Impact Analysis of RoboCup Robot",
      client: "RoboCup SSL Research Project",
      industry: "Mechanical Engineering / Robotics",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop",
      challenge: "In RoboCup Small Size League (SSL), precision ball control is critical. This project involved designing a compact, lightweight, and durable robot body with an efficient dribbler system capable of withstanding repeated high-speed impacts while maintaining grip and stability.",
      solution: "Developed a comprehensive CAD design using Fusion 360 with motion studies and ANSYS Workbench analysis for dribbler impact optimization at multiple RPMs, focusing on roller material elasticity and wear resistance.",
      results: [
        { metric: "Design Speed", value: "2 weeks", icon: <Target className="h-5 w-5" /> },
        { metric: "Simulation Time", value: "4 days", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Impact Analysis", value: "1 week", icon: <BarChart3 className="h-5 w-5" /> },
        { metric: "Error Deviation", value: "<5%", icon: <CheckCircle className="h-5 w-5" /> }
      ],
      timeline: "6 weeks",
      tags: ["Mechanical", "Fusion 360", "ANSYS Workbench", "RoboCup SSL", "CAD Design"],
      testimonial: "The comprehensive design and analysis approach resulted in a 30% faster ball handling response with optimized durability and performance.",
      clientRole: "Research Team Lead, RoboCup SSL Project",
      detailedDescription: "For the highly competitive RoboCup Small Size League, we engineered a next-generation dribbler system. By utilizing advanced CAD modeling and finite element analysis (FEA), we optimized the robot's dribbler mechanism for maximum ball control under high-speed impact conditions, ensuring durability without compromising agility.",
      keyFeatures: [
        "Advanced CAD modeling in Fusion 360",
        "Motion study simulation",
        "ANSYS Workbench impact analysis",
        "Material selection optimization",
        "Stress and deformation analysis",
        "Dynamic response testing"
      ],
      technicalStack: [
        "Autodesk Fusion 360 for design",
        "ANSYS Workbench for simulation",
        "SolidWorks for validation",
        "MATLAB for data analysis",
        "3D Printing for prototyping"
      ],
      implementation: [
        "Conceptual design and CAD modeling (2 weeks)",
        "Motion study and kinematic analysis (1 week)",
        "FEA and impact simulation (1 week)",
        "Design optimization and refinement (1 week)",
        "Final documentation and reporting (1 week)"
      ]
    }
  ];

  const study = caseStudies.find(s => s.id === parseInt(id || "1"));

  if (!study) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
            <Button asChild>
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const whatsappNumber = "+971505940132";
  const whatsappMessage = `Hi! I'm interested in learning more about the ${study.title} project.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Button variant="outline" asChild className="mb-6">
              <Link to="/#case-studies">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Case Studies
              </Link>
            </Button>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">{study.industry}</Badge>
              {study.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {study.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              {study.client} • {study.timeline}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {study.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {result.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {result.metric}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-strong"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  {study.detailedDescription}
                </p>
              </motion.div>

              {/* Challenge & Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-destructive">The Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {study.challenge}
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Our Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {study.solution}
                  </p>
                </Card>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {study.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Technical Implementation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-6">Technical Stack</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {study.technicalStack.map((tech, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Implementation Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h2 className="text-2xl font-bold mb-6">Implementation Phases</h2>
                <div className="space-y-4">
                  {study.implementation.map((phase, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground pt-1">{phase}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Client Testimonial */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <blockquote className="text-muted-foreground italic mb-4">
                    "{study.testimonial}"
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-semibold">{study.clientRole}</div>
                    <div className="text-muted-foreground">{study.client}</div>
                  </div>
                </Card>
              </motion.div>

              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="p-6">
                  <h3 className="font-bold mb-4">Project Details</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-muted-foreground">Client</div>
                      <div className="font-semibold">{study.client}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Industry</div>
                      <div className="font-semibold">{study.industry}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Timeline</div>
                      <div className="font-semibold">{study.timeline}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="p-6 text-center bg-gradient-card">
                  <h3 className="font-bold mb-4">Start Your Project</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Ready to achieve similar results? Let's discuss your project requirements.
                  </p>
                  <Button className="w-full" asChild>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Get Started Today
                    </a>
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyDetail;