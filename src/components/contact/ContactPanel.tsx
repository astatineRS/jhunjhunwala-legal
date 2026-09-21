import type { ComponentType, SVGProps } from "react";
import { site } from "@/content/site";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import { ArrowUpRight, ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";

type Detail = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
  note: string;
};

const details: Detail[] = [
  {
    icon: MailIcon,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Written enquiries are read the same working day.",
  },
  {
    icon: PhoneIcon,
    label: "Phone Number",
    value: site.phone,
    href: site.phoneHref,
    note: "Ask for the duty lawyer if your matter is time-sensitive.",
  },
  {
    icon: PinIcon,
    label: "Address",
    value: site.address,
    note: "Consultations are by appointment; please call before visiting.",
  },
  {
    icon: ClockIcon,
    label: "Timings",
    value: site.hours,
    note: "Closed on public holidays declared in West Bengal.",
  },
];

const mapsQuery = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;

/**
 * Left-hand column of the contact page: the firm's four contact details as
 * sand cards, plus a stylised locality panel that hands off to Google Maps.
 * Deliberately not a live iframe — no third-party frame is loaded on the page.
 */
export default function ContactPanel() {
  return (
    <div>
      <Reveal>
        <p className="eyebrow mb-3 text-teal">Reach Us</p>
      </Reveal>
      <SplitText as="h2" text="How To Reach Us" className="display-2 capitalize text-ink" />
      <Reveal delay={1}>
        <p className="mt-4 max-w-md text-[1.0625rem] leading-relaxed text-ink/65">
          Find our contact details and office information below.
        </p>
      </Reveal>

      <ul className="mt-9 flex flex-col gap-4">
        {details.map((detail, index) => {
          const Icon = detail.icon;
          const body = (
            <>
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-teal text-cream transition-colors duration-500 group-hover:bg-teal-deep">
                <Icon className="size-[1.125rem]" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="eyebrow block text-[0.6875rem] text-ink/45">{detail.label}</span>
                <span className="mt-1 block font-display text-[1.125rem] font-semibold leading-snug text-ink">
                  {detail.value}
                </span>
                <span className="mt-1.5 block text-[0.875rem] leading-relaxed text-ink/55">
                  {detail.note}
                </span>
              </span>
              {detail.href ? (
                <ArrowUpRight className="mt-1 size-4 shrink-0 text-teal transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              ) : null}
            </>
          );

          return (
            <Reveal as="li" key={detail.label} delay={index}>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="group flex items-start gap-4 rounded-[var(--radius-card)] bg-sand p-5 transition-all duration-600 ease-[var(--ease-out-expo)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] md:p-6"
                >
                  {body}
                </a>
              ) : (
                <div className="group flex items-start gap-4 rounded-[var(--radius-card)] bg-sand p-5 md:p-6">
                  {body}
                </div>
              )}
            </Reveal>
          );
        })}
      </ul>

      <Reveal delay={2} className="mt-5">
        <div className="overflow-hidden rounded-[var(--radius-card)] ring-1 ring-ink/10">
          <div
            aria-hidden
            className="relative h-48 bg-sand-soft md:h-56"
            style={{
              backgroundImage: [
                "radial-gradient(60% 55% at 78% 22%, rgba(44,139,133,0.22), transparent 70%)",
                "linear-gradient(28deg, transparent calc(50% - 9px), rgba(255,255,255,0.85) calc(50% - 9px), rgba(255,255,255,0.85) calc(50% + 9px), transparent calc(50% + 9px))",
                "linear-gradient(112deg, transparent calc(38% - 6px), rgba(255,255,255,0.7) calc(38% - 6px), rgba(255,255,255,0.7) calc(38% + 6px), transparent calc(38% + 6px))",
                "repeating-linear-gradient(0deg, transparent 0 33px, rgba(17,17,17,0.07) 33px 34px)",
                "repeating-linear-gradient(90deg, transparent 0 33px, rgba(17,17,17,0.07) 33px 34px)",
              ].join(","),
            }}
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
              <span className="grid size-9 place-items-center rounded-full bg-teal text-cream shadow-[var(--shadow-card)] ring-4 ring-cream/70">
                <PinIcon className="size-4" />
              </span>
            </span>
          </div>

          <div className="flex flex-col gap-3 bg-cream px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <span>
              <span className="eyebrow block text-[0.6875rem] text-ink/45">Office Location</span>
              <span className="mt-1 block text-[0.9375rem] leading-snug text-ink/75">
                {site.address}
              </span>
            </span>
            <a
              href={mapsQuery}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex shrink-0 items-center gap-2 text-[0.9375rem] font-medium text-teal transition-colors duration-300 hover:text-teal-deep"
            >
              Get directions
              <ArrowUpRight className="size-4 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
