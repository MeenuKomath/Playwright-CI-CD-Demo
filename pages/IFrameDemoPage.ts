import type { Page, Locator } from '@playwright/test';

export class IFrameDemoPage {

	readonly page: Page;
	readonly editor: Locator;
	

	//constructor
	constructor(page: Page) {

		this.page = page;
		this.editor = page
			.frameLocator('iframe')
			.first()
			.locator('[contenteditable="true"]')
			.first();

	}
	
	async enterTextInEditor(textData: string) {
		
		await this.editor.fill(textData);
		console.log('Text entered in editor:', await this.editor.innerText());
		return await this.editor;

	}
}