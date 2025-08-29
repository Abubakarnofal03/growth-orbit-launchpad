import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain,
  Code2, 
  Database, 
  Cloud,
  ArrowRight,
  Star,
  Quote,
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Zap,
  Bot,
  Cpu,
  Globe
} from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = [
    { name: "Python", level: 95, icon: <Code2 className="h-6 w-6" /> },
    { name: "AI/ML", level: 90, icon: <Brain className="h-6 w-6" /> },
    { name: "Django", level: 88, icon: <Database className="h-6 w-6" /> },
    { name: "React", level: 85, icon: <Globe className="h-6 w-6" /> },
    { name: "Cloud (AWS)", level: 82, icon: <Cloud className="h-6 w-6" /> },
    { name: "Angular", level: 80, icon: <Globe className="h-6 w-6" /> }
  ];

  const projects = [
    {
      title: "VisaMate AI",
      description: "AI-powered visa application assistant with intelligent document processing and eligibility assessment.",
      tech: ["Python", "AI/ML", "NLP", "Django"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "SkillMap Platform",
      description: "Comprehensive skill assessment and career path recommendation system using machine learning.",
      tech: ["React", "Python", "TensorFlow", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "PDF QA System",
      description: "Intelligent document analysis system for extracting insights from complex PDFs using LLMs.",
      tech: ["Python", "LangChain", "OpenAI", "FastAPI"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Gender Classification AI",
      description: "Advanced computer vision model for demographic analysis with high accuracy and bias mitigation.",
      tech: ["TensorFlow", "OpenCV", "Python", "Docker"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Solutions",
      description: "Custom AI models, NLP systems, and machine learning applications tailored to your business needs.",
      features: ["Machine Learning", "NLP", "Computer Vision", "LLM Integration"]
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Backend Development",
      description: "Scalable backend systems, APIs, and cloud-native applications built with modern technologies.",
      features: ["Django/FastAPI", "PostgreSQL", "RESTful APIs", "Microservices"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Applications",
      description: "Full-stack web applications with modern frameworks and responsive user interfaces.",
      features: ["React", "Angular", "TypeScript", "Responsive Design"]
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Chatbots & Automation",
      description: "Intelligent chatbots and automation solutions to streamline business processes.",
      features: ["RAG Systems", "LangChain", "Process Automation", "Integration APIs"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-brand-darker">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            {/* Professional Avatar Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-primary flex items-center justify-center"
            >
              <Brain className="h-16 w-16 text-white" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <Badge className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm mb-4 font-medium text-sm px-4 py-2">
                Available for Freelance
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Applied AI Engineer &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Software Developer
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              I build scalable AI-powered applications, backend systems, and cloud solutions 
              that solve real-world problems with cutting-edge technology.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                Work With Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
                View Projects
              </Button>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-2xl mx-auto"
            >
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 bg-white/5 backdrop-blur-sm rounded-lg p-3">
                  {skill.icon}
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">About Me</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
                Building the Future with AI
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With extensive experience in AI/ML, backend development, and cloud architecture, 
                I transform complex problems into elegant, scalable solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-brand-dark">Skills & Expertise</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <div className="flex-1 mx-4 bg-secondary rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                          viewport={{ once: true }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 hover:shadow-strong transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Performance Driven</h4>
                      <p className="text-muted-foreground">Optimized solutions that scale efficiently and deliver exceptional user experiences.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-strong transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Cpu className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">AI-First Approach</h4>
                      <p className="text-muted-foreground">Leveraging cutting-edge AI technologies to solve complex business challenges.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-strong transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Quality Focused</h4>
                      <p className="text-muted-foreground">Clean, maintainable code with comprehensive testing and documentation.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Featured Work</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
              Projects That Make Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of AI-powered applications and systems I've built to solve real-world challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-strong transition-all duration-300 group h-full">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-white">Featured</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-brand-dark">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github}>
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-medium transition-all duration-300 group h-full">
                  <h3 className="text-lg font-semibold mb-2 text-brand-dark">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github}>
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
              How I Can Help You
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From AI integration to full-stack development, I provide comprehensive solutions for your technical needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-strong transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-brand-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Let's Connect</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-white/70 text-sm">your.email@example.com</p>
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Linkedin className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-white/70 text-sm">Connect with me</p>
              </motion.a>
              
              <motion.a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Github className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-white/70 text-sm">See my code</p>
              </motion.a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;