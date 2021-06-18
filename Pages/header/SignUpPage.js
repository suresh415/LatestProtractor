const { element, By, browser } = require("protractor")
class SignUp {


    #nameInput = element(By.id("name"))
    #emailInput = element(By.id("email"))
    #pwdInput = element(By.id("pass"))
    #policyTC = element(By.id("agree"))
    #signUpBtn = element(By.xpath("//button[text()='SIGN UP']"))
    //SignUpBtn = element(By.buttonText("SIGN UP"))
    #flashSuccessMsg = element(by.xpath("div[contains(text(),' You have logged in Suresh']"))

    async enterName(name) {
        await this.#nameInput.sendKeys(name)
    }

    async clearEmailName() {
        await this.#emailInput.clear()
    }

    async enterPassword(pass) {
        await this.#pwdInput.sendKeys(pass)
    }

    async enterEmail(email) {
        await this.#emailInput.sendKeys(email)
    }

    async enterTermAndCondition(){
        await this.#policyTC.click()
    }

    async clickSignUp() {
        await this.#signUpBtn.click()
        /*let EC = browser.ExpectedConditions;

        browser.wait(function(){
            browser.wait(EC.visibilityOf(this.#signUpBtn),4000);
            return this.#signUpBtn
        });
        this.#signUpBtn.click();*/
        
        
    }

    async getTextFlash() {
        await this.#flashSuccessMsg.getText()
    }
}
exports.SignUp = SignUp
