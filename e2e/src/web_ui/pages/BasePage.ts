import { Page, Locator, expect, test } from '@playwright/test';
import { BASE_URL } from 'config/config';

export abstract class BasePage {
  url: string = BASE_URL;
  page: Page;

  readonly flashMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.flashMessage = this.page.getByRole('alert');
  }

  async visit(path?: string): Promise<void> {
    await test.step('Navigate to page', async () => {
      const finalUrl = `${BASE_URL}${path || this.url}`;
      await this.page.goto(finalUrl);
      await this.assertOpened();
    });
  }

  async assertOpened(): Promise<void> {
    await test.step('Assert page is opened', async () => {
      await this.page.waitForURL(`${BASE_URL}${this.url}`);
    });
  }

  async assertFlashMessage(message?: string): Promise<void> {
    await test.step('Assert flash message is visible', async () => {
      await expect(this.flashMessage).toBeVisible();
      if (message) {
        await expect(this.flashMessage).toContainText(message);
      }
    });
  }
}
