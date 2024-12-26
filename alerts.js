const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

(async function alertAutomation() {
    // Initialize WebDriver
    let driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();


    try {
        // Navigate to the practice alerts page
        await driver.get('https://www.tutorialspoint.com/selenium/practice/alerts.php');

        // Handle Simple Alert
        await driver.findElement(By.xpath("//button[text()='Alert']")).click();
        await driver.wait(until.alertIsPresent(),6000);
        let simpleAlert = await driver.switchTo().alert();
        console.log('Simple Alert Text:', await simpleAlert.getText());
        await simpleAlert.accept();

        // Handle Delayed Alert
        await driver.findElement(By.xpath("//button[text()='Click Me'][1]")) .click();
        await driver.wait(until.alertIsPresent(), 6000);
        let delayedAlert = await driver.switchTo().alert();
        console.log('Delayed Alert Text:', await delayedAlert.getText());
        await delayedAlert.accept();

        // Handle Confirmation Alert
        await driver.findElement(By.xpath('/html/body/main/div/div/div[2]/div[3]/button')) .click();
        await driver.wait(until.alertIsPresent(),6000);
        let confirmAlert = await driver.switchTo().alert();
        console.log('Confirm Alert Text:', await confirmAlert.getText());
        await confirmAlert.dismiss();  // Dismiss the alert (Cancel)
        
        // Handle Prompt Alert
        await driver.findElement(By.xpath('/html/body/main/div/div/div[2]/div[4]/button')) .click();
        await driver.wait(until.alertIsPresent());
        let promptAlert = await driver.switchTo().alert();
        console.log('Prompt Alert Text:', await promptAlert.getText());
        await promptAlert.sendKeys('Poornima');
        await promptAlert.accept();  // Accept the prompt

        // Assertion (Optional)
        let result = await driver.findElement(By.id('desk')).getText();
        assert.strictEqual(result, 'You pressed Cancel!');
        console.log('Test Passed!');
        
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the browser
       // await driver.quit();
    }
})();
