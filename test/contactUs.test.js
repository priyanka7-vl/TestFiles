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
      const contactUsButton = $('//h1[text()="CONTACT US"]');
      contactUsButton.click();
      browser.switchWindow('WebDriver | Contact Us');
      const firstName = $('//*[@name="first_name"]');
      const lastName = $('//*[@name="last_name"]');
      const emailAddress = $('//*[@name="email"]');
      const message = $('//*[@name="message"]');
      const submitButton = $('//*[@value="SUBMIT"]');

      firstName.setValue(config.firstName);
      browser.pause(2000);
      lastName.setValue('Saranya');
      browser.pause(2000);
      emailAddress.setValue('priyanka777@gmail.com');
      browser.pause(2000);
      message.setValue('It is a good tutorial!!');
      browser.pause(2000);
      submitButton.click();
      const contactUsSubmissionDetails = browser.getUrlAndTitle();
      expect(contactUsSubmissionDetails.url).to.contains('contact-form-thank-you');
    })
})