const { Builder, By, until, Actions } = require("selenium-webdriver");
const assert = require("assert");

const example = async () => {
    let driver = new Builder().forBrowser("chrome").build();

    try {
        // Maximize the browser window
        await driver.manage().window().maximize();

        // Navigate to the target URL
        await driver.get("https://www.tutorialspoint.com/selenium/practice/buttons.php");

        // 1. Perform a simple click on the 'Click Me' button
        const clickButton = await driver.findElement(By.css('.btn.btn-primary'));
        await clickButton.click();

        // 2. Wait for the message to appear after the button click
        const clickMessageElement = await driver.wait(
            until.elementLocated(By.id('welcomeDiv')),  // Replace with the actual ID of the element showing the message
            5000  // 5 seconds timeout
        );
        
        // 3. Retrieve the text from the message element
        const clickMessageText = await clickMessageElement.getText();

        // 4. Perform an assertion to check the expected message after click
        assert.strictEqual(clickMessageText, "You have done a dynamic click", "Button click did not display the expected message!");

        console.log("Assertion passed for click message: Message is correct.");

        // 5. Perform a right-click (context menu) on the 'Right Click Me' button
        const rightClickButton = await driver.findElement(By.css('.btn.btn-secondary'));
        await driver.executeScript(
            `var event = new MouseEvent('contextmenu', { bubbles: true, cancelable: true, view: window });
             arguments[0].dispatchEvent(event);`,
            rightClickButton
        );

        // 6. Wait for the right-click message to appear (if any)
        const rightClickMessageElement = await driver.wait(
            until.elementLocated(By.xpath('/html/body/main/div/div/div[2]/button[2]')),  // Replace with the correct ID of the right-click message
            5000  // 5 seconds timeout
        );

        // 7. Retrieve the text from the right-click message element
        const rightClickMessageText = await rightClickMessageElement.getText();

        // 8. Perform an assertion to check the expected message after right-click
        assert.strictEqual(rightClickMessageText, "Right Click Me", "Right-click did not display the expected message!");

        console.log("Assertion passed for right-click message: Message is correct.");

        // 9. Perform a double-click on the 'Double Click Me' button
        const doubleClickButton = await driver.findElement(By.xpath('//button[contains(text(), "Double Click Me")]'));
        let actions = driver.actions();
        await actions.doubleClick(doubleClickButton).perform();

        // 10. Wait for the double-click message to appear (if any)
        const doubleClickMessageElement = await driver.wait(
            until.elementLocated(By.id('doublec')),  // Replace with the correct ID of the double-click message
            5000  // 5 seconds timeout
        );

        // 11. Retrieve the text from the double-click message element
        const doubleClickMessageText = await doubleClickMessageElement.getText();

        // 12. Perform an assertion to check the expected message after double-click
        assert.strictEqual(doubleClickMessageText, "You have Double clicked", "Double-click did not display the expected message!");

        console.log("Assertion passed for double-click message: Message is correct.");

    } catch (err) {
        console.error("An error occurred:", err);
    } finally {
        // Quit the driver
       // await driver.quit();
    }
};

example();
