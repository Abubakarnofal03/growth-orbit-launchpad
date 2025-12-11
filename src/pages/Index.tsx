import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudySection from "@/components/sections/CaseStudySection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <CaseStudySection />
    </Layout>
  );
};

export default Index;