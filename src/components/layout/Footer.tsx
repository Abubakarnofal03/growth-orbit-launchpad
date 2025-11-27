import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About", path: "/", section: "about" },
      { name: "Services", path: "/", section: "services" },
      { name: "Case Studies", path: "/", section: "case-studies" },
      { name: "Ventures", path: "/", section: "ventures" },
    ],
    services: [
      { name: "AI & Machine Learning", path: "/", section: "services" },
      { name: "Web Development", path: "/", section: "services" },
      { name: "Cloud Solutions", path: "/", section: "services" },
      { name: "Custom Software", path: "/", section: "services" },
    ],
    contact: [
      {
        icon: <MapPin className="h-4 w-4" />,
        text: "Pakistan",
        link: null,
      },
      {
        icon: <Mail className="h-4 w-4" />,
        text: "info.smarb@gmail.com",
        link: "mailto:info.smarb@gmail.com",
      },
      {
        icon: <Phone className="h-4 w-4" />,
        text: "+971 50 594 0132",
        link: "tel:+971505940132",
      },
    ],
  };

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/108614278/", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/growthorbit", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com/growthorbit", label: "Facebook" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-card/80" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-20 py-16 max-w-[1440px] relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="SMARB Technologies Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                SMARB
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium software engineering for startups and enterprises. 
              Built in Pakistan, trusted worldwide.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2.5 rounded-xl glass border border-white/5 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={`company-${link.name}`}>
                  <Link
                    to={link.path}
                    onClick={(e) => {
                      if (link.section && link.path === "/") {
                        e.preventDefault();
                        const element = document.getElementById(link.section);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={`services-${link.name}`}>
                  <Link
                    to={link.path}
                    onClick={(e) => {
                      if (link.section && link.path === "/") {
                        e.preventDefault();
                        const element = document.getElementById(link.section);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Contact</h3>
            <ul className="space-y-4">
              {footerLinks.contact.map((item, index) => (
                <li key={index}>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm group"
                    >
                      <span className="p-2 rounded-lg bg-muted/50 text-primary group-hover:bg-primary/20 transition-colors">
                        {item.icon}
                      </span>
                      {item.text}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 text-muted-foreground text-sm">
                      <span className="p-2 rounded-lg bg-muted/50 text-primary">
                        {item.icon}
                      </span>
                      {item.text}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} SMARB Technologies. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
