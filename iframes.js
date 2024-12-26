const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

(async function frameAutomation() {
    // Initialize WebDriver
    let driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();


    try {
        // Navigate to the practice frames page
        await driver.get('https://www.tutorialspoint.com/selenium/practice/frames.php');

        // Switch to Iframe 1 and perform actions
        await driver.switchTo().frame(0);  // Switch by index (0 for first iframe)
        let iframe1Text = await driver.findElement(By.tagName('h1'),6000).getText();
        console.log('Iframe 1 Text:', iframe1Text);

        // Switch back to main content
        await driver.switchTo().defaultContent();

        // Switch to Iframe 2 and perform actions
        await driver.switchTo().frame(1);  // Switch by index (1 for second iframe)
        let iframe2Text = await driver.findElement(By.tagName('h1'),6000).getText();
        console.log('Iframe 2 Text:', iframe2Text);

        // Switch back to main content
        await driver.switchTo().defaultContent();

        // Assertion (Optional)
        assert.strictEqual(iframe1Text.includes('Automation Practice Form'), true);
        assert.strictEqual(iframe2Text.includes('Selenium'), true);
        console.log('Iframe Test Passed!');

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the browser
        //await driver.quit();
    }
})();
