const { browser, element } = require("protractor");
const { BrowserStack } = require("protractor/built/driverProviders");
const { protractor } = require("protractor/built/ptor");

describe("Check the alert is preset wait", () =>{

    it("wait for the alert accpt or dismiss", async() =>{

        await browser.get("https://letcode.in/waits");
        await element(by.buttonText("Simple Alert")).click();
        //await browser.sleep(8000);
        let ec = browser.ExpectedConditions;
        await browser.wait(ec.alertIsPresent(), 5000, 'waiting for an alert');
        await browser.switchTo().alert().accept();
        console.log("thuis is suresh babu 2")
    })
})
describe("Check the alert is preset wait22222", () =>{

    it("wait for the alert accpt or dismiss222", async() =>{

        await browser.get("https://letcode.in/waits");
        await element(by.buttonText("Simple Alert")).click();
        //await browser.sleep(8000);
        let ec = browser.ExpectedConditions;
        await browser.wait(ec.alertIsPresent(), 5000, 'waiting for an alert');
        await browser.switchTo().alert().accept();
        console.log("thuis is suresh babu 2334")
    })
})