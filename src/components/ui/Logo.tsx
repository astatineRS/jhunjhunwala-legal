import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Brand lockup: the supplied artwork — elephant mark over the wordmark and the
 * "Ahead from day one" line — rather than a typeset reconstruction of it.
 *
 * Two files, not one recoloured file: the PNGs are flat teal / flat cream on a
 * transparent field, so the light variant reads on the dark hero and footer
 * without a CSS filter approximating the brand colour. `size` steps the whole
 * lockup down for the scrolled header and up for the footer.
 */
const HEIGHTS = {
  /** Scrolled desktop bar and the mobile pill, both ~68-72px tall. */
  sm: "h-12",
  /** Full-height desktop bar (88px). */
  md: "h-16",
  /** Footer, where the wordmark and the day-one line should both be legible. */
  lg: "h-24",
} as const;

export default function Logo({
  tone = "dark",
  size = "md",
  className,
}: {
  tone?: "dark" | "light";
  size?: keyof typeof HEIGHTS;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center", className)}
      aria-label="Jhunjhunwala Legal home"
    >
      <Image
        src={tone === "light" ? "/logos/jjl-lockup-light.png" : "/logos/jjl-lockup.png"}
        alt="Jhunjhunwala Legal"
        width={1702}
        height={669}
        priority
        sizes="260px"
        className={cn(
          "w-auto transition-[height,transform] duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-0.5",
          HEIGHTS[size],
        )}
      />
    </Link>
  );
}
