import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
  children?: React.ReactNode;
}

const SEOHead = ({
  title = "SMARB Technologies | AI Solutions, Software Development & Digital Marketing",
  description = "Leading technology company specializing in AI solutions, custom software development, and digital marketing. Transform your business with SMARB Technologies - serving globally from Pakistan.",
  keywords = "Smarb Technologies, SMARB Technologies, Smart Technologies, Smartb Technologies, Smarb Tech, Smart Tech, Smab Technologies, Smarb Tecnologies, SMARB Tech, AI Solutions, Artificial Intelligence, Machine Learning, Software Development, Custom Software, Web Development, Mobile App Development, Digital Marketing, Business Automation, IT Consulting, Technology Company, Tech Solutions, RAG Systems, NLP, Computer Vision, Shopify Development, WordPress Development, API Development, Cloud Solutions, Data Analytics, Business Intelligence, E-commerce Development, CRM Development, ERP Solutions, Automation Services, Pakistan Technology Company, UAE Tech Services, Global Software Solutions",
  canonicalUrl = "https://www.smarbtechnologies.com",
  ogImage = "https://www.smarbtechnologies.com/lovable-uploads/logo.png",
  noindex = false,
  children
}: SEOHeadProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow" />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="SMARB Technologies" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO meta tags */}
      <meta name="author" content="SMARB Technologies" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="web" />
      <meta name="rating" content="general" />

      {children}
    </Helmet>
  );
};

export default SEOHead;