import { test,expect } from "../../fixtures/fixtures.js"
import { DataReader } from "../../utils/DataReader";
import path from 'path'

const filePath = path.resolve(
    __dirname,
    "../../testdata/opencart_logindata.json"
);

const loginDataFromJSON = DataReader.readJsonData(filePath);

test.describe('UserCredentialValidation_with JSON csv and Excel',()){
loginDataFromJSON.forEach((loginData, index) => {
    test(`TC_LoginValidationwithJSON_${index + 1}`, async ({homePg,loginPg }) => {
       await homePg.navigateURL()
       await homePg.clickMyAccountLnk()
       await homePg.clickLoginLnk()
       await loginPg.setEmail(loginData.email)
       await loginPg.setPassword(loginData.password)
       await loginPg.clickLoginBtn()
    });
});