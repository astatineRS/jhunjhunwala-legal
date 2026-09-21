import type { Metadata } from "next";
import CtaBand from "@/components/layout/CtaBand";
import PageHero from "@/components/layout/PageHero";
import FeaturedInsight from "@/components/resources/FeaturedInsight";
import InsightLibrary from "@/components/resources/InsightLibrary";
import { insights } from "@/content/insights";

export const metadata: Metadata = {
  title: "Knowledge Repository",
  description:
    "Thoughts, perspectives and lessons from the work we do — briefings on corporate, commercial, employment, privacy and dispute matters.",
  openGraph: {
    title: "Knowledge Repository",
    description:
      "Thoughts, perspectives and lessons from the work we do — briefings on corporate, commercial, employment, privacy and dispute matters.",
    url: "/resources",
    images: ["/images/hero-resources.jpg"],
  },
};

export default function ResourcesPage() {
  const [featured, ...archive] = insights;

  return (
    <>
      <PageHero
        title="Knowledge Repository"
        subtitle="Thoughts, perspectives, and lessons from the work we do."
        image="/images/hero-resources.jpg"
      />
      <FeaturedInsight insight={featured} />
      <InsightLibrary insights={archive} />
      <CtaBand
        title="Have a question about something you read?"
        body="Our writing is general in nature. If a point here touches a decision you are actually facing, speak to us — advice that accounts for your facts is always more useful than advice that does not."
        cta="Talk To Our Team"
        href="/contact"
      />
    </>
  );
}
