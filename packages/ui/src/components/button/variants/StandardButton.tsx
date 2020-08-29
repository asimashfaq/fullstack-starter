import React from 'react';
import { ButtonProps } from '../types';
import { HomeIcon } from '@bcdapps/icons';

const StandardButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    type="button"
    {...props}
    className="mb-3 rounded-full flex items-center shadow bg-gray-400  dark:bg-black px-4 py-2 text-black hover:bg-gray-100"
  >
    <HomeIcon />
    {children}
  </button>
);

export default StandardButton;
