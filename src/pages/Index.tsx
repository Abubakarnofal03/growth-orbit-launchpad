import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TrustSection from "@/components/sections/TrustSection";
import CaseStudySection from "@/components/sections/CaseStudySection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <CaseStudySection />
    </Layout>
  );
};

export default Index;
