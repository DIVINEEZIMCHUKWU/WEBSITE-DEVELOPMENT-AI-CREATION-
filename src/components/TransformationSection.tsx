import React from 'react';
import { 
  Lightbulb, 
  Workflow, 
  Rocket, 
  ArrowRight,
  Layers,
  Wrench
} from 'lucide-react';

export default function TransformationSection() {
  const steps = [
    {
      num: '01',
      title: 'IDEA',
      desc: 'Turn an idea into a clear website concept and structure.',
      icon: <Lightbulb className="w-6 h-6 text-orange-600" />,
      tag: 'Conceptualization',
      color: 'border-black/10 bg-white',
    },
    {
      num: '02',
      title: 'BUILD',
      desc: 'Use AI to create the foundation of the website.',
      icon: <Workflow className="w-6 h-6 text-blue-600" />,
      tag: 'AI Creation',
      color: 'border-black/10 bg-white',
    },
    {
      num: '03',
      title: 'REFINE',
      desc: 'Improve design, layout, responsiveness and functionality.',
      icon: <Wrench className="w-6 h-6 text-orange-600" />,
      tag: 'Design & Code Polish',
      color: 'border-black/10 bg-white',
    },
    {
      num: '04',
      title: 'CONNECT',
      desc: 'Connect databases, payment systems, domains and other services.',
      icon: <Layers className="w-6 h-6 text-blue-600" />,
      tag: 'Integrations & Payments',
      color: 'border-black/10 bg-white',
    },
    {
      num: '05',
      title: 'DEPLOY',
      desc: 'Get the website online and accessible to real users.',
      icon: <Rocket className="w-6 h-6 text-orange-600" />,
      tag: 'Live Launch',
      color: 'border-black/10 bg-white',
    },
  ];

  return (
    <section className="py-20 bg-white text-black relative overflow-hidden border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
            <Workflow className="w-4 h-4 text-white" />
            <span>THE 5-STEP PROVEN WORKFLOW</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black leading-tight">
            FROM ONE IDEA TO A REAL WEBSITE.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-black/80 font-semibold">
            Follow a proven path that eliminates guesswork and delivers real, functioning, production-ready websites.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`relative rounded-2xl border-2 ${step.color} p-6 shadow-sm hover:border-blue-600 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-black/30 group-hover:text-blue-600 transition-colors">
                    {step.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-black/5 border border-black/10 shadow-sm">
                    {step.icon}
                  </div>
                </div>

                <div className="text-[11px] font-black uppercase tracking-wider text-blue-600 mb-1">
                  {step.tag}
                </div>

                <h3 className="text-xl font-black text-black tracking-tight uppercase mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-semibold">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-orange-600">
                  <ArrowRight className="w-5 h-5 font-bold" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button in solid Orange */}
        <div className="mt-14 text-center">
          <a
            href="#checkout"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-black text-base sm:text-lg shadow-xl shadow-orange-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wide cursor-pointer"
          >
            <span>START LEARNING NOW</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
