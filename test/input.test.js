describe('Test contact us page via webdriveruni', () => {
    beforeEach(function () {
        browser.setWindowSize(1800, 1200);
        browser.url('http://www.webdriveruniversity.com/');
    })
    it('test contact us page',() => {
        const contactUsButton = $("//h1[text()='CONTACT US']");
        contactUsButton.click();
        browser.switchWindow("WebDriver | Contact Us");
        browser.pause(2000);
        const firstNameTextField = $("[name='first_name']");
        firstNameTextField.waitForDisplayed();
        firstNameTextField.addValue('Add Your text here');
        browser.pause(2000);
        firstNameTextField.clearValue();
        browser.pause(2000);
        firstNameTextField.setValue('Hello how are you?');
        browser.pause(2000);
    })
})