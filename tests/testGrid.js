import { Builder } from 'selenium-webdriver';

async function testGrid() {
  let driver = await new Builder()
    .usingServer('http://localhost:4444/wd/hub')
    .forBrowser('chrome')
    .build();

  await driver.get('https://www.example.com');
  console.log(await driver.getTitle());

  await driver.quit();
}

testGrid();
