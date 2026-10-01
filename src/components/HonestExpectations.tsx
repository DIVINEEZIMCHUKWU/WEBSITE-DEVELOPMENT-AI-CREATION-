import React from 'react';
import { HeartHandshake } from 'lucide-react';

export default function HonestExpectations() {
  return (
    <section className="py-20 bg-sky-50/30 text-slate-900 border-b border-sky-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border-4 border-sky-300 bg-white p-8 sm:p-12 shadow-lg text-center relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-black uppercase tracking-wider mb-6">
            <HeartHandshake className="w-4 h-4 text-emerald-600" />
            <span>TRANSPARENCY &amp; INTEGRITY FIRST</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-950">
            LET'S SET THE RIGHT EXPECTATION.
          </h2>

          <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-700 font-semibold leading-relaxed max-w-2xl mx-auto">
            <p>
              “This course gives you the tools, workflow and practical knowledge to learn AI-assisted website development.”
            </p>
            <p className="font-black text-slate-950 text-lg sm:text-xl">
              “But the course is not a magic button.”
            </p>
            <p className="text-sm sm:text-base text-slate-600">
              “Your results will depend on how much you practise, the quality of your work, your consistency, your ability to communicate with clients and the effort you put into applying what you learn.”
            </p>
          </div>

          {/* Big Trust Tagline in bright Royal Blue */}
          <div className="mt-8 pt-8 border-t-2 border-slate-100">
            <div className="text-base sm:text-xl md:text-2xl font-black uppercase tracking-wider text-blue-600">
              “LEARN THE SKILL. PRACTISE THE SKILL. BUILD WITH THE SKILL.”
            </div>
            <p className="mt-2 text-xs text-slate-500 font-bold">
              Practical, realistic education you can rely on for real-world execution.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
