import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Header } from '../src/components/header';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../src/context/theme.context';
import { IDropdownProps } from '../src/components/dropdown/types';
import { IconProps } from '../src/components/icon/types';

export default {
  title: 'Header',
  decorators: [withKnobs, withInfo],
};

export const BasicUsage = () => {
  return (
    <ThemeProvider>
      <MemoryRouter>
        <Header
          rightDropdown={
            {
              title: 'Settings',
              menuItems: [
                {
                  icon: 'ProfileIcon',
                  name: 'Profile',
                  path: '/me',
                },
                {
                  icon: 'SettingsIcon',
                  name: 'Settings',
                  path: '/settings',
                },
                {
                  icon: 'LogoutIcon',
                  name: 'Logout',
                  path: '/logout',
                }
              ],
            } as IDropdownProps
          }
        />
      </MemoryRouter>
    </ThemeProvider>
  );
};

export const WithNoMenu = () => {
  return (
    <ThemeProvider>
      <MemoryRouter>
        <Header/>
      </MemoryRouter>
    </ThemeProvider>
  );
};
