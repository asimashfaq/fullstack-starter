import { addons } from '@storybook/addons';

addons.setConfig({
  panelPosition: 'bottom',
  //theme,
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
});
