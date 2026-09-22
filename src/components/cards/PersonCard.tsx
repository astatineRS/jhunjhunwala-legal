import Image from "next/image";
import Link from "next/link";
import type { Person } from "@/content/people";
import { cn } from "@/lib/utils";
import ArrowBadge from "@/components/ui/ArrowBadge";

export default function PersonCard({ person, className }: { person: Person; className?: string }) {
  return (
    <Link
      href={`/people/${person.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-[var(--radius-card)] bg-ink/5 transition-all duration-600 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      <div className="relative aspect-square md:aspect-[4/5] overflow-hidden">
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-[1.1s] ease-[var(--ease-out-expo)] group-hover:scale-[1.06]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-2 rounded-[10px] bg-cream/95 px-3 py-2.5 backdrop-blur transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-1 md:inset-x-3 md:bottom-3 md:gap-3 md:px-4 md:py-3">
        <span className="min-w-0">
          <span className="block break-words font-display text-[0.9375rem] md:text-[1.0625rem] font-semibold leading-tight text-ink">{person.name}</span>
          <span className="mt-0.5 block text-[0.75rem] md:text-[0.8125rem] leading-tight text-ink/60">{person.role}</span>
        </span>
        {/* The arrow chip costs 30px of label width — drop it on the narrowest
            two-column grids so names never have to truncate. */}
        <span className="hidden min-[430px]:inline-flex">
          <ArrowBadge tone="teal" size={30} />
        </span>
      </div>
    </Link>
  );
}
