import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import { sendContactEmail, ContactFormData } from "@/lib/email";
import { useToast } from "@/components/ui/use-toast";
import { ScrollReveal, GlowCard, Magnetic } from "@/components/ui/ScrollAnimations";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await sendContactEmail(formData);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours."
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "info.smarb@gmail.com",
      href: "mailto:info.smarb@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+971 50 594 0132",
      href: "tel:+971505940132"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Pakistan",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-10 w-72 h-72 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(187 100% 50% / 0.3) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 lg:px-20 max-w-[1440px] w-full relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="slide-up" className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            <Sparkles className="inline h-4 w-4 mr-2" />
            Get In Touch
          </span>
          <h2 className="text-display font-bold mb-6 text-foreground">
            Let's Build Something{" "}
            <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss your project.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <ScrollReveal animation="slide-left">
            <GlowCard glowColor="cyan" className="glass rounded-2xl p-8 border border-white/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="bg-muted/50 border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-muted/50 border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="bg-muted/50 border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="bg-muted/50 border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>

                <Magnetic strength={0.1}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl shadow-glow-cyan hover:opacity-90 transition-all duration-300 group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </Magnetic>
              </form>
            </GlowCard>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal animation="slide-right" className="space-y-6">
            {/* Contact cards */}
            <GlowCard glowColor="violet" className="glass rounded-2xl p-8 border border-white/5">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    {item.href ? (
                      <a href={item.href} className="flex items-start gap-4 cursor-pointer">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {item.label}
                          </p>
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{item.label}</p>
                          <p className="text-muted-foreground">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </GlowCard>

            {/* Response guarantee card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 border border-primary/20">
                {/* Animated gradient background */}
                <motion.div
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: "linear-gradient(90deg, transparent, hsl(187 100% 50% / 0.3), transparent)",
                    backgroundSize: "200% 100%"
                  }}
                />
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-emerald/20">
                    <CheckCircle className="h-6 w-6 text-brand-emerald" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground mb-2">
                      24-Hour Response Guarantee
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We'll respond to your message within 24 hours, guaranteed. 
                      Our team is available around the clock to support your technology needs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick action */}
            <motion.a
              href="https://wa.me/971505940132?text=Hi%20SMARB%2C%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-between p-6 rounded-2xl glass border border-white/5 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-brand-emerald/20 text-brand-emerald">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Prefer WhatsApp?</p>
                  <p className="text-sm text-muted-foreground">Chat with us directly</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
