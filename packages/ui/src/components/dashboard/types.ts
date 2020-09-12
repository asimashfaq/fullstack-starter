import { IMenuItemProps } from 'components/sidebar/types';

export interface DashboardProps {
  title?: string;
  footer?: string;
  siderbar: IMenuItemProps[];
  headerDropDownMenuTitle?: string;
  headerDropDownMenuItems: IMenuItemProps[];
}
