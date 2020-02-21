const puppeteer = require('puppeteer');
(async()=>{
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-startup-window']
  });
  const page = await browser.newPage();
  await browser.pause(2000)
  await page.goto('https://github.com/');
  await browser.pause(3000);
})();