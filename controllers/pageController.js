const scrapper = require("../scrapers/pageScrapper");

const scraperPage = async (browserInstance) => {
    try {
        const browser = await browserInstance;
        await scrapper(browser);
    } catch (err) {
        console.log("Could not resolve the browser instance => ", err);
    }
};

module.exports = (browserInstance) => scraperPage(browserInstance);
