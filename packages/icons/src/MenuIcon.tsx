import React from 'react';
import MenuIconSvg from './assets/menu.svg';
import { IconProps } from './types';
export const MenuIcon: React.FC<IconProps> = React.memo(props => {
  return <MenuIconSvg {...props} />;
});
