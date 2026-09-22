import Image from "next/image";
import type { Client } from "@/content/home";

/**
 * Client badge for the Trusted By strip. Brands with a supplied SVG render it
 * directly; the rest fall back to a monogram-and-wordmark lockup drawn in the
 * site's display face, so the strip reads as logos rather than a list of names.
 */
export default function ClientLogo({ client }: { client: Client }) {
  if (client.logo) {
    return (
      <Image
        src={client.logo}
        alt={client.name}
        height={client.logoHeight ?? 28}
        width={(client.logoHeight ?? 28) * 4}
        unoptimized
        className="h-[var(--logo-h)] w-auto object-contain"
        style={{ "--logo-h": `${client.logoHeight ?? 28}px` } as React.CSSProperties}
      />
    );
  }

  const initials = client.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <span className="flex items-center gap-2.5">
      <span className="grid size-8 shrink-0 place-items-center rounded-[7px] border border-current/40 font-display text-[0.8125rem] font-semibold tracking-[0.04em]">
        {initials}
      </span>
      <span className="whitespace-nowrap font-display text-[1.375rem] leading-none tracking-[0.01em] md:text-[1.5rem]">
        {client.name}
      </span>
    </span>
  );
}
