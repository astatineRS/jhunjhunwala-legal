import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustedStrip from "@/components/home/TrustedStrip";
import AboutBand from "@/components/home/AboutBand";
import InFocus from "@/components/home/InFocus";
import PracticeCarousel from "@/components/home/PracticeCarousel";
import QuoteBand from "@/components/home/QuoteBand";
import PeopleStrip from "@/components/home/PeopleStrip";
import ClientJourney from "@/components/home/ClientJourney";
import Testimonials from "@/components/home/Testimonials";
import CounselStatement from "@/components/home/CounselStatement";
import FaqSection from "@/components/home/FaqSection";

export const metadata: Metadata = {
  title: { absolute: "Jhunjhunwala Legal | Law That Moves Business Forward." },
  description:
    "A Delhi law firm advising individuals, founders and businesses on corporate, commercial, transactional, employment and dispute matters, with clear advice and practical judgment.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedStrip />
      <AboutBand />
      <InFocus />
      <PracticeCarousel />
      <QuoteBand />
      <PeopleStrip />
      <ClientJourney />
      <Testimonials />
      <CounselStatement />
      <FaqSection />
    </>
  );
}
