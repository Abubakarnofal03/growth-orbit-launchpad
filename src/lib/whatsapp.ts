/**
 * Generates a WhatsApp URL using wa.me which works universally
 * - On mobile: Opens WhatsApp app directly
 * - On desktop: Redirects to WhatsApp Web automatically
 */
export const getWhatsAppUrl = (phoneNumber: string, message?: string): string => {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = message ? encodeURIComponent(message) : '';
  
  // wa.me handles the redirect automatically based on device
  return `https://wa.me/${cleanNumber}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
};

export const WHATSAPP_NUMBER = "+971505940132";
