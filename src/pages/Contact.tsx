import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  Globe
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // EmailJS init (public key)
  useEffect(() => {
    emailjs.init("oH_GTZMSMCN88APJx");
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Build EmailJS template params
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "—",
        budget: formData.budget || "—",
        message: formData.message,
        to_name: "SMARB Technologies",
        reply_to: formData.email,
        page: "Contact Page"
      };

      await emailjs.send(
        "service_29knpyq",
        "template_zysdni2",
        templateParams
      );

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: ""
      });
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
      description: "Get in touch via email",
      value: "info.smarb@gmail.com",
      action: "mailto:info.smarb@gmail.com",
      actionText: "Send Email"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      description: "Quick chat on WhatsApp",
      value: "+971 50 594 0132",
      action: "https://wa.me/+971505940132?text=Hi! I'd like to discuss my project with you.",
      actionText: "Chat Now"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "Speak directly with our team",
      value: "+971 50 594 0132",
      action: "tel:+971505940132",
      actionText: "Call Now"
    }
  ];

  const officeInfo = [
    // {
    //   icon: <MapPin className="h-5 w-5" />,
    //   label: "Address",
    //   value: "DHA Phase 5, Lahore, Pakistan"
    // },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Business Hours",
      value: "Always Open"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      label: "Serving",
      value: "Pakistan & Worldwide"
    }
  ];

  const budgetRanges = [
    "Less than $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "More than $100,000"
  ];

  return (
    <Layout>
      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-background border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-primary transition-colors">
                Home
              </a>
              <span>/</span>
              <span className="text-foreground">Contact</span>
            </div>
            
            {/* Quick Navigation Links */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a href="/#about">About</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/#services">Services</a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/#case-studies">Case Studies</a>
              </Button>
            </div>
          </nav>
        </div>
      </section>

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
              Let's Start Your Growth Journey
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Ready to fuel your business growth? Get in touch and let's discuss 
              how we can help you achieve your goals.
            </p>
            
            {/* Navigation Back to Home */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <Button variant="hero-secondary" size="lg" asChild>
                <a href="/">
                  ← Back to Home
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Choose Your Preferred Way to Connect
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              We're here to help you succeed. Reach out through any of these channels 
              and we'll respond within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 sm:p-6 text-center hover:shadow-medium transition-all duration-300 group">
                  <div className="inline-flex p-3 bg-gradient-primary rounded-full text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                  <p className="font-medium mb-4">{method.value}</p>
                  <Button variant="outline" asChild className="group-hover:border-primary group-hover:text-primary">
                    <a href={method.action} target="_blank" rel="noopener noreferrer">
                      {method.actionText}
                    </a>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-16 sm:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 sm:p-8">
                <div className="mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Send Us a Message</h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@company.com"
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Project Budget</Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:outline-none"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your project, goals, and how we can help you..."
                      rows={5}
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="premium" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
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
              </Card>
            </motion.div>

            {/* Office Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Information */}
              <Card className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Our Office</h3>
                <div className="space-y-6">
                  {officeInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-primary mt-1">{info.icon}</div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <p className="text-muted-foreground text-sm">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Map Placeholder */}
              {/* <Card className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-4">Find Us</h3>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm">
                      Interactive map would be embedded here
                    </p>
                    <p className="text-muted-foreground text-sm">
                      DHA Phase 5, Lahore, Pakistan
                    </p>
                  </div>
                </div>
              </Card> */}

              {/* Quick Response Guarantee */}
              <Card className="p-6 bg-gradient-primary text-white">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">24-Hour Response Guarantee</h4>
                    <p className="text-sm text-white/90">
                      We'll respond to your message within 24 hours, guaranteed.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">Still Have Questions?</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              We're Here to Help
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Have questions about our services, pricing, or process? 
              Don't hesitate to reach out. We're always happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="lg" asChild>
                <a
                  href="https://wa.me/+971505940132?text=Hi! I have some questions about your services."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/">
                  ← Back to Home
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
      >
        {/* Back to Home Button */}
        <Button
          variant="default"
          size="lg"
          className="rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
          onClick={() => {
            window.location.href = '/';
          }}
          title="Back to Home"
        >
          🏠
        </Button>
        
        {/* Back to Top Button */}
        <Button
          variant="default"
          size="lg"
          className="rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          title="Back to Top"
        >
          ↑
        </Button>
      </motion.div>
    </Layout>
  );
};

export default Contact;
