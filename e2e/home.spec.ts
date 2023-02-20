import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";

test.describe('Header area', () => {
  test('The title tag', async({ page }) => {
      await page.goto(urlHome)

      await expect(page).toHaveTitle('World Flags');
  })

  test('The meta tag', async ({ page }) => { 
      await page.goto(urlHome)
      
      const metaDescriptionOne = page.locator('meta[name="description"]')
      await expect(metaDescriptionOne).toHaveAttribute("content", "Country flags of the world")

      const metaDescriptionTwo = page.locator('meta[name="viewport"]');
      await expect(metaDescriptionTwo).toHaveAttribute('content', 'width=device-width, initial-scale=1')
  })

  test('The link tag', async ({ page }) => {
      await page.goto(urlHome)

      const linkTag = page.locator('link[rel="icon"]');
      await expect(linkTag).toHaveAttribute('href', '/favicon.png')
  })
})

test.describe('Navigation bar', () => {
  test('Header Tag', async({ page }) => {
    await page.goto(urlHome)
    await expect(page.locator('h2')).toContainText('Countries All Over The World')
  })

  test ('Homepage link', async({ page }) => {
    await page.goto(urlHome)
    await page.click('text=All')
    await page.click('text=Americas')
    await page.click('text=Asia')
    await page.click('text=Africa')
    await page.click('text=Europe')
    await page.click('text=Oceania')
  })
})


test('Test mutiple tabs', async ({ browser }) => {
  const context = await browser.newContext();
  const urlHome = await context.newPage();
  const urlAmericas = await context.newPage();
  const urlAsia = await context.newPage();
  const urlAfrica = await context.newPage();
  const urlEurope = await context.newPage();
  const urlOceania = await context.newPage();


  await urlHome.goto('http://localhost:3000/')
  await urlAmericas.goto('http://localhost:3000/america')
  await urlAsia.goto('http://localhost:3000/asia')
  await urlAfrica.goto('http://localhost:3000/afirica')
  await urlEurope.goto('http://localhost:3000/europe')
  await urlAfrica.goto('http://localhost:3000/oceania')

})
