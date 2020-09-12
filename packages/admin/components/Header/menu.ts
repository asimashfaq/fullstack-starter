import { IMenuItemProps } from '@bcdapps/ui/dist/components/sidebar/types';

export const HeaderDropDownMenu: IMenuItemProps[] = [
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
];
