const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

const example = async () => {
    let driver = new Builder().forBrowser("chrome").build();

    try {
        // Maximize the browser window
        await driver.manage().window().maximize();

        // Navigate to the target URL
        await driver.get("https://www.tutorialspoint.com/selenium/practice/buttons.php");

        // Find and click the button with class 'btn btn-primary'
        const primaryButton = await driver.findElement(By.css('.btn.btn-primary'));
        await primaryButton.click();

        // Assert that the primary button was clicked successfully
        const primaryButtonText = await primaryButton.getAttribute('innerText');
        assert.strictEqual(primaryButtonText, "Click Me", "Primary button text mismatch");
        assert.strictEqual(alertText, "You have done a dynamic click", "Alert text mismatch");
        
        // Right-click (context click) on the button with class 'btn btn-secondary'
        const secondaryButton = await driver.findElement(By.css('.btn.btn-secondary'));
        await driver.executeScript(
            `var event = new MouseEvent('contextmenu', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            arguments[0].dispatchEvent(event);`,
            secondaryButton
        );

        // Wait for a specific condition if needed (example: an alert appears)
        await driver.wait(until.alertIsPresent(), 5000);

        // Assert that an alert is present
        const alert = await driver.switchTo().alert();
        const alertText = await alert.getText();
        assert.strictEqual(alertText, "You right-clicked on a button", "Alert text mismatch");

        // Accept the alert
        await alert.accept();

    } catch (err) {
        console.error("An error occurred:", err);
    } finally {
        // Quit the driver
        //await driver.quit();
    }
};

example();
