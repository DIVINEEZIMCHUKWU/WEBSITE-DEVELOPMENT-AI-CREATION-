import React from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, Flame } from 'lucide-react';
import { trackMetaInitiateCheckout } from '../utils/metaPixel';

export default function OfferSection() {
  const checklist = [
    "100% Smartphone & Android Compatible (No Laptop Required)",
    "Build professional websites with AI",
    "Master AI website prompting",
    "Refine AI-generated websites",
    "Make websites responsive",
    "Build Admin Dashboards & Admin Management Systems",
    "Connect databases/backend services",
    "Learn free hosting",
    "Learn paid hosting",
    "Learn domain setup (₦450 tutorial)",
    "Learn DNS & Nameservers",
    "Learn GitHub",
    "Learn Visual Studio Code & Mobile Editors",
    "Learn professional debugging",
    "Learn payment gateway integration (Paystack)",
    "Learn how to monetize the skill",
    "Self-paced learning (Watch on phone or PC)",
    "WhatsApp mentorship & support community",
  ];

  return (
    <section className="py-20 lg:py-24 bg-white text-black border-b border-black/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
            <Flame className="w-4 h-4 text-white fill-white" />
            <span>THE ALL-INCLUSIVE PACKAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black leading-tight">
            GET THE COMPLETE AI WEBSITE DEVELOPMENT TRAINING
          </h2>
          <p className="mt-4 text-base sm:text-lg text-black/80 font-semibold">
            Everything you need to master AI web development, deploy live projects, and start offering website creation services.
          </p>
        </div>

        {/* Master Offer Card with Strict Blue/Orange/Black/White Theme */}
        <div className="rounded-3xl bg-white border-4 border-blue-600 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Checklist Column (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-black/10 bg-white">
              <h3 className="text-lg font-black text-black uppercase tracking-wide mb-6">
                What's Included in Your Access:
              </h3>
              
              <div className="space-y-3">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-blue-600 text-white shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-black">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing & Checkout Column (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-black text-white flex flex-col justify-between">
              <div>
                <div className="inline-block px-3.5 py-1 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-wider mb-4 shadow">
                  Lifetime Enrolment
                </div>

                {/* Struck-through Regular Price */}
                <div className="text-xs font-black uppercase text-white/60 tracking-wider">
                  REGULAR PRICE:
                </div>
                <div className="text-2xl font-black text-white/50 line-through mb-3">
                  ₦20,000
                </div>

                {/* Current Price */}
                <div className="text-xs font-black uppercase text-orange-400 tracking-wider">
                  CURRENT PRICE:
                </div>
                <div className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                  ₦5,000
                </div>

                <div className="mt-3 space-y-1">
                  <div className="text-sm font-black uppercase text-white tracking-wide">
                    ONE-TIME PAYMENT
                  </div>
                  <div className="text-xs font-bold text-orange-400">
                    CURRENT PROMOTIONAL PRICE
                  </div>
                </div>
              </div>

              {/* Purchase Button linking to #checkout */}
              <div className="mt-8">
                <a
                  href="#checkout"
                  onClick={() => trackMetaInitiateCheckout('Offer Section')}
                  className="animate-attention-pulse relative overflow-hidden w-full inline-flex items-center justify-center gap-2.5 px-6 py-4.5 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-black text-sm sm:text-base shadow-2xl shadow-orange-600/50 hover:scale-[1.03] active:scale-[0.98] transition-all uppercase tracking-wide text-center cursor-pointer border border-white/20"
                >
                  {/* Subtle glass shimmer sweep */}
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                  <span className="relative z-10">👉 BUY NOW: GET INSTANT ACCESS</span>
                  <ArrowRight className="w-4 h-4 shrink-0 relative z-10" />
                </a>

                <div className="mt-3 text-center">
                  <p className="text-xs text-white/80 font-bold flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>Secure on-page Paystack checkout.</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
