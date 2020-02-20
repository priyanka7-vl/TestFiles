describe('inject javascript into the target website',() => {
    beforeEach(function(){
        browser.url('http://www.webdriveruniversity.com/');
    })
    it('change webdriveruni background color',async () => {
       await browser.execute(() => {
           return(document.body.style.backgroundColor="violet");
       })
       await browser.pause(5000);
    })
})