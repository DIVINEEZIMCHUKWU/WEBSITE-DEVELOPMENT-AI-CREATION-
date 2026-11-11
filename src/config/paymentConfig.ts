/**
 * SkillHive Media Agency - Paystack, WhatsApp & Meta Pixel Configuration
 */

// Landing page display price
export const COURSE_TUITION_NAIRA = 5000;
export const COURSE_PRICE_NAIRA = 5000;

// Amount passed to Paystack Inline popup (500,000 kobo = N5,000).
// In Paystack Dashboard, customer-fee-bearing adds 1.5% + N100 (= N180),
// so the customer sees and pays exactly N5,180 inside Paystack!
export const PAYSTACK_POPUP_AMOUNT_KOBO = 5000 * 100; // 500,000 kobo
export const COURSE_PRICE_KOBO = PAYSTACK_POPUP_AMOUNT_KOBO;

// Correct Active Paystack Public Key (Safe for frontend checkout)
export const DEFAULT_PAYSTACK_PUBLIC_KEY = 'pk_live_1a9c0c07a3071b5e1b26aed62e3e9b7396670a06';

// Correct Active WhatsApp Phone Number (08125650249 in international format)
export const DEFAULT_WHATSAPP_PHONE = '2348125650249';

// Correct Active Meta Pixel ID
export const DEFAULT_META_PIXEL_ID = '39230765853236554';

// Exact customized WhatsApp onboarding message requested by user
export const CUSTOM_WHATSAPP_MESSAGE = 
  "Hello, SkillHive Media Agency, I just made my Payment via Paystack for this WEBSITE DEVELOPMENT AI CREATION COURSE just now. Please Onboard let's get started";

// Storage keys
const PAYSTACK_KEY_STORAGE = 'skillhive_paystack_public_key';
const WHATSAPP_PHONE_STORAGE = 'skillhive_whatsapp_phone';
const META_PIXEL_ID_STORAGE = 'skillhive_meta_pixel_id';

/**
 * Get active Paystack Public Key
 */
export function getPaystackPublicKey(): string {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(PAYSTACK_KEY_STORAGE);
    if (saved && saved.startsWith('pk_live_1a9c')) {
      return saved.trim();
    }
  }
  return DEFAULT_PAYSTACK_PUBLIC_KEY;
}

/**
 * Save Paystack Public Key in browser storage
 */
export function savePaystackPublicKey(key: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(PAYSTACK_KEY_STORAGE, key.trim());
  }
}

/**
 * Get active WhatsApp Phone Number
 */
export function getWhatsAppPhoneNumber(): string {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(WHATSAPP_PHONE_STORAGE);
    if (saved && saved.includes('8125650249')) {
      return saved.trim();
    }
  }
  return DEFAULT_WHATSAPP_PHONE;
}

/**
 * Save WhatsApp Phone Number in browser storage
 */
export function saveWhatsAppPhoneNumber(phone: string): void {
  if (typeof window !== 'undefined') {
    const cleaned = phone.replace(/[^0-9]/g, '');
    localStorage.setItem(WHATSAPP_PHONE_STORAGE, cleaned);
  }
}

/**
 * Get active Meta Pixel ID
 */
export function getMetaPixelId(): string {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(META_PIXEL_ID_STORAGE);
    if (saved && saved.trim() === DEFAULT_META_PIXEL_ID) {
      return saved.trim();
    }
  }
  return DEFAULT_META_PIXEL_ID;
}

/**
 * Save Meta Pixel ID in browser storage
 */
export function saveMetaPixelId(pixelId: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(META_PIXEL_ID_STORAGE, pixelId.trim());
  }
}

/**
 * Track Meta Pixel Purchase event when Paystack payment succeeds
 */
export function trackMetaPixelPurchase(orderRef: string, customerName?: string, customerEmail?: string) {
  try {
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Purchase', {
        value: 5000,
        currency: 'NGN',
        content_name: 'WEBSITE DEVELOPMENT AI CREATION COURSE',
        content_category: 'Online Course',
        content_type: 'product',
        num_items: 1,
        order_id: orderRef,
      });

      console.log(`[Meta Pixel 39230765853236554] ✅ PURCHASE Tracked: ₦5,000 | Ref: ${orderRef} | Name: ${customerName || 'Student'}`);
    } else {
      console.warn('[Meta Pixel] fbq not available to track Purchase.');
    }
  } catch (err) {
    console.debug('[Meta Pixel] Error tracking purchase:', err);
  }
}

/**
 * Track Meta Pixel InitiateCheckout event when visitor starts Paystack checkout
 */
export function trackMetaPixelInitiateCheckout(buttonLocation: string = 'On-Page Paystack Form') {
  try {
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'InitiateCheckout', {
        value: 5000,
        currency: 'NGN',
        content_name: 'WEBSITE DEVELOPMENT AI CREATION COURSE',
        content_category: 'Online Course',
        num_items: 1,
        button_location: buttonLocation,
      });
      console.log(`[Meta Pixel 39230765853236554] InitiateCheckout Tracked for ₦5,000`);
    }
  } catch (err) {
    console.debug('[Meta Pixel] Error tracking InitiateCheckout:', err);
  }
}

/**
 * Generate formatted WhatsApp message text
 */
export function getFormattedWhatsAppMessage(customerName?: string, reference?: string): string {
  let text = CUSTOM_WHATSAPP_MESSAGE;
  if (customerName || reference) {
    text += `\n\nName: ${customerName || 'Student'}\nPaystack Ref: ${reference || 'N/A'}`;
  }
  return text;
}

/**
 * Generate standard wa.me redirect URL
 */
export function generateWhatsAppRedirectUrl(customerName?: string, reference?: string): string {
  const phone = getWhatsAppPhoneNumber();
  const text = getFormattedWhatsAppMessage(customerName, reference);
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/**
 * Generate api.whatsapp.com universal link (more reliable in in-app browsers like Instagram & Facebook)
 */
export function generateWhatsAppUniversalUrl(customerName?: string, reference?: string): string {
  const phone = getWhatsAppPhoneNumber();
  const text = getFormattedWhatsAppMessage(customerName, reference);
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
}

/**
 * Generate direct app deep link (bypasses browser redirects directly to the WhatsApp mobile app)
 */
export function generateWhatsAppDeepLink(customerName?: string, reference?: string): string {
  const phone = getWhatsAppPhoneNumber();
  const text = getFormattedWhatsAppMessage(customerName, reference);
  return `whatsapp://send?phone=${phone}&text=${encodeURIComponent(text)}`;
}

