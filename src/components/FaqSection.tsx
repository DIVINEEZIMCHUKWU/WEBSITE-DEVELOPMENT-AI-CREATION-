import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { OFFICIAL_PURCHASE_URL } from './Navbar';

export default function FaqSection() {
  const faqs = [
    {
      q: "Do I need coding experience?",
      a: "No. The training is designed for beginners and focuses on using AI-assisted workflows to build and manage websites. Technical concepts are introduced progressively."
    },
    {
      q: "Do I need a laptop, or can I use my smartphone / Android phone?",
      a: "NO LAPTOP REQUIRED! Smartphone and Android users are 100% included and are our primary target audience. You can build, customize, connect domains, host, and launch entire websites directly with your smartphone. Many of our best students build client websites entirely using their Android phones or iPhones. A laptop is optional, not mandatory."
    },
    {
      q: "Can I really do everything (including ₦450 domains & ₦500 hosting) on my smartphone?",
      a: "YES! The complete step-by-step workflow — from generating website structures to purchasing custom domains for ₦450, setting up hosting for ₦500, uploading files, and integrating Paystack payment buttons — can be carried out right from your mobile phone browser."
    },
    {
      q: "Will I learn how to host websites?",
      a: "Yes. The training covers free hosting, paid hosting, domains, DNS, nameservers and deployment."
    },
    {
      q: "Will I learn how to get a cheap domain?",
      a: "Yes. The training demonstrates how I obtained a custom domain for as low as ₦450 under the offer shown in the tutorial."
    },
    {
      q: "Will I learn how to get cheap hosting?",
      a: "Yes. The tutorial demonstrates a hosting offer obtained for as low as ₦500."
    },
    {
      q: "Are those prices guaranteed today?",
      a: "The ₦450 domain and ₦500 hosting prices are based on the offers demonstrated in the tutorials. Provider prices, promotions, extensions and renewal fees can change."
    },
    {
      q: "Will I learn GitHub?",
      a: "Yes. You'll learn how to export and upload projects to GitHub, manage repositories and work with your projects."
    },
    {
      q: "Will I learn Visual Studio Code?",
      a: "Yes. You'll learn how to clone a GitHub repository and work with your website project locally in Visual Studio Code."
    },
    {
      q: "Will I learn payment gateways?",
      a: "Yes. The course covers payment integration workflows involving Paystack, Flutterwave and Stripe."
    },
    {
      q: "Is the course self-paced?",
      a: "Yes. You can learn at your own pace."
    },
    {
      q: "Will I receive support?",
      a: "Yes. Students have access to a WhatsApp mentorship/support community for guidance and questions."
    },
    {
      q: "Can I make money from this skill?",
      a: "The course includes a dedicated module on monetization and ways to turn the skill into a service. However, income isn't guaranteed and depends on factors such as your skill level, practice, client acquisition, pricing and consistency."
    },
    {
      q: "How do I purchase?",
      a: "Click any BUY NOW button on the page and complete your purchase through Selar."
    }
  ];

  const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({
    0: true,
    1: true
  });

  const toggleFaq = (index: number) => {
    setOpenIndexes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-white text-slate-900 border-b border-sky-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-FAQ CTA Banner in bright vibrant Orange & Red */}
        <div className="mb-16 p-8 rounded-3xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white text-center shadow-xl border-2 border-orange-300">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2">
            HAVE QUESTIONS OR READY TO DIVE IN?
          </h3>
          <p className="text-xs sm:text-sm text-orange-100 max-w-lg mx-auto mb-6 font-semibold">
            Get instant access right now for only ₦5,000 and start learning immediately.
          </p>
          <a
            href={OFFICIAL_PURCHASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-orange-600 font-black text-sm sm:text-base shadow-lg hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wide"
          >
            <span>GET INSTANT ACCESS</span>
            <ExternalLink className="w-4 h-4 opacity-90" />
          </a>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 border border-blue-300 text-blue-900 text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>CLARITY &amp; ANSWERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-950">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mt-3 text-base text-slate-700 font-semibold">
            Everything you need to know about the course, equipment requirements, support, and access.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border-2 border-slate-200 bg-white overflow-hidden transition-all hover:border-sky-400"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer bg-slate-50/60 hover:bg-sky-50/40 transition-colors"
              >
                <span className="text-base sm:text-lg font-black text-slate-900">
                  {faq.q}
                </span>
                <span className="p-1 rounded-lg text-slate-400 shrink-0">
                  {openIndexes[idx] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </span>
              </button>

              {openIndexes[idx] && (
                <div className="p-5 sm:p-6 pt-3 border-t border-slate-100 bg-white">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">
                    {faq.a}
                  </p>
                  {faq.q.includes("purchase") && (
                    <div className="mt-3">
                      <a
                        href={OFFICIAL_PURCHASE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-black text-blue-600 hover:text-orange-600"
                      >
                        <span>Go to Official Selar Checkout ({OFFICIAL_PURCHASE_URL})</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
