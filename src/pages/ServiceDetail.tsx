import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import {
    ArrowLeft,
    CheckCircle,
    TrendingUp,
    Palette,
    Users,
    Code,
    ArrowRight
} from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const ServiceDetail = () => {
    const { id } = useParams();

    const services = {
        marketing: {
            title: "Digital Marketing",
            subtitle: "Data-Driven Growth Strategies",
            description: "We don't just run ads; we build comprehensive ecosystems that nurture leads from awareness to conversion. Our data-first approach ensures every dollar spent contributes to your bottom line.",
            icon: <TrendingUp className="h-12 w-12 text-primary" />,
            timeline: [
                {
                    step: "01",
                    title: "Market Deep Dive",
                    description: "We analyze your competitors, audience demographics, and current brand positioning to identify untapped opportunities.",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                },
                {
                    step: "02",
                    title: "Strategy Formulation",
                    description: "Developing a multi-channel roadmap that aligns with your business goals, integrating SEO, PPC, and content strategies.",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                },
                {
                    step: "03",
                    title: "Campaign Execution",
                    description: "Launching targeted campaigns with precision targeting and compelling creatives that speak directly to your audience's pain points.",
                    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
                },
                {
                    step: "04",
                    title: "Optimization & Scaling",
                    description: "Continuous A/B testing and performance monitoring to refine ROI and scale winning strategies aggressively.",
                    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                }
            ]
        },
        branding: {
            title: "Brand Strategy & Design",
            subtitle: "Building Memorable Identities",
            description: "Your brand is more than a logo. It's the story you tell and the feeling you evoke. We craft cohesive brand identities that resonate deeply with your target market.",
            icon: <Palette className="h-12 w-12 text-primary" />,
            timeline: [
                {
                    step: "01",
                    title: "Brand Discovery",
                    description: "Understanding your core values, mission, and unique selling proposition to build a solid foundation.",
                    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&h=600&fit=crop"
                },
                {
                    step: "02",
                    title: "Visual Identity Design",
                    description: "Crafting logos, color palettes, and typography that visually communicate your brand's essence.",
                    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
                },
                {
                    step: "03",
                    title: "Tone & Messaging",
                    description: "Defining your brand voice to ensure consistent and impactful communication across all channels.",
                    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&h=600&fit=crop"
                },
                {
                    step: "04",
                    title: "Brand Guidelines",
                    description: "Delivering a comprehensive brand book to ensure your identity remains consistent as you grow.",
                    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop"
                }
            ]
        },
        business: {
            title: "Business Development",
            subtitle: "Scaling Operations & Revenue",
            description: "We provide the strategic framework and operational insights needed to take your business to the next level, optimizing processes for maximum efficiency and growth.",
            icon: <Users className="h-12 w-12 text-primary" />,
            timeline: [
                {
                    step: "01",
                    title: "Operational Audit",
                    description: "Assessing your current workflows and systems to identify bottlenecks and inefficiencies.",
                    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                },
                {
                    step: "02",
                    title: "Growth Strategy",
                    description: "Identifying new market opportunities and revenue streams to diversify and strengthen your business.",
                    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                },
                {
                    step: "03",
                    title: "Process Implementation",
                    description: "Deploying scalable systems and tools that streamline operations and improve team productivity.",
                    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
                },
                {
                    step: "04",
                    title: "Performance Review",
                    description: "Regular check-ins and KPI tracking to ensure sustainable growth and adaptability.",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                }
            ]
        },
        development: {
            title: "Web & Software Development",
            subtitle: "Engineering Digital Excellence",
            description: "From stunning websites to complex enterprise software, we build robust, scalable, and user-centric digital solutions that power your business operations.",
            icon: <Code className="h-12 w-12 text-primary" />,
            timeline: [
                {
                    step: "01",
                    title: "Requirement Gathering",
                    description: "Detailed consultation to understand your technical needs, user flows, and functional requirements.",
                    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop"
                },
                {
                    step: "02",
                    title: "UI/UX Design",
                    description: "Creating intuitive and engaging interfaces that deliver a seamless user experience.",
                    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
                },
                {
                    step: "03",
                    title: "Agile Development",
                    description: "Iterative coding sprints with regular updates, ensuring flexibility and rapid delivery of features.",
                    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
                },
                {
                    step: "04",
                    title: "Deployment & Support",
                    description: "Seamless launch procedures followed by ongoing maintenance and technical support.",
                    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=600&fit=crop"
                }
            ]
        },
        "ai-automation": {
            title: "AI Automation",
            subtitle: "Intelligent Workflows & Agents",
            description: "24/7 intelligent agents for customer support, lead qualification, and workflow automation. Zero wait times, infinite scale.",
            icon: <TrendingUp className="h-12 w-12 text-primary" />,
            timeline: [
                {
                    step: "01",
                    title: "Workflow Analysis",
                    description: "We analyze your current manual processes to identify high-impact opportunities for automation.",
                    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
                },
                {
                    step: "02",
                    title: "Agent Configuration",
                    description: "Design and train AI agents to handle specific tasks with human-like accuracy.",
                    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=600&fit=crop"
                },
                {
                    step: "03",
                    title: "Integration",
                    description: "Seamlessly connect AI agents with your CRM, email, and other business tools.",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                },
                {
                    step: "04",
                    title: "Optimization",
                    description: "Continuous monitoring and refining of agent performance to maximize efficiency.",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                }
            ]
        },
        "custom-software": {
            title: "Custom Software",
            subtitle: "Tailored Solutions for Your Business",
            description: "Bespoke applications tailored to your unique business requirements and workflows, ensuring maximum efficiency and competitive advantage.",
            icon: <Code className="h-12 w-12 text-primary" />,
            timeline: [
                {
                    step: "01",
                    title: "Requirement Gathering",
                    description: "Deep dive into your business needs to define the scope and specifications of your custom software.",
                    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop"
                },
                {
                    step: "02",
                    title: "Architecture Design",
                    description: "Designing a scalable and secure software architecture that grows with your business.",
                    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=600&fit=crop"
                },
                {
                    step: "03",
                    title: "Development",
                    description: "Writing clean, maintainable code using the latest technologies and best practices.",
                    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
                },
                {
                    step: "04",
                    title: "Testing & Deployment",
                    description: "Rigorous testing to ensure bug-free delivery, followed by smooth deployment and training.",
                    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop"
                }
            ]
        },
        "crm-development": {
            title: "CRM Development",
            subtitle: "Streamline Sales & Relationships",
            description: "Custom CRM solutions that streamline sales, marketing, and customer relationships, giving you a 360-degree view of your business.",
            icon: <Users className="h-12 w-12 text-primary" />,
            timeline: [
                {
                    step: "01",
                    title: "Sales Process Audit",
                    description: "Analyzing your sales pipeline to identify gaps and opportunities for optimization.",
                    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
                },
                {
                    step: "02",
                    title: "Customization",
                    description: "Tailoring the CRM data model and interface to match your specific workflows.",
                    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
                },
                {
                    step: "03",
                    title: "Automation Setup",
                    description: "Automating repetitive tasks like follow-ups and data entry to save team time.",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                },
                {
                    step: "04",
                    title: "Onboarding",
                    description: "Training your team to effectively use the new system for maximum adoption.",
                    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                }
            ]
        },
        "ecommerce-stores": {
            title: "E-commerce Stores",
            subtitle: "High-Converting Online Shops",
            description: "High-converting online stores built for scale and optimized for revenue. secure payments, and seamless checkout experiences.",
            icon: <CheckCircle className="h-12 w-12 text-primary" />,
            timeline: [
                {
                    step: "01",
                    title: "Store Strategy",
                    description: "Planning your catalog structure, pricing, and customer journey for maximum conversions.",
                    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                },
                {
                    step: "02",
                    title: "Design & Build",
                    description: "Creating a stunning, mobile-responsive storefront that showcases your products.",
                    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=600&fit=crop"
                },
                {
                    step: "03",
                    title: "Payment & Shipping",
                    description: "Integrating secure payment gateways and automated shipping calculations.",
                    image: "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?w=800&h=600&fit=crop"
                },
                {
                    step: "04",
                    title: "Launch Marketing",
                    description: "Setting up initial SEO and marketing tags to drive traffic from day one.",
                    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=600&fit=crop"
                }
            ]
        },
        "wordpress-development": {
            title: "WordPress Development",
            subtitle: "Flexible Content Management",
            description: "Custom WordPress sites, themes, and plugins for any business need. Easy to manage, SEO-friendly, and infinitely extensible.",
            icon: <Palette className="h-12 w-12 text-primary" />,
            timeline: [
                {
                    step: "01",
                    title: "Site Architecture",
                    description: "Planning content types and taxonomy to ensure an organized and scalable site.",
                    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                },
                {
                    step: "02",
                    title: "Theme Development",
                    description: "Building a custom, lightweight theme that perfectly matches your brand design.",
                    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop"
                },
                {
                    step: "03",
                    title: "Plugin Integration",
                    description: "Selecting and configuring the right plugins for functionality without bloating the site.",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                },
                {
                    step: "04",
                    title: "Speed Optimization",
                    description: "Caching and asset optimization to ensure lightning-fast load times.",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                }
            ]
        },
        "data-analytics": {
            title: "Data & Analytics",
            subtitle: "Insights Driven Decisions",
            description: "Real-time dashboards and insights powered by AI to help you make informed business decisions.",
            icon: <TrendingUp className="h-12 w-12 text-primary" />,
            timeline: [
                {
                    step: "01",
                    title: "Data Audit",
                    description: "Identifying your key data sources and metrics that matter most to your business.",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                },
                {
                    step: "02",
                    title: "Pipeline Setup",
                    description: "Building robust data pipelines to collect and clean data from various sources.",
                    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                },
                {
                    step: "03",
                    title: "Dashboard Creation",
                    description: "Visualizing data in intuitive, real-time dashboards for easy monitoring.",
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                },
                {
                    step: "04",
                    title: "Predictive Analytics",
                    description: "Applying AI models to forecast trends and opportunities.",
                    image: "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?w=800&h=600&fit=crop"
                }
            ]
        }
    };

    const service = services[id as keyof typeof services];
    const [whatsappUrl, setWhatsappUrl] = useState("");

    useEffect(() => {
        setWhatsappUrl(getWhatsAppUrl(WHATSAPP_NUMBER, "Hi! I'm interested in your services."));
    }, []);

    if (!service) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
                        <Button asChild>
                            <Link to="/services">Back to Services</Link>
                        </Button>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Button variant="hero-secondary" size="sm" asChild className="mb-8">
                            <Link to="/#services">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                            </Link>
                        </Button>
                        <div className="flex justify-center mb-6">
                            <div className="p-4 bg-white/10 backdrop-blur-md rounded-full">
                                {service.icon}
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light">
                            {service.subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Description Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-card relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <Badge variant="secondary" className="mb-4">Our Process</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold">How We Deliver Results</h2>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

                        {service.timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 mb-20 last:mb-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary z-10 hidden md:block" />

                                {/* Content Side */}
                                <div className="flex-1 md:w-1/2 md:text-right">
                                    <div className={`flex flex-col ${index % 2 === 0 ? "md:items-start md:text-left" : "md:items-end md:text-right"}`}>
                                        <span className="text-6xl font-bold text-muted-foreground/10 mb-4">{item.step}</span>
                                        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                                            {item.description}
                                        </p>
                                        <div className={`p-2 bg-background rounded-2xl border border-border/50 shadow-sm w-full max-w-md ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-48 object-cover rounded-xl"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Side for Spacing */}
                                <div className="flex-1 md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-primary-foreground text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
                    <Button size="lg" variant="secondary" asChild className="text-primary font-bold text-lg px-8 py-6 h-auto">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                </div>
            </section>
        </Layout>
    );
};

export default ServiceDetail;
