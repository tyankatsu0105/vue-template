// const devices = require('puppeteer/DeviceDescriptors');
describe('title test', () => {
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

  it('title match', async () => {
    await page.click('#app > header > div > nav > ul > li:nth-child(1) > a');
    let pageTitle = await page.title();
    await expect(pageTitle).toMatch('vue-template');

    await page.click('#app > header > div > nav > ul > li:nth-child(2) > a');
    pageTitle = await page.title();
    await expect(pageTitle).toMatch('会社概要 | vue-template');

    await page.click('#app > header > div > nav > ul > li:nth-child(3) > a');
    pageTitle = await page.title();
    await expect(pageTitle).toMatch('お問い合わせ | vue-template');
  });
});
