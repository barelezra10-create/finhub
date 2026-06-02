import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = path.join(process.cwd(), "content/learn");

export interface HowToFrontmatter {
  name: string;
  description: string;
  totalTimeIso?: string;
  steps: Array<{ name: string; text: string; url?: string }>;
}

export interface FaqFrontmatter {
  question: string;
  answer: string;
}

export interface PillarArticle {
  pillar: string;
  slug: string;
  title: string;
  description?: string;
  readTime?: number;
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  body: string;
  howto?: HowToFrontmatter;
  faq?: FaqFrontmatter[];
}

export const PILLAR_META: Record<
  string,
  { title: string; description: string }
> = {
  "credit-card-basics": {
    title: "Credit Card Basics",
    description:
      "How interest, statements, and utilization actually work. Start here.",
  },
  "choosing-a-card": {
    title: "Choosing a Card",
    description:
      "Practical guides on picking the right card for your spending and goals.",
  },
  "maximizing-rewards": {
    title: "Maximizing Rewards",
    description:
      "Get the most value from points, miles, and signup bonuses.",
  },
  "building-credit": {
    title: "Building Credit",
    description:
      "From first card to credit score 800: a working playbook.",
  },
  "business-credit": {
    title: "Business Credit",
    description:
      "Separate business finances, deduct rewards, and scale credit lines.",
  },
  mortgages: {
    title: "Mortgages",
    description:
      "Step-by-step guides to pre-approval, refinance, PMI, and getting the lowest rate.",
  },
  savings: {
    title: "Savings",
    description:
      "How to actually save money: HYSAs, CD ladders, emergency funds, and goal-based plans.",
  },
  loans: {
    title: "Loans",
    description:
      "Personal, student, and auto loans. How to qualify, compare, and pay them down faster.",
  },
  insurance: {
    title: "Insurance",
    description:
      "Auto, home, and life coverage explained without the jargon. How much you need and how to pay less.",
  },
  investing: {
    title: "Investing",
    description:
      "Open the right account, pick the right funds, and build a portfolio that runs without you.",
  },
};

export const PILLAR_SLUGS = Object.keys(PILLAR_META);

function estimateReadTime(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(3, Math.round(words / 220));
}

export function loadPillarArticles(pillar: string): PillarArticle[] {
  const dir = path.join(ROOT, pillar);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const { data, content } = matter(raw);
      return {
        pillar,
        slug: f.replace(/\.mdx$/, ""),
        title: String(data.title ?? ""),
        description: data.description ? String(data.description) : undefined,
        readTime:
          typeof data.readTime === "number"
            ? data.readTime
            : estimateReadTime(content),
        author: data.author ? String(data.author) : undefined,
        publishedAt: data.publishedAt ? String(data.publishedAt) : undefined,
        updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
        body: content,
        howto: data.howto as HowToFrontmatter | undefined,
        faq: Array.isArray(data.faq) ? (data.faq as FaqFrontmatter[]) : undefined,
      };
    });
}

export function loadAllPillarArticles(): PillarArticle[] {
  return PILLAR_SLUGS.flatMap((p) => loadPillarArticles(p));
}

export function loadPillarArticle(
  pillar: string,
  slug: string,
): PillarArticle | null {
  return loadPillarArticles(pillar).find((a) => a.slug === slug) ?? null;
}
