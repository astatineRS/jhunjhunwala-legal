import { inFocus } from "@/content/home";
import ArrowBadge from "@/components/ui/ArrowBadge";
import Ticker from "@/components/ui/Ticker";

/**
 * Recent-mandate strip. Same published client updates as the In Focus posters,
 * reduced to a line each and linked to the LinkedIn post they were announced
 * in. Rendered inside the About band, so it carries no offset of its own — the
 * host section owns the spacing. The chips stay narrow on a phone, where a
 * full-width card would push the rest of the band off the screen.
 */
export default function MandateMarquee() {
  return (
    <Ticker speed={34} ariaLabel="Recent mandates">
      {inFocus.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noreferrer noopener"
          className="group mr-3 flex w-[13.5rem] items-center gap-2.5 rounded-[2.25rem] bg-white/10 px-3.5 py-2.5 ring-1 ring-white/20 backdrop-blur-md transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 sm:w-[20rem] md:mr-4 md:gap-4 md:px-5 md:py-4"
        >
          <ArrowBadge tone="teal" size={32} />
          <p className="line-clamp-2 text-[0.75rem] leading-snug text-cream/85 md:text-[0.8125rem] md:line-clamp-3">
            {item.lead} {item.client}
            {item.detail.startsWith(",") ? "" : " "}
            {item.detail}
          </p>
        </a>
      ))}
    </Ticker>
  );
}
