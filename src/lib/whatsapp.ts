/**
 * Generates a WhatsApp URL using wa.me which works universally
 * - On mobile: Opens WhatsApp app directly
 * - On desktop: Automatically redirects to WhatsApp Web
 * 
 * Note: We use wa.me instead of web.whatsapp.com because WhatsApp Web
 * blocks iframe embedding with X-Frame-Options headers. The wa.me links
 * handle the redirect properly in all contexts.
 */
export const getWhatsAppUrl = (phoneNumber: string, message?: string): string => {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = message ? encodeURIComponent(message) : '';
  
  return `https://wa.me/${cleanNumber}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
};

export const WHATSAPP_NUMBER = "+971505940132";
