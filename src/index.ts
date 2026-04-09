import { Elysia } from "elysia";
import fs from 'fs'
import { cors } from '@elysiajs/cors'

const app = new Elysia().use(cors()).get("/crypto", () => {
  const raw = fs.readFileSync("./data/crypto.json", "utf8");
    return JSON.parse(raw);
}).listen(3000);

console.log(
  `CryptoDash is running at ${app.server?.hostname}:${app.server?.port}`
);
