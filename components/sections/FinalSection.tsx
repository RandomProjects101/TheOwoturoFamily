import { Frame } from "@/components/ui/Frame";
import { DustParticles } from "@/components/ui/DustParticles";
import { Reveal } from "@/components/layout/Reveal";
import { family, finalSection } from "@/data/content";

export function FinalSection() {
  return (
    <section
      id="final"
      className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <Frame
          src={finalSection.photo}
          alt={`In loving memory of ${family.motherName}`}
          className="h-full w-full"
          sizes="100vw"
          showMonogram={false}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/45 to-ink/85" />

      <DustParticles />

      <div className="relative z-10 flex max-w-2xl flex-col items-center px-6 text-center text-cream">
        <Reveal amount={0.5} duration={1.4}>
          <p className="text-balance font-serif text-2xl italic leading-relaxed sm:text-3xl md:text-4xl">
            {finalSection.lineOne}
            <br />
            {finalSection.lineTwo}
          </p>
        </Reveal>

        <Reveal delay={0.5} amount={0.5} duration={1.2}>
          <p className="mt-10 font-display text-xl italic text-gold-soft">
            {finalSection.signOff}
          </p>
        </Reveal>

        <Reveal delay={0.8} amount={0.5} duration={1.2}>
          <p className="mt-3 font-sans text-xs uppercase tracking-[0.3em] text-cream/60">
            {finalSection.familySignature}
          </p>
        </Reveal>

        <Reveal delay={1.1} amount={0.5} duration={1.2}>
          <p className="mt-16 font-sans text-[11px] uppercase tracking-[0.25em] text-cream/40">
            In remembrance · {family.remembranceDate}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
