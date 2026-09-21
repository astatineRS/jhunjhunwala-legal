import Image from "next/image";
import Link from "next/link";
import type { Insight } from "@/content/insights";
import Reveal from "@/components/ui/Reveal";

/** Compact list of neighbouring articles; sticks alongside the body on desktop. */
export default function RelatedRail({ insights }: { insights: Insight[] }) {
  return (
    <aside aria-label="Related articles" className="self-start lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
      <p className="eyebrow text-teal">Related reading</p>

      <ul className="mt-6 space-y-3">
        {insights.map((insight, index) => (
          <Reveal as="li" delay={index} key={insight.slug}>
            <Link
              href={`/resources/${insight.slug}`}
              className="group flex gap-4 rounded-[var(--radius-card)] bg-white p-3 transition-all duration-600 ease-[var(--ease-out-expo)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
            >
              <span className="relative size-[76px] shrink-0 overflow-hidden rounded-[10px]">
                <Image
                  src={insight.image}
                  alt=""
                  fill
                  sizes="76px"
                  className="object-cover transition-transform duration-[1.1s] ease-[var(--ease-out-expo)] group-hover:scale-[1.08]"
                />
              </span>
              <span className="flex min-w-0 flex-col justify-center">
                <span className="font-display text-[1.0625rem] font-semibold leading-snug text-ink transition-colors duration-400 group-hover:text-teal">
                  {insight.title}
                </span>
                <span className="mt-1.5 text-[0.8125rem] text-ink/50">
                  {insight.category} · {insight.readTime}
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>

      <div className="mt-6 rounded-[var(--radius-card)] bg-teal-deep p-6 text-cream">
        <p className="font-display text-[1.25rem] leading-snug">
          Prefer these in your inbox?
        </p>
        <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-cream/75">
          Write to us and we will send new briefings as they are published — no more than one a
          fortnight.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 text-[0.875rem] font-medium text-gold transition-colors duration-500 ease-[var(--ease-out-expo)] hover:text-sand"
        >
          Get in touch
          <span aria-hidden>→</span>
        </Link>
      </div>
    </aside>
  );
}
