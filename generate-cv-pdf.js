import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(`file://${process.cwd()}/public/cv.html`, {waitUntil: 'networkidle0'});
await page.pdf({
  path: 'public/cv.pdf',
  format: 'A4',
  printBackground: true,
  margin: {top: '20mm', bottom: '20mm', left: '15mm', right: '15mm'}
});
await browser.close();
console.log('cv.pdf généré dans public/'); 