import React from 'react';
import FormsIconSvg from './assets/forms.svg';
import { IconProps } from './types';
export const FormsIcon: React.SFC<IconProps> = React.memo(props => {
  return <FormsIconSvg {...props} />;
});
