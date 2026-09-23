import { inFocus } from "@/content/home";
import ArrowBadge from "@/components/ui/ArrowBadge";
import Marquee from "@/components/ui/Marquee";

/**
 * Recent-mandate strip. Same published client updates as the In Focus posters,
 * reduced to one line each and linked to the LinkedIn post they were announced
 * in. Rendered inside the About band, so it carries no offset of its own — the
 * host section owns the spacing.
 */
export default function MandateMarquee() {
  return (
    <div aria-label="Recent mandates">
      <Marquee duration={70}>
        {inFocus.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            className="group mr-4 flex w-[16rem] items-center gap-3 rounded-[2.25rem] bg-white/10 px-4 py-3 ring-1 ring-white/20 backdrop-blur-md transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 sm:w-[22rem] md:gap-4 md:px-5 md:py-4"
          >
            <ArrowBadge tone="teal" size={34} />
            <p className="line-clamp-2 text-[0.8125rem] leading-snug text-cream/85 md:line-clamp-3">
              {item.lead} {item.client}
              {item.detail.startsWith(",") ? "" : " "}
              {item.detail}
            </p>
          </a>
        ))}
      </Marquee>
    </div>
  );
}
