"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";
import { backgroundAudio } from "@/data/content";
import { cn } from "@/lib/utils";

/** Optional, muted-until-pressed background piano — browsers block
 * autoplay with sound, so this is the deliberate, user-initiated switch. */
export function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || unavailable) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.35;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setUnavailable(true));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-40"
    >
      <audio
        ref={audioRef}
        src={backgroundAudio.src}
        loop
        preload="none"
        onError={() => setUnavailable(true)}
        className="hidden"
      />
      <button
        type="button"
        onClick={toggle}
        disabled={unavailable}
        aria-pressed={isPlaying}
        aria-label={
          unavailable
            ? "Background music unavailable"
            : isPlaying
              ? "Pause background piano"
              : `Play ${backgroundAudio.label.toLowerCase()}`
        }
        title={
          unavailable
            ? "Music coming soon"
            : isPlaying
              ? "Pause music"
              : backgroundAudio.label
        }
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full border shadow-[0_6px_20px_rgba(44,38,32,0.12)] backdrop-blur-sm transition-all duration-300",
          unavailable
            ? "cursor-not-allowed border-ink-faint/20 bg-cream-soft/70 text-ink-faint/40"
            : "border-gold/40 bg-cream-soft/90 text-gold-deep hover:border-gold hover:bg-gold/10",
          isPlaying && "shadow-[0_0_0_5px_rgba(185,148,92,0.15)]"
        )}
      >
        {isPlaying ? (
          <Music className="h-4 w-4 animate-pulse" strokeWidth={1.5} />
        ) : unavailable ? (
          <VolumeX className="h-4 w-4" strokeWidth={1.5} />
        ) : (
          <Music className="h-4 w-4" strokeWidth={1.5} />
        )}
      </button>
    </motion.div>
  );
}
