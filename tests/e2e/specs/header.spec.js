// const devices = require('puppeteer/DeviceDescriptors');
describe('header test', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080/');
    const pcSetting = {
      userAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
      viewport: {
        width: 1200,
        height: 820
      }
    };
    await page.emulate(pcSetting);

    // const deviceSetting = devices['iPhone 6'];
    // await page.emulate(deviceSetting);
  });

  it('navigation click', async () => {
    await page.click('#app > header > div > nav > ul > li:nth-child(1) > a');

    await page.click('#app > header > div > nav > ul > li:nth-child(2) > a');

    await page.click('#app > header > div > nav > ul > li:nth-child(3) > a');
  });
});
