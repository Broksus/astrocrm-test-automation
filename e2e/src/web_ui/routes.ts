import { SettingsTabType } from '@typedefs/settingsTabs';

export const ROUTES = {
  login: '/login',
  chat: '/chat',
  settings: {
  index: '/settings',
  [SettingsTabType.QuickMessages]: '/settings/quick-messages',
  [SettingsTabType.PersonalInfo]: '/settings/personal',
  [SettingsTabType.AudioCall]: '/settings/audio-calls',
  },
};
