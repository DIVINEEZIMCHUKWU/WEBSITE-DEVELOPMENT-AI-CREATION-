import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

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
      a: "YES! The complete step-by-step workflow (from generating website structures to purchasing custom domains for ₦450, setting up hosting for ₦500, uploading files, and integrating Paystack payment buttons) can be carried out right from your mobile phone browser."
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
      a: "Click any BUY NOW button on this page and complete your enrollment securely via Paystack."
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
    <section id="faq" className="py-20 lg:py-24 bg-white text-black border-b border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-FAQ CTA Banner in solid Orange */}
        <div className="mb-12 sm:mb-16 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-orange-600 text-white text-center shadow-xl border-2 border-orange-500">
          <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-white mb-2">
            HAVE QUESTIONS OR READY TO DIVE IN?
          </h3>
          <p className="text-xs sm:text-sm text-white/90 max-w-lg mx-auto mb-6 font-semibold">
            Get instant access right now for only ₦5,000 and start learning immediately.
          </p>
          <a
            href="#checkout"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 rounded-xl bg-white text-orange-600 font-black text-xs sm:text-base shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wide cursor-pointer"
          >
            <span>ENROLL NOW VIA PAYSTACK</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-4 h-4 text-white" />
            <span>CLARITY &amp; ANSWERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mt-3 text-base text-black/80 font-semibold">
            Everything you need to know about the course, equipment requirements, support, and access.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border-2 border-black/10 bg-white overflow-hidden transition-all hover:border-blue-600"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer bg-black/5 hover:bg-black/10 transition-colors"
              >
                <span className="text-base sm:text-lg font-black text-black">
                  {faq.q}
                </span>
                <span className="p-1 rounded-lg text-black/50 shrink-0">
                  {openIndexes[idx] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </span>
              </button>

              {openIndexes[idx] && (
                <div className="p-5 sm:p-6 pt-3 border-t border-black/10 bg-white">
                  <p className="text-sm sm:text-base text-black/80 leading-relaxed font-semibold">
                    {faq.a}
                  </p>
                  {faq.q.includes("purchase") && (
                    <div className="mt-3">
                      <a
                        href="#checkout"
                        className="inline-flex items-center gap-1.5 text-xs font-black text-orange-600 hover:text-blue-600"
                      >
                        <span>Go to On-Page Paystack Checkout</span>
                        <ArrowRight className="w-3.5 h-3.5" />
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
