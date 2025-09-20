import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.caseStudies': 'Case Studies',
    'nav.contact': 'Contact',
    'nav.contactUs': 'Contact Us',
    
    // Hero Section
    'hero.headline': 'AI-Powered Solutions & Digital Marketing for Global Businesses',
    'hero.subheadline': 'From Chatbots to Shopify Stores, we deliver scalable technology that drives ROI.',
    'hero.cta1': '🚀 Get Your Free Demo Today',
    'hero.cta2': 'View Our Portfolio',
    'hero.typewriter1': 'Leading Technology Solutions for Global Businesses',
    'hero.typewriter2': 'Innovating Digital Experiences That Scale',
    'hero.typewriter3': 'Empowering Startups and Enterprises Worldwide',
    'hero.typewriter4': 'Transforming Ideas Into Scalable Reality',
    
    // About Section
    'about.title': 'About SMARB Technologies',
    'about.description': 'SMARB Technologies is a UAE-headquartered global tech agency delivering AI solutions, software development, and ROI-driven marketing. We specialize in WhatsApp AI chatbots, RAG systems, Shopify & WordPress stores, backend systems, and full-stack web apps.',
    'about.trust': 'Serving clients in UAE, UK, USA, and beyond.',
    'about.metrics.projects': '10+ Projects Delivered',
    'about.metrics.countries': '4+ Countries Served',
    'about.metrics.trusted': 'Trusted by Businesses in UAE, UK, USA & Pakistan',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive technology solutions designed to scale your business',
    'services.ai.title': 'AI Solutions',
    'services.ai.subtitle': 'WhatsApp & Website Chatbots',
    'services.ai.description': 'RAG Systems for document automation, AI-powered business process automation',
    'services.webdev.title': 'Web & App Development',
    'services.webdev.subtitle': 'Shopify & WordPress E-commerce Stores',
    'services.webdev.description': 'Custom Backend & Database Development (Node.js, Django, Supabase, etc.), Full-Stack Web Applications',
    'services.marketing.title': 'Digital Marketing',
    'services.marketing.subtitle': 'Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads, Snapchat Ads',
    'services.marketing.description': 'SEO & Google SEO Optimization, Content Strategy & Retargeting Campaigns',
    'services.getQuote': 'Get Quote',
    'services.getFullQuote': 'Get {service} Quote',
    
    // Case Studies Section
    'caseStudies.title': 'Case Studies',
    'caseStudies.subtitle': 'Real results from real clients',
    'caseStudies.visamate.title': 'VisaMate (AI automation)',
    'caseStudies.visamate.description': 'Helped streamline visa documentation with RAG-based chatbot system.',
    'caseStudies.skillmap.title': 'SkillMap (EdTech)',
    'caseStudies.skillmap.description': 'AI-powered career mapping project to guide students & professionals.',
    'caseStudies.pdfqa.title': 'PDF_QA (AI)',
    'caseStudies.pdfqa.description': 'Created a smart QA system for document-heavy industries.',
    'caseStudies.viewMore': 'View More',
    'caseStudies.readMore': 'Read More',
    
    // CTA Section
    'cta.title': 'Ready to Automate Your Business & Scale Growth?',
    'cta.button': 'Chat With Us on WhatsApp',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to transform your business? Let\'s talk.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.headquarters': 'Headquartered in UAE | Serving clients globally',
    
    // Footer
    'footer.description': 'Leading technology solutions for global businesses. Specialized in AI, web development, and digital marketing.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',
    
    // WhatsApp Message
    'whatsapp.message': 'Hi! I\'d like to get a free audit for my business.',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.services': 'Dienstleistungen',
    'nav.caseStudies': 'Fallstudien',
    'nav.contact': 'Kontakt',
    'nav.contactUs': 'Kontakt aufnehmen',
    
    // Hero Section
    'hero.headline': 'KI-gestützte Lösungen & Digitales Marketing für globale Unternehmen',
    'hero.subheadline': 'Von Chatbots bis Shopify-Stores liefern wir skalierbare Technologie, die ROI generiert.',
    'hero.cta1': '🚀 Holen Sie sich heute Ihre kostenlose Demo',
    'hero.cta2': 'Unser Portfolio ansehen',
    'hero.typewriter1': 'Führende Technologielösungen für globale Unternehmen',
    'hero.typewriter2': 'Innovation digitaler Erfahrungen, die skalieren',
    'hero.typewriter3': 'Startups und Unternehmen weltweit stärken',
    'hero.typewriter4': 'Ideen in skalierbare Realität verwandeln',
    
    // About Section
    'about.title': 'Über SMARB Technologies',
    'about.description': 'SMARB Technologies ist eine in den VAE ansässige globale Tech-Agentur, die KI-Lösungen, Softwareentwicklung und ROI-orientiertes Marketing liefert. Wir spezialisieren uns auf WhatsApp-KI-Chatbots, RAG-Systeme, Shopify & WordPress-Stores, Backend-Systeme und Full-Stack-Webanwendungen.',
    'about.trust': 'Wir betreuen Kunden in den VAE, Großbritannien, den USA und darüber hinaus.',
    'about.metrics.projects': '10+ Projekte geliefert',
    'about.metrics.countries': '4+ Länder bedient',
    'about.metrics.trusted': 'Vertraut von Unternehmen in VAE, UK, USA & Pakistan',
    
    // Services Section
    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Umfassende Technologielösungen für Ihr Unternehmenswachstum',
    'services.ai.title': 'KI-Lösungen',
    'services.ai.subtitle': 'WhatsApp & Website Chatbots',
    'services.ai.description': 'RAG-Systeme für Dokumentenautomatisierung, KI-gestützte Geschäftsprozessautomatisierung',
    'services.webdev.title': 'Web- & App-Entwicklung',
    'services.webdev.subtitle': 'Shopify & WordPress E-Commerce Stores',
    'services.webdev.description': 'Individuelle Backend- & Datenbankentwicklung (Node.js, Django, Supabase, etc.), Full-Stack-Webanwendungen',
    'services.marketing.title': 'Digitales Marketing',
    'services.marketing.subtitle': 'Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads, Snapchat Ads',
    'services.marketing.description': 'SEO & Google SEO-Optimierung, Content-Strategie & Retargeting-Kampagnen',
    'services.getQuote': 'Angebot einholen',
    'services.getFullQuote': '{service} Angebot einholen',
    
    // Case Studies Section
    'caseStudies.title': 'Fallstudien',
    'caseStudies.subtitle': 'Echte Ergebnisse von echten Kunden',
    'caseStudies.visamate.title': 'VisaMate (KI-Automatisierung)',
    'caseStudies.visamate.description': 'Streamlining der Visa-Dokumentation mit RAG-basiertem Chatbot-System.',
    'caseStudies.skillmap.title': 'SkillMap (EdTech)',
    'caseStudies.skillmap.description': 'KI-gestütztes Karriere-Mapping-Projekt zur Führung von Studenten & Fachkräften.',
    'caseStudies.pdfqa.title': 'PDF_QA (KI)',
    'caseStudies.pdfqa.description': 'Intelligentes QA-System für dokumentenlastige Branchen erstellt.',
    'caseStudies.viewMore': 'Mehr anzeigen',
    'caseStudies.readMore': 'Weiterlesen',
    
    // CTA Section
    'cta.title': 'Bereit, Ihr Unternehmen zu automatisieren & Wachstum zu skalieren?',
    'cta.button': 'Chatten Sie mit uns auf WhatsApp',
    
    // Contact Section
    'contact.title': 'Kontaktieren Sie uns',
    'contact.subtitle': 'Bereit, Ihr Unternehmen zu transformieren? Lassen Sie uns sprechen.',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail',
    'contact.form.company': 'Unternehmen',
    'contact.form.message': 'Nachricht',
    'contact.form.send': 'Nachricht senden',
    'contact.form.sending': 'Wird gesendet...',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'E-Mail',
    'contact.headquarters': 'Hauptsitz in den VAE | Weltweite Kundenbetreuung',
    
    // Footer
    'footer.description': 'Führende Technologielösungen für globale Unternehmen. Spezialisiert auf KI, Webentwicklung und digitales Marketing.',
    'footer.services': 'Dienstleistungen',
    'footer.company': 'Unternehmen',
    'footer.legal': 'Rechtliches',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.rights': 'Alle Rechte vorbehalten.',
    
    // WhatsApp Message
    'whatsapp.message': 'Hallo! Ich hätte gerne ein kostenloses Audit für mein Unternehmen.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};