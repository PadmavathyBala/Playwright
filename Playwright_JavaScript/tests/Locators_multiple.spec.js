import {expect, test} from '@playwright/test'
// locating multiple elements from web page

test ('Locators_Multiple', async ({page})=>{
await page.goto("https://demoblaze.com/index.html")

//Display the list of phones displayed in the first page
await page.waitForSelector('div.mb-4 h4>a')
const productLinksLocator = await page.$$('div.mb-4 h4>a')
for (const product of productLinksLocator){
    const productName = await product.textContent()
    console.log(productName)
}

})
