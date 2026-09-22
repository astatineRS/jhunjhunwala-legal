import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import MandateMarquee from "@/components/home/MandateMarquee";
import AboutBand from "@/components/home/AboutBand";
import InFocus from "@/components/home/InFocus";
import PracticeCarousel from "@/components/home/PracticeCarousel";
import IndustriesBand from "@/components/home/IndustriesBand";
import PeopleStrip from "@/components/home/PeopleStrip";
import ClientJourney from "@/components/home/ClientJourney";
import Testimonials from "@/components/home/Testimonials";
import FaqSection from "@/components/home/FaqSection";

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
      <InFocus />
      <PracticeCarousel />
      <IndustriesBand />
      <PeopleStrip />
      <ClientJourney />
      <Testimonials />
      <FaqSection />
    </>
  );
}
