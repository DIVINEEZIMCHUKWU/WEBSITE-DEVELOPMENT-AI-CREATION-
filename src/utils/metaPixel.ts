/**
 * Meta Pixel Tracking Utility - Pixel ID: 39230765853236554
 */
import { trackMetaPixelInitiateCheckout, trackMetaPixelPurchase } from '../config/paymentConfig';

export function trackMetaInitiateCheckout(location?: string) {
  trackMetaPixelInitiateCheckout(location || 'CTA Button Click');
}

export function trackMetaPurchase(orderRef: string, name?: string, email?: string) {
  trackMetaPixelPurchase(orderRef, name, email);
}

export function trackMetaLead(source?: string) {
  try {
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Lead', {
        content_name: 'WhatsApp Mentorship Inquiry',
        source: source || 'Website',
      });
      console.log('[Meta Pixel 39230765853236554] Lead Tracked');
    }
  } catch (e) {
    console.debug('[Meta Pixel] Error tracking Lead:', e);
  }
}

export function trackMetaCustom(name: string, params?: Record<string, any>) {
  try {
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      (window as any).fbq('trackCustom', name, params || {});
    }
  } catch (e) {
    console.debug('[Meta Pixel] Error tracking custom event:', e);
  }
}
