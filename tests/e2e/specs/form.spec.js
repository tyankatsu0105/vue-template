// const devices = require('puppeteer/DeviceDescriptors');
describe('form test', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080/form');
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

  const inputValue = {
    name1: '山田',
    name2: '太郎',
    age: 23,
    email: 'hogehoge@example.com',
    textarea: 'ほげほげふがふが'
  };

  const expectedInputValue = () => {
    page.evaluate(inputValue => {
      document.querySelector('#name1').value = inputValue.name1;
      document.querySelector('#name2').value = inputValue.name2;
      document.querySelector('#age').value = inputValue.age;
      document.querySelector('#email').value = inputValue.email;
      document.querySelector('#textarea').value = inputValue.textarea;
    }, inputValue);
  };

  it('success input', async () => {
    await expectedInputValue();
    await page.click('button');
    let pageUrl = await page.url();
    expect(pageUrl).toMatch('http://localhost:8080/form/confirm');

    await page.click('#submit');
    pageUrl = await page.url();
    expect(pageUrl).toMatch('http://localhost:8080/form/complete');

    await page.click('.button');
    expect(pageUrl).toMatch('http://localhost:8080/');
  });
});
