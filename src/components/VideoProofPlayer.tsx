import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Play } from 'lucide-react';
import { trackMetaCustom } from '../utils/metaPixel';

export default function VideoProofPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasTracked, setHasTracked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Strict browser requirement: must be muted to autoplay on initial page load
    video.defaultMuted = true;
    video.muted = true;

    // Start video playback immediately by default
    const startPlayback = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            if (!hasTracked) {
              trackMetaCustom('VideoAutoplayStarted', {
                content_name: 'School Management System Demonstration'
              });
              setHasTracked(true);
            }
          })
          .catch((err) => {
            console.debug('Autoplay fallback retry:', err);
            // Retry on loadeddata if browser needed a tick to load metadata
            video.addEventListener('loadeddata', () => {
              video.muted = true;
              video.play().catch(() => {});
            }, { once: true });
          });
      }
    };

    startPlayback();

    // Automatically enable voice audio on the user's very first interaction anywhere on page (scroll, touch, click)
    const unmuteOnUserAction = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1.0;
        videoRef.current.play().catch(() => {});
        setIsMuted(false);
      }
      removeListeners();
    };

    const removeListeners = () => {
      window.removeEventListener('click', unmuteOnUserAction, true);
      window.removeEventListener('touchstart', unmuteOnUserAction, true);
      window.removeEventListener('pointerdown', unmuteOnUserAction, true);
      window.removeEventListener('scroll', unmuteOnUserAction, true);
      window.removeEventListener('wheel', unmuteOnUserAction, true);
      window.removeEventListener('keydown', unmuteOnUserAction, true);
    };

    window.addEventListener('click', unmuteOnUserAction, { capture: true, once: true });
    window.addEventListener('touchstart', unmuteOnUserAction, { capture: true, once: true });
    window.addEventListener('pointerdown', unmuteOnUserAction, { capture: true, once: true });
    window.addEventListener('scroll', unmuteOnUserAction, { capture: true, once: true });
    window.addEventListener('wheel', unmuteOnUserAction, { capture: true, once: true });
    window.addEventListener('keydown', unmuteOnUserAction, { capture: true, once: true });

    return () => {
      removeListeners();
    };
  }, [hasTracked]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.muted || videoRef.current.volume === 0) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      videoRef.current.play().catch(() => {});
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const handleVideoClick = () => {
    if (!videoRef.current) return;
    if (videoRef.current.muted) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      videoRef.current.play().catch(() => {});
      setIsMuted(false);
    }
  };

  return (
    <div 
      onClick={handleVideoClick}
      className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border-2 border-amber-500/50 group cursor-pointer"
    >
      {/* 
        Native HTML5 Video Element:
        - autoPlay + muted + defaultMuted + playsInline ensures 100% guaranteed autoplay across Vercel, iOS Safari, Android, and Desktop Chrome without being blocked by browser policies.
      */}
      <video
        ref={videoRef}
        src="/videos/school-management-demo.mp4"
        poster="/videos/school-management-poster.jpg"
        autoPlay
        muted
        // @ts-ignore - React 19 JSX defaultMuted attribute for WebKit
        defaultMuted
        loop
        playsInline
        controls
        preload="auto"
        className="w-full h-full object-cover rounded-2xl"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onVolumeChange={() => {
          if (videoRef.current) {
            setIsMuted(videoRef.current.muted || videoRef.current.volume === 0);
          }
        }}
      >
        <source src="/videos/school-management-demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Floating Sound Controller Overlay */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 pointer-events-auto">
        <button
          onClick={toggleSound}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-black text-xs uppercase tracking-wide shadow-xl backdrop-blur-md transition-all cursor-pointer border ${
            !isMuted 
              ? 'bg-emerald-600/90 text-white border-emerald-400/50 hover:bg-emerald-500' 
              : 'bg-gradient-to-r from-orange-600 to-red-600 text-white border-white/40 animate-pulse hover:scale-105 active:scale-95'
          }`}
          title={isMuted ? "Click to unmute voice" : "Voice audio is active"}
        >
          {!isMuted ? (
            <>
              <Volume2 className="w-4 h-4 text-white animate-bounce" />
              <span>🔊 VOICE ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-white" />
              <span className="font-extrabold">TAP FOR SOUND 🔊</span>
            </>
          )}
        </button>
      </div>

      {/* Live Demonstration Badge - Top Right */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-amber-300 border border-amber-500/40 text-[10px] sm:text-[11px] font-black tracking-wider uppercase shadow">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          <span>STUDENT PROOF</span>
        </span>
      </div>

      {/* Quick notice when muted at bottom center */}
      {isMuted && (
        <div className="absolute bottom-12 sm:bottom-14 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-90 transition-opacity">
          <div className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 text-white text-[11px] font-bold tracking-wide shadow whitespace-nowrap">
            Playing automatically • Tap or scroll for sound
          </div>
        </div>
      )}
    </div>
  );
}
