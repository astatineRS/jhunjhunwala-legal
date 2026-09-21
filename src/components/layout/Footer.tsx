import Link from "next/link";
import { footerColumns, site } from "@/content/site";
import Logo from "@/components/ui/Logo";
import { FacebookIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon, XIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";

const socialIcon = {
  LinkedIn: LinkedInIcon,
  Facebook: FacebookIcon,
  X: XIcon,
} as const;

export default function Footer() {
  return (
    <footer className="bg-teal text-cream">
      <div className="container-page grid gap-14 py-16 md:py-20 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-10">
        <Reveal className="max-w-sm">
          <Logo tone="light" />
          <p className="mt-6 text-[0.975rem] leading-relaxed text-cream/75">
            Legal matters rarely come with simple answers. They involve people, businesses, relationships, money, and
            decisions that can have lasting consequences.
          </p>

          <ul className="mt-7 space-y-3 text-[0.9375rem] text-cream/85">
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 transition-colors hover:text-gold">
                <MailIcon className="size-[18px] text-gold" />
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="inline-flex items-center gap-3 transition-colors hover:text-gold">
                <PhoneIcon className="size-[18px] text-gold" />
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <PinIcon className="mt-0.5 size-[18px] shrink-0 text-gold" />
              <span>{site.address}</span>
            </li>
          </ul>

          <p className="mt-8 text-sm font-semibold text-cream">Follow Us On:</p>
          <div className="mt-3 flex items-center gap-3">
            {site.socials.map((social) => {
              const Icon = socialIcon[social.label as keyof typeof socialIcon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-full border border-cream/25 text-cream transition-all duration-400 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-white"
                >
                  <Icon className="size-[17px]" />
                </a>
              );
            })}
          </div>
        </Reveal>

        {footerColumns.map((column, index) => (
          <Reveal key={column.heading} delay={index + 1}>
            <h3 className="font-sans text-[0.9375rem] font-semibold tracking-wide text-white">{column.heading}</h3>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex text-[0.9375rem] text-cream/72 transition-colors hover:text-gold"
                  >
                    <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className="border-t border-cream/15">
        <div className="container-page flex flex-col gap-3 py-6 text-[0.8125rem] text-cream/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="max-w-xl md:text-right">
            The content of this website is for general information only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
