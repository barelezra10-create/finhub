import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DIR = path.join(process.cwd(), "content/glossary");

export interface GlossaryEntry {
  slug: string;
  title: string;
  description?: string;
  related?: string[];
  body: string;
}

export function loadGlossary(): GlossaryEntry[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(DIR, f), "utf8");
      const { data, content } = matter(raw);
      const relatedRaw = data.related ?? data.see_also;
      return {
        slug: f.replace(/\.mdx$/, ""),
        title: String(data.title ?? f.replace(/\.mdx$/, "")),
        description: data.description ? String(data.description) : undefined,
        related: Array.isArray(relatedRaw)
          ? (relatedRaw as unknown[]).map(String)
          : undefined,
        body: content,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function loadGlossaryEntry(slug: string): GlossaryEntry | null {
  return loadGlossary().find((g) => g.slug === slug) ?? null;
}
