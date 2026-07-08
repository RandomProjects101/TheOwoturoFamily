"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Frame } from "@/components/ui/Frame";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { Reveal } from "@/components/layout/Reveal";
import { familyVoices, type FamilyVoice } from "@/data/content";

const EASE = [0.16, 1, 0.3, 1] as const;

function VoiceCard({ voice, delay }: { voice: FamilyVoice; delay: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Reveal delay={delay} y={24}>
      <div className="h-full rounded-md border border-beige-deep/50 bg-paper p-6 shadow-card sm:p-8">
        <div className="flex items-center gap-4">
          <Frame
            src={voice.photo}
            alt={voice.name}
            monogram={voice.name}
            className="h-16 w-16 shrink-0 rounded-full"
            sizes="64px"
          />
          <div>
            <h3 className="font-display text-xl italic text-ink">{voice.name}</h3>
            <p className="mt-0.5 font-sans text-xs uppercase tracking-[0.2em] text-gold-deep">
              {voice.relation}
            </p>
          </div>
        </div>

        <p className="mt-6 font-serif text-base italic leading-relaxed text-ink-soft">
          &ldquo;{voice.message}&rdquo;
        </p>

        <div className="mt-6">
          {!expanded ? (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-gold/40 px-4 py-2.5 font-sans text-[11px] uppercase tracking-[0.1em] text-gold-deep transition-colors duration-300 hover:border-gold hover:bg-gold/10 sm:gap-2.5 sm:px-5 sm:text-xs sm:tracking-[0.15em]"
            >
              <Play className="h-3 w-3 shrink-0" strokeWidth={1.5} fill="currentColor" />
              Play voice message
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <div className="pt-1">
                <AudioPlayer
                  id={voice.id}
                  src={voice.audioSrc}
                  seedLabel={voice.name}
                  autoPlayOnMount
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export function FamilySpeaks() {
  return (
    <section
      id="voices"
      className="relative w-full bg-cream-soft px-6 py-28"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold-deep">
            The Family Speaks
          </p>
          <h2 className="mt-5 font-display text-3xl italic text-ink sm:text-4xl">
            In their own words
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 [&>*:last-child:nth-child(odd)]:sm:col-span-2 [&>*:last-child:nth-child(odd)]:sm:mx-auto [&>*:last-child:nth-child(odd)]:sm:w-full [&>*:last-child:nth-child(odd)]:sm:max-w-md">
          {familyVoices.map((voice, i) => (
            <VoiceCard key={voice.id} voice={voice} delay={(i % 2) * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
