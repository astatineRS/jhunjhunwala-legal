import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { practiceAreas } from "@/content/practice-areas";
import { insights } from "@/content/insights";
import { people } from "@/content/people";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/about", "/expertise", "/people", "/resources", "/careers", "/contact", "/privacy-policy", "/disclaimer"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...practiceAreas.map((area) => ({
      url: `${site.url}/expertise/${area.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...insights.map((insight) => ({
      url: `${site.url}/resources/${insight.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...people.map((person) => ({
      url: `${site.url}/people/${person.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
