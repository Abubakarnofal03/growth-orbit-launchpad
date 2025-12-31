import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    slug: "haya-fit-intima",
    client: "Haya Fit Intima",
    title: "50% Cost Reduction with AI Support",
    stats: [
      { value: "50%", label: "Cost Reduction" },
      { value: "24/7", label: "Uptime" },
      { value: "0", label: "Human Intervention" },
    ],
    tags: ["AI Automation", "E-commerce"],
    featured: true,
  },
  {
    slug: "decorium",
    client: "Decorium",
    title: "Complete E-commerce Transformation",
    stats: [
      { value: "3x", label: "Revenue Growth" },
      { value: "40%", label: "Faster Checkout" },
    ],
    tags: ["E-commerce", "Custom Development"],
  },
  {
    slug: "theshoppingcart",
    client: "TheShoppingCart",
    title: "Scalable Multi-vendor Platform",
    stats: [
      { value: "500+", label: "Vendors" },
      { value: "99.9%", label: "Uptime" },
    ],
    tags: ["Platform", "Scalability"],
  },
  {
    slug: "visamate",
    client: "VisaMate",
    title: "AI-Powered Visa Consultation",
    stats: [
      { value: "80%", label: "Query Resolution" },
      { value: "5min", label: "Avg Response" },
    ],
    tags: ["AI Agents", "Automation"],
  },
];

const CaseStudySection = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="case-studies" ref={ref} className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dots-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="tag-neon mb-4 inline-block">Our Work</span>
            <h2 className="text-giant font-display text-foreground">
              CASE STUDIES
            </h2>
          </div>
          <Button
            variant="outline"
            onClick={() => navigate("/case-studies")}
            className="mt-6 md:mt-0 border-2 border-foreground/20 hover:border-primary font-mono uppercase tracking-wider"
          >
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        {/* Featured Case Study */}
        {caseStudies.filter(c => c.featured).map((study) => (
          <motion.div
            key={study.slug}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => navigate(`/case-study/${study.slug}`)}
            className="group cursor-pointer mb-12 p-8 md:p-12 border-2 border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary transition-all duration-500"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {study.tags.map(tag => (
                <span key={tag} className="tag-neon">{tag}</span>
              ))}
            </div>
            
            <h3 className="text-4xl md:text-6xl font-display mb-4">{study.client}</h3>
            <p className="text-xl text-muted-foreground mb-8">{study.title}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {study.stats.map(stat => (
                <div key={stat.label}>
                  <div className="counter text-primary">{stat.value}</div>
                  <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Other Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {caseStudies.filter(c => !c.featured).map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onClick={() => navigate(`/case-study/${study.slug}`)}
              className="group cursor-pointer p-6 border-2 border-border hover:border-primary bg-card/50 transition-all duration-300 hover-brutal"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map(tag => (
                  <span key={tag} className="tag-electric text-xs">{tag}</span>
                ))}
              </div>
              
              <h3 className="text-2xl font-display mb-2">{study.client}</h3>
              <p className="text-sm text-muted-foreground mb-6">{study.title}</p>

              <div className="flex gap-6">
                {study.stats.slice(0, 2).map(stat => (
                  <div key={stat.label}>
                    <div className="text-2xl font-display text-primary">{stat.value}</div>
                    <p className="font-mono text-xs uppercase text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
