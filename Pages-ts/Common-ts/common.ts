//const { browser } = require("protractor");

import { $, browser } from "protractor";
import { commonFunctions } from "../../LetBase/common/commonFunctions";

export class Common extends commonFunctions {

    private toast = $("div.toast-message")

    async validateToastMsg(message) {
        let ec = browser.ExpectedConditions;
        this.assertTrue(this.toast)
        this.assertText(this.toast, message);
        this.InvisibilityOf(this.toast);
        //await browser.sleep(5000)
        //expect(await this.#toast.isDisplayed()).toBe(true)
        //expect(await this.#toast.getText()).toBe(message)

    }

}
//exports.Common = Common;