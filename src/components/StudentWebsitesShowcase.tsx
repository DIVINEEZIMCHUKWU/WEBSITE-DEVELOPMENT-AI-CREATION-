import React, { useState } from 'react';
import { ExternalLink, Globe, Laptop, ArrowRight, CheckCircle2, Flame, Sparkles } from 'lucide-react';
import { OFFICIAL_PURCHASE_URL } from './Navbar';
import { trackMetaInitiateCheckout } from '../utils/metaPixel';

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
    name: 'Henrand Nig',
    url: 'https://www.henrandnig.com',
    category: 'Engineering & Enterprise',
    categoryTag: 'BUSINESS',
    desc: 'High-level engineering, procurement, industrial project management, and corporate enterprise portal.',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
  },
  {
    name: 'Mubkdaneji',
    url: 'https://mubkdaneji.com',
    category: 'Brand & IT Solutions',
    categoryTag: 'BUSINESS',
    desc: 'Cutting-edge digital media agency, technology consulting, and brand engineering website.',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-300',
  },
  {
    name: 'Mardeeyah Hospital',
    url: 'https://mardeeyahhospital.netlify.app',
    category: 'Healthcare & Hospital',
    categoryTag: 'HEALTH',
    desc: 'Full hospital & maternity medical portal with service schedules, patient info, and appointment inquiries.',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  },
  {
    name: 'Binnas Logistics Global',
    url: 'https://Binnaslogisticsglobal.com.ng',
    category: 'Logistics & Cargo',
    categoryTag: 'LOGISTICS',
    desc: 'International shipping, cargo forwarding, customs clearing, and freight delivery tracking platform.',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
  },
  {
    name: 'Abu Qoonitah Academy',
    url: 'https://abuqoonitahacademy.name.ng',
    category: 'School & E-Learning',
    categoryTag: 'EDUCATION',
    desc: 'Comprehensive Islamic & modern academic school website with admissions, curriculum, and parent updates.',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
  },
  {
    name: 'Go Empower Initiative',
    url: 'https://goempowerinitiative.org',
    category: 'NGO & Foundation',
    categoryTag: 'NGO',
    desc: 'Youth empowerment and community development non-governmental foundation with programs and donation calls.',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-300',
  },
  {
    name: 'The Roadmap News',
    url: 'https://theroadmapnews.com.ng',
    category: 'News & Media',
    categoryTag: 'BUSINESS',
    desc: 'Digital news journalism website with categorized breaking news, editorial columns, and responsive reading.',
    badgeColor: 'bg-red-100 text-red-800 border-red-300',
  },
  {
    name: 'Ashmid Academy',
    url: 'https://www.ashmidacademy.com.ng',
    category: 'School & College',
    categoryTag: 'EDUCATION',
    desc: 'Modern accredited academic institution portal with academic calendar, school events, and student portal.',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
  },
  {
    name: 'Rozay Kitchen',
    url: 'https://rozaykitchen.com.ng',
    category: 'Food & Catering',
    categoryTag: 'BUSINESS',
    desc: 'Restaurant and culinary catering service website showcasing mouth-watering food menus and order bookings.',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
  },
  {
    name: 'BLOM Organization',
    url: 'https://www.blom.org.ng',
    category: 'Non-Profit & Advocacy',
    categoryTag: 'NGO',
    desc: 'Community advocacy NGO platform highlighting social impact projects, volunteer opportunities, and reports.',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
  },
  {
    name: 'Al-Ameen Clinic & Maternity',
    url: 'https://alameenclinicandmaternityhome.netlify.app',
    category: 'Hospital & Maternity',
    categoryTag: 'HEALTH',
    desc: 'Healthcare facility website with maternity care services, clinical diagnostics, and doctor consultation forms.',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  },
  {
    name: 'Davic Cooling Systems Limited',
    url: 'https://daviccoolingsystemslimited.netlify.app/',
    category: 'Engineering & HVAC',
    categoryTag: 'BUSINESS',
    desc: 'Industrial cooling, commercial air conditioning, refrigeration maintenance, and technical contract services.',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
  },
  {
    name: 'Al-Ishbeeliy Gadgets Venture',
    url: 'https://alishbeeliygadgetsventure.netlify.app/',
    category: 'Gadgets & Tech Store',
    categoryTag: 'COMMERCE',
    desc: 'E-commerce showcase for brand new smartphones, laptops, electronics, and tech accessories.',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
  },
  {
    name: 'Hope Xavier First Academy',
    url: 'https://hopexavierfirstacademy.netlify.app',
    category: 'Primary & Secondary School',
    categoryTag: 'EDUCATION',
    desc: 'Premier educational academy website with admissions guidelines, school gallery, and academic programs.',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
  },
  {
    name: 'Qaadatul Ghad Foundation',
    url: 'https://qaadatul-ghad-islamic-foundation-875365047876.europe-west2.run.app',
    category: 'Islamic Foundation',
    categoryTag: 'NGO',
    desc: 'Faith-based charity, community outreach, and Islamic educational foundation platform.',
    badgeColor: 'bg-green-100 text-green-800 border-green-300',
  },
  {
    name: 'Chic Gecko Boutique',
    url: 'https://chic-gecko-5d281f.netlify.app',
    category: 'Fashion & Boutique',
    categoryTag: 'COMMERCE',
    desc: 'Fashion brand lookbook and apparel catalog showcasing modern designs and customer purchase flows.',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
  },
  {
    name: 'NumaWiz Studios',
    url: 'https://numawizstudios.netlify.app',
    category: 'Creative Media Studio',
    categoryTag: 'BUSINESS',
    desc: 'Digital media agency, photography, video production, and commercial creative portfolio.',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-300',
  },
  {
    name: 'Umar Faruq Sa Venture',
    url: 'https://umarfaruqsaventure.netlify.app',
    category: 'Commercial Enterprise',
    categoryTag: 'BUSINESS',
    desc: 'Business enterprise website for commercial trade, general merchandise, and supply contracts.',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
  },
  {
    name: 'ChipPortal Activity Hub',
    url: 'https://chipportal.netlify.app/activity',
    category: 'Web App & Portal',
    categoryTag: 'BUSINESS',
    desc: 'Interactive web platform with dynamic user activity tracking, status feeds, and member accounts.',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
  },
  {
    name: 'Creative Photo & Flyer Hub',
    url: 'https://ai-photo-editing-and-flyer-design.netlify.app',
    category: 'Design & Graphics',
    categoryTag: 'BUSINESS',
    desc: 'Creative graphic design studio site for flyer commissions, photo editing, and marketing assets.',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
  },
  {
    name: 'Effervescent Madeleine',
    url: 'https://effervescent-madeleine-b41fcd.netlify.app',
    category: 'Beauty & Lifestyle',
    categoryTag: 'COMMERCE',
    desc: 'Boutique beauty, skincare, and luxury lifestyle catalog with interactive product sections.',
    badgeColor: 'bg-pink-100 text-pink-800 border-pink-300',
  },
  {
    name: 'Kaleidoscopic Events',
    url: 'https://Kaleidoscopic-lollipop-4afacb.netlify.app',
    category: 'Events & Entertainment',
    categoryTag: 'BUSINESS',
    desc: 'Event planning, entertainment services, party management, and celebration bookings.',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
  },
  {
    name: 'Scintillating Moxie Agency',
    url: 'https://scintillating-moxie-41c8a0.netlify.app',
    category: 'Digital Agency',
    categoryTag: 'BUSINESS',
    desc: 'Modern tech solutions and business growth agency showcase with contact forms and case studies.',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
  },
];

