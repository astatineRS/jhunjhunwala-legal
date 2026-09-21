import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * JJL monogram: a shield/seal mark paired with the firm wordmark.
 * `tone` flips it for dark heroes vs. light surfaces.
 */
export default function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  const text = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-white/60" : "text-stone";

  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)} aria-label="Jhunjhunwala Legal — home">
      <span className="relative grid size-10 place-items-center">
        <svg viewBox="0 0 40 40" className="absolute inset-0 size-10" aria-hidden>
          <path
            d="M20 2.5 34.5 7.2v13.1c0 8.2-5.7 14.6-14.5 17.2C11.2 34.9 5.5 28.5 5.5 20.3V7.2Z"
            className={tone === "light" ? "fill-white/10 stroke-white/70" : "fill-teal/8 stroke-teal"}
            strokeWidth={1.5}
          />
          <path d="M20 10.5v12.8a3.9 3.9 0 0 1-7.8 0" className={tone === "light" ? "stroke-gold" : "stroke-gold"} strokeWidth={2} fill="none" strokeLinecap="round" />
          <path d="M24.4 10.5v12" className={tone === "light" ? "stroke-white" : "stroke-teal"} strokeWidth={2} fill="none" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[1.32rem] font-semibold tracking-[0.02em]", text)}>
          Jhunjhunwala
        </span>
        <span className={cn("mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.42em]", sub)}>Legal</span>
      </span>
    </Link>
  );
}
