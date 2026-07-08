import { Frame } from "@/components/ui/Frame";
import { Reveal } from "@/components/layout/Reveal";
import { photoWallImages } from "@/data/content";
import { cn } from "@/lib/utils";

function MarqueeRow({ images, direction }: { images: string[]; direction: "left" | "right" }) {
  const doubled = [...images, ...images];
  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={cn(
          "flex w-max gap-5 [animation-play-state:running] hover:[animation-play-state:paused]",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        )}
      >
        {doubled.map((src, i) => (
          <Frame
            key={`${src}-${i}`}
            src={src}
            alt="A cherished family moment"
            monogram="O"
            className="h-56 w-44 shrink-0 rounded-sm shadow-card sm:h-64 sm:w-52"
            sizes="220px"
          />
        ))}
      </div>
    </div>
  );
}

export function PhotoWall() {
  const half = Math.ceil(photoWallImages.length / 2);
  const rowOne = photoWallImages.slice(0, half);
  const rowTwo = photoWallImages.slice(half).length
    ? photoWallImages.slice(half)
    : photoWallImages;

  return (
    <section
      id="wall"
      className="relative w-full overflow-hidden bg-cream py-28"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold-deep">
            Photo Wall
          </p>
          <h2 className="mt-5 font-display text-3xl italic text-ink sm:text-4xl">
            A wall of everyday moments
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.2} y={16} className="mt-16 flex flex-col gap-5">
        <MarqueeRow images={rowOne} direction="left" />
        <MarqueeRow images={rowTwo} direction="right" />
      </Reveal>
    </section>
  );
}
