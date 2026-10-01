import React, { useState } from 'react';
import { Layout, Globe, ArrowUpRight, Laptop, Sparkles } from 'lucide-react';
import { OFFICIAL_PURCHASE_URL } from './Navbar';

export default function WhatYouCanBuild() {
  const [selectedType, setSelectedType] = useState<string>('All');

  const categories = [
    {
      title: 'Business Websites',
      domain: 'nexustech-group.com',
      badge: 'Corporate',
      desc: 'Corporate multi-page website with services, team profiles, and enquiry forms.',
      accent: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Portfolio Websites',
      domain: 'tonydev-portfolio.io',
      badge: 'Creative',
      desc: 'Showcase work, client reviews, interactive project grids, and hire-me links.',
      accent: 'from-purple-600 to-indigo-600',
    },
    {
      title: 'Landing Pages',
      domain: 'scale-launch.co',
      badge: 'High Converting',
      desc: 'Direct-response single-page sales funnels optimized for Facebook & Instagram ads.',
      accent: 'from-emerald-600 to-teal-600',
    },
    {
      title: 'Restaurant Websites',
      domain: 'bellavita-bistro.ng',
      badge: 'Hospitality',
      desc: 'Digital food menus, table reservation bookings, location maps, and WhatsApp ordering.',
      accent: 'from-amber-600 to-orange-600',
    },
    {
      title: 'Fashion Websites',
      domain: 'luxe-atelier.store',
      badge: 'E-commerce',
      desc: 'Lookbooks, catalog showcases, Paystack checkout integration, and size guides.',
      accent: 'from-rose-600 to-pink-600',
    },
    {
      title: 'School Websites',
      domain: 'crownheights-academy.edu.ng',
      badge: 'Education',
      desc: 'Admission portal, academic calendar, staff directory, and student announcements.',
      accent: 'from-blue-700 to-indigo-800',
    },
    {
      title: 'Church Websites',
      domain: 'gracelife-church.org',
      badge: 'Faith & Community',
      desc: 'Sermon streaming archives, event calendar, online giving, and service times.',
      accent: 'from-indigo-600 to-blue-700',
    },
    {
      title: 'NGO Websites',
      domain: 'hopeforward-foundation.org',
      badge: 'Non-Profit',
      desc: 'Mission statement, impact reports, donation processing, and volunteer signups.',
      accent: 'from-emerald-700 to-green-700',
    },
    {
      title: 'Real Estate Websites',
      domain: 'primehabitat-properties.com',
      badge: 'Property',
      desc: 'Property listings with photo galleries, neighborhood filters, and inspection booking.',
      accent: 'from-cyan-700 to-blue-800',
    },
    {
      title: 'Service Websites',
      domain: 'apex-cleaners.ng',
      badge: 'Local Services',
      desc: 'Quote calculators, service packages, customer reviews, and appointment slots.',
      accent: 'from-blue-600 to-sky-600',
    },
    {
      title: 'Personal Brand Websites',
      domain: 'dr-adewale.com',
      badge: 'Authority',
      desc: 'Speaker profiles, book promotions, podcast embeds, and newsletter capture.',
      accent: 'from-violet-600 to-purple-800',
    },
    {
      title: 'Product Websites',
      domain: 'audiomax-pro.store',
      badge: 'Single Product',
      desc: 'High-impact product visualizer, feature comparisons, and 1-click Paystack checkout.',
      accent: 'from-slate-700 to-slate-900',
    },
    {
      title: 'Event Websites',
      domain: 'lagos-techsummit-2026.com',
      badge: 'Conferences',
      desc: 'Speaker line-up, ticket sales integration, schedule breakdown, and venue directions.',
      accent: 'from-red-600 to-rose-700',
    },
  ];

  return (
    <section id="showcase" className="py-20 lg:py-24 bg-white text-[#071426] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0751D8] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <Layout className="w-4 h-4 text-[#1261FF]" />
            <span>VERSATILE SKILL APPLICATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#071426]">
            ONE SKILL. MANY TYPES OF WEBSITES.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Once you understand the workflow, you aren't restricted to one niche. You can build modern, functional websites for virtually any business or client.
          </p>
        </div>

        {/* Visual Grid of 13 Realistic Website Mockup Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white hover:border-[#1261FF] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Browser Chrome Mockup Top Bar */}
              <div className="bg-slate-100 px-3.5 py-2.5 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                  <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                  <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                </div>
                <div className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] text-slate-500 font-mono truncate max-w-[140px]">
                  https://{item.domain}
                </div>
                <div className="w-3"></div>
              </div>

              {/* Mockup Preview Area */}
              <div className={`p-4 bg-gradient-to-r ${item.accent} text-white flex flex-col justify-between min-h-[110px] relative overflow-hidden`}>
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/30 backdrop-blur-sm text-white">
                    {item.badge}
                  </span>
                  <Sparkles className="w-4 h-4 text-white/70" />
                </div>
                <div className="relative z-10">
                  <p className="text-sm font-extrabold tracking-tight uppercase line-clamp-1">
                    {item.title}
                  </p>
                  <div className="w-8 h-1 bg-white/60 rounded mt-1"></div>
                </div>
                {/* Decorative circle */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none" />
              </div>

              {/* Card Body & Description */}
              <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-base font-bold text-[#071426] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#1261FF] font-bold">
                  <span>Full AI Workflow</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Deployable</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
