const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");
const example = async () => {
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
    await driver.get("https://www.tutorialspoint.com/selenium/practice/text-box.php");
// Assert page title
    let title=await driver.getTitle();
       assert.strictEqual(title,'Selenium Practice - Text Box','Page title mismatch!');
 //Assert the presence full name ,email,current address  and password  fields
 let nameField = await driver.findElement(By.name("fullname")); 
 assert.ok(await nameField.isDisplayed(),'Name field is not displayed!');
 let emailField = await driver.findElement(By.name("email")); 
 assert.ok(await emailField.isDisplayed(),'Email field is not displayed!');
 let addressField = await driver.findElement(By.name("address")); 
 assert.ok(await addressField.isDisplayed(),'Address field is not displayed!');
 let passwordField = await driver.findElement(By.name("password")); 
 assert.ok(await passwordField.isDisplayed(),'Password field is not displayed!');

 await nameField.sendKeys("Poornima");
 await emailField.sendKeys("poornima.arumugam@techstargroup.com");
 await addressField.sendKeys("No:12,Mahakavi bharathiyar street Karaikudi");
 await passwordField.sendKeys("poornima@26");

//Assert the login button is enabled 
let submitButton = await driver.findElement(By.className("btn btn-primary"));
assert.ok(await submitButton.isEnabled(),'Submit button is not enabled!');
await submitButton.click();
};
example();