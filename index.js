const openBrowser = require("./browser");
const scraperController = require("./controllers/pageController");

const browserInstance = openBrowser();

scraperController(browserInstance);
