import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Volume2, VolumeX, Play, RotateCcw } from 'lucide-react';
import { trackMetaCustom } from '../utils/metaPixel';

export default function VideoProofPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Direct ref callback ensures DOM element has muted=true before the browser evaluates autoplay
  const setVideoRef = useCallback((node: HTMLVideoElement | null) => {
    if (node) {
      videoRef.current = node;
      node.muted = true;
      node.defaultMuted = true;
      node.playsInline = true;
      // Immediate attempt
      const p = node.play();
      if (p !== undefined) {
        p.then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        }).catch((err) => {
          console.debug('Direct play waiting on data:', err);
        });
      }
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const playVideo = () => {
      video.muted = true;
      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            setIsPlaying(true);
            setHasStarted(true);
          })
          .catch((err) => {
            console.debug('Autoplay promise rejected:', err);
          });
      }
    };

    playVideo();

    // Intersection Observer: If user scrolls or loads into view, guarantee playback
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && video.paused) {
            playVideo();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(video);

    // Global listener: Turn voice audio ON at 100% volume on first user interaction anywhere
    const unmuteOnInteraction = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1.0;
        videoRef.current.play().catch(() => {});
        setIsMuted(false);
        setIsPlaying(true);
        setHasStarted(true);
      }
      removeListeners();
    };

    const removeListeners = () => {
      window.removeEventListener('click', unmuteOnInteraction, true);
      window.removeEventListener('touchstart', unmuteOnInteraction, true);
      window.removeEventListener('pointerdown', unmuteOnInteraction, true);
      window.removeEventListener('scroll', unmuteOnInteraction, true);
      window.removeEventListener('wheel', unmuteOnInteraction, true);
      window.removeEventListener('keydown', unmuteOnInteraction, true);
    };

    window.addEventListener('click', unmuteOnInteraction, { capture: true, once: true });
    window.addEventListener('touchstart', unmuteOnInteraction, { capture: true, once: true });
    window.addEventListener('pointerdown', unmuteOnInteraction, { capture: true, once: true });
    window.addEventListener('scroll', unmuteOnInteraction, { capture: true, once: true });
    window.addEventListener('wheel', unmuteOnInteraction, { capture: true, once: true });
    window.addEventListener('keydown', unmuteOnInteraction, { capture: true, once: true });

    return () => {
      observer.disconnect();
      removeListeners();
    };
  }, []);

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
      // If unmuted failed, play muted
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.play();
        setIsPlaying(true);
        setHasStarted(true);
      }
    });
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border-2 border-amber-500/50 group">
      
      {/* 
        Native HTML5 Video Element:
        - moov atom at beginning of file for instant streaming
        - muted + playsInline + autoPlay attributes ensure zero browser restriction
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
        className="w-full h-full object-cover rounded-2xl cursor-pointer"
        onCanPlay={(e) => {
          e.currentTarget.muted = true;
          e.currentTarget.play().catch(() => {});
        }}
        onLoadedData={(e) => {
          e.currentTarget.muted = true;
          e.currentTarget.play().catch(() => {});
        }}
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

      {/* If paused (e.g. strict low-battery mode on mobile), show a huge clickable PLAY button */}
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
              ▶ CLICK TO PLAY VIDEO DEMO
            </span>
            <p className="text-xs text-white/90 font-bold mt-1 drop-shadow">
              Complete School Management System Built With Free AI
            </p>
          </div>
        </div>
      )}

      {/* Floating Sound Toggle Pill - Active whenever playing */}
      {isPlaying && (
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 pointer-events-auto">
          <button
            onClick={toggleSound}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-black text-xs uppercase tracking-wide shadow-xl backdrop-blur-md transition-all cursor-pointer border ${
              !isMuted 
                ? 'bg-emerald-600/90 text-white border-emerald-400/50 hover:bg-emerald-500' 
                : 'bg-gradient-to-r from-orange-600 to-red-600 text-white border-white/40 animate-pulse hover:scale-105 active:scale-95'
            }`}
            title={isMuted ? "Click to turn on voice" : "Voice is active"}
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
      )}

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
