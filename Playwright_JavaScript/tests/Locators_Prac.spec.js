import {test, expect} from '@playwright/test'
//Login to demobalze and check if logout button is visible after loggin in
//locators verified - css and xpath
test ('test_locatorsPractise', async ({page}) => {
    await page.goto('https://demoblaze.com/')
    
    //locator - property
    await page.locator('id=login2').click()
    //locator -css - id->#id
    await page.locator('#loginusername').fill('pavanol')
    await page.fill('#loginpassword', 'test@123')
    //locator - CSS - attribute
    await page.locator("[onclick='logIn()']").click()
    //locator xpath
    //verify the visibility of logout button
    const logOutBtn_locator =  page.locator("//a[@id='logout2']")

    await expect(logOutBtn_locator).toBeVisible()
}
)