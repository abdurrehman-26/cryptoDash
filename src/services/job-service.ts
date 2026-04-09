import cron from "node-cron";
import { fetchCrypto } from "../utils/fetch-crypto.js";

// Standard 5-segment cron: Runs every minute
cron.schedule("* * * * *", async () => {
  const timestamp = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  console.log(`[${timestamp}] Cron: updating crypto prices...`);

  try {
    await fetchCrypto();
    console.log(`[${timestamp}] Update successful.`);
  } catch (error) {
    if (error instanceof Error)
    console.error(`[${timestamp}] Update failed:`, error.message);
  }
});

console.log("CRON service started...");