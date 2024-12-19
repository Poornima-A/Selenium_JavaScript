const { Builder, until, By} = require("selenium-webdriver");
const example = async () => {
    //Builder sets URL of a remote webdriver server to use
   let driver = new Builder().forBrowser("chrome").build();
   driver.manage().window().maximize();
   await driver.get("http://facebook.com");
   await driver.wait(until.elementLocated(By.xpath("//*[@id='email']")),3000)
   .sendKeys("poornimaarumugam@techstargroup.com");
   await driver.sleep(3000);
   await driver.wait(until.elementLocated(By.xpath("//*[@id='pass']")),1000)
   .sendKeys("Poornima@26");
   await driver.sleep(3000);
   //await driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div[1]/div[1]/div/div[2]/div[2]/form/div/div[3]/button")),1000).click();
   await driver.wait(until.elementLocated(By.name("login")),3000).click();
};
example();
