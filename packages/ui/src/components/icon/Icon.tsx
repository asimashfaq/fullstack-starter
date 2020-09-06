import React from 'react';
import '../../style.css';
import { IconProps, IconList } from './types';

export const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  const _Icon = IconList[icon];
  return <_Icon {...props} />;
};
