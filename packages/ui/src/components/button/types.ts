import { IconName } from '../icon/types';

type ButtonType = 'success' | 'primary' | 'dark' | 'danger';

export type ButtonHandler = {
  result: (isSuccess: boolean) => void;
};
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
  color?: string;
  background?: string;
  label: string;
  icon?: IconName;
}
