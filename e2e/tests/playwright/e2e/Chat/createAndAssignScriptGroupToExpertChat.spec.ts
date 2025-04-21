import { test } from '@playwright/test';
import { TEST_USER } from '@common/testData/testUser';
import { SignInPage } from '@web_ui/pages/Auth/SignInPage';
import { ChatPage } from '@web_ui/pages/Chat/ChatPage';
import { SettingsPage } from '@web_ui/pages/Settings/SettingsPage';
import { SettingsTabType } from '@typedefs/settingsTabs';
import { TEST_SCRIPT } from '@common/constants/testScript';

test.describe('Chat', () => {
  let signInPage: SignInPage;
  let settingsPage: SettingsPage;
  let chatPage: ChatPage;

  const{ email, password, userName, workName } = TEST_USER;
  const { group, script, createdSuccessfully } = TEST_SCRIPT;

  test.beforeEach(async ({ page }) => {
    signInPage = new SignInPage(page);
    settingsPage = new SettingsPage(page, SettingsTabType.QuickMessages);
    chatPage = new ChatPage(page);
  });

  test('should create and assign script group to expert chat', async () => {
    await signInPage.visit();
    await signInPage.login(email, password);

    await chatPage.assertOpened();

    await chatPage.crmHeader.verifyExpertName(userName);
    await chatPage.crmHeader.clickDropdownButton();
    await chatPage.crmHeader.clickSettingsButton();

    await settingsPage.assertOpened();
    await settingsPage.clickAddGroupButton();
    await settingsPage.fillGroupName(group);
    await settingsPage.fillMessage(script);
    await settingsPage.clickSaveButton();
    await settingsPage.assertFlashMessage(createdSuccessfully);

    await chatPage.visit();
    await chatPage.clickChatByExpertName(workName);
    await chatPage.assertTestScriptButtonVisible(group);
  });
});
