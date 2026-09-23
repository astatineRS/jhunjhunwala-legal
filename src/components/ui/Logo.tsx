import Link from "next/link";
import { cn } from "@/lib/utils";
import BrandMark from "@/components/ui/BrandMark";

/**
 * Brand lockup: the elephant mark stacked above the two-line Bookman wordmark.
 * `tone` flips it for dark heroes vs. light surfaces; `compact` is the scrolled
 * header state, where the whole lockup steps down a size.
 */
export default function Logo({
  tone = "dark",
  compact = false,
  className,
}: {
  tone?: "dark" | "light";
  compact?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex flex-col items-center gap-1",
        tone === "light" ? "text-white" : "text-teal",
        className,
      )}
      aria-label="Jhunjhunwala Legal — home"
    >
      <BrandMark
        className={cn(
          "transition-[height,transform] duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-0.5",
          compact ? "h-[1.6rem]" : "h-8",
        )}
      />
      <span
        className={cn(
          "font-brand flex flex-col items-stretch font-bold uppercase leading-[1.05] tracking-[0.04em] transition-[font-size] duration-500 ease-[var(--ease-out-expo)]",
          compact ? "text-[0.6875rem]" : "text-[0.8125rem]",
        )}
      >
        <span>Jhunjhunwala</span>
        {/* The short second line is stretched to the width of the first with a
            rule either side, so the lockup reads as a block rather than a
            centred word floating in white space. */}
        <span className="flex items-center gap-[0.3em]">
          <span aria-hidden className="h-px flex-1 bg-current" />
          <span>Legal</span>
          <span aria-hidden className="h-px flex-1 bg-current" />
        </span>
      </span>
    </Link>
  );
}
