import React from 'react';
import { 
  Flame, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { OFFICIAL_PURCHASE_URL } from './Navbar';
import { trackMetaInitiateCheckout } from '../utils/metaPixel';

export default function FinalSalesSection() {
  const learningPillars = [
    "Learn how to build.",
    "Learn how to polish.",
    "Learn how to connect.",
    "Learn how to host.",
    "Learn how to deploy.",
    "Learn how to debug.",
    "Learn how to integrate payments.",
    "And learn how to monetize the skill.",
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-700 via-sky-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-400/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Mini Pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500 text-white text-xs sm:text-sm font-black uppercase tracking-wider mb-6 shadow-md">
          <Flame className="w-4 h-4 fill-white" />
          <span>YOUR DIGITAL SKILL TRANSFORMATION</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          READY TO START BUILDING WITH AI?
        </h2>

        {/* Lead Copy */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-sky-100 font-semibold max-w-2xl mx-auto leading-relaxed">
          “You don't need to wait until you're an expert programmer before you start learning how modern websites can be built with AI.”
        </p>

        {/* The 8 Transformational Statements */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-4xl mx-auto text-left">
          {learningPillars.map((text, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-bold flex items-center gap-2.5 shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Pricing Box in bright contrast */}
        <div className="mt-14 max-w-lg mx-auto rounded-3xl bg-slate-950 border-4 border-orange-500 p-8 sm:p-10 shadow-2xl relative text-white">
          
          <div className="text-xs font-black uppercase tracking-wider text-slate-400">
            REGULAR:
          </div>
          <div className="text-2xl font-black text-red-400 line-through decoration-red-500 decoration-3">
            ₦15,000
          </div>

          <div className="text-sm font-black uppercase text-orange-400 tracking-wider mt-3">
            NOW:
          </div>
          <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
            ₦5,000
          </div>

          <div className="mt-2 text-sm font-bold uppercase text-slate-300 tracking-wider">
            “ONE-TIME PAYMENT”
          </div>

          {/* Master CTA Button */}
          <div className="mt-8">
            <a
              href={OFFICIAL_PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackMetaInitiateCheckout('Final Section Pricing Box CTA')}
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-red-600 via-orange-500 to-orange-600 text-white font-black text-base sm:text-lg shadow-2xl shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wider animate-attention-pulse text-center"
            >
              <span>👉 BUY NOW — GET INSTANT ACCESS</span>
              <ExternalLink className="w-5 h-5 shrink-0" />
            </a>

            <div className="mt-4 space-y-1">
              <p className="text-xs text-slate-300 font-bold flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Secure checkout through Selar.</span>
              </p>
              <p className="text-[11px] text-amber-300/90 italic font-semibold">
                “Promotional pricing may change.”
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
