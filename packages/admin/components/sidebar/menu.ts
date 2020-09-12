import { IMenuItemProps } from '@bcdapps/ui/dist/components/sidebar/types';

export const sideBarItems: IMenuItemProps[] = [
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