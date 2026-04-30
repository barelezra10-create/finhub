import * as cron from "node-cron";
import { runHealthcheck } from "./jobs/healthcheck.js";

const HEALTHCHECK_SCHEDULE = process.env.HEALTHCHECK_CRON ?? "*/15 * * * *";

async function main() {
  console.log("[fintiex worker] starting");

  const initial = await runHealthcheck();
  console.log(`[fintiex worker] startup healthcheck: ok=${initial.ok} lenders=${initial.lenderCount}`);

  cron.schedule(HEALTHCHECK_SCHEDULE, async () => {
    try {
      const result = await runHealthcheck();
      console.log(`[fintiex worker] healthcheck: ok=${result.ok} lenders=${result.lenderCount}`);
    } catch (err) {
      console.error("[fintiex worker] healthcheck failed", err);
    }
  });

  console.log(`[fintiex worker] cron registered (${HEALTHCHECK_SCHEDULE}); idling`);
}

main().catch((err) => {
  console.error("[fintiex worker] fatal", err);
  process.exit(1);
});
