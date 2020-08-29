import React from 'react';
import PageIconSvg from './assets/template.svg';
import { IconProps } from 'types';
export const PageIcon: React.FC<IconProps> = React.memo((props) => {
  return <PageIconSvg {...props}/>;
});