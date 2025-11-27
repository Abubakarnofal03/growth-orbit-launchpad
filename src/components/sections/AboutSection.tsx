import { motion } from "framer-motion";
import { Target, Users, Globe, Award, TrendingUp, Zap } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, Counter, TextRevealByWord, GlowCard } from "@/components/ui/ScrollAnimations";

const AboutSection = () => {
  const stats = [
    { number: 10, suffix: "+", label: "Projects Delivered", icon: <TrendingUp className="h-6 w-6" /> },
    { number: 5, suffix: "+", label: "Years Experience", icon: <Zap className="h-6 w-6" /> },
    { number: 100, suffix: "%", label: "Client Satisfaction", icon: <Award className="h-6 w-6" /> },
    { number: 24, suffix: "/7", label: "Global Support", icon: <Globe className="h-6 w-6" /> },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation First",
      description: "Cutting-edge solutions that push boundaries and drive real results"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Results Driven",
      description: "Measurable outcomes and ROI for every project we undertake"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Serving clients worldwide from our headquarters in Pakistan"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assured",
      description: "ISO-standard delivery process with rigorous quality checks"
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-20 max-w-[1440px] w-full relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="slide-up" className="text-center mb-20">
          <motion.span 
            className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6"
          >
            About Us
          </motion.span>
          <h2 className="text-display font-bold mb-8 text-foreground">
            Building the{" "}
            <span className="text-gradient">Future of Tech</span>
          </h2>
        </ScrollReveal>

        {/* Main description with word-by-word reveal */}
        <div className="max-w-4xl mx-auto mb-24">
          <TextRevealByWord 
            text="SMARB Technologies is a Pakistan-based software agency helping enterprises modernize, automate, and innovate. We combine deep technical expertise with creative problem-solving to deliver solutions that make a real impact."
            className="text-title text-center justify-center text-muted-foreground leading-relaxed"
          />
        </div>

        {/* Stats Section */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32" staggerDelay={0.1}>
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <GlowCard 
                glowColor={index % 2 === 0 ? "cyan" : "violet"}
                className="glass rounded-2xl p-8 text-center border border-white/5"
              >
                <div className="flex justify-center mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mission & Values */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal animation="slide-left">
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-secondary/10 text-secondary border border-secondary/20">
                Our Mission
              </span>
              <h3 className="text-title font-bold text-foreground">
                Driving Digital{" "}
                <span className="text-gradient">Innovation</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to empower businesses worldwide through cutting-edge technology 
                solutions, AI innovation, and strategic digital transformation. We believe every 
                organization deserves access to world-class technology expertise.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Headquartered in Pakistan, we combine regional expertise with global technology 
                standards to deliver solutions that drive real business impact.
              </p>
              
              {/* Gradient line */}
              <div className="w-24 h-1 rounded-full bg-gradient-to-r from-primary to-secondary mt-8" />
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <GlowCard 
                  glowColor={index % 3 === 0 ? "cyan" : index % 3 === 1 ? "violet" : "blue"}
                  className="glass rounded-2xl p-6 text-center border border-white/5 h-full group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mb-4 flex justify-center text-primary group-hover:text-secondary transition-colors duration-300"
                  >
                    {value.icon}
                  </motion.div>
                  <h4 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
