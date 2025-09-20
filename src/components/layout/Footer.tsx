import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLinks = {
    company: [
      { name: t('nav.about'), path: "/", section: "about" },
      { name: t('nav.services'), path: "/", section: "services" },
      { name: t('nav.caseStudies'), path: "/", section: "case-studies" },
    ],
    services: [
      { name: "Digital Marketing", path: "/", section: "services" },
      { name: "Brand Strategy", path: "/", section: "services" },
      { name: "Business Development", path: "/", section: "services" },
      { name: "Web & Software", path: "/", section: "services" },
    ],
    contact: [
      {
        icon: <MapPin className="h-4 w-4" />,
        text: "United Arab Emirates",
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

  const whatsappNumber = "+971 50 594 0132";
  const whatsappMessage = t('whatsapp.message');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8 overflow-hidden">
          {/* Brand Section */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-foreground">
                SMARB Technologies
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <Button variant="premium" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Get Free Audit
              </a>
            </Button>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
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
            <h3 className="font-semibold text-foreground mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
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
            <h3 className="font-semibold text-foreground mb-4">{t('nav.contact')}</h3>
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
        <div className="border-t border-border pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} SMARB Technologies. {t('footer.rights')}
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="text-sm text-muted-foreground hidden sm:inline">Follow us:</span>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-200 p-2 hover:bg-accent/50 rounded-lg hover:scale-110"
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