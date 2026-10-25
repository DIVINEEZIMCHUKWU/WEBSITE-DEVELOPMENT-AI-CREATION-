import React from 'react';
import { ShieldCheck, Flame, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-24 sm:pb-20 border-t-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Banner */}
        <div className="pb-12 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
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

            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-blue-400 mt-1">
              “BUILD. POLISH. DEPLOY. MONETIZE.”
            </p>

            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-orange-400">
              <Flame className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
              <span>Almost 700+ students trained.</span>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="text-center md:text-right">
            <a
              href="#checkout"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-black text-sm shadow-xl shadow-orange-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wide cursor-pointer"
            >
              <span>GET THE COURSE FOR ₦5,000</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="mt-2 text-[11px] text-white/60 font-semibold">
              Secure on-page Paystack checkout with instant WhatsApp onboarding.
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="py-8 flex flex-wrap items-center justify-between gap-4 text-xs font-bold uppercase tracking-wider text-white/60">
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
            <a href="#top" className="hover:text-white transition-colors">Course</a>
            <a href="#curriculum" className="hover:text-white transition-colors">Curriculum</a>
            <a href="#student-proof" className="hover:text-white transition-colors">Student Proof</a>
            <a href="#student-websites" className="hover:text-white transition-colors">Live Websites</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a 
              href="#checkout"
              className="text-orange-400 hover:text-orange-300 font-black transition-colors"
            >
              Buy Now
            </a>
          </nav>

          <div className="flex items-center gap-2 text-white/60 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Secure 256-Bit SSL Encrypted Purchase</span>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40 font-medium">
          <p>
            © 2026 AI Website Development Creation Course • SkillHive Media Agency. All Rights Reserved.
          </p>
          <p className="text-[11px] text-white/40 font-semibold">
            Official Course Enrollment: Instant WhatsApp Onboarding
          </p>
        </div>

      </div>
    </footer>
  );
}
