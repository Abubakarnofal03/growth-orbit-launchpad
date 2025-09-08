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
      "E-commerce Development"
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