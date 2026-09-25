import Image from "next/image";
import Link from "next/link";
import type { PracticeArea } from "@/content/practice-areas";
import { cn } from "@/lib/utils";
import ArrowBadge from "@/components/ui/ArrowBadge";

/**
 * Expertise grid tile: photograph, title, teaser, arrow chip.
 *
 * The tile used to open with an outline glyph identical on all eight cards, so
 * the grid read as a wall of paragraphs. The photograph is the practice area's
 * own, and the teal wipe now runs under the copy only — sliding it under the
 * image as well would have meant animating a colour behind an opaque picture.
 */
export default function PracticeCard({
  area,
  badge = "teal",
  className,
  sizes = "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw",
}: {
  area: PracticeArea;
  /** Resting colour of the arrow chip; it swaps to the other tone on hover. */
  badge?: "teal" | "gold";
  className?: string;
  sizes?: string;
}) {
  return (
    <Link
      href={`/expertise/${area.slug}`}
      scroll
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white transition-all duration-600 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={area.image}
          alt=""
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1.1s] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
        <span className="absolute right-3 top-3 md:right-4 md:top-4">
          <ArrowBadge
            tone={badge}
            size={34}
            className={cn(
              "transition-colors duration-500",
              badge === "teal" ? "group-hover:bg-gold" : "group-hover:bg-teal",
            )}
          />
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-5 md:p-7">
        <span className="pointer-events-none absolute inset-0 translate-y-full bg-teal transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-y-0" />

        <h3 className="relative z-10 font-display text-[1.125rem] md:text-[1.375rem] font-semibold leading-snug text-ink transition-colors duration-500 group-hover:text-cream">
          {area.title}
        </h3>
        <p className="relative z-10 mt-2 md:mt-3 text-[0.875rem] md:text-[0.9375rem] leading-relaxed text-ink/65 transition-colors duration-500 group-hover:text-cream/80">
          {area.teaser}
        </p>
      </div>
    </Link>
  );
}
