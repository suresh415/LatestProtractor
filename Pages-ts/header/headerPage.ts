import { browser, by, element } from "protractor";
import { commonFunctions } from "../../LetBase/common/commonFunctions";



export class Header extends commonFunctions
{

    //#signUpBtn = element(by.xpath("//div[@class='buttons']//a[@class='button is-primary']"));
    private signUpBtn = element(by.linkText("Sign up"))
    private loginBtn = element(by.linkText(" Log in "))
    //#signOut = element(by.xpath("//div[@class='buttons']/a[@class='button is-info ng-star-inserted']"));
    private signOut = element(by.linkText("Sign out"))
    #flashText = element(by.xpath("//div[text()=' Error: The email address is already in use by another account. ']"))
    //#flashSuccessMsg = element(by.xpath("div[contains(text(),' You have logged in Suresh']"))
    async clickSignUp() {
        await this.click(this.signUpBtn);
    }

    async clickLogin() {
        await this.click(this.loginBtn);
    }

    async clickSignOut() {
        await this.click(this.signOut)
        //let EC = browser.ExpectedConditions;
        //await browser.wait(EC.elementToBeClickable(this.#signOut),50000);
    }

    async SignOutIsDispayed() {
        
        //expect(await this.signOut.isDisplayed()).toBe(true);
        await this.assertTrue(this.signOut)
        await browser.sleep(5000);
        console.log(await this.signOut.getText());
        //await browser.sleep(4000);
        //await this.#signOut.click();
        //let EC = browser.ExpectedConditions;
        //await browser.wait(EC.elementToBeClickable(this.#signOut),5000);
        
    }
    
}