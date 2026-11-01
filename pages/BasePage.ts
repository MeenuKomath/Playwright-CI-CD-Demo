import type { Page, Locator } from '@playwright/test';

export class BasePage {

	readonly page: Page;
	readonly inputFormSubmit: Locator;
	readonly javaScriptAlert: Locator;

	
	//constructor
	constructor(page: Page) {

		this.page = page;
		this.inputFormSubmit = page.getByRole('link', { name: 'Input Form Submit' });
		this.javaScriptAlert = page.getByRole('link', { name: 'Javascript Alerts' });
	}

	async clickInputForm() {

        await this.inputFormSubmit.click();
	}
	async clickjavaScriptAlertLink() {

		await this.javaScriptAlert.click();
	}
}