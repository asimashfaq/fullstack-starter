import React, { useContext } from 'react';
import { ButtonProps } from '../button/types';
import { ThemeContext } from '../../context/theme.context';
import { Icon } from '../icon';

export const ThemeSwitchButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      {...props}
      onClick={toggleTheme}
      className="p-2 border-2 rounded-md border-gray-600"
    >
      {theme === 'dark' ? (
        <Icon icon="SunIcon"  className="text-white" aria-hidden="true" />
      ) : (
        <Icon icon="MoonIcon"  className="text-dark" aria-hidden="true" />
      )}
    </button>
  );
};

