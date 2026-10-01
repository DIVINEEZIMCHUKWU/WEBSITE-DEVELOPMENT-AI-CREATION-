import React from 'react';
import { 
  Hammer, 
  Workflow, 
  Rocket, 
  Wrench, 
  TrendingUp, 
  Award,
  Layers
} from 'lucide-react';

export default function WhyChoose() {
  const cards = [
    {
      title: 'BUILD',
      quote: '“Learn how to turn ideas into actual websites.”',
      icon: <Hammer className="w-6 h-6 text-blue-600" />,
      border: 'border-blue-200 bg-blue-50/40',
      badge: 'bg-blue-600 text-white',
    },
    {
      title: 'REFINE',
      quote: '“Learn how to make AI-generated websites look professionally designed.”',
      icon: <Layers className="w-6 h-6 text-sky-600" />,
      border: 'border-sky-200 bg-sky-50/40',
      badge: 'bg-sky-600 text-white',
    },
    {
      title: 'CONNECT',
      quote: '“Learn databases, payment systems and other integrations.”',
      icon: <Workflow className="w-6 h-6 text-emerald-600" />,
      border: 'border-emerald-200 bg-emerald-50/40',
      badge: 'bg-emerald-600 text-white',
    },
    {
      title: 'DEPLOY',
      quote: '“Learn domains, hosting, DNS and deployment.”',
      icon: <Rocket className="w-6 h-6 text-orange-600" />,
      border: 'border-orange-200 bg-orange-50/40',
      badge: 'bg-orange-600 text-white',
    },
    {
      title: 'DEBUG',
      quote: '“Learn what to do when things break.”',
      icon: <Wrench className="w-6 h-6 text-red-600" />,
      border: 'border-red-200 bg-red-50/40',
      badge: 'bg-red-600 text-white',
    },
    {
      title: 'MONETIZE',
      quote: '“Learn how to turn the skill into a potential source of income.”',
      icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
      border: 'border-amber-200 bg-amber-50/40',
      badge: 'bg-amber-600 text-white',
    },
  ];

  return (
    <section className="py-20 bg-sky-50/20 text-slate-900 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 border border-blue-300 text-blue-900 text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
            <Award className="w-4 h-4 text-blue-600" />
            <span>THE COMPLETE SKILL-SET</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-950">
            MORE THAN JUST AI PROMPTS.
          </h2>
          <p className="mt-3 text-base text-slate-700 font-semibold">
            Gain the six foundational pillars that elevate you from someone who types casual prompts into a real website developer.
          </p>
        </div>

        {/* Six Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`p-7 rounded-2xl border-2 ${card.border} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 font-bold leading-relaxed">
                  {card.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
