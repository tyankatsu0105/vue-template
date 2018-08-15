const { toMatchImageSnapshot } = require('jest-image-snapshot');

jest.setTimeout(3000000);
expect.extend({ toMatchImageSnapshot });
module.exports = require('expect-puppeteer');
