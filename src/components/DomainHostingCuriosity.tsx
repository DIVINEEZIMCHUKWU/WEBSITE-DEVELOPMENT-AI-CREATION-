import React from 'react';
import { Globe, Server, ArrowRight, CheckCircle2, Flame } from 'lucide-react';

export default function DomainHostingCuriosity() {
  return (
    <section id="domain-hosting" className="py-20 lg:py-28 bg-black text-white relative overflow-hidden border-b-2 border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-lg">
            <Flame className="w-4 h-4 fill-white" />
            <span>THE COST-SAVING REVELATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            WAIT... YOU CAN ACTUALLY LEARN THIS TOO?
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-white/80 font-semibold">
            Most people spend tens of thousands of naira just getting set up. Learn how to launch professionally on a shoestring budget.
          </p>
        </div>

        {/* Two Huge Cards: ₦450 DOMAIN and ₦500 HOSTING */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* CARD 1: ₦450 CUSTOM DOMAIN */}
          <div className="rounded-3xl bg-white text-black border-4 border-blue-600 p-5 sm:p-10 shadow-2xl relative flex flex-col justify-between group hover:scale-[1.01] transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1.5 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-wider">
                  CARD 1: DOMAIN BREAKTHROUGH
                </span>
                <Globe className="w-8 h-8 text-blue-600" />
              </div>

              {/* Huge ₦450 Price */}
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-orange-600 tracking-tight">
                ₦450
              </div>
              <div className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black mt-1">
                CUSTOM DOMAIN
              </div>

              <blockquote className="mt-5 text-base sm:text-lg font-bold text-black leading-relaxed border-l-4 border-orange-600 pl-4 py-1">
                “See how I purchased a custom domain for as low as ₦450 for one year in the tutorial.”
              </blockquote>

              <p className="mt-4 text-xs sm:text-sm text-black/70 leading-relaxed font-semibold">
                Step-by-step screen recording showing how to search, compare registrars, configure DNS, setup SSL, and bind the domain to your live website.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-black/10 flex items-center gap-2 text-xs text-blue-600 font-bold">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Full real-time video demonstration included</span>
            </div>
          </div>

          {/* CARD 2: ₦500 HOSTING */}
          <div className="rounded-3xl bg-white text-black border-4 border-orange-500 p-5 sm:p-10 shadow-2xl relative flex flex-col justify-between group hover:scale-[1.01] transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1.5 rounded-full bg-orange-600 text-white text-xs font-black uppercase tracking-wider">
                  CARD 2: HOSTING BREAKTHROUGH
                </span>
                <Server className="w-8 h-8 text-orange-600" />
              </div>

              {/* Huge ₦500 Price */}
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-orange-600 tracking-tight">
                ₦500
              </div>
              <div className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black mt-1">
                HOSTING
              </div>

              <blockquote className="mt-5 text-base sm:text-lg font-bold text-black leading-relaxed border-l-4 border-orange-600 pl-4 py-1">
                “See how I purchased a hosting plan for as low as ₦500 in the tutorial.”
              </blockquote>

              <p className="mt-4 text-xs sm:text-sm text-black/70 leading-relaxed font-semibold">
                Complete walkthrough on discovering ultra low-cost reliable server packages, deploying static &amp; dynamic files, and keeping running costs minimal.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-black/10 flex items-center gap-2 text-xs text-orange-600 font-bold">
              <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Live deployment &amp; server configuration walkthrough</span>
            </div>
          </div>

        </div>

        {/* Supporting statement & CTA */}
        <div className="max-w-3xl mx-auto text-center mt-12 space-y-4">
          <p className="text-lg sm:text-xl font-black text-white uppercase tracking-wide">
            “I'm not just telling you that it's possible: the actual process is demonstrated inside the training.”
          </p>
          <p className="text-xs text-white/70 max-w-xl mx-auto leading-relaxed font-medium">
            *Prices shown are based on the offers demonstrated in the tutorials. Provider pricing, promotions, domain extensions and renewal fees may vary.
          </p>

          {/* CTA: "SHOW ME HOW" */}
          <div className="pt-4">
            <a
              href="#checkout"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-black text-base sm:text-lg shadow-2xl shadow-orange-600/50 hover:scale-[1.03] active:scale-[0.98] transition-all uppercase tracking-wide cursor-pointer"
            >
              <span>SHOW ME HOW VIA PAYSTACK</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
