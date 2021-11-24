require("dotenv").config();
const URL = process.env.URL;

module.exports = async (browser) => {
    const page = await browser.newPage();
    console.log(`Navigating to ${URL}...`);
    await page.goto(URL);
    await page.waitForSelector(".item-container");

    const results = await page.evaluate(() => {
        const nodelist = document.querySelectorAll(".item-container");
        const list = Array.from(nodelist);
        const items = [];
        for (let i = 0; i < list.length; i++) {
            const item = list[i];
            const [name, priceStr] = item.innerText.split("\n");
            const image = item.querySelector("img").src;
            const price = parseFloat(priceStr.replace(/[$.]/g, ""));
            if (price < 6000) {
                items.push({
                    name,
                    price,
                    image,
                    url: item.querySelector("a").href,
                });
            }
        }
        return items;
    });

    console.log("RESULT:", results);
};
