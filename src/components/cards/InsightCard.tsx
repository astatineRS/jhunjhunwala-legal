import Image from "next/image";
import Link from "next/link";
import type { Insight } from "@/content/insights";
import { cn } from "@/lib/utils";
import ArrowBadge from "@/components/ui/ArrowBadge";

export default function InsightCard({
  insight,
  tone = "cream",
  badge = "gold",
  className,
}: {
  insight: Insight;
  tone?: "cream" | "white";
  badge?: "gold" | "teal";
  className?: string;
}) {
  return (
    <Link
      href={`/resources/${insight.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] transition-all duration-600 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]",
        tone === "cream" ? "bg-cream" : "bg-white",
        className,
      )}
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={insight.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[1.1s] ease-[var(--ease-out-expo)] group-hover:scale-[1.07]"
        />
        <span className="absolute right-4 top-4">
          <ArrowBadge tone={badge} size={34} />
        </span>
        <span className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-cream backdrop-blur">
          {insight.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[1.3125rem] font-semibold leading-snug text-ink transition-colors duration-400 group-hover:text-teal">
          {insight.title}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-5 text-[0.875rem] text-ink/55">
          <span>{insight.readTime}</span>
          <span>{insight.date}</span>
        </div>
      </div>
    </Link>
  );
}
