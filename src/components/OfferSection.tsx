import React from 'react';
import { CheckCircle2, ShieldCheck, ExternalLink, Zap } from 'lucide-react';
import { OFFICIAL_PURCHASE_URL } from './Navbar';
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
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-sky-50/40 to-white text-slate-900 border-b border-sky-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
            <Zap className="w-4 h-4 text-red-600" />
            <span>THE ALL-INCLUSIVE PACKAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-950 leading-tight">
            GET THE COMPLETE AI WEBSITE DEVELOPMENT TRAINING
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-semibold">
            Everything you need to master AI web development, deploy live projects, and start offering website creation services.
          </p>
        </div>

        {/* Master Offer Card with Red/Orange/Sky Blue Highlights */}
        <div className="rounded-3xl bg-white border-4 border-orange-500 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Checklist Column (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 bg-sky-50/20">
              <h3 className="text-lg font-black text-slate-950 uppercase tracking-wide mb-6">
                What's Included in Your Access:
              </h3>
              
              <div className="space-y-3">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="rounded-full p-1 bg-emerald-100 text-emerald-700 shrink-0 mt-0.5 border border-emerald-300">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing & Checkout Column (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-blue-700 via-blue-800 to-slate-950 text-white flex flex-col justify-between">
              <div>
                <div className="inline-block px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wider mb-4 shadow">
                  Lifetime Enrolment
                </div>

                {/* Struck-through Regular Price */}
                <div className="text-xs font-black uppercase text-slate-300 tracking-wider">
                  REGULAR PRICE:
                </div>
                <div className="text-2xl font-black text-red-400 line-through decoration-red-500 decoration-3 mb-3">
                  ₦15,000
                </div>

                {/* Current Price */}
                <div className="text-xs font-black uppercase text-amber-300 tracking-wider">
                  CURRENT PRICE:
                </div>
                <div className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                  ₦5,000
                </div>

                <div className="mt-3 space-y-1">
                  <div className="text-sm font-black uppercase text-white tracking-wide">
                    ONE-TIME PAYMENT
                  </div>
                  <div className="text-xs font-bold text-amber-300">
                    CURRENT PROMOTIONAL PRICE
                  </div>
                </div>
              </div>

              {/* Purchase Button in vibrant Orange & Red */}
              <div className="mt-8">
                <a
                  href={OFFICIAL_PURCHASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackMetaInitiateCheckout('Master Offer Section CTA')}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-red-600 via-orange-500 to-orange-600 text-white font-black text-sm sm:text-base shadow-2xl shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wide text-center"
                >
                  <span>👉 BUY NOW — GET INSTANT ACCESS</span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </a>

                <div className="mt-3 text-center">
                  <p className="text-xs text-sky-200 font-bold flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Secure checkout through Selar.</span>
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
