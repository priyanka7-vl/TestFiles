describe('test setValue', () => {
    beforeEach(function () {
        browser.setWindowSize(1800, 1200);
        browser.url('/Contact-Us/contactus.html');
    })
    it('Validation of setValue and giving inputs to textfields',() => {
        browser.pause(2000);
        const firstNameTextField = $('[name="first_name"]');
        firstNameTextField.setValue('kalp');
        browser.pause(2000);
        const lastNameTextField = $('[name="last_name"]');
        lastNameTextField.setValue('shah');
        browser.pause(2000);
        const emailAddress = $('[name="email"]');
        emailAddress.setValue('kalpshah777@gmail.com');
        browser.pause(2000);
        const message = $('[name="message"]');
        message.setValue('Very helpful tutuorial for beginners!!');
        const submitButton = $('[type="submit"]');
        submitButton.click();
        const contactUsSubmissionDetails = browser.getUrlAndTitle();
        expect(contactUsSubmissionDetails.url).to.contains('contact-form-thank-you');
     })
     it('Validation of setValue and giving inputs to textfields',() => {
        browser.pause(2000);
        const firstNameTextField = $('[name="first_name"]');
        firstNameTextField.setValue('priyanka');
        browser.pause(2000);
        const lastNameTextField = $('[name="last_name"]');
        lastNameTextField.setValue('violet');
        browser.pause(2000);
        const emailAddress = $('[name="email"]');
        emailAddress.setValue('priyanka777@gmail.com');
        browser.pause(2000);
        const message = $('[name="message"]');
        message.setValue('This is a good tutorial!!');
        const submitButton = $('[type="submit"]');
        submitButton.click();
        const contactUsSubmissionDetails = browser.getUrlAndTitle();
        expect(contactUsSubmissionDetails.url).to.contains('contact-form-thank-you');
     })
})