import { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { useLanguage } from "@/contexts/LanguageContext";
import { sendContactEmail, initializeEmailJS, ContactFormData } from "@/lib/email";
import { useToast } from "@/components/ui/use-toast";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Code, TrendingUp, Globe, Palette, ArrowRight, Star, Quote,
  CheckCircle, Award, Zap, Target, Shield, Mail, Phone, 
  Send, Linkedin, Twitter, ExternalLink, Sparkles, Rocket,
  Users, Clock, BarChart3, MessageCircle
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTypewriter } from "@/hooks/use-typewriter";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.9]);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    initializeEmailJS();
  }, []);

  // Typewriter animation
  const typewriterWords = [
    "AI-Powered Solutions",
    "Custom Software",
    "Digital Innovation",
    "Future-Ready Tech"
  ];

  const { currentText } = useTypewriter({
    words: typewriterWords,
    typeSpeed: 80,
    deleteSpeed: 50,
    delayBetweenWords: 2000,
    holdTime: 2500
  });

  // Intersection observer hooks for scroll animations
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Build scalable, high-performance applications tailored to your business needs",
      features: ["Web Applications", "Mobile Apps", "Cloud Solutions", "API Development"],
      color: "from-[#00D9FF] to-[#9D4EDD]"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "AI & Machine Learning",
      description: "Leverage cutting-edge AI to automate processes and gain insights",
      features: ["Predictive Analytics", "NLP Solutions", "Computer Vision", "Automation"],
      color: "from-[#9D4EDD] to-[#00D9FF]"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Digital Transformation",
      description: "Modernize your business with digital solutions and strategies",
      features: ["Process Automation", "Cloud Migration", "System Integration", "Consulting"],
      color: "from-[#00D9FF] to-[#9D4EDD]"
    }
  ];

  const stats = [
    { value: "200+", label: "Projects Delivered", icon: <Rocket /> },
    { value: "98%", label: "Client Satisfaction", icon: <Star /> },
    { value: "50+", label: "Team Members", icon: <Users /> },
    { value: "10+", label: "Years Experience", icon: <Award /> }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactEmail(formData);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours."
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEOHead 
        title="SMARB Technologies - AI Solutions & Custom Software Development"
        description="Transform your business with cutting-edge AI solutions and custom software development from SMARB Technologies."
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#00D9FF] opacity-20 blur-[150px]"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, 50, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#9D4EDD] opacity-20 blur-[150px]"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -100, 0],
              y: [0, -50, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Hero content */}
        <motion.div
          className="container mx-auto px-4 text-center z-10"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-gradient-to-r from-[#00D9FF]/20 to-[#9D4EDD]/20 border-[#00D9FF]/50 text-foreground">
              <Sparkles className="h-4 w-4 mr-2" />
              Pakistan's Leading Tech Innovators
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D9FF] via-[#9D4EDD] to-[#00D9FF] bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                SMARB
              </span>
            </h1>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Building{" "}
              <span className="text-[#00D9FF]">{currentText}</span>
              <span className="animate-blink text-[#00D9FF]">|</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions, custom software development, 
              and digital innovation strategies that drive real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] hover:shadow-glow transition-all duration-300 group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold glass hover:glass-strong transition-all duration-300"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <GlassCard
                key={index}
                className="p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex justify-center mb-3 text-[#00D9FF]">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </GlassCard>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-[#00D9FF]/20 to-[#9D4EDD]/20 border-[#00D9FF]/50">
              About Us
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
              Innovation-Driven Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a Pakistan-based technology company specializing in AI solutions, 
              custom software development, and digital transformation strategies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-12 w-12" />,
                title: "Our Mission",
                description: "Empower businesses with cutting-edge technology solutions that drive growth and innovation."
              },
              {
                icon: <Zap className="h-12 w-12" />,
                title: "Our Vision",
                description: "Be the leading technology partner for businesses seeking digital transformation in the region."
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: "Our Values",
                description: "Excellence, innovation, integrity, and customer success are at the core of everything we do."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <GlassCard
                  variant="strong"
                  className="p-8 h-full group"
                >
                  <div className="text-[#00D9FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-[#00D9FF]/20 to-[#9D4EDD]/20 border-[#9D4EDD]/50">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
              Comprehensive Tech Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to deployment, we deliver end-to-end solutions that transform your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <GlassCard
                  variant="glow"
                  className="p-8 h-full group relative overflow-hidden"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="text-[#00D9FF] mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <CheckCircle className="h-4 w-4 mr-2 text-[#00D9FF]" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant="ghost"
                      className="mt-6 text-[#00D9FF] hover:text-[#9D4EDD] group/btn"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-[#00D9FF]/20 to-[#9D4EDD]/20 border-[#00D9FF]/50">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business? Get in touch and let's discuss your project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <GlassCard variant="strong" className="p-8 h-full">
                <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-[#00D9FF]/20 to-[#9D4EDD]/20 border border-[#00D9FF]/30">
                      <Mail className="h-5 w-5 text-[#00D9FF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">contact@smarbtechnologies.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-[#00D9FF]/20 to-[#9D4EDD]/20 border border-[#00D9FF]/30">
                      <Phone className="h-5 w-5 text-[#00D9FF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">+971 50 594 0132</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-[#00D9FF]/20 to-[#9D4EDD]/20 border border-[#00D9FF]/30">
                      <MessageCircle className="h-5 w-5 text-[#00D9FF]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">WhatsApp</p>
                      <a 
                        href="https://wa.me/971505940132" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#00D9FF] hover:text-[#9D4EDD] transition-colors"
                      >
                        Chat with us
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
                  <div className="flex space-x-4">
                    <a href="#" className="p-3 rounded-lg glass hover:glass-strong transition-all duration-300 text-[#00D9FF]">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="p-3 rounded-lg glass hover:glass-strong transition-all duration-300 text-[#00D9FF]">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <GlassCard variant="glow" className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass border-[#00D9FF]/30 focus:border-[#00D9FF] text-foreground"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass border-[#00D9FF]/30 focus:border-[#00D9FF] text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-foreground">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="glass border-[#00D9FF]/30 focus:border-[#00D9FF] text-foreground"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="glass border-[#00D9FF]/30 focus:border-[#00D9FF] text-foreground resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] hover:shadow-glow transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
