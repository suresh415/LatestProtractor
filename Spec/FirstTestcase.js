const { browser } = require("protractor");

describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
  
      expect(browser.getTitle()).toEqual('Super Calculator');
      browser.sleep(2000)
    });

    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    
        expect(browser.getTitle()).toEqual('Super Calculator');
        browser.sleep()
      });
  });