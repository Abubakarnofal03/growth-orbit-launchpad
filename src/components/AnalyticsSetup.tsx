import { Helmet } from "react-helmet-async";

// Google Analytics Setup Component
// Replace GA_MEASUREMENT_ID with your actual Google Analytics 4 tracking ID
const AnalyticsSetup = () => {
  // Google Analytics 4 measurement ID
  const GA_MEASUREMENT_ID = "G-HSQ1JWX6FK";
  
  return (
    <Helmet>
      {/* Google Analytics (GA4) */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </script>
      
      {/* Google Search Console Verification */}
      {/* Replace with your actual verification code */}
      <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE" />
      
      {/* Additional tracking scripts can be added here */}
    </Helmet>
  );
};

export default AnalyticsSetup;