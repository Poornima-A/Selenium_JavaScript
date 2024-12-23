const { Builder, By, WebElement } = require("selenium-webdriver");
const example = async () => {
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
    await driver.get("https://www.tutorialspoint.com/selenium/practice/radio-button.php");

    //Locate the radio button 
    const radioButton = await driver.findElement(By.css('input[type="radio"][value="igottwo"]'));

    const isSelected = await radioButton.isSelected();
    if(!isSelected){
        await radioButton.click();
    }
}
example();