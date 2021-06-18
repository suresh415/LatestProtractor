const { element, by } = require("protractor");

class SignIn {

    #emailInput = element(by.name("email"))
    #pwdInput = element(by.name("password"))
    #LoginBtn = element(by.xpath("//div[@class='buttons']/a[@class='button is-info']"))
    #loginButton = element(by.buttonText('LOGIN'))

    async enterLoginEmail(email) {
        await this.#emailInput.sendKeys(email)
    }

    async enterPwd(pwd){
        await this.#pwdInput.sendKeys(pwd)
    }

    async clickLoginButton() {
        await this.#loginButton.click()
    }
    async clickLoginBtn() {
        await this.#LoginBtn.click()
    }
}

   

exports.SignIn = SignIn