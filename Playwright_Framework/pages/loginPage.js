
import {expect} from '@playwright/test'

export class LoginPage {

    constructor(page){
    this.emailAddressTxtbox = page.getByRole('textbox',{name: 'E-Mail Address'})    
    this.passwordTxtBox = page.getByRole('textbox', { name: 'Password' })
    this.loginBtn = page.getByRole('button', {name: 'Login'})
    this.logOutHeading = page.getByRole('heading', { name: 'Log Out' });
    this.errorMsg = page.getByRole('log', {name: 'Warning'})
    }

    async setEmail(email){
        await this.emailAddressTxtbox.fill(email)
    }

   async setPassword(password){
        await this.passwordTxtBox.fill(password)
    }

    async clickLoginBtn(){
        await this.loginBtn.click()
    }

    async isIncorrectUserOrPwdMsg(){
        try{
            await this.errorMsg.isVisible()
            let errorMsgCon = await this.errorMsg.textContent()
            if (errorMsgCon == 'Warning: No match for E-Mail Address and/or Password.'){
                return true 
        }else {return false}
        } catch(exception){
            console.log('Unable to login due to error ${exception}')
        }
    }

    async isCorrectUserOrPwdMsg(){
        try{
            await this.logOutHeading.isVisible()
            let logOutHeadingMsg = await this.logOutHeading.textContent()
            if (logOutHeadingMsg == 'Warning: No match for E-Mail Address and/or Password.'){
                return true 
        }else false
        } catch(exception){
            cconsole.log('Unable to login due to error ${exception}')
        }
    }
    async completeLogin(email, password) {
        await this.setEmail(email)
        await this.setPassword(password)
        await this.clickLoginBtn()
    }
    }
    

