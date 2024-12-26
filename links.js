const { assert } = require("chai");
const { Builder, By, until, Key } = require("selenium-webdriver");
const example = async () => {
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
    await driver.get("https://www.tutorialspoint.com/selenium/practice/links.php");

    
    // const homelink = document.querySelector("a[href='https://www.tutorialspoint.com/index.htm']");
 
     // Store the current window handle
     let mainWindow = await driver.getAllWindowHandles();

     // Click the link that opens a new window
     let firstlink = await driver.findElement(By.xpath('/html/body/main/div/div/div[2]/p[1]/a')).click();

     // getting all the windows:
     let windowHandles = await driver.getAllWindowHandles();
     console.log('Window handle:',windowHandles);

     //Switching to first to second window
     await driver.switchTo().window(windowHandles[1]);
     console.log('Switched to second window');

     //Performing actions in the second window

    let search = await driver.wait(until.elementLocated(By.id('search-strings')),3000);
    await search.sendKeys('Javascript questions',Key.ENTER);
    console.log('Performing actions')

    //Switch back to first window
    await driver.switchTo().window(windowHandles[0]);


    const createdlink = await driver.findElement(By.id('created'));
    await createdlink.click();

      // 2. Wait for the message to appear after the button click
      const createdlinkelement = await driver.wait(
        until.elementLocated(By.className('create')),5000
    );

    const createdlinkText = await createdlinkelement.getText();
    
    assert.strictEqual(createdlinkText, "Link has responded with staus 201 and status text Created", "Not display the expected message!");
    
    console.log("Assertion passed for createdlink message: Message is correct.");
    

         }
    
example();