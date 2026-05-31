import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DIR = path.join(process.cwd(), "content/best");

export interface Listicle {
  slug: string;
  title: string;
  description?: string;
  body: string;
}

export function loadListicles(): Listicle[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(DIR, f), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: f.replace(/\.mdx$/, ""),
        title: String(data.title ?? f.replace(/\.mdx$/, "")),
        description: data.description ? String(data.description) : undefined,
        body: content,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function loadListicle(slug: string): Listicle | null {
  return loadListicles().find((l) => l.slug === slug) ?? null;
}
