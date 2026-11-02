import { test, expect } from "../fixture/pomFixture"
import data from '../test-data/test-data.json';


test.describe("Playwright CI/CD Implementaion - Page Fixture Example", () => {

  

    test('TC 1 - Form Validation', async ({ page, baseURL,basepg,formDemoPg }) => {

        await page.goto(`${baseURL}`);
        await basepg.clickInputForm();
        await formDemoPg.enterName(data.name);
        await formDemoPg.enterEmail(data.email);
        await formDemoPg.enterPassword(data.password);
        await formDemoPg.enterCompany(data.company);
        await formDemoPg.enterWebsite(data.website);
        await formDemoPg.selectCountry(data.country);
        await formDemoPg.enterCity(data.city);
        await formDemoPg.enterAddress1(data.address1);
        await formDemoPg.enterAddress2(data.address2);
        await formDemoPg.enterState(data.state);
        await formDemoPg.enterZipCode(data.zip);
        await formDemoPg.submitForm();
        const msg = await formDemoPg.getDisplayedMessage();
        // Validates that the success message is displayed correctly
        await expect(msg).toContain('Thanks for contacting us, we will get back to you shortly.');
    })
    test('TC 2 : IFrame Demo ', async ({ page, baseURL, basepg,iframeDemoPg}) => {

        await page.goto(`${baseURL}`);
        await basepg.clickIFrameDemoLink();
        const textData = "Playwright is a modern, open-source automation library developed by Microsoft used for end-to-end testing and web scraping. It allows developers and QA engineers to control a web browser programmatically to simulate real human actions like clicking, typing, navigating pages, and checking layouts."
        const editor = await iframeDemoPg.enterTextInEditor(textData);
        await expect(editor).toBeVisible
        await expect(editor).toHaveText(/Microsoft/);
    })

})