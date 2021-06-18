const { browser } = require("protractor");

class Common {

    #toast = $("div.toast-message")

    async validateToastMsg(message) {
        await browser.sleep(5000)
        expect(await this.#toast.isDisplayed()).toBe(true)
        expect(await this.#toast.getText()).toBe(message)

    }

}
exports.Common = Common;