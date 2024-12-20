const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
const example = async () => {
    //Builder sets URL of a remote webdriver server to use
   let driver = new Builder().forBrowser("chrome").build();
   driver.manage().window().maximize();
   await driver.get("http://facebook.com");

   //Assert page title
   let title=await driver.getTitle();
   assert.strictEqual(title,'Facebook – log in or sign up','Page title mismatch!');

   //Assert the presence of email and password fields
   let emailField = await driver.findElement(By.id('email'));
   let passwordField = await driver.findElement(By.id('pass'));
   assert.ok(await emailField.isDisplayed(),'Email field is not displayed!');
   assert.ok(await passwordField.isDisplayed(),'Password field is not displayed!');

   //Assert the login button is enabled 
   let loginButton = await driver.findElement(By.name('login'));
   assert.ok(await loginButton.isEnabled(),'Login button is not enabled!');

   //Perform login with invalid email and password
   await emailField.sendKeys("poornima.arumugam@techstargroup.com");
   await passwordField.sendKeys("poornima@26");
   await loginButton.click();

   //wait for the error message and assert it

//let errorMsg = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(),'The email address you entered isn't connected to an account.')]")),5000);
let errorMsg = await driver.wait(until.elementLocated(By.className("_9ay7")),5000);
assert.ok(await errorMsg.isDisplayed(),'Error message is not displayed for invalid login!');
await driver.quit();
};
example();
