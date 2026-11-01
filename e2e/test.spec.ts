import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { FormdemoPage } from '../pages/FormdemoPage';
import { JavascriptAlertPage } from '../pages/JavascriptAlertPage';
import data from '../test-data/test-data.json';


test.describe("CI/CD Integration using GitHub Actions in Playwright", () => {

    
    test('TC 1 :Form Submission ', async ({ page, baseURL }) => {

        const basePg = new BasePage(page);
        const formdemoPg = new FormdemoPage(page);
        await page.goto(`${baseURL}`);
        await basePg.clickInputForm();
        await formdemoPg.enterName(data.name);
        await formdemoPg.enterEmail(data.email);
        await formdemoPg.enterPassword(data.password);
        await formdemoPg.enterCompany(data.company);
        await formdemoPg.enterWebsite(data.website);
        await formdemoPg.selectCountry(data.country);
        await formdemoPg.enterCity(data.city);
        await formdemoPg.enterAddress1(data.address1);
        await formdemoPg.enterAddress2(data.address2);
        await formdemoPg.enterState(data.state);
        await formdemoPg.enterZipCode(data.zip);
        await formdemoPg.submitForm();
        const msg = await formdemoPg.getDisplayedMessage();
        // Validates that the success message is displayed correctly
        await expect(msg).toContain('Thanks for contacting us, we will get back to you shortly.');
    })

    test('TC 2 :Java Script Alerts ', async ({ page, baseURL }) => {

        const basePg = new BasePage(page);
        const javascriptAlertPg = new JavascriptAlertPage(page);
        await page.goto(`${baseURL}`);
        await basePg.clickjavaScriptAlertLink();
        //await javascriptAlertPg.handleAlert();
        //await javascriptAlertPg.clickAlert();





    })

    
})