import Link from "next/link";
import type { Insight } from "@/content/insights";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import { ArrowUpRight } from "@/components/ui/icons";

/** Editorial lead-in for the most recent article: plate left, copy right. */
export default function FeaturedInsight({ insight }: { insight: Insight }) {
  return (
    <section className="bg-cream pb-10 pt-10 md:pb-20 md:pt-20">
      <div className="container-page grid items-start gap-5 md:gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <ParallaxImage
            src={insight.image}
            alt=""
            className="aspect-[2/1] md:aspect-[3/2] w-full rounded-[var(--radius-card)]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            distance={40}
            priority
          />
        </Reveal>

        <div>
          <SplitText
            as="h2"
            text={insight.title}
            className="display-2 text-balance-pretty text-ink"
          />

          <Reveal
            delay={1}
            className="mt-5 md:mt-7 flex items-center justify-between gap-4 text-[0.875rem] md:text-[0.9375rem] text-ink/60"
          >
            <span>{insight.readTime}</span>
            <span>{insight.date}</span>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-4 md:mt-5 text-balance-pretty text-[0.9375rem] md:text-[1.0625rem] leading-relaxed text-ink/75">
              {insight.excerpt}
            </p>
          </Reveal>

          <Reveal delay={3} className="mt-6 md:mt-10">
            <Link
              href={`/resources/${insight.slug}`}
              className="group inline-flex items-center gap-3 text-[1.0625rem] font-semibold text-ink transition-colors duration-500 ease-[var(--ease-out-expo)] hover:text-teal"
            >
              <span>Read More</span>
              <ArrowUpRight className="size-[18px] text-teal transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
