const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Load the local HTML file
  await page.goto(`file://${path.resolve(__dirname, '..')}/out/resume.html`, {
    waitUntil: 'networkidle2', // Wait for network requests to finish
  });

  // Create a PDF of the local page
  await page.pdf({
    path: 'resume.pdf',
    format: 'A4',
    margin: {
      top: 10,
      bottom: 10,
    },
  });

  await browser.close();
})();
