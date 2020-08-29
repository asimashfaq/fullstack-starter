import * as React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from '../src/context/theme.context';
import { ThemeSwitchButton } from '../src/components/theme-switcher/';

export default {
  title: 'Theme Switcher',
  decorators: [withKnobs, withInfo],
};

export const BasicUsage = () => {
  return (
    <ThemeProvider>
      <ThemeSwitchButton />
    </ThemeProvider>
  );
};
