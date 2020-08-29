import { Renderer } from '../../types';
import { IconProps } from '../icon/types';

export interface IMenuItemProps extends IconProps {
  path: string;
  name: string;
  exact?: boolean;
}

export interface ISideBarProps {
  title?: string | Renderer;
  menuItems: IMenuItemProps[];
}
