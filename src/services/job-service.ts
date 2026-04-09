import cron from "node-cron";
import { fetchCrypto } from "../utils/fetch-crypto";

cron.schedule("* * * * *", () => {
  console.log("Cron: updating crypto prices...");
  fetchCrypto();
});

console.log("CRON started");