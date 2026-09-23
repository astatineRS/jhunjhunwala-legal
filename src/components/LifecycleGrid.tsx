import { lifecycle } from "@/content/home";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

/**
 * The four stages of the business lifecycle as numbered cards. `sand` is the
 * light treatment used on the About page; `dark` sits on the photographic
 * bands, where the tiles are glass over the image. The caller owns the column
 * count — passing a second `lg:grid-cols-*` here would collide with it.
 */
export default function LifecycleGrid({
  tone = "sand",
  className,
}: {
  tone?: "sand" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";

  return (
    <ul className={cn("grid grid-cols-2 gap-3 sm:gap-5", className)}>
      {lifecycle.map((stage, index) => (
        <Reveal as="li" key={stage.number} delay={index} className="h-full">
          <article
            className={cn(
              "group flex h-full flex-col gap-3 rounded-[var(--radius-card)] p-4 transition-all duration-600 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 sm:gap-4 sm:p-6 md:p-7",
              dark
                ? "border border-white/15 bg-white/[0.07] backdrop-blur-xl hover:bg-white/[0.11]"
                : "bg-sand-soft hover:shadow-[var(--shadow-card)]",
            )}
          >
            <span
              className={cn(
                "font-display text-sm font-semibold tracking-[0.16em] tabular-nums",
                dark ? "text-gold" : "text-gold-deep",
              )}
            >
              {stage.number}
            </span>
            <h3
              className={cn(
                "font-display text-[1.0625rem] font-semibold leading-snug sm:text-[1.3125rem]",
                dark ? "text-cream" : "text-ink",
              )}
            >
              {stage.title}
            </h3>
            <p
              className={cn(
                "text-[0.8125rem] leading-relaxed sm:text-[0.9375rem]",
                dark ? "text-cream/70" : "text-ink/68",
              )}
            >
              {stage.description}
            </p>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
