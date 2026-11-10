import "dotenv/config";
import {expect} from '@playwright/test'

export class HomePage {

    constructor(page){
    this.page = page;
    this.AppUrl = process.env.WEB_APP_URL;
    this.MyAccountLnk = page.getByRole('link', {name: 'My Account'}).first()
    this.LoginLnk = page.getByRole('link', {name: 'Login'})
    this.RegisterLnk = page.getByRole('link', {name:'Register'})
    }

    async navigateURL(){
            console.log(this.AppUrl)
        await this.page.goto(this.AppUrl)
    }

    async clickMyAccountLnk(){
        await this.MyAccountLnk.click()
    }

    async clickLoginLnk(){
        await this.LoginLnk.click()
    }
    async RegisterLnk(){
        await this.RegisterLnk.click()
    }
}
