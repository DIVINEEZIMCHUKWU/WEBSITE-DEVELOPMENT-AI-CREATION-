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
    <section id={id} className="py-16 sm:py-20 lg:py-24 bg-white text-black relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-orange-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
            <Flame className="w-4 h-4 fill-white shrink-0" />
            <span>UNFILTERED STUDENT PROOF &amp; REVIEWS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-black tracking-tight uppercase leading-tight">
            ALMOST 700+ STUDENTS HAVE ALREADY GOTTEN ACCESS
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-black/80 font-semibold max-w-2xl mx-auto px-2">
            Hundreds of students have already joined the training. Below, you'll see real screenshots, feedback and student experiences.
          </p>

          {/* Single clean tab: ALL SCREENSHOTS */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md">
              <CheckCircle className="w-4 h-4 text-white shrink-0" />
              <span>ALL SCREENSHOTS ({REAL_SCREENSHOTS.length} VERIFIED PROOFS)</span>
            </div>
          </div>
        </div>

        {/* Visible, Bold Screenshot Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {visibleScreenshots.map((imgUrl, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl bg-white border-2 border-black/10 hover:border-blue-600 p-2 sm:p-2.5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1"
            >
              {/* Image Container with high contrast and zoom badge */}
              <div className="relative rounded-xl overflow-hidden bg-black/5 aspect-[3/4] flex items-center justify-center">
                <img
                  src={imgUrl}
                  alt={`Student Real Screenshot ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-600 text-white text-[11px] font-black shadow w-fit">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to View Full Size</span>
                  </div>
                  <span className="text-[11px] text-white/90 font-bold mt-1">
                    Student Proof #{idx + 1}
                  </span>
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-2 px-1 sm:px-2 py-1 flex items-center justify-between text-xs font-bold text-black/70">
                <span className="flex items-center gap-1 text-blue-600 font-extrabold text-[11px] sm:text-xs">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Verified Proof</span>
                </span>
                <span className="text-[11px] text-black/50 font-semibold">
                  #{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More or Show All button if not showing all */}
        {displayCount < REAL_SCREENSHOTS.length && (
          <div className="mt-8 sm:mt-10 text-center">
            <button
              onClick={() => setDisplayCount(REAL_SCREENSHOTS.length)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-black hover:bg-black/80 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              View All {REAL_SCREENSHOTS.length} Real Student Screenshots
            </button>
          </div>
        )}

        {/* Section Repeated CTA in bright Orange: "JOIN THE TRAINING" */}
        <div className="mt-12 sm:mt-14 text-center">
          <a
            href="#checkout"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-black text-sm sm:text-base shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wide cursor-pointer"
          >
            <span>JOIN THE TRAINING FOR ₦5,000</span>
            <ExternalLink className="w-4 h-4 shrink-0" />
          </a>
          <p className="mt-2 text-xs text-black/60 font-bold">
            Join almost 700+ students mastering website creation today.
          </p>
        </div>

      </div>

      {/* Lightbox / Full-screen Image Viewing Modal (Mobile-Optimized) */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full max-h-[94vh] bg-black text-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 border-2 border-blue-600 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between pb-2.5 sm:pb-3 px-1 border-b border-white/10 text-white">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-orange-600 text-white font-black text-xs">
                  Proof {modalIndex + 1} of {REAL_SCREENSHOTS.length}
                </span>
                <span className="text-xs sm:text-sm text-white/80 font-bold hidden xs:inline">
                  Real Student Screenshot
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-orange-600 text-white flex items-center justify-center cursor-pointer transition-colors shadow"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View Area with Nav Arrows */}
            <div className="mt-2.5 flex-1 overflow-auto flex items-center justify-center relative bg-black/60 rounded-xl p-1 min-h-[280px] sm:min-h-[350px]">
              <img
                src={REAL_SCREENSHOTS[modalIndex]}
                alt={`Student Proof ${modalIndex + 1}`}
                className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />

              {/* Prev / Next buttons */}
              <button
                onClick={prevImage}
                className="absolute left-1.5 sm:left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/80 hover:bg-orange-600 text-white flex items-center justify-center cursor-pointer transition-all border border-white/20 shadow-lg"
                title="Previous Screenshot"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-1.5 sm:right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/80 hover:bg-orange-600 text-white flex items-center justify-center cursor-pointer transition-all border border-white/20 shadow-lg"
                title="Next Screenshot"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-2.5 sm:pt-3 px-1 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-white/80">
              <span className="text-xs font-semibold text-center sm:text-left">
                Want to build functional websites like these?
              </span>
              <a
                href="#checkout"
                onClick={closeLightbox}
                className="w-full sm:w-auto text-center px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-black text-xs uppercase tracking-wider hover:scale-105 transition-transform"
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
