import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import MandateMarquee from "@/components/home/MandateMarquee";
import AboutBand from "@/components/home/AboutBand";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PracticeCarousel from "@/components/home/PracticeCarousel";
import Understanding from "@/components/home/Understanding";
import PeopleStrip from "@/components/home/PeopleStrip";
import HowWeWork from "@/components/home/HowWeWork";
import ClientJourney from "@/components/home/ClientJourney";
import FromOurDesk from "@/components/home/FromOurDesk";
import Testimonials from "@/components/home/Testimonials";
import FaqSection from "@/components/home/FaqSection";
import ContactSplit from "@/components/home/ContactSplit";

export const metadata: Metadata = {
  title: { absolute: "Jhunjhunwala Legal — When the law is complex, you deserve clarity" },
  description:
    "A Kolkata law firm advising individuals, founders and businesses on corporate, commercial, transactional, employment and dispute matters — with clear advice and practical judgment.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <MandateMarquee />
      <AboutBand />
      <WhyChooseUs />
      <PracticeCarousel />
      <Understanding />
      <PeopleStrip />
      <HowWeWork />
      <ClientJourney />
      <FromOurDesk />
      <Testimonials />
      <FaqSection />
      <ContactSplit />
    </>
  );
}
