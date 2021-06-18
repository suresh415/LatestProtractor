const { element, browser } = require("protractor");
const { protractor } = require("protractor/built/ptor");


class Header
{

    //#signUpBtn = element(by.xpath("//div[@class='buttons']//a[@class='button is-primary']"));
    #signUpBtn = element(by.linkText("Sign up"))
    #loginBtn = element(by.linkText(" Log in "))
    //#signOut = element(by.xpath("//div[@class='buttons']/a[@class='button is-info ng-star-inserted']"));
    #signOut = element(by.linkText("Sign out"))
    #flashText = element(by.xpath("//div[text()=' Error: The email address is already in use by another account. ']"))
    //#flashSuccessMsg = element(by.xpath("div[contains(text(),' You have logged in Suresh']"))
    async clickSignUp() {
        await this.#signUpBtn.click();
    }

    async clickLogin() {
        await this.#loginBtn.click();
    }

    async clickSignOut() {
        await this.#signOut.click()
        //let EC = browser.ExpectedConditions;
        //await browser.wait(EC.elementToBeClickable(this.#signOut),50000);
    }

    async SignOutIsDispayed() {
        
        expect(await this.#signOut.isDisplayed()).toBe(true);
        await browser.sleep(5000);
        console.log(await this.#signOut.getText());
        //await browser.sleep(4000);
        //await this.#signOut.click();
        //let EC = browser.ExpectedConditions;
        //await browser.wait(EC.elementToBeClickable(this.#signOut),5000);
        
    }
    
}
exports.Header = Header