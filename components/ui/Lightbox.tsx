"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Frame } from "@/components/ui/Frame";
import type { GalleryImage } from "@/data/content";

interface LightboxProps {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;
  const active = isOpen ? images[index] : null;

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(((index as number) + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate(((index as number) - 1 + images.length) % images.length);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, index, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && active && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 px-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photo viewer"
            className="absolute right-[max(1.25rem,env(safe-area-inset-right))] top-[max(1.25rem,env(safe-area-inset-top))] z-10 flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 text-cream/80 transition-colors hover:border-cream hover:text-cream"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(((index as number) - 1 + images.length) % images.length);
                }}
                aria-label="Previous photo"
                className="absolute left-[max(0.75rem,env(safe-area-inset-left))] top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition-colors hover:border-cream hover:text-cream sm:left-6"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.25} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(((index as number) + 1) % images.length);
                }}
                aria-label="Next photo"
                className="absolute right-[max(0.75rem,env(safe-area-inset-right))] top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition-colors hover:border-cream hover:text-cream sm:right-6"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.25} />
              </button>
            </>
          )}

          <motion.div
            key={active.id}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex max-h-[85vh] w-full max-w-4xl flex-col items-center"
          >
            <Frame
              src={active.src}
              alt={active.alt}
              className="aspect-[3/2] w-full max-h-[70vh] rounded-sm shadow-soft"
            />
            {active.caption && (
              <p className="mt-5 text-center font-serif text-base italic text-cream/85">
                {active.caption}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
