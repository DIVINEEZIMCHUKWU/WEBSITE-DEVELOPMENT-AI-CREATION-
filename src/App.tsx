import React from 'react';
import Navbar, { OFFICIAL_PURCHASE_URL } from './components/Navbar';
import Hero from './components/Hero';
import StudentProofGallery from './components/StudentProofGallery';
import ProblemSection from './components/ProblemSection';
import TransformationSection from './components/TransformationSection';
import CurriculumSection from './components/CurriculumSection';
import DomainHostingCuriosity from './components/DomainHostingCuriosity';
import CourseFormat from './components/CourseFormat';
import WhyChoose from './components/WhyChoose';
import StudentWebsitesShowcase from './components/StudentWebsitesShowcase';
import WhoIsThisFor from './components/WhoIsThisFor';
import HonestExpectations from './components/HonestExpectations';
import OfferSection from './components/OfferSection';
import FaqSection from './components/FaqSection';
import FinalSalesSection from './components/FinalSalesSection';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import { Flame, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-['Poppins',sans-serif] selection:bg-orange-500 selection:text-white">
      
      {/* 1. Spacious Clean Navbar with SkillHive Media Agency Logo */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Bright & High-Converting Hero Section */}
        <Hero />

        {/* Mid-Hero Repeated CTA Banner in bright Orange & Red */}
        <section className="bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 py-4 text-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <span className="p-1.5 rounded-full bg-white/20 text-white">
                <Flame className="w-5 h-5 fill-white" />
              </span>
              <div>
                <span className="text-sm font-black uppercase tracking-wider block">
                  READY TO START BUILDING FUNCTIONAL WEBSITES WITHOUT CODING?
                </span>
                <span className="text-xs text-orange-100 font-semibold">
                  ₦5,000 promotional pricing active for limited time.
                </span>
              </div>
            </div>

            <a
              href={OFFICIAL_PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white text-orange-600 text-xs sm:text-sm font-black shadow-lg hover:bg-slate-100 hover:scale-[1.03] active:scale-[0.97] transition-all uppercase tracking-wider shrink-0"
            >
              <span>👉 BUY NOW — ₦5,000</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* 3. Real Student Screenshots Section (Single ALL SCREENSHOTS tab + Lightbox) */}
        <StudentProofGallery id="student-proof" />

        {/* 4. Live Student Websites Showcase (Hospitals, Logistics, Schools, NGOs, Stores) */}
        <StudentWebsitesShowcase />

        {/* 5. Problem Section */}
        <ProblemSection />

        {/* 6. Transformation Section */}
        <TransformationSection />

        {/* 7. Course Curriculum (Exactly 8 Modules) */}
        <CurriculumSection />

        {/* 8. Dedicated ₦450 Domain & ₦500 Hosting Curiosity Section */}
        <DomainHostingCuriosity />

        {/* 9. Course Format (Self-Paced + WhatsApp Support) */}
        <CourseFormat />

        {/* 10. Why Students Choose This Training */}
        <WhyChoose />

        {/* 11. Who This Course Is For */}
        <WhoIsThisFor />

        {/* 12. Honest Expectation Section */}
        <HonestExpectations />

        {/* 13. Master Offer Section */}
        <OfferSection />

        {/* 14. FAQ Section */}
        <FaqSection />

        {/* 15. Final Sales Section */}
        <FinalSalesSection />
      </main>

      {/* 16. Footer */}
      <Footer />

      {/* 17. Fixed Bottom Mobile Sticky Buy Bar */}
      <MobileStickyBar />

    </div>
  );
}
