import { describe, it, expect, beforeEach, afterAll } from "vitest";
import { prisma } from "@fintiex/db";
import { runHealthcheck } from "../src/jobs/healthcheck.js";

describe("runHealthcheck", () => {
  beforeEach(async () => {
    await prisma.rate.deleteMany();
    await prisma.source.deleteMany();
    await prisma.lender.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("returns the lender count", async () => {
    await prisma.lender.create({
      data: { slug: "hc-test", name: "HC Test Bank", websiteUrl: "https://hc.test" },
    });
    const result = await runHealthcheck();
    expect(result.ok).toBe(true);
    expect(result.lenderCount).toBe(1);
  });

  it("returns ok=true even with zero lenders", async () => {
    const result = await runHealthcheck();
    expect(result.ok).toBe(true);
    expect(result.lenderCount).toBe(0);
  });
});
