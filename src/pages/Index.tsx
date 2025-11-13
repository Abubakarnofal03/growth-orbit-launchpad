import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import AnalyticsSetup from "@/components/AnalyticsSetup";
import AlternativeNamesSchema from "@/components/AlternativeNamesSchema";
import FAQSchema from "@/components/FAQ-schema";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import VenturesSection from "@/components/sections/VenturesSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <>
      <SEOHead 
        title="SMARB Technologies | Leading AI Solutions, Software Development & Digital Marketing Company" 
        description="Transform your business with SMARB Technologies - Pakistan's premier AI solutions and software development company. Expert services in machine learning, custom software, business automation, and digital marketing for global enterprises." 
        keywords="SMARB Technologies, Smarb Technologies, Smart Technologies, Smartb Technologies, Smarb Tech, Smart Tech, Smab Technologies, AI Solutions, Machine Learning, Software Development, Digital Marketing, Business Automation, RAG Systems, NLP, Computer Vision, Custom Software, API Development, Web Development, Mobile Apps, IT Consulting, Technology Company, Pakistan Tech Company" 
        canonicalUrl="https://www.smarbtechnologies.com/" 
      />
      <AnalyticsSetup />
      <AlternativeNamesSchema />
      <FAQSchema />
      <Layout>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CaseStudiesSection />
        <VenturesSection />
        <ContactSection />
      </Layout>
    </>
  );
};

export default Index;
