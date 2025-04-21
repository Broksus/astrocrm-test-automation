import { Page, Locator, test } from '@playwright/test';
import { BasePage } from '@web_ui/pages/BasePage';
import { CRMHeader } from '@web_ui/components/CRMHeader';
import { ROUTES } from '@web_ui/routes';
import { SettingsTabType } from '@typedefs/settingsTabs';

export class SettingsPage extends BasePage {
  url: string;

  readonly crmHeader: CRMHeader;
  readonly addGroupButton: Locator;
  readonly groupNameInput: Locator;
  readonly messageTextarea: Locator;
  readonly saveButton: Locator;

  constructor(page: Page, settingsTab: SettingsTabType = SettingsTabType.QuickMessages) {
    super(page);

    this.url = ROUTES.settings[settingsTab];

    this.crmHeader = new CRMHeader(page);
    this.addGroupButton = this.page.getByTestId('AddIcon');
    this.saveButton = this.page.getByRole('button').getByText('Save');
    this.messageTextarea = this.page.locator('textarea[name="messages.0.message"]');
    this.groupNameInput = this.page.locator('input[name="title"]');
  }

  async clickAddGroupButton(): Promise<void> {
    await test.step('Click on Add Group Button', async () => {
      await this.addGroupButton.click();
    });
  }

  async fillGroupName(groupName: string): Promise<void> {
    await test.step('Fill in Group Name', async () => {
      await this.groupNameInput.fill(groupName);
    });
  }

  async fillMessage(message: string): Promise<void> {
    await test.step('Fill in Message', async () => {
      await this.messageTextarea.fill(message);
    });
  }

  async clickSaveButton(): Promise<void> {
    await test.step('Click on Save Button', async () => {
      await this.saveButton.click();
    });
  }
}
