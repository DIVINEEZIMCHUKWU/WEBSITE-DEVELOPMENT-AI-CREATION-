import React from 'react';
import { ExternalLink, Flame } from 'lucide-react';
import { trackMetaInitiateCheckout } from '../utils/metaPixel';

export const OFFICIAL_PURCHASE_URL = 'https://selar.com/aiwebsite';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-2">
        
        {/* SkillHive Media Agency Official Logo */}
        <a href="#top" className="flex items-center gap-2.5 sm:gap-3.5 group shrink min-w-0">
          <div className="relative flex items-center justify-center p-0.5 sm:p-1 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:scale-105 transition-transform shrink-0">
            <img
              src="https://i.ibb.co/XxdPx4JK/20260528-120300.png"
              alt="SkillHive Media Agency"
              className="h-9 sm:h-12 w-auto object-contain"
            />
          </div>
          <div className="min-w-0 truncate">
            <span className="text-xs sm:text-base md:text-lg font-black tracking-tight text-slate-900 uppercase block leading-none truncate">
              SkillHive Media Agency
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-sky-600 tracking-wide uppercase mt-0.5 sm:mt-1 block truncate">
              Official Course Portal
            </span>
          </div>
        </a>

        {/* Clean, spacious right side with high-converting CTA */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold">
            <Flame className="w-3.5 h-3.5 text-orange-600 fill-orange-500" />
            <span>Almost 700+ Students</span>
          </div>

          <a
            href={OFFICIAL_PURCHASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackMetaInitiateCheckout('Navbar Button')}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-orange-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all whitespace-nowrap"
          >
            <span>BUY NOW — ₦5,000</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </a>
        </div>

      </div>
    </header>
  );
}
