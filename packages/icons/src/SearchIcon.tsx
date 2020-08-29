import React from 'react';
import SearchIconSvg from './assets/search.svg';
import { IconProps } from 'types';
export const SearchIcon: React.FC<IconProps> = React.memo((props) => {
  return <SearchIconSvg {...props}/>;
});
