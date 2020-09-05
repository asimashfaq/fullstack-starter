import React from 'react';
import MoonIconSvg from './assets/icon-moon.svg';
import { IconProps } from './types';
export const MoonIcon: React.FC<IconProps> = React.memo(props => {
  return <MoonIconSvg {...props} />;
});
