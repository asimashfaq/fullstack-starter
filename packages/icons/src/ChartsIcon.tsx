import React from 'react';
import ChartsIconSvg from './assets/chart-pie.svg';
import { IconProps } from './types';
export const ChartsIcon: React.SFC<IconProps> = React.memo(props => {
  return React.createElement(ChartsIconSvg, { ...props });
});
