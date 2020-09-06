import React from 'react';
import { Sidebar } from '../sidebar';
import { Header } from '../header';
import { IMenuItemProps } from 'components/sidebar/types';
import { IDropdownProps } from 'components/dropdown/types';

export const Dashboard: React.FC = ({ children }) => {
  const menuItems: IMenuItemProps[] = [
    {
      path: '/app/dashboard',
      icon: 'HiOutlineHome',
      name: 'Dashboard',
      exact: true,
    },
    {
      path: '/app/forms',
      icon: 'HiOutlineNewspaper',
      name: 'Forms',
    },
    {
      path: '/app/charts',
      icon: 'HiOutlineChartPie',
      name: 'Charts',
    },
  ];
  return (
    <div className="flex h-screen sm:flex-col-reverse dark:bg-gray-800 relative justify-end">
      <Sidebar menuItems={menuItems} />
      <div className="flex flex-col w-full">
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
        <div className="z-20">{children}</div>
      </div>
    </div>
  );
};
