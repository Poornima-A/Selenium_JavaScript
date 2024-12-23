const { Builder, By } = require("selenium-webdriver");
const example = async () => {
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
    await driver.get("https://www.tutorialspoint.com/selenium/practice/check-box.php");
 
    //Locate the 2 checkboxes
    const checkbox1 = await driver.findElement(By.id('c_bs_1'));
    const checkbox2 = await driver.findElement(By.id('c_bs_2'));

    //Choose only the first checkbox

   // const isSelected1 = await checkbox1.isSelected();
    //const isSelected2 = await checkbox2.isSelected();

    //Ensure only the first checkbox
    await checkbox1.click();
    if(await checkbox2.isSelected())
    {
        await checkbox2.click();//Deselected the 2nd checkbox
    }
}
example();