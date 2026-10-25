import React from 'react';
import { HeartHandshake } from 'lucide-react';

export default function HonestExpectations() {
  return (
    <section className="py-16 sm:py-20 bg-black/5 text-black border-b border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border-4 border-blue-600 bg-white p-5 sm:p-10 md:p-12 shadow-lg text-center relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider mb-6 shadow-sm">
            <HeartHandshake className="w-4 h-4 text-white" />
            <span>TRANSPARENCY &amp; INTEGRITY FIRST</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-black">
            LET'S SET THE RIGHT EXPECTATION.
          </h2>

          <div className="mt-6 space-y-4 text-sm sm:text-base md:text-lg text-black/80 font-semibold leading-relaxed max-w-2xl mx-auto">
            <p>
              “This course gives you the tools, workflow and practical knowledge to learn AI-assisted website development.”
            </p>
            <p className="font-black text-black text-base sm:text-lg md:text-xl">
              “But the course is not a magic button.”
            </p>
            <p className="text-xs sm:text-sm md:text-base text-black/70">
              “Your results will depend on how much you practise, the quality of your work, your consistency, your ability to communicate with clients and the effort you put into applying what you learn.”
            </p>
          </div>

          {/* Big Trust Tagline in bright Royal Blue */}
          <div className="mt-8 pt-6 sm:pt-8 border-t-2 border-black/10">
            <div className="text-sm sm:text-lg md:text-2xl font-black uppercase tracking-wider text-blue-600">
              “LEARN THE SKILL. PRACTISE THE SKILL. BUILD WITH THE SKILL.”
            </div>
            <p className="mt-2 text-xs text-black/60 font-bold">
              Practical, realistic education you can rely on for real-world execution.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
