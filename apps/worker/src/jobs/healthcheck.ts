import { prisma } from "@fintiex/db";

export interface HealthcheckResult {
  ok: boolean;
  lenderCount: number;
  ranAt: Date;
}

export async function runHealthcheck(): Promise<HealthcheckResult> {
  const lenderCount = await prisma.lender.count();
  return {
    ok: true,
    lenderCount,
    ranAt: new Date(),
  };
}
