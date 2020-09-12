import * as React from 'react';
import { Dashboard } from '../src/components/dashboard';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../src/context/theme.context';
import { SidebarProvider } from '../src/context/sidebar.context';

export default {
  title: 'Dashboard',
  decorators: [withKnobs, withInfo],
};

export const BasicUsage = () => {
  return (
    <SidebarProvider>
      <ThemeProvider>
        <MemoryRouter>
          <Dashboard
            siderbar={[
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
            ]}
            headerDropDownMenuItems={[
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
            ]}
          > Home Page</Dashboard>
        </MemoryRouter>
      </ThemeProvider>
    </SidebarProvider>
  );
};
