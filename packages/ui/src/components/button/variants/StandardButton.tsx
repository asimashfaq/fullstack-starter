import React from 'react';
import { ButtonProps } from '../types';

const StandardButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    type="button"
    {...props}
    className={`flex items-center px-4 py-2 focus:outline-none ${props.className}`}
  >
    {children}
  </button>
);

export default StandardButton;
