import emailjs from "@emailjs/browser";

// EmailJS configuration (env vars with fallback to your provided keys)
export const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_29knpyq",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_zysdni2",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "oH_GTZMSMCN88APJx",
};

export interface ContactFormData {
  name: string;
  email: string;
<<<<<<< HEAD
  company?: string;
  budget?: string;
=======
  company: string;
>>>>>>> bba0578311fb4471f5f6373d6c832ef1fe229429
  message: string;
  page?: string;
}

// Initialize EmailJS once
export const initializeEmailJS = () => {
  if (EMAIL_CONFIG.publicKey && EMAIL_CONFIG.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY") {
    try {
      emailjs.init(EMAIL_CONFIG.publicKey);
      console.log("✅ EmailJS initialized with public key");
    } catch (err) {
      console.error("❌ EmailJS init error:", err);
    }
  } else {
    console.error("❌ EmailJS public key missing in config");
  }
};

// Send contact email
export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    company: formData.company || "Not specified",
    budget: formData.budget || "Not specified",
    message: formData.message,
    to_name: "SMARB Technologies",
    reply_to: formData.email,
  };

  try {
<<<<<<< HEAD
=======
    // Initialize EmailJS if not already done
    if (EMAIL_CONFIG.publicKey && EMAIL_CONFIG.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY') {
      emailjs.init(EMAIL_CONFIG.publicKey);
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not specified',
      page: formData.page || window.location.pathname,
      message: formData.message,
      to_name: 'SMARB Technologies',
      reply_to: formData.email,
    };

    console.log('Sending email with params:', templateParams);
    console.log('Using service config:', {
      serviceId: EMAIL_CONFIG.serviceId,
      templateId: EMAIL_CONFIG.templateId
    });

>>>>>>> bba0578311fb4471f5f6373d6c832ef1fe229429
    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );
    console.log("✅ EmailJS response:", response);
  } catch (error) {
    console.error("❌ EmailJS send error:", error);
    if (error instanceof Error) {
      throw new Error(
        `Failed to send email: ${error.message}. Please contact us directly at info.smarb@gmail.com`
      );
    }
    throw new Error("Failed to send email. Please try again or contact us directly at info.smarb@gmail.com");
  }
};
