import base_PO from './Base_PO.test'
class contactUsPO extends base_PO {
    open() {
        super.open("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    }
    get firstName() {
        return $('//*[@name="first_name"]');
    }
    get lastName() {
        return $('//*[@name="last_name"]');
    }
    get email() {
        return $('//*[@name="email"]');
    }
    get comments() {
        return $('//*[@name="message"]');
    }
    get submitButton() {
        return $('//*[@value="SUBMIT"]');
    }
    submit() {
        this.submitButton.click();
    }
    get successfulContactHeader() {
        return $("//div[@id='contact_reply']/h1");
    }
}
export default new contactUsPO()