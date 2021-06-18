import { by, element } from "protractor"
import { commonFunctions } from "../../LetBase/common/commonFunctions"

//const { element, By, browser } = require("protractor")
export class SignUp extends commonFunctions {


    private nameInput = element(by.id("name"))
    private emailInput = element(by.id("email"))
    private pwdInput = element(by.id("pass"))
    private policyTC = element(by.id("agree"))
    private signUpBtn = element(by.xpath("//button[text()='SIGN UP']"))
    //SignUpBtn = element(By.buttonText("SIGN UP"))
    //#flashSuccessMsg = element(by.xpath("div[contains(text(),' You have logged in Suresh']"))

    async enterName(name :string) {
        await this.clearAndType(this.nameInput, name)
    }

    /*async clearEmailName() {
        await this.#emailInput.clear()
    }*/

    async enterPassword(pass) {
        await this.clearAndType(this.pwdInput, pass)
    }

    async enterEmail(email : string) {
        await this.clearAndType(this.emailInput, email)
    }

    async enterTermAndCondition(){
        await this.click(this.policyTC);
    }

    async clickSignUp() {
        await this.click(this.signUpBtn);
        /*let EC = browser.ExpectedConditions;

        browser.wait(function(){
            browser.wait(EC.visibilityOf(this.#signUpBtn),4000);
            return this.#signUpBtn
        });
        this.#signUpBtn.click();*/
        
        
    }

    /*async getTextFlash() {
        await this.#flashSuccessMsg.getText()
    }*/
}
//exports.SignUp = SignUp
