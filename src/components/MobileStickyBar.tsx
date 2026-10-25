import React, { useState, useEffect } from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { trackMetaInitiateCheckout } from '../utils/metaPixel';

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 220) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4 bg-white border-t-2 border-black/10 shadow-[0_-8px_25px_rgba(0,0,0,0.15)] transition-all transform animate-in slide-in-from-bottom duration-300">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left Side: Course Name + Price */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-black/5 border border-black/10 hidden xs:flex items-center justify-center shrink-0 text-orange-600">
            <Flame className="w-4 h-4 fill-orange-600" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-black text-black uppercase tracking-tight flex items-center gap-1.5">
              <span>AI WEBSITE COURSE</span>
              <span className="text-orange-600 font-black">: ₦5,000</span>
            </div>
            <p className="text-[10px] text-black/60 font-semibold hidden sm:block">
              8 Modules • Instant Paystack Access
            </p>
          </div>
        </div>

        {/* Right Side: CTA Button in bright Orange with Pulse */}
        <a
          href="#checkout"
          onClick={() => trackMetaInitiateCheckout('Mobile Sticky Bar')}
          className="animate-attention-pulse relative overflow-hidden inline-flex items-center justify-center gap-1.5 px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-black shadow-lg hover:scale-[1.03] active:scale-[0.97] transition-all uppercase tracking-wider shrink-0 cursor-pointer border border-white/20"
        >
          {/* Subtle shimmer sweep */}
          <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />

          <span className="relative z-10">BUY NOW</span>
          <ArrowRight className="w-3.5 h-3.5 relative z-10" />
        </a>

      </div>
    </div>
  );
}
