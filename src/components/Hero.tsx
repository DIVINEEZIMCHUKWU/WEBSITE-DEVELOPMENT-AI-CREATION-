import React from 'react';
import { 
  CheckCircle2, 
  Flame, 
  ArrowRight, 
  ShieldCheck, 
  Smartphone, 
  Volume2,
  Globe
} from 'lucide-react';
import VideoProofPlayer from './VideoProofPlayer';
import { trackMetaInitiateCheckout } from '../utils/metaPixel';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-6 pb-16 lg:pt-10 lg:pb-24 border-b-2 border-black/10 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges: Credibility + Smartphone / Android Focus */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-orange-600 text-white text-xs sm:text-sm font-black shadow-md tracking-wide uppercase">
            <Flame className="w-4 h-4 fill-white shrink-0" />
            <span>ALMOST 700+ STUDENTS TRAINED</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-black shadow-md tracking-wide uppercase">
            <Smartphone className="w-4 h-4 shrink-0" />
            <span>100% SMARTPHONE &amp; ANDROID FRIENDLY</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[48px] font-black uppercase tracking-tight text-black leading-[1.2] break-words">
            HOW TO BUILD <span className="text-blue-600">FULLY FUNCTIONAL &amp; PROFESSIONAL WEBSITES</span> WITH FREE AI TOOLS WITHOUT WRITING ANY SINGLE LINE OF CODE OR HIRING ANY WEB DEVELOPER
          </h1>

          {/* Under Headline Subcopy explicitly highlighting Smartphones */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-black/80 font-medium leading-relaxed max-w-3xl mx-auto px-2">
            A practical, step-by-step training that shows you how to use AI to build, refine, connect, host and launch real modern websites: <span className="font-extrabold text-blue-600 bg-black/5 px-2 py-0.5 rounded">even if you only have a smartphone (Android or iPhone)</span> and zero coding experience!
          </p>

          {/* Smartphone User Callout Banner */}
          <div className="mt-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border-2 border-blue-600 max-w-3xl mx-auto shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm font-bold text-black text-center sm:text-left">
              <span className="p-1 rounded-md bg-blue-600 text-white shrink-0">
                <Smartphone className="w-4 h-4" />
              </span>
              <span>
                <strong className="text-blue-600 font-black">NO LAPTOP NEEDED:</strong> You can build, customize, buy your ₦450 domain, connect your ₦500 hosting, and launch directly using your Android or smartphone!
              </span>
            </div>
          </div>

          {/* Workflow Teaser Line */}
          <div className="mt-4 p-3 rounded-2xl bg-black/5 border border-black/10 max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm md:text-base text-black font-semibold leading-relaxed">
              <span className="text-blue-600 font-black">Learn the workflow from</span> idea <span className="text-orange-600 font-black">→</span> website <span className="text-orange-600 font-black">→</span> professional refinement <span className="text-orange-600 font-black">→</span> hosting <span className="text-orange-600 font-black">→</span> deployment <span className="text-orange-600 font-black">→</span> payment integration <span className="text-orange-600 font-black">→</span> monetization.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm text-black font-bold">
            <div className="flex items-center gap-1.5 bg-black/5 text-black px-3 py-1.5 rounded-full border border-black/10">
              <Smartphone className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Smartphone &amp; Android Friendly</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/5 text-black px-3 py-1.5 rounded-full border border-black/10">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Beginner Friendly</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/5 text-black px-3 py-1.5 rounded-full border border-black/10">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Self-Paced</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/5 text-black px-3 py-1.5 rounded-full border border-black/10">
              <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Practical Training</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/5 text-black px-3 py-1.5 rounded-full border border-black/10">
              <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
              <span>WhatsApp Mentorship Support</span>
            </div>
          </div>

          {/* 
            SEE STUDENTS PROJECTS ANIMATED HOVERING BUTTON (EVIDENCE & CREDIBILITY)
            Continuous floating animation, morphism glass vibes, glowing live indicator
          */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xl mx-auto">
            <a
              href="#student-websites"
              className="animate-float-hover group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-4 py-3.5 sm:px-8 sm:py-4.5 rounded-2xl morphism-glass-dark hover:bg-black text-white font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-orange-500 shadow-[0_10px_30px_rgba(234,88,12,0.35)] hover:shadow-[0_16px_45px_rgba(234,88,12,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden text-center"
            >
              {/* Shimmer light sweep */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />

              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-80"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              <span className="tracking-wide">👀 SEE STUDENTS PROJECTS</span>
              <span className="px-2 py-0.5 rounded-md bg-orange-600 text-white text-[10px] font-black uppercase tracking-wider shrink-0">
                15+ LIVE SITES
              </span>
              <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1.5 transition-transform shrink-0" />
            </a>

            <a
              href="#student-proof"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-2.5 px-4 py-3.5 sm:px-6 sm:py-4 rounded-2xl morphism-glass hover:bg-white text-black font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-blue-600 shadow-[0_8px_25px_rgba(37,99,235,0.15)] hover:shadow-[0_14px_35px_rgba(37,99,235,0.25)] hover:scale-103 active:scale-97 transition-all duration-300 cursor-pointer text-center"
            >
              <Globe className="w-4 h-4 text-blue-600 shrink-0" />
              <span>VIEW 100+ STUDENT SCREENSHOTS</span>
            </a>
          </div>
        </div>

        {/* Hero Visual & Bold Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
          
          {/* Hero Visual Area (7 cols on lg) */}
          <div className="lg:col-span-7 relative">
            
            {/* Visual Process Bar */}
            <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 mb-4 overflow-x-auto pb-1 text-[11px] sm:text-xs font-black uppercase tracking-wider">
              <span className="px-2.5 py-1 rounded-lg bg-blue-600 text-white shadow-sm shrink-0">IDEA</span>
              <span className="text-orange-600 font-extrabold text-sm shrink-0">→</span>
              <span className="px-2.5 py-1 rounded-lg bg-blue-600 text-white shadow-sm shrink-0">AI PROMPT</span>
              <span className="text-orange-600 font-extrabold text-sm shrink-0">→</span>
              <span className="px-2.5 py-1 rounded-lg bg-orange-600 text-white shadow-sm shrink-0">POLISH</span>
              <span className="text-orange-600 font-extrabold text-sm shrink-0">→</span>
              <span className="px-2.5 py-1 rounded-lg bg-orange-600 text-white shadow-sm shrink-0">LIVE WEBSITE</span>
            </div>

            {/* REAL STUDENT VIDEO PROOF WITH MORPHISM VIBES */}
            <div className="mb-6 rounded-3xl bg-black/95 backdrop-blur-xl p-3 sm:p-4 border-4 border-orange-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative">
              {/* Video Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10 text-white">
                <div className="flex items-center gap-2">
                  <div className="relative flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping absolute"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 relative"></span>
                  </div>
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-orange-400">
                    REAL STUDENT VIDEO PROOF
                  </span>
                </div>
                
                <a
                  href="#student-websites"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[11px] font-bold text-white transition-all hover:scale-105"
                >
                  <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>See Live Websites &gt;</span>
                </a>
              </div>

              {/* Video Title & Explanation */}
              <div className="mb-3">
                <h3 className="text-sm sm:text-base md:text-lg font-black text-white leading-tight uppercase">
                  FULL FUNCTIONAL SCHOOL MANAGEMENT SYSTEM
                </h3>
                <p className="text-[11px] sm:text-xs text-white/80 font-medium mt-1">
                  See what our students build: Complete database, student admission portal, teacher dashboard, attendance &amp; grading system: built with free AI tools without writing any code!
                </p>
              </div>

              {/* 16:9 Wide Responsive Video Player Frame */}
              <VideoProofPlayer />

              {/* Quick Feature Badges Under Video */}
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px] sm:text-[11px] font-bold text-white pt-1">
                <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />
                  <span className="truncate">Student Database</span>
                </div>
                <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />
                  <span className="truncate">Admin Dashboard</span>
                </div>
                <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-3 h-3 text-orange-400 shrink-0" />
                  <span className="truncate">Grading System</span>
                </div>
                <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-3 h-3 text-orange-400 shrink-0" />
                  <span className="truncate">Admission Portal</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bold High-Converting Pricing Card (5 cols on lg) with Morphism Vibes */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-black/95 backdrop-blur-2xl text-white p-6 sm:p-8 border-4 border-blue-600 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
              
              {/* Top Banner Tag */}
              <div className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white font-black text-[11px] sm:text-xs tracking-wider uppercase mb-4 shadow">
                🔥 SPECIAL ₦5,000 OFFER
              </div>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-tight">
                WEBSITE DEVELOPMENT AI CREATION COURSE
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
                Complete practical training with self-paced video modules, smartphone-friendly setups, ₦450 domain &amp; ₦500 hosting guides, plus direct WhatsApp mentorship community support.
              </p>

              {/* Price Callout */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-bold text-white/60 line-through">
                    ORIGINAL PRICE: ₦20,000
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

              <div className="mt-3 space-y-1 text-xs text-white/80">
                <div className="font-black text-white tracking-wide uppercase text-sm">
                  ONE-TIME PAYMENT
                </div>
                <div className="font-bold text-orange-400">
                  CURRENT PROMOTIONAL PRICE
                </div>
                <div className="text-[11px] text-white/60 italic">
                  *Promotional pricing may change at any time.
                </div>
              </div>

              {/* Primary Call to Action Button: Scrolls to #checkout with animation */}
              <div className="mt-6">
                <a
                  href="#checkout"
                  onClick={() => trackMetaInitiateCheckout('Hero Pricing Card')}
                  className="animate-attention-pulse relative overflow-hidden w-full inline-flex items-center justify-center gap-2 sm:gap-3 px-5 py-4.5 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-black text-sm sm:text-base md:text-lg shadow-[0_12px_30px_rgba(234,88,12,0.5)] hover:shadow-[0_18px_45px_rgba(234,88,12,0.7)] hover:scale-[1.03] active:scale-[0.98] transition-all uppercase tracking-wider text-center cursor-pointer border border-white/20"
                >
                  {/* Subtle glass shimmer sweep */}
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                  <span className="relative z-10">👉 BUY NOW: GET INSTANT ACCESS</span>
                  <ArrowRight className="w-5 h-5 shrink-0 relative z-10" />
                </a>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-white/80 font-bold">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Secure on-page Paystack checkout.</span>
                </div>
              </div>

              {/* Perks summary */}
              <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5 text-xs text-white/90 font-medium">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-white font-bold">100% Smartphone &amp; Android Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Instant access to all 8 comprehensive modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Step-by-step ₦450 domain &amp; ₦500 hosting guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-white font-bold">Direct WhatsApp mentorship community</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
