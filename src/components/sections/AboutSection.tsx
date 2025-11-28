import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target, Users, Globe, Award, TrendingUp, Zap } from "lucide-react";
import { useTextReveal } from "@/hooks/use-text-reveal";

const AboutSection = () => {
  const aboutDescription = "Smarb Technologies is a Pakistan-based software agency helping enterprises modernize, automate, and innovate. We deliver quality engineering, reliable communication, and measurable results.";
  const missionDescription = "Our mission is to empower businesses worldwide through cutting-edge technology solutions, AI innovation, and strategic digital transformation. We believe every organization deserves access to world-class technology expertise.";
  const visionDescription = "Headquartered in Pakistan, we combine regional expertise with global technology standards to deliver solutions that drive real business impact. Our team is passionate about helping enterprises thrive in the digital age.";

  const { ref: aboutRef, displayedText: aboutText, inView: aboutInView } = useTextReveal(aboutDescription, 15);
  const { ref: missionRef, displayedText: missionText, inView: missionInView } = useTextReveal(missionDescription, 12);
  const { ref: visionRef, displayedText: visionText, inView: visionInView } = useTextReveal(visionDescription, 12);

  const stats = [
    { number: "10+", label: "Projects", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "5+", label: "Years Experience", icon: <Zap className="h-6 w-6" /> },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description: "Cutting-edge solutions that drive real results"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Results",
      description: "Measurable outcomes for every project"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global",
      description: "Serving clients worldwide from Pakistan"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality",
      description: "ISO-standard delivery process"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section id="about" className="py-32 bg-background w-full relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-20 max-w-[1440px] w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary/70 mb-4"
          >
            Who We Are
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground tracking-tight">
            About Us
          </h2>
          <div ref={aboutRef} className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed min-h-[4rem]">
              {aboutInView ? aboutText : aboutDescription}
              {aboutInView && aboutText.length < aboutDescription.length && (
                <span className="inline-block w-0.5 h-5 bg-primary/60 ml-0.5 animate-pulse" />
              )}
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-8 mb-28 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              className="text-center p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="flex justify-center mb-4 text-primary">
                {stat.icon}
              </div>
              <div className="text-5xl md:text-6xl font-bold text-foreground mb-2 tracking-tight">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium tracking-wide uppercase text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Values */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="space-y-8"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary/70"
            >
              Our Mission
            </motion.span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1]">
              Driving Digital
              <span className="block gradient-text">Innovation</span>
            </h3>
            <div ref={missionRef} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed min-h-[6rem]">
                {missionInView ? missionText : missionDescription}
                {missionInView && missionText.length < missionDescription.length && (
                  <span className="inline-block w-0.5 h-5 bg-primary/60 ml-0.5 animate-pulse" />
                )}
              </p>
            </div>
            <div ref={visionRef}>
              <p className="text-lg text-muted-foreground leading-relaxed min-h-[5rem]">
                {visionInView ? visionText : visionDescription}
                {visionInView && visionText.length < visionDescription.length && (
                  <span className="inline-block w-0.5 h-5 bg-primary/60 ml-0.5 animate-pulse" />
                )}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 gap-5"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="p-8 text-center hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 rounded-2xl border border-border/50 hover:border-primary/30 h-full bg-card/50 backdrop-blur-sm">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                    className="mb-5 flex justify-center text-primary group-hover:text-accent transition-colors duration-300"
                  >
                    {value.icon}
                  </motion.div>
                  <h4 className="font-bold text-lg mb-2 text-foreground tracking-tight">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
