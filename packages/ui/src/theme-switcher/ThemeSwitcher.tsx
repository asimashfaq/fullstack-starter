import React, { useContext } from 'react';
import { ButtonProps } from '../components/button/types';
import { ThemeContext } from '../context/theme.context';
import { Icon } from '../components/icon';

export const ThemeSwitchButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      {...props}
      onClick={toggleTheme}
      className="mb-3  flex items-center shadow bg-gray-400  dark:bg-black dark:text-white px-4 py-2 text-black hover:bg-gray-100"
    >
      {theme === 'dark' ? (
        <Icon icon="SunIcon"  className="text-white" aria-hidden="true" />
      ) : (
        <Icon icon="MoonIcon"  className="text-dark" aria-hidden="true" />
      )}
    </button>
  );
};

