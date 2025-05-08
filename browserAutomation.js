const { chromium, firefox } = require("playwright");

const automation = async (browserType) => {
    const browser = await browserType.launch({ headless: false });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://example.com");

    // Corrected console.log statement
    console.log("The page title on", browserType.name(), "is:", await page.title());

    //await browser.close();
};

// Run automation for both browsers
(async () => {
    await automation(chromium);
    await automation(firefox);
})();
