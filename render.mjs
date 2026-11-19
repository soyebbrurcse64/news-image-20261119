// Render poster.html to entry.png (1024x1024) with Playwright.
import { chromium } from '/tmp/pw/node_modules/playwright-core/index.mjs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch({
  executablePath: '/home/hatch/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome',
});
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
await page.goto('file://' + join(here, 'poster.html'));
await page.waitForTimeout(400);
await page.screenshot({ path: join(here, 'entry.png') });
await browser.close();
console.log('wrote entry.png');
