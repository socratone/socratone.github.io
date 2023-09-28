/* eslint-disable @typescript-eslint/no-var-requires */
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://socratone.github.io/resume');
  await page.pdf({ path: 'resume.pdf', format: 'A4' });

  await browser.close();
})();
