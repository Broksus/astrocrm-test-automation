import { Locator, Page, test } from '@playwright/test';
import { BasePage } from '@web_ui/pages/BasePage';
import { ROUTES } from '@web_ui/routes';

export class SignInPage extends BasePage {
  url = ROUTES.login;

  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailField = this.page.locator('input[name="email"]');
    this.passwordField = this.page.locator('input[name="password"]');
    this.submitButton = this.page.locator('button[type="submit"]');
  }

  async enterEmail(email: string): Promise<void> {
    await test.step('Enter email address', async () => {
      await this.emailField.fill(email);
    });
  }

  async enterPassword(password: string): Promise<void> {
    await test.step('Enter password', async () => {
      await this.passwordField.fill(password);
    });
  }

  async clickSubmitButton(): Promise<void> {
    await test.step('Click submit button', async () => {
      await this.submitButton.click();
    });
  }

  async login(email: string, password: string): Promise<void> {
    await test.step('Perform login', async () => {
      await this.enterEmail(email);
      await this.enterPassword(password);
      await this.clickSubmitButton();
    });
  }
}
