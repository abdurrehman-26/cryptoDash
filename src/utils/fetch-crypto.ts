import axios from "axios";
import fs from "fs";

export async function fetchCrypto() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";

  const res = await axios.get(url);

  fs.writeFileSync("./data/crypto.json", JSON.stringify(res.data, null, 2), {
    encoding: "utf-8",
  });
  console.log("Updated crypto prices:");
}