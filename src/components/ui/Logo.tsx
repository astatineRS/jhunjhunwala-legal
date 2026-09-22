import Link from "next/link";
import { cn } from "@/lib/utils";
import BrandMark from "@/components/ui/BrandMark";

/**
 * Brand lockup: the elephant mark beside the two-line Bookman wordmark.
 * `tone` flips it for dark heroes vs. light surfaces.
 */
export default function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  const mark = tone === "light" ? "text-white" : "text-teal";
  const word = tone === "light" ? "text-white" : "text-teal";

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-end gap-3", className)}
      aria-label="Jhunjhunwala Legal — home"
    >
      <BrandMark className={cn("h-9 transition-transform duration-500 group-hover:-translate-y-0.5", mark)} />
      <span className={cn("font-brand flex flex-col leading-[1.05] tracking-[0.04em]", word)}>
        <span className="text-[1.0625rem] font-bold uppercase">Jhunjhunwala</span>
        <span className="text-[1.0625rem] font-bold uppercase">Legal</span>
      </span>
    </Link>
  );
}
