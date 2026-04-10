import axios from "axios";
import * as cheerio from "cheerio";

interface CoinData {
  rank: string;
  name: string;
  symbol: string;
  image: string;
  price: number;
  price_change_1h: number;
  price_change_24h: number;
  price_change_7d: number;
  volume_24h: number;
  market_cap: number;
}

export async function scrapeTop100() {
  const url = "https://www.coingecko.com/";

  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const $ = cheerio.load(data);
    const results: CoinData[] = [];

    $("table tbody tr").each((i, el) => {
      if (i >= 5) return;

      const rank = $(el).find('td').eq(1).text().trim();
      const name = $(el).find('td').eq(2).text().trim().split('\n')[0];
      const symbol = $(el).find('td').eq(2).text().trim().split('\n')[2].trim();
      const image = $(el).find('td').eq(2).find('img').attr('src');
      const price = Number($(el).find('td').eq(4).text().trim().replace('$', '').replaceAll(',', ''));
      const price_change_1h = Number($(el).find('td').eq(5).text().trim().replace('%', ''));
      const price_change_24h = Number($(el).find('td').eq(7).text().trim().replace('%', ''));
      const price_change_7d = Number($(el).find('td').eq(8).text().trim().replace('%', ''));
      const volume_24h = Number($(el).find('td').eq(9).text().trim().replace('$', '').replaceAll(',', ''));
      const market_cap = Number($(el).find('td').eq(11).text().trim().replace('$', '').replaceAll(',', ''));

      results.push({
        rank,
        name,
        symbol,
        image: image || "",
        price,
        price_change_1h,
        price_change_24h,
        price_change_7d,
        volume_24h,
        market_cap,
      });
    });

    return results
  } catch (err) {
    if (err instanceof Error)
    console.error("Scrape Error:", err.message);
  }
}