import Link from "next/link";
import { practiceAreas } from "@/content/practice-areas";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/icons";

/**
 * Sticky index of every practice area. Sticks below the fixed header on
 * desktop; on smaller screens it simply sits above the article body.
 */
export default function ServicesSidebar({ currentSlug }: { currentSlug: string }) {
  return (
    <nav
      aria-label="All expertise areas"
      className="flex h-full flex-col rounded-[var(--radius-card)] bg-sand-soft p-7 shadow-[var(--shadow-card)]"
    >
      <p className="eyebrow text-teal">Our Expertise</p>
      <h2 className="mt-2 font-display text-[1.5rem] font-semibold text-ink">All Services</h2>

      <ul className="-mx-1 mt-6 flex-1">
        {practiceAreas.map((area) => {
          const isActive = area.slug === currentSlug;

          if (isActive) {
            return (
              <li key={area.slug}>
                <span
                  aria-current="page"
                  className="block border-l-2 border-gold py-2.5 pl-4 text-[0.9375rem] font-semibold leading-snug text-ink"
                >
                  {area.short}
                </span>
              </li>
            );
          }

          return (
            <li key={area.slug}>
              <Link
                href={`/expertise/${area.slug}`}
                className="group flex items-center justify-between gap-3 border-l-2 border-transparent py-2.5 pl-4 text-[0.9375rem] leading-snug text-ink/65 transition-all duration-500 ease-[var(--ease-out-expo)] hover:border-ink/20 hover:text-teal"
              >
                <span>{area.short}</span>
                <ArrowRight className="size-4 shrink-0 text-ink/30 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1 group-hover:text-teal" />
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 border-t border-ink/10 pt-7">
        <ButtonLink href="/contact">Book A Consultation</ButtonLink>
      </div>
    </nav>
  );
}
