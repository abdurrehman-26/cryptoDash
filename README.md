# CryptoDash

A lightweight real-time crypto market dashboard API built using Bun and Elysia.

## Frontend Setup

For Frontend console and setup, check out this repo

https://github.com/abdurrehman-26/cryptodash-console

## Overview

### CryptoDash demonstrates:

- Automated crypto data fetching
- Cron-based scheduled updates
- A Bun + Elysia backend API
- A modern Next.js dashboard
- Charts powered by Chart.js

---

This project is perfect for displaying market trends in a simple, visually meaningful way.

## Features
- Automated data refresh every minute
- Fast API built using Bun + Elysia
- Local caching of crypto data
- Clean folder structure

## Tech Stack

- Bun
- Elysia
- Axios
- node-cron

## How It Works
#### 1. Data Fetching

fetchCrypto.js pulls the top crypto markets from the Coingecko API and stores them in data.json.

#### 2. Cron Job

cron.js runs every minute and updates the stored data automatically.

#### 3. API

API exposes the cached data at:

GET http://localhost:3000/crypto

## Installation & Setup
#### 1. Clone the Repository
git clone https://github.com/abdurrehman-26/cryptoDash
cd cryptoDash

#### 2. Install dependencies:

```bun install```

#### 3. Start the cron job:

``` bun run start:job-service```

#### 4. Start the API server:

```bun run start:api```

The API will be live at:

```http://localhost:3000/crypto```