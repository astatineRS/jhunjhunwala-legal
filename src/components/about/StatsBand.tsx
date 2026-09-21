import { stats } from "@/content/home";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

/** Teal measurement band — the practice in four numbers. */
export default function StatsBand() {
  return (
    <section className="bg-teal py-16 md:py-20">
      <div className="container-page">
        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              as="li"
              key={stat.label}
              delay={index}
              className={index === 0 ? "relative" : "relative lg:pl-8"}
            >
              {index > 0 ? (
                <span
                  aria-hidden
                  className="absolute left-0 top-1 hidden h-[calc(100%-0.5rem)] w-px bg-cream/20 lg:block"
                />
              ) : null}
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                className="block font-display text-[clamp(2.75rem,5vw,3.75rem)] font-semibold leading-none text-cream"
              />
              <span className="mt-3 block text-[0.9375rem] tracking-wide text-cream/70">
                {stat.label}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
