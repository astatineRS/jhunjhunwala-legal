import Image from "next/image";
import Link from "next/link";
import type { Insight } from "@/content/insights";
import { cn } from "@/lib/utils";
import ArrowBadge from "@/components/ui/ArrowBadge";

/**
 * The single article card used everywhere articles are listed: rounded plate
 * with a gold arrow chip, serif title, then read time and date on one line.
 */
export default function InsightCard({
  insight,
  badge = "gold",
  className,
}: {
  insight: Insight;
  badge?: "gold" | "teal";
  className?: string;
}) {
  return (
    <Link
      href={`/resources/${insight.slug}`}
      className={cn("group flex h-full flex-col", className)}
    >
      <div className="relative aspect-[2/1] md:aspect-[3/2] overflow-hidden rounded-[var(--radius-card)]">
        <Image
          src={insight.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1.1s] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
        />
        <span className="absolute right-4 top-4">
          <ArrowBadge tone={badge} size={40} />
        </span>
      </div>

      <h3 className="mt-4 md:mt-5 font-display text-[1.125rem] md:text-[1.3125rem] font-semibold leading-snug text-ink transition-colors duration-400 group-hover:text-teal">
        {insight.title}
      </h3>

      <div className="mt-auto flex items-center justify-between gap-4 pt-2 md:pt-2.5 text-[0.875rem] md:text-[0.9375rem] text-ink/60">
        <span>{insight.readTime}</span>
        <span>{insight.date}</span>
      </div>
    </Link>
  );
}
