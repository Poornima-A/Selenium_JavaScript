const { Builder, By, until } = require("selenium-webdriver");

const example = async () => {
    //Builder sets URL of a remote webdriver server to use
   let driver = new Builder().forBrowser("chrome").build();
   driver.manage().window().maximize();
   // Navigate to Facebook signup page
   await driver.get("http://facebook.com");

   //Click on the create new account button

   await driver.findElement(By.linkText('Create new account')).click();

   //wait until the sign-up modal appears

   await driver.wait(until.elementLocated(By.name('firstname')),5000);

   //Fill in the sign-up form field
   await driver.findElement(By.name('firstname')).sendKeys('Poornima');
   await driver.findElement(By.name('lastname')).sendKeys('Deepanraj');

   //Select date of birth form dropdowns
   await driver.findElement(By.id('day')).sendKeys('10');
   await driver.findElement(By.id('month')).sendKeys('Jun');
   await driver.findElement(By.id('year')).sendKeys('1996');

   // Email and password fields
   await driver.findElement(By.name('reg_email__')).sendKeys('poornima@gmail.com');
   await driver.findElement(By.name('reg_passwd__')).sendKeys('poornima123');

   //Select gender
   await driver.findElement(By.className('_58mt')).click();

   //Click Signup button
   await driver.findElement(By.name('websubmit')).click();

}
example();