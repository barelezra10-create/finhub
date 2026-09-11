export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { startAnalytics } = await import("./lib/analytics/start");
    await startAnalytics();
  }
}
