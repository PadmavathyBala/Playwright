//import {test, expect} from '@playwright/test'
const {test, expect} = require('@playwright/test')
// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute 
//(other attributes can be configured).
test ('builtInLocators', async ({page})=>{
    // page.getByAltText() to locate an element, usually image, by its text alternative.
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const companyLogo = page.getByAltText('company-branding')
    await expect(companyLogo).toBeVisible()

    // page.getByPlaceholder() to locate an input by placeholder.
    const userNameTxtBx = page.getByPlaceholder('Username')
    await expect(userNameTxtBx).toBeEditable()
    await userNameTxtBx.fill('Admin')

    // page.getByPlaceholder() to locate an input by placeholder.
    const passWordTxtBx = page.getByPlaceholder('Password')
    await expect(passWordTxtBx).toBeEditable()
    await passWordTxtBx.fill('admin123')

    // page.getByRole() to locate by explicit and implicit accessibility attributes.
    const loginBtn = page.getByRole("button",'Login')
    await expect(loginBtn).toBeEnabled()
    await loginBtn.click()

    // page.getByText() to locate by text content. Dashboard displayed after successful login
    await page.waitForTimeout(6000)
    const txtDisplayDashboard = page.getByText('Dashboard').nth(0)
    await expect(txtDisplayDashboard).toBeVisible()

    // page.getByTitle() to locate an element by its title attribute.
    const iconAssignLeave = page.getByTitle('Assign Leave')
    await click(iconAssignLeave)

    //verify display of Assign Leave page
    //const txtAssignLeave = page.getByText('Assign Leave')
    //await page.waitForTimeout(3000)
    //await expect(txtAssignLeave).toBeVisible()
    
    // page.getByLabel() to locate a form control by associated label's text.
    const txtBoxEmpName = page.getByLabel('Employee Name')
    await expect(txtBoxEmpName).toBeEditable()
    await txtBoxEmpName.fill('Andre')
})