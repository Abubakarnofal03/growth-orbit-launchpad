/**
 * Generates a WhatsApp URL that opens the app on mobile or WhatsApp Web on desktop
 */
export const getWhatsAppUrl = (phoneNumber: string, message?: string): string => {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = message ? encodeURIComponent(message) : '';
  
  // Check if user is on mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  
  if (isMobile) {
    // Mobile: Use wa.me which opens the WhatsApp app
    return `https://wa.me/${cleanNumber}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
  } else {
    // Desktop: Use WhatsApp Web
    return `https://web.whatsapp.com/send?phone=${cleanNumber}${encodedMessage ? `&text=${encodedMessage}` : ''}`;
  }
};

export const WHATSAPP_NUMBER = "+971505940132";
