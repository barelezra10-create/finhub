import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { states } from "@/lib/states";
import { allReviewSlugs, guideSlugs } from "@/lib/review-slugs";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { url: "/", priority: 1.0, changeFrequency: "daily" as const },
    { url: "/mortgages", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/savings", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/savings/hysa", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/loans", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/credit-cards", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/calculators", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/learn", priority: 0.7, changeFrequency: "weekly" as const },
  ];

  const guideRoutes = guideSlugs.map((slug) => ({
    url: `/learn/${slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  const stateRoutes = states.map((s) => ({
    url: `/savings/hysa/${s.slug}`,
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));

  const reviewRoutes = allReviewSlugs.map((slug) => ({
    url: `/reviews/${slug}`,
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));

  return [...staticRoutes, ...guideRoutes, ...stateRoutes, ...reviewRoutes].map(
    (entry) => ({
      url: `${SITE_URL}${entry.url}`,
      lastModified: now,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
    })
  );
}
