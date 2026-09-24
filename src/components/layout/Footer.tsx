import { footerColumns, site } from "@/content/site";
import Logo from "@/components/ui/Logo";
import FooterColumn from "@/components/layout/FooterColumn";
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
      <div className="container-page grid gap-y-6 py-10 md:gap-14 md:py-20 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-10">
        <Reveal className="max-w-sm">
          <Logo tone="light" />
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-cream/75 md:mt-6 md:text-[0.975rem]">
            We at Jhunjhunwala Legal understand what you&rsquo;re trying to build, we understand what the law
            requires, and we know how to bring the two together.
          </p>

          <ul className="mt-5 space-y-2.5 text-[0.875rem] md:mt-7 md:space-y-3 md:text-[0.9375rem] text-cream/85">
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

          <p className="mt-6 text-sm font-semibold text-cream md:mt-8">Follow Us On:</p>
          <div className="mt-3 flex items-center gap-2.5 md:gap-3">
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
          <FooterColumn key={column.heading} column={column} delay={index + 1} />
        ))}
      </div>

      <div className="border-t border-cream/15">
        <div className="container-page py-4 text-[0.8125rem] text-cream/60 md:py-6">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
