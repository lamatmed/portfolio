const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Chemin absolu vers le fichier HTML
  const filePath = path.resolve(__dirname, 'public', 'cv.html');
  const fileUrl = 'file://' + filePath;

  await page.goto(fileUrl, { waitUntil: 'networkidle0' });

  // Génère le PDF avec style moderne
  await page.pdf({
    path: path.resolve(__dirname, 'public', 'cv.pdf'),
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' }
  });

  await browser.close();
  console.log('CV PDF moderne généré avec succès dans public/cv.pdf');
})(); 