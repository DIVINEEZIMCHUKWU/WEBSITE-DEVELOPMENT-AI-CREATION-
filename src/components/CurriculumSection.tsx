import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  ArrowRight, 
  Globe, 
  ExternalLink,
  Flame,
  CreditCard,
  TrendingUp,
  Code,
  ShieldCheck
} from 'lucide-react';
import { OFFICIAL_PURCHASE_URL } from './Navbar';
import { trackMetaInitiateCheckout } from '../utils/metaPixel';

export default function CurriculumSection() {
  const [openModules, setOpenModules] = useState<Record<number, boolean>>({
    1: true,
    2: false,
    3: true, // Keep Module 3 open by default for immediate visibility of Admin Dashboards
    4: true, // Keep prominent
    5: false,
    6: false,
    7: false,
    8: false,
  });

  const toggleModule = (modId: number) => {
    setOpenModules(prev => ({ ...prev, [modId]: !prev[modId] }));
  };

  return (
    <section id="curriculum" className="py-20 lg:py-24 bg-sky-50/30 text-slate-900 relative border-b border-sky-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 border border-blue-300 text-blue-900 text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>EXACT 8-MODULE SYLLABUS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-950 leading-tight">
            WHAT YOU'LL ACTUALLY LEARN
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 font-semibold leading-relaxed">
            This isn't just a collection of prompts. You'll learn a practical workflow for taking a website from an idea to a functional, polished and deployable product.
          </p>
        </div>

        {/* 8 Elegant Accordion Modules */}
        <div className="space-y-4">
          
          {/* ================= MODULE 01 ================= */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white overflow-hidden transition-all shadow-sm hover:border-sky-400">
            <button
              onClick={() => toggleModule(1)}
              className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer bg-slate-50/60 hover:bg-sky-50/50 transition-colors"
            >
              <div className="flex items-start sm:items-center gap-4">
                <span className="shrink-0 w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-sm shadow">
                  01
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase">
                    MODULE 01 — BUILD PROFESSIONAL WEBSITES WITH AI
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium line-clamp-1 mt-0.5">
                    Learn the fundamental workflow for using AI to turn an idea into a functional modern website.
                  </p>
                </div>
              </div>
              <div className="p-2 text-slate-400 shrink-0">
                {openModules[1] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </button>

            {openModules[1] && (
              <div className="p-5 sm:p-6 pt-3 border-t border-slate-100 bg-white">
                <p className="text-sm text-slate-700 font-semibold mb-4">
                  “Learn the fundamental workflow for using AI to turn an idea into a functional modern website.”
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  {[
                    "Understanding AI-assisted website development",
                    "Setting up the necessary tools",
                    "Turning an idea into a website structure",
                    "Planning website pages",
                    "Creating website sections with AI",
                    "Building business websites",
                    "Building portfolio websites",
                    "Building landing pages",
                    "Creating responsive layouts",
                    "Creating functional website interfaces",
                    "Understanding basic frontend/backend concepts",
                    "Taking an AI-generated idea toward a real website"
                  ].map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 py-1">
                      <Check className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ================= MODULE 02 ================= */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white overflow-hidden transition-all shadow-sm hover:border-sky-400">
            <button
              onClick={() => toggleModule(2)}
              className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer bg-slate-50/60 hover:bg-sky-50/50 transition-colors"
            >
              <div className="flex items-start sm:items-center gap-4">
                <span className="shrink-0 w-11 h-11 rounded-xl bg-sky-600 text-white flex items-center justify-center font-black text-sm shadow">
                  02
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase">
                    MODULE 02 — MASTER AI PROMPTING &amp; WEBSITE REFINEMENT
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium line-clamp-1 mt-0.5">
                    Learn how to communicate with AI clearly and transform basic AI-generated websites into polished professional-looking websites.
                  </p>
                </div>
              </div>
              <div className="p-2 text-slate-400 shrink-0">
                {openModules[2] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </button>

            {openModules[2] && (
              <div className="p-5 sm:p-6 pt-3 border-t border-slate-100 bg-white space-y-4">
                <p className="text-sm text-slate-700 font-semibold">
                  “Learn how to communicate with AI clearly and transform basic AI-generated websites into polished professional-looking websites.”
                </p>

                {/* Module 2 Highlight Banner */}
                <div className="p-3.5 rounded-xl bg-orange-100 border border-orange-300 text-orange-900 font-black text-sm flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>“DON'T JUST GENERATE. LEARN HOW TO POLISH.”</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  {[
                    "Writing effective website prompts",
                    "Giving AI precise instructions",
                    "Structuring complex prompts",
                    "Controlling AI output",
                    "Breaking large tasks into smaller instructions",
                    "Correcting AI mistakes",
                    "Improving typography",
                    "Improving spacing",
                    "Improving colors",
                    "Improving buttons",
                    "Improving navigation",
                    "Improving responsiveness",
                    "Improving mobile design",
                    "Improving user experience",
                    "Removing the generic AI/template appearance",
                    "Polishing and refining AI-generated websites"
                  ].map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 py-1">
                      <Check className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ================= MODULE 03 ================= */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white overflow-hidden transition-all shadow-sm hover:border-sky-400">
            <button
              onClick={() => toggleModule(3)}
              className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer bg-slate-50/60 hover:bg-sky-50/50 transition-colors"
            >
              <div className="flex items-start sm:items-center gap-4">
                <span className="shrink-0 w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-sm shadow">
                  03
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase">
                      MODULE 03 — BUILD ADMIN DASHBOARD / ADMIN MANAGEMENT SYSTEM (FUNCTIONAL WEBSITES)
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wider shadow">
                      Admin Dashboard Included
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-bold line-clamp-1 mt-0.5">
                    Learn how to build Admin Dashboards &amp; Admin Management Systems to control your website, content, users, and database!
                  </p>
                </div>
              </div>
              <div className="p-2 text-slate-400 shrink-0">
                {openModules[3] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </button>

            {openModules[3] && (
              <div className="p-5 sm:p-6 pt-3 border-t border-slate-100 bg-white space-y-4">
                <p className="text-sm text-slate-700 font-semibold">
                  “Go beyond appearance and learn how to connect the systems that make websites actually work.”
                </p>

                {/* Admin Management System Highlight Callout */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>SPECIAL SECTION: HOW TO BUILD ADMIN DASHBOARD / ADMIN MANAGEMENT SYSTEM OF YOUR WEBSITE</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  {[
                    "HOW TO BUILD ADMIN DASHBOARD / ADMIN MANAGEMENT SYSTEM OF YOUR WEBSITE",
                    "Creating secure Admin login & authentication portals",
                    "Admin panel to update, edit and manage website content dynamically",
                    "Viewing and managing customer submissions, inquiries & leads",
                    "Connecting backend databases (SQL / NoSQL)",
                    "Connecting frontend to backend data flow",
                    "Creating and structuring database tables",
                    "Storing, retrieving and updating live information",
                    "Interactive forms & automated validation",
                    "User authentication, registration & login systems",
                    "Basic API connections & webhooks",
                    "Dynamic website functionality & data queries",
                    "Troubleshooting common backend & database errors"
                  ].map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 py-1">
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className={topic.includes("ADMIN") ? "font-bold text-slate-900" : ""}>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ================= MODULE 04 (VISUALLY PROMINENT) ================= */}
          <div className="rounded-3xl border-4 border-orange-500 bg-gradient-to-b from-orange-50/40 via-white to-sky-50/40 overflow-hidden shadow-xl">
            <button
              onClick={() => toggleModule(4)}
              className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer bg-gradient-to-r from-orange-500 to-amber-500 text-white transition-colors"
            >
              <div className="flex items-start sm:items-center gap-4">
                <span className="shrink-0 w-11 h-11 rounded-xl bg-white text-orange-600 flex items-center justify-center font-black text-sm shadow">
                  04
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-black text-white uppercase">
                      MODULE 04 — DOMAIN, HOSTING &amp; DEPLOYMENT
                    </h3>
                    <span className="hidden sm:inline-block px-2.5 py-0.5 text-[10px] font-black uppercase rounded bg-red-600 text-white shadow">
                      ₦450 &amp; ₦500 Secrets
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-100 font-medium line-clamp-1 mt-0.5">
                    Learn how to take the website you've built and actually put it online — including domain setup, free hosting, paid hosting, DNS and nameserver configuration.
                  </p>
                </div>
              </div>
              <div className="p-2 text-white shrink-0">
                {openModules[4] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </button>

            {openModules[4] && (
              <div className="p-5 sm:p-6 pt-4 space-y-6">
                <p className="text-sm text-slate-800 font-semibold">
                  “Learn how to take the website you've built and actually put it online — including domain setup, free hosting, paid hosting, DNS and nameserver configuration.”
                </p>

                {/* SPECIAL ATTENTION CALLOUTS inside Module 04 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Callout 1: ₦450 DOMAIN */}
                  <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-400 text-slate-900 shadow-sm">
                    <div className="text-xs font-black uppercase text-amber-700 tracking-wider mb-1">
                      Domain Secret
                    </div>
                    <div className="text-2xl font-black text-slate-900">
                      ₦450 DOMAIN?
                    </div>
                    <p className="mt-2 text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                      “YES — I SHOW YOU HOW I PURCHASED A CUSTOM DOMAIN FOR AS LOW AS <span className="text-2xl font-black text-orange-600 mx-1">₦450</span> FOR ONE YEAR IN THE TUTORIAL.”
                    </p>
                    <p className="mt-3 text-xs text-slate-600 font-medium">
                      Learn the process, where to look, how to compare offers and how to connect your domain to your website.
                    </p>
                    <p className="mt-2 text-[10px] text-slate-500 italic">
                      *Pricing shown in the tutorial depends on the provider, domain extension and promotional availability.
                    </p>
                  </div>

                  {/* Callout 2: ₦500 HOSTING */}
                  <div className="p-5 rounded-2xl bg-orange-50 border-2 border-orange-400 text-slate-900 shadow-sm">
                    <div className="text-xs font-black uppercase text-orange-700 tracking-wider mb-1">
                      Hosting Secret
                    </div>
                    <div className="text-2xl font-black text-slate-900">
                      ₦500 HOSTING?
                    </div>
                    <p className="mt-2 text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                      “THE TUTORIAL ALSO SHOWS YOU HOW I GOT A HOSTING PLAN FOR AS LOW AS <span className="text-2xl font-black text-red-600 mx-1">₦500</span>.”
                    </p>
                    <p className="mt-3 text-xs text-slate-600 font-medium">
                      Learn how to identify low-cost hosting offers, understand the hosting plan and connect your domain to your website.
                    </p>
                    <p className="mt-2 text-[10px] text-slate-500 italic">
                      *Pricing and promotional availability may vary by provider and billing period.
                    </p>
                  </div>
                </div>

                {/* Free Hosting Curiosity Section */}
                <div className="p-4 rounded-xl bg-sky-100 border border-sky-300">
                  <div className="font-black text-sm text-sky-950 uppercase flex items-center gap-2">
                    <Globe className="w-4 h-4 text-sky-700" />
                    <span>“WHY PAY FOR HOSTING IF YOU DON'T HAVE TO?”</span>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-700 font-semibold">
                    Learn the workflow for getting your website online using free hosting options where appropriate, including how to connect your project and deploy it.
                  </p>
                  <div className="mt-2 inline-block px-3 py-1 rounded bg-blue-600 text-white text-[11px] font-black uppercase tracking-wider shadow">
                    FREE HOSTING WORKFLOW
                  </div>
                  <p className="mt-2 text-xs text-slate-500 italic">
                    Note: Free hosting has limitations and isn't necessarily suitable for every project.
                  </p>
                </div>

                {/* Topics list for Module 4 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 font-medium pt-2">
                  {[
                    "What a domain is",
                    "What web hosting is",
                    "Domain vs hosting",
                    "How to find affordable custom domains",
                    "How to purchase a custom domain",
                    "Connecting a domain to your website",
                    "DNS configuration",
                    "A records",
                    "CNAME records",
                    "Nameservers",
                    "DNS propagation",
                    "SSL / HTTPS",
                    "Free hosting",
                    "Paid hosting",
                    "Uploading website files",
                    "Connecting domain to hosting",
                    "Deploying websites",
                    "Updating live websites",
                    "Troubleshooting hosting problems"
                  ].map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 py-1">
                      <Check className="w-4 h-4 text-orange-600 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ================= MODULE 05 ================= */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white overflow-hidden transition-all shadow-sm hover:border-sky-400">
            <button
              onClick={() => toggleModule(5)}
              className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer bg-slate-50/60 hover:bg-sky-50/50 transition-colors"
            >
              <div className="flex items-start sm:items-center gap-4">
                <span className="shrink-0 w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-sm shadow">
                  05
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase">
                    MODULE 05 — GITHUB &amp; VISUAL STUDIO CODE
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium line-clamp-1 mt-0.5">
                    Learn how to take control of your website projects, store them properly and work with them on your computer.
                  </p>
                </div>
              </div>
              <div className="p-2 text-slate-400 shrink-0">
                {openModules[5] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </button>

            {openModules[5] && (
              <div className="p-5 sm:p-6 pt-3 border-t border-slate-100 bg-white space-y-4">
                <p className="text-sm text-slate-700 font-semibold">
                  “Learn how to take control of your website projects, store them properly and work with them on your computer.”
                </p>

                {/* Visual Flow: WEBSITE ↓ GITHUB ↓ CLONE ↓ VISUAL STUDIO CODE ↓ EDIT ↓ TEST ↓ PUSH */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white">
                  <div className="text-xs font-black uppercase tracking-wider text-sky-400 mb-2">
                    Developer Workflow Architecture
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-black">
                    <span className="px-3 py-1 rounded bg-blue-600 text-white">WEBSITE</span>
                    <span className="text-orange-400 font-extrabold">→</span>
                    <span className="px-3 py-1 rounded bg-slate-800 text-sky-300 border border-slate-700">GITHUB</span>
                    <span className="text-orange-400 font-extrabold">→</span>
                    <span className="px-3 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">CLONE</span>
                    <span className="text-orange-400 font-extrabold">→</span>
                    <span className="px-3 py-1 rounded bg-blue-700 text-white">VS CODE</span>
                    <span className="text-orange-400 font-extrabold">→</span>
                    <span className="px-3 py-1 rounded bg-slate-800 text-slate-200">EDIT</span>
                    <span className="text-orange-400 font-extrabold">→</span>
                    <span className="px-3 py-1 rounded bg-orange-600 text-white">TEST</span>
                    <span className="text-orange-400 font-extrabold">→</span>
                    <span className="px-3 py-1 rounded bg-emerald-600 text-white">PUSH</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  {[
                    "What GitHub is",
                    "Creating a GitHub account",
                    "Creating repositories",
                    "Exporting website projects",
                    "Uploading projects to GitHub",
                    "Managing project files",
                    "Saving project versions",
                    "Pushing updates",
                    "Using GitHub as a project backup",
                    "Installing Visual Studio Code",
                    "Cloning GitHub repositories",
                    "Opening projects in VS Code",
                    "Editing website files locally",
                    "Testing projects locally",
                    "Pushing changes back to GitHub"
                  ].map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 py-1">
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ================= MODULE 06 ================= */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white overflow-hidden transition-all shadow-sm hover:border-sky-400">
            <button
              onClick={() => toggleModule(6)}
              className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer bg-slate-50/60 hover:bg-sky-50/50 transition-colors"
            >
              <div className="flex items-start sm:items-center gap-4">
                <span className="shrink-0 w-11 h-11 rounded-xl bg-red-600 text-white flex items-center justify-center font-black text-sm shadow">
                  06
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase">
                    MODULE 06 — DEBUGGING &amp; PROFESSIONAL WEBSITE POLISHING
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium line-clamp-1 mt-0.5">
                    Learn what to do when your website doesn't work as expected and how to bring the final result to a professional standard.
                  </p>
                </div>
              </div>
              <div className="p-2 text-slate-400 shrink-0">
                {openModules[6] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </button>

            {openModules[6] && (
              <div className="p-5 sm:p-6 pt-3 border-t border-slate-100 bg-white space-y-4">
                <p className="text-sm text-slate-700 font-semibold">
                  “Learn what to do when your website doesn't work as expected and how to bring the final result to a professional standard.”
                </p>

                {/* Large Statements */}
                <div className="p-4 rounded-xl bg-red-50 border-2 border-red-300 space-y-1.5">
                  <p className="text-sm sm:text-base font-black text-red-900 uppercase">
                    “AI WILL MAKE MISTAKES. LEARN HOW TO FIX THEM.”
                  </p>
                  <p className="text-xs sm:text-sm font-black text-red-800 uppercase">
                    “DON'T JUST BUILD IT. KNOW HOW TO FIX IT.”
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  {[
                    "Identifying website errors",
                    "Browser console",
                    "Understanding error messages",
                    "Broken buttons",
                    "Broken links",
                    "Layout problems",
                    "Mobile responsiveness problems",
                    "Missing images",
                    "Form problems",
                    "Database errors",
                    "API errors",
                    "Deployment errors",
                    "GitHub-related issues",
                    "Using AI to diagnose errors",
                    "Giving AI useful error information",
                    "Testing fixes",
                    "Avoiding destructive AI changes",
                    "Final website testing",
                    "Improving user experience",
                    "Final visual polish",
                    "Making the website feel professionally designed"
                  ].map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 py-1">
                      <Check className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ================= MODULE 07 ================= */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white overflow-hidden transition-all shadow-sm hover:border-sky-400">
            <button
              onClick={() => toggleModule(7)}
              className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer bg-slate-50/60 hover:bg-sky-50/50 transition-colors"
            >
              <div className="flex items-start sm:items-center gap-4">
                <span className="shrink-0 w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shadow">
                  07
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase">
                    MODULE 07 — PAYMENT GATEWAY INTEGRATION
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium line-clamp-1 mt-0.5">
                    Learn how payment systems can be integrated into websites so your projects can support real online transactions.
                  </p>
                </div>
              </div>
              <div className="p-2 text-slate-400 shrink-0">
                {openModules[7] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </button>

            {openModules[7] && (
              <div className="p-5 sm:p-6 pt-3 border-t border-slate-100 bg-white space-y-4">
                <p className="text-sm text-slate-700 font-semibold">
                  “Learn how payment systems can be integrated into websites so your projects can support real online transactions.”
                </p>

                {/* Payment Gateway Badges */}
                <div className="flex flex-wrap items-center gap-3 p-3.5 rounded-xl bg-sky-50 border border-sky-200">
                  <span className="text-xs font-black text-slate-700 uppercase">Covered Gateways:</span>
                  <span className="px-3.5 py-1 rounded-lg bg-sky-500 text-white font-black text-xs shadow-sm">
                    PAYSTACK
                  </span>
                  <span className="px-3.5 py-1 rounded-lg bg-orange-500 text-white font-black text-xs shadow-sm">
                    FLUTTERWAVE
                  </span>
                  <span className="px-3.5 py-1 rounded-lg bg-indigo-600 text-white font-black text-xs shadow-sm">
                    STRIPE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  {[
                    "Understanding payment gateways",
                    "Payment account setup",
                    "Payment buttons",
                    "Checkout workflows",
                    "Payment confirmation",
                    "Successful payment states",
                    "Failed payment states",
                    "Webhooks",
                    "API keys",
                    "Public vs secret keys",
                    "Environment variables",
                    "Protecting private credentials",
                    "Testing payments",
                    "Troubleshooting payment integration problems"
                  ].map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 py-1">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ================= MODULE 08 ================= */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white overflow-hidden transition-all shadow-sm hover:border-sky-400">
            <button
              onClick={() => toggleModule(8)}
              className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer bg-slate-50/60 hover:bg-sky-50/50 transition-colors"
            >
              <div className="flex items-start sm:items-center gap-4">
                <span className="shrink-0 w-11 h-11 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-sm shadow">
                  08
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase">
                    MODULE 08 — HOW TO MONETIZE AND MAKE MASSIVE MONEY FROM THIS SKILL
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium line-clamp-1 mt-0.5">
                    Discover practical ways to turn your AI-assisted website development skill into income...
                  </p>
                </div>
              </div>
              <div className="p-2 text-slate-400 shrink-0">
                {openModules[8] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </button>

            {openModules[8] && (
              <div className="p-5 sm:p-6 pt-3 border-t border-slate-100 bg-white space-y-4">
                <p className="text-sm text-slate-700 font-semibold leading-relaxed">
                  “Discover practical ways to turn your AI-assisted website development skill into income by creating websites, offering website services, finding clients and providing valuable digital solutions to businesses and individuals.”
                </p>

                {/* Curiosity Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md">
                  <div className="text-sm sm:text-base font-black uppercase text-white">
                    “LEARN HOW TO TURN THE SKILL INTO A SERVICE.”
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-orange-50 font-semibold">
                    Learn client acquisition frameworks, pricing your website builds, packaging maintenance contracts, and landing high-paying freelance gigs.
                  </p>
                  <p className="mt-3 text-[11px] text-amber-100 italic">
                    *Ethical Disclosure: We do not promise guaranteed income. Results vary based on effort, practice, client communication, and execution.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* CTA After Curriculum in bright Orange & Red */}
        <div className="mt-14 text-center">
          <a
            href={OFFICIAL_PURCHASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackMetaInitiateCheckout('Curriculum Section CTA')}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 via-orange-500 to-orange-600 text-white font-black text-base sm:text-lg shadow-xl shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wide"
          >
            <span>GET THE COMPLETE TRAINING</span>
            <ExternalLink className="w-4 h-4 opacity-90" />
          </a>
        </div>

      </div>
    </section>
  );
}
