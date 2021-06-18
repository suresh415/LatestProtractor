const { browser, $, element } = require("protractor")
const fs = require("fs")
describe("Read/ write data from a json file", () =>{

    it("read write from json files", async () =>{
        await browser.get("https://letcode.in/edit");
        let gitname = await element(by.id("getMe")).getAttribute("value");
        console.log(gitname);
        let cleartext = await element(by.id("clearMe")).getAttribute("value");
        console.log(cleartext);

        let data = {
            "gitName":gitname,
            "Cleartext":cleartext
        }

        fs.writeFileSync("gitdata.json", JSON.stringify(data), (err) => {
            if(err) {
                console.log(err);
            }    

        })

    })

})


