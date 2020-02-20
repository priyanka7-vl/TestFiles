const config = require('../config/main-config');
describe('Test Contact us page', () => {
    beforeEach(function () {
        browser.setWindowSize(1800, 1200);
        browser.url('./');
        const pageDetails = browser.getUrlAndTitle();
        expect(pageDetails.url).to.contains('webdriveruniversity');
        expect(pageDetails.title).to.contains('WebDriverUniversity');
    })
    it('test the contact us page via submitting all fields',() => {
      browser.waitAndClick('//h1[text()="CONTACT US"]');
      browser.switchWindow('WebDriver | Contact Us');
    
      browser.pause(2000);
      browser.waitAndSendkeys('//*[@name="first_name"]',config.firstName)
      browser.pause(2000);
      browser.waitAndSendkeys('//*[@name="last_name"]','Saranya');
      browser.pause(2000);
      browser.waitAndSendkeys('//*[@name="email"]','priyanka777@gmail.com');
      browser.pause(2000);
      browser.waitAndSendkeys('//*[@name="message"]','It is a good tutorial!!');
      browser.pause(2000);
      browser.waitAndClick('//*[@value="SUBMIT"]');
      browser.pause(2000);
     
      const contactUsSubmissionDetails = browser.getUrlAndTitle();
      expect(contactUsSubmissionDetails.url).to.contains('contact-form-thank-you');
    })
})