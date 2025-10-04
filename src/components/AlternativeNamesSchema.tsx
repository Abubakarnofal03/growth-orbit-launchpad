import { Helmet } from "react-helmet-async";

// Schema markup for alternative names and misspellings
const AlternativeNamesSchema = () => {
  const alternativeNamesSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SMARB Technologies",
    "alternateName": [
      "Smarb Technologies",
      "SMARB Tech",
      "Smarb Tech",
      "Smart Technologies",
      "Smartb Technologies",
      "Smab Technologies",
      "Smarb Tecnologies"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Software Development",
      "Digital Marketing",
      "Business Automation",
      "Web Development",
      "Mobile App Development",
      "Cloud Solutions",
      "Data Analytics",
      "E-commerce Development",
      "Visa Application Services",
      "Immigration Technology",
      "Marketing Agency Services"
    ],
    "owns": [
      {
        "@type": "Product",
        "name": "VisaMate",
        "url": "https://visamate.pro",
        "description": "AI-powered visa application and immigration services platform"
      },
      {
        "@type": "Organization",
        "name": "Yellow Bee Marketing",
        "description": "Full-service digital marketing agency specializing in growth strategies"
      }
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "Global"
    },
    "areaServed": [
      "Pakistan",
      "United Arab Emirates", 
      "Saudi Arabia",
      "Qatar",
      "Kuwait",
      "Bahrain",
      "Oman",
      "United States",
      "Canada",
      "United Kingdom",
      "Australia",
      "Germany",
      "France",
      "Netherlands",
      "Global"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(alternativeNamesSchema)}
      </script>
    </Helmet>
  );
};

export default AlternativeNamesSchema;