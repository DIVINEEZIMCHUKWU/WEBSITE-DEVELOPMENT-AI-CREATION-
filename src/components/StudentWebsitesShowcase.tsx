import React, { useState } from 'react';
import { ExternalLink, Globe, ArrowRight } from 'lucide-react';

interface StudentSite {
  name: string;
  url: string;
  category: string;
  categoryTag: 'HEALTH' | 'EDUCATION' | 'LOGISTICS' | 'BUSINESS' | 'NGO' | 'COMMERCE';
  desc: string;
  badgeColor: string;
}

const STUDENT_WEBSITES: StudentSite[] = [
  {
    name: 'Glozen',
    url: 'https://glozen.vercel.app',
    category: 'E-Commerce & Digital Store',
    categoryTag: 'COMMERCE',
    desc: 'Clean, modern digital storefront with product collections, responsive catalog, and direct customer ordering.',
    badgeColor: 'bg-blue-600 text-white border-blue-600',
  },
  {
    name: "El's Delight Treats",
    url: 'https://elsdelighttreats.vercel.app',
    category: 'Confectionery & Food Treats',
    categoryTag: 'COMMERCE',
    desc: 'Mouth-watering confectionery showcase with custom pastry orders, festive packages, and treat menus.',
    badgeColor: 'bg-orange-600 text-white border-orange-600',
  },
  {
    name: 'Henrand Nig',
    url: 'https://www.henrandnig.com',
    category: 'Engineering & Enterprise',
    categoryTag: 'BUSINESS',
    desc: 'High-level engineering, procurement, industrial project management, and corporate enterprise portal.',
    badgeColor: 'bg-blue-600 text-white border-blue-600',
  },
  {
    name: 'Mubkdaneji',
    url: 'https://mubkdaneji.com',
    category: 'Brand & IT Solutions',
    categoryTag: 'BUSINESS',
    desc: 'Cutting-edge digital media agency, technology consulting, and brand engineering website.',
    badgeColor: 'bg-orange-600 text-white border-orange-600',
  },
  {
    name: 'Mardeeyah Hospital',
    url: 'https://mardeeyahhospital.netlify.app',
    category: 'Healthcare & Hospital',
    categoryTag: 'HEALTH',
    desc: 'Full hospital & maternity medical portal with service schedules, patient info, and appointment inquiries.',
    badgeColor: 'bg-blue-600 text-white border-blue-600',
  },
  {
    name: 'Binnas Logistics Global',
    url: 'https://Binnaslogisticsglobal.com.ng',
    category: 'Logistics & Cargo',
    categoryTag: 'LOGISTICS',
    desc: 'International shipping, cargo forwarding, customs clearing, and freight delivery tracking platform.',
    badgeColor: 'bg-blue-600 text-white border-blue-600',
  },
  {
    name: 'Abu Qoonitah Academy',
    url: 'https://abuqoonitahacademy.name.ng',
    category: 'School & E-Learning',
    categoryTag: 'EDUCATION',
    desc: 'Comprehensive Islamic & modern academic school website with admissions, curriculum, and parent updates.',
    badgeColor: 'bg-orange-600 text-white border-orange-600',
  },
  {
    name: 'Go Empower Initiative',
    url: 'https://goempowerinitiative.org',
    category: 'NGO & Foundation',
    categoryTag: 'NGO',
    desc: 'Youth empowerment and community development non-governmental foundation with programs and donation calls.',
    badgeColor: 'bg-blue-600 text-white border-blue-600',
  },
  {
    name: 'The Roadmap News',
    url: 'https://theroadmapnews.com.ng',
    category: 'News & Media',
    categoryTag: 'BUSINESS',
    desc: 'Digital news journalism website with categorized breaking news, editorial columns, and responsive reading.',
    badgeColor: 'bg-orange-600 text-white border-orange-600',
  },
  {
    name: 'Ashmid Academy',
    url: 'https://www.ashmidacademy.com.ng',
    category: 'School & College',
    categoryTag: 'EDUCATION',
    desc: 'Modern accredited academic institution portal with academic calendar, school events, and student portal.',
    badgeColor: 'bg-blue-600 text-white border-blue-600',
  },
  {
    name: 'Rozay Kitchen',
    url: 'https://rozaykitchen.com.ng',
    category: 'Food & Catering',
    categoryTag: 'BUSINESS',
    desc: 'Restaurant and culinary catering service website showcasing mouth-watering food menus and order bookings.',
    badgeColor: 'bg-orange-600 text-white border-orange-600',
  },
  {
    name: 'BLOM Organization',
    url: 'https://www.blom.org.ng',
    category: 'Non-Profit & Advocacy',
    categoryTag: 'NGO',
    desc: 'Community advocacy NGO platform highlighting social impact projects, volunteer opportunities, and reports.',
    badgeColor: 'bg-blue-600 text-white border-blue-600',
  },
  {
    name: 'Al-Ameen Clinic & Maternity',
    url: 'https://alameenclinicandmaternityhome.netlify.app',
    category: 'Hospital & Maternity',
    categoryTag: 'HEALTH',
    desc: 'Healthcare facility website with maternity care services, clinical diagnostics, and doctor consultation forms.',
    badgeColor: 'bg-orange-600 text-white border-orange-600',
  },
  {
    name: 'Davic Cooling Systems Limited',
    url: 'https://daviccoolingsystemslimited.netlify.app/',
    category: 'Engineering & HVAC',
    categoryTag: 'BUSINESS',
    desc: 'Industrial cooling, commercial air conditioning, refrigeration maintenance, and technical contract services.',
    badgeColor: 'bg-blue-600 text-white border-blue-600',
  },
  {
    name: 'Al-Ishbeeliy Gadgets Venture',
    url: 'https://alishbeeliygadgetsventure.netlify.app/',
    category: 'Gadgets & Tech Store',
    categoryTag: 'COMMERCE',
    desc: 'E-commerce showcase for brand new smartphones, laptops, electronics, and tech accessories.',
    badgeColor: 'bg-orange-600 text-white border-orange-600',
  },
  {
    name: 'Hope Xavier First Academy',
    url: 'https://hopexavierfirstacademy.netlify.app',
    category: 'Primary & Secondary School',
    categoryTag: 'EDUCATION',
    desc: 'Premier educational academy website with admissions guidelines, school gallery, and academic programs.',
    badgeColor: 'bg-blue-600 text-white border-blue-600',
  },
  {
    name: 'Qaadatul Ghad Foundation',
    url: 'https://qaadatul-ghad-islamic-foundation-875365047876.europe-west2.run.app',
    category: 'Foundation & Relief',
    categoryTag: 'NGO',
    desc: 'Islamic humanitarian foundation website with welfare initiatives, orphan sponsorship, and impact reports.',
    badgeColor: 'bg-orange-600 text-white border-orange-600',
  },
];

