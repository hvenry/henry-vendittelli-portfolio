import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/projects",
  "/blog",
  "/random",
  "/reach-out",
  "/rock"
];

for (const route of routes) {
  test(`${route} renders`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/henryvendittelli/);
  });
}

test("a project detail page renders", async ({ page }) => {
  // /projects has no list of <a> links: it redirects client-side to the
  // first project's detail page, and switching projects uses <button> tabs
  // (client-side router.push), not anchor tags. Selector adjusted to match.
  await page.goto("/projects");
  await expect(page).toHaveURL(/\/projects\/.+/);
  await page.getByRole("button", { name: "RAG System" }).click();
  await expect(page).toHaveURL(/\/projects\/rag-system/);
});

test("a blog post renders", async ({ page }) => {
  await page.goto("/blog");
  const posts = page.locator('a[href^="/blog/"]');
  // Draft-only blogs are empty in production builds; assert the empty state
  if ((await posts.count()) === 0) {
    await expect(page.getByText("No blog posts yet")).toBeVisible();
    return;
  }
  await posts.first().click();
  await expect(page).toHaveURL(/\/blog\/.+/);
});

test("navbar navigates to about", async ({ page }) => {
  await page.goto("/");
  await page.locator('a[href="/about"]').first().click();
  await expect(page).toHaveURL(/\/about$/);
});

test("theme toggle switches theme", async ({ page }) => {
  await page.goto("/");
  const html = page.locator("html");
  const before = await html.getAttribute("data-theme");
  await page.locator('button[aria-label="toggle theme"]').first().click();
  await expect(html).not.toHaveAttribute("data-theme", before ?? "");
});

test("guestbook shows sign-in state for anonymous visitors", async ({
  page
}) => {
  // The guestbook can't render until Clerk initializes client-side; surface
  // Clerk failures directly instead of a generic visibility timeout
  const clerkErrors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error" && /clerk/i.test(msg.text())) {
      clerkErrors.push(msg.text());
    }
  });
  page.on("response", (response) => {
    if (response.url().includes("/__clerk/") && response.status() >= 400) {
      clerkErrors.push(`${response.status()} from ${response.url()}`);
    }
  });

  await page.goto("/rock");
  try {
    await expect(page.getByText("Sign my site!")).toBeVisible({
      timeout: 15_000
    });
  } catch (error) {
    if (clerkErrors.length > 0) {
      throw new Error(
        "Clerk failed to initialize on this deployment — check that " +
          "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY / CLERK_SECRET_KEY are set for " +
          "this environment and that the deploy was built AFTER they were " +
          `updated:\n${clerkErrors.join("\n")}`
      );
    }
    throw error;
  }
  await expect(page.getByText("Authenticate")).toBeVisible({
    timeout: 15_000
  });
});
