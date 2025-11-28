import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Globe, Zap, Cloud } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-[#0050A0]" />,
      title: "Custom Software",
      description: "Tailored enterprise applications"
    },
    {
      icon: <Globe className="h-10 w-10 text-[#0050A0]" />,
      title: "Web Development",
      description: "Scalable, secure, lightning-fast"
    },
    {
      icon: <Zap className="h-10 w-10 text-[#0050A0]" />,
      title: "AI & Automation",
      description: "Smarter workflows, real-time insights"
    },
    {
      icon: <Cloud className="h-10 w-10 text-[#0050A0]" />,
      title: "Cloud Solutions",
      description: "Resilient, global-ready infrastructure"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white w-full">
      <div className="container mx-auto px-6 lg:px-20 max-w-[1440px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#111827]">
            Our Services
          </h2>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions to transform your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 rounded-xl border border-[rgba(0,0,0,0.06)] h-full group cursor-pointer">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 flex justify-center"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-[#111827] group-hover:text-[#0050A0] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-1 bg-[#0050A0] mx-auto rounded-full" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
