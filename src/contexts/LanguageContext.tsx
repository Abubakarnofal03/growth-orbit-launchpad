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
    
    // Language Toggle
    'language.switchTo': 'Switch to',
    'language.german': 'Deutsch',
    'language.english': 'English',
    
    // Hero Section
    'hero.badge': 'Headquartered in UAE • Global Operations',
    'hero.badgeMobile': 'UAE • Global',
    'hero.headline': 'AI-Powered Solutions & Digital Marketing for Global Businesses',
    'hero.subheadline': 'From Chatbots to Shopify Stores, we deliver scalable technology that drives ROI.',
    'hero.description': 'Headquartered in UAE, we deliver cutting-edge software, AI, and business solutions that drive digital transformation and innovation across industries worldwide.',
    'hero.cta1': '🚀 Get Your Free Demo Today',
    'hero.cta2': 'View Our Portfolio',
    'hero.getInTouch': 'Get in Touch',
    'hero.viewOurWork': 'View Our Work',
    'hero.typewriter1': 'Leading Technology Solutions for Global Businesses',
    'hero.typewriter2': 'Innovating Digital Experiences That Scale',
    'hero.typewriter3': 'Empowering Startups and Enterprises Worldwide',
    'hero.typewriter4': 'Transforming Ideas Into Scalable Reality',
    
    // About Section
    'about.badge': 'About Us',
    'about.title': 'About SMARB Technologies - Your Premier AI Solutions Partner',
    'about.description': 'SMARB Technologies is a leading UAE-based technology company specializing in AI solutions, custom software development, and digital marketing automation. We deliver innovative enterprise solutions that drive digital transformation for businesses worldwide, combining cutting-edge AI technologies with proven software engineering excellence.',
    'about.trust': 'Serving clients in UAE, UK, USA, and beyond.',
    'about.metrics.projects': '10+ Projects Delivered',
    'about.metrics.countries': '4+ Countries Served',
    'about.metrics.clients': '50+ Happy Clients',
    'about.metrics.experience': '5+ Years Experience',
    'about.metrics.trusted': 'Trusted by Businesses in UAE, UK, USA & Pakistan',
    'about.mission.badge': 'Our Mission',
    'about.mission.title': 'Driving Digital Innovation',
    'about.mission.description1': 'Our mission is to empower businesses worldwide through cutting-edge technology solutions, AI innovation, and strategic digital transformation. We believe every organization deserves access to world-class technology expertise.',
    'about.mission.description2': 'Headquartered in UAE, we combine regional expertise with global technology standards to deliver solutions that drive real business impact. Our team is passionate about helping enterprises thrive in the digital age.',
    
    // Values
    'values.innovation.title': 'Innovation First',
    'values.innovation.description': 'We leverage cutting-edge technology to solve complex business challenges.',
    'values.quality.title': 'Quality Assured',
    'values.quality.description': 'We maintain the highest standards in software development and AI solutions.',
    'values.global.title': 'Global Reach',
    'values.global.description': 'Serving clients across UAE, UK, USA, and expanding worldwide.',
    'values.results.title': 'Results Driven',
    'values.results.description': 'We focus on delivering measurable business outcomes and ROI.',
    
    // Team Section
    'team.connectLinkedIn': 'Connect on LinkedIn',
    'team.arslan.role': 'Founder, Marketing & Business Development Lead',
    'team.arslan.bio1': 'Marketing strategist with client experience across UAE and USA markets, delivering measurable business growth.',
    'team.arslan.bio2': 'Successfully marketed Apple products for enterprise clients in UAE with proven sales impact and retention.',
    'team.arslan.bio3': 'Directed real estate listing campaigns for American clients, managing ads, leads, and digital growth results.',
    'team.arslan.bio4': 'Expert in Meta Ads, Google Ads, Facebook Marketplace, and TikTok advertising with conversion optimization.',
    'team.arslan.bio5': 'Focused on product marketing strategies, digital sales funnels, and lead generation techniques for scaling.',
    'team.abubakar.role': 'Co-Founder, CTO & AI Engineering Lead',
    'team.abubakar.bio1': 'Full-stack software engineer and AI specialist with strong technical expertise and broad project experience.',
    'team.abubakar.bio2': 'Developed machine learning algorithms and intelligent automation pipelines for enterprise-grade deployments.',
    'team.abubakar.bio3': 'Built advanced AI chatbots, RAG-based document search systems, and custom data-driven enterprise platforms.',
    'team.abubakar.bio4': 'Experienced across legal tech, e-commerce platforms, and enterprise solution development for global clients.',
    'team.abubakar.bio5': 'Passionate about building scalable software, cloud-driven AI systems, and innovative digital transformation.',
    
    // Services Section
    'services.badge': 'Our Services',
    'services.title': 'SMARB Technologies Enterprise Solutions - AI, Software & Digital Marketing',
    'services.subtitle': 'From custom software development and AI solutions to business automation and digital marketing, SMARB Technologies provides comprehensive technology services for modern enterprises seeking digital transformation.',
    
    // Service Items
    'services.software.title': 'Custom Software Development',
    'services.software.description': 'Enterprise-grade applications built with Django, Angular, React, and Node.js for scalable business solutions.',
    'services.software.feature1': 'Full-Stack Web Applications',
    'services.software.feature2': 'API Development & Integration',
    'services.software.feature3': 'Database Design & Optimization',
    'services.software.feature4': 'System Architecture & Design',
    'services.software.feature5': 'Performance Optimization',
    'services.software.feature6': 'Security Implementation',
    'services.software.deliverable1': 'Technical Specification Document',
    'services.software.deliverable2': 'Fully Functional Application',
    'services.software.deliverable3': 'Source Code & Documentation',
    'services.software.deliverable4': 'Deployment & Training',
    'services.software.timeline': '8-16 weeks',
    
    'services.ai.title': 'AI & Machine Learning Solutions',
    'services.ai.description': 'Intelligent solutions including NLP, RAG systems, and computer vision to automate and optimize business processes.',
    'services.ai.feature1': 'Natural Language Processing (NLP)',
    'services.ai.feature2': 'Retrieval-Augmented Generation (RAG)',
    'services.ai.feature3': 'Computer Vision & Image Recognition',
    'services.ai.feature4': 'Predictive Analytics & Modeling',
    'services.ai.feature5': 'Machine Learning Model Development',
    'services.ai.feature6': 'AI Integration & Deployment',
    'services.ai.deliverable1': 'AI Solution Architecture',
    'services.ai.deliverable2': 'Trained ML Models',
    'services.ai.deliverable3': 'Integration Documentation',
    'services.ai.deliverable4': 'Performance Reports',
    'services.ai.timeline': '6-12 weeks',
    
    'services.business.title': 'Business Development & Marketing',
    'services.business.description': 'End-to-end strategies to expand your business reach, build brand authority, and generate measurable growth through digital channels.',
    'services.business.feature1': 'Brand Positioning & Strategy',
    'services.business.feature2': 'Digital Marketing Campaigns',
    'services.business.feature3': 'SEO & Content Marketing',
    'services.business.feature4': 'Social Media Growth',
    'services.business.feature5': 'Lead Generation Funnels',
    'services.business.feature6': 'Market Research & Analytics',
    'services.business.deliverable1': 'Comprehensive Marketing Strategy',
    'services.business.deliverable2': 'Campaign Assets & Content',
    'services.business.deliverable3': 'SEO Optimization Report',
    'services.business.deliverable4': 'Growth Analytics Dashboard',
    'services.business.timeline': '3-8 weeks',
    
    'services.ecommerce.title': 'Shopify & WordPress Development',
    'services.ecommerce.description': 'Professional e-commerce solutions with custom functionality, optimization, and strategic implementation.',
    'services.ecommerce.feature1': 'Custom Shopify Development',
    'services.ecommerce.feature2': 'WordPress Customization',
    'services.ecommerce.feature3': 'E-commerce Strategy',
    'services.ecommerce.feature4': 'Performance Optimization',
    'services.ecommerce.feature5': 'Payment Integration',
    'services.ecommerce.feature6': 'Analytics & Reporting',
    'services.ecommerce.deliverable1': 'Custom E-commerce Platform',
    'services.ecommerce.deliverable2': 'Performance Optimization',
    'services.ecommerce.deliverable3': 'Integration Setup',
    'services.ecommerce.deliverable4': 'Training & Documentation',
    'services.ecommerce.timeline': '3-8 weeks',
    
    // Service Labels
    'services.whatsIncluded': 'What\'s Included',
    'services.deliverables': 'Deliverables',
    'services.timeline': 'Timeline',
    'services.getQuote': 'Get Quote',
    'services.getFullQuote': 'Get {service} Quote',
    
    // Additional Services
    'services.additional.strategy.title': 'Business Strategy Consulting',
    'services.additional.strategy.description': 'Strategic guidance for digital transformation and growth',
    'services.additional.architecture.title': 'Technical Architecture',
    'services.additional.architecture.description': 'Scalable system design and technology roadmaps',
    'services.additional.api.title': 'API Development',
    'services.additional.api.description': 'Custom API design and third-party integrations',
    'services.additional.analytics.title': 'Data Analytics',
    'services.additional.analytics.description': 'Business intelligence and performance insights',
    'services.additional.mobile.title': 'Mobile App Development',
    'services.additional.mobile.description': 'Cross-platform mobile solutions for iOS and Android',
    'services.additional.global.title': 'Global Deployment',
    'services.additional.global.description': 'Multi-region infrastructure and localization',
    
    // Case Studies Section
    'caseStudies.badge': 'Success Stories',
    'caseStudies.title': 'Technology Solutions That Deliver Results',
    'caseStudies.subtitle': 'From government services to enterprise technology, see how our AI and software solutions drive measurable impact and transformation.',
    'caseStudies.viewProject': 'View Project',
    'caseStudies.readMore': 'Read More',
    'caseStudies.challenge': 'Challenge',
    'caseStudies.solution': 'Solution',
    'caseStudies.results': 'Results',
    'caseStudies.timeline': 'Timeline',
    'caseStudies.testimonial': 'Testimonial',
    'caseStudies.tags': 'Technologies',
    
    // CTA Section
    'cta.title': 'Ready to Automate Your Business & Scale Growth?',
    'cta.button': 'Chat With Us on WhatsApp',
    
    // Contact Section
    'contact.badge': 'Get In Touch',
    'contact.title': 'Let\'s Start Your Digital Transformation',
    'contact.subtitle': 'Ready to revolutionize your business with cutting-edge technology? Get in touch and let\'s discuss how we can help you achieve your digital goals.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending Message...',
    'contact.methods.email.title': 'Email Us',
    'contact.methods.email.description': 'Get in touch via email',
    'contact.methods.whatsapp.title': 'WhatsApp',
    'contact.methods.whatsapp.description': 'Quick chat on WhatsApp',
    'contact.methods.whatsapp.action': 'Chat Now',
    'contact.methods.social.title': 'Follow Us',
    'contact.methods.social.description': 'Connect on social media',
    'contact.methods.social.value': 'LinkedIn • Instagram • Facebook',
    'contact.office.hours': 'Business Hours',
    'contact.office.hoursValue': 'Always Open',
    'contact.office.headquarters': 'Headquarters',
    'contact.office.headquartersValue': 'UAE',
    'contact.success.title': 'Message Sent Successfully!',
    'contact.success.description': 'We\'ll get back to you within 24 hours.',
    'contact.error.title': 'Something went wrong',
    'contact.error.description': 'Please try again or contact us directly at info.smarb@gmail.com',
    
    // Footer
    'footer.description': 'Leading Technology Solutions for Global Businesses. Based in UAE, serving clients worldwide.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',
    'footer.followUs': 'Follow us:',
    'footer.getAudit': 'Get Free Audit',
    
    // WhatsApp Message
    'whatsapp.message': 'Hi! I\'d like to get a free audit for my business.',
    'whatsapp.contactMessage': 'Hi! I\'d like to discuss my technology project with you.',
    
    // Common
    'common.loading': 'Loading...',
    'common.viewMore': 'View More',
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.close': 'Close',
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
    'common.yes': 'Yes',
    'common.no': 'No',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.services': 'Dienstleistungen',
    'nav.caseStudies': 'Fallstudien',
    'nav.contact': 'Kontakt',
    'nav.contactUs': 'Kontakt aufnehmen',
    
    // Language Toggle
    'language.switchTo': 'Wechseln zu',
    'language.german': 'Deutsch',
    'language.english': 'English',
    
    // Hero Section
    'hero.badge': 'Hauptsitz in den VAE • Globale Operationen',
    'hero.badgeMobile': 'VAE • Global',
    'hero.headline': 'KI-gestützte Lösungen & Digitales Marketing für globale Unternehmen',
    'hero.subheadline': 'Von Chatbots bis Shopify-Stores liefern wir skalierbare Technologie, die ROI generiert.',
    'hero.description': 'Mit Hauptsitz in den VAE liefern wir modernste Software-, KI- und Geschäftslösungen, die digitale Transformation und Innovation branchenübergreifend weltweit vorantreiben.',
    'hero.cta1': '🚀 Holen Sie sich heute Ihre kostenlose Demo',
    'hero.cta2': 'Unser Portfolio ansehen',
    'hero.getInTouch': 'Kontakt aufnehmen',
    'hero.viewOurWork': 'Unsere Arbeit ansehen',
    'hero.typewriter1': 'Führende Technologielösungen für globale Unternehmen',
    'hero.typewriter2': 'Innovation digitaler Erfahrungen, die skalieren',
    'hero.typewriter3': 'Startups und Unternehmen weltweit stärken',
    'hero.typewriter4': 'Ideen in skalierbare Realität verwandeln',
    
    // About Section
    'about.badge': 'Über uns',
    'about.title': 'Über SMARB Technologies - Ihr führender Partner für KI-Lösungen',
    'about.description': 'SMARB Technologies ist ein führendes, in den VAE ansässiges Technologieunternehmen, das sich auf KI-Lösungen, maßgeschneiderte Softwareentwicklung und Marketingautomatisierung spezialisiert hat. Wir liefern innovative Unternehmenslösungen, die digitale Transformation für Unternehmen weltweit vorantreiben und modernste KI-Technologien mit bewährter Software-Engineering-Exzellenz kombinieren.',
    'about.trust': 'Wir betreuen Kunden in den VAE, Großbritannien, den USA und darüber hinaus.',
    'about.metrics.projects': '10+ Projekte geliefert',
    'about.metrics.countries': '4+ Länder bedient',
    'about.metrics.clients': '50+ Zufriedene Kunden',
    'about.metrics.experience': '5+ Jahre Erfahrung',
    'about.metrics.trusted': 'Vertraut von Unternehmen in VAE, UK, USA & Pakistan',
    'about.mission.badge': 'Unsere Mission',
    'about.mission.title': 'Digitale Innovation vorantreiben',
    'about.mission.description1': 'Unsere Mission ist es, Unternehmen weltweit durch modernste Technologielösungen, KI-Innovation und strategische digitale Transformation zu stärken. Wir glauben, dass jede Organisation Zugang zu erstklassiger Technologie-Expertise verdient.',
    'about.mission.description2': 'Mit Hauptsitz in den VAE kombinieren wir regionale Expertise mit globalen Technologiestandards, um Lösungen zu liefern, die echte Geschäftsauswirkungen erzielen. Unser Team ist leidenschaftlich daran interessiert, Unternehmen im digitalen Zeitalter zum Erfolg zu verhelfen.',
    
    // Values
    'values.innovation.title': 'Innovation an erster Stelle',
    'values.innovation.description': 'Wir nutzen modernste Technologie zur Lösung komplexer Geschäftsherausforderungen.',
    'values.quality.title': 'Qualität gewährleistet',
    'values.quality.description': 'Wir halten die höchsten Standards in der Softwareentwicklung und KI-Lösungen ein.',
    'values.global.title': 'Globale Reichweite',
    'values.global.description': 'Betreuung von Kunden in VAE, UK, USA und weltweite Expansion.',
    'values.results.title': 'Ergebnisorientiert',
    'values.results.description': 'Wir konzentrieren uns auf die Lieferung messbarer Geschäftsergebnisse und ROI.',
    
    // Team Section
    'team.connectLinkedIn': 'Auf LinkedIn verbinden',
    'team.arslan.role': 'Gründer, Marketing & Geschäftsentwicklungsleiter',
    'team.arslan.bio1': 'Marketing-Stratege mit Kundenerfahrung in den Märkten VAE und USA, der messbares Unternehmenswachstum liefert.',
    'team.arslan.bio2': 'Erfolgreich Apple-Produkte für Unternehmenskunden in den VAE mit bewiesener Verkaufsauswirkung und Kundenbindung vermarktet.',
    'team.arslan.bio3': 'Leitete Immobilien-Listing-Kampagnen für amerikanische Kunden, verwaltete Anzeigen, Leads und digitale Wachstumsergebnisse.',
    'team.arslan.bio4': 'Experte in Meta Ads, Google Ads, Facebook Marketplace und TikTok-Werbung mit Conversion-Optimierung.',
    'team.arslan.bio5': 'Fokussiert auf Produktmarketing-Strategien, digitale Verkaufstrichter und Lead-Generierungstechniken für Skalierung.',
    'team.abubakar.role': 'Mitgründer, CTO & KI-Engineering-Leiter',
    'team.abubakar.bio1': 'Full-Stack-Software-Ingenieur und KI-Spezialist mit starker technischer Expertise und breiter Projekterfahrung.',
    'team.abubakar.bio2': 'Entwickelte Machine-Learning-Algorithmen und intelligente Automatisierungs-Pipelines für unternehmenstaugliche Bereitstellungen.',
    'team.abubakar.bio3': 'Baute fortschrittliche KI-Chatbots, RAG-basierte Dokumentensuchsysteme und maßgeschneiderte datengesteuerte Unternehmensplattformen.',
    'team.abubakar.bio4': 'Erfahren in Legal Tech, E-Commerce-Plattformen und Unternehmenslösungsentwicklung für globale Kunden.',
    'team.abubakar.bio5': 'Leidenschaftlich für den Aufbau skalierbarer Software, cloud-getriebener KI-Systeme und innovativer digitaler Transformation.',
    
    // Services Section
    'services.badge': 'Unsere Dienstleistungen',
    'services.title': 'SMARB Technologies Unternehmenslösungen - KI, Software & Digitales Marketing',
    'services.subtitle': 'Von maßgeschneiderter Softwareentwicklung und KI-Lösungen bis hin zu Geschäftsautomatisierung und digitalem Marketing bietet SMARB Technologies umfassende Technologiedienstleistungen für moderne Unternehmen, die digitale Transformation anstreben.',
    
    // Service Items
    'services.software.title': 'Maßgeschneiderte Softwareentwicklung',
    'services.software.description': 'Unternehmenstaugliche Anwendungen, entwickelt mit Django, Angular, React und Node.js für skalierbare Geschäftslösungen.',
    'services.software.feature1': 'Full-Stack-Webanwendungen',
    'services.software.feature2': 'API-Entwicklung & Integration',
    'services.software.feature3': 'Datenbankdesign & Optimierung',
    'services.software.feature4': 'Systemarchitektur & Design',
    'services.software.feature5': 'Leistungsoptimierung',
    'services.software.feature6': 'Sicherheitsimplementierung',
    'services.software.deliverable1': 'Technisches Spezifikationsdokument',
    'services.software.deliverable2': 'Voll funktionsfähige Anwendung',
    'services.software.deliverable3': 'Quellcode & Dokumentation',
    'services.software.deliverable4': 'Bereitstellung & Schulung',
    'services.software.timeline': '8-16 Wochen',
    
    'services.ai.title': 'KI & Machine Learning Lösungen',
    'services.ai.description': 'Intelligente Lösungen einschließlich NLP, RAG-Systemen und Computer Vision zur Automatisierung und Optimierung von Geschäftsprozessen.',
    'services.ai.feature1': 'Natürliche Sprachverarbeitung (NLP)',
    'services.ai.feature2': 'Retrieval-Augmented Generation (RAG)',
    'services.ai.feature3': 'Computer Vision & Bilderkennung',
    'services.ai.feature4': 'Predictive Analytics & Modellierung',
    'services.ai.feature5': 'Machine Learning Modellentwicklung',
    'services.ai.feature6': 'KI-Integration & Bereitstellung',
    'services.ai.deliverable1': 'KI-Lösungsarchitektur',
    'services.ai.deliverable2': 'Trainierte ML-Modelle',
    'services.ai.deliverable3': 'Integrationsdokumentation',
    'services.ai.deliverable4': 'Leistungsberichte',
    'services.ai.timeline': '6-12 Wochen',
    
    'services.business.title': 'Geschäftsentwicklung & Marketing',
    'services.business.description': 'End-to-End-Strategien zur Erweiterung Ihrer Geschäftsreichweite, zum Aufbau von Markenautorität und zur Generierung messbaren Wachstums durch digitale Kanäle.',
    'services.business.feature1': 'Markenpositionierung & Strategie',
    'services.business.feature2': 'Digitale Marketing-Kampagnen',
    'services.business.feature3': 'SEO & Content-Marketing',
    'services.business.feature4': 'Social Media Wachstum',
    'services.business.feature5': 'Lead-Generierungs-Trichter',
    'services.business.feature6': 'Marktforschung & Analytics',
    'services.business.deliverable1': 'Umfassende Marketing-Strategie',
    'services.business.deliverable2': 'Kampagnen-Assets & Content',
    'services.business.deliverable3': 'SEO-Optimierungsbericht',
    'services.business.deliverable4': 'Wachstums-Analytics-Dashboard',
    'services.business.timeline': '3-8 Wochen',
    
    'services.ecommerce.title': 'Shopify & WordPress Entwicklung',
    'services.ecommerce.description': 'Professionelle E-Commerce-Lösungen mit maßgeschneiderter Funktionalität, Optimierung und strategischer Implementierung.',
    'services.ecommerce.feature1': 'Maßgeschneiderte Shopify-Entwicklung',
    'services.ecommerce.feature2': 'WordPress-Anpassung',
    'services.ecommerce.feature3': 'E-Commerce-Strategie',
    'services.ecommerce.feature4': 'Leistungsoptimierung',
    'services.ecommerce.feature5': 'Zahlungsintegration',
    'services.ecommerce.feature6': 'Analytics & Berichterstattung',
    'services.ecommerce.deliverable1': 'Maßgeschneiderte E-Commerce-Plattform',
    'services.ecommerce.deliverable2': 'Leistungsoptimierung',
    'services.ecommerce.deliverable3': 'Integrationssetup',
    'services.ecommerce.deliverable4': 'Schulung & Dokumentation',
    'services.ecommerce.timeline': '3-8 Wochen',
    
    // Service Labels
    'services.whatsIncluded': 'Was enthalten ist',
    'services.deliverables': 'Lieferumfang',
    'services.timeline': 'Zeitrahmen',
    'services.getQuote': 'Angebot einholen',
    'services.getFullQuote': '{service} Angebot einholen',
    
    // Additional Services
    'services.additional.strategy.title': 'Geschäftsstrategie-Beratung',
    'services.additional.strategy.description': 'Strategische Beratung für digitale Transformation und Wachstum',
    'services.additional.architecture.title': 'Technische Architektur',
    'services.additional.architecture.description': 'Skalierbare Systemdesigns und Technologie-Roadmaps',
    'services.additional.api.title': 'API-Entwicklung',
    'services.additional.api.description': 'Maßgeschneiderte API-Designs und Drittanbieter-Integrationen',
    'services.additional.analytics.title': 'Datenanalyse',
    'services.additional.analytics.description': 'Business Intelligence und Leistungseinblicke',
    'services.additional.mobile.title': 'Mobile App-Entwicklung',
    'services.additional.mobile.description': 'Plattformübergreifende mobile Lösungen für iOS und Android',
    'services.additional.global.title': 'Globale Bereitstellung',
    'services.additional.global.description': 'Multi-Region-Infrastruktur und Lokalisierung',
    
    // Case Studies Section
    'caseStudies.badge': 'Erfolgsgeschichten',
    'caseStudies.title': 'Technologielösungen, die Ergebnisse liefern',
    'caseStudies.subtitle': 'Von Regierungsdiensten bis hin zu Unternehmenstechnologie - sehen Sie, wie unsere KI- und Softwarelösungen messbare Auswirkungen und Transformation bewirken.',
    'caseStudies.viewProject': 'Projekt ansehen',
    'caseStudies.readMore': 'Weiterlesen',
    'caseStudies.challenge': 'Herausforderung',
    'caseStudies.solution': 'Lösung',
    'caseStudies.results': 'Ergebnisse',
    'caseStudies.timeline': 'Zeitrahmen',
    'caseStudies.testimonial': 'Kundenstimme',
    'caseStudies.tags': 'Technologien',
    
    // CTA Section
    'cta.title': 'Bereit, Ihr Unternehmen zu automatisieren & Wachstum zu skalieren?',
    'cta.button': 'Chatten Sie mit uns auf WhatsApp',
    
    // Contact Section
    'contact.badge': 'Kontakt aufnehmen',
    'contact.title': 'Lassen Sie uns Ihre digitale Transformation beginnen',
    'contact.subtitle': 'Bereit, Ihr Unternehmen mit modernster Technologie zu revolutionieren? Kontaktieren Sie uns und lassen Sie uns besprechen, wie wir Ihnen helfen können, Ihre digitalen Ziele zu erreichen.',
    'contact.form.name': 'Vollständiger Name',
    'contact.form.email': 'E-Mail',
    'contact.form.company': 'Unternehmen',
    'contact.form.message': 'Nachricht',
    'contact.form.send': 'Nachricht senden',
    'contact.form.sending': 'Nachricht wird gesendet...',
    'contact.methods.email.title': 'E-Mail an uns',
    'contact.methods.email.description': 'Kontaktieren Sie uns per E-Mail',
    'contact.methods.whatsapp.title': 'WhatsApp',
    'contact.methods.whatsapp.description': 'Schneller Chat auf WhatsApp',
    'contact.methods.whatsapp.action': 'Jetzt chatten',
    'contact.methods.social.title': 'Folgen Sie uns',
    'contact.methods.social.description': 'Verbinden Sie sich in sozialen Medien',
    'contact.methods.social.value': 'LinkedIn • Instagram • Facebook',
    'contact.office.hours': 'Geschäftszeiten',
    'contact.office.hoursValue': 'Immer geöffnet',
    'contact.office.headquarters': 'Hauptsitz',
    'contact.office.headquartersValue': 'VAE',
    'contact.success.title': 'Nachricht erfolgreich gesendet!',
    'contact.success.description': 'Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.',
    'contact.error.title': 'Etwas ist schief gelaufen',
    'contact.error.description': 'Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter info.smarb@gmail.com',
    
    // Footer
    'footer.description': 'Führende Technologielösungen für globale Unternehmen. Mit Sitz in den VAE, weltweite Kundenbetreuung.',
    'footer.services': 'Dienstleistungen',
    'footer.company': 'Unternehmen',
    'footer.legal': 'Rechtliches',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.followUs': 'Folgen Sie uns:',
    'footer.getAudit': 'Kostenloses Audit erhalten',
    
    // WhatsApp Message
    'whatsapp.message': 'Hallo! Ich hätte gerne ein kostenloses Audit für mein Unternehmen.',
    'whatsapp.contactMessage': 'Hallo! Ich möchte mein Technologieprojekt mit Ihnen besprechen.',
    
    // Common
    'common.loading': 'Wird geladen...',
    'common.viewMore': 'Mehr anzeigen',
    'common.learnMore': 'Mehr erfahren',
    'common.getStarted': 'Loslegen',
    'common.close': 'Schließen',
    'common.cancel': 'Abbrechen',
    'common.confirm': 'Bestätigen',
    'common.yes': 'Ja',
    'common.no': 'Nein',
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