export default function StudentWebsitesShowcase() {
  const [filter, setFilter] = useState<string>('ALL');

  const filteredSites = STUDENT_WEBSITES.filter((site) => {
    if (filter === 'ALL') return true;
    return site.categoryTag === filter;
  });

  return (
    <section id="student-websites" className="py-20 lg:py-28 bg-white text-black border-b border-black/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
            <Globe className="w-4 h-4 text-white" />
            <span>REAL RESULTS FROM REAL STUDENTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight uppercase leading-tight">
            LIVE WEBSITES BUILT BY OUR STUDENTS
          </h2>

          <p className="mt-4 text-base sm:text-lg text-black/80 font-semibold max-w-3xl mx-auto">
            These are not mockups or theoretical designs. These are live, fully functional websites built and deployed by students who took this training: across hospitals, logistics, schools, NGOs, news portals, and ecommerce businesses.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'ALL', label: 'All Live Sites' },
            { id: 'HEALTH', label: 'Hospitals & Healthcare' },
            { id: 'EDUCATION', label: 'Schools & Academies' },
            { id: 'LOGISTICS', label: 'Logistics & Cargo' },
            { id: 'NGO', label: 'NGOs & Foundations' },
            { id: 'BUSINESS', label: 'Businesses & News' },
            { id: 'COMMERCE', label: 'Stores & Ecommerce' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all duration-300 cursor-pointer ${
                filter === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105 border border-white/20'
                  : 'bg-black/5 text-black hover:bg-black/10 border border-black/10 hover:scale-102'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Live Student Websites Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSites.map((site, index) => (
            <div
              key={index}
              className="rounded-2xl border-2 border-black/10 hover:border-blue-600 bg-white/95 backdrop-blur-md p-5 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Browser top-bar aesthetic with morphism border */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-black/30"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-black/30"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-black/30"></span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${site.badgeColor}`}>
                    {site.category}
                  </span>
                </div>

                <h3 className="text-lg font-black text-black group-hover:text-blue-600 transition-colors">
                  {site.name}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-black/70 font-medium leading-relaxed">
                  {site.desc}
                </p>
              </div>

              {/* Action Button: Live External Link with Morphism Vibes & Animated Shimmer */}
              <div className="mt-5 pt-4 border-t border-black/10 flex flex-col gap-2">
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group/btn overflow-hidden w-full flex items-center justify-between px-4 py-3.5 rounded-xl morphism-glass-blue hover:bg-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_14px_30px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                >
                  {/* Morphism Shimmer Highlight sweep */}
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                  <div className="relative z-10 flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                    </span>
                    <Globe className="w-4 h-4 shrink-0 text-white" />
                    <span className="tracking-wide">VISIT LIVE WEBSITE</span>
                  </div>

                  <div className="relative z-10 flex items-center gap-1 text-white group-hover/btn:translate-x-1 transition-transform">
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </div>
                </a>

                <div className="flex items-center justify-between text-[11px] text-black/60 font-semibold px-1">
                  <span className="text-blue-600 font-bold">
                    ✓ 100% Student Built
                  </span>
                  <span className="text-black/50 truncate max-w-[140px]">
                    {site.url.replace('https://', '')}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Highlight Card: Want to build yours? Scroll to On-Page Checkout */}
          <div className="rounded-2xl border-2 border-orange-600 bg-orange-600 p-6 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-black/20 text-white text-xs font-black uppercase tracking-wider mb-4">
                Want To Build Yours?
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase">
                DOZENS OF WEBSITES LAUNCHED MONTHLY
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-white/95 font-semibold leading-relaxed">
                Our students are launching websites for clients every single week. Enroll today on this page for only ₦5,000 and get instant WhatsApp onboarding!
              </p>
            </div>

            <div className="mt-6">
              <a
                href="#checkout"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-orange-600 hover:bg-white/90 font-black text-sm uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-all text-center"
              >
                <span>ENROLL NOW FOR ₦5,000 VIA PAYSTACK</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
