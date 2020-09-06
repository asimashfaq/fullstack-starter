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
      className="p-2 border-2 rounded-md border-gray-600"
    >
      {theme === 'dark' ? (
        <Icon icon="HiOutlineSun" className="text-white" aria-hidden="true" />
      ) : (
        <Icon icon="HiOutlineMoon" className="text-dark" aria-hidden="true" />
      )}
    </Button>
  );
};
