import React from 'react';
import { Smartphone, UserCheck, GraduationCap, Briefcase, Lightbulb, Video, Building2 } from 'lucide-react';

export default function WhoIsThisFor() {
  const personas = [
    {
      title: 'FOR SMARTPHONE & ANDROID USERS',
      quote: '“No laptop required! Build, customize, connect custom domains, and launch functional websites directly on your Android phone or iPhone.”',
      icon: <Smartphone className="w-6 h-6 text-emerald-600" />,
      border: 'border-emerald-300 bg-emerald-50/60 ring-2 ring-emerald-400',
      badge: 'High Priority Audience',
    },
    {
      title: 'FOR BEGINNERS',
      quote: '“No previous professional website development experience required.”',
      icon: <UserCheck className="w-6 h-6 text-sky-600" />,
      border: 'border-sky-200 bg-sky-50/40',
    },
    {
      title: 'FOR STUDENTS',
      quote: '“Learn a practical digital skill alongside your studies — directly from your phone or PC.”',
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      border: 'border-blue-200 bg-blue-50/40',
    },
    {
      title: 'FOR FREELANCERS',
      quote: '“Add website creation to your service offering and land clients on WhatsApp & social media.”',
      icon: <Briefcase className="w-6 h-6 text-orange-600" />,
      border: 'border-orange-200 bg-orange-50/40',
    },
    {
      title: 'FOR ENTREPRENEURS',
      quote: '“Learn how to create websites for your own ideas and businesses without paying developers hundreds of thousands.”',
      icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
      border: 'border-amber-200 bg-amber-50/40',
    },
    {
      title: 'FOR DIGITAL CREATORS',
      quote: '“Expand your digital skill set with AI-assisted website development.”',
      icon: <Video className="w-6 h-6 text-red-600" />,
      border: 'border-red-200 bg-red-50/40',
    },
    {
      title: 'FOR BUSINESS OWNERS',
      quote: '“Understand how modern websites can be created and managed without being at the mercy of expensive agencies.”',
      icon: <Building2 className="w-6 h-6 text-indigo-600" />,
      border: 'border-indigo-200 bg-indigo-50/40',
    },
  ];

  return (
    <section className="py-20 bg-white text-slate-900 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
            <UserCheck className="w-4 h-4 text-orange-600" />
            <span>WHO THIS TRAINING IS DESIGNED FOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-950">
            WHO THIS COURSE IS FOR
          </h2>
          <p className="mt-3 text-base text-slate-700 font-semibold">
            Whether you only have an Android phone or a laptop, zero technical background or some experience, this course is tailored for your success.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((persona) => (
            <div
              key={persona.title}
              className={`p-7 rounded-2xl border-2 ${persona.border} hover:scale-[1.02] shadow-sm hover:shadow-lg transition-all duration-300 relative`}
            >
              {persona.badge && (
                <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider shadow">
                  {persona.badge}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-5">
                {persona.icon}
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-2">
                {persona.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 font-bold leading-relaxed">
                {persona.quote}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
