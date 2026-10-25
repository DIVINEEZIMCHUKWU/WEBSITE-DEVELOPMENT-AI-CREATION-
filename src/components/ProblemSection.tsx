import React from 'react';
import { 
  AlertTriangle, 
  ArrowRight, 
  XCircle, 
  Smartphone, 
  Unlink, 
  HelpCircle,
  ShieldAlert
} from 'lucide-react';

export default function ProblemSection() {
  const painPoints = [
    {
      icon: <XCircle className="w-5 h-5 text-orange-600 shrink-0" />,
      text: "Sometimes the buttons don't work.",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-orange-600 shrink-0" />,
      text: "Sometimes the mobile version looks terrible.",
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-orange-600 shrink-0" />,
      text: "Sometimes the layout feels generic.",
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />,
      text: "Sometimes features are missing.",
    },
    {
      icon: <Unlink className="w-5 h-5 text-orange-600 shrink-0" />,
      text: "Sometimes connecting databases, domains, hosting or payment systems becomes confusing.",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-blue-600 shrink-0" />,
      text: "And when something breaks, many beginners simply don't know what to do next.",
    },
  ];

  return (
    <section id="problem" className="py-20 lg:py-24 bg-white text-black relative overflow-hidden border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
            <AlertTriangle className="w-4 h-4 text-white" />
            <span>THE REALITY OF WEB CREATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black leading-tight">
            AI CAN GENERATE A WEBSITE. BUT CAN YOU ACTUALLY CONTROL IT?
          </h2>

          <p className="mt-5 text-base sm:text-lg text-black/80 font-semibold leading-relaxed max-w-3xl mx-auto">
            AI has changed the way websites can be created. But simply telling an AI tool to ‘build me a website’ does not automatically produce a professional, functional product.
          </p>
        </div>

        {/* 6 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border-2 border-black/10 shadow-sm hover:border-orange-500 hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="p-2.5 rounded-xl bg-black/5 border border-black/10 shrink-0 mt-0.5">
                {item.icon}
              </div>
              <p className="text-sm sm:text-base font-bold text-black leading-snug">
                “{item.text}”
              </p>
            </div>
          ))}
        </div>

        {/* The Pivot & Big Statements */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="rounded-3xl bg-black p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden border-4 border-blue-600">
            
            <div className="relative z-10 space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-wider shadow">
                The Practical Solution
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-orange-400">
                “That is exactly where this training comes in.”
              </h3>

              <div className="pt-2 space-y-2">
                <p className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
                  “YOU'RE NOT JUST LEARNING HOW TO GENERATE A WEBSITE.”
                </p>
                <p className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight text-white/90 leading-tight">
                  “YOU'RE LEARNING HOW TO BUILD, CONTROL, REFINE, CONNECT, DEPLOY AND MANAGE ONE.”
                </p>
              </div>

              {/* CTA Button in solid Orange */}
              <div className="pt-6">
                <a
                  href="#checkout"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-black text-base sm:text-lg shadow-xl shadow-orange-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wide group cursor-pointer"
                >
                  <span>LEARN THE WORKFLOW</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
