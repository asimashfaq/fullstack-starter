import React from 'react';
import { ButtonProps } from '../types';
import { motion } from 'framer-motion';
import styled from 'styled-components';

function getAnimationProps() {
  return {
    whileTap: {
      scale: 0.85,
    },
  };
}
const Button = styled.button<ButtonProps>`
  color: ${props => props.color};
  background: ${props => (props.disabled ? '#cccccc' : props.background)};
`;
const ButtonWrapper = styled.div`
  width: fit-content;
`;
const StandardButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <ButtonWrapper>
    <motion.div {...getAnimationProps()}>
      <Button type="button" {...props} className={`flex items-center px-4 py-2 focus:outline-none ${props.className}`}>
        {children}
      </Button>
    </motion.div>
  </ButtonWrapper>
);

export default StandardButton;
