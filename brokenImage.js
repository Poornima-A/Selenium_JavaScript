const { Builder, By } = require('selenium-webdriver');
const axios = require('axios');

(async function validateBrokenLinksImages() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        // Step 1: Open the target page
        await driver.get('https://www.tutorialspoint.com/selenium/practice/broken-links.php');

        console.log("Starting validations...\n");

        // Step 2: Validate the broken image
        const brokenImage = await driver.findElement(By.css('img.broken-img'));
        const imageSrc = await brokenImage.getAttribute('src="images/broken-image.png"');
        console.log(`Image Source URL: ${imageSrc}`);

        try {
            const imageResponse = await axios.get(imageSrc);
            if (imageResponse.status === 200) {
                console.log('Image is valid.');
            } else {
                console.log('Image is broken (Invalid HTTP response).');
            }
        } catch (error) {
            console.log('Image is broken (Request failed).');
        }

        console.log('\n----------------------\n');

        // Step 3: Validate the valid link
        const validLink = await driver.findElement(By.xpath("//a[text()='Click Here for Valid Link']"));
        const validHref = await validLink.getAttribute('href="javascript:void(0)');
        console.log(`Valid Link URL: ${validHref}`);

        if (validHref === 'javascript:void(0);') {
            console.log('Valid link is not navigable (placeholder).');
        } else {
            try {
                const linkResponse = await axios.get(validHref);
                if (linkResponse.status === 200) {
                    console.log('Valid link is working.');
                } else {
                    console.log('Valid link is broken (Invalid HTTP response).');
                }
            } catch (error) {
                console.log('Valid link is broken (Request failed).');
            }
        }

        console.log('\n----------------------\n');

        // Step 4: Validate the broken link
        const brokenLink = await driver.findElement(By.xpath("//a[text()='Click Here for Broken Link']"));
        const brokenHref = await brokenLink.getAttribute('href="broken-link.php"');
        console.log(`Broken Link URL: ${brokenHref}`);

        try {
            const brokenLinkResponse = await axios.get(brokenHref);
            console.log(`Response Status: ${brokenLinkResponse.status}`);
            console.log(`Response URL: ${brokenLinkResponse.request.res.responseUrl}`);

            if (brokenLinkResponse.status === 200) {
                console.log('Broken link is working (unexpected).');
            } else {
                console.log('Broken link is not working as expected.');
            }
        } catch (error) {
            console.log('Broken link is not working as expected (Request failed).');
        }
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    } finally {
        // Step 5: Close the browser
        //await driver.quit();
        console.log('\nValidation completed.');
    }
})();
