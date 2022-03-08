# scraping_heo_exercise
This simple script was a test for scraping the data of a product on heo.com, using [puppeteer](https://pptr.dev/), a Node.js library for controlling a web browser.

Since some of the product data is visiable only after a successful login, I've implemented a login function as well.

## Usage:
```
npm install
HEO_USERNAME=<your_username> HEO_PASSWORD=<your password> node app.js
```

### Notes:
1. The script runs a headless browser, but it is possible to run a headful browser as well (see the main function).
2. Only some of  the product's data is being scraped as this is was just a POC.
3. The duration of the entire operation is being printed out.
