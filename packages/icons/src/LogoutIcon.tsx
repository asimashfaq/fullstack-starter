import React from 'react';
import LogoutIconSvg from './assets/logout.svg';
import { IconProps } from './types';
export const LogoutIcon: React.FC<IconProps> = React.memo(props => {
  return <LogoutIconSvg {...props} />;
});
