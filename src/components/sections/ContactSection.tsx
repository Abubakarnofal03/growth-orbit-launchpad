import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { sendContactEmail, ContactFormData } from "@/lib/email";
import { useToast } from "@/components/ui/use-toast";

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

  return (
    <section id="contact" className="py-20 bg-white w-full">
      <div className="container mx-auto px-6 lg:px-20 max-w-[1440px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#111827]">
            Let's build something that lasts.
          </h2>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            Get in touch with us to discuss your project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border border-[rgba(0,0,0,0.06)] rounded-xl hover:shadow-xl transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="name" className="text-[#111827]">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="rounded-xl border-[rgba(0,0,0,0.06)] focus:border-[#0050A0] focus:ring-2 focus:ring-[#0050A0]/20 transition-all"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="email" className="text-[#111827]">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="rounded-xl border-[rgba(0,0,0,0.06)] focus:border-[#0050A0] focus:ring-2 focus:ring-[#0050A0]/20 transition-all"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <Label htmlFor="company" className="text-[#111827]">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="rounded-xl border-[rgba(0,0,0,0.06)] focus:border-[#0050A0] focus:ring-2 focus:ring-[#0050A0]/20 transition-all"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <Label htmlFor="message" className="text-[#111827]">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="rounded-xl border-[rgba(0,0,0,0.06)] focus:border-[#0050A0] focus:ring-2 focus:ring-[#0050A0]/20 transition-all"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#0078D7] hover:bg-[#0066B8] text-white rounded-xl hover:shadow-xl hover:shadow-[#0078D7]/30 transition-all duration-300 group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="p-8 border border-[rgba(0,0,0,0.06)] rounded-xl hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-[#111827]">Contact Information</h3>
              <div className="space-y-6">
                <motion.a
                  href="mailto:info.smarb@gmail.com"
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="text-[#0050A0] mt-1 group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-[#111827] group-hover:text-[#0050A0] transition-colors">Email</p>
                    <p className="text-[#6B7280] group-hover:text-[#0050A0] transition-colors">info.smarb@gmail.com</p>
                  </div>
                </motion.a>
                <motion.a
                  href="tel:+971505940132"
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="text-[#0050A0] mt-1 group-hover:scale-110 transition-transform">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-[#111827] group-hover:text-[#0050A0] transition-colors">Phone</p>
                    <p className="text-[#6B7280] group-hover:text-[#0050A0] transition-colors">+971 50 594 0132</p>
                  </div>
                </motion.a>
                <motion.div
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-start space-x-4"
                >
                  <div className="text-[#0050A0] mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-[#111827]">Address</p>
                    <p className="text-[#6B7280]">Pakistan</p>
                  </div>
                </motion.div>
              </div>
            </Card>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 bg-gradient-to-br from-[#002B5B] to-[#0050A0] text-white rounded-xl shadow-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="h-8 w-8 flex-shrink-0" />
                  <h4 className="font-semibold text-lg">24-Hour Response Guarantee</h4>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
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
