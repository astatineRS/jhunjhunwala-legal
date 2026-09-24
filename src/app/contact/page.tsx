import type { Metadata } from "next";
import { site } from "@/content/site";
import PageHero from "@/components/layout/PageHero";
import ContactPanel from "@/components/contact/ContactPanel";
import EnquiryForm from "@/components/contact/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${site.name} in ${site.address}. Email ${site.email} or call ${site.phone} to discuss a corporate, commercial or dispute matter.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact Us | ${site.name}`,
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

      <section className="bg-cream py-12 md:py-28">
        <div className="container-page grid gap-8 md:gap-14 lg:grid-cols-2 lg:items-start lg:gap-24">
          <ContactPanel />
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
