const axios = require('axios');
const cheerio = require('cheerio');

// URL to scrape
const url = 'https://milliondollarjourney.com/best-online-banks-canada.htm';

// Function to scrape the website and extract data
async function scrapeWebsite() {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        
        // Array to store scraped data
        const scrapedData = [];

        // Find all div tags with class "nk-card"
        $('.nk-card').each((index, element) => {
            const bankData = {};
            bankData.bank_name = $(element).find('.nk-card__logo img').attr('alt');
            bankData.review_link = $(element).find('.nk-card__review-link').attr('href');
            bankData.rating = $(element).find('.nk-card__score span').text().trim();
            bankData['1_year_gic_rate'] = $(element).find('.nk-card__text').eq(0).text().trim();
            bankData.interest_rate = $(element).find('.nk-card__text').eq(1).text().trim();
            bankData.promo = $(element).find('.nk-card__promo span').text().trim();
            bankData.visit_link = $(element).find('.nk-card__btn').attr('href');
            bankData.description = $(element).find('.nk-card__description').text().trim();
            scrapedData.push(bankData);
        });

        // Print the scraped data
        console.log(scrapedData);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

// Call the function to initiate scraping
scrapeWebsite();
