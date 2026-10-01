import React from 'react';
import { Clock, MessageCircle, CheckCircle2, Users, Smartphone } from 'lucide-react';
import { OFFICIAL_PURCHASE_URL } from './Navbar';

export default function CourseFormat() {
  return (
    <section className="py-20 bg-white text-slate-900 border-b border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sky-100 border border-sky-300 text-sky-900 text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
            <Clock className="w-4 h-4 text-sky-600" />
            <span>TRAINING STRUCTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-950">
            LEARN AT YOUR OWN PACE
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-semibold max-w-2xl mx-auto">
            Optimized for both Smartphone (Android &amp; iOS) and Laptop users. Learn, practise, and build anytime, anywhere.
          </p>
        </div>

        {/* Two Combined Visual Cards: SELF-PACED + WHATSAPP SUPPORT */}
        <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center">
          
          {/* Card 1: Self-Paced Training */}
          <div className="md:col-span-5 p-8 rounded-3xl bg-sky-50/50 border-2 border-sky-200 hover:border-sky-400 shadow-sm transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center mb-5 shadow-md">
              <Clock className="w-6 h-6" />
            </div>

            <div className="text-xs font-black uppercase tracking-wider text-sky-700 mb-1">
              On-Demand Curriculum
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase">
              SELF-PACED TRAINING
            </h3>

            <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">
              “Watch the lessons, practise what you learn and progress according to your own schedule.”
            </p>

            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Lifetime access with no pressure or deadlines</span>
              </li>
              <li className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-bold text-slate-900">Watch &amp; build directly on your Android / smartphone</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Re-watch technical walkthroughs anytime</span>
              </li>
            </ul>
          </div>

          {/* Plus Connector Visual in bright Orange */}
          <div className="md:col-span-1 flex justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white flex items-center justify-center text-xl font-black shadow-lg shadow-orange-500/30">
              +
            </div>
          </div>

          {/* Card 2: WhatsApp Mentorship Support */}
          <div className="md:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-sky-700 text-white border-2 border-sky-400 shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-5 shadow-md">
              <MessageCircle className="w-6 h-6" />
            </div>

            <div className="text-xs font-black uppercase tracking-wider text-emerald-300 mb-1">
              Active Community
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
              “BUT YOU'RE NOT LEARNING ALONE.”
            </h3>

            <p className="mt-4 text-sm sm:text-base text-sky-100 leading-relaxed font-semibold">
              “Students also have access to a flexible WhatsApp mentorship/support group where they can ask questions, share progress, discuss challenges and receive guidance throughout their learning journey.”
            </p>

            <div className="mt-6 pt-5 border-t border-sky-500/40 flex items-center gap-2 text-xs text-amber-300 font-bold">
              <Users className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Direct WhatsApp support on your phone 24/7</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
