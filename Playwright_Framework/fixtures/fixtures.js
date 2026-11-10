import { test as base } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'

export const test = base.extend({
  homePg: async ({ page }, use) => {
    const homePg = new HomePage(page)
    await use(homePg)
  },

  loginPg: async ({ page }, use) => {
    const loginPg = new LoginPage(page)
    await use(loginPg)
  },
})

export { expect } from '@playwright/test'