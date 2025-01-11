import { test as base } from '@playwright/test'
import type { Page } from '@playwright/test'

// Extend the base test type with custom fixtures
export const test = base.extend({
  // Authenticated page fixture
  authenticatedPage: async ({ page }, use) => {
    await page.addInitScript(() => {
      localStorage.setItem('user', JSON.stringify({
        id: 1,
        email: 'test@example.com',
        username: 'testuser',
        displayName: 'Test User'
      }))
    })
    await use(page)
  }
})

// Helper functions
export const loginUser = async (page: Page, email: string, password: string) => {
  await page.goto('/signup')
  await page.getByLabel('Email').fill(email)
  await page.getByLabel('Password').fill(password)
  await page.getByRole('button', { name: 'Sign Up' }).click()
}

export const completeProfile = async (page: Page) => {
  await page.goto('/create-profile')
  await page.getByLabel('Username').fill('testuser')
  await page.getByLabel('Display Name').fill('Test User')
  await page.getByRole('button', { name: 'Continue' }).click()
}

export const verifyRiotAccount = async (page: Page) => {
  await page.goto('/verify-riot-account')
  await page.getByLabel('Riot ID').fill('TestUser#NA1')
  await page.getByRole('button', { name: 'Verify' }).click()
}

// Test data
export const TEST_USER = {
  email: 'test@example.com',
  password: 'password123',
  username: 'testuser',
  displayName: 'Test User',
  riotId: 'TestUser#NA1'
}
