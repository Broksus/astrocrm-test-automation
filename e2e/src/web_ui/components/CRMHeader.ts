import { Page, expect, Locator, test } from '@playwright/test';
import { BaseComponent } from '@web_ui/components/BaseComponent';

export class CRMHeader extends BaseComponent {

  readonly dropdownButton: Locator;
  readonly settingsButton: Locator;

  constructor(page: Page) {
    super(page);
    this.dropdownButton = this.page.getByTestId('KeyboardArrowDownIcon');
    this.settingsButton = this.page.locator('a:has-text("Settings")');
  }

  async verifyExpertName(expectedName: string): Promise<void> {
    await test.step('Verify expert name is visible', async () => {
      await expect(this.page.getByText(expectedName)).toBeVisible();
    });
  }

  async clickDropdownButton(): Promise<void> {
    await test.step('Click on dropdown button', async () => {
      await this.dropdownButton.click();
    });
  }

  async clickSettingsButton(): Promise<void> {
    await test.step('Click on settings button', async () => {
      await this.settingsButton.click();
    });
  }
}
