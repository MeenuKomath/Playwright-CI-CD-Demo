import type { Page, Locator } from '@playwright/test';

export class FormdemoPage {

	readonly page: Page;
	readonly name: Locator;
	readonly email: Locator;
	readonly password: Locator;
	readonly company: Locator;
	readonly website: Locator;
	readonly country: Locator;
	readonly city: Locator;
	readonly address1: Locator;
	readonly address2: Locator;
	readonly state: Locator;
	readonly zipCode: Locator;
	readonly submit: Locator;
	readonly message: Locator;
	
	
	//constructor
	constructor(page: Page) {


		this.page = page;
		this.name = page.getByRole('textbox', { name: 'Name', exact: true });
		this.email = page.getByRole('textbox', { name: 'Email*', exact: true });
		this.password = page.getByRole('textbox', { name: 'Password*', exact: true });
		this.company = page.getByRole('textbox', { name: 'Company', exact: true });
		this.website = page.getByRole('textbox', { name: 'Website', exact: true });
		this.country = page.getByRole('combobox');
		this.city = page.getByPlaceholder('City');
		this.address1 = page.getByPlaceholder('Address 1');
		this.address2 = page.getByPlaceholder('Address 2');
		this.state = page.getByPlaceholder('State');
		this.zipCode = page.getByPlaceholder('Zip code');
		this.submit = page.getByRole('button', { name: 'Submit' });
		this.message = page.getByRole('main');
	
	}


	async enterName(name :string) {

		await this.name.fill(name);
	}
	async enterEmail(email: string) {

		await this.email.fill(email);
	}
	async enterPassword(password: string) {

		await this.password.fill(password);
	}
	async enterCompany(company: string) {

		await this.company.fill(company);
	}
	async enterWebsite(website: string) {

		await this.website.fill(website);
	}
	async enterCity(city: string) {

		await this.city.fill(city);
	}
	async selectCountry(country: string) {

		await this.country.selectOption(country);
	}
	async enterAddress1(address1: string) {

		await this.address1.fill(address1);
	}

	async enterAddress2(address2: string) {

		await this.address2.fill(address2);
	}

	async enterState(state: string) {

		await this.state.fill(state);
	}
	async enterZipCode(zip: string) {

		await this.zipCode.fill(zip);
	}
	async submitForm() {

        await this.submit.click();

	}
	async getDisplayedMessage() {

		await this.message.waitFor({ state: 'visible' });
		return await this.message.textContent();
	}
	

}
