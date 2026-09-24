import Image from "next/image";
import type { Person } from "@/content/people";
import { cn } from "@/lib/utils";

/**
 * Portrait for a profile, or an initials monogram where the firm has not
 * supplied a photograph yet.
 *
 * A stock headshot standing in for a named lawyer would misrepresent a real
 * person, so the fallback is deliberately typographic. Both branches fill the
 * positioned parent, which owns the aspect ratio and the rounding.
 */
export default function PersonPortrait({
  person,
  sizes,
  className,
  priority = false,
}: {
  person: Person;
  sizes: string;
  /** Applied to the photograph only; the monogram has no motion to inherit. */
  className?: string;
  priority?: boolean;
}) {
  if (person.image) {
    return (
      <Image
        src={person.image}
        alt={person.name}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", className)}
      />
    );
  }

  const initials = person.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <span
      aria-hidden
      className="absolute inset-0 grid place-items-center bg-teal-deep bg-[radial-gradient(120%_90%_at_50%_0%,rgb(44_139_133/0.55)_0%,transparent_70%)]"
    >
      <span className="font-display text-[clamp(2.5rem,9vw,5.5rem)] font-semibold leading-none tracking-[0.04em] text-cream/90">
        {initials}
      </span>
    </span>
  );
}
