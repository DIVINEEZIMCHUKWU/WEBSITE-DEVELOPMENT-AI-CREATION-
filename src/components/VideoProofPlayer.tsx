import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Volume2, VolumeX, Play, RotateCcw } from 'lucide-react';

export default function VideoProofPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Play with full loud sound from the beginning (0:00)
  const playFromBeginningWithSound = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // Always restart from the beginning when clicked, with loud sound ON
    video.currentTime = 0;
    video.muted = false;
    video.volume = 1.0;

    const promise = video.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          setIsMuted(false);
          setIsPlaying(true);
        })
        .catch((err) => {
          console.debug('Unmuted play blocked by browser policy:', err);
          // If browser still restricts unmuted audio, ensure it plays at least
          video.play().then(() => setIsPlaying(true)).catch(() => {});
        });
    }
  }, []);

  // Primary ref callback:
  // Starts playing automatically by default on page load (muted for browser compliance)
  const setVideoRef = useCallback((node: HTMLVideoElement | null) => {
    if (node) {
      videoRef.current = node;
      node.muted = true;
      node.defaultMuted = true;
      node.playsInline = true;
      
      const p = node.play();
      if (p !== undefined) {
        p.then(() => {
          setIsPlaying(true);
          // Attempt unmuting immediately if browser MEI permits
          node.muted = false;
          node.volume = 1.0;
          setIsMuted(false);
        }).catch(() => {
          // Fallback to active muted playback so video is constantly rolling on page load
          node.muted = true;
          node.play().then(() => {
            setIsPlaying(true);
            setIsMuted(true);
          }).catch(() => {});
        });
      }
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure the video is actively streaming
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }

    // On the very first user interaction anywhere on the document, unmute loud sound
    const handleDocumentInteraction = () => {
      const v = videoRef.current;
      if (v && v.muted) {
        v.muted = false;
        v.volume = 1.0;
        v.play().then(() => {
          setIsMuted(false);
          setIsPlaying(true);
        }).catch(() => {});
      }
    };

    document.addEventListener('click', handleDocumentInteraction, { capture: true });
    document.addEventListener('pointerdown', handleDocumentInteraction, { capture: true });
    document.addEventListener('touchstart', handleDocumentInteraction, { capture: true });

    // Intersection Observer to keep playback rolling when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && video.paused) {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(video);

    return () => {
      document.removeEventListener('click', handleDocumentInteraction, { capture: true });
      document.removeEventListener('pointerdown', handleDocumentInteraction, { capture: true });
      document.removeEventListener('touchstart', handleDocumentInteraction, { capture: true });
      observer.disconnect();
    };
  }, []);

  // When user clicks the video or orange button: ALWAYS plays from beginning with sound
  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playFromBeginningWithSound();
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.muted || video.volume === 0) {
      video.muted = false;
      video.volume = 1.0;
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div 
      onClick={handleVideoClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border-4 border-orange-500 group cursor-pointer"
    >
      {/* 
        Native HTML5 Video Element:
        - autoPlay + muted guarantees rolling video by default across all browsers
        - playsInline prevents forced fullscreen on mobile
      */}
      <video
        ref={setVideoRef}
        src="/videos/school-management-demo.mp4"
        poster="/videos/school-management-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="auto"
        className="w-full h-full object-cover rounded-xl"
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

      {/* 
        CENTER ORANGE PLAY BUTTON OVERLAY
        Clicking this restarts the video from the beginning (0:00) with loud sound ON
      */}
      {isMuted && (
        <div 
          onClick={handleVideoClick}
          className="absolute inset-0 bg-black/40 backdrop-blur-2xs flex items-center justify-center p-4 z-20 cursor-pointer transition-all hover:bg-black/30"
        >
          <div className="flex flex-col items-center gap-3 transform transition-all duration-300 hover:scale-105 active:scale-95">
            
            {/* Animated Pulsing Ring & Big Play Button */}
            <div className="relative flex items-center justify-center">
              <span className="absolute w-24 h-24 rounded-full bg-orange-500/50 animate-ping"></span>
              <button
                type="button"
                onClick={handleVideoClick}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-600 hover:bg-orange-500 text-white flex items-center justify-center shadow-2xl border-2 border-white transition-all cursor-pointer shadow-orange-600/50"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
              </button>
            </div>

            {/* Click to Watch Banner */}
            <button
              type="button"
              onClick={handleVideoClick}
              className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-2xl border border-white/60 cursor-pointer animate-pulse"
            >
              ▶ CLICK TO RESTART FROM BEGINNING WITH LOUD SOUND (100%)
            </button>
            
            <p className="text-[11px] text-white/95 font-bold drop-shadow">
              Tap anywhere on this video to hear the complete student demonstration from the start
            </p>
          </div>
        </div>
      )}

      {/* Top Left Audio Status & Restart Pill */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 pointer-events-auto flex items-center gap-2">
        <button
          type="button"
          onClick={toggleSound}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-black text-xs uppercase tracking-wide shadow-xl transition-all cursor-pointer border ${
            !isMuted 
              ? 'bg-blue-600 text-white border-white/40 hover:bg-blue-500 shadow-blue-600/40' 
              : 'bg-orange-600 text-white border-white/50 animate-pulse hover:scale-105 shadow-orange-600/40'
          }`}
          title={!isMuted ? "Sound is ON (100% volume)" : "Click to unmute sound"}
        >
          {!isMuted ? (
            <>
              <Volume2 className="w-4 h-4 text-white" />
              <span>SOUND ON (100% LOUD)</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-white" />
              <span>CLICK FOR LOUD SOUND 🔊</span>
            </>
          )}
        </button>

        {/* Play From Beginning Quick Button */}
        <button
          type="button"
          onClick={handleVideoClick}
          className="p-2 rounded-xl bg-black/70 hover:bg-black text-white border border-white/30 text-xs font-bold transition-all shadow-md cursor-pointer flex items-center gap-1"
          title="Play from start with sound"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline text-[10px] uppercase">Restart</span>
        </button>
      </div>

      {/* Student Proof Badge - Top Right */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 text-white border border-orange-500 text-[10px] sm:text-[11px] font-black tracking-wider uppercase shadow">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
          <span>STUDENT PROOF</span>
        </span>
      </div>

    </div>
  );
}