export default function StudentWebsitesShowcase() {
  const [filter, setFilter] = useState<string>('ALL');

  const filteredSites = STUDENT_WEBSITES.filter((site) => {
    if (filter === 'ALL') return true;
    return site.categoryTag === filter;
  });

  return (
    <section id="student-websites" className="py-20 lg:py-28 bg-white text-slate-900 border-b border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sky-100 border border-sky-300 text-sky-900 text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
            <Globe className="w-4 h-4 text-sky-600" />
            <span>REAL RESULTS FROM REAL STUDENTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight uppercase leading-tight">
            LIVE WEBSITES BUILT BY OUR STUDENTS
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 font-semibold max-w-3xl mx-auto">
            These are not mockups or theoretical designs. These are live, fully functional websites built and deployed by students who took this training — across hospitals, logistics, schools, NGOs, news portals, and ecommerce businesses.
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
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-md shadow-sky-500/30'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
              className="rounded-2xl border-2 border-slate-200 hover:border-sky-500 bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Browser top-bar aesthetic */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${site.badgeColor}`}>
                    {site.category}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                  {site.name}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {site.desc}
                </p>
              </div>

              {/* Action Button: Live External Link - Animated Button Shape */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group/btn overflow-hidden w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 hover:from-blue-700 hover:to-sky-800 text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-xl shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all border border-blue-400/30"
                >
                  {/* Shimmer light sweep animation across button on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />

                  <div className="flex items-center gap-2">
                    {/* Animated Pulsing Live Green Dot */}
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                    </span>
                    <Globe className="w-4 h-4 shrink-0 transition-transform group-hover/btn:rotate-12 text-sky-200" />
                    <span className="tracking-wide">VISIT LIVE WEBSITE</span>
                  </div>

                  <div className="flex items-center gap-1 text-sky-200 group-hover/btn:text-white transition-colors">
                    <span className="text-[10px] font-bold hidden xs:inline uppercase opacity-90">Open</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </div>
                </a>

                <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold px-1">
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    ✓ 100% Student Built
                  </span>
                  <span className="text-slate-400 truncate max-w-[140px]">
                    {site.url.replace('https://', '')}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Highlight Card: Want to see more or build yours? Direct Selar Product Link */}
          <div className="rounded-2xl border-2 border-orange-400 bg-gradient-to-br from-orange-500 via-amber-500 to-red-500 p-6 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider mb-4">
                Want To See Even More?
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase">
                DOZENS OF WEBSITES LAUNCHED MONTHLY
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-white/90 font-semibold leading-relaxed">
                Our students are launching websites for clients every single week. Click below to view the official course on Selar, explore more student builds, and secure your access for only ₦5,000!
              </p>
            </div>

            <div className="mt-6">
              <a
                href={OFFICIAL_PURCHASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMetaInitiateCheckout('Student Websites Showcase Card CTA')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-orange-600 font-black text-sm uppercase tracking-wider shadow-lg hover:bg-slate-100 hover:scale-[1.02] transition-all text-center"
              >
                <span>GET THE COURSE &amp; SEE MORE ON SELAR</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
