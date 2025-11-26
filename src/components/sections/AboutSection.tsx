import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target, Users, Globe, Award, TrendingUp, Zap } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";

const AboutSection = () => {
  const stats = [
    { number: "10+", label: "Projects", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "5+", label: "Years Experience", icon: <Zap className="h-6 w-6" /> },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-[#0050A0]" />,
      title: "Innovation",
      description: "Cutting-edge solutions that drive real results"
    },
    {
      icon: <Users className="h-8 w-8 text-[#0050A0]" />,
      title: "Results",
      description: "Measurable outcomes for every project"
    },
    {
      icon: <Globe className="h-8 w-8 text-[#0050A0]" />,
      title: "Global",
      description: "Serving clients worldwide from Pakistan"
    },
    {
      icon: <Award className="h-8 w-8 text-[#0050A0]" />,
      title: "Quality",
      description: "ISO-standard delivery process"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#F8FAFC] w-full">
      <div className="container mx-auto px-6 lg:px-20 max-w-[1440px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#111827]">
            About Us
          </h2>
          <div className="max-w-3xl mx-auto">
            <TextReveal className="text-lg sm:text-xl md:text-2xl text-[#6B7280] leading-relaxed font-medium text-center justify-center">
              Smarb Technologies is a Pakistan-based software agency helping enterprises modernize, automate, and innovate. We deliver quality engineering, reliable communication, and measurable results.
            </TextReveal>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-8 mb-20 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-3 text-[#0050A0]">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-[#002B5B] mb-2">
                {stat.number}
              </div>
              <div className="text-[#6B7280] font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Mission & Values */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#111827]">
              Driving Digital Innovation
            </h3>
            <TextReveal className="text-lg text-[#6B7280] leading-relaxed mb-6">
              Our mission is to empower businesses worldwide through cutting-edge technology solutions, AI innovation, and strategic digital transformation. We believe every organization deserves access to world-class technology expertise.
            </TextReveal>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Headquartered in Pakistan, we combine regional expertise with global technology standards 
              to deliver solutions that drive real business impact. Our team is passionate about helping 
              enterprises thrive in the digital age.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 rounded-xl border border-[rgba(0,0,0,0.06)] h-full">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 flex justify-center"
                  >
                    {value.icon}
                  </motion.div>
                  <h4 className="font-semibold mb-2 text-[#111827]">{value.title}</h4>
                  <p className="text-sm text-[#6B7280]">{value.description}</p>
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