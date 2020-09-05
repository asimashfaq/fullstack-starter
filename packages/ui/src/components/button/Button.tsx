import React, { useState, useImperativeHandle } from 'react';
import { ButtonProps, ButtonHandler } from './types';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useUpdateEffect } from 'ahooks';

import { Icon } from '../icon';

/* ------------------------------- animations ------------------------------- */

function getAnimationProps() {
  return {
    whileTap: {
      scale: 0.85,
    },
  };
}
const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 1
};

/* --------------------------------- styles --------------------------------- */

const SButton = styled.button<ButtonProps>`
  color: ${props => props.color};
  background: ${props => (props.disabled ? '#cccccc' : props.background)};
`;
const ButtonWrapper = styled.div`
  width: fit-content;
`;



const RefButton: React.ForwardRefRenderFunction<ButtonHandler,ButtonProps> =  ({ onClick, label, icon, ...props },ref) => {
  const [isPending, setPending] = useState<boolean>(false);
  const [clickDisable, setClickDisable] = useState<boolean>(false);
  const _handleEvent = (e, parentHandler) => {
    if(clickDisable){
      return;
    }
    setPending(true);
    parentHandler ? parentHandler(e) : e;
  };
  useUpdateEffect(() => {
    setClickDisable(true)
    return () => {
      // do something
    };
  }, [isPending]);
 
  useImperativeHandle(ref, () => ({

    result: (isSuccess: boolean) => {
      setPending(false);
    }

  }));
 

  return (
    <ButtonWrapper>
      <motion.div {...getAnimationProps()} onClick={e => _handleEvent(e, onClick)}>
        <SButton label={label} type="button" {...props} className={`flex items-center px-4 py-2 focus:outline-none ${props.className}`}>
          {isPending ? (
            <motion.div 
            className={`pr-2 spin-origin` }
            style={{originX: 0.34 }}
            animate={{ rotate: 360}}
             transition={spinTransition}

            >
              <Icon icon="AiOutlineLoading3Quarters"  />
            </motion.div>
          ) : (
            <>
              {icon && <Icon icon={icon} className={`mr-2`} />}
            </>
          )}
          {label}
        </SButton>
      </motion.div>
    </ButtonWrapper>
  );
};

export const Button = React.forwardRef(RefButton);
