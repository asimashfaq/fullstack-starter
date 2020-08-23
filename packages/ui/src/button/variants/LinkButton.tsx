import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonProps } from '../types';

interface LinkButton extends ButtonProps {
  to: string;
}

const LinkButton: React.FC<LinkButton> = ({ ...props }) => <Link {...props} />;

export default LinkButton;
