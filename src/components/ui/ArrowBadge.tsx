import { cn } from "@/lib/utils";
import { ArrowUpRight } from "./icons";

type Tone = "teal" | "gold" | "white" | "outline";

const tones: Record<Tone, string> = {
  teal: "bg-teal text-white",
  gold: "bg-gold text-white",
  white: "bg-white text-teal",
  outline: "border border-current text-current",
};

/**
 * The circular arrow chip used on every card and button in the design system.
 * On hover of an ancestor marked `group`, the arrow slides out and back in.
 */
export default function ArrowBadge({
  tone = "teal",
  size = 40,
  className,
}: {
  tone?: Tone;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative grid shrink-0 place-items-center overflow-hidden rounded-full transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-110",
        tones[tone],
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <ArrowUpRight
        className="absolute size-[45%] transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0"
      />
      <ArrowUpRight
        className="absolute size-[45%] -translate-x-4 translate-y-4 opacity-0 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
      />
    </span>
  );
}
