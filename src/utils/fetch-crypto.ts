import axios from "axios";
import fs from "fs";
import path from "path";

export async function fetchCrypto() {
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
  const dir = "./data";
  const filePath = path.join(dir, "crypto.json");

  try {
    const res = await axios.get(url);

    // 1. Ensure the directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // 2. Write the file
    fs.writeFileSync(filePath, JSON.stringify(res.data, null, 2), {
      encoding: "utf-8",
    });

    console.log("Updated crypto prices successfully.");
  } catch (error) {
    if (error instanceof Error)
    console.error("Failed to fetch or save crypto data:", error.message);
  }
}