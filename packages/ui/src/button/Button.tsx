import React from 'react';
import classNames from 'classnames';
import { ButtonProps, ButtonDesignProps } from './types';
import { LinkButton, StandardButton } from './variants';
import '../style.css';
export const Button: React.FC<ButtonProps & ButtonDesignProps> = ({
  className,
  to,
  disabled,
  rounded,
  inverted,
  type,
  ...props
}) => {
  const mappedClasses = classNames(className);

  return to ? (
    <LinkButton to={to} className={mappedClasses} {...props} />
  ) : (
    <StandardButton className={mappedClasses} {...props} />
  );
};
