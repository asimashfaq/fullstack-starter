import * as React from 'react';
import { Sidebar } from '../src/components/sidebar';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { MemoryRouter } from 'react-router-dom';
import { SidebarProvider } from '../src/context/sidebar.context';
import { IMenuItemProps } from '../src/components/sidebar/types';
import { iconLists } from './data/icons';

export default {
  title: 'Sidebar',
  decorators: [withKnobs, withInfo],
};

const routes: IMenuItemProps[] = [
  {
    path: '/app/dashboard',
    icon: 'HomeIcon',
    name: 'Dashboard',
    exact: true,
  },
  {
    path: '/app/forms',
    icon: 'FormsIcon',
    name: 'Forms',
  },
  {
    path: '/app/charts',
    icon: 'ChartsIcon',
    name: 'Charts',
  },
];
export const BasicUsage = () => {
  const label = text('Label', 'SideBar Title');
  return (
    <MemoryRouter>
      <Sidebar title={label} menuItems={routes as IMenuItemProps[]} />
    </MemoryRouter>
  );
};

export const CustomTitleUsage = () => {
  const label = text('Label', 'Logo');

  return (
    <MemoryRouter>
      <Sidebar
        title={{ render: () => <h3>{label}</h3> }}
        menuItems={routes as IMenuItemProps[]}
      />
    </MemoryRouter>
  );
};

export const Knobs = () => {
  const label = text('Label', 'Custom Knobs');

  return (
    <SidebarProvider>
      <MemoryRouter>
        <Sidebar
          title={label}
          menuItems={[
            {
              icon: select('Icon-1', iconLists, 'HomeIcon'),
              name: text('Label-1', 'Dashboard'),
              path: './',
            },
            {
              icon: select('Icon-2', iconLists, 'FormsIcon'),
              name: text('Label-2', 'Forms'),
              path: './',
            },
            {
              icon: select('Icon-3', iconLists, 'ChartsIcon'),
              name: text('Label-3', 'Charts'),
              path: './',
            },
          ]}
        />
      </MemoryRouter>
    </SidebarProvider>
  );
};
