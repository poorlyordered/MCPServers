import { test, expect } from '@playwright/test'

test.describe('Authentication Flow', () => {
  test('should redirect unauthenticated users to signup when accessing protected routes', async ({
    page
  }) => {
    await page.goto('/dashboard')
    await expect(page).toHaveURL('/signup')
  })

  test('signup page should have required form elements', async ({ page }) => {
    await page.goto('/signup')
    await expect(page.getByLabel('Email')).toBeVisible()
    await expect(page.getByLabel('Password')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible()
  })

  test('should show error for invalid email', async ({ page }) => {
    await page.goto('/signup')
    await page.getByLabel('Email').fill('invalid-email')
    await page.getByLabel('Password').fill('password123')
    await page.getByRole('button', { name: 'Sign Up' }).click()
    await expect(page.getByText('Please enter a valid email')).toBeVisible()
  })

  test('should handle successful signup flow', async ({ page }) => {
    await page.goto('/signup')
    await page.getByLabel('Email').fill('test@example.com')
    await page.getByLabel('Password').fill('password123')
    await page.getByRole('button', { name: 'Sign Up' }).click()
    await expect(page).toHaveURL('/verify-email')
  })
})
