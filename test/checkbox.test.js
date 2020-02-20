describe('isExisting,isSelected and isDisplayed Commands', () => {
    beforeEach(function () {
        browser.setWindowSize(1800, 1200);
        browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
    })
    it('Validate state of checkbox',() => {
        const checkbox = $("//div[@id='checkboxes']//input[@value='option-1']");
        expect(checkbox.isExisting()).to.be.true;
        expect(checkbox.isSelected()).to.be.false;
        expect(checkbox.isDisplayed()).to.be.true;
        console.log("isExisting:"+checkbox.isExisting());
        console.log("isSelected:"+checkbox.isSelected());
        console.log("isDisplayed:"+checkbox.isDisplayed());
        browser.pause(3000);
    })
})