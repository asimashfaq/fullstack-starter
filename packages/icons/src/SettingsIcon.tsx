import React from 'react';
import SettingsIconSvg from './assets/cog.svg';
import { IconProps } from 'types';
export const SettingsIcon: React.FC<IconProps> = React.memo((props) => {
  return <SettingsIconSvg {...props}/>;
});