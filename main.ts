// Entry image: "The World in One Day", a newspaper front page for Thursday
// 19 November 2026 — one hero story (GTA VI launches) plus five more panels
// (World Court, Shenzhen Summit, Riyadh, Crimea Bridge, Bangladesh).
// The image is entry.png beside this file: a 1024x1024 PNG under 1 MiB,
// drawn from poster.html (plain HTML/CSS/SVG, no photos, no copied artwork)
// with Playwright; this program hands it in by copying it to /output/entry.png.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(out, 'entry.png'));
