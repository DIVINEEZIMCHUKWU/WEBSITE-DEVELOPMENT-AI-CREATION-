/**
 * Meta Pixel (Facebook Pixel) Event Tracking Utility
 * Pixel ID: 1870265740334947
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Tracks InitiateCheckout when a user clicks any "BUY NOW" or "ENROLL" CTA button
 */
export function trackMetaInitiateCheckout(buttonLocation: string) {
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'AI Website Development Training',
        content_category: 'Online Course',
        value: 5000,
        currency: 'NGN',
        num_items: 1,
        button_location: buttonLocation,
      });
    }
  } catch (error) {
    console.debug('Meta Pixel tracking error:', error);
  }
}

/**
 * Tracks Lead event when a user clicks WhatsApp mentorship or inquiry links
 */
export function trackMetaLead(source: string) {
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: 'WhatsApp Mentorship & Inquiries',
        source,
      });
    }
  } catch (error) {
    console.debug('Meta Pixel tracking error:', error);
  }
}

/**
 * Tracks ViewContent or Custom events
 */
export function trackMetaCustom(eventName: string, params?: Record<string, any>) {
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('trackCustom', eventName, params || {});
    }
  } catch (error) {
    console.debug('Meta Pixel tracking error:', error);
  }
}
