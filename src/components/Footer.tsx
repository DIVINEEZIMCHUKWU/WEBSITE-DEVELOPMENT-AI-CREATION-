import React from 'react';
import { ShieldCheck, Flame, ExternalLink } from 'lucide-react';
import { OFFICIAL_PURCHASE_URL } from './Navbar';
import { trackMetaInitiateCheckout } from '../utils/metaPixel';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-24 sm:pb-20 border-t-2 border-sky-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Banner */}
        <div className="pb-12 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-1 bg-white rounded-lg shadow">
                <img
                  src="https://i.ibb.co/XxdPx4JK/20260528-120300.png"
                  alt="SkillHive Media Agency"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <span className="text-base sm:text-lg font-black tracking-tight text-white uppercase">
                SkillHive Media Agency
              </span>
            </div>

            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-sky-400 mt-1">
              “BUILD. POLISH. DEPLOY. MONETIZE.”
            </p>

            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-bold text-amber-300">
              <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-400" />
              <span>Almost 700+ students trained.</span>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="text-center md:text-right">
            <a
              href={OFFICIAL_PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackMetaInitiateCheckout('Footer CTA')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-orange-500 to-orange-600 text-white font-black text-sm shadow-xl shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wide"
            >
              <span>GET THE COURSE FOR ₦5,000</span>
              <ExternalLink className="w-4 h-4 opacity-90" />
            </a>
            <div className="mt-2 text-[11px] text-slate-400 font-semibold">
              Official checkout: <span className="text-sky-300 font-bold">selar.com/aiwebsite</span>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="py-8 flex flex-wrap items-center justify-between gap-4 text-xs font-bold uppercase tracking-wider text-slate-400">
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
            <a href="#top" className="hover:text-white transition-colors">Course</a>
            <a href="#curriculum" className="hover:text-white transition-colors">Curriculum</a>
            <a href="#student-proof" className="hover:text-white transition-colors">Student Proof</a>
            <a href="#student-websites" className="hover:text-white transition-colors">Live Websites</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a 
              href={OFFICIAL_PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-orange-400 hover:text-orange-300 font-black transition-colors"
            >
              Buy Now
            </a>
          </nav>

          <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Secure 256-Bit SSL Encrypted Purchase</span>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <p>
            © 2026 AI Website Development Creation Course • SkillHive Media Agency. All Rights Reserved.
          </p>
          <p className="text-[11px] text-slate-500 font-semibold">
            Official Course URL: https://selar.com/aiwebsite
          </p>
        </div>

      </div>
    </footer>
  );
}
