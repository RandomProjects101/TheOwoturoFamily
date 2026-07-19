import {
  BookOpen,
  Church,
  Coffee,
  Flower2,
  Footprints,
  Music2,
  Soup,
  Sun,
  Trees,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/layout/Reveal";
import { thingsSheLoved, type IconKey } from "@/data/content";

const ICONS: Record<IconKey, LucideIcon> = {
  flower: Flower2,
  music: Music2,
  food: Soup,
  family: Users,
  faith: Church,
  garden: Trees,
  book: BookOpen,
  sun: Sun,
  tea: Coffee,
  dance: Footprints,
};

export function ThingsSheLoved() {
  return (
    <section
      id="loved"
      className="relative w-full bg-cream-soft px-6 py-28"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold-deep">
            Things She Loved
          </p>
          <h2 className="mt-5 font-display text-3xl italic text-ink sm:text-4xl">
            The small things that were her
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {thingsSheLoved.map((thing, i) => {
            const Icon = ICONS[thing.icon];
            return (
              <Reveal key={thing.id} delay={(i % 4) * 0.1} y={20}>
                <div className="group flex h-full flex-col items-center rounded-md border border-beige-deep/50 bg-paper px-6 py-10 text-center shadow-card transition-transform duration-500 hover:-translate-y-1.5">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-beige text-gold-deep transition-colors duration-500 group-hover:bg-gold/15">
                    <Icon className="h-6 w-6" strokeWidth={1.25} />
                  </span>
                  <h3 className="mt-6 font-display text-lg italic text-ink">
                    {thing.title}
                  </h3>
                  <p className="mt-3 font-serif text-sm leading-relaxed text-ink-soft">
                    {thing.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
