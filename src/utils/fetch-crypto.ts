import fs from "fs/promises";
import path from "path";
import { scrapeTop100 } from "../scraper";

export async function fetchCrypto() {
  const dir = "./data";
  const filePath = path.join(dir, "crypto.json");

  try {
    const res = await scrapeTop100();

    // 1. Ensure the directory exists
    await fs.mkdir(dir, { recursive: true });

    // 2. Write the file
    fs.writeFile(filePath, JSON.stringify(res, null, 2), {
      encoding: "utf-8",
    });

    console.log("Updated crypto prices successfully.");
  } catch (error) {
    if (error instanceof Error)
    console.error("Failed to scrape or save crypto data:", error.message);
  }
}