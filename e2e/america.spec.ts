import { test, expect } from '@playwright/test'

let urlAmericas = "http://localhost:3000/america";


test.describe('Title area', () => {
  test('The page name', async({ page }) => {
      await page.goto(urlAmericas)
      await expect(page.locator('h2')).toContainText('Americas Region');
  })

  test('Change region button', async({ page }) => { 
    await page.goto(urlAmericas)
    await page.getByRole('button', { name: 'Change Region' }).click();
  })

  test('Region page image', async({ page }) => {
    await page.goto(urlAmericas)
    await page.screenshot({ path: '../public/africa@2x.png'})
      // await page.screenshot({ path: '/asia'})
      // await page.screenshot({ path: '/africa'})
      // await page.screenshot({ path: '/europe'})
      // await page.screenshot({ path: '/oceania'})
  })

  test('Region page image stylizing', async({ page }) => { 
    await page.goto(urlAmericas)

    const regionImage = page.locator('#title_img');

    const grabbedHeight = await regionImage.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("height")
    })
    console.log(grabbedHeight);
    expect(grabbedHeight).toBe("150px");
  })

})

test.describe('Flag Area', () => {
    test('Link tag and navigation', async({ page }) => {
        await page.goto(urlAmericas)
        await expect(page.locator('div#container > div#box > div#data')).toHaveCount(228);
    })
})

test.describe('Footer', () => {
  test('Link tag and navigation', async({ page }) => {
      await page.goto(urlAmericas)
      await expect(page.locator('#footer_text')).toContainText('©Hazel Wang 2023');
  })
})

