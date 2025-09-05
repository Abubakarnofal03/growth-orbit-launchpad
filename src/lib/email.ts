import emailjs from '@emailjs/browser';

// EmailJS configuration - using environment variables for security
export const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_29knpyq',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_zysdni2',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'oH_GTZMSMCN88APJx',
};

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}

// Initialize EmailJS with public key
export const initializeEmailJS = () => {
  console.log('Initializing EmailJS with config:', {
    serviceId: EMAIL_CONFIG.serviceId,
    templateId: EMAIL_CONFIG.templateId,
    publicKey: EMAIL_CONFIG.publicKey ? 'Set' : 'Missing'
  });
  
  if (EMAIL_CONFIG.publicKey && EMAIL_CONFIG.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY') {
    emailjs.init(EMAIL_CONFIG.publicKey);
    console.log('EmailJS initialized successfully');
  } else {
    console.error('EmailJS public key not configured');
  }
};

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  console.log('Attempting to send email with data:', formData);
  
  try {
    // Initialize EmailJS if not already done
    if (EMAIL_CONFIG.publicKey && EMAIL_CONFIG.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY') {
      emailjs.init(EMAIL_CONFIG.publicKey);
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not specified',
      budget: formData.budget || 'Not specified',
      message: formData.message,
      to_name: 'SMARB Technologies',
      reply_to: formData.email,
    };

    console.log('Sending email with params:', templateParams);
    console.log('Using service config:', {
      serviceId: EMAIL_CONFIG.serviceId,
      templateId: EMAIL_CONFIG.templateId
    });

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );

    console.log('EmailJS response:', response);
    
  } catch (error) {
    console.error('Email sending failed:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to send email: ${error.message}. Please contact us directly at info.smarb@gmail.com`);
    }
    throw new Error('Failed to send email. Please try again or contact us directly at info.smarb@gmail.com');
  }
};
