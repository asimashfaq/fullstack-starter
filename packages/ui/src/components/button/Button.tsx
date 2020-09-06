import React, { useState, useImperativeHandle } from 'react';
import { ButtonProps, ButtonHandler } from './types';
import { motion } from 'framer-motion';
import { useUpdateEffect } from 'ahooks';
import * as BnStyles from './style';
import { Icon } from '../icon';

/* ------------------------------- animations ------------------------------- */

const tapAnimation = {
  tap: {
    scale: 0.85,
  },
};
const spinTransition = {
  loop: Infinity,
  ease: 'linear',
  duration: 1,
};

const ButtonBg = {
  hover: {
    scale: 20,
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    scale: 0,
    transition: {
      duration: 0.2,
    },
  },
  success: {
    scale: 20,
    transition: {
      duration: 0.2,
    },
  },
  error: {
    scale: 20,
    transition: {
      duration: 0.2,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                            Button Implementation                           */
/* -------------------------------------------------------------------------- */

const RefButton: React.ForwardRefRenderFunction<ButtonHandler, ButtonProps> = (
  { onClick, label, icon, variant = 'default', ...props },
  ref,
) => {
  const [isPending, setPending] = useState<boolean>(false);
  const [clickDisable, setClickDisable] = useState<boolean>(false);
  const [buttonState, setButtonState] = useState<string>('closed');

  const _handleEvent = (e, parentHandler) => {
    if (clickDisable) {
      return;
    }
    setPending(true);
    parentHandler ? parentHandler(e) : e;
  };
  useUpdateEffect(() => {
    if (isPending) {
      setClickDisable(true);
    }
  }, [isPending]);

  useImperativeHandle(ref, () => ({
    result: (isSuccess: boolean) => {
      setPending(false);
      setClickDisable(false);
      setButtonState(isSuccess ? 'success' : 'error');
    },
  }));
  return (
    <BnStyles.ButtonWrapper>
      <motion.div
        whileTap={'tap'}
        variants={tapAnimation}
        onClick={e => _handleEvent(e, onClick)}
        onMouseEnter={() => setButtonState('hover')}
        onMouseLeave={() => setButtonState('closed')}
      >
        <BnStyles.SButton
          variant={buttonState}
          label={label}
          animate={buttonState}
          type="button"
          {...props}
          className={`flex items-center px-4 py-2 focus:outline-none ${props.className}`}
        >
          <BnStyles.BgCircle
            variant={buttonState}
            initial={{ scale: 0 }}
            animate={buttonState}
            variants={ButtonBg}
          />
          {buttonState === 'error' ? (
            <BnStyles.ButtonLabel>Failed</BnStyles.ButtonLabel>
          ) : buttonState === 'success' ? (
            <BnStyles.ButtonLabel>Success</BnStyles.ButtonLabel>
          ) : (
            <BnStyles.ButtonContent>
              {isPending ? (
                <BnStyles.ButtonIcon
                  className={`pr-2 spin-origin`}
                  style={{ originX: 0.34 }}
                  animate={{ rotate: 360 }}
                  transition={spinTransition}
                >
                  <Icon icon="AiOutlineLoading3Quarters" />
                </BnStyles.ButtonIcon>
              ) : (
                <>{icon && <Icon icon={icon} className={`mr-2`} />}</>
              )}
              <BnStyles.ButtonLabel>{label}</BnStyles.ButtonLabel>
            </BnStyles.ButtonContent>
          )}
        </BnStyles.SButton>
      </motion.div>
    </BnStyles.ButtonWrapper>
  );
};

export const Button = React.memo(React.forwardRef(RefButton));
