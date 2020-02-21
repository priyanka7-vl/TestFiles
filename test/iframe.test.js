describe('IFrame Test', () => {
    beforeEach(function () {
        browser.setWindowSize(1800, 1200);
        browser.url('/IFrame/index.html');
        browser.pause(5000);
        // const webdriver = require('webdriver');
        // let chromeCapabilities=webdriver.Capabilities.chrome()
        // let chromeOptions = {
        // 'excludeSwitches': ['enable-automation']
        // };
        // chromeCapabilities.set('chromeOptions', chromeOptions);
        // let driver = new webdriver.Builder();
        //     driver.withCapabilities(chromeCapabilities);
        //     driver.build();
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