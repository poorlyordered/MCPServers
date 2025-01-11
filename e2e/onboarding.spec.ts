import { test, expect } from '@playwright/test'

// Helper to simulate authenticated state
test.beforeEach(async ({ context }) => {
  await context.addInitScript(() => {
    localStorage.setItem('user', JSON.stringify({ id: 1, email: 'test@example.com' }))
  })
})

test.describe('User Onboarding', () => {
  test('should require profile creation after authentication', async ({ page }) => {
    await page.goto('/dashboard')
    await expect(page).toHaveURL('/create-profile')
  })

  test('should handle basic profile creation', async ({ page }) => {
    await page.goto('/create-profile')
    await page.getByLabel('Username').fill('testuser')
    await page.getByLabel('Display Name').fill('Test User')
    await page.getByRole('button', { name: 'Continue' }).click()
    await expect(page).toHaveURL('/verify-riot-account')
  })

  test('should handle Riot account verification', async ({ page }) => {
    await page.goto('/verify-riot-account')
    await page.getByLabel('Riot ID').fill('TestUser#NA1')
    await page.getByRole('button', { name: 'Verify' }).click()
    // Assuming successful verification
    await expect(page).toHaveURL('/dashboard')
  })

  test('should show dashboard after complete onboarding', async ({ page }) => {
    await page.goto('/dashboard')
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
    // Add more specific dashboard elements to check
    await expect(page.getByRole('navigation')).toBeVisible()
  })
})
