import React, { useState } from 'react';
import { 
  Flame, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  CheckCircle,
  ShieldCheck
} from 'lucide-react';
import { OFFICIAL_PURCHASE_URL } from './Navbar';
import { trackMetaInitiateCheckout } from '../utils/metaPixel';

// Deduplicated list of official student screenshots provided by the user
const REAL_SCREENSHOTS = [
  "https://i.ibb.co/39h6zcfN/photo-1-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/1f0217fh/photo-2-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/gZ0Ky8Q0/photo-3-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/Y4xGpC0z/photo-5-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/FZF9Yvp/photo-7-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/spR3LYw1/photo-8-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/G3rZYyND/photo-9-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/xWqG1QX/photo-10-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/qFgwshz1/photo-11-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/kVKc7b0j/photo-12-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/GvZd4Hm3/photo-13-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/67kBj0nX/photo-14-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/mrxYGGHd/photo-15-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/bgPwg6vG/photo-16-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/WpqmNGmS/photo-17-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/Hppxrttp/photo-22-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/C31XfkBK/photo-23-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/DD3B1QcC/photo-24-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/qL7FtnzD/photo-25-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/TzptGQS/photo-27-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/Zppx0tVG/photo-28-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/M5nCZ8MP/photo-29-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/dw9vgDNT/photo-30-2026-10-01-10-38-36.jpg",
  "https://i.ibb.co/21fLDFMJ/photo-1-2026-10-01-10-40-53.jpg",
  "https://i.ibb.co/PzxbZvHd/photo-2-2026-10-01-10-40-53.jpg",
  "https://i.ibb.co/Y7FdsKCm/photo-3-2026-10-01-10-40-53.jpg",
  "https://i.ibb.co/rG5ndfVk/photo-7-2026-10-01-10-40-53.jpg",
];

export default function StudentProofGallery({ id = "student-proof" }: { id?: string }) {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState<number>(12);

  const openLightbox = (index: number) => {
    setModalIndex(index);
  };

  const closeLightbox = () => {
    setModalIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalIndex !== null) {
      setModalIndex((modalIndex + 1) % REAL_SCREENSHOTS.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalIndex !== null) {
      setModalIndex((modalIndex - 1 + REAL_SCREENSHOTS.length) % REAL_SCREENSHOTS.length);
    }
  };

  const visibleScreenshots = REAL_SCREENSHOTS.slice(0, displayCount);

  return (
    <section id={id} className="py-20 lg:py-24 bg-gradient-to-b from-white via-sky-50/30 to-white text-slate-900 relative border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
            <Flame className="w-4 h-4 text-red-600 fill-red-500" />
            <span>UNFILTERED STUDENT PROOF &amp; REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight uppercase leading-tight">
            ALMOST 700+ STUDENTS HAVE ALREADY GOTTEN ACCESS
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-700 font-semibold max-w-2xl mx-auto">
            Hundreds of students have already joined the training. Below, you'll see real screenshots, feedback and student experiences.
          </p>

          {/* Single clean tab: ALL SCREENSHOTS */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-blue-500/30">
              <CheckCircle className="w-4 h-4 text-sky-200" />
              <span>ALL SCREENSHOTS ({REAL_SCREENSHOTS.length} VERIFIED PROOFS)</span>
            </div>
          </div>
        </div>

        {/* Visible, Bold Screenshot Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleScreenshots.map((imgUrl, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl bg-white border-2 border-slate-200 hover:border-sky-500 p-2.5 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1.5"
            >
              {/* Image Container with high contrast and zoom badge */}
              <div className="relative rounded-xl overflow-hidden bg-slate-100 aspect-[3/4] flex items-center justify-center">
                <img
                  src={imgUrl}
                  alt={`Student Real Screenshot ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-500 text-white text-xs font-black shadow w-fit">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to View Full Size</span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-bold mt-1">
                    Student Proof #{idx + 1}
                  </span>
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-2.5 px-2 py-1 flex items-center justify-between text-xs font-bold text-slate-600">
                <span className="flex items-center gap-1 text-sky-600 font-extrabold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Screenshot</span>
                </span>
                <span className="text-[11px] text-slate-400 font-semibold">
                  #{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More or Show All button if not showing all */}
        {displayCount < REAL_SCREENSHOTS.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setDisplayCount(REAL_SCREENSHOTS.length)}
              className="px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              View All {REAL_SCREENSHOTS.length} Real Student Screenshots
            </button>
          </div>
        )}

        {/* Section Repeated CTA in bright Orange/Red: "JOIN THE TRAINING" */}
        <div className="mt-14 text-center">
          <a
            href={OFFICIAL_PURCHASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackMetaInitiateCheckout('Student Proof Gallery CTA')}
            className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl bg-gradient-to-r from-red-600 via-orange-500 to-orange-600 text-white font-black text-base sm:text-lg shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wide"
          >
            <span>JOIN THE TRAINING</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="mt-2 text-xs text-slate-500 font-bold">
            Join almost 700+ students mastering website creation today.
          </p>
        </div>

      </div>

      {/* Lightbox / Full-screen Image Viewing Modal */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] bg-slate-950 rounded-3xl p-3 sm:p-5 border-2 border-sky-400 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-800 text-white">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-orange-500 text-white font-black text-xs">
                  Proof {modalIndex + 1} of {REAL_SCREENSHOTS.length}
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-bold hidden sm:inline">
                  Real Student Screenshot &amp; Experience
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-red-600 text-slate-200 hover:text-white flex items-center justify-center cursor-pointer transition-colors shadow"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View Area with Nav Arrows */}
            <div className="mt-3 flex-1 overflow-auto flex items-center justify-center relative bg-black/50 rounded-2xl p-2 min-h-[350px]">
              <img
                src={REAL_SCREENSHOTS[modalIndex]}
                alt={`Student Proof ${modalIndex + 1}`}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
              />

              {/* Prev / Next buttons */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-orange-500 text-white flex items-center justify-center cursor-pointer transition-all border border-slate-700 shadow-lg"
                title="Previous Screenshot"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-orange-500 text-white flex items-center justify-center cursor-pointer transition-all border border-slate-700 shadow-lg"
                title="Next Screenshot"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-3 px-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-300">
              <span className="text-xs font-semibold">
                Want to build functional websites like these?
              </span>
              <a
                href={OFFICIAL_PURCHASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMetaInitiateCheckout('Proof Lightbox Modal CTA')}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-black text-xs uppercase tracking-wider hover:scale-105 transition-transform"
              >
                Get Access For ₦5,000
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
