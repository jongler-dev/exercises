# scraping-heo-v2

A package for basic scraping of [Heo](https://www.heo.com) B2B website.
Scraping is done in via a Node.js script with [puppeteer](https://www.npmjs.com/package/puppeteer).

> **Note:**
>
> This repo is the basis of a bigger project, a fully functional scrapper for heo.com.
>
> Please contact me for further details.

## Overview

This is an improved version to [scraping-heo-v1](https://github.com/jongler-dev/exercises/tree/master/scraping-heo-v1), since it uses:

1. a better repo file structure.
2. unit tests, using [Mocha.js](https://www.npmjs.com/package/mocha) test framework and [Chai.js](https://www.npmjs.com/package/chai) assertion library.
3. environment variables support, using [dotenv-safe](https://www.npmjs.com/package/dotenv-safe).
4. the browser's cookies for faster processing time in case running sequential calls, removing the need to re-login every time.
5. [eslint](https://www.npmjs.com/package/eslint) static code analysis.

## Usage

```
npm install
cp .env.sample .env
enter your heo.com credetials to .env.
npm start
```

## Testing

```
npm test
```
