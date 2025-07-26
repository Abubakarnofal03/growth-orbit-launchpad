import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Case Studies", path: "/case-studies" },
      { name: "Pricing", path: "/pricing" },
    ],
    services: [
      { name: "Digital Marketing", path: "/services#marketing" },
      { name: "Brand Strategy", path: "/services#branding" },
      { name: "Business Development", path: "/services#business" },
      { name: "Web & Software", path: "/services#development" },
    ],
    contact: [
      {
        icon: <MapPin className="h-4 w-4" />,
        text: "Lahore, Pakistan",
      },
      {
        icon: <Mail className="h-4 w-4" />,
        text: "hello@growthorbit.com",
        link: "mailto:hello@growthorbit.com",
      },
      {
        icon: <Phone className="h-4 w-4" />,
        text: "+92 300 123 4567",
        link: "tel:+923001234567",
      },
    ],
  };

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/company/growthorbit", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/growthorbit", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/growthorbit", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com/growthorbit", label: "Facebook" },
  ];

  const whatsappNumber = "+923001234567";
  const whatsappMessage = "Hi! I'd like to get a free audit for my business.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Growth Orbit
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fuel your growth journey with expert marketing, branding, and business development services. 
              Based in Pakistan, serving clients worldwide.
            </p>
            <Button variant="gradient" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Get Free Audit
              </a>
            </Button>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-primary">{item.icon}</span>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-muted-foreground text-sm">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Growth Orbit. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent rounded-lg"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;