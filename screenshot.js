const puppeteer = require('puppeteer');

const url = process.argv[2];

if (!url) {
    throw "Please provide a URL as the first argument."
}

async function run() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        await page.screenshot({
            path: 'screenshot.png'
        });
        browser.close();
    } catch(e) {
        console.log(e);
    }
}

run();