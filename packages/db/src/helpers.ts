import { prisma } from "./index.js";
import type { ProductType, Rate } from "@prisma/client";

export async function currentRatesFor(productType: ProductType): Promise<Rate[]> {
  return prisma.rate.findMany({
    where: { productType, isCurrent: true },
    orderBy: { apyApr: "desc" },
  });
}
