# The World in One Day — 19 November 2026

[![make.fun](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/soyebbrurcse64/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/soyebbrurcse64/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

A newspaper front-page poster that sums up Thursday 19 November 2026 in one image:
**entry.png** (1024×1024, under 1 MiB). The masthead reads "THURSDAY 19 NOVEMBER 2026"
over the title "THE WORLD IN ONE DAY", with one hero story and five smaller panels,
each with a short factual label in large type so the page still reads at small size.
Every illustration is drawn from scratch in HTML/CSS/SVG — no photos, no copied
artwork, no logos, and nothing invented beyond the six stories listed below.

## The six stories

1. **GTA VI LAUNCHES** (hero) — Rockstar's Grand Theft Auto VI is out today on
   PlayStation 5 and Xbox Series X|S, $79.99, more than 17 million pre-orders,
   99 Metascore, set in Leonida / Vice City, starring Lucia Caminos and Jason Duval.
2. **WORLD COURT** — the International Court of Justice, the UN's top court, rules
   Myanmar committed state-sponsored genocide against the Rohingya, a first of its kind.
3. **SHENZHEN SUMMIT** — Trump, Xi and Putin announce a "peace declaration" after an
   unprecedented trilateral summit in Shenzhen.
4. **RIYADH** — a Houthi missile damages Riyadh's tallest tower, the Public Investment
   Fund tower, as Saudi Arabia reports new Houthi attacks.
5. **CRIMEA BRIDGE** — Russia says Ukraine attacked the Crimean Bridge for the third
   time this week; road traffic halted.
6. **BANGLADESH** — unrest spreads across 28 districts; the family home of former
   leader Muhammad Yunus is set on fire.

## How it was made

`poster.html` is the front page (plain HTML/CSS/SVG, no network, no photos).
`render.mjs` opens it in Chromium with Playwright and saves the screenshot as
`entry.png`. `main.ts` hands the image in by copying it to `/output/entry.png`.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.png` is the entry image, byte-identical on every run.
