import React, { useState, useEffect } from 'react';
import { ExternalLink, Flame } from 'lucide-react';
import { OFFICIAL_PURCHASE_URL } from './Navbar';
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
    <div className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4 bg-white/95 backdrop-blur-md border-t-2 border-orange-500 shadow-[0_-8px_25px_rgba(0,0,0,0.15)] transition-all transform animate-in slide-in-from-bottom duration-300">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left Side: Course Name + Price */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-orange-100 border border-orange-300 hidden xs:flex items-center justify-center shrink-0 text-orange-600">
            <Flame className="w-4 h-4 fill-orange-500" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-tight flex items-center gap-1.5">
              <span>AI WEBSITE COURSE</span>
              <span className="text-orange-600 font-black">— ₦5,000</span>
            </div>
            <p className="text-[10px] text-slate-500 font-semibold hidden sm:block">
              8 Modules • Instant Selar Access
            </p>
          </div>
        </div>

        {/* Right Side: CTA Button in bright Red & Orange */}
        <a
          href={OFFICIAL_PURCHASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackMetaInitiateCheckout('Mobile Sticky Bottom Bar')}
          className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs sm:text-sm font-black shadow-lg shadow-orange-500/30 hover:scale-[1.03] active:scale-[0.97] transition-all uppercase tracking-wider shrink-0"
        >
          <span>BUY NOW</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

      </div>
    </div>
  );
}
