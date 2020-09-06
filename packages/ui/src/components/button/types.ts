import { IconName } from '../icon/types';

type ButtonType = 'default' | 'primary' | 'success' | 'warning' | string;

export type ButtonHandler = {
  result: (isSuccess: boolean) => void;
};

export interface ButtonProps {
  to?: string;
  onClick?: (e) => void;
  disabled?: boolean;
  className?: string;
  color?: string;
  label: string;
  icon?: IconName;
  variant?: ButtonType;
}
