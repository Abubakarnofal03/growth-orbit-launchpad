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
        text: "Pakistan",
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
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/smarb.technologies?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/people/SMARB-Technologies/61579102958908/", label: "Facebook" },
  ];

  const whatsappNumber = "+971 50 594 0132";
  const whatsappMessage = t('whatsapp.message');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-[#002B5B] text-white">
      <div className="container mx-auto px-6 lg:px-20 py-12 max-w-[1440px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-lg sm:text-xl font-bold text-white">
                SMARB Technologies
              </span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Proudly built in Pakistan, trusted worldwide.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
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
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
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
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-white">{item.icon}</span>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-white/80 text-sm">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/80 text-sm">
            © {currentYear} SMARB Technologies. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-all duration-200 p-2 hover:bg-white/10 rounded-lg hover:scale-110"
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