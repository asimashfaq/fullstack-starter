import React from 'react';
import ChartsIconSvg from './assets/chart-pie.svg';
import { IconProps } from 'types';
export const ChartsIcon: React.FC<IconProps> = React.memo(props => {
  return <ChartsIconSvg {...props} />;
});
