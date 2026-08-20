import { chromium } from "@playwright/test";

export const bypassStatePath = "e2e/.auth/vercel-bypass.json";

/**
 * Exchanges the Vercel protection-bypass secret for a _vercel_jwt cookie and
 * saves it as storage state. Sending the secret as extraHTTPHeaders instead
 * would attach custom headers to cross-origin requests (e.g. Clerk's CDN),
 * forcing CORS preflights that fail.
 */
export default async function globalSetup() {
  const secret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
  const baseURL = process.env.BASE_URL;
  if (!secret || !baseURL) return;

  const browser = await chromium.launch();
  const page = await browser.newPage();
  const url = new URL(baseURL);
  url.searchParams.set("x-vercel-protection-bypass", secret);
  url.searchParams.set("x-vercel-set-bypass-cookie", "true");
  await page.goto(url.toString());
  await page.context().storageState({ path: bypassStatePath });
  await browser.close();
}
