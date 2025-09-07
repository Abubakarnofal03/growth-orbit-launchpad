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
      additionalDetails: {
        modelingCapabilities: [
          "Parametric & surface modeling",
          "Sheet metal & weldment design",
          "Assembly modeling & kinematics",
          "Generative design & topology optimization",
          "Reverse engineering from point cloud data"
        ],
        simulationTypes: [
          "Structural analysis (static & dynamic)",
          "Thermal analysis",
          "Flow simulation (CFD)",
          "Motion analysis",
          "Electromagnetic analysis"
        ],
        optimizationFeatures: [
          "Topology optimization",
          "Multi-objective design optimization",
          "Parametric optimization",
          "Shape & size optimization",
          "Multi-physics optimization"
        ]
      }
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
      additionalDetails: {
        designFeatures: [
          "Artificial nematic muscle actuators",
          "Flexible continuum spine structure",
          "Integrated sensor array",
          "Advanced gait control system",
          "Energy recovery mechanisms"
        ],
        performanceMetrics: [
          "25% improvement in energy efficiency",
          "35% reduction in terrain slippage",
          "93% actuator response accuracy",
          "5° max spine bending error",
          "70% shock absorption improvement"
        ],
        developmentPhases: [
          "CAD design and modeling",
          "Actuator system development",
          "Control system integration",
          "Prototype assembly and testing",
          "Performance optimization"
        ]
      }
    },
    {
      id: 3,
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
      id: 2,
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
      id: 3,
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