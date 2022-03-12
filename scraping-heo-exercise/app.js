const puppeteer = require('puppeteer');

const HOME_URL = 'https://www.heo.co.uk';
const URL = 'https://www.heo.co.uk/uk/en/product/STR00425';

async function getProductData(page, url) {
    try {
        await page.goto(url, { waitUntil: 'networkidle2' });

        const data = await page.evaluate(() => {
            // public product data (does not require login)
            const title = document.querySelector('div[class="v-align"] > h1').innerText;
            const category = document.querySelector('div[class="v-align"] > h2').innerText;
            const description = document.querySelector('div[class="v-align"] > p').innerText;

            // private product data (requires login)
            const price = document.querySelector('p.total-price').innerText;
            const stockStatus = document.querySelector('p.ng-scope').innerText;

            return {
                title,
                category,
                description,
                price,
                stockStatus
            }
        });

        return { url, ...data };
    } catch (err) {
        console.error(`Failed getting item. Url: ${url}, ${err}`);
        return err;
    }
};

async function login(page, url, username, password) {
    await page.goto(url, { waitUntil: 'networkidle2' });

    // already logged-in
    let loginText = await page.$eval(('p.log'), data => data.innerText);
    if (loginText === 'Logout') {
        console.log('already logged-in');
        return;
    }

    // perform log-in
    await page.click('div[data-ng-click="showLogin()"]');
    await page.waitForSelector('div.cbox > input');

    // hack: pressing backspace before email/password values are typed
    // see https://github.com/puppeteer/puppeteer/issues/1648#issuecomment-881521529
    await page.click('input[ng-model="user.email"]', {delay: 100});
    await page.keyboard.press('Backspace');
    await page.type('input[ng-model="user.email"]', username, {delay: 50});

    await page.click('input[ng-model="user.password"]', {delay: 100});
    await page.keyboard.press('Backspace');
    await page.type('input[ng-model="user.password"]', password, {delay: 50});

    await page.click('div.cbox > input');
    await page.waitForSelector('p.log');
    await page.waitForTimeout(2000); // just in case :-)

    // verify successful log-in
    loginText = await page.$eval(('p.log'), data => data.innerText);
    if (loginText !== 'Logout') {
        throw new Error('login failed');
    }
}

(async () => {
    if (!process.env.HEO_USERNAME || !process.env.HEO_PASSWORD) {
        console.error('Username/Password not set');
        return;
    }

    console.time('login + get page data');

    const browser = await puppeteer.launch(); // headless browser
    // const browser = await puppeteer.launch({'headless': false}); // or, a headful browser
    const page = await browser.newPage();

    await login(page, HOME_URL, process.env.HEO_USERNAME, process.env.HEO_PASSWORD);

    const data = await getProductData(page, URL);
    console.log(data);

    await browser.close();

    console.timeEnd('login + get page data');
})();
