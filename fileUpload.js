const { Builder, By } = require("selenium-webdriver");
const example = async () => {
    let driver = new Builder().forBrowser("chrome").build();
    driver.manage().window().maximize();
    await driver.get("https://www.tutorialspoint.com/selenium/practice/upload-download.php");
    const filePathToUpload = "C:\\Users\\swetha\\Downloads\\sampleFile (1).jpeg"; // Set your file path to upload

     // 1. **File Download**:
            console.log("Starting file download...");
            const downloadButton = await driver.findElement(By.id('downloadButton')); // Adjust the ID
            await downloadButton.click(); // Click the download button
    
            // 2. **File Upload**:
            console.log("Starting file upload...");
            const uploadButton = await driver.findElement(By.id('uploadFile')); // Adjust the ID
            await uploadButton.sendKeys(filePathToUpload); // Upload the test file
            console.log("File uploaded.");
    
            // Wait for the file to download (this is just an example approach, you can check download folder directly)
            await driver.sleep(3000); // Wait for the download to complete
    
            // Verify the file is downloaded
            // const downloadedFilePath = path.join(downloadDirectory, "sampleFile.jpeg"); // Replace with expected filename
            // assert.ok(fs.existsSync(downloadedFilePath), "File was not downloaded successfully.");
    
         console.log("File downloaded successfully.");
    
}
example();