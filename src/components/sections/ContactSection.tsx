import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from "lucide-react";
import { sendContactEmail, ContactFormData } from "@/lib/email";
import { useToast } from "@/components/ui/use-toast";
import { useTextReveal } from "@/hooks/use-text-reveal";
import { getWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const ContactSection = () => {
  const { toast } = useToast();
  const contactDescription = "Get in touch with us to discuss your project";
  const { ref: descRef, displayedText: descText, inView: descInView } = useTextReveal(contactDescription, 25);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setWhatsappUrl(getWhatsAppUrl(WHATSAPP_NUMBER, "Hi SMARB Technologies! I'm interested in your services."));
  }, []);

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

  return (
    <section id="contact" className="py-32 bg-card w-full relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.05),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-20 max-w-[1440px] w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-primary/70 mb-4"
          >
            Get Started
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground tracking-tight">
            Let's build something
            <span className="block gradient-text">that lasts.</span>
          </h2>
          <div ref={descRef} className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed min-h-[2rem]">
              {descInView ? descText : contactDescription}
              {descInView && descText.length < contactDescription.length && (
                <span className="inline-block w-0.5 h-5 bg-primary/60 ml-0.5 animate-pulse" />
              )}
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="p-10 border border-border/50 rounded-2xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 bg-background/80 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="rounded-xl border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="rounded-xl border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground font-medium">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="rounded-xl border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="rounded-xl border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-background resize-none"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group h-14 text-base font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-3"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <Card className="p-10 border border-border/50 rounded-2xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 bg-background/80 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-8 text-foreground tracking-tight">Contact Information</h3>
              <div className="space-y-8">
                <motion.a
                  href="mailto:info.smarb@gmail.com"
                  whileHover={{ x: 8 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="text-primary mt-1 group-hover:scale-110 transition-transform p-3 bg-primary/10 rounded-xl">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Email</p>
                    <p className="text-muted-foreground group-hover:text-primary/80 transition-colors">info.smarb@gmail.com</p>
                  </div>
                </motion.a>
                <motion.a
                  href="tel:+971505940132"
                  whileHover={{ x: 8 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="text-primary mt-1 group-hover:scale-110 transition-transform p-3 bg-primary/10 rounded-xl">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Phone</p>
                    <p className="text-muted-foreground group-hover:text-primary/80 transition-colors">+971 50 594 0132</p>
                  </div>
                </motion.a>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-start space-x-4"
                >
                  <div className="text-primary mt-1 p-3 bg-primary/10 rounded-xl">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground">Pakistan</p>
                  </div>
                </motion.div>
              </div>
            </Card>

            {/* WhatsApp CTA Card */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="block"
            >
              <Card className="p-10 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-2xl shadow-2xl shadow-[#25D366]/20 relative overflow-hidden cursor-pointer">
                {/* Subtle pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
                
                <div className="flex items-center space-x-4 mb-5 relative z-10">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-xl">Chat on WhatsApp</h4>
                </div>
                <p className="text-white/90 leading-relaxed relative z-10">
                  Get instant support! Click here to start a conversation with our team on WhatsApp.
                </p>
              </Card>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-10 bg-gradient-to-br from-primary to-secondary text-primary-foreground rounded-2xl shadow-2xl shadow-primary/20 relative overflow-hidden">
                {/* Subtle pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
                
                <div className="flex items-center space-x-4 mb-5 relative z-10">
                  <div className="p-3 bg-primary-foreground/20 rounded-xl">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-xl">24-Hour Response Guarantee</h4>
                </div>
                <p className="text-primary-foreground/90 leading-relaxed relative z-10">
                  We'll respond to your message within 24 hours, guaranteed. Our team is available 24/7 to support your technology needs.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
