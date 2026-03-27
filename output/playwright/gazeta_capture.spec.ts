import { test, expect } from "playwright/test";

test.use({
  viewport: { width: 1600, height: 1200 },
  channel: "chrome",
});

test("capture gazeta aerial screen", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000/gazeta", {
    waitUntil: "domcontentloaded",
    timeout: 30000,
  });

  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        transition-duration: 0s !important;
        scroll-behavior: auto !important;
      }
    `,
  });

  const heading = page.getByRole("heading", { name: "УСЛУГИ АЭРОСЪЁМКИ" });
  await expect(heading).toBeVisible({ timeout: 30000 });
  await heading.scrollIntoViewIfNeeded();
  await page.mouse.wheel(0, -140);
  await page.waitForTimeout(1200);

  await page.screenshot({
    path: "/Users/lika/Desktop/Antigravity_Breus_Media/01_Website_Agency/breus-media-v2/output/playwright/gazeta-00-full.png",
    timeout: 30000,
  });

  await page
    .locator('a[href="/v23/drone-real-estate"]')
    .first()
    .screenshot({
      path: "/Users/lika/Desktop/Antigravity_Breus_Media/01_Website_Agency/breus-media-v2/output/playwright/gazeta-00-card-real-estate.png",
      timeout: 30000,
    });

  await page
    .locator('a[href="/v23/drone-fpv"]')
    .first()
    .screenshot({
      path: "/Users/lika/Desktop/Antigravity_Breus_Media/01_Website_Agency/breus-media-v2/output/playwright/gazeta-00-card-fpv.png",
      timeout: 30000,
    });
});
