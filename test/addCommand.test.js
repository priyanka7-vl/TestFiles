describe('Add Command', () => {

    beforeEach(async () => {
        await browser.setWindowSize(1800,1200);
        await browser.url('http://www.webdriveruniversity.com/');
    })

    it('Test Web driveruni by login portal', async () => {
        const clickById = await $('#login-portal');
        await clickById.click();

        await browser.switchWindow('WebDriver | Login Portal')
        //const loginPageTitle = await browser.getTitle();
        //const loginUrl = await browser.getUrl();
        const loginPageData = await browser.getUrlAndTitle();
        expect(loginPageData.title).to.contains('Login Portal');
        expect(loginPageData.url).to.contains('Login-Portal');
        console.log("Login Page Title is: " +loginPageData.title);
        console.log("Login Page Url is: " +loginPageData.url);
    })
})