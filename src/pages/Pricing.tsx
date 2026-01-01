import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, Star, Zap, Crown, ArrowRight } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter Growth",
      description: "Perfect for small businesses ready to scale",
      icon: <Zap className="h-6 w-6" />,
      monthlyPrice: 2499,
      yearlyPrice: 24990, // 2 months free
      popular: false,
      features: [
        "Digital Marketing Strategy",
        "Social Media Management (3 platforms)",
        "Basic SEO Optimization",
        "Monthly Performance Reports",
        "Email Marketing Setup",
        "Landing Page Optimization",
        "WhatsApp Support",
        "2 Revision Rounds per Month"
      ],
      limitations: [
        "Up to 10,000 monthly visitors",
        "3 social media platforms",
        "Basic analytics tracking"
      ],
      cta: "Start Growing",
      deliveryTime: "Setup in 5-7 days"
    },
    {
      name: "Business Accelerator",
      description: "Comprehensive growth solutions for established businesses",
      icon: <Star className="h-6 w-6" />,
      monthlyPrice: 4999,
      yearlyPrice: 49990, // 2 months free
      popular: true,
      features: [
        "Everything in Starter Growth",
        "Advanced SEO & Content Strategy",
        "PPC Campaign Management",
        "Brand Development & Guidelines",
        "Custom Website/Landing Pages",
        "Advanced Analytics & Tracking",
        "Lead Generation System",
        "CRM Integration & Setup",
        "Video Content Creation",
        "Weekly Strategy Calls",
        "Priority Support",
        "Unlimited Revisions"
      ],
      limitations: [
        "Up to 50,000 monthly visitors",
        "5 social media platforms",
        "Advanced analytics included"
      ],
      cta: "Accelerate Growth",
      deliveryTime: "Setup in 3-5 days"
    },
    {
      name: "Enterprise Domination",
      description: "Full-scale growth infrastructure for market leaders",
      icon: <Crown className="h-6 w-6" />,
      monthlyPrice: 9999,
      yearlyPrice: 99990, // 2 months free
      popular: false,
      features: [
        "Everything in Business Accelerator",
        "Custom Software Development",
        "Advanced Marketing Automation",
        "Multi-channel Attribution",
        "Custom Integrations & APIs",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "International Market Expansion",
        "Advanced Business Intelligence",
        "Custom Training & Workshops",
        "Quarterly Strategy Reviews",
        "White-label Solutions"
      ],
      limitations: [
        "Unlimited traffic",
        "All platforms included",
        "Custom enterprise features"
      ],
      cta: "Dominate Market",
      deliveryTime: "Setup in 1-3 days"
    }
  ];

  const addOns = [
    {
      name: "Additional Website",
      price: 1999,
      description: "Custom website or landing page design & development"
    },
    {
      name: "Mobile App Development",
      price: 15000,
      description: "Native iOS/Android app or Progressive Web App"
    },
    {
      name: "E-commerce Setup",
      price: 3999,
      description: "Complete online store with payment gateway integration"
    },
    {
      name: "Advanced Analytics",
      price: 999,
      description: "Custom dashboards and advanced tracking setup"
    },
    {
      name: "Video Production",
      price: 2499,
      description: "Professional video content for marketing campaigns"
    },
    {
      name: "International SEO",
      price: 1999,
      description: "Multi-language and geo-targeted SEO optimization"
    }
  ];

  const [whatsappUrls, setWhatsappUrls] = useState<Record<string, string>>({});

  useEffect(() => {
    const urls: Record<string, string> = {};
    plans.forEach(plan => {
      urls[plan.name] = getWhatsAppUrl(WHATSAPP_NUMBER, `Hi! I'm interested in the ${plan.name} plan. Can you provide more details?`);
    });
    urls['custom'] = getWhatsAppUrl(WHATSAPP_NUMBER, "Hi! I'd like to discuss a custom pricing plan for my business.");
    urls['audit'] = getWhatsAppUrl(WHATSAPP_NUMBER, "Hi! I'd like to get a free audit to understand which plan is best for me.");
    setWhatsappUrls(urls);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const calculateSavings = (monthly: number, yearly: number) => {
    const monthlyCost = monthly * 12;
    const savings = monthlyCost - yearly;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return { amount: savings, percentage };
  };

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
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-6 sm:mb-8">
              Choose the perfect plan to fuel your growth journey. 
              All plans include our growth guarantee.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full p-2 inline-flex">
              <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-white' : 'text-white/60'}`}>
                Monthly
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-white data-[state=unchecked]:bg-white/20"
              />
              <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-white' : 'text-white/60'}`}>
                Yearly
                <Badge variant="secondary" className="ml-2 bg-white text-primary">
                  Save 17%
                </Badge>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => {
              const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
              const displayPrice = isYearly ? price / 12 : price;
              const savings = calculateSavings(plan.monthlyPrice, plan.yearlyPrice);
              
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${plan.popular ? 'lg:-mt-8' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-primary text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <Card className={`h-full relative overflow-hidden transition-all duration-300 hover:shadow-strong ${
                    plan.popular 
                      ? 'border-2 border-primary shadow-medium scale-105' 
                      : 'border hover:border-primary/50'
                  }`}>
                    {plan.popular && (
                      <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16">
                        <div className="absolute transform rotate-45 bg-gradient-primary text-white text-xs font-semibold py-1 left-[-35px] top-[32px] w-[170px] text-center">
                          Best Value
                        </div>
                      </div>
                    )}
                    
                    <div className="p-8">
                      {/* Plan Header */}
                      <div className="text-center mb-8">
                        <div className={`inline-flex p-3 rounded-full mb-4 ${
                          plan.popular ? 'bg-gradient-primary text-white' : 'bg-primary/10 text-primary'
                        }`}>
                          {plan.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-muted-foreground text-sm">{plan.description}</p>
                      </div>

                      {/* Pricing */}
                      <div className="text-center mb-8">
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl font-bold text-primary">
                            {formatPrice(displayPrice)}
                          </span>
                          <span className="text-muted-foreground ml-1">
                            /month
                          </span>
                        </div>
                        {isYearly && (
                          <div className="mt-2">
                            <span className="text-sm text-muted-foreground line-through">
                              {formatPrice(plan.monthlyPrice)}/month
                            </span>
                            <Badge variant="secondary" className="ml-2 text-xs">
                              Save {formatPrice(savings.amount)}
                            </Badge>
                          </div>
                        )}
                        <p className="text-xs text-muted-foreground mt-2">
                          {plan.deliveryTime}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-4 mb-8">
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                          What's Included
                        </h4>
                        <ul className="space-y-3">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <Button
                        variant={plan.popular ? "premium" : "premium-outline"}
                        className="w-full"
                        asChild
                      >
                        <a
                          href={whatsappUrls[plan.name] || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {plan.cta}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Add-ons</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enhance Your Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extend your growth capabilities with our specialized add-on services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-medium transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {addon.name}
                    </h3>
                    <Badge variant="outline" className="text-primary border-primary">
                      {formatPrice(addon.price)}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every business is unique. If our standard plans don't fit your needs, 
              let's create a custom growth strategy tailored specifically for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="lg" asChild>
                <a
                  href={whatsappUrls['custom'] || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Custom Quote
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href={whatsappUrls['audit'] || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Free Audit
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;