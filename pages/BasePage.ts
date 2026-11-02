import type { Page, Locator } from '@playwright/test';

export class BasePage {

	readonly page: Page;
	readonly inputFormSubmit: Locator;
	readonly iframeDemo: Locator;

	
	//constructor
	constructor(page: Page) {

		this.page = page;
		this.inputFormSubmit = page.getByRole('link', { name: 'Input Form Submit' });
		this.iframeDemo = page.getByRole('link', { name: 'iFrame Demo' });
	}

	async clickInputForm() {

        await this.inputFormSubmit.click()
	}
	async clickIFrameDemoLink() {

		await this.iframeDemo.click()
		{ waitUntil: 'domcontentloaded' }			;
	}
}