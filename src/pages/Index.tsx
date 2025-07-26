import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Drive growth with data-driven marketing strategies across all digital channels.",
      features: ["SEO Optimization", "Social Media", "PPC Campaigns", "Analytics"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Brand Strategy",
      description: "Build a powerful brand identity that resonates and stands out in the market.",
      features: ["Brand Identity", "Logo Design", "Guidelines", "Positioning"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Business Development",
      description: "Strategic consulting to scale operations and expand into new markets.",
      features: ["Growth Strategy", "Market Research", "Partnerships", "Sales Optimization"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web & Software",
      description: "Custom development solutions that drive efficiency and user engagement.",
      features: ["Web Development", "Mobile Apps", "API Integration", "Cloud Solutions"],
      color: "from-orange-500 to-red-600"
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Growth Success",
      client: "TechGear Pro",
      result: "300% Revenue Increase",
      description: "Transformed a struggling e-commerce business into a market leader",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      metrics: [
        { label: "Revenue Growth", value: "300%" },
        { label: "Conversion Rate", value: "180%" }
      ]
    },
    {
      title: "SaaS Platform Dominance",
      client: "CloudSync Solutions",
      result: "450% User Growth",
      description: "Helped a startup become the #1 player in their market segment",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      metrics: [
        { label: "User Growth", value: "450%" },
        { label: "Market Share", value: "#1" }
      ]
    },
    {
      title: "Healthcare Digital Transform",
      client: "MediCare Plus",
      result: "200% Patient Growth",
      description: "Modernized a traditional practice with digital solutions",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      metrics: [
        { label: "Patient Growth", value: "200%" },
        { label: "Satisfaction", value: "95%" }
      ]
    }
  ];

  const testimonials = [
    {
      content: "Growth Orbit transformed our business completely. The results speak for themselves - we've never seen growth like this before.",
      author: "Sarah Johnson",
      role: "CEO, TechGear Pro",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      content: "They didn't just help us grow - they helped us become the market leader. Their strategic approach is unmatched.",
      author: "Mike Chen",
      role: "Founder, CloudSync Solutions",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      content: "The ROI from working with Growth Orbit has been incredible. Best investment we've made for our business.",
      author: "Lisa Rodriguez",
      role: "Director, MediCare Plus",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const trustBadges = [
    { name: "Google Partner", icon: "🏆" },
    { name: "Facebook Blueprint", icon: "📘" },
    { name: "HubSpot Certified", icon: "🎯" },
    { name: "AWS Partner", icon: "☁️" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const whatsappNumber = "+923001234567";
  const whatsappMessage = "Hi! I'd like to get a free audit for my business.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
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
              <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm mb-6">
                🚀 Based in Pakistan • Serving USA, UAE & Beyond
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-7xl font-bold mb-8 leading-tight"
            >
              Fuel Your{" "}
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Growth Journey
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Transform your business with expert marketing, branding, and development services. 
              We help ambitious companies achieve exceptional growth and dominate their markets.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <Button variant="hero" size="lg" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Get Free Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="hero-secondary" size="lg" asChild>
                <a href="/case-studies">
                  View Case Studies
                </a>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            >
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <span className="text-2xl">{badge.icon}</span>
                  <span className="text-sm font-medium">{badge.name}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Everything You Need to Grow
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From marketing and branding to development and strategy, 
              we provide comprehensive solutions for your growth needs.
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
                <Card className="p-6 h-full hover:shadow-strong transition-all duration-300 group cursor-pointer">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
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
                  <Button variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Carousel */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Proven Results That Speak
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses achieve exceptional growth across different industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
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
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-brand-success text-white">
                        {study.result}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{study.client}</p>
                    <p className="text-muted-foreground mb-4">{study.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full group">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
            className="text-center mt-12"
          >
            <Button variant="gradient" size="lg" asChild>
              <a href="/case-studies">
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Client Testimonials</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Fuel Your Growth?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Join hundreds of successful businesses that have transformed their growth with our expertise.
              Get your free audit today and discover your growth potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero-secondary" size="lg" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Get Free Audit Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="hero-secondary" size="lg" asChild>
                <a href="/contact">
                  Schedule a Call
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
