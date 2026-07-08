"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Frame } from "@/components/ui/Frame";
import { Lightbox } from "@/components/ui/Lightbox";
import { Reveal } from "@/components/layout/Reveal";
import { familyPortrait } from "@/data/content";

export function FamilyGallery() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="gallery"
      className="relative w-full bg-cream px-6 py-28"
    >
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold-deep">
            Family Gallery
          </p>
          <h2 className="mt-5 font-display text-3xl italic text-ink sm:text-4xl">
            A moment we keep close
          </h2>
        </Reveal>

        <Reveal delay={0.15} y={24} className="mt-14">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label={`View photo: ${familyPortrait.caption ?? familyPortrait.alt}`}
            className="group relative mx-auto block w-full overflow-hidden rounded-sm shadow-soft"
          >
            <motion.div
              className="aspect-[3/2]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Frame
                src={familyPortrait.src}
                alt={familyPortrait.alt}
                monogram={familyPortrait.alt}
                className="h-full w-full"
                sizes="(min-width: 1024px) 896px, 100vw"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
          </button>

          {familyPortrait.caption && (
            <p className="mt-6 font-serif text-base italic text-ink-soft">
              {familyPortrait.caption}
            </p>
          )}
        </Reveal>
      </div>

      <Lightbox
        images={[familyPortrait]}
        index={isOpen ? 0 : null}
        onClose={() => setIsOpen(false)}
        onNavigate={() => {}}
      />
    </section>
  );
}
