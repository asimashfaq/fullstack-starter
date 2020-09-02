import React from 'react';
import SunIconSvg from './assets/icon-sun.svg';
import { IconProps } from './types';
export const SunIcon: React.FC<IconProps> = React.memo(props => {
  return React.createElement(SunIconSvg, { ...props })});