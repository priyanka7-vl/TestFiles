const config = require('../config/main-config');
const dataGenerators = require('../utils/dataGenerators.test');
import contactUsPO from '../page-objects/contactUsPO.test';
describe('Test Contact us page', () => {
    beforeEach(function () {
        contactUsPO.open();
        browser.setWindowSize(1800, 1200);
        //browser.url('./');
       // const pageDetails = browser.getUrlAndTitle();
       // expect(pageDetails.url).to.contains('webdriveruniversity');
       // expect(pageDetails.title).to.contains('WebDriverUniversity');
    })
    it('test the contact us page via submitting all fields',() => {
      //browser.waitAndClick('//h1[text()="CONTACT US"]');
      //browser.switchWindow('WebDriver | Contact Us');
    
      browser.pause(2000);
     // browser.waitAndSendkeys('//*[@name="first_name"]',config.firstName);
      contactUsPO.firstName.setValue(config.firstName);
      browser.pause(2000);
      //browser.waitAndSendkeys('//*[@name="last_name"]','Saranya');
      contactUsPO.lastName.setValue(config.lastName);
      browser.pause(2000);
      //browser.waitAndSendkeys('//*[@name="email"]',dataGenerators.generateRandomEmailAddress());
      contactUsPO.emailAddress.setValue(dataGenerators.generateRandomEmailAddress());
      browser.pause(2000);
     // browser.waitAndSendkeys('//*[@name="message"]',dataGenerators.generateRandomString());
      contactUsPO.comments.setValue(dataGenerators.generateRandomString());
      browser.pause(2000);
      //browser.waitAndClick('//*[@value="SUBMIT"]');
      contactUsPO.submit();
      browser.pause(2000);
     
      //const contactUsSubmissionDetails = browser.getUrlAndTitle();
      expect(contactUsPO.successfulContactHeader.getText()).to.contains('contact-form-thank-you');
    })
})