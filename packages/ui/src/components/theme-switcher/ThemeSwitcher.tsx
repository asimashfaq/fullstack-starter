import React, { useContext } from 'react';
import { ButtonProps } from '../button/types';
import { ThemeContext } from '../../context/theme.context';
import { Icon } from '../icon';
import {  StandardButton } from '../button';

export const ThemeSwitchButton: React.FC<ButtonProps> = ({
  children,
  ...props
}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <StandardButton
      {...props}
      onClick={toggleTheme}
      label=""
      className="p-2 border-2 rounded-md border-gray-600"
    >
      <Icon icon={theme === 'dark' ? 'HiOutlineSun' : 'HiOutlineMoon'}/>
    </StandardButton>
    
  );
};
