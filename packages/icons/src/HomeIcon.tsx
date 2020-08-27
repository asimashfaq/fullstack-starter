import React from 'react';
import HomeIconSvg from './assets/icon-home.svg';
import { IconProps } from 'types';
export const HomeIcon: React.FC<IconProps> = React.memo(props => {
  return <HomeIconSvg {...props}/>;
});
