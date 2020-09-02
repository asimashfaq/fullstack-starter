import React from 'react';
import ProfileIconSvg from './assets/user.svg';
import { IconProps } from './types';
export const ProfileIcon: React.FC<IconProps> = React.memo(props => {
  return React.createElement(ProfileIcon, { ...props })});