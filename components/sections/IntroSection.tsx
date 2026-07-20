import { Reveal } from "@/components/layout/Reveal";
import { introSection } from "@/data/content";

export function IntroSection() {
  return (
    <section
      id="intro"
      className="relative flex min-h-[100svh] w-full items-center justify-center bg-cream-soft px-6 py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold-deep">
            {introSection.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="mt-6 text-balance font-display text-3xl italic text-ink sm:text-4xl md:text-5xl">
            {introSection.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-xl font-serif text-lg leading-relaxed text-ink-soft">
            {introSection.body}
          </p>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mt-16 flex flex-col items-center">
            <span className="h-px w-12 bg-gold-deep/40" />
            <blockquote className="mt-8 text-balance font-serif text-2xl italic leading-relaxed text-ink sm:text-3xl">
              &ldquo;{introSection.quote}&rdquo;
            </blockquote>
            <cite className="mt-5 font-sans text-sm not-italic tracking-wide text-ink-faint">
              — {introSection.attribution}
            </cite>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
