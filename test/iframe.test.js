describe('IFrame Test', () => {
    beforeEach(function () {
        browser.setWindowSize(1800, 1200);
        browser.url('/IFrame/index.html');
        browser.pause(5000);
    })
    it('test the clicking of a button housed withina IFrame',() => {
        const iframe = $("#frame");
        browser.switchToFrame(iframe);

        const findButton = $("//*[text()='Our Products']");
        findButton.waitForDisplayed();
        findButton.click();
        browser.pause(5000);
    })
})