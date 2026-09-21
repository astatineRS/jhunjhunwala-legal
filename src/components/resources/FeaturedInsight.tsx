import Link from "next/link";
import type { Insight } from "@/content/insights";
import ArrowBadge from "@/components/ui/ArrowBadge";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";

/** Editorial lead-in for the most recent article: parallax plate left, copy right. */
export default function FeaturedInsight({ insight }: { insight: Insight }) {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <ParallaxImage
            src={insight.image}
            alt=""
            className="aspect-[4/3] w-full rounded-[var(--radius-card)] shadow-[var(--shadow-card)]"
            sizes="(max-width: 1024px) 100vw, 52vw"
            distance={44}
            priority
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-teal">Latest reading</p>
          </Reveal>

          <SplitText
            as="h2"
            text={insight.title}
            className="display-2 mt-4 capitalize text-ink"
          />

          <Reveal
            delay={1}
            className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-[0.875rem] text-ink/55"
          >
            <span className="rounded-full bg-sand-soft px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-teal-deep">
              {insight.category}
            </span>
            <span>{insight.readTime}</span>
            <span aria-hidden className="size-1 rounded-full bg-ink/25" />
            <span>{insight.date}</span>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-6 max-w-xl text-balance-pretty text-[1.0625rem] leading-relaxed text-ink/70">
              {insight.excerpt}
            </p>
          </Reveal>

          <Reveal delay={3} className="mt-9">
            <Link
              href={`/resources/${insight.slug}`}
              className="group inline-flex items-center gap-3 text-[0.9375rem] font-medium text-teal transition-colors duration-500 ease-[var(--ease-out-expo)] hover:text-teal-deep"
            >
              <span>Read More</span>
              <ArrowBadge tone="teal" size={38} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
