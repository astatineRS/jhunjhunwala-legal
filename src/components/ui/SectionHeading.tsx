import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

type Props = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  /** Renders description in a side column instead of underneath. */
  aside?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
  aside,
}: Props) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        aside && "md:flex-row md:items-end md:justify-between md:gap-16",
        className,
      )}
    >
      <div className={cn("max-w-3xl", isCenter && "mx-auto text-center")}>
        {eyebrow ? (
          <Reveal>
            <p className={cn("eyebrow mb-3", tone === "light" ? "text-gold" : "text-teal")}>{eyebrow}</p>
          </Reveal>
        ) : null}
        <SplitText
          as="h2"
          text={title}
          className={cn("display-2 capitalize", tone === "light" ? "text-cream" : "text-ink")}
        />
        {description ? (
          <Reveal delay={1}>
            <div
              className={cn(
                "mt-5 text-balance-pretty text-[1.0625rem] leading-relaxed",
                tone === "light" ? "text-cream/75" : "text-ink/65",
              )}
            >
              {description}
            </div>
          </Reveal>
        ) : null}
      </div>
      {aside ? <Reveal delay={1} className="md:max-w-sm md:pb-2">{aside}</Reveal> : null}
    </div>
  );
}
