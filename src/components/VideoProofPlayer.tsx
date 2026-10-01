import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';
import { trackMetaCustom } from '../utils/metaPixel';

export default function VideoProofPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // Default sound to ON (unmuted)
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Attempt unmuted playback as priority #1
  const playWithSound = useCallback(async (video: HTMLVideoElement) => {
    try {
      video.muted = false;
      video.volume = 1.0;
      await video.play();
      setIsPlaying(true);
      setIsMuted(false);
      setHasStarted(true);
      trackMetaCustom('VideoSoundActiveByDefault', { content_name: 'School Management Demo' });
    } catch (err) {
      console.debug('Direct unmuted play blocked by browser policy, falling back to muted autoplay with instant unmute trigger:', err);
      // Browser blocked unmuted autoplay: start video muted so visitor immediately sees it rolling
      video.muted = true;
      try {
        await video.play();
        setIsPlaying(true);
        setIsMuted(true);
        setHasStarted(true);
      } catch (e) {
        console.debug('Autoplay fallback error:', e);
      }

      // Unmute instantly on the very first micro-interaction anywhere on the page
      const enableAudioInstantly = () => {
        if (videoRef.current) {
          videoRef.current.muted = false;
          videoRef.current.volume = 1.0;
          videoRef.current.play().catch(() => {});
          setIsMuted(false);
          setIsPlaying(true);
          setHasStarted(true);
        }
        cleanup();
      };

      const cleanup = () => {
        window.removeEventListener('click', enableAudioInstantly, true);
        window.removeEventListener('touchstart', enableAudioInstantly, true);
        window.removeEventListener('pointerdown', enableAudioInstantly, true);
        window.removeEventListener('mousemove', enableAudioInstantly, true);
        window.removeEventListener('scroll', enableAudioInstantly, true);
        window.removeEventListener('wheel', enableAudioInstantly, true);
        window.removeEventListener('keydown', enableAudioInstantly, true);
      };

      window.addEventListener('click', enableAudioInstantly, { capture: true, once: true });
      window.addEventListener('touchstart', enableAudioInstantly, { capture: true, once: true });
      window.addEventListener('pointerdown', enableAudioInstantly, { capture: true, once: true });
      window.addEventListener('mousemove', enableAudioInstantly, { capture: true, once: true });
      window.addEventListener('scroll', enableAudioInstantly, { capture: true, once: true });
      window.addEventListener('wheel', enableAudioInstantly, { capture: true, once: true });
      window.addEventListener('keydown', enableAudioInstantly, { capture: true, once: true });
    }
  }, []);

  // Direct ref callback
  const setVideoRef = useCallback((node: HTMLVideoElement | null) => {
    if (node) {
      videoRef.current = node;
      node.volume = 1.0;
      node.muted = false;
      playWithSound(node);
    }
  }, [playWithSound]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Retry unmuted play when metadata is ready
    const onMetadata = () => {
      if (video.paused || video.muted) {
        playWithSound(video);
      }
    };

    video.addEventListener('loadedmetadata', onMetadata);
    video.addEventListener('canplay', onMetadata);

    // Observer: keep attempting unmuted playback when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && video.paused) {
            playWithSound(video);
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(video);

    return () => {
      video.removeEventListener('loadedmetadata', onMetadata);
      video.removeEventListener('canplay', onMetadata);
      observer.disconnect();
    };
  }, [playWithSound]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.muted || videoRef.current.volume === 0) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      videoRef.current.play().catch(() => {});
      setIsMuted(false);
      trackMetaCustom('VideoSoundActive', { content_name: 'School Management Demo' });
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const handleManualPlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.volume = 1.0;
    videoRef.current.play().then(() => {
      setIsPlaying(true);
      setIsMuted(false);
      setHasStarted(true);
    }).catch(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
        setHasStarted(true);
      }
    });
  };

  const handleVideoClick = () => {
    if (!videoRef.current) return;
    // Always unmute on click if muted
    if (videoRef.current.muted) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
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
        - Sound default: ON (volume 1.0, unmuted)
        - Faststart optimized streaming
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
        onPlay={() => {
          setIsPlaying(true);
          setHasStarted(true);
        }}
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

      {/* Center Play Overlay - If browser completely blocked autoplay before interaction */}
      {!isPlaying && (
        <div 
          onClick={handleManualPlay}
          className="absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center p-4 cursor-pointer z-30 transition-all hover:bg-black/50"
        >
          <div className="relative flex items-center justify-center mb-3">
            <span className="absolute w-20 h-20 rounded-full bg-orange-500/40 animate-ping"></span>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white flex items-center justify-center shadow-2xl shadow-orange-500/80 group-hover:scale-110 active:scale-95 transition-transform border-2 border-white/60">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white ml-1" />
            </div>
          </div>
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg">
              ▶ CLICK TO PLAY WITH SOUND
            </span>
            <p className="text-xs text-white/90 font-bold mt-1 drop-shadow">
              Complete School Management System Demonstration
            </p>
          </div>
        </div>
      )}

      {/* Floating Sound Controller Badge */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 pointer-events-auto">
        <button
          onClick={toggleSound}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-black text-xs uppercase tracking-wide shadow-xl backdrop-blur-md transition-all cursor-pointer border ${
            !isMuted 
              ? 'bg-emerald-600/95 text-white border-emerald-400/60 hover:bg-emerald-500 shadow-emerald-500/30' 
              : 'bg-gradient-to-r from-orange-600 to-red-600 text-white border-white/40 animate-pulse hover:scale-105 active:scale-95 shadow-red-500/30'
          }`}
          title={!isMuted ? "Sound is ON (100% volume)" : "Click to unmute"}
        >
          {!isMuted ? (
            <>
              <Volume2 className="w-4 h-4 text-white animate-bounce" />
              <span>🔊 SOUND ON (100%)</span>
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

    </div>
  );
}
