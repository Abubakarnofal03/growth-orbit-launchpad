import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  ArrowUpRight,
  TrendingUp,
  Users,
  ShoppingCart,
  Globe,
  Calendar,
  Target,
  BarChart3
} from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Growth: 300% Revenue Increase",
      client: "TechGear Pro",
      industry: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      challenge: "A mid-sized e-commerce company struggling with low conversion rates and poor user experience, resulting in stagnant sales and high cart abandonment rates.",
      solution: "Implemented comprehensive UX redesign, advanced analytics tracking, personalized email marketing campaigns, and A/B tested checkout optimization.",
      results: [
        { metric: "Revenue Growth", value: "300%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Conversion Rate", value: "180%", icon: <Target className="h-5 w-5" /> },
        { metric: "Cart Abandonment", value: "-65%", icon: <ShoppingCart className="h-5 w-5" /> },
        { metric: "Customer Retention", value: "220%", icon: <Users className="h-5 w-5" /> }
      ],
      timeline: "6 months",
      tags: ["E-commerce", "UX Design", "Digital Marketing", "Analytics"],
      testimonial: "Growth Orbit transformed our business completely. The results speak for themselves - we've never seen growth like this before.",
      clientRole: "CEO, TechGear Pro"
    },
    {
      id: 2,
      title: "SaaS Platform: From Startup to Market Leader",
      client: "CloudSync Solutions",
      industry: "SaaS",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      challenge: "Early-stage SaaS startup with a great product but struggling with user acquisition, brand positioning, and scaling their marketing efforts effectively.",
      solution: "Developed comprehensive brand strategy, implemented inbound marketing funnel, created content marketing system, and built automated lead nurturing sequences.",
      results: [
        { metric: "User Acquisition", value: "450%", icon: <Users className="h-5 w-5" /> },
        { metric: "MRR Growth", value: "280%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Lead Quality", value: "190%", icon: <Target className="h-5 w-5" /> },
        { metric: "Market Share", value: "#1", icon: <BarChart3 className="h-5 w-5" /> }
      ],
      timeline: "8 months",
      tags: ["SaaS", "Brand Strategy", "Inbound Marketing", "Lead Generation"],
      testimonial: "They didn't just help us grow - they helped us become the market leader. Their strategic approach is unmatched.",
      clientRole: "Founder, CloudSync Solutions"
    },
    {
      id: 3,
      title: "Healthcare Practice: Digital Transformation",
      client: "MediCare Plus",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      challenge: "Traditional healthcare practice needing digital transformation to reach more patients, improve appointment booking, and enhance patient communication.",
      solution: "Built custom patient portal, implemented telemedicine platform, developed digital marketing strategy, and created automated appointment reminder system.",
      results: [
        { metric: "Patient Acquisition", value: "200%", icon: <Users className="h-5 w-5" /> },
        { metric: "Online Bookings", value: "350%", icon: <Calendar className="h-5 w-5" /> },
        { metric: "Patient Satisfaction", value: "95%", icon: <Target className="h-5 w-5" /> },
        { metric: "Operational Efficiency", value: "150%", icon: <TrendingUp className="h-5 w-5" /> }
      ],
      timeline: "5 months",
      tags: ["Healthcare", "Digital Transformation", "Custom Development", "Patient Portal"],
      testimonial: "The digital transformation has revolutionized how we serve our patients. We're now more efficient and accessible than ever.",
      clientRole: "Director, MediCare Plus"
    },
    {
      id: 4,
      title: "Restaurant Chain: Omnichannel Success",
      client: "Flavor Junction",
      industry: "Food & Beverage",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      challenge: "Regional restaurant chain wanted to expand nationally but lacked unified branding, online ordering system, and cohesive marketing strategy across locations.",
      solution: "Unified brand identity, built custom online ordering platform, implemented franchise marketing system, and launched coordinated social media campaigns.",
      results: [
        { metric: "Location Expansion", value: "400%", icon: <Globe className="h-5 w-5" /> },
        { metric: "Online Orders", value: "500%", icon: <ShoppingCart className="h-5 w-5" /> },
        { metric: "Brand Recognition", value: "250%", icon: <Target className="h-5 w-5" /> },
        { metric: "Average Order Value", value: "180%", icon: <TrendingUp className="h-5 w-5" /> }
      ],
      timeline: "10 months",
      tags: ["Food & Beverage", "Brand Unification", "E-commerce", "Franchise Marketing"],
      testimonial: "From a regional chain to a national brand - Growth Orbit made our expansion dreams a reality.",
      clientRole: "CEO, Flavor Junction"
    },
    {
      id: 5,
      title: "FinTech Startup: Rapid Scale Success",
      client: "PayStream",
      industry: "FinTech",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      challenge: "FinTech startup with innovative payment solution needed to build trust, comply with regulations, and rapidly scale user base in competitive market.",
      solution: "Developed trust-building brand strategy, created compliance-focused content, built secure user onboarding, and implemented referral marketing system.",
      results: [
        { metric: "User Growth", value: "600%", icon: <Users className="h-5 w-5" /> },
        { metric: "Transaction Volume", value: "800%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Trust Score", value: "98%", icon: <Target className="h-5 w-5" /> },
        { metric: "Market Penetration", value: "300%", icon: <BarChart3 className="h-5 w-5" /> }
      ],
      timeline: "7 months",
      tags: ["FinTech", "Trust Building", "Compliance", "User Acquisition"],
      testimonial: "They understood the unique challenges of FinTech and helped us build trust while scaling rapidly.",
      clientRole: "CTO, PayStream"
    },
    {
      id: 6,
      title: "Manufacturing: B2B Digital Excellence",
      client: "Industrial Solutions Inc",
      industry: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
      challenge: "Traditional B2B manufacturer needed modern digital presence, lead generation system, and streamlined sales process to compete in digital marketplace.",
      solution: "Built professional B2B website, implemented CRM integration, created technical content library, and developed automated lead qualification system.",
      results: [
        { metric: "B2B Leads", value: "400%", icon: <Users className="h-5 w-5" /> },
        { metric: "Sales Cycle", value: "-50%", icon: <Target className="h-5 w-5" /> },
        { metric: "Deal Size", value: "220%", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "Market Reach", value: "350%", icon: <Globe className="h-5 w-5" /> }
      ],
      timeline: "6 months",
      tags: ["B2B", "Manufacturing", "Lead Generation", "CRM Integration"],
      testimonial: "The digital transformation helped us compete with industry giants and win bigger deals.",
      clientRole: "Sales Director, Industrial Solutions Inc"
    }
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
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Real results from real clients. See how we've helped businesses
              achieve exceptional growth across different industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proven Results Across Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From startups to established businesses, see how our strategic approach
              delivers measurable growth and success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-strong transition-all duration-300 group">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{study.client}</p>

                  {/* Key Results Preview */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {study.results.slice(0, 4).map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-primary">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full group">
                        View Project
                        <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{study.title}</DialogTitle>
                      </DialogHeader>

                      <div className="space-y-6">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2 text-primary">The Challenge</h4>
                            <p className="text-sm text-muted-foreground mb-4">{study.challenge}</p>

                            <h4 className="font-semibold mb-2 text-primary">Our Solution</h4>
                            <p className="text-sm text-muted-foreground">{study.solution}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-4 text-primary">Results Achieved</h4>
                            <div className="grid grid-cols-2 gap-4">
                              {study.results.map((result, idx) => (
                                <div key={idx} className="text-center p-3 bg-card/50 border border-border/50 rounded-lg">
                                  <div className="text-primary mb-1">{result.icon}</div>
                                  <div className="text-xl font-bold text-primary">{result.value}</div>
                                  <div className="text-xs text-muted-foreground">{result.metric}</div>
                                </div>
                              ))}
                            </div>

                            <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border/50">
                              <p className="text-sm italic text-muted-foreground mb-2">
                                "{study.testimonial}"
                              </p>
                              <p className="text-xs text-primary font-medium">{study.clientRole}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {study.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
              </motion.div>
            ))}
        </div>
      </div>
    </section>

      {/* CTA Section */ }
  <section className="py-20 bg-gradient-primary relative overflow-hidden">
    <div className="absolute inset-0 bg-black/10" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-white max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Be Our Next Success Story?
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Let's discuss how we can help you achieve similar results for your business.
        </p>
        <Button variant="hero-secondary" size="lg" asChild>
          <a
            href="https://wa.me/+923001234567?text=Hi! I'd like to discuss my project and see how you can help me achieve similar results."
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Your Growth Journey
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
    </Layout >
  );
};

export default CaseStudies;