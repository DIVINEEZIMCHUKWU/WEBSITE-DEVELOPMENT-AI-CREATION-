import React from 'react';
import { Smartphone, UserCheck, GraduationCap, Briefcase, Lightbulb, Video, Building2 } from 'lucide-react';

export default function WhoIsThisFor() {
  const personas = [
    {
      title: 'FOR SMARTPHONE & ANDROID USERS',
      quote: '“No laptop required! Build, customize, connect custom domains, and launch functional websites directly on your Android phone or iPhone.”',
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      border: 'border-blue-600 bg-white shadow-md',
      badge: 'High Priority Audience',
    },
    {
      title: 'FOR BEGINNERS',
      quote: '“No previous professional website development experience required.”',
      icon: <UserCheck className="w-6 h-6 text-blue-600" />,
      border: 'border-black/10 bg-white',
    },
    {
      title: 'FOR STUDENTS',
      quote: '“Learn a practical digital skill alongside your studies: directly from your phone or PC.”',
      icon: <GraduationCap className="w-6 h-6 text-orange-600" />,
      border: 'border-black/10 bg-white',
    },
    {
      title: 'FOR FREELANCERS',
      quote: '“Add website creation to your service offering and land clients on WhatsApp & social media.”',
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      border: 'border-black/10 bg-white',
    },
    {
      title: 'FOR ENTREPRENEURS',
      quote: '“Learn how to create websites for your own ideas and businesses without paying developers hundreds of thousands.”',
      icon: <Lightbulb className="w-6 h-6 text-orange-600" />,
      border: 'border-black/10 bg-white',
    },
    {
      title: 'FOR DIGITAL CREATORS',
      quote: '“Expand your digital skill set with AI-assisted website development.”',
      icon: <Video className="w-6 h-6 text-blue-600" />,
      border: 'border-black/10 bg-white',
    },
    {
      title: 'FOR BUSINESS OWNERS',
      quote: '“Understand how modern websites can be created and managed without being at the mercy of expensive agencies.”',
      icon: <Building2 className="w-6 h-6 text-orange-600" />,
      border: 'border-black/10 bg-white',
    },
  ];

  return (
    <section className="py-20 bg-white text-black border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
            <UserCheck className="w-4 h-4 text-white" />
            <span>WHO THIS TRAINING IS DESIGNED FOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
            WHO THIS COURSE IS FOR
          </h2>
          <p className="mt-3 text-base text-black/80 font-semibold">
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
                <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider shadow">
                  {persona.badge}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-black/5 border border-black/10 shadow-sm flex items-center justify-center mb-5">
                {persona.icon}
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight text-black mb-2">
                {persona.title}
              </h3>
              <p className="text-sm sm:text-base text-black/80 font-bold leading-relaxed">
                {persona.quote}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
