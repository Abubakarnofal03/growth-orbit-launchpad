/**
 * Detects if the current device is mobile
 */
const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false;
  }
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

/**
 * Generates a WhatsApp URL that opens:
 * - WhatsApp app on mobile devices
 * - WhatsApp Web on desktop/laptop
 */
export const getWhatsAppUrl = (phoneNumber: string, message?: string): string => {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = message ? encodeURIComponent(message) : '';
  
  if (isMobileDevice()) {
    // Mobile: Use wa.me which opens the WhatsApp app
    return `https://wa.me/${cleanNumber}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
  } else {
    // Desktop: Use WhatsApp Web directly
    return `https://web.whatsapp.com/send?phone=${cleanNumber}${encodedMessage ? `&text=${encodedMessage}` : ''}`;
  }
};

export const WHATSAPP_NUMBER = "+971505940132";
