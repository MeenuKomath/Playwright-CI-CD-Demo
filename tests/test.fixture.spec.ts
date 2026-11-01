import { test, expect } from "../fixture/pomFixture"
import data from '../test-data/test-data.json';


test.describe("CodingAssignmentforPlaywright-101Exam : Fixture ", () => {

  

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

})