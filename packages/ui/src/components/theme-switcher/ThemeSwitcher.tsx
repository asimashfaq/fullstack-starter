import React, { useContext } from 'react';
import { ButtonProps } from '../button/types';
import { ThemeContext } from '../../context/theme.context';
import { Icon } from '../icon';
import { Button } from '../button';

export const ThemeSwitchButton: React.FC<ButtonProps> = ({
  children,
  ...props
}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button
      {...props}
      onClick={toggleTheme}
      label=""
      icon={theme === 'dark' ? 'HiOutlineSun' : 'HiOutlineMoon'}
      className="p-2 border-2 rounded-md border-gray-600"
    />
    
  );
};
