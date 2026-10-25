import React from 'react';
import { Clock, MessageCircle, CheckCircle2, Users, Smartphone } from 'lucide-react';

export default function CourseFormat() {
  return (
    <section className="py-16 sm:py-20 bg-white text-black border-b border-black/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
            <Clock className="w-4 h-4 text-white" />
            <span>TRAINING STRUCTURE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
            LEARN AT YOUR OWN PACE
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-black/80 font-semibold max-w-2xl mx-auto">
            Optimized for both Smartphone (Android &amp; iOS) and Laptop users. Learn, practise, and build anytime, anywhere.
          </p>
        </div>

        {/* Two Combined Visual Cards: SELF-PACED + WHATSAPP SUPPORT */}
        <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center">
          
          {/* Card 1: Self-Paced Training */}
          <div className="md:col-span-5 p-6 sm:p-8 rounded-3xl bg-white border-2 border-black/10 hover:border-blue-600 shadow-sm transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-5 shadow-md">
              <Clock className="w-6 h-6 text-white" />
            </div>

            <div className="text-xs font-black uppercase tracking-wider text-blue-600 mb-1">
              On-Demand Curriculum
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-black uppercase">
              SELF-PACED TRAINING
            </h3>

            <p className="mt-4 text-sm sm:text-base text-black/80 leading-relaxed font-semibold">
              “Watch the lessons, practise what you learn and progress according to your own schedule.”
            </p>

            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-black/80 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Lifetime access with no pressure or deadlines</span>
              </li>
              <li className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-orange-600 shrink-0" />
                <span className="font-bold text-black">Watch &amp; build directly on your Android / smartphone</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Re-watch technical walkthroughs anytime</span>
              </li>
            </ul>
          </div>

          {/* Plus Connector Visual in bright Orange */}
          <div className="md:col-span-1 flex justify-center text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-600 text-white flex items-center justify-center text-lg sm:text-xl font-black shadow-lg shadow-orange-600/30">
              +
            </div>
          </div>

          {/* Card 2: WhatsApp Mentorship Support */}
          <div className="md:col-span-5 p-6 sm:p-8 rounded-3xl bg-black text-white border-2 border-orange-500 shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center mb-5 shadow-md">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>

            <div className="text-xs font-black uppercase tracking-wider text-orange-400 mb-1">
              Active Community
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
              “BUT YOU'RE NOT LEARNING ALONE.”
            </h3>

            <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed font-semibold">
              “Students also have access to a flexible WhatsApp mentorship/support group where they can ask questions, share progress, discuss challenges and receive guidance throughout their learning journey.”
            </p>

            <div className="mt-6 pt-5 border-t border-white/20 flex items-center gap-2 text-xs text-orange-400 font-bold">
              <Users className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Direct WhatsApp support on your phone 24/7</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
