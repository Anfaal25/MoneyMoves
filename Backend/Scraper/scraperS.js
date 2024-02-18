const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.nerdwallet.com/ca/banking/best-savings-accounts', { waitUntil: 'networkidle2' });

    const savingsAccounts = await page.evaluate(() => {
        const accounts = [];
        const cards = document.querySelectorAll('.c-keto-product-card__body');

        cards.forEach(card => {
            const titleElement = card.querySelector('.c-keto-product-card__title');
            const interestRateElement = Array.from(card.querySelectorAll('.c-keto-product-card__driver-label')).find(e => e.textContent.includes('Interest Rate'));
            const interestRateFeeElement = interestRateElement ? interestRateElement.nextElementSibling.querySelector('.c-keto-product-card__driver-fee') : null;
            const monthlyFeeElement = Array.from(card.querySelectorAll('.c-keto-product-card__driver-label')).find(e => e.textContent.includes('Monthly Fee'));
            const monthlyFeeFeeElement = monthlyFeeElement ? monthlyFeeElement.nextElementSibling.querySelector('.c-keto-product-card__driver-fee') : null;
            const applyLinkElement = card.querySelector('.c-keto-product-card__cta-button--wrapper a');

            accounts.push({
                title: titleElement ? titleElement.innerText.trim() : null,
                interestRate: interestRateFeeElement ? interestRateFeeElement.innerText.trim() : null,
                monthlyFee: monthlyFeeFeeElement ? monthlyFeeFeeElement.innerText.trim() : null,
                applyLink: applyLinkElement ? applyLinkElement.href : null
            });
        });

        return accounts;
    });

    console.log(savingsAccounts);
    await browser.close();
})();
