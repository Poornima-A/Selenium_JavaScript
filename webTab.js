const { Builder, By, until, Key } = require("selenium-webdriver");
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
    await driver.findElement(By.linkText('Web Tables')).click();
    let addButton = await driver.findElement(By.className('btn btn-primary'));
   await addButton.click();

    // Store the current window handle
      let mainWindow = await driver.getAllWindowHandles();
 
      // Click the link that opens a new window
      let firstlink = await driver.findElement(By.xpath('/html/body/main/div/div/div[3]/div/div')).click();
 
      // getting all the windows:
      let windowHandles = await driver.getAllWindowHandles();
      console.log('Window handle:',windowHandles);
 
      //Switching to first to second window
      await driver.switchTo().window(windowHandles[1]);
      console.log('Switched to second window');
 
      //Performing actions in the second window
 
    //  let search = await driver.wait(until.elementLocated(By.id('search-strings')),3000);
    //  await search.sendKeys('Javascript questions',Key.ENTER);
    //  console.log('Performing actions')

    const firstnameField = await driver.wait(until.elementLocated(By.id('firstname')),3000);
    await firstnameField.sendKeys('Poornima ',Key.ENTER);
    const LastnameField = await driver.findElement(By.id('lastname')).sendKeys("Deepanraj ");
    const emailField = await driver.findElement(By.id('email')).sendKeys("Poornima@gmail.com");

 
     //Switch back to first window
     await driver.switchTo().window(windowHandles[0]);
 


// let table = await driver.findElement(By.className("table table-striped mt-3"));
// let rows = await table.findElements(By.tagName('tr'));
// for(let i=0;i<rows.length;i++){
//     let row = rows[i];

// let columns = await row.findElements(By.tagName('td'));
// console.log(`Row ${i+1} data:`);

// for(j=0;j< columns.length;j++){
//     let cell = columns[j];

//     let cellText = await cell.getText();
//     console.log( ` column ${j+1}: ${cellText}`);
// }
//}
}
example();