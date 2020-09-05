import { ReactNode } from 'react';

type ButtonType = 'success' | 'primary' | 'dark' | 'danger';

export interface ButtonDesignProps {
  rounded?: boolean;
  inverted?: boolean;
  type?: ButtonType;
}

export interface ButtonProps {
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  color?: string;
  background?: string;
}
