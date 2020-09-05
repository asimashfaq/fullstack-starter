import * as React from 'react';
import { Dropdown } from '../src/components/dropdown';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Dropdown',
  decorators: [withKnobs, withInfo],
};

export const BasicUsage = () => {
  return (
    <MemoryRouter>
      <Dropdown
        placement="bottom-start"
        title="Settings"
        menuItems={[
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
      />
    </MemoryRouter>
  );
};
