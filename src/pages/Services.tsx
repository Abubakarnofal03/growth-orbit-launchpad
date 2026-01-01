import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Palette,
  Users,
  Code,
  BarChart,
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const Services = () => {
  const services = [
    {
      id: "ai-automation",
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "AI Automation",
      description: "24/7 intelligent agents for customer support, lead qualification, and workflow automation. Zero wait times, infinite scale.",
      features: [
        "AI-Powered Customer Support",
        "Lead Qualification Bots",
        "Workflow Automation",
        "Data Processing & Analysis",
        "Integration with Existing Systems",
        "24/7 Availability"
      ],
      deliverables: "Custom AI Agents, Integration",
      estTime: "4-8 weeks",
      timeline: "4-8 weeks"
    },
    {
      id: "custom-software",
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "Custom Software",
      description: "Bespoke applications tailored to your unique business requirements and workflows.",
      features: [
        "Custom Web Applications",
        "Enterprise Software",
        "API Development",
        "Database Design",
        "Cloud Deployment",
        "Ongoing Maintenance"
      ],
      deliverables: "Full Application, Source Code",
      estTime: "8-16 weeks",
      timeline: "8-16 weeks"
    },
    {
      id: "crm-development",
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "CRM Development",
      description: "Custom CRM solutions that streamline sales, marketing, and customer relationships.",
      features: [
        "Custom CRM Design",
        "Sales Pipeline Management",
        "Customer Data Management",
        "Automation & Workflows",
        "Reporting & Analytics",
        "Third-party Integrations"
      ],
      deliverables: "Custom CRM, Training",
      estTime: "6-12 weeks",
      timeline: "6-12 weeks"
    },
    {
      id: "ecommerce-stores",
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "E-commerce Stores",
      description: "High-converting online stores built for scale. Secure payments, seamless checkout.",
      features: [
        "Custom Store Design",
        "Payment Integration",
        "Inventory Management",
        "Mobile Optimization",
        "SEO & Marketing Setup",
        "Analytics & Tracking"
      ],
      deliverables: "Full E-commerce Store",
      estTime: "4-8 weeks",
      timeline: "4-8 weeks"
    },
    {
      id: "data-analytics",
      icon: <BarChart className="h-12 w-12 text-primary" />,
      title: "Data & Analytics",
      description: "Real-time dashboards and insights powered by AI for informed decision making.",
      features: [
        "Data Pipeline Setup",
        "Real-time Dashboards",
        "Predictive Analytics",
        "Custom Reports",
        "Data Visualization",
        "AI-Powered Insights"
      ],
      deliverables: "Analytics Platform, Reports",
      estTime: "4-8 weeks",
      timeline: "4-8 weeks"
    },
    {
      id: "wordpress-development",
      icon: <Palette className="h-12 w-12 text-primary" />,
      title: "WordPress Development",
      description: "Custom WordPress sites, themes, and plugins. Easy to manage, SEO-friendly.",
      features: [
        "Custom Theme Development",
        "Plugin Development",
        "Performance Optimization",
        "SEO Setup",
        "Content Migration",
        "Ongoing Support"
      ],
      deliverables: "WordPress Site, Theme",
      estTime: "3-6 weeks",
      timeline: "3-6 weeks"
    }
  ];

  const additionalServices = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Conversion Optimization",
      description: "Optimize your funnels and increase conversion rates"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "API Development",
      description: "Custom API integrations and development"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Augmentation",
      description: "Skilled developers to extend your team"
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Analytics Setup",
      description: "Advanced tracking and reporting infrastructure"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Speed and performance improvements"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "User-centered design and prototyping"
    }
  ];

  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    setWhatsappUrl(getWhatsAppUrl(WHATSAPP_NUMBER, "Hi! I'd like to learn more about your services."));
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Comprehensive solutions to fuel your growth journey and transform your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Core Services</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Everything You Need to Grow
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              From marketing and branding to development and business strategy,
              we provide end-to-end solutions for your growth needs.
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/services/${service.id}`}>
                  <Card className="p-6 sm:p-8 md:p-12 hover:shadow-strong transition-all duration-300 group cursor-pointer h-full">
                    <div className="mb-6 inline-block p-4 rounded-xl bg-primary/5 text-primary group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>

                    <h3 className="text-2xl font-bold mb-4 font-heading group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border/50">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Deliverables</div>
                        <div className="font-semibold text-sm">{service.deliverables}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                        <div className="font-semibold text-sm">{service.estTime}</div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between items-center text-primary font-medium">
                      <span>Explore Process</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Additional Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Specialized Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Targeted services to address specific business needs and challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
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
            <Button variant="premium" size="lg" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Get Custom Quote
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;