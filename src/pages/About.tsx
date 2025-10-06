import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Target, Award, Linkedin, Twitter } from "lucide-react";

const About = () => {
  const stats = [
    { number: "50+", label: "Clients Worldwide" },
    { number: "3", label: "Countries Served" },
    { number: "95%", label: "Client Retention" },
    { number: "200%", label: "Avg. Growth Rate" },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that drive real business growth and ROI.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client-Centric",
      description: "Your success is our priority. We build long-term partnerships based on trust.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Reach",
      description: "Based in Pakistan, we serve clients across USA, UK, and beyond.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do.",
    },
  ];

  const team = [
    {
      name: "Ahmed Hassan",
      role: "CEO & Founder",
      bio: "10+ years in digital marketing and business development. Former consultant at McKinsey.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/ahmedhassan",
        twitter: "https://twitter.com/ahmedhassan",
      },
    },
    {
      name: "Sara Khan",
      role: "Head of Marketing",
      bio: "Expert in digital campaigns with 8+ years experience. Specialized in B2B growth strategies.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/sarakhan",
        twitter: "https://twitter.com/sarakhan",
      },
    },
    {
      name: "Mike Johnson",
      role: "Technical Director",
      bio: "Full-stack developer and tech strategist. Led development teams at multiple startups.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/mikejohnson",
        twitter: "https://twitter.com/mikejohnson",
      },
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Growth Orbit
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              We're a Pakistan-based agency helping businesses worldwide fuel their growth journey 
              through strategic marketing, branding, and development solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4">Our Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Empowering Global Growth
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our mission is to fuel the growth journey of businesses worldwide by providing 
                exceptional marketing, branding, and development services. We believe that every 
                business, regardless of size or location, deserves access to world-class growth strategies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based in the vibrant tech hub of Pakistan, we combine local expertise with global 
                standards to deliver results that matter. Our team is passionate about helping 
                businesses reach their full potential in today's competitive landscape.
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
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the Growth Experts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team brings together expertise from different backgrounds and cultures, 
              united by a common goal: your success.
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
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
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
    </Layout>
  );
};

export default About;