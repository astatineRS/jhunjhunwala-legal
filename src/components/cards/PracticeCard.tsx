import Link from "next/link";
import type { PracticeArea } from "@/content/practice-areas";
import { cn } from "@/lib/utils";
import ArrowBadge from "@/components/ui/ArrowBadge";

/** Expertise grid tile: outline glyph, title, teaser, arrow chip. */
export default function PracticeCard({
  area,
  badge = "teal",
  className,
}: {
  area: PracticeArea;
  /** Resting colour of the arrow chip; it swaps to the other tone on hover. */
  badge?: "teal" | "gold";
  className?: string;
}) {
  return (
    <Link
      href={`/expertise/${area.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white p-7 transition-all duration-600 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-0 -z-0 translate-y-full bg-teal transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-y-0" />

      <div className="relative z-10 flex items-start justify-between gap-6">
        <svg viewBox="0 0 40 40" className="size-10 text-ink transition-colors duration-500 group-hover:text-cream" fill="none" aria-hidden>
          <rect x="7" y="11" width="26" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
          <rect x="11" y="7" width="18" height="26" rx="3" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        <ArrowBadge
          tone={badge}
          size={34}
          className={cn(
            "transition-colors duration-500",
            badge === "teal" ? "group-hover:bg-gold" : "group-hover:bg-teal",
          )}
        />
      </div>

      <h3 className="relative z-10 mt-14 font-display text-[1.375rem] font-semibold leading-snug text-ink transition-colors duration-500 group-hover:text-cream">
        {area.title}
      </h3>
      <p className="relative z-10 mt-3 text-[0.9375rem] leading-relaxed text-ink/65 transition-colors duration-500 group-hover:text-cream/80">
        {area.teaser}
      </p>
    </Link>
  );
}
