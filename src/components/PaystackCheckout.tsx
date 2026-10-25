import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  CheckCircle, 
  Smartphone, 
  User, 
  Mail, 
  Phone,
  ArrowRight,
  AlertCircle,
  Clock
} from 'lucide-react';
import { 
  COURSE_TUITION_NAIRA,
  PAYSTACK_POPUP_AMOUNT_KOBO,
  getPaystackPublicKey, 
  trackMetaPixelPurchase,
  trackMetaPixelInitiateCheckout,
  generateWhatsAppRedirectUrl,
  CUSTOM_WHATSAPP_MESSAGE,
  DEFAULT_PAYSTACK_PUBLIC_KEY
} from '../config/paymentConfig';

declare global {
  interface Window {
    PaystackPop?: {
      setup: (options: Record<string, any>) => {
        openIframe: () => void;
      };
    };
  }
}

export default function PaystackCheckout() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState<{
    reference: string;
    customerName: string;
    whatsappUrl: string;
  } | null>(null);

  // 10-Minute Urgency Countdown Timer (persisted in sessionStorage)
  const [timeLeft, setTimeLeft] = useState<{ minutes: number; seconds: number }>({ minutes: 9, seconds: 59 });

  useEffect(() => {
    const STORAGE_KEY = 'skillhive_countdown_deadline';
    let deadline: number;

    const storedDeadline = sessionStorage.getItem(STORAGE_KEY);
    if (storedDeadline && !isNaN(Number(storedDeadline))) {
      deadline = Number(storedDeadline);
      if (deadline <= Date.now()) {
        // If expired, refresh a 10-minute grace period
        deadline = Date.now() + 10 * 60 * 1000;
        sessionStorage.setItem(STORAGE_KEY, deadline.toString());
      }
    } else {
      deadline = Date.now() + 10 * 60 * 1000;
      sessionStorage.setItem(STORAGE_KEY, deadline.toString());
    }

    const updateTimer = () => {
      const remainingMs = Math.max(0, deadline - Date.now());
      const totalSeconds = Math.floor(remainingMs / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      setTimeLeft({ minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePaystackPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!fullName.trim()) {
      setErrorMessage('Please enter your Full Name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid Email Address.');
      return;
    }
    if (!whatsapp.trim() || whatsapp.trim().length < 8) {
      setErrorMessage('Please enter your active WhatsApp Phone Number.');
      return;
    }

    const currentKey = getPaystackPublicKey() || DEFAULT_PAYSTACK_PUBLIC_KEY;

    if (typeof window === 'undefined' || !window.PaystackPop) {
      setErrorMessage('Paystack checkout gateway is still loading. Please check your internet connection and try again in 5 seconds.');
      return;
    }

    // Track Meta Pixel InitiateCheckout
    trackMetaPixelInitiateCheckout('Paystack On-Page Checkout Form');

    setIsProcessing(true);

    try {
      const handler = window.PaystackPop.setup({
        key: currentKey,
        email: email.trim(),
        amount: PAYSTACK_POPUP_AMOUNT_KOBO, // 500,000 kobo = N5,000. Paystack adds customer fee N180 => N5,180
        currency: 'NGN',
        ref: 'SKILLHIVE_' + Math.floor(Math.random() * 1000000000 + 1),
        metadata: {
          custom_fields: [
            {
              display_name: 'Customer Full Name',
              variable_name: 'customer_full_name',
              value: fullName.trim()
            },
            {
              display_name: 'WhatsApp Number',
              variable_name: 'whatsapp_number',
              value: whatsapp.trim()
            },
            {
              display_name: 'Course Name',
              variable_name: 'course_name',
              value: 'WEBSITE DEVELOPMENT AI CREATION COURSE'
            }
          ]
        },
        callback: function(response: { reference: string }) {
          setIsProcessing(false);

          // Track verified Meta Pixel Purchase with exact N5,000 value and Paystack order reference!
          trackMetaPixelPurchase(response.reference, fullName.trim(), email.trim());

          const redirectUrl = generateWhatsAppRedirectUrl(fullName.trim(), response.reference);
          
          setPaymentSuccess({
            reference: response.reference,
            customerName: fullName.trim(),
            whatsappUrl: redirectUrl
          });

          // Redirect to WhatsApp DM automatically after 1.5 seconds
          setTimeout(() => {
            window.location.href = redirectUrl;
          }, 1500);
        },
        onClose: function() {
          setIsProcessing(false);
        }
      });

      handler.openIframe();
    } catch (err: any) {
      setIsProcessing(false);
      setErrorMessage('Unable to initialize Paystack checkout: ' + (err?.message || 'Please check your connection.'));
    }
  };

  return (
    <section id="checkout" className="py-20 bg-black text-white relative border-t-4 border-orange-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-wider mb-4 shadow">
            <Lock className="w-4 h-4" />
            <span>SECURE ON-PAGE PAYSTACK CHECKOUT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
            GET INSTANT ACCESS TO THE COURSE
          </h2>

          <p className="mt-2 text-sm sm:text-base text-white/80 max-w-xl mx-auto font-medium">
            Complete your enrollment securely via Paystack below. You will be redirected directly to WhatsApp (08125650249) for instant onboarding.
          </p>
        </div>

        {/* Payment Success State */}
        {paymentSuccess ? (
          <div className="bg-white text-black p-8 sm:p-10 rounded-3xl shadow-2xl border-4 border-blue-600 text-center animate-fadeIn">
            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <CheckCircle className="w-12 h-12" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              PAYMENT SUCCESSFUL!
            </h3>

            <p className="mt-2 text-sm sm:text-base text-black/80 font-medium">
              Thank you, <strong>{paymentSuccess.customerName}</strong>! Your payment of ₦{COURSE_TUITION_NAIRA.toLocaleString()} has been received and verified.
            </p>

            <div className="mt-4 p-3 bg-black/5 rounded-xl text-xs font-mono text-black/70 max-w-sm mx-auto">
              Paystack Reference: <strong>{paymentSuccess.reference}</strong>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-600 rounded-2xl text-left max-w-xl mx-auto">
              <div className="flex items-center gap-2 text-blue-700 font-black text-xs uppercase mb-2">
                <Smartphone className="w-4 h-4" />
                <span>Redirecting to WhatsApp DM (08125650249)...</span>
              </div>
              <p className="text-xs sm:text-sm text-black/80 font-medium italic">
                "{CUSTOM_WHATSAPP_MESSAGE}"
              </p>
            </div>

            <div className="mt-8">
              <a
                href={paymentSuccess.whatsappUrl}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-black text-base uppercase tracking-wider shadow-xl shadow-orange-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>OPEN WHATSAPP TO GET ONBOARDED NOW</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="mt-3 text-xs text-black/60 font-semibold">
                If WhatsApp does not open automatically, tap the button above.
              </p>
            </div>
          </div>
        ) : (
          /* Main On-Page Checkout Form Card */
          <div className="bg-white text-black rounded-3xl shadow-2xl border-2 border-white/20 overflow-hidden">
            
            {/* 10-Minute Scarcity / Urgency Countdown Banner */}
            <div className="bg-orange-600 text-white p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left border-b-2 border-white/20 shadow-md">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-black/25 text-white shrink-0 animate-pulse">
                  <Clock className="w-5 h-5 text-white" />
                </span>
                <div>
                  <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-white flex items-center gap-1.5 justify-center sm:justify-start">
                    <span>🔥 SPECIAL ₦5,000 TUITION RESERVED FOR:</span>
                  </div>
                  <div className="text-[11px] text-white/90 font-medium mt-0.5">
                    Complete your details below before the countdown expires to secure your 75% discount.
                  </div>
                </div>
              </div>

              {/* Digital Countdown Display */}
              <div className="flex items-center gap-2 shrink-0 bg-black/40 px-4 py-2 rounded-2xl border border-white/30 shadow-inner">
                <div className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-black font-mono tracking-wider text-white">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[8px] uppercase font-bold text-white/80">MINUTES</span>
                </div>
                <span className="text-2xl sm:text-3xl font-black font-mono text-orange-300 pb-2">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-black font-mono tracking-wider text-orange-300">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[8px] uppercase font-bold text-white/80">SECONDS</span>
                </div>
              </div>
            </div>

            {/* Header Banner */}
            <div className="bg-blue-600 text-white p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-orange-300">
                  ONE TIME ENROLLMENT
                </span>
                <h3 className="text-base sm:text-xl font-black uppercase text-white leading-tight">
                  WEBSITE DEVELOPMENT AI CREATION COURSE
                </h3>
              </div>

              <div className="text-center sm:text-right shrink-0">
                <div className="text-xs text-white/80 line-through font-semibold">
                  Regular: ₦20,000
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  ₦{COURSE_TUITION_NAIRA.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Form Body */}
            <form onSubmit={handlePaystackPayment} className="p-4 sm:p-8 md:p-10 space-y-5 sm:space-y-6">

              {errorMessage && (
                <div className="p-4 rounded-xl bg-orange-100 border-2 border-orange-600 text-orange-900 text-xs sm:text-sm font-bold flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* 1. Full Name Input */}
              <div>
                <label className="block text-xs sm:text-sm font-black uppercase tracking-wide text-black mb-2">
                  1. Your Full Name <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-black/50">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Divine Tonye"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-black/20 focus:border-blue-600 focus:outline-none text-black text-sm font-medium transition-colors"
                  />
                </div>
              </div>

              {/* 2. Email Address Input */}
              <div>
                <label className="block text-xs sm:text-sm font-black uppercase tracking-wide text-black mb-2">
                  2. Your Email Address <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-black/50">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. yourname@gmail.com"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-black/20 focus:border-blue-600 focus:outline-none text-black text-sm font-medium transition-colors"
                  />
                </div>
                <p className="text-[11px] text-black/60 font-medium mt-1">
                  Your Paystack receipt and training confirmation will be sent here.
                </p>
              </div>

              {/* 3. WhatsApp Phone Number Input */}
              <div>
                <label className="block text-xs sm:text-sm font-black uppercase tracking-wide text-black mb-2">
                  3. Your WhatsApp Phone Number <span className="text-orange-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-black/50">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="e.g. 08123456789"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-black/20 focus:border-blue-600 focus:outline-none text-black text-sm font-medium transition-colors"
                  />
                </div>
                <p className="text-[11px] text-black/60 font-medium mt-1">
                  Used to onboard you into the WhatsApp mentorship group immediately after payment.
                </p>
              </div>

              {/* Order Breakdown: Clean N5,000 display on landing page */}
              <div className="p-4 bg-black/5 rounded-2xl border border-black/10 space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-bold text-black/80">
                  <span>Course Package:</span>
                  <span>All 8 Modules + Mentorship</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm font-bold text-black/80">
                  <span>Device Compatibility:</span>
                  <span>100% Smartphone, Android &amp; PC</span>
                </div>
                <div className="pt-2 border-t border-black/10 flex justify-between items-center text-sm sm:text-base font-black text-black">
                  <span>Total Amount:</span>
                  <span className="text-xl sm:text-2xl text-orange-600">₦{COURSE_TUITION_NAIRA.toLocaleString()}</span>
                </div>
              </div>

              {/* Paystack Payment CTA Button with Morphism Vibes & Pulse */}
              <button
                type="submit"
                disabled={isProcessing}
                className="animate-attention-pulse relative overflow-hidden w-full py-4.5 px-6 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-black text-base sm:text-lg uppercase tracking-wider shadow-2xl shadow-orange-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 border border-white/20"
              >
                {/* Subtle glass shimmer sweep */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                {isProcessing ? (
                  <span className="relative z-10">CONNECTING SECURE PAYSTACK GATEWAY...</span>
                ) : (
                  <>
                    <CreditCard className="w-6 h-6 relative z-10" />
                    <span className="relative z-10">PAY ₦{COURSE_TUITION_NAIRA.toLocaleString()} SECURELY VIA PAYSTACK</span>
                    <ArrowRight className="w-5 h-5 relative z-10" />
                  </>
                )}
              </button>

              {/* Trust Badges */}
              <div className="pt-3 border-t border-black/10 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-black/70">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>256-Bit SSL Encrypted</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-blue-600" />
                  <span>Cards, Bank Transfer, USSD</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-blue-600" />
                  <span>Instant WhatsApp Onboarding</span>
                </div>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
}
