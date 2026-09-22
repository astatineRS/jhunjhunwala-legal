import { mandates } from "@/content/home";
import ArrowBadge from "@/components/ui/ArrowBadge";
import Marquee from "@/components/ui/Marquee";

/**
 * Recent-mandate strip. Sits across the hero boundary on a negative margin, so
 * the pills read as floating over the photograph and settling onto the page.
 */
export default function MandateMarquee() {
  return (
    <section
      aria-label="Recent mandates"
      className="relative z-10 -mt-[4.5rem] md:-mt-[5.5rem]"
    >
      <Marquee duration={70}>
        {mandates.map((mandate) => (
          <article
            key={mandate}
            className="group mr-4 flex w-[19rem] items-center gap-4 rounded-[2.25rem] bg-white/10 px-5 py-4 ring-1 ring-white/20 backdrop-blur-md transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 sm:w-[22rem]"
          >
            <ArrowBadge tone="teal" size={34} />
            <p className="line-clamp-3 text-[0.8125rem] leading-snug text-cream/85">{mandate}</p>
          </article>
        ))}
      </Marquee>
    </section>
  );
}
