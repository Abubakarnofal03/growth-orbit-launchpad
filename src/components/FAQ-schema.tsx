import { Helmet } from "react-helmet-async";

// FAQ Schema for common questions about SMARB Technologies
const FAQSchema = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is SMARB Technologies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SMARB Technologies is a leading technology company specializing in AI solutions, custom software development, and digital marketing. We help businesses transform through innovative technology solutions."
        }
      },
      {
        "@type": "Question", 
        "name": "Where is SMARB Technologies located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SMARB Technologies is based in Pakistan and serves clients globally, with a strong presence in the UAE and Middle East markets."
        }
      },
      {
        "@type": "Question",
        "name": "What services does SMARB Technologies offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer AI solutions, machine learning, custom software development, web development, mobile app development, digital marketing, business automation, cloud solutions, and IT consulting services."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact SMARB Technologies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact SMARB Technologies through our website contact form, email us at info.smarb@gmail.com, or call us at +971505940132."
        }
      },
      {
        "@type": "Question",
        "name": "Does SMARB Technologies work with international clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SMARB Technologies serves clients globally including USA, Canada, UK, Australia, UAE, Saudi Arabia, and many other countries worldwide."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default FAQSchema;