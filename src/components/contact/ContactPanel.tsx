import type { ComponentType, SVGProps } from "react";
import { site } from "@/content/site";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";

type Detail = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
};

const details: Detail[] = [
  {
    icon: MailIcon,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: PhoneIcon,
    label: "Phone Number",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: PinIcon,
    label: "Address",
    value: site.address,
  },
  {
    icon: ClockIcon,
    label: "Timings",
    value: site.hours,
  },
];

const cardClass =
  "block h-full rounded-[var(--radius-card)] px-3.5 py-3.5 text-white bg-gold md:px-7 md:py-6";

/**
 * Left-hand column of the contact page: the firm's four contact details as
 * gold cards — white outline icon and label on the first line, the value on
 * the second. Email and phone are actionable; address and timings are not.
 */
export default function ContactPanel() {
  return (
    <div>
      <SplitText as="h2" text="How To Reach Us" className="display-2 text-ink" />
      <Reveal delay={1}>
        <p className="mt-3 md:mt-4 max-w-md text-[0.9375rem] md:text-[1.0625rem] leading-relaxed text-ink/65">
          Find our contact details and office information below.
        </p>
      </Reveal>

      <ul className="mt-6 md:mt-9 grid grid-cols-2 gap-3 md:flex md:flex-col md:gap-4">
        {details.map((detail, index) => {
          const Icon = detail.icon;
          const body = (
            <>
              <span className="flex items-center gap-2 md:gap-3">
                <Icon className="size-[1.125rem] md:size-[1.375rem] shrink-0" />
                <span className="font-sans text-[0.9375rem] md:text-[1.25rem] leading-snug">{detail.label}</span>
              </span>
              <span className="mt-1.5 md:mt-2.5 block pl-0 md:pl-[2.125rem] text-[0.8125rem] md:text-[1.0625rem] leading-snug text-white/90 break-words">
                {detail.value}
              </span>
            </>
          );

          return (
            <Reveal as="li" key={detail.label} delay={index}>
              {detail.href ? (
                <a
                  href={detail.href}
                  className={`${cardClass} transition-colors duration-500 ease-[var(--ease-out-expo)] hover:bg-gold-deep`}
                >
                  {body}
                </a>
              ) : (
                <div className={cardClass}>{body}</div>
              )}
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
}
