import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { SITE_URL } from "@/lib/site";
import { states } from "@/lib/states";
import { allReviewSlugs, guideSlugs } from "@/lib/review-slugs";
import { loadAllPillarArticles, PILLAR_SLUGS, PILLAR_META } from "@/lib/pillars";

function listJsonSlugs(dir: string): string[] {
  const abs = path.join(process.cwd(), dir);
  if (!fs.existsSync(abs)) return [];
  return fs
    .readdirSync(abs)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));
}

function listMdxSlugs(dir: string): string[] {
  const abs = path.join(process.cwd(), dir);
  if (!fs.existsSync(abs)) return [];
  return fs
    .readdirSync(abs)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { url: "/", priority: 1.0, changeFrequency: "daily" as const },
    { url: "/mortgages", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/mortgages/by-state", priority: 0.85, changeFrequency: "weekly" as const },
    { url: "/savings", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/savings/hysa", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/savings/cds", priority: 0.85, changeFrequency: "weekly" as const },
    { url: "/loans", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/loans/by-credit-tier", priority: 0.85, changeFrequency: "weekly" as const },
    { url: "/credit-cards", priority: 0.9, changeFrequency: "daily" as const },
    { url: "/insurance", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/insurance/auto", priority: 0.85, changeFrequency: "weekly" as const },
    { url: "/insurance/home", priority: 0.85, changeFrequency: "weekly" as const },
    { url: "/insurance/life", priority: 0.85, changeFrequency: "weekly" as const },
    { url: "/investing", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/investing/brokerages", priority: 0.85, changeFrequency: "weekly" as const },
    { url: "/calculators", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/learn", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/markets", priority: 0.8, changeFrequency: "daily" as const },
    { url: "/reviews", priority: 0.75, changeFrequency: "weekly" as const },
    { url: "/glossary", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/best", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
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

  const mortgageStateRoutes = states.map((s) => ({
    url: `/mortgages/by-state/${s.slug}`,
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));

  const reviewRoutes = allReviewSlugs.map((slug) => ({
    url: `/reviews/${slug}`,
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));

  const autoInsuranceRoutes = listJsonSlugs("data/insurance/auto-insurance").map((slug) => ({
    url: `/insurance/auto/${slug}`,
    priority: 0.65,
    changeFrequency: "weekly" as const,
  }));

  const homeInsuranceRoutes = listJsonSlugs("data/insurance/home-insurance").map((slug) => ({
    url: `/insurance/home/${slug}`,
    priority: 0.65,
    changeFrequency: "weekly" as const,
  }));

  const lifeInsuranceRoutes = listJsonSlugs("data/insurance/life-insurance").map((slug) => ({
    url: `/insurance/life/${slug}`,
    priority: 0.65,
    changeFrequency: "weekly" as const,
  }));

  const brokerageRoutes = listJsonSlugs("data/investing/brokerages").map((slug) => ({
    url: `/investing/brokerages/${slug}`,
    priority: 0.65,
    changeFrequency: "weekly" as const,
  }));

  const cardRoutes = listJsonSlugs("data/cards").map((slug) => ({
    url: `/credit-cards/${slug}`,
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));

  const glossaryRoutes = listMdxSlugs("content/glossary").map((slug) => ({
    url: `/glossary/${slug}`,
    priority: 0.5,
    changeFrequency: "monthly" as const,
  }));

  const bestRoutes = listMdxSlugs("content/best").map((slug) => ({
    url: `/best/${slug}`,
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));

  // Pillar hub pages
  const pillarHubRoutes = PILLAR_SLUGS.filter((p) => PILLAR_META[p]).map((slug) => ({
    url: `/learn/${slug}`,
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));

  // Pillar articles (how-to guides + cornerstones)
  const pillarArticleRoutes = loadAllPillarArticles().map((a) => ({
    url: `/learn/${a.pillar}/${a.slug}`,
    priority: 0.65,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...staticRoutes,
    ...guideRoutes,
    ...stateRoutes,
    ...mortgageStateRoutes,
    ...reviewRoutes,
    ...autoInsuranceRoutes,
    ...homeInsuranceRoutes,
    ...lifeInsuranceRoutes,
    ...brokerageRoutes,
    ...cardRoutes,
    ...glossaryRoutes,
    ...bestRoutes,
    ...pillarHubRoutes,
    ...pillarArticleRoutes,
  ].map((entry) => ({
    url: `${SITE_URL}${entry.url}`,
    lastModified: now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
