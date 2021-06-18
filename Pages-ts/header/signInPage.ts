//const { element, by } = require("protractor");

import { by, element } from "protractor"
import { commonFunctions } from "../../LetBase/common/commonFunctions"

export class SignIn extends commonFunctions {

    private pwdInput = element(by.name("password"))
    private emailInput = element(by.name("email"))
    private LoginBtn = element(by.xpath("//div[@class='buttons']/a[@class='button is-info']"))
    private loginButton = element(by.buttonText('LOGIN'))

    async enterLoginEmail(email: string) {
        await this.clearAndType(this.emailInput, email)
    }

    async enterPwd(pwd : string){
        await this.clearAndType(this.pwdInput, pwd)
    }

    async clickLoginButton() {
        await this.click(this.loginButton);
    }
    async clickLoginBtn() {
        await this.click(this.LoginBtn);
    }
}

   

//exports.SignIn = SignIn