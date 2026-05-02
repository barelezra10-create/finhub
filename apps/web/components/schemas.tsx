import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, absUrl } from "@/lib/site";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        description: SITE_DESCRIPTION,
        sameAs: [],
      }}
    />
  );
}

export function WebSiteSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQPageSchema({ items }: { items: FAQItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((it) => ({
          "@type": "Question",
          name: it.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: it.answer,
          },
        })),
      }}
    />
  );
}

export function ArticleSchema({
  headline,
  description,
  slug,
  datePublished,
  dateModified,
  authorName = "Fintiex Editorial",
  imageUrl,
}: {
  headline: string;
  description: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  imageUrl?: string;
}) {
  const today = new Date().toISOString().split("T")[0];
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": absUrl(slug),
        },
        headline,
        description,
        image: imageUrl ? [imageUrl] : [`${SITE_URL}/opengraph-image`],
        datePublished: datePublished ?? "2026-04-29",
        dateModified: dateModified ?? today,
        author: {
          "@type": "Organization",
          name: authorName,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/icon.svg`,
          },
        },
      }}
    />
  );
}

export function FinancialProductSchema({
  name,
  description,
  slug,
  brandName,
  category,
  apr,
  feesUrl,
  ratingValue,
  reviewCount,
}: {
  name: string;
  description: string;
  slug: string;
  brandName?: string;
  category: string;
  apr?: string;
  feesUrl?: string;
  ratingValue?: number;
  reviewCount?: number;
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name,
    description,
    url: absUrl(slug),
    category,
    provider: {
      "@type": "Organization",
      name: brandName ?? SITE_NAME,
    },
    review: {
      "@type": "Review",
      author: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      reviewBody: description,
    },
  };
  if (apr) {
    data["interestRate"] = {
      "@type": "QuantitativeValue",
      value: apr,
      unitText: "PERCENT",
    };
  }
  if (feesUrl) data["feesAndCommissionsSpecification"] = feesUrl;
  if (ratingValue && reviewCount) {
    data["aggregateRating"] = {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating: 10,
      worstRating: 1,
    };
  }
  return <JsonLd data={data} />;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbListSchema({ items }: { items: BreadcrumbItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: absUrl(it.href),
        })),
      }}
    />
  );
}
