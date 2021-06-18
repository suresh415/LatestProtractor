const { browser } = require("protractor")
const { Common } = require("../Pages/Common/common")
const { Header } = require("../Pages/header/headerPage")
const { SignIn } = require("../Pages/header/signInPage")
const testdata = require("../test-data/userinfo.json")

//header
const header = new Header

//Signup
const signIn = new SignIn

//Common
const common = new Common
describe('Sign up- sureshprojectCode', () => {

    beforeAll(async () => {
        await browser.manage().window().maximize();
        await browser.manage().timeouts().implicitlyWait(30000);
        
        //await browser.waitForAngularEnabled(false);
        
    })

    beforeEach(async () => {
        //browser.driver.manage().window().setSize(1280, 1024)
        
        await browser.get("https://letcode.in/")
        await signIn.clickLoginBtn()
    })

    it("TC001 user can successfully signIn", async () => {
        await signIn.enterLoginEmail(testdata.signup.email)
        await signIn.enterPwd(testdata.signup.password)
        await signIn.clickLoginButton();
        await common.validateToastMsg("Welcome Suresh")
        await browser.sleep(10000)
        await header.SignOutIsDispayed()
        await header.clickSignOut()
        await browser.sleep(7000)
        await console.log("suresh Babu")
    })
    it("TC002 To Verify that the login fails ", async () => {
        await signIn.enterLoginEmail(testdata.signup.email)
        await signIn.enterPwd(testdata.signup.invalid_pwd)
        await signIn.clickLoginButton()
        await common.validateToastMsg(testdata.signup.login_invalid_email)
        await browser.sleep(2000)
        await console.log("suresh Babu 2")
    })
    
    it("TC003 To verfiy that the login fails", async () => {
        await signIn.enterLoginEmail(testdata.signup.invaild_email123)
        await signIn.enterPwd(testdata.signup.password)
        await signIn.clickLoginButton()
        
        await common.validateToastMsg(testdata.signup.login_invalid_password)
        await browser.sleep(2000)
        await console.log("suresh Babu 3")
        
    })

})