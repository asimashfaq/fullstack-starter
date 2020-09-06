import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Header } from '../src/components/header';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../src/context/theme.context';
import { IDropdownProps } from '../src/components/dropdown/types';
import { SidebarProvider } from '../src/context/sidebar.context';

export default {
  title: 'Header',
  decorators: [withKnobs, withInfo],
};

export const BasicUsage = () => {
  return (
    <SidebarProvider>
      <ThemeProvider>
        <MemoryRouter>
          <Header
            rightDropdown={
              {
                title: 'Settings',
                menuItems: [
                  {
                    icon: 'HiOutlineUser',
                    name: 'Profile',
                    path: '/me',
                  },
                  {
                    icon: 'HiOutlineCog',
                    name: 'Settings',
                    path: '/settings',
                  },
                  {
                    icon: 'HiOutlineLogout',
                    name: 'Logout',
                    path: '/logout',
                  },
                ],
              } as IDropdownProps
            }
          />
        </MemoryRouter>
      </ThemeProvider>
    </SidebarProvider>
  );
};

export const WithNoMenu = () => {
  return (
    <SidebarProvider>
      <ThemeProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ThemeProvider>
    </SidebarProvider>
  );
};
