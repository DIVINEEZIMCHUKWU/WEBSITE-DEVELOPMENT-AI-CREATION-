import React from 'react';
import { 
  CheckCircle2, 
  Flame, 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  Smartphone, 
  Laptop,
  ExternalLink,
  Sparkles,
  Volume2,
  Play
} from 'lucide-react';
import { OFFICIAL_PURCHASE_URL } from './Navbar';
import { trackMetaInitiateCheckout } from '../utils/metaPixel';
import VideoProofPlayer from './VideoProofPlayer';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-blue-50/40 pt-6 pb-16 lg:pt-10 lg:pb-24 border-b border-sky-100">
      
      {/* Decorative bright color glow spots */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-r from-sky-400/20 via-orange-300/15 to-blue-400/20 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges: Credibility + Smartphone / Android Focus */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white text-xs sm:text-sm font-black shadow-md shadow-orange-500/25 tracking-wide uppercase">
            <Flame className="w-4 h-4 fill-white shrink-0" />
            <span>ALMOST 700+ STUDENTS TRAINED</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-emerald-600 text-white text-xs sm:text-sm font-black shadow-md shadow-emerald-600/25 tracking-wide uppercase animate-bounce">
            <Smartphone className="w-4 h-4 shrink-0" />
            <span>100% SMARTPHONE &amp; ANDROID FRIENDLY</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[50px] font-black uppercase tracking-tight text-slate-950 leading-[1.2] break-words">
            HOW TO BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-orange-600">FULLY FUNCTIONAL &amp; PROFESSIONAL WEBSITES</span> WITH FREE AI TOOLS WITHOUT WRITING ANY SINGLE LINE OF CODE OR HIRING ANY WEB DEVELOPER
          </h1>

          {/* Under Headline Subcopy explicitly highlighting Smartphones */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto px-2">
            A practical, step-by-step training that shows you how to use AI to build, refine, connect, host and launch real modern websites — <span className="font-extrabold text-blue-700 bg-sky-100 px-2 py-0.5 rounded">even if you only have a smartphone (Android or iPhone)</span> and zero coding experience!
          </p>

          {/* Smartphone User Callout Banner */}
          <div className="mt-4 p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 via-sky-50 to-orange-50 border-2 border-emerald-400 max-w-3xl mx-auto shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-900 text-center sm:text-left">
              <span className="p-1 rounded-md bg-emerald-600 text-white shrink-0">
                <Smartphone className="w-4 h-4" />
              </span>
              <span>
                <strong className="text-emerald-700 font-black">NO LAPTOP NEEDED:</strong> You can build, customize, buy your ₦450 domain, connect your ₦500 hosting, and launch directly using your Android or smartphone!
              </span>
            </div>
          </div>

          {/* Workflow Teaser Line */}
          <div className="mt-4 p-3 rounded-2xl bg-white border border-sky-200 shadow-sm max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
              <span className="text-blue-700 font-black">Learn the workflow from</span> idea <span className="text-orange-500 font-black">→</span> website <span className="text-orange-500 font-black">→</span> professional refinement <span className="text-orange-500 font-black">→</span> hosting <span className="text-orange-500 font-black">→</span> deployment <span className="text-orange-500 font-black">→</span> payment integration <span className="text-orange-500 font-black">→</span> monetization.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-800 font-bold">
            <div className="flex items-center gap-1.5 bg-emerald-100/90 text-emerald-900 px-3 py-1.5 rounded-full border border-emerald-300">
              <Smartphone className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Smartphone &amp; Android Friendly</span>
            </div>
            <div className="flex items-center gap-1.5 bg-sky-100/70 text-sky-900 px-3 py-1.5 rounded-full border border-sky-200">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Beginner Friendly</span>
            </div>
            <div className="flex items-center gap-1.5 bg-blue-100/70 text-blue-900 px-3 py-1.5 rounded-full border border-blue-200">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Self-Paced</span>
            </div>
            <div className="flex items-center gap-1.5 bg-amber-100/70 text-amber-900 px-3 py-1.5 rounded-full border border-amber-200">
              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Practical Training</span>
            </div>
            <div className="flex items-center gap-1.5 bg-orange-100/70 text-orange-900 px-3 py-1.5 rounded-full border border-orange-200">
              <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
              <span>WhatsApp Mentorship Support</span>
            </div>
          </div>
        </div>

        {/* Hero Visual & Bold Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
          
          {/* Hero Visual Area (7 cols on lg) */}
          <div className="lg:col-span-7 relative">
            
            {/* Visual Process Bar */}
            <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 mb-4 overflow-x-auto pb-1 text-[11px] sm:text-xs font-black uppercase tracking-wider">
              <span className="px-2.5 py-1 rounded-lg bg-blue-600 text-white shadow-sm shrink-0">IDEA</span>
              <span className="text-orange-500 font-extrabold text-sm shrink-0">→</span>
              <span className="px-2.5 py-1 rounded-lg bg-sky-500 text-white shadow-sm shrink-0">AI PROMPT</span>
              <span className="text-orange-500 font-extrabold text-sm shrink-0">→</span>
              <span className="px-2.5 py-1 rounded-lg bg-orange-500 text-white shadow-sm shrink-0">POLISH</span>
              <span className="text-orange-500 font-extrabold text-sm shrink-0">→</span>
              <span className="px-2.5 py-1 rounded-lg bg-red-600 text-white shadow-sm shrink-0">LIVE WEBSITE</span>
            </div>

            {/* REAL STUDENT VIDEO PROOF: FUNCTIONAL SCHOOL MANAGEMENT SYSTEM */}
            <div className="mb-6 rounded-3xl bg-slate-950 p-3 sm:p-4 border-4 border-orange-500 shadow-2xl overflow-hidden relative">
              {/* Video Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800 text-white">
                <div className="flex items-center gap-2">
                  <div className="relative flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping absolute"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 relative"></span>
                  </div>
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-300">
                    REAL STUDENT VIDEO PROOF
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-[11px] font-bold text-orange-300">
                  <Volume2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span>Watch With Voice / Sound</span>
                </div>
              </div>

              {/* Video Title & Explanation */}
              <div className="mb-3">
                <h3 className="text-sm sm:text-base md:text-lg font-black text-white leading-tight uppercase">
                  FULL FUNCTIONAL SCHOOL MANAGEMENT SYSTEM
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 font-medium mt-1">
                  See what our students build: Complete database, student admission portal, teacher dashboard, attendance &amp; grading system — built with free AI tools without writing any code!
                </p>
              </div>

              {/* 16:9 Wide Responsive Video Player Frame - Native HTML5 Player with Zero Redirects */}
              <VideoProofPlayer />

              {/* Quick Feature Badges Under Video */}
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px] sm:text-[11px] font-bold text-slate-300 pt-1">
                <div className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">Student Database</span>
                </div>
                <div className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
                  <span className="truncate">Admin Dashboard</span>
                </div>
                <div className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="truncate">Grading System</span>
                </div>
                <div className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-3 h-3 text-orange-400 shrink-0" />
                  <span className="truncate">No Code Required</span>
                </div>
              </div>
            </div>

            {/* Side-by-Side Dual Device Visual (Laptop + Mobile Phone) */}
            <div className="relative">
              
              {/* Main Desktop/Tablet Browser Mockup */}
              <div className="rounded-3xl bg-slate-900 p-3 sm:p-4 shadow-2xl border-4 border-sky-400">
                <div className="bg-slate-800 rounded-t-xl px-3 py-2 flex items-center justify-between border-b border-slate-700">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 text-slate-300 font-mono text-[11px] border border-slate-700 truncate max-w-[200px] sm:max-w-none">
                    <Globe className="w-3 h-3 text-sky-400 shrink-0" />
                    <span>https://yourbrand.com.ng</span>
                  </div>
                  <div className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40 hidden sm:block">
                    Live Online
                  </div>
                </div>

                {/* Inside Screen Content */}
                <div className="bg-white rounded-b-xl overflow-hidden p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="font-black text-slate-900 text-xs sm:text-sm">Client Business Portal</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">
                      Mobile &amp; PC Ready
                    </span>
                  </div>

                  <div className="bg-gradient-to-r from-sky-50 via-blue-50 to-orange-50 rounded-xl p-3.5 border border-sky-100">
                    <span className="px-2 py-0.5 rounded bg-red-600 text-white text-[10px] font-black uppercase">
                      Android &amp; Laptop Supported
                    </span>
                    <h4 className="text-sm sm:text-base font-black text-slate-900 mt-1 leading-tight">
                      Build, Edit, Host &amp; Connect Payments All From Your Phone
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-1">
                      No high-end laptop needed. Run the full workflow right from your smartphone browser.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center pt-1">
                    <div className="p-2 rounded-lg bg-sky-50 border border-sky-200">
                      <div className="text-[11px] font-black text-sky-700">Custom Domain</div>
                      <div className="text-[10px] font-bold text-slate-600">₦450 Video</div>
                    </div>
                    <div className="p-2 rounded-lg bg-orange-50 border border-orange-200">
                      <div className="text-[11px] font-black text-orange-700">Web Hosting</div>
                      <div className="text-[10px] font-bold text-slate-600">₦500 Video</div>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200">
                      <div className="text-[11px] font-black text-emerald-700">Online Payments</div>
                      <div className="text-[10px] font-bold text-slate-600">Paystack Setup</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mobile Phone Frame to visually emphasize Smartphone users */}
              <div className="hidden sm:block absolute -bottom-5 -right-3 w-40 sm:w-48 bg-slate-950 p-2 rounded-3xl border-4 border-emerald-400 shadow-2xl">
                <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-1.5"></div>
                <div className="bg-white rounded-2xl p-2.5 text-center text-slate-900">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-1">
                    <Smartphone className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-[10px] font-black uppercase text-emerald-700 leading-tight">
                    Android Compatible
                  </p>
                  <p className="text-[9px] text-slate-600 font-bold mt-0.5">
                    Build &amp; host 100% on phone
                  </p>
                </div>
              </div>

            </div>

            {/* Mobile Tag pill list */}
            <div className="flex flex-wrap gap-1.5 justify-center mt-4">
              {['SMARTPHONE / ANDROID', 'NO LAPTOP MANDATORY', '₦450 DOMAIN', '₦500 HOSTING', 'PAYSTACK PAYMENTS', 'DEPLOYMENT'].map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-[10px] sm:text-xs font-black rounded-lg bg-sky-100 text-sky-900 border border-sky-300">
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* Pricing In Hero Card (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border-4 border-orange-500 p-6 sm:p-8 shadow-2xl relative text-white">
              
              <div className="inline-block px-3.5 py-1 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wider mb-4 shadow">
                Special Launch Discount
              </div>

              {/* Price Details */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">
                    REGULAR PRICE:
                  </span>
                  <span className="text-xl font-black text-red-400 line-through decoration-red-500 decoration-3">
                    ₦15,000
                  </span>
                </div>

                <div className="text-xs uppercase font-black text-orange-400 tracking-wider pt-2">
                  NOW ONLY
                </div>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
                    ₦5,000
                  </span>
                </div>
              </div>

              <div className="mt-3 space-y-1 text-xs text-slate-300">
                <div className="font-black text-white tracking-wide uppercase text-sm">
                  ONE-TIME PAYMENT
                </div>
                <div className="font-bold text-amber-300">
                  CURRENT PROMOTIONAL PRICE
                </div>
                <div className="text-[11px] text-orange-300/90 italic">
                  *Promotional pricing may change at any time.
                </div>
              </div>

              {/* Primary Call to Action Button */}
              <div className="mt-6">
                <a
                  href={OFFICIAL_PURCHASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackMetaInitiateCheckout('Hero Pricing Card')}
                  className="w-full inline-flex items-center justify-center gap-2 sm:gap-3 px-5 py-4 rounded-2xl bg-gradient-to-r from-red-600 via-orange-500 to-orange-600 text-white font-black text-sm sm:text-base md:text-lg shadow-xl shadow-orange-500/40 hover:shadow-orange-500/70 hover:scale-[1.02] active:scale-[0.98] transition-all animate-attention-pulse uppercase tracking-wider text-center"
                >
                  <span>👉 BUY NOW — GET INSTANT ACCESS</span>
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </a>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-300 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Secure checkout through Selar.</span>
                </div>
              </div>

              {/* Perks summary */}
              <div className="mt-6 pt-5 border-t border-slate-800 space-y-2.5 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-emerald-300 font-bold">100% Smartphone &amp; Android Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Instant access to all 8 comprehensive modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Step-by-step ₦450 domain &amp; ₦500 hosting guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-emerald-300 font-bold">Direct WhatsApp mentorship community</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
