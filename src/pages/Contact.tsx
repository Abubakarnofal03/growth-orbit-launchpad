import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Globe,
  ArrowLeft
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    emailjs.init("oH_GTZMSMCN88APJx");
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "—",
        message: formData.message,
        to_name: "SMARB Technologies",
        reply_to: formData.email,
        page: "Contact Page"
      };

      await emailjs.send("service_29knpyq", "template_zysdni2", templateParams);

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      value: "info.smarb@gmail.com",
      action: "mailto:info.smarb@gmail.com",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      value: "+971 50 594 0132",
      action: "https://wa.me/+971505940132",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      value: "+971 50 594 0132",
      action: "tel:+971505940132",
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-brutal opacity-20" />
          <div className="absolute inset-0 scanlines pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <span className="tag-neon mb-6 inline-block">Get In Touch</span>
              <h1 className="text-massive font-display text-foreground mb-6">
                LET'S TALK
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.action}
                  target={method.action.startsWith("http") ? "_blank" : undefined}
                  rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 border-2 border-border hover:border-primary bg-card/50 transition-all duration-300 hover-brutal"
                >
                  <div className="text-primary mb-4">{method.icon}</div>
                  <h3 className="text-xl font-display mb-2">{method.title}</h3>
                  <p className="font-mono text-sm text-muted-foreground">{method.value}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24 relative">
          <div className="absolute inset-0 dots-pattern opacity-20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-display mb-8">SEND A MESSAGE</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wider">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="border-2 border-border bg-card/50 focus:border-primary rounded-none h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wider">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@company.com"
                        className="border-2 border-border bg-card/50 focus:border-primary rounded-none h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="font-mono text-xs uppercase tracking-wider">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      className="border-2 border-border bg-card/50 focus:border-primary rounded-none h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-mono text-xs uppercase tracking-wider">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="border-2 border-border bg-card/50 focus:border-primary rounded-none resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider box-neon"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Office Info */}
                <div className="p-8 border-2 border-border bg-card/50">
                  <h3 className="text-2xl font-display mb-6">OFFICE INFO</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                          Business Hours
                        </p>
                        <p className="text-foreground">Always Open</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Globe className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                          Serving
                        </p>
                        <p className="text-foreground">Pakistan & Worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guarantee */}
                <div className="p-8 border-2 border-primary bg-primary/10">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-display text-xl">24-Hour Response</h4>
                      <p className="font-mono text-sm text-muted-foreground">
                        We'll respond to your message within 24 hours, guaranteed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Back Link */}
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full border-2 border-border hover:border-primary font-mono uppercase tracking-wider"
                >
                  <a href="/">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
