import { site } from "@/content/site";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";
import ContactForm from "./ContactForm";

const rows: {
  Icon: typeof MailIcon;
  label: string;
  value: string;
  href?: string;
}[] = [
  { Icon: MailIcon, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { Icon: PhoneIcon, label: "Phone", value: site.phone, href: site.phoneHref },
  { Icon: PinIcon, label: "Office", value: site.address },
  { Icon: ClockIcon, label: "Hours", value: site.hours },
];

export default function ContactSplit() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="bg-charcoal">
        <div className="ml-auto w-full max-w-[40rem] px-5 py-20 md:px-10 md:py-28 xl:px-14">
          <Reveal>
            <p className="eyebrow mb-3 text-gold">Contact</p>
          </Reveal>
          <SplitText
            as="h2"
            text="Let's talk about your legal matter"
            className="display-2 text-cream"
          />
          <Reveal delay={1}>
            <p className="mt-5 max-w-lg text-balance-pretty text-[1.0625rem] leading-relaxed text-cream/70">
              Tell us briefly what has happened or what you are planning. We will come back with a
              view on whether you need advice, and what the next step would involve.
            </p>
          </Reveal>

          <ContactForm />
        </div>
      </div>

      <div className="bg-gold">
        <div className="mr-auto w-full max-w-[40rem] px-5 py-20 md:px-10 md:py-28 xl:px-14">
          <Reveal>
            <p className="eyebrow mb-3 text-white/70">Info</p>
          </Reveal>
          <SplitText as="h2" text="Reach The Office Directly" className="display-2 text-white" />

          <ul className="mt-10 flex flex-col">
            {rows.map(({ Icon, label, value, href }, index) => (
              <Reveal
                as="li"
                key={label}
                delay={index}
                className="flex items-start gap-5 border-b border-white/25 py-6 first:border-t"
              >
                <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-full bg-white/15 text-white">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                    {label}
                  </span>
                  <span className="mt-1 block font-display text-[1.25rem] leading-snug text-white">
                    {href ? (
                      <a
                        href={href}
                        className="underline decoration-white/30 underline-offset-4 transition-colors duration-400 hover:decoration-white"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={4}>
            <p className="mt-8 text-[0.9375rem] leading-relaxed text-white/75">
              Consultations are held at the Kolkata office or by video, whichever is easier. Outside
              office hours, email reaches us fastest.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
