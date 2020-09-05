import React from 'react';
import '../../style.css';
import * as HIcons from 'react-icons/hi';
import { IconProps } from './types';

export const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  const Icon = HIcons[icon];
  return <Icon {...props} />;
};
