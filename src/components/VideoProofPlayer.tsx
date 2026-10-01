import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Volume1 } from 'lucide-react';
import { trackMetaCustom } from '../utils/metaPixel';

export default function VideoProofPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasTracked, setHasTracked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set voice volume to 100% and unmuted by default
    video.muted = false;
    video.volume = 1.0;

    const playWithAudio = async () => {
      try {
        await video.play();
        setIsPlaying(true);
        setIsMuted(false);
        if (!hasTracked) {
          trackMetaCustom('VideoAutoplaySound', {
            content_name: 'School Management System Demonstration',
            audio: 'on'
          });
          setHasTracked(true);
        }
      } catch (err) {
        // If the client's browser blocks unmuted audio on the raw initial load before first interaction:
        // 1. Play immediately (video is streaming and moving)
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {});

        // 2. Turn audio ON immediately on the very first user interaction anywhere on the screen (touch, scroll, click)
        const unmuteOnInteraction = () => {
          if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.volume = 1.0;
            videoRef.current.play().catch(() => {});
            setIsMuted(false);
          }
          cleanupListeners();
        };

        const cleanupListeners = () => {
          window.removeEventListener('touchstart', unmuteOnInteraction, true);
          window.removeEventListener('pointerdown', unmuteOnInteraction, true);
          window.removeEventListener('click', unmuteOnInteraction, true);
          window.removeEventListener('scroll', unmuteOnInteraction, true);
          window.removeEventListener('keydown', unmuteOnInteraction, true);
        };

        window.addEventListener('touchstart', unmuteOnInteraction, { capture: true, once: true });
        window.addEventListener('pointerdown', unmuteOnInteraction, { capture: true, once: true });
        window.addEventListener('click', unmuteOnInteraction, { capture: true, once: true });
        window.addEventListener('scroll', unmuteOnInteraction, { capture: true, once: true });
        window.addEventListener('keydown', unmuteOnInteraction, { capture: true, once: true });
      }
    };

    playWithAudio();
  }, [hasTracked]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.muted || videoRef.current.volume === 0) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border-2 border-amber-500/50 group">
      
      {/* Native HTML5 Video Element - Voice & Audio ON by default, Zero Redirects */}
      <video
        ref={videoRef}
        src="/videos/school-management-demo.mp4"
        poster="/videos/school-management-poster.jpg"
        autoPlay
        loop
        playsInline
        controls
        preload="auto"
        className="w-full h-full object-cover rounded-2xl cursor-pointer"
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

      {/* Voice Status Pill - Top Left */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 pointer-events-auto">
        <button
          onClick={toggleSound}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-black text-[11px] sm:text-xs uppercase tracking-wide shadow-xl backdrop-blur-md transition-all cursor-pointer border ${
            !isMuted 
              ? 'bg-emerald-600/90 text-white border-emerald-400/50 hover:bg-emerald-500' 
              : 'bg-orange-600/90 text-white border-orange-400/50 animate-pulse hover:bg-orange-500'
          }`}
          title={isMuted ? "Click to unmute" : "Audio is on"}
        >
          {!isMuted ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-white animate-bounce" />
              <span>🔊 VOICE ACTIVE</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-white" />
              <span>TAP TO UNMUTE</span>
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

    </div>
  );
}
