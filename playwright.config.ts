import { defineConfig } from "@playwright/test";
import { bypassStatePath } from "./e2e/global-setup";

// Vercel Deployment Protection bypass: global setup trades the secret for a
// cookie so tests never attach custom headers to cross-origin requests
const useBypass = Boolean(
  process.env.VERCEL_AUTOMATION_BYPASS_SECRET && process.env.BASE_URL
);

export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "github" : "list",
  globalSetup: "./e2e/global-setup.ts",
  use: {
    baseURL: process.env.BASE_URL ?? "http://localhost:3000",
    trace: "retain-on-failure",
    ...(useBypass ? { storageState: bypassStatePath } : {})
  }
});
