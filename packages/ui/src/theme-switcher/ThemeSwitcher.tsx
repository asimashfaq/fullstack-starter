import React, { useContext } from 'react';
import { ButtonProps } from '../button/types';
import { SunIcon, MoonIcon } from '@bcdapps/icons';
import { ThemeContext } from '../context/theme.context';

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
        <SunIcon className="text-white" aria-hidden="true" />
      ) : (
        <MoonIcon className="text-dark" aria-hidden="true" />
      )}
    </button>
  );
};

