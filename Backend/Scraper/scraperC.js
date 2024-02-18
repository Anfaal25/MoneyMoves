const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://money.ca/banking/chequing-accounts/best-student-chequing-accounts-canada', { waitUntil: 'networkidle2' });

    const data = await page.evaluate(() => {
        const rows = Array.from(document.querySelectorAll('tr.topic-table__row'));
        return rows.slice(1).map(row => { // Skip header row
            const columns = row.querySelectorAll('td.topic-table__cell');
            return {
                bankAccount: columns[0].innerText.trim(),
                transactions: columns[1].innerText.trim(),
                additionalFees: columns[2].innerText.trim(),
                interestRate: columns[3].innerText.trim()
            };
        });
    });

    console.log(data);
    await browser.close();
})();
