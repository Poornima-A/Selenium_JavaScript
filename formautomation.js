const { Builder, By, Key } = require("selenium-webdriver");

(async function automateForm() {
  // Create a new instance of the WebDriver
  let driver = await new Builder().forBrowser("chrome").build();
  driver.manage().window().maximize();

  try {
    // Navigate to the URL of the form
    await driver.get("https://tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    
    const picPath = "C:\\Users\\swetha\\Downloads\\sampleFile.jpeg"; // Set your file path to upload

    // Fill in the form fields
  
    const nameField = await driver.findElement(By.id('name')).sendKeys("Poornima ");
    const emailField = await driver.findElement(By.id('email')).sendKeys("Poornima@gmail.com");
   const genderField =await driver.findElement(By.xpath('/html/body/main/div/div/div[2]/form/div[3]/div/div/div[2]/input')).click(); // Gender - Female

    const mobile =await driver.findElement(By.name("mobile")).sendKeys("6385117917"); // Mobile number
    const dob =await driver.findElement(By.name("dob")).sendKeys("06/02/1996"); // Date of Birth
    const sub =await driver.findElement(By.name("subjects")).sendKeys("Computer Science"); // Subjects

    // Select Hobbies
    const hobby1=await driver.findElement(By.xpath('/html/body/main/div/div/div[2]/form/div[7]/div/div/div[1]/input')).click(); // Sports
    const hobby2 =await driver.findElement(By.xpath('/html/body/main/div/div/div[2]/form/div[7]/div/div/div[3]/input')).click(); // Reading

    // Upload a picture (provide the path to a file on your system)
    const pic=await driver.findElement(By.xpath('/html/body/main/div/div/div[2]/form/div[8]/div/div/input'));
   await pic.sendKeys(picPath); // Picture

    // Enter Current Address
    const address = await driver.findElement(By.xpath('/html/body/main/div/div/div[2]/form/div[9]/div/textarea')).sendKeys("Mahakavi bharathiyar street N.pudhur karaikudi, Tamil Nadu, India");

    // State And city 

    const state = await driver.findElement(By.xpath('/html/body/main/div/div/div[2]/form/div[10]/div/div[1]/select/option[3]')).click();
    const city = await driver.findElement(By.xpath('/html/body/main/div/div/div[2]/form/div[10]/div/div[2]/select/option[3]')).click();
    // const stateField = document.getElementById('State');

    // const index=2;
    // stateField.selectedIndex = index;
    // stateField.dispatchEvent(new Event("change"));
    // console.log(`option at index ${index}'selected: ${stateField.Options[index].text}`);

    const Button = await driver.findElement(By.name('Login'));
        await Button.click();

    console.log("Form submitted successfully!");
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Close the browser
    //await driver.quit();
  }
})();
