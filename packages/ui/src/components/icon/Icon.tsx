import React from 'react';
import '../../style.css';
import * as Icons from '@bcdapps/icons';
import { IconProps } from './types';

export const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  const Icon = Icons[icon];
  return <Icon {...props} ></Icon>;
};
