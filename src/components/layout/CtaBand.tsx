import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SplitText from "@/components/ui/SplitText";
import { ButtonLink } from "@/components/ui/Button";

export default function CtaBand({
  title = "Have a legal matter to discuss?",
  body = "Whether you're building a business, entering a transaction, or dealing with a complex legal issue, our team is here to help you understand your options and determine the right way forward.",
  cta = "Book A Consultation",
  href = "/contact",
}: {
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-10 md:py-32">
      <Image
        src="/images/band-gavel-dark.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-55"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/70 to-ink/90" />

      <div className="container-page text-center">
        <SplitText as="h2" text={title} className="display-2 mx-auto max-w-3xl text-cream" />
        <Reveal delay={1}>
          <p className="mx-auto mt-4 max-w-2xl text-balance-pretty text-[0.9375rem] leading-relaxed text-cream/75 md:mt-5 md:text-[1.0625rem]">
            {body}
          </p>
        </Reveal>
        <Reveal delay={2} className="mt-6 flex justify-center md:mt-9">
          <ButtonLink href={href} variant="light">
            {cta}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
