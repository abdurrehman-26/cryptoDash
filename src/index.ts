import { Elysia } from "elysia";
import fs from 'fs'
import { cors } from '@elysiajs/cors'
import { fetchCrypto } from "./utils/fetch-crypto";

const app = new Elysia().onStart(async () => {
  await fetchCrypto()
  console.log(
    `CryptoDash is running at ${app.server?.hostname}:${app.server?.port}`
  );
}).use(cors()).get("/crypto", () => {
  const raw = fs.readFileSync("./data/crypto.json", "utf8");
    return JSON.parse(raw);
}).listen(3000);
