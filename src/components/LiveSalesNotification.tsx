import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, CheckCircle2, X } from 'lucide-react';

interface SaleNotification {
  name: string;
  city: string;
  state: string;
  timeAgo: string;
  initials: string;
}

const RECENT_AFRICAN_BUYERS: SaleNotification[] = [
  { name: 'Chukwudi Okafor', city: 'Ikeja', state: 'Lagos', timeAgo: 'Just now', initials: 'CO' },
  { name: 'Amina Bello', city: 'Wuse 2', state: 'Abuja', timeAgo: '42 seconds ago', initials: 'AB' },
  { name: 'Olumide Adeleke', city: 'Bodija', state: 'Ibadan', timeAgo: '1 min ago', initials: 'OA' },
  { name: 'Blessing Nwachukwu', city: 'GRA', state: 'Port Harcourt', timeAgo: 'Just now', initials: 'BN' },
  { name: 'Ibrahim Danjuma', city: 'Nassarawa', state: 'Kano', timeAgo: '2 mins ago', initials: 'ID' },
  { name: 'Emeka Eze', city: 'Independence Layout', state: 'Enugu', timeAgo: 'Just now', initials: 'EE' },
  { name: 'Damilola Bakare', city: 'Lekki', state: 'Lagos', timeAgo: '1 min ago', initials: 'DB' },
  { name: 'Ngozi Obi', city: 'Asaba', state: 'Delta', timeAgo: '3 mins ago', initials: 'NO' },
  { name: 'Tunde Adeyemi', city: 'Abeokuta', state: 'Ogun', timeAgo: 'Just now', initials: 'TA' },
  { name: 'Khadija Mustapha', city: 'Barnawa', state: 'Kaduna', timeAgo: '2 mins ago', initials: 'KM' },
  { name: 'Chinedu Okeke', city: 'Owerri', state: 'Imo', timeAgo: 'Just now', initials: 'CO' },
  { name: 'Funke Akindele', city: 'Surulere', state: 'Lagos', timeAgo: '1 min ago', initials: 'FA' },
  { name: 'Somtochukwu Anyanwu', city: 'Awka', state: 'Anambra', timeAgo: '4 mins ago', initials: 'SA' },
  { name: 'Fadekemi Oladipo', city: 'GRA', state: 'Ilorin', timeAgo: 'Just now', initials: 'FO' },
  { name: 'Efe Oghenekaro', city: 'Warri', state: 'Delta', timeAgo: '2 mins ago', initials: 'EO' },
  { name: 'Chinaza Okoro', city: 'Umuahia', state: 'Abia', timeAgo: 'Just now', initials: 'CO' },
  { name: 'Ayomide Babatunde', city: 'Alagbaka', state: 'Akure', timeAgo: '3 mins ago', initials: 'AB' },
];

export default function LiveSalesNotification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Cycle notifications smoothly
  useEffect(() => {
    if (isDismissed) return;

    // Initial popup after 2.5 seconds
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    return () => clearTimeout(initialTimeout);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    if (isVisible) {
      // Keep visible on screen for 5 seconds
      timerRef.current = setTimeout(() => {
        setIsVisible(false);
        // Wait 4 seconds hidden before popping out the next African buyer
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % RECENT_AFRICAN_BUYERS.length);
          setIsVisible(true);
        }, 4000);
      }, 5000);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isVisible, isDismissed]);

  // When user reaches #checkout section, immediately pop out a fresh notification if not currently visible
  useEffect(() => {
    const handleScroll = () => {
      const checkoutEl = document.getElementById('checkout');
      if (checkoutEl) {
        const rect = checkoutEl.getBoundingClientRect();
        // If checkout is in view
        if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 100) {
          if (!isVisible && !isDismissed) {
            setIsVisible(true);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, isDismissed]);

  if (isDismissed) return null;

  const currentBuyer = RECENT_AFRICAN_BUYERS[currentIndex];

  return (
    <div
      className={`fixed z-40 transition-all duration-700 ease-out transform ${
        isVisible
          ? 'translate-x-0 opacity-100 pointer-events-auto'
          : '-translate-x-[130%] opacity-0 pointer-events-none'
      } left-3 sm:left-6 bottom-24 sm:bottom-6 max-w-[340px] sm:max-w-sm w-auto`}
      role="status"
      aria-live="polite"
    >
      {/* Morphism Card Box in strict Black, Orange, Blue & White */}
      <div className="relative rounded-2xl bg-black/95 text-white p-3.5 sm:p-4 border-2 border-orange-500 shadow-[0_12px_35px_rgba(234,88,12,0.45)] backdrop-blur-2xl overflow-hidden group">
        
        {/* Subtle glass shimmer sweep */}
        <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />

        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 p-1 text-white/50 hover:text-white rounded-full bg-white/5 hover:bg-white/20 transition-colors cursor-pointer"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-3">
          
          {/* Avatar with Initials in vibrant Blue/Orange */}
          <div className="relative shrink-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-sm tracking-wider shadow-md border border-white/20">
              {currentBuyer.initials}
            </div>
            
            {/* Live Pulsing Radar Dot */}
            <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-80"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-orange-500 border border-white"></span>
            </span>
          </div>

          {/* Details */}
          <div className="min-w-0 pr-3">
            <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-orange-400 tracking-wider">
              <CheckCircle2 className="w-3 h-3 text-orange-400 shrink-0" />
              <span>JUST ENROLLED VIA PAYSTACK</span>
            </div>

            <p className="text-xs sm:text-sm font-black text-white truncate leading-snug mt-0.5">
              {currentBuyer.name}
            </p>

            <p className="text-[11px] text-white/80 font-medium truncate">
              📍 {currentBuyer.city}, {currentBuyer.state}
            </p>

            <div className="flex items-center gap-2 mt-1">
              <span className="px-2 py-0.5 rounded bg-blue-600/90 text-white text-[9px] font-black uppercase tracking-wider">
                ₦5,000 PAID
              </span>
              <span className="text-[10px] text-white/60 font-semibold">
                • {currentBuyer.timeAgo}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom micro-bar */}
        <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/70 font-bold">
          <span className="flex items-center gap-1 text-blue-400">
            <ShieldCheck className="w-3 h-3" />
            <span>Verified Paystack Payment</span>
          </span>
          <a
            href="#checkout"
            className="text-orange-400 hover:text-white font-black underline underline-offset-1"
          >
            Enroll Now →
          </a>
        </div>

      </div>
    </div>
  );
}
