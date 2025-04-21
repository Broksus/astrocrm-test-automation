import { Page, Locator, expect, test } from '@playwright/test';
import { BasePage } from '@web_ui/pages/BasePage';
import { CRMHeader } from '@web_ui/components/CRMHeader';
import { ROUTES } from '@web_ui/routes';

export class ChatPage extends BasePage {
  url = ROUTES.chat;

  crmHeader: CRMHeader;
  readonly testScriptButton: (buttonText: string) => Locator;

  constructor(page: Page) {
    super(page);

    this.crmHeader = new CRMHeader(page);
    this.testScriptButton = (buttonText: string) => this.page.locator(`button:has-text("${buttonText}")`);
  }

  async clickChatByExpertName(expertName: string, index = 0): Promise<void> {
    await test.step('Click on chat by expert name', async () => {
      await this.page.getByText(expertName).nth(index).click();
    });
  }

  async assertTestScriptButtonVisible(buttonText: string, index = 0): Promise<void> {
    await test.step('Assert test script button is visible', async () => {
      const button = this.testScriptButton(buttonText).nth(index);
      await button.waitFor({ state: 'visible' });
      await expect(button).toBeVisible();
    });
  }

  async clickTestScriptButtonByText(buttonText: string, index = 0): Promise<void> {
    await test.step('Click on test script button by text', async () => {
      await this.testScriptButton(buttonText).nth(index).click();
    });
  }
}
