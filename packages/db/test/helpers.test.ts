import { describe, it, expect, beforeEach, afterAll } from "vitest";
import { prisma, ProductType, Confidence } from "../src/index.js";
import { currentRatesFor } from "../src/helpers.js";

describe("currentRatesFor", () => {
  beforeEach(async () => {
    await prisma.rate.deleteMany();
    await prisma.source.deleteMany();
    await prisma.lender.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("returns only current rates of the requested product type, sorted by APY desc", async () => {
    const lender = await prisma.lender.create({
      data: { slug: "test-bank", name: "Test Bank", websiteUrl: "https://test.example" },
    });
    const source = await prisma.source.create({
      data: {
        lenderId: lender.id,
        productType: ProductType.HYSA,
        url: "https://test.example/hysa",
      },
    });

    await prisma.rate.createMany({
      data: [
        { lenderId: lender.id, sourceId: source.id, productType: ProductType.HYSA, apyApr: "4.50", sourceUrl: source.url, scrapedAt: new Date(), confidence: Confidence.HIGH, isCurrent: true },
        { lenderId: lender.id, sourceId: source.id, productType: ProductType.HYSA, apyApr: "4.75", sourceUrl: source.url, scrapedAt: new Date(), confidence: Confidence.HIGH, isCurrent: true, productSubtype: "no-fee" },
        { lenderId: lender.id, sourceId: source.id, productType: ProductType.HYSA, apyApr: "4.30", sourceUrl: source.url, scrapedAt: new Date(), confidence: Confidence.HIGH, isCurrent: true, productSubtype: "promo" },
        { lenderId: lender.id, sourceId: source.id, productType: ProductType.HYSA, apyApr: "4.10", sourceUrl: source.url, scrapedAt: new Date(), confidence: Confidence.HIGH, isCurrent: false },
        { lenderId: lender.id, sourceId: source.id, productType: ProductType.CD_12M, apyApr: "5.00", sourceUrl: source.url, scrapedAt: new Date(), confidence: Confidence.HIGH, isCurrent: true },
      ],
    });

    const result = await currentRatesFor(ProductType.HYSA);
    expect(result).toHaveLength(3);
    expect(result.map(r => Number(r.apyApr))).toEqual([4.75, 4.5, 4.3]);
  });
});
