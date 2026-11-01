import type { Page, Locator } from '@playwright/test';

export class JavascriptAlertPage {

	readonly page: Page;
	readonly alertClickMe: Locator;
	readonly conformBoxClickMe: Locator;
	readonly promptBoxClickMe: Locator;



	//constructor
	constructor(page: Page) {

		this.page = page;
		this.alertClickMe = page.locator('p:has-text("JavaScript Alerts") + button, button:below(p:has-text("JavaScript Alerts"))').first();
		this.conformBoxClickMe = page.locator('p:has-text("Confirm box:") + button, button:below(p:has-text("Confirm box:"))').first();
		this.promptBoxClickMe = page.locator('p:has-text("Prompt box:") + button, button:below(p:has-text("Prompt box:"))').first();
	}

	async clickAlert() {
		await this.alertClickMe.click();
	}
	async clickConfirm() {
		await this.conformBoxClickMe.click();
	}

	async clickPrompt() {
		await this.promptBoxClickMe.click();
	}

	async handleAlert() {
		
		
			// 1. Set up the listener first
		this.page.once('dialog', async dialog => {
			console.log(`Alert message found: ${dialog.message()}`);
		 console.log("In handle alert")
	
				// Accept (Click OK) or dismiss the alert so the test can continue
				await dialog.accept();
			});

			

	}
	async handleConfirm() {
		await this.page.once('dialog', dialog => {
			console.log(`Dialog message: ${dialog.message()}`);
			dialog.dismiss().catch(() => { });
		});
	}
	async handlePrompt() {
		await this.page.once('dialog', dialog => {
			console.log(`Dialog message: ${dialog.message()}`);
			dialog.dismiss().catch(() => { });
		});

	}
}