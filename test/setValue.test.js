describe('test setValue', () => {
    beforeEach(function () {
        browser.setWindowSize(1800, 1200);
        browser.url('/Contact-Us/contactus.html');
    })
    it('Validation of setValue and giving inputs to textfields',() => {
       browser.pause(2000);
       const firstNameTextField = $('[name="first_name"]');
       firstNameTextField.addValue('priyanka');
       browser.pause(2000);
       const lastNameTextField = $('[name="last_name"]');
       lastNameTextField.addValue('violet');
       browser.pause(2000);
       const emailAddress = $('[name="email"]');
       emailAddress.addValue('priyanka777@gmail.com');
       browser.pause(2000);
       const message = $('[name="message"]');
       message.addValue('This is a good tutorial!!');
       const submitButton = $('[type="submit"]');
       submitButton.click();
       const contactUsSubmissionDetails = browser.getUrlAndTitle();
       expect(contactUsSubmissionDetails.url).to.contains('contact-form-thank-you');
    })
    it('Validation of setValue and giving inputs to textfields',() => {
        browser.pause(2000);
        const firstNameTextField = $('[name="first_name"]');
        firstNameTextField.addValue('kalp');
        browser.pause(2000);
        const lastNameTextField = $('[name="last_name"]');
        lastNameTextField.addValue('shah');
        browser.pause(2000);
        const emailAddress = $('[name="email"]');
        emailAddress.addValue('kalpshah777@gmail.com');
        browser.pause(2000);
        const message = $('[name="message"]');
        message.addValue('Very helpful tutuorial for beginners!!');
        const submitButton = $('[type="submit"]');
        submitButton.click();
        const contactUsSubmissionDetails = browser.getUrlAndTitle();
        expect(contactUsSubmissionDetails.url).to.contains('contact-form-thank-you');
     })
    
})