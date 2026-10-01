import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Volume2, VolumeX, Play, Volume1 } from 'lucide-react';
import { trackMetaCustom } from '../utils/metaPixel';

export default function VideoProofPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // Default sound state is ON (unmuted)
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to unmute and ensure 100% volume
  const activateSound = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = 1.0;
    
    // If the video was playing silently for the first few seconds, restart from 0 so visitor hears everything
    if (video.currentTime < 5) {
      video.currentTime = 0;
    }

    const p = video.play();
    if (p !== undefined) {
      p.then(() => {
        setIsMuted(false);
        setIsPlaying(true);
        trackMetaCustom('VideoSoundActive', { content_name: 'School Management Demo' });
      }).catch((err) => {
        console.debug('Direct unmuted play blocked by browser policy:', err);
      });
    }
  }, []);

  // Primary playback handler
  const playVideoWithSound = useCallback((video: HTMLVideoElement) => {
    video.volume = 1.0;
    video.muted = false;

    const promise = video.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          // Direct unmuted autoplay allowed by browser!
          setIsPlaying(true);
          setIsMuted(false);
        })
        .catch((err) => {
          console.debug('Browser blocked initial unmuted play, fallback to silent preview until user clicks:', err);
          // Fallback to muted playback so visitor sees active video preview
          video.muted = true;
          video.play().then(() => {
            setIsPlaying(true);
            setIsMuted(true);
          }).catch(() => {});
        });
    }
  }, []);

  // Ref callback to initialize video on mount
  const setVideoRef = useCallback((node: HTMLVideoElement | null) => {
    if (node) {
      videoRef.current = node;
      node.volume = 1.0;
      node.muted = false;
      playVideoWithSound(node);
    }
  }, [playVideoWithSound]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Global listener: On ANY valid user click or tap anywhere on the entire page, immediately unmute!
    const handleDocumentInteraction = () => {
      const v = videoRef.current;
      if (v && (v.muted || v.volume === 0)) {
        v.muted = false;
        v.volume = 1.0;
        if (v.currentTime < 5) {
          v.currentTime = 0;
        }
        v.play().then(() => {
          setIsMuted(false);
          setIsPlaying(true);
        }).catch(() => {});
      }
    };

    // Use ONLY real User Activation events (click, pointerdown, touchend)
    // NEVER use scroll or mousemove as they are rejected by Chrome/Safari and break the activation token
    document.addEventListener('click', handleDocumentInteraction, { capture: true });
    document.addEventListener('pointerdown', handleDocumentInteraction, { capture: true });
    document.addEventListener('touchend', handleDocumentInteraction, { capture: true });

    // When video enters viewport, make sure it's playing
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && video.paused) {
            video.play().catch(() => {});
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(video);

    return () => {
      document.removeEventListener('click', handleDocumentInteraction, { capture: true });
      document.removeEventListener('pointerdown', handleDocumentInteraction, { capture: true });
      document.removeEventListener('touchend', handleDocumentInteraction, { capture: true });
      observer.disconnect();
    };
  }, []);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.muted || video.volume === 0) {
      activateSound();
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const handleContainerClick = () => {
    activateSound();
  };

  return (
    <div 
      onClick={handleContainerClick}
      className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border-2 border-amber-500/50 group cursor-pointer"
    >
      {/* 
        Native HTML5 Video Element:
        - Volume set to 1.0 (100% volume)
        - Sound unmuted by default
        - Optimized with faststart for zero-latency streaming
      */}
      <video
        ref={setVideoRef}
        src="/videos/school-management-demo.mp4"
        poster="/videos/school-management-poster.jpg"
        autoPlay
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

      {/* Prominent High-Visibility Unmute Banner when muted by browser policy */}
      {isMuted && (
        <div 
          onClick={activateSound}
          className="absolute inset-0 bg-black/40 backdrop-blur-2xs flex flex-col items-center justify-center p-4 z-20 transition-all hover:bg-black/30 cursor-pointer"
        >
          {/* Animated Pulsing Sound Waves Button */}
          <div className="relative flex items-center justify-center mb-3">
            <span className="absolute w-24 h-24 rounded-full bg-orange-500/40 animate-ping"></span>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white flex items-center justify-center shadow-2xl shadow-orange-500/80 group-hover:scale-110 active:scale-95 transition-transform border-2 border-white">
              <Volume2 className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-bounce" />
            </div>
          </div>

          <div className="text-center max-w-md px-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-xl border border-orange-400">
              <Volume2 className="w-4 h-4 shrink-0 animate-pulse" />
              <span>CLICK TO TURN SOUND ON (100% VOICE)</span>
            </span>
            <p className="text-[11px] sm:text-xs text-white/95 font-bold mt-2 drop-shadow-md">
              Tap anywhere on this video to listen to the full demonstration
            </p>
          </div>
        </div>
      )}

      {/* Top Left Audio Status Pill */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 pointer-events-auto">
        <button
          onClick={toggleSound}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-black text-xs uppercase tracking-wide shadow-xl backdrop-blur-md transition-all cursor-pointer border ${
            !isMuted 
              ? 'bg-emerald-600/95 text-white border-emerald-400/60 hover:bg-emerald-500 shadow-emerald-500/40' 
              : 'bg-gradient-to-r from-orange-600 to-red-600 text-white border-white/50 animate-pulse hover:scale-105 active:scale-95 shadow-red-500/40'
          }`}
          title={!isMuted ? "Voice is ON (100% volume)" : "Click to unmute voice"}
        >
          {!isMuted ? (
            <>
              {/* Dancing sound equalizer bars */}
              <div className="flex items-end gap-0.5 h-3.5">
                <span className="w-1 bg-white rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-3"></span>
                <span className="w-1 bg-white rounded-full animate-[pulse_0.4s_ease-in-out_infinite] h-2"></span>
                <span className="w-1 bg-white rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3.5"></span>
              </div>
              <span>🔊 SOUND ON (100%)</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-white" />
              <span className="font-extrabold">CLICK FOR SOUND 🔊</span>
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
