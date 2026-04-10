# CryptoDash

A lightweight real-time crypto market dashboard API built using Bun and Elysia.

## Frontend Setup

For Frontend console and setup, check out this repo

<a href="https://github.com/abdurrehman-26/cryptodash-console" target="_blank">https://github.com/abdurrehman-26/cryptodash-console</a>

## Overview

### CryptoDash demonstrates:

- Automated crypto data fetching
- Cron-based scheduled updates
- A Bun + Elysia backend API
- A modern Next.js dashboard

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

fetchCrypto.ts pulls the top crypto markets from the Coingecko API and stores them in data.json.

#### 2. Cron Job

cron.js runs every minute and updates the stored data automatically.

#### 3. API

API exposes the cached data at:

GET http://localhost:3001/crypto

## Installation & Setup
#### 1. Clone the Repository

```bash
git clone https://github.com/abdurrehman-26/cryptoDash
cd cryptoDash
```

#### 2. Install dependencies:

```bash
bun install
```

#### 3. Start the cron job:

```bash
bun run start:job-service
```

#### 4. Start the API server:

```bash
bun run start:api
```

The API will be live at:

```bash
http://localhost:3001/crypto
```