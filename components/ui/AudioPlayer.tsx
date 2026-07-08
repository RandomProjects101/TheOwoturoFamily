"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { cn, createSeededRandom, formatTime, seededHash } from "@/lib/utils";
import { useAudioCoordinator } from "@/lib/audio-coordinator";

interface AudioPlayerProps {
  id: string;
  src: string;
  /** Any stable string (e.g. the speaker's name) used to generate a
   * consistent-looking waveform for this recording. */
  seedLabel: string;
  className?: string;
  /** Starts playback as soon as this player mounts — used when a card
   * reveals the player in direct response to a "play" press. */
  autoPlayOnMount?: boolean;
}

const BAR_COUNT = 44;

function generateWaveform(seedLabel: string): number[] {
  const random = createSeededRandom(seededHash(seedLabel) || 1);
  const bars: number[] = [];
  let last = 0.45;
  for (let i = 0; i < BAR_COUNT; i++) {
    const delta = (random() - 0.5) * 0.55;
    last = Math.min(1, Math.max(0.14, last + delta));
    bars.push(last);
  }
  return bars;
}

export function AudioPlayer({ id, src, seedLabel, className, autoPlayOnMount }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [unavailable, setUnavailable] = useState(false);
  const { activeId, requestPlay, release } = useAudioCoordinator();
  const bars = useMemo(() => generateWaveform(seedLabel), [seedLabel]);

  // When another recording starts, the coordinator's activeId changes and we
  // pause here — the <audio> element's own onPause event is what updates
  // `isPlaying`, so this effect only talks to the external DOM API.
  useEffect(() => {
    if (activeId !== id) {
      audioRef.current?.pause();
    }
  }, [activeId, id]);

  useEffect(() => {
    if (!autoPlayOnMount) return;
    const audio = audioRef.current;
    if (!audio) return;
    requestPlay(id);
    audio.play().catch(() => setUnavailable(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || unavailable) return;
    if (isPlaying) {
      audio.pause();
      release(id);
    } else {
      requestPlay(id);
      audio.play().catch(() => setUnavailable(true));
    }
  };

  const seekToRatio = (ratio: number) => {
    const audio = audioRef.current;
    if (!audio || !duration || unavailable) return;
    const next = Math.min(1, Math.max(0, ratio)) * duration;
    audio.currentTime = next;
    setCurrentTime(next);
  };

  const seekFromClientX = (clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    seekToRatio((clientX - rect.left) / rect.width);
  };

  const progress = duration ? currentTime / duration : 0;

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 0)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setCurrentTime(0);
          release(id);
        }}
        onError={() => setUnavailable(true)}
        className="hidden"
      />

      <button
        type="button"
        onClick={togglePlay}
        disabled={unavailable}
        aria-label={isPlaying ? "Pause recording" : "Play recording"}
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
          unavailable
            ? "cursor-not-allowed border-ink-faint/20 text-ink-faint/40"
            : "border-gold/40 bg-cream-soft text-gold-deep hover:border-gold hover:bg-gold/10"
        )}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" strokeWidth={1.5} fill="currentColor" />
        ) : (
          <Play className="ml-0.5 h-4 w-4" strokeWidth={1.5} fill="currentColor" />
        )}
      </button>

      <div className="min-w-0 flex-1">
        <div
          ref={trackRef}
          role="slider"
          aria-label="Seek recording"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
          aria-disabled={unavailable}
          tabIndex={unavailable ? -1 : 0}
          onClick={(e) => !unavailable && seekFromClientX(e.clientX)}
          onKeyDown={(e) => {
            if (unavailable) return;
            if (e.key === "ArrowRight") seekToRatio(progress + 0.05);
            if (e.key === "ArrowLeft") seekToRatio(progress - 0.05);
          }}
          className={cn(
            "relative flex h-9 w-full items-center gap-px",
            unavailable ? "opacity-40" : "cursor-pointer"
          )}
        >
          {bars.map((h, i) => {
            const filled = i / bars.length <= progress;
            return (
              <span
                key={i}
                className={cn(
                  "min-w-0 max-w-[3px] flex-1 rounded-full transition-colors duration-200",
                  filled ? "bg-gold-deep" : "bg-beige-deep"
                )}
                style={{ height: `${Math.round(h * 100)}%` }}
              />
            );
          })}

          {!unavailable && duration > 0 && (
            <span
              aria-hidden
              className="pointer-events-none absolute top-1/2 h-3 w-3 -translate-y-1/2 -translate-x-1/2 rounded-full bg-gold-deep shadow-[0_0_0_4px_rgba(185,148,92,0.18)]"
              style={{
                left: `${progress * 100}%`,
                animation: isPlaying ? "flicker 1.6s ease-in-out infinite" : undefined,
              }}
            />
          )}
        </div>

        <div className="mt-1.5 flex items-center justify-between font-sans text-xs tabular-nums text-ink-faint">
          <span>{unavailable ? "Recording coming soon" : formatTime(currentTime)}</span>
          {!unavailable && <span>{formatTime(duration)}</span>}
        </div>
      </div>
    </div>
  );
}
