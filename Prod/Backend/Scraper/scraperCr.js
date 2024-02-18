const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.nerdwallet.com/ca/credit-cards/best-student-credit-cards', { waitUntil: 'networkidle2' });

  const creditCards = await page.evaluate(() => {
    const extractText = (parent, selector) => {
      const element = parent.querySelector(selector);
      return element ? element.innerText.trim() : '';
    };

    const cards = [];
    document.querySelectorAll('.c-keto-product-card__body').forEach(cardElement => {
      const title = extractText(cardElement, '.c-keto-product-card__title');
      const subtitle = extractText(cardElement, '.c-keto-product-card__subtitle');

      // Iterate through all driver elements and manually match based on the label's text content.
      const driverElements = cardElement.querySelectorAll('.c-keto-product-card__driver');
      let annualFee = '', interestRates = '', minDeposit = '', maxDeposit = '';
      
      driverElements.forEach((driver) => {
        const label = driver.querySelector('.c-keto-product-card__driver-label').innerText.trim();
        const value = driver.querySelector('.c-keto-product-card__driver-fee').innerText.trim();
        
        if (label === 'Annual Fee') annualFee = value;
        else if (label === 'Interest Rates') interestRates = value;
        else if (label === 'Min. Deposit') minDeposit = value;
        else if (label === 'Maximum Deposit') maxDeposit = value;
      });

      const applyLink = cardElement.querySelector('.c-keto-product-card__cta-button--wrapper a')?.href;

      cards.push({ title, subtitle, annualFee, interestRates, minDeposit, maxDeposit, applyLink });
    });

    return cards;
  });

  console.log(creditCards);
  await browser.close();
})();
