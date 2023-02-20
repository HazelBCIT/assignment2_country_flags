import { test, devices, expect } from '@playwright/test';

test.use({
  browserName: 'chromium',
  ...devices['iPhone XR']
})

test.describe("The mobile viewport for iPhone XR", () => {
  test("Testing for page title position adjustment iPhone XR", async ({ page }) => {
    await page.goto('http://localhost:3000/')

    const titleContainer = page.locator('#title_container');

    const grabbedMarginRight = await titleContainer.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("margin-right")
    })
    console.log(grabbedMarginRight);
    expect(grabbedMarginRight).toBe("20px");
  })

  test("Testing for title position adjustment iPhone XR", async ({ page }) => {
    await page.goto('http://localhost:3000/')

    const titleText = page.locator('#title');

    const grabbedTitle = await titleText.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("text-align")
    })
    console.log(grabbedTitle);
    expect(grabbedTitle).toBe("center");
  })

})