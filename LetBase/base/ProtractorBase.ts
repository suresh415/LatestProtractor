import { browser, element, ElementFinder, ProtractorExpectedConditions } from "protractor";
import { protractor } from "protractor/built/ptor";

export class ProtractorBase {
    private ec: ProtractorExpectedConditions = browser.ExpectedConditions;
    private timeout = 30000;


    public async click(element: ElementFinder) {
        await browser.wait(this.ec.elementToBeClickable(element), this.timeout, "Failed to click the element");
        await element.click();

    }

    public async type(element: ElementFinder, testData: string) {
        await this.visibilityOf(element);
        await element.sendKeys(testData);
    }

    public async clearAndType(element: ElementFinder, testData: string){
        await this.visibilityOf(element);
        await element.clear();
        await element.sendKeys(testData);
    }
    public async assertText(element: ElementFinder, expectedText: string) {
        await this.visibilityOf(element);
        let actualText = await element.getText();
        expect(actualText.trim()).toBe(expectedText);
    }

    private async visibilityOf(element: ElementFinder) {
        await browser.wait(this.ec.visibilityOf(element), this.timeout, "Element is not visible");
    }

    public async InvisibilityOf(element: ElementFinder) {
        await browser.wait(this.ec.invisibilityOf(element), this.timeout, "Element is still visible");
    }

    public async assertTrue(element: ElementFinder) {
        await this.visibilityOf(element);
        expect(await element.isDisplayed()).toBe(true);
    }
    public async assertFalse(element: ElementFinder){
        await this.visibilityOf(element);
        expect(await element.isDisplayed()).toBe(false);
    }

    public async acceptAlert(element: ElementFinder){
        await this.waitForAlert();
        await (await browser.switchTo().alert()).accept();
    }

    public async dismissAlert(element: ElementFinder){
        await this.waitForAlert();
        await (await browser.switchTo().alert()).dismiss();
    }

    private async waitForAlert(){
        await browser.wait(this.ec.alertIsPresent(), this.timeout, "Alert is not present");
    }

    public async typeInAlert(data: string){
        await this.waitForAlert();
        await (await browser.switchTo().alert()).sendKeys(data);
    }

    public async getTextFromAlert(): Promise<string> {
        await this.waitForAlert();
        let alertText = await (await browser.switchTo().alert()).getText();
        return alertText;

    }
    public async switchToFrame(frameNumber: number) {
        await browser.switchTo().frame(frameNumber);
    }

    public async typeAndTab(element: ElementFinder, testData: string){
        await this.visibilityOf(element);
        await element.clear();
        await element.sendKeys(testData, protractor.Key.TAB)
    }

    public async typeAndEnter(element: ElementFinder, testData: string){
        let capabilities = await browser.getCapabilities();
        let platform = capabilities.get('platform');
        await this.visibilityOf(element);
        await element.clear();
        if(platform === "Mac OS X") {
            await element.sendKeys(testData, protractor.Key.RETURN)
            }
            else {
            await element.sendKeys(testData, protractor.Key.ENTER)
        }
    }
    public async mouseHoverAndClick(element: ElementFinder){
        await browser.actions().mouseMove(await element.getWebElement()).click().perform();

    }
    public async movetoElement(element: ElementFinder){
        await browser.actions().mouseMove(await element.getWebElement()).perform();
    }

}