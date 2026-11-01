import { test as baseTest } from "@playwright/test";
import { BasePage } from '../pages/BasePage';
import { FormdemoPage } from '../pages/FormdemoPage';


type pages = {

    basepg : BasePage;
    formDemoPg: FormdemoPage;
}


const testPages = baseTest.extend<pages>({

    basepg: async ({ page }, use) => {
        await use(new BasePage(page));
    },

   
    formDemoPg: async ({ page }, use) => {
        await use(new FormdemoPage(page));
    },

})

export const test = testPages;

export const expect = testPages.expect;