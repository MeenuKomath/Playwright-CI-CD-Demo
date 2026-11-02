import { test as baseTest } from "@playwright/test";
import { BasePage } from '../pages/BasePage';
import { FormdemoPage } from '../pages/FormdemoPage';
import { IFrameDemoPage } from '../pages/IFrameDemoPage';


type pages = {

    basepg: BasePage;
    formDemoPg: FormdemoPage;
    iframeDemoPg: IFrameDemoPage;
}


const testPages = baseTest.extend<pages>({

    basepg: async ({ page }, use) => {
        await use(new BasePage(page));
    },

   
    formDemoPg: async ({ page }, use) => {
        await use(new FormdemoPage(page));
    },

    iframeDemoPg: async ({ page }, use) => {
        await use(new IFrameDemoPage(page));
    }

})

export const test = testPages;

export const expect = testPages.expect;