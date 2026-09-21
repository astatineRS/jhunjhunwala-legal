import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * CSS-driven infinite marquee. Children are duplicated once and the track is
 * translated -50%, so the loop is seamless without JS measurement.
 */
export default function Marquee({
  children,
  duration = 45,
  reverse = false,
  className,
  fade = true,
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
  fade?: boolean;
}) {
  return (
    <div
      className={cn("marquee-host relative overflow-hidden", className)}
      style={
        fade
          ? {
              maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
              WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
            }
          : undefined
      }
    >
      <div
        className={reverse ? "marquee-track-reverse" : "marquee-track"}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-stretch">{children}</div>
        <div className="flex shrink-0 items-stretch" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
