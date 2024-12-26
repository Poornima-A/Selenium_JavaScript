const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function changeButtonColor() {
    // Setup the Chrome WebDriver
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();
    driver.manage().window().maximize();
    try {
        // Navigate to the web page
        await driver.get('https://www.tutorialspoint.com/selenium/practice/dynamic-prop.php'); 

        // Find the button element by its ID
        let button = await driver.findElement(By.id('colorChange')); 
        
        // Execute JavaScript to change button color when clicked
        await driver.executeScript(`
            var button = arguments[0];
            button.addEventListener("click", function() {
                this.style.backgroundColor = 'red';  // Change to the desired color
            });
        `, button);

        // Optionally, click the button to trigger the color change
        await button.click();

        // Wait to see the result (e.g., 5 seconds)
        await driver.sleep(5000);
    } finally {
        // Close the browser after the test
        //await driver.quit();
    }
})();
