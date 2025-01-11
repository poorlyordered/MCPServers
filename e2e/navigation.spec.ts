import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate to home page', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveURL('/')
  })

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'About' }).click()
    await expect(page).toHaveURL('/about')
  })

  test('should redirect /home to /', async ({ page }) => {
    await page.goto('/home')
    await expect(page).toHaveURL('/')
  })

  test('navigation menu should be visible', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('navigation')).toBeVisible()
  })
})
