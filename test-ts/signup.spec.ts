import { browser } from "protractor";
import { Common } from "../Pages-ts/Common-ts/common";
import { Header } from "../Pages-ts/header/headerPage";
import { SignUp } from "../Pages-ts/header/SignUpPage";
import testdata from "../test-data/userinfo.json";

//header
const header = new Header();

//Signup
const signUp = new SignUp();

//Common
const common = new Common();

describe('Sign up- sureshprojectCode', () => {

    beforeAll(async () => {
        await browser.manage().window().maximize();
        await browser.manage().timeouts().implicitlyWait(30000);
    })

    beforeEach(async () => {
        //browser.driver.manage().window().setSize(1280, 1024)
        await browser.get(browser.params.env)
        await header.clickSignUp()
    })

    it("TC001 to verify that user can signup successfully",async () => {
        //await header.clickSignUp()
        let name = testdata.signup.name;
        await signUp.enterName(name)
        await signUp.enterEmail(testdata.signup.email)
        await signUp.enterPassword(testdata.signup.password)
        await signUp.enterTermAndCondition()
        await signUp.clickSignUp()
        await common.validateToastMsg(`You have logged in ${name}`)
        await browser.sleep(10000);
        await header.SignOutIsDispayed();
        await header.clickSignOut();
        await browser.sleep(7000)
        await console.log("suresh Babu signup")
    })

    it("TC002 To verify that the signup fails", async () => {
        await signUp.clickSignUp();
        await common.validateToastMsg(testdata.signup.invalid_email);
        await browser.sleep(2000)
        await console.log("suresh Babu 2")
    })
    it("TC003 To verify that the vaid email and no pwd for signup fails", async() => {
        await signUp.enterEmail(testdata.signup.valid_email)
        await signUp.clickSignUp();
        await common.validateToastMsg(testdata.signup.invalid_password);
        await browser.sleep(2000)
        await console.log("suresh Babu 3")
    })
    it("TC003 To verify that the vaid PWD and no email for signup fails", async() => {
        await signUp.enterPassword(testdata.signup.password);
        await signUp.clickSignUp();
        await common.validateToastMsg(testdata.signup.invalid_email);
        await browser.sleep(2000)
        await console.log("suresh Babu 3")
    })
})