import type { Metadata } from "next";
import { site } from "@/content/site";
import { faqs } from "@/content/home";
import PageHero from "@/components/layout/PageHero";
import CtaBand from "@/components/layout/CtaBand";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import ContactPanel from "@/components/contact/ContactPanel";
import EnquiryForm from "@/components/contact/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${site.name} — ${site.address}. Email ${site.email} or call ${site.phone} to discuss a corporate, commercial or dispute matter.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact Us — ${site.name}`,
    description: "Tell us what you're dealing with, and let's discuss how we can help.",
    url: `${site.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Tell us what you're dealing with, and let's discuss how we can help."
        image="/images/hero-banner.jpg"
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <ContactPanel />
          <EnquiryForm />
        </div>
      </section>

      <section className="bg-cream pb-20 md:pb-28">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Before You Write"
            title="Questions we are asked first"
            description="If one of these answers your question, there is no need to send an enquiry at all."
          />
          <Reveal delay={1}>
            <Accordion items={faqs.slice(0, 4)} defaultOpen={null} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Prefer to talk it through?"
        body="A ten-minute call is often enough to establish whether you need a lawyer, which of our lawyers should hear the matter, and what the sensible next step looks like."
        cta="Call The Office"
        href={site.phoneHref}
      />
    </>
  );
}